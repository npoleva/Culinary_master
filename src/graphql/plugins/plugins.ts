import { Plugin } from '@nestjs/apollo';
import {
    ApolloServerPlugin,
    GraphQLRequestContextDidResolveOperation,
    GraphQLRequestListener,
    BaseContext,
} from '@apollo/server';
import { GraphQLError } from 'graphql';
import {
    fieldExtensionsEstimator,
    getComplexity,
    simpleEstimator,
} from 'graphql-query-complexity';
import { GraphQLSchemaHost } from '@nestjs/graphql';

@Plugin()
export class ComplexityPlugin implements ApolloServerPlugin<BaseContext> {
    constructor(private readonly gqlSchemaHost: GraphQLSchemaHost) {}

    public requestDidStart(): Promise<GraphQLRequestListener<BaseContext>> {
        const maxComplexity = 100;
        const { schema } = this.gqlSchemaHost;

        const listener: GraphQLRequestListener<BaseContext> = {
            didResolveOperation(
                context: GraphQLRequestContextDidResolveOperation<BaseContext>,
            ): Promise<void> {
                const {
                    request: { operationName, variables },
                    document,
                } = context;

                if (operationName === 'IntrospectionQuery') {
                    return Promise.resolve();
                }

                const complexity = getComplexity({
                    schema,
                    operationName,
                    query: document,
                    variables,
                    estimators: [
                        fieldExtensionsEstimator(),
                        simpleEstimator({ defaultComplexity: 1 }),
                    ],
                });

                if (complexity > maxComplexity) {
                    throw new GraphQLError("Too long query! Please shorten it");
                }

                return Promise.resolve();
            },
        };

        return Promise.resolve(listener);
    }
}
