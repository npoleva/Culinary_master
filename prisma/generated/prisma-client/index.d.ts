
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model IngredientItemVO
 * 
 */
export type IngredientItemVO = $Result.DefaultSelection<Prisma.$IngredientItemVOPayload>
/**
 * Model ShoppingList
 * 
 */
export type ShoppingList = $Result.DefaultSelection<Prisma.$ShoppingListPayload>
/**
 * Model ShoppingListItemVO
 * 
 */
export type ShoppingListItemVO = $Result.DefaultSelection<Prisma.$ShoppingListItemVOPayload>
/**
 * Model RecipeReview
 * 
 */
export type RecipeReview = $Result.DefaultSelection<Prisma.$RecipeReviewPayload>
/**
 * Model Favourites
 * 
 */
export type Favourites = $Result.DefaultSelection<Prisma.$FavouritesPayload>
/**
 * Model Award
 * 
 */
export type Award = $Result.DefaultSelection<Prisma.$AwardPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KitchenType: {
  ASIAN: 'ASIAN',
  EUROPEAN: 'EUROPEAN',
  AMERICAN: 'AMERICAN',
  MEDITERRANEAN: 'MEDITERRANEAN',
  RUSSIAN: 'RUSSIAN',
  CHINESE: 'CHINESE',
  PORTUGUESE: 'PORTUGUESE',
  HUNGARIAN: 'HUNGARIAN',
  ITALIAN: 'ITALIAN',
  SPANISH: 'SPANISH',
  OTHER: 'OTHER'
};

export type KitchenType = (typeof KitchenType)[keyof typeof KitchenType]

}

export type KitchenType = $Enums.KitchenType

export const KitchenType: typeof $Enums.KitchenType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredientItemVO`: Exposes CRUD operations for the **IngredientItemVO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngredientItemVOS
    * const ingredientItemVOS = await prisma.ingredientItemVO.findMany()
    * ```
    */
  get ingredientItemVO(): Prisma.IngredientItemVODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingList`: Exposes CRUD operations for the **ShoppingList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingLists
    * const shoppingLists = await prisma.shoppingList.findMany()
    * ```
    */
  get shoppingList(): Prisma.ShoppingListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shoppingListItemVO`: Exposes CRUD operations for the **ShoppingListItemVO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShoppingListItemVOS
    * const shoppingListItemVOS = await prisma.shoppingListItemVO.findMany()
    * ```
    */
  get shoppingListItemVO(): Prisma.ShoppingListItemVODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipeReview`: Exposes CRUD operations for the **RecipeReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeReviews
    * const recipeReviews = await prisma.recipeReview.findMany()
    * ```
    */
  get recipeReview(): Prisma.RecipeReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favourites`: Exposes CRUD operations for the **Favourites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourites
    * const favourites = await prisma.favourites.findMany()
    * ```
    */
  get favourites(): Prisma.FavouritesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award`: Exposes CRUD operations for the **Award** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Awards
    * const awards = await prisma.award.findMany()
    * ```
    */
  get award(): Prisma.AwardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Recipe: 'Recipe',
    Ingredient: 'Ingredient',
    IngredientItemVO: 'IngredientItemVO',
    ShoppingList: 'ShoppingList',
    ShoppingListItemVO: 'ShoppingListItemVO',
    RecipeReview: 'RecipeReview',
    Favourites: 'Favourites',
    Award: 'Award'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "recipe" | "ingredient" | "ingredientItemVO" | "shoppingList" | "shoppingListItemVO" | "recipeReview" | "favourites" | "award"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      IngredientItemVO: {
        payload: Prisma.$IngredientItemVOPayload<ExtArgs>
        fields: Prisma.IngredientItemVOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientItemVOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientItemVOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>
          }
          findFirst: {
            args: Prisma.IngredientItemVOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientItemVOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>
          }
          findMany: {
            args: Prisma.IngredientItemVOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>[]
          }
          create: {
            args: Prisma.IngredientItemVOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>
          }
          createMany: {
            args: Prisma.IngredientItemVOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientItemVOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>[]
          }
          delete: {
            args: Prisma.IngredientItemVODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>
          }
          update: {
            args: Prisma.IngredientItemVOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>
          }
          deleteMany: {
            args: Prisma.IngredientItemVODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientItemVOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientItemVOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>[]
          }
          upsert: {
            args: Prisma.IngredientItemVOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientItemVOPayload>
          }
          aggregate: {
            args: Prisma.IngredientItemVOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredientItemVO>
          }
          groupBy: {
            args: Prisma.IngredientItemVOGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientItemVOGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientItemVOCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientItemVOCountAggregateOutputType> | number
          }
        }
      }
      ShoppingList: {
        payload: Prisma.$ShoppingListPayload<ExtArgs>
        fields: Prisma.ShoppingListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          findFirst: {
            args: Prisma.ShoppingListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          findMany: {
            args: Prisma.ShoppingListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          create: {
            args: Prisma.ShoppingListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          createMany: {
            args: Prisma.ShoppingListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          delete: {
            args: Prisma.ShoppingListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          update: {
            args: Prisma.ShoppingListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingList>
          }
          groupBy: {
            args: Prisma.ShoppingListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingListCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListCountAggregateOutputType> | number
          }
        }
      }
      ShoppingListItemVO: {
        payload: Prisma.$ShoppingListItemVOPayload<ExtArgs>
        fields: Prisma.ShoppingListItemVOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShoppingListItemVOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShoppingListItemVOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>
          }
          findFirst: {
            args: Prisma.ShoppingListItemVOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShoppingListItemVOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>
          }
          findMany: {
            args: Prisma.ShoppingListItemVOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>[]
          }
          create: {
            args: Prisma.ShoppingListItemVOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>
          }
          createMany: {
            args: Prisma.ShoppingListItemVOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShoppingListItemVOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>[]
          }
          delete: {
            args: Prisma.ShoppingListItemVODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>
          }
          update: {
            args: Prisma.ShoppingListItemVOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>
          }
          deleteMany: {
            args: Prisma.ShoppingListItemVODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShoppingListItemVOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShoppingListItemVOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>[]
          }
          upsert: {
            args: Prisma.ShoppingListItemVOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShoppingListItemVOPayload>
          }
          aggregate: {
            args: Prisma.ShoppingListItemVOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShoppingListItemVO>
          }
          groupBy: {
            args: Prisma.ShoppingListItemVOGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListItemVOGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShoppingListItemVOCountArgs<ExtArgs>
            result: $Utils.Optional<ShoppingListItemVOCountAggregateOutputType> | number
          }
        }
      }
      RecipeReview: {
        payload: Prisma.$RecipeReviewPayload<ExtArgs>
        fields: Prisma.RecipeReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>
          }
          findFirst: {
            args: Prisma.RecipeReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>
          }
          findMany: {
            args: Prisma.RecipeReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>[]
          }
          create: {
            args: Prisma.RecipeReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>
          }
          createMany: {
            args: Prisma.RecipeReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>[]
          }
          delete: {
            args: Prisma.RecipeReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>
          }
          update: {
            args: Prisma.RecipeReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>
          }
          deleteMany: {
            args: Prisma.RecipeReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>[]
          }
          upsert: {
            args: Prisma.RecipeReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeReviewPayload>
          }
          aggregate: {
            args: Prisma.RecipeReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeReview>
          }
          groupBy: {
            args: Prisma.RecipeReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeReviewCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeReviewCountAggregateOutputType> | number
          }
        }
      }
      Favourites: {
        payload: Prisma.$FavouritesPayload<ExtArgs>
        fields: Prisma.FavouritesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouritesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouritesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          findFirst: {
            args: Prisma.FavouritesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouritesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          findMany: {
            args: Prisma.FavouritesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>[]
          }
          create: {
            args: Prisma.FavouritesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          createMany: {
            args: Prisma.FavouritesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavouritesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>[]
          }
          delete: {
            args: Prisma.FavouritesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          update: {
            args: Prisma.FavouritesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          deleteMany: {
            args: Prisma.FavouritesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouritesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavouritesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>[]
          }
          upsert: {
            args: Prisma.FavouritesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          aggregate: {
            args: Prisma.FavouritesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourites>
          }
          groupBy: {
            args: Prisma.FavouritesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouritesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavouritesCountArgs<ExtArgs>
            result: $Utils.Optional<FavouritesCountAggregateOutputType> | number
          }
        }
      }
      Award: {
        payload: Prisma.$AwardPayload<ExtArgs>
        fields: Prisma.AwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findFirst: {
            args: Prisma.AwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findMany: {
            args: Prisma.AwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          create: {
            args: Prisma.AwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          createMany: {
            args: Prisma.AwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          delete: {
            args: Prisma.AwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          update: {
            args: Prisma.AwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          deleteMany: {
            args: Prisma.AwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          upsert: {
            args: Prisma.AwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          aggregate: {
            args: Prisma.AwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward>
          }
          groupBy: {
            args: Prisma.AwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwardCountArgs<ExtArgs>
            result: $Utils.Optional<AwardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    recipe?: RecipeOmit
    ingredient?: IngredientOmit
    ingredientItemVO?: IngredientItemVOOmit
    shoppingList?: ShoppingListOmit
    shoppingListItemVO?: ShoppingListItemVOOmit
    recipeReview?: RecipeReviewOmit
    favourites?: FavouritesOmit
    award?: AwardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    recipes: number
    ratings: number
    shoppingLists: number
    favourites: number
    awards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    shoppingLists?: boolean | UserCountOutputTypeCountShoppingListsArgs
    favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
    awards?: boolean | UserCountOutputTypeCountAwardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShoppingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAwardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    ingredientItems: number
    favourites: number
    ratings: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientItems?: boolean | RecipeCountOutputTypeCountIngredientItemsArgs
    favourites?: boolean | RecipeCountOutputTypeCountFavouritesArgs
    ratings?: boolean | RecipeCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientItemVOWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritesWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeReviewWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    shoppingListItems: number
    IngredientItemVO: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingListItems?: boolean | IngredientCountOutputTypeCountShoppingListItemsArgs
    IngredientItemVO?: boolean | IngredientCountOutputTypeCountIngredientItemVOArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountShoppingListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListItemVOWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountIngredientItemVOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientItemVOWhereInput
  }


  /**
   * Count Type ShoppingListCountOutputType
   */

  export type ShoppingListCountOutputType = {
    shoppingListItems: number
  }

  export type ShoppingListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingListItems?: boolean | ShoppingListCountOutputTypeCountShoppingListItemsArgs
  }

  // Custom InputTypes
  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListCountOutputType
     */
    select?: ShoppingListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShoppingListCountOutputType without action
   */
  export type ShoppingListCountOutputTypeCountShoppingListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListItemVOWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    recipes?: boolean | User$recipesArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    shoppingLists?: boolean | User$shoppingListsArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    awards?: boolean | User$awardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | User$recipesArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    shoppingLists?: boolean | User$shoppingListsArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    awards?: boolean | User$awardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      ratings: Prisma.$RecipeReviewPayload<ExtArgs>[]
      shoppingLists: Prisma.$ShoppingListPayload<ExtArgs>[]
      favourites: Prisma.$FavouritesPayload<ExtArgs>[]
      awards: Prisma.$AwardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends User$recipesArgs<ExtArgs> = {}>(args?: Subset<T, User$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shoppingLists<T extends User$shoppingListsArgs<ExtArgs> = {}>(args?: Subset<T, User$shoppingListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourites<T extends User$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awards<T extends User$awardsArgs<ExtArgs> = {}>(args?: Subset<T, User$awardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.recipes
   */
  export type User$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    where?: RecipeReviewWhereInput
    orderBy?: RecipeReviewOrderByWithRelationInput | RecipeReviewOrderByWithRelationInput[]
    cursor?: RecipeReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeReviewScalarFieldEnum | RecipeReviewScalarFieldEnum[]
  }

  /**
   * User.shoppingLists
   */
  export type User$shoppingListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    where?: ShoppingListWhereInput
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    cursor?: ShoppingListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * User.favourites
   */
  export type User$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    where?: FavouritesWhereInput
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    cursor?: FavouritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * User.awards
   */
  export type User$awardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    cursor?: AwardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    cookingTime: number | null
    calories: number | null
    ingredientsCount: number | null
    rating: number | null
  }

  export type RecipeSumAggregateOutputType = {
    cookingTime: number | null
    calories: number | null
    ingredientsCount: number | null
    rating: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    kitchenType: $Enums.KitchenType | null
    cookingTime: number | null
    calories: number | null
    authorId: string | null
    ingredientsCount: number | null
    rating: number | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    kitchenType: $Enums.KitchenType | null
    cookingTime: number | null
    calories: number | null
    authorId: string | null
    ingredientsCount: number | null
    rating: number | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    kitchenType: number
    cookingTime: number
    calories: number
    authorId: number
    ingredientsCount: number
    rating: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    cookingTime?: true
    calories?: true
    ingredientsCount?: true
    rating?: true
  }

  export type RecipeSumAggregateInputType = {
    cookingTime?: true
    calories?: true
    ingredientsCount?: true
    rating?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    kitchenType?: true
    cookingTime?: true
    calories?: true
    authorId?: true
    ingredientsCount?: true
    rating?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    kitchenType?: true
    cookingTime?: true
    calories?: true
    authorId?: true
    ingredientsCount?: true
    rating?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    kitchenType?: true
    cookingTime?: true
    calories?: true
    authorId?: true
    ingredientsCount?: true
    rating?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    authorId: string
    ingredientsCount: number
    rating: number
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    kitchenType?: boolean
    cookingTime?: boolean
    calories?: boolean
    authorId?: boolean
    ingredientsCount?: boolean
    rating?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    ingredientItems?: boolean | Recipe$ingredientItemsArgs<ExtArgs>
    favourites?: boolean | Recipe$favouritesArgs<ExtArgs>
    ratings?: boolean | Recipe$ratingsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    kitchenType?: boolean
    cookingTime?: boolean
    calories?: boolean
    authorId?: boolean
    ingredientsCount?: boolean
    rating?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    kitchenType?: boolean
    cookingTime?: boolean
    calories?: boolean
    authorId?: boolean
    ingredientsCount?: boolean
    rating?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    kitchenType?: boolean
    cookingTime?: boolean
    calories?: boolean
    authorId?: boolean
    ingredientsCount?: boolean
    rating?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "kitchenType" | "cookingTime" | "calories" | "authorId" | "ingredientsCount" | "rating", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    ingredientItems?: boolean | Recipe$ingredientItemsArgs<ExtArgs>
    favourites?: boolean | Recipe$favouritesArgs<ExtArgs>
    ratings?: boolean | Recipe$ratingsArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      ingredientItems: Prisma.$IngredientItemVOPayload<ExtArgs>[]
      favourites: Prisma.$FavouritesPayload<ExtArgs>[]
      ratings: Prisma.$RecipeReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      kitchenType: $Enums.KitchenType
      cookingTime: number
      calories: number
      authorId: string
      ingredientsCount: number
      rating: number
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredientItems<T extends Recipe$ingredientItemsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourites<T extends Recipe$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Recipe$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe model
   */
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly kitchenType: FieldRef<"Recipe", 'KitchenType'>
    readonly cookingTime: FieldRef<"Recipe", 'Int'>
    readonly calories: FieldRef<"Recipe", 'Int'>
    readonly authorId: FieldRef<"Recipe", 'String'>
    readonly ingredientsCount: FieldRef<"Recipe", 'Int'>
    readonly rating: FieldRef<"Recipe", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.ingredientItems
   */
  export type Recipe$ingredientItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    where?: IngredientItemVOWhereInput
    orderBy?: IngredientItemVOOrderByWithRelationInput | IngredientItemVOOrderByWithRelationInput[]
    cursor?: IngredientItemVOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientItemVOScalarFieldEnum | IngredientItemVOScalarFieldEnum[]
  }

  /**
   * Recipe.favourites
   */
  export type Recipe$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    where?: FavouritesWhereInput
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    cursor?: FavouritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * Recipe.ratings
   */
  export type Recipe$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    where?: RecipeReviewWhereInput
    orderBy?: RecipeReviewOrderByWithRelationInput | RecipeReviewOrderByWithRelationInput[]
    cursor?: RecipeReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeReviewScalarFieldEnum | RecipeReviewScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    name: string | null
    defaultUnit: string | null
    category: string | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    defaultUnit: string | null
    category: string | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    defaultUnit: number
    category: number
    _all: number
  }


  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    defaultUnit?: true
    category?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    defaultUnit?: true
    category?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    defaultUnit?: true
    category?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    name: string
    defaultUnit: string
    category: string
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    defaultUnit?: boolean
    category?: boolean
    shoppingListItems?: boolean | Ingredient$shoppingListItemsArgs<ExtArgs>
    IngredientItemVO?: boolean | Ingredient$IngredientItemVOArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    defaultUnit?: boolean
    category?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    defaultUnit?: boolean
    category?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    defaultUnit?: boolean
    category?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "defaultUnit" | "category", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingListItems?: boolean | Ingredient$shoppingListItemsArgs<ExtArgs>
    IngredientItemVO?: boolean | Ingredient$IngredientItemVOArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      shoppingListItems: Prisma.$ShoppingListItemVOPayload<ExtArgs>[]
      IngredientItemVO: Prisma.$IngredientItemVOPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      defaultUnit: string
      category: string
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shoppingListItems<T extends Ingredient$shoppingListItemsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$shoppingListItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    IngredientItemVO<T extends Ingredient$IngredientItemVOArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$IngredientItemVOArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly defaultUnit: FieldRef<"Ingredient", 'String'>
    readonly category: FieldRef<"Ingredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.shoppingListItems
   */
  export type Ingredient$shoppingListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    where?: ShoppingListItemVOWhereInput
    orderBy?: ShoppingListItemVOOrderByWithRelationInput | ShoppingListItemVOOrderByWithRelationInput[]
    cursor?: ShoppingListItemVOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListItemVOScalarFieldEnum | ShoppingListItemVOScalarFieldEnum[]
  }

  /**
   * Ingredient.IngredientItemVO
   */
  export type Ingredient$IngredientItemVOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    where?: IngredientItemVOWhereInput
    orderBy?: IngredientItemVOOrderByWithRelationInput | IngredientItemVOOrderByWithRelationInput[]
    cursor?: IngredientItemVOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientItemVOScalarFieldEnum | IngredientItemVOScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model IngredientItemVO
   */

  export type AggregateIngredientItemVO = {
    _count: IngredientItemVOCountAggregateOutputType | null
    _avg: IngredientItemVOAvgAggregateOutputType | null
    _sum: IngredientItemVOSumAggregateOutputType | null
    _min: IngredientItemVOMinAggregateOutputType | null
    _max: IngredientItemVOMaxAggregateOutputType | null
  }

  export type IngredientItemVOAvgAggregateOutputType = {
    quantity: number | null
  }

  export type IngredientItemVOSumAggregateOutputType = {
    quantity: number | null
  }

  export type IngredientItemVOMinAggregateOutputType = {
    id: string | null
    recipeId: string | null
    ingredientId: string | null
    quantity: number | null
    unit: string | null
  }

  export type IngredientItemVOMaxAggregateOutputType = {
    id: string | null
    recipeId: string | null
    ingredientId: string | null
    quantity: number | null
    unit: string | null
  }

  export type IngredientItemVOCountAggregateOutputType = {
    id: number
    recipeId: number
    ingredientId: number
    quantity: number
    unit: number
    _all: number
  }


  export type IngredientItemVOAvgAggregateInputType = {
    quantity?: true
  }

  export type IngredientItemVOSumAggregateInputType = {
    quantity?: true
  }

  export type IngredientItemVOMinAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
  }

  export type IngredientItemVOMaxAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
  }

  export type IngredientItemVOCountAggregateInputType = {
    id?: true
    recipeId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    _all?: true
  }

  export type IngredientItemVOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientItemVO to aggregate.
     */
    where?: IngredientItemVOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientItemVOS to fetch.
     */
    orderBy?: IngredientItemVOOrderByWithRelationInput | IngredientItemVOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientItemVOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientItemVOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientItemVOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngredientItemVOS
    **/
    _count?: true | IngredientItemVOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientItemVOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientItemVOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientItemVOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientItemVOMaxAggregateInputType
  }

  export type GetIngredientItemVOAggregateType<T extends IngredientItemVOAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientItemVO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientItemVO[P]>
      : GetScalarType<T[P], AggregateIngredientItemVO[P]>
  }




  export type IngredientItemVOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientItemVOWhereInput
    orderBy?: IngredientItemVOOrderByWithAggregationInput | IngredientItemVOOrderByWithAggregationInput[]
    by: IngredientItemVOScalarFieldEnum[] | IngredientItemVOScalarFieldEnum
    having?: IngredientItemVOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientItemVOCountAggregateInputType | true
    _avg?: IngredientItemVOAvgAggregateInputType
    _sum?: IngredientItemVOSumAggregateInputType
    _min?: IngredientItemVOMinAggregateInputType
    _max?: IngredientItemVOMaxAggregateInputType
  }

  export type IngredientItemVOGroupByOutputType = {
    id: string
    recipeId: string
    ingredientId: string
    quantity: number
    unit: string
    _count: IngredientItemVOCountAggregateOutputType | null
    _avg: IngredientItemVOAvgAggregateOutputType | null
    _sum: IngredientItemVOSumAggregateOutputType | null
    _min: IngredientItemVOMinAggregateOutputType | null
    _max: IngredientItemVOMaxAggregateOutputType | null
  }

  type GetIngredientItemVOGroupByPayload<T extends IngredientItemVOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientItemVOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientItemVOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientItemVOGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientItemVOGroupByOutputType[P]>
        }
      >
    >


  export type IngredientItemVOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientItemVO"]>

  export type IngredientItemVOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientItemVO"]>

  export type IngredientItemVOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientItemVO"]>

  export type IngredientItemVOSelectScalar = {
    id?: boolean
    recipeId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
  }

  export type IngredientItemVOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipeId" | "ingredientId" | "quantity" | "unit", ExtArgs["result"]["ingredientItemVO"]>
  export type IngredientItemVOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type IngredientItemVOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type IngredientItemVOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $IngredientItemVOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngredientItemVO"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipeId: string
      ingredientId: string
      quantity: number
      unit: string
    }, ExtArgs["result"]["ingredientItemVO"]>
    composites: {}
  }

  type IngredientItemVOGetPayload<S extends boolean | null | undefined | IngredientItemVODefaultArgs> = $Result.GetResult<Prisma.$IngredientItemVOPayload, S>

  type IngredientItemVOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientItemVOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientItemVOCountAggregateInputType | true
    }

  export interface IngredientItemVODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngredientItemVO'], meta: { name: 'IngredientItemVO' } }
    /**
     * Find zero or one IngredientItemVO that matches the filter.
     * @param {IngredientItemVOFindUniqueArgs} args - Arguments to find a IngredientItemVO
     * @example
     * // Get one IngredientItemVO
     * const ingredientItemVO = await prisma.ingredientItemVO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientItemVOFindUniqueArgs>(args: SelectSubset<T, IngredientItemVOFindUniqueArgs<ExtArgs>>): Prisma__IngredientItemVOClient<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IngredientItemVO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientItemVOFindUniqueOrThrowArgs} args - Arguments to find a IngredientItemVO
     * @example
     * // Get one IngredientItemVO
     * const ingredientItemVO = await prisma.ingredientItemVO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientItemVOFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientItemVOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientItemVOClient<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientItemVO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientItemVOFindFirstArgs} args - Arguments to find a IngredientItemVO
     * @example
     * // Get one IngredientItemVO
     * const ingredientItemVO = await prisma.ingredientItemVO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientItemVOFindFirstArgs>(args?: SelectSubset<T, IngredientItemVOFindFirstArgs<ExtArgs>>): Prisma__IngredientItemVOClient<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IngredientItemVO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientItemVOFindFirstOrThrowArgs} args - Arguments to find a IngredientItemVO
     * @example
     * // Get one IngredientItemVO
     * const ingredientItemVO = await prisma.ingredientItemVO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientItemVOFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientItemVOFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientItemVOClient<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IngredientItemVOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientItemVOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngredientItemVOS
     * const ingredientItemVOS = await prisma.ingredientItemVO.findMany()
     * 
     * // Get first 10 IngredientItemVOS
     * const ingredientItemVOS = await prisma.ingredientItemVO.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientItemVOWithIdOnly = await prisma.ingredientItemVO.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientItemVOFindManyArgs>(args?: SelectSubset<T, IngredientItemVOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IngredientItemVO.
     * @param {IngredientItemVOCreateArgs} args - Arguments to create a IngredientItemVO.
     * @example
     * // Create one IngredientItemVO
     * const IngredientItemVO = await prisma.ingredientItemVO.create({
     *   data: {
     *     // ... data to create a IngredientItemVO
     *   }
     * })
     * 
     */
    create<T extends IngredientItemVOCreateArgs>(args: SelectSubset<T, IngredientItemVOCreateArgs<ExtArgs>>): Prisma__IngredientItemVOClient<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IngredientItemVOS.
     * @param {IngredientItemVOCreateManyArgs} args - Arguments to create many IngredientItemVOS.
     * @example
     * // Create many IngredientItemVOS
     * const ingredientItemVO = await prisma.ingredientItemVO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientItemVOCreateManyArgs>(args?: SelectSubset<T, IngredientItemVOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngredientItemVOS and returns the data saved in the database.
     * @param {IngredientItemVOCreateManyAndReturnArgs} args - Arguments to create many IngredientItemVOS.
     * @example
     * // Create many IngredientItemVOS
     * const ingredientItemVO = await prisma.ingredientItemVO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngredientItemVOS and only return the `id`
     * const ingredientItemVOWithIdOnly = await prisma.ingredientItemVO.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientItemVOCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientItemVOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IngredientItemVO.
     * @param {IngredientItemVODeleteArgs} args - Arguments to delete one IngredientItemVO.
     * @example
     * // Delete one IngredientItemVO
     * const IngredientItemVO = await prisma.ingredientItemVO.delete({
     *   where: {
     *     // ... filter to delete one IngredientItemVO
     *   }
     * })
     * 
     */
    delete<T extends IngredientItemVODeleteArgs>(args: SelectSubset<T, IngredientItemVODeleteArgs<ExtArgs>>): Prisma__IngredientItemVOClient<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IngredientItemVO.
     * @param {IngredientItemVOUpdateArgs} args - Arguments to update one IngredientItemVO.
     * @example
     * // Update one IngredientItemVO
     * const ingredientItemVO = await prisma.ingredientItemVO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientItemVOUpdateArgs>(args: SelectSubset<T, IngredientItemVOUpdateArgs<ExtArgs>>): Prisma__IngredientItemVOClient<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IngredientItemVOS.
     * @param {IngredientItemVODeleteManyArgs} args - Arguments to filter IngredientItemVOS to delete.
     * @example
     * // Delete a few IngredientItemVOS
     * const { count } = await prisma.ingredientItemVO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientItemVODeleteManyArgs>(args?: SelectSubset<T, IngredientItemVODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientItemVOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientItemVOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngredientItemVOS
     * const ingredientItemVO = await prisma.ingredientItemVO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientItemVOUpdateManyArgs>(args: SelectSubset<T, IngredientItemVOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngredientItemVOS and returns the data updated in the database.
     * @param {IngredientItemVOUpdateManyAndReturnArgs} args - Arguments to update many IngredientItemVOS.
     * @example
     * // Update many IngredientItemVOS
     * const ingredientItemVO = await prisma.ingredientItemVO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IngredientItemVOS and only return the `id`
     * const ingredientItemVOWithIdOnly = await prisma.ingredientItemVO.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientItemVOUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientItemVOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IngredientItemVO.
     * @param {IngredientItemVOUpsertArgs} args - Arguments to update or create a IngredientItemVO.
     * @example
     * // Update or create a IngredientItemVO
     * const ingredientItemVO = await prisma.ingredientItemVO.upsert({
     *   create: {
     *     // ... data to create a IngredientItemVO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngredientItemVO we want to update
     *   }
     * })
     */
    upsert<T extends IngredientItemVOUpsertArgs>(args: SelectSubset<T, IngredientItemVOUpsertArgs<ExtArgs>>): Prisma__IngredientItemVOClient<$Result.GetResult<Prisma.$IngredientItemVOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IngredientItemVOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientItemVOCountArgs} args - Arguments to filter IngredientItemVOS to count.
     * @example
     * // Count the number of IngredientItemVOS
     * const count = await prisma.ingredientItemVO.count({
     *   where: {
     *     // ... the filter for the IngredientItemVOS we want to count
     *   }
     * })
    **/
    count<T extends IngredientItemVOCountArgs>(
      args?: Subset<T, IngredientItemVOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientItemVOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngredientItemVO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientItemVOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientItemVOAggregateArgs>(args: Subset<T, IngredientItemVOAggregateArgs>): Prisma.PrismaPromise<GetIngredientItemVOAggregateType<T>>

    /**
     * Group by IngredientItemVO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientItemVOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientItemVOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientItemVOGroupByArgs['orderBy'] }
        : { orderBy?: IngredientItemVOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientItemVOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientItemVOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngredientItemVO model
   */
  readonly fields: IngredientItemVOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngredientItemVO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientItemVOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IngredientItemVO model
   */
  interface IngredientItemVOFieldRefs {
    readonly id: FieldRef<"IngredientItemVO", 'String'>
    readonly recipeId: FieldRef<"IngredientItemVO", 'String'>
    readonly ingredientId: FieldRef<"IngredientItemVO", 'String'>
    readonly quantity: FieldRef<"IngredientItemVO", 'Float'>
    readonly unit: FieldRef<"IngredientItemVO", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IngredientItemVO findUnique
   */
  export type IngredientItemVOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * Filter, which IngredientItemVO to fetch.
     */
    where: IngredientItemVOWhereUniqueInput
  }

  /**
   * IngredientItemVO findUniqueOrThrow
   */
  export type IngredientItemVOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * Filter, which IngredientItemVO to fetch.
     */
    where: IngredientItemVOWhereUniqueInput
  }

  /**
   * IngredientItemVO findFirst
   */
  export type IngredientItemVOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * Filter, which IngredientItemVO to fetch.
     */
    where?: IngredientItemVOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientItemVOS to fetch.
     */
    orderBy?: IngredientItemVOOrderByWithRelationInput | IngredientItemVOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientItemVOS.
     */
    cursor?: IngredientItemVOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientItemVOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientItemVOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientItemVOS.
     */
    distinct?: IngredientItemVOScalarFieldEnum | IngredientItemVOScalarFieldEnum[]
  }

  /**
   * IngredientItemVO findFirstOrThrow
   */
  export type IngredientItemVOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * Filter, which IngredientItemVO to fetch.
     */
    where?: IngredientItemVOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientItemVOS to fetch.
     */
    orderBy?: IngredientItemVOOrderByWithRelationInput | IngredientItemVOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngredientItemVOS.
     */
    cursor?: IngredientItemVOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientItemVOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientItemVOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngredientItemVOS.
     */
    distinct?: IngredientItemVOScalarFieldEnum | IngredientItemVOScalarFieldEnum[]
  }

  /**
   * IngredientItemVO findMany
   */
  export type IngredientItemVOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * Filter, which IngredientItemVOS to fetch.
     */
    where?: IngredientItemVOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngredientItemVOS to fetch.
     */
    orderBy?: IngredientItemVOOrderByWithRelationInput | IngredientItemVOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngredientItemVOS.
     */
    cursor?: IngredientItemVOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngredientItemVOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngredientItemVOS.
     */
    skip?: number
    distinct?: IngredientItemVOScalarFieldEnum | IngredientItemVOScalarFieldEnum[]
  }

  /**
   * IngredientItemVO create
   */
  export type IngredientItemVOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * The data needed to create a IngredientItemVO.
     */
    data: XOR<IngredientItemVOCreateInput, IngredientItemVOUncheckedCreateInput>
  }

  /**
   * IngredientItemVO createMany
   */
  export type IngredientItemVOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngredientItemVOS.
     */
    data: IngredientItemVOCreateManyInput | IngredientItemVOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IngredientItemVO createManyAndReturn
   */
  export type IngredientItemVOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * The data used to create many IngredientItemVOS.
     */
    data: IngredientItemVOCreateManyInput | IngredientItemVOCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientItemVO update
   */
  export type IngredientItemVOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * The data needed to update a IngredientItemVO.
     */
    data: XOR<IngredientItemVOUpdateInput, IngredientItemVOUncheckedUpdateInput>
    /**
     * Choose, which IngredientItemVO to update.
     */
    where: IngredientItemVOWhereUniqueInput
  }

  /**
   * IngredientItemVO updateMany
   */
  export type IngredientItemVOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngredientItemVOS.
     */
    data: XOR<IngredientItemVOUpdateManyMutationInput, IngredientItemVOUncheckedUpdateManyInput>
    /**
     * Filter which IngredientItemVOS to update
     */
    where?: IngredientItemVOWhereInput
    /**
     * Limit how many IngredientItemVOS to update.
     */
    limit?: number
  }

  /**
   * IngredientItemVO updateManyAndReturn
   */
  export type IngredientItemVOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * The data used to update IngredientItemVOS.
     */
    data: XOR<IngredientItemVOUpdateManyMutationInput, IngredientItemVOUncheckedUpdateManyInput>
    /**
     * Filter which IngredientItemVOS to update
     */
    where?: IngredientItemVOWhereInput
    /**
     * Limit how many IngredientItemVOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IngredientItemVO upsert
   */
  export type IngredientItemVOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * The filter to search for the IngredientItemVO to update in case it exists.
     */
    where: IngredientItemVOWhereUniqueInput
    /**
     * In case the IngredientItemVO found by the `where` argument doesn't exist, create a new IngredientItemVO with this data.
     */
    create: XOR<IngredientItemVOCreateInput, IngredientItemVOUncheckedCreateInput>
    /**
     * In case the IngredientItemVO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientItemVOUpdateInput, IngredientItemVOUncheckedUpdateInput>
  }

  /**
   * IngredientItemVO delete
   */
  export type IngredientItemVODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
    /**
     * Filter which IngredientItemVO to delete.
     */
    where: IngredientItemVOWhereUniqueInput
  }

  /**
   * IngredientItemVO deleteMany
   */
  export type IngredientItemVODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngredientItemVOS to delete
     */
    where?: IngredientItemVOWhereInput
    /**
     * Limit how many IngredientItemVOS to delete.
     */
    limit?: number
  }

  /**
   * IngredientItemVO without action
   */
  export type IngredientItemVODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientItemVO
     */
    select?: IngredientItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IngredientItemVO
     */
    omit?: IngredientItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientItemVOInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingList
   */

  export type AggregateShoppingList = {
    _count: ShoppingListCountAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  export type ShoppingListMinAggregateOutputType = {
    id: string | null
    userId: string | null
    isCompleted: boolean | null
  }

  export type ShoppingListMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    isCompleted: boolean | null
  }

  export type ShoppingListCountAggregateOutputType = {
    id: number
    userId: number
    isCompleted: number
    _all: number
  }


  export type ShoppingListMinAggregateInputType = {
    id?: true
    userId?: true
    isCompleted?: true
  }

  export type ShoppingListMaxAggregateInputType = {
    id?: true
    userId?: true
    isCompleted?: true
  }

  export type ShoppingListCountAggregateInputType = {
    id?: true
    userId?: true
    isCompleted?: true
    _all?: true
  }

  export type ShoppingListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingList to aggregate.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingLists
    **/
    _count?: true | ShoppingListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListMaxAggregateInputType
  }

  export type GetShoppingListAggregateType<T extends ShoppingListAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingList[P]>
      : GetScalarType<T[P], AggregateShoppingList[P]>
  }




  export type ShoppingListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListWhereInput
    orderBy?: ShoppingListOrderByWithAggregationInput | ShoppingListOrderByWithAggregationInput[]
    by: ShoppingListScalarFieldEnum[] | ShoppingListScalarFieldEnum
    having?: ShoppingListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListCountAggregateInputType | true
    _min?: ShoppingListMinAggregateInputType
    _max?: ShoppingListMaxAggregateInputType
  }

  export type ShoppingListGroupByOutputType = {
    id: string
    userId: string
    isCompleted: boolean
    _count: ShoppingListCountAggregateOutputType | null
    _min: ShoppingListMinAggregateOutputType | null
    _max: ShoppingListMaxAggregateOutputType | null
  }

  type GetShoppingListGroupByPayload<T extends ShoppingListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCompleted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shoppingListItems?: boolean | ShoppingList$shoppingListItemsArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCompleted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    isCompleted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingList"]>

  export type ShoppingListSelectScalar = {
    id?: boolean
    userId?: boolean
    isCompleted?: boolean
  }

  export type ShoppingListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "isCompleted", ExtArgs["result"]["shoppingList"]>
  export type ShoppingListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shoppingListItems?: boolean | ShoppingList$shoppingListItemsArgs<ExtArgs>
    _count?: boolean | ShoppingListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShoppingListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShoppingListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShoppingListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingList"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shoppingListItems: Prisma.$ShoppingListItemVOPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      isCompleted: boolean
    }, ExtArgs["result"]["shoppingList"]>
    composites: {}
  }

  type ShoppingListGetPayload<S extends boolean | null | undefined | ShoppingListDefaultArgs> = $Result.GetResult<Prisma.$ShoppingListPayload, S>

  type ShoppingListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListCountAggregateInputType | true
    }

  export interface ShoppingListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingList'], meta: { name: 'ShoppingList' } }
    /**
     * Find zero or one ShoppingList that matches the filter.
     * @param {ShoppingListFindUniqueArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListFindUniqueArgs>(args: SelectSubset<T, ShoppingListFindUniqueArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListFindUniqueOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListFindFirstArgs>(args?: SelectSubset<T, ShoppingListFindFirstArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindFirstOrThrowArgs} args - Arguments to find a ShoppingList
     * @example
     * // Get one ShoppingList
     * const shoppingList = await prisma.shoppingList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany()
     * 
     * // Get first 10 ShoppingLists
     * const shoppingLists = await prisma.shoppingList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingListFindManyArgs>(args?: SelectSubset<T, ShoppingListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingList.
     * @param {ShoppingListCreateArgs} args - Arguments to create a ShoppingList.
     * @example
     * // Create one ShoppingList
     * const ShoppingList = await prisma.shoppingList.create({
     *   data: {
     *     // ... data to create a ShoppingList
     *   }
     * })
     * 
     */
    create<T extends ShoppingListCreateArgs>(args: SelectSubset<T, ShoppingListCreateArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingLists.
     * @param {ShoppingListCreateManyArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingListCreateManyArgs>(args?: SelectSubset<T, ShoppingListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingLists and returns the data saved in the database.
     * @param {ShoppingListCreateManyAndReturnArgs} args - Arguments to create many ShoppingLists.
     * @example
     * // Create many ShoppingLists
     * const shoppingList = await prisma.shoppingList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingListCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingList.
     * @param {ShoppingListDeleteArgs} args - Arguments to delete one ShoppingList.
     * @example
     * // Delete one ShoppingList
     * const ShoppingList = await prisma.shoppingList.delete({
     *   where: {
     *     // ... filter to delete one ShoppingList
     *   }
     * })
     * 
     */
    delete<T extends ShoppingListDeleteArgs>(args: SelectSubset<T, ShoppingListDeleteArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingList.
     * @param {ShoppingListUpdateArgs} args - Arguments to update one ShoppingList.
     * @example
     * // Update one ShoppingList
     * const shoppingList = await prisma.shoppingList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingListUpdateArgs>(args: SelectSubset<T, ShoppingListUpdateArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingLists.
     * @param {ShoppingListDeleteManyArgs} args - Arguments to filter ShoppingLists to delete.
     * @example
     * // Delete a few ShoppingLists
     * const { count } = await prisma.shoppingList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingListDeleteManyArgs>(args?: SelectSubset<T, ShoppingListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingListUpdateManyArgs>(args: SelectSubset<T, ShoppingListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingLists and returns the data updated in the database.
     * @param {ShoppingListUpdateManyAndReturnArgs} args - Arguments to update many ShoppingLists.
     * @example
     * // Update many ShoppingLists
     * const shoppingList = await prisma.shoppingList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingLists and only return the `id`
     * const shoppingListWithIdOnly = await prisma.shoppingList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingListUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingList.
     * @param {ShoppingListUpsertArgs} args - Arguments to update or create a ShoppingList.
     * @example
     * // Update or create a ShoppingList
     * const shoppingList = await prisma.shoppingList.upsert({
     *   create: {
     *     // ... data to create a ShoppingList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingList we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListUpsertArgs>(args: SelectSubset<T, ShoppingListUpsertArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListCountArgs} args - Arguments to filter ShoppingLists to count.
     * @example
     * // Count the number of ShoppingLists
     * const count = await prisma.shoppingList.count({
     *   where: {
     *     // ... the filter for the ShoppingLists we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListCountArgs>(
      args?: Subset<T, ShoppingListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListAggregateArgs>(args: Subset<T, ShoppingListAggregateArgs>): Prisma.PrismaPromise<GetShoppingListAggregateType<T>>

    /**
     * Group by ShoppingList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingList model
   */
  readonly fields: ShoppingListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shoppingListItems<T extends ShoppingList$shoppingListItemsArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingList$shoppingListItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingList model
   */
  interface ShoppingListFieldRefs {
    readonly id: FieldRef<"ShoppingList", 'String'>
    readonly userId: FieldRef<"ShoppingList", 'String'>
    readonly isCompleted: FieldRef<"ShoppingList", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingList findUnique
   */
  export type ShoppingListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList findUniqueOrThrow
   */
  export type ShoppingListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList findFirst
   */
  export type ShoppingListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList findFirstOrThrow
   */
  export type ShoppingListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingList to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingLists.
     */
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList findMany
   */
  export type ShoppingListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingLists to fetch.
     */
    where?: ShoppingListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingLists to fetch.
     */
    orderBy?: ShoppingListOrderByWithRelationInput | ShoppingListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingLists.
     */
    cursor?: ShoppingListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingLists.
     */
    skip?: number
    distinct?: ShoppingListScalarFieldEnum | ShoppingListScalarFieldEnum[]
  }

  /**
   * ShoppingList create
   */
  export type ShoppingListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingList.
     */
    data: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
  }

  /**
   * ShoppingList createMany
   */
  export type ShoppingListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingLists.
     */
    data: ShoppingListCreateManyInput | ShoppingListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingList createManyAndReturn
   */
  export type ShoppingListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingLists.
     */
    data: ShoppingListCreateManyInput | ShoppingListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingList update
   */
  export type ShoppingListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingList.
     */
    data: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
    /**
     * Choose, which ShoppingList to update.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList updateMany
   */
  export type ShoppingListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingLists.
     */
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to update.
     */
    limit?: number
  }

  /**
   * ShoppingList updateManyAndReturn
   */
  export type ShoppingListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingLists.
     */
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingLists to update
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingList upsert
   */
  export type ShoppingListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingList to update in case it exists.
     */
    where: ShoppingListWhereUniqueInput
    /**
     * In case the ShoppingList found by the `where` argument doesn't exist, create a new ShoppingList with this data.
     */
    create: XOR<ShoppingListCreateInput, ShoppingListUncheckedCreateInput>
    /**
     * In case the ShoppingList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingListUpdateInput, ShoppingListUncheckedUpdateInput>
  }

  /**
   * ShoppingList delete
   */
  export type ShoppingListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
    /**
     * Filter which ShoppingList to delete.
     */
    where: ShoppingListWhereUniqueInput
  }

  /**
   * ShoppingList deleteMany
   */
  export type ShoppingListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingLists to delete
     */
    where?: ShoppingListWhereInput
    /**
     * Limit how many ShoppingLists to delete.
     */
    limit?: number
  }

  /**
   * ShoppingList.shoppingListItems
   */
  export type ShoppingList$shoppingListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    where?: ShoppingListItemVOWhereInput
    orderBy?: ShoppingListItemVOOrderByWithRelationInput | ShoppingListItemVOOrderByWithRelationInput[]
    cursor?: ShoppingListItemVOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShoppingListItemVOScalarFieldEnum | ShoppingListItemVOScalarFieldEnum[]
  }

  /**
   * ShoppingList without action
   */
  export type ShoppingListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingList
     */
    select?: ShoppingListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingList
     */
    omit?: ShoppingListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListInclude<ExtArgs> | null
  }


  /**
   * Model ShoppingListItemVO
   */

  export type AggregateShoppingListItemVO = {
    _count: ShoppingListItemVOCountAggregateOutputType | null
    _avg: ShoppingListItemVOAvgAggregateOutputType | null
    _sum: ShoppingListItemVOSumAggregateOutputType | null
    _min: ShoppingListItemVOMinAggregateOutputType | null
    _max: ShoppingListItemVOMaxAggregateOutputType | null
  }

  export type ShoppingListItemVOAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ShoppingListItemVOSumAggregateOutputType = {
    quantity: number | null
  }

  export type ShoppingListItemVOMinAggregateOutputType = {
    id: string | null
    shoppingListId: string | null
    ingredientId: string | null
    quantity: number | null
    unit: string | null
    isPurchased: boolean | null
  }

  export type ShoppingListItemVOMaxAggregateOutputType = {
    id: string | null
    shoppingListId: string | null
    ingredientId: string | null
    quantity: number | null
    unit: string | null
    isPurchased: boolean | null
  }

  export type ShoppingListItemVOCountAggregateOutputType = {
    id: number
    shoppingListId: number
    ingredientId: number
    quantity: number
    unit: number
    isPurchased: number
    _all: number
  }


  export type ShoppingListItemVOAvgAggregateInputType = {
    quantity?: true
  }

  export type ShoppingListItemVOSumAggregateInputType = {
    quantity?: true
  }

  export type ShoppingListItemVOMinAggregateInputType = {
    id?: true
    shoppingListId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    isPurchased?: true
  }

  export type ShoppingListItemVOMaxAggregateInputType = {
    id?: true
    shoppingListId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    isPurchased?: true
  }

  export type ShoppingListItemVOCountAggregateInputType = {
    id?: true
    shoppingListId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    isPurchased?: true
    _all?: true
  }

  export type ShoppingListItemVOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingListItemVO to aggregate.
     */
    where?: ShoppingListItemVOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItemVOS to fetch.
     */
    orderBy?: ShoppingListItemVOOrderByWithRelationInput | ShoppingListItemVOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShoppingListItemVOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItemVOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItemVOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShoppingListItemVOS
    **/
    _count?: true | ShoppingListItemVOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShoppingListItemVOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShoppingListItemVOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShoppingListItemVOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShoppingListItemVOMaxAggregateInputType
  }

  export type GetShoppingListItemVOAggregateType<T extends ShoppingListItemVOAggregateArgs> = {
        [P in keyof T & keyof AggregateShoppingListItemVO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShoppingListItemVO[P]>
      : GetScalarType<T[P], AggregateShoppingListItemVO[P]>
  }




  export type ShoppingListItemVOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShoppingListItemVOWhereInput
    orderBy?: ShoppingListItemVOOrderByWithAggregationInput | ShoppingListItemVOOrderByWithAggregationInput[]
    by: ShoppingListItemVOScalarFieldEnum[] | ShoppingListItemVOScalarFieldEnum
    having?: ShoppingListItemVOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShoppingListItemVOCountAggregateInputType | true
    _avg?: ShoppingListItemVOAvgAggregateInputType
    _sum?: ShoppingListItemVOSumAggregateInputType
    _min?: ShoppingListItemVOMinAggregateInputType
    _max?: ShoppingListItemVOMaxAggregateInputType
  }

  export type ShoppingListItemVOGroupByOutputType = {
    id: string
    shoppingListId: string
    ingredientId: string
    quantity: number
    unit: string
    isPurchased: boolean
    _count: ShoppingListItemVOCountAggregateOutputType | null
    _avg: ShoppingListItemVOAvgAggregateOutputType | null
    _sum: ShoppingListItemVOSumAggregateOutputType | null
    _min: ShoppingListItemVOMinAggregateOutputType | null
    _max: ShoppingListItemVOMaxAggregateOutputType | null
  }

  type GetShoppingListItemVOGroupByPayload<T extends ShoppingListItemVOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShoppingListItemVOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShoppingListItemVOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShoppingListItemVOGroupByOutputType[P]>
            : GetScalarType<T[P], ShoppingListItemVOGroupByOutputType[P]>
        }
      >
    >


  export type ShoppingListItemVOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingListId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    isPurchased?: boolean
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItemVO"]>

  export type ShoppingListItemVOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingListId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    isPurchased?: boolean
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItemVO"]>

  export type ShoppingListItemVOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shoppingListId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    isPurchased?: boolean
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shoppingListItemVO"]>

  export type ShoppingListItemVOSelectScalar = {
    id?: boolean
    shoppingListId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    isPurchased?: boolean
  }

  export type ShoppingListItemVOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shoppingListId" | "ingredientId" | "quantity" | "unit" | "isPurchased", ExtArgs["result"]["shoppingListItemVO"]>
  export type ShoppingListItemVOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type ShoppingListItemVOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type ShoppingListItemVOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shoppingList?: boolean | ShoppingListDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $ShoppingListItemVOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShoppingListItemVO"
    objects: {
      shoppingList: Prisma.$ShoppingListPayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shoppingListId: string
      ingredientId: string
      quantity: number
      unit: string
      isPurchased: boolean
    }, ExtArgs["result"]["shoppingListItemVO"]>
    composites: {}
  }

  type ShoppingListItemVOGetPayload<S extends boolean | null | undefined | ShoppingListItemVODefaultArgs> = $Result.GetResult<Prisma.$ShoppingListItemVOPayload, S>

  type ShoppingListItemVOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShoppingListItemVOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShoppingListItemVOCountAggregateInputType | true
    }

  export interface ShoppingListItemVODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShoppingListItemVO'], meta: { name: 'ShoppingListItemVO' } }
    /**
     * Find zero or one ShoppingListItemVO that matches the filter.
     * @param {ShoppingListItemVOFindUniqueArgs} args - Arguments to find a ShoppingListItemVO
     * @example
     * // Get one ShoppingListItemVO
     * const shoppingListItemVO = await prisma.shoppingListItemVO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShoppingListItemVOFindUniqueArgs>(args: SelectSubset<T, ShoppingListItemVOFindUniqueArgs<ExtArgs>>): Prisma__ShoppingListItemVOClient<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShoppingListItemVO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShoppingListItemVOFindUniqueOrThrowArgs} args - Arguments to find a ShoppingListItemVO
     * @example
     * // Get one ShoppingListItemVO
     * const shoppingListItemVO = await prisma.shoppingListItemVO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShoppingListItemVOFindUniqueOrThrowArgs>(args: SelectSubset<T, ShoppingListItemVOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShoppingListItemVOClient<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListItemVO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemVOFindFirstArgs} args - Arguments to find a ShoppingListItemVO
     * @example
     * // Get one ShoppingListItemVO
     * const shoppingListItemVO = await prisma.shoppingListItemVO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShoppingListItemVOFindFirstArgs>(args?: SelectSubset<T, ShoppingListItemVOFindFirstArgs<ExtArgs>>): Prisma__ShoppingListItemVOClient<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShoppingListItemVO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemVOFindFirstOrThrowArgs} args - Arguments to find a ShoppingListItemVO
     * @example
     * // Get one ShoppingListItemVO
     * const shoppingListItemVO = await prisma.shoppingListItemVO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShoppingListItemVOFindFirstOrThrowArgs>(args?: SelectSubset<T, ShoppingListItemVOFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShoppingListItemVOClient<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShoppingListItemVOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemVOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShoppingListItemVOS
     * const shoppingListItemVOS = await prisma.shoppingListItemVO.findMany()
     * 
     * // Get first 10 ShoppingListItemVOS
     * const shoppingListItemVOS = await prisma.shoppingListItemVO.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shoppingListItemVOWithIdOnly = await prisma.shoppingListItemVO.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShoppingListItemVOFindManyArgs>(args?: SelectSubset<T, ShoppingListItemVOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShoppingListItemVO.
     * @param {ShoppingListItemVOCreateArgs} args - Arguments to create a ShoppingListItemVO.
     * @example
     * // Create one ShoppingListItemVO
     * const ShoppingListItemVO = await prisma.shoppingListItemVO.create({
     *   data: {
     *     // ... data to create a ShoppingListItemVO
     *   }
     * })
     * 
     */
    create<T extends ShoppingListItemVOCreateArgs>(args: SelectSubset<T, ShoppingListItemVOCreateArgs<ExtArgs>>): Prisma__ShoppingListItemVOClient<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShoppingListItemVOS.
     * @param {ShoppingListItemVOCreateManyArgs} args - Arguments to create many ShoppingListItemVOS.
     * @example
     * // Create many ShoppingListItemVOS
     * const shoppingListItemVO = await prisma.shoppingListItemVO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShoppingListItemVOCreateManyArgs>(args?: SelectSubset<T, ShoppingListItemVOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShoppingListItemVOS and returns the data saved in the database.
     * @param {ShoppingListItemVOCreateManyAndReturnArgs} args - Arguments to create many ShoppingListItemVOS.
     * @example
     * // Create many ShoppingListItemVOS
     * const shoppingListItemVO = await prisma.shoppingListItemVO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShoppingListItemVOS and only return the `id`
     * const shoppingListItemVOWithIdOnly = await prisma.shoppingListItemVO.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShoppingListItemVOCreateManyAndReturnArgs>(args?: SelectSubset<T, ShoppingListItemVOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShoppingListItemVO.
     * @param {ShoppingListItemVODeleteArgs} args - Arguments to delete one ShoppingListItemVO.
     * @example
     * // Delete one ShoppingListItemVO
     * const ShoppingListItemVO = await prisma.shoppingListItemVO.delete({
     *   where: {
     *     // ... filter to delete one ShoppingListItemVO
     *   }
     * })
     * 
     */
    delete<T extends ShoppingListItemVODeleteArgs>(args: SelectSubset<T, ShoppingListItemVODeleteArgs<ExtArgs>>): Prisma__ShoppingListItemVOClient<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShoppingListItemVO.
     * @param {ShoppingListItemVOUpdateArgs} args - Arguments to update one ShoppingListItemVO.
     * @example
     * // Update one ShoppingListItemVO
     * const shoppingListItemVO = await prisma.shoppingListItemVO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShoppingListItemVOUpdateArgs>(args: SelectSubset<T, ShoppingListItemVOUpdateArgs<ExtArgs>>): Prisma__ShoppingListItemVOClient<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShoppingListItemVOS.
     * @param {ShoppingListItemVODeleteManyArgs} args - Arguments to filter ShoppingListItemVOS to delete.
     * @example
     * // Delete a few ShoppingListItemVOS
     * const { count } = await prisma.shoppingListItemVO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShoppingListItemVODeleteManyArgs>(args?: SelectSubset<T, ShoppingListItemVODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListItemVOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemVOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShoppingListItemVOS
     * const shoppingListItemVO = await prisma.shoppingListItemVO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShoppingListItemVOUpdateManyArgs>(args: SelectSubset<T, ShoppingListItemVOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShoppingListItemVOS and returns the data updated in the database.
     * @param {ShoppingListItemVOUpdateManyAndReturnArgs} args - Arguments to update many ShoppingListItemVOS.
     * @example
     * // Update many ShoppingListItemVOS
     * const shoppingListItemVO = await prisma.shoppingListItemVO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShoppingListItemVOS and only return the `id`
     * const shoppingListItemVOWithIdOnly = await prisma.shoppingListItemVO.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShoppingListItemVOUpdateManyAndReturnArgs>(args: SelectSubset<T, ShoppingListItemVOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShoppingListItemVO.
     * @param {ShoppingListItemVOUpsertArgs} args - Arguments to update or create a ShoppingListItemVO.
     * @example
     * // Update or create a ShoppingListItemVO
     * const shoppingListItemVO = await prisma.shoppingListItemVO.upsert({
     *   create: {
     *     // ... data to create a ShoppingListItemVO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShoppingListItemVO we want to update
     *   }
     * })
     */
    upsert<T extends ShoppingListItemVOUpsertArgs>(args: SelectSubset<T, ShoppingListItemVOUpsertArgs<ExtArgs>>): Prisma__ShoppingListItemVOClient<$Result.GetResult<Prisma.$ShoppingListItemVOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShoppingListItemVOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemVOCountArgs} args - Arguments to filter ShoppingListItemVOS to count.
     * @example
     * // Count the number of ShoppingListItemVOS
     * const count = await prisma.shoppingListItemVO.count({
     *   where: {
     *     // ... the filter for the ShoppingListItemVOS we want to count
     *   }
     * })
    **/
    count<T extends ShoppingListItemVOCountArgs>(
      args?: Subset<T, ShoppingListItemVOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShoppingListItemVOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShoppingListItemVO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemVOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShoppingListItemVOAggregateArgs>(args: Subset<T, ShoppingListItemVOAggregateArgs>): Prisma.PrismaPromise<GetShoppingListItemVOAggregateType<T>>

    /**
     * Group by ShoppingListItemVO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShoppingListItemVOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShoppingListItemVOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShoppingListItemVOGroupByArgs['orderBy'] }
        : { orderBy?: ShoppingListItemVOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShoppingListItemVOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShoppingListItemVOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShoppingListItemVO model
   */
  readonly fields: ShoppingListItemVOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShoppingListItemVO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShoppingListItemVOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shoppingList<T extends ShoppingListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShoppingListDefaultArgs<ExtArgs>>): Prisma__ShoppingListClient<$Result.GetResult<Prisma.$ShoppingListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShoppingListItemVO model
   */
  interface ShoppingListItemVOFieldRefs {
    readonly id: FieldRef<"ShoppingListItemVO", 'String'>
    readonly shoppingListId: FieldRef<"ShoppingListItemVO", 'String'>
    readonly ingredientId: FieldRef<"ShoppingListItemVO", 'String'>
    readonly quantity: FieldRef<"ShoppingListItemVO", 'Float'>
    readonly unit: FieldRef<"ShoppingListItemVO", 'String'>
    readonly isPurchased: FieldRef<"ShoppingListItemVO", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShoppingListItemVO findUnique
   */
  export type ShoppingListItemVOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItemVO to fetch.
     */
    where: ShoppingListItemVOWhereUniqueInput
  }

  /**
   * ShoppingListItemVO findUniqueOrThrow
   */
  export type ShoppingListItemVOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItemVO to fetch.
     */
    where: ShoppingListItemVOWhereUniqueInput
  }

  /**
   * ShoppingListItemVO findFirst
   */
  export type ShoppingListItemVOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItemVO to fetch.
     */
    where?: ShoppingListItemVOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItemVOS to fetch.
     */
    orderBy?: ShoppingListItemVOOrderByWithRelationInput | ShoppingListItemVOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListItemVOS.
     */
    cursor?: ShoppingListItemVOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItemVOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItemVOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListItemVOS.
     */
    distinct?: ShoppingListItemVOScalarFieldEnum | ShoppingListItemVOScalarFieldEnum[]
  }

  /**
   * ShoppingListItemVO findFirstOrThrow
   */
  export type ShoppingListItemVOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItemVO to fetch.
     */
    where?: ShoppingListItemVOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItemVOS to fetch.
     */
    orderBy?: ShoppingListItemVOOrderByWithRelationInput | ShoppingListItemVOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShoppingListItemVOS.
     */
    cursor?: ShoppingListItemVOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItemVOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItemVOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShoppingListItemVOS.
     */
    distinct?: ShoppingListItemVOScalarFieldEnum | ShoppingListItemVOScalarFieldEnum[]
  }

  /**
   * ShoppingListItemVO findMany
   */
  export type ShoppingListItemVOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * Filter, which ShoppingListItemVOS to fetch.
     */
    where?: ShoppingListItemVOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShoppingListItemVOS to fetch.
     */
    orderBy?: ShoppingListItemVOOrderByWithRelationInput | ShoppingListItemVOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShoppingListItemVOS.
     */
    cursor?: ShoppingListItemVOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShoppingListItemVOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShoppingListItemVOS.
     */
    skip?: number
    distinct?: ShoppingListItemVOScalarFieldEnum | ShoppingListItemVOScalarFieldEnum[]
  }

  /**
   * ShoppingListItemVO create
   */
  export type ShoppingListItemVOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * The data needed to create a ShoppingListItemVO.
     */
    data: XOR<ShoppingListItemVOCreateInput, ShoppingListItemVOUncheckedCreateInput>
  }

  /**
   * ShoppingListItemVO createMany
   */
  export type ShoppingListItemVOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShoppingListItemVOS.
     */
    data: ShoppingListItemVOCreateManyInput | ShoppingListItemVOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShoppingListItemVO createManyAndReturn
   */
  export type ShoppingListItemVOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * The data used to create many ShoppingListItemVOS.
     */
    data: ShoppingListItemVOCreateManyInput | ShoppingListItemVOCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingListItemVO update
   */
  export type ShoppingListItemVOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * The data needed to update a ShoppingListItemVO.
     */
    data: XOR<ShoppingListItemVOUpdateInput, ShoppingListItemVOUncheckedUpdateInput>
    /**
     * Choose, which ShoppingListItemVO to update.
     */
    where: ShoppingListItemVOWhereUniqueInput
  }

  /**
   * ShoppingListItemVO updateMany
   */
  export type ShoppingListItemVOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShoppingListItemVOS.
     */
    data: XOR<ShoppingListItemVOUpdateManyMutationInput, ShoppingListItemVOUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListItemVOS to update
     */
    where?: ShoppingListItemVOWhereInput
    /**
     * Limit how many ShoppingListItemVOS to update.
     */
    limit?: number
  }

  /**
   * ShoppingListItemVO updateManyAndReturn
   */
  export type ShoppingListItemVOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * The data used to update ShoppingListItemVOS.
     */
    data: XOR<ShoppingListItemVOUpdateManyMutationInput, ShoppingListItemVOUncheckedUpdateManyInput>
    /**
     * Filter which ShoppingListItemVOS to update
     */
    where?: ShoppingListItemVOWhereInput
    /**
     * Limit how many ShoppingListItemVOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShoppingListItemVO upsert
   */
  export type ShoppingListItemVOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * The filter to search for the ShoppingListItemVO to update in case it exists.
     */
    where: ShoppingListItemVOWhereUniqueInput
    /**
     * In case the ShoppingListItemVO found by the `where` argument doesn't exist, create a new ShoppingListItemVO with this data.
     */
    create: XOR<ShoppingListItemVOCreateInput, ShoppingListItemVOUncheckedCreateInput>
    /**
     * In case the ShoppingListItemVO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShoppingListItemVOUpdateInput, ShoppingListItemVOUncheckedUpdateInput>
  }

  /**
   * ShoppingListItemVO delete
   */
  export type ShoppingListItemVODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
    /**
     * Filter which ShoppingListItemVO to delete.
     */
    where: ShoppingListItemVOWhereUniqueInput
  }

  /**
   * ShoppingListItemVO deleteMany
   */
  export type ShoppingListItemVODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShoppingListItemVOS to delete
     */
    where?: ShoppingListItemVOWhereInput
    /**
     * Limit how many ShoppingListItemVOS to delete.
     */
    limit?: number
  }

  /**
   * ShoppingListItemVO without action
   */
  export type ShoppingListItemVODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShoppingListItemVO
     */
    select?: ShoppingListItemVOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShoppingListItemVO
     */
    omit?: ShoppingListItemVOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShoppingListItemVOInclude<ExtArgs> | null
  }


  /**
   * Model RecipeReview
   */

  export type AggregateRecipeReview = {
    _count: RecipeReviewCountAggregateOutputType | null
    _avg: RecipeReviewAvgAggregateOutputType | null
    _sum: RecipeReviewSumAggregateOutputType | null
    _min: RecipeReviewMinAggregateOutputType | null
    _max: RecipeReviewMaxAggregateOutputType | null
  }

  export type RecipeReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type RecipeReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type RecipeReviewMinAggregateOutputType = {
    id: string | null
    userId: string | null
    recipeId: string | null
    rating: number | null
    comment: string | null
  }

  export type RecipeReviewMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    recipeId: string | null
    rating: number | null
    comment: string | null
  }

  export type RecipeReviewCountAggregateOutputType = {
    id: number
    userId: number
    recipeId: number
    rating: number
    comment: number
    _all: number
  }


  export type RecipeReviewAvgAggregateInputType = {
    rating?: true
  }

  export type RecipeReviewSumAggregateInputType = {
    rating?: true
  }

  export type RecipeReviewMinAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    rating?: true
    comment?: true
  }

  export type RecipeReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    rating?: true
    comment?: true
  }

  export type RecipeReviewCountAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    rating?: true
    comment?: true
    _all?: true
  }

  export type RecipeReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeReview to aggregate.
     */
    where?: RecipeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeReviews to fetch.
     */
    orderBy?: RecipeReviewOrderByWithRelationInput | RecipeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeReviews
    **/
    _count?: true | RecipeReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeReviewMaxAggregateInputType
  }

  export type GetRecipeReviewAggregateType<T extends RecipeReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeReview[P]>
      : GetScalarType<T[P], AggregateRecipeReview[P]>
  }




  export type RecipeReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeReviewWhereInput
    orderBy?: RecipeReviewOrderByWithAggregationInput | RecipeReviewOrderByWithAggregationInput[]
    by: RecipeReviewScalarFieldEnum[] | RecipeReviewScalarFieldEnum
    having?: RecipeReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeReviewCountAggregateInputType | true
    _avg?: RecipeReviewAvgAggregateInputType
    _sum?: RecipeReviewSumAggregateInputType
    _min?: RecipeReviewMinAggregateInputType
    _max?: RecipeReviewMaxAggregateInputType
  }

  export type RecipeReviewGroupByOutputType = {
    id: string
    userId: string
    recipeId: string
    rating: number
    comment: string | null
    _count: RecipeReviewCountAggregateOutputType | null
    _avg: RecipeReviewAvgAggregateOutputType | null
    _sum: RecipeReviewSumAggregateOutputType | null
    _min: RecipeReviewMinAggregateOutputType | null
    _max: RecipeReviewMaxAggregateOutputType | null
  }

  type GetRecipeReviewGroupByPayload<T extends RecipeReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeReviewGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeReviewGroupByOutputType[P]>
        }
      >
    >


  export type RecipeReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    rating?: boolean
    comment?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeReview"]>

  export type RecipeReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    rating?: boolean
    comment?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeReview"]>

  export type RecipeReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    rating?: boolean
    comment?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeReview"]>

  export type RecipeReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    rating?: boolean
    comment?: boolean
  }

  export type RecipeReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "recipeId" | "rating" | "comment", ExtArgs["result"]["recipeReview"]>
  export type RecipeReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type RecipeReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $RecipeReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeReview"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      recipeId: string
      rating: number
      comment: string | null
    }, ExtArgs["result"]["recipeReview"]>
    composites: {}
  }

  type RecipeReviewGetPayload<S extends boolean | null | undefined | RecipeReviewDefaultArgs> = $Result.GetResult<Prisma.$RecipeReviewPayload, S>

  type RecipeReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeReviewCountAggregateInputType | true
    }

  export interface RecipeReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeReview'], meta: { name: 'RecipeReview' } }
    /**
     * Find zero or one RecipeReview that matches the filter.
     * @param {RecipeReviewFindUniqueArgs} args - Arguments to find a RecipeReview
     * @example
     * // Get one RecipeReview
     * const recipeReview = await prisma.recipeReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeReviewFindUniqueArgs>(args: SelectSubset<T, RecipeReviewFindUniqueArgs<ExtArgs>>): Prisma__RecipeReviewClient<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecipeReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeReviewFindUniqueOrThrowArgs} args - Arguments to find a RecipeReview
     * @example
     * // Get one RecipeReview
     * const recipeReview = await prisma.recipeReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeReviewClient<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeReviewFindFirstArgs} args - Arguments to find a RecipeReview
     * @example
     * // Get one RecipeReview
     * const recipeReview = await prisma.recipeReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeReviewFindFirstArgs>(args?: SelectSubset<T, RecipeReviewFindFirstArgs<ExtArgs>>): Prisma__RecipeReviewClient<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecipeReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeReviewFindFirstOrThrowArgs} args - Arguments to find a RecipeReview
     * @example
     * // Get one RecipeReview
     * const recipeReview = await prisma.recipeReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeReviewClient<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecipeReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeReviews
     * const recipeReviews = await prisma.recipeReview.findMany()
     * 
     * // Get first 10 RecipeReviews
     * const recipeReviews = await prisma.recipeReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeReviewWithIdOnly = await prisma.recipeReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeReviewFindManyArgs>(args?: SelectSubset<T, RecipeReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecipeReview.
     * @param {RecipeReviewCreateArgs} args - Arguments to create a RecipeReview.
     * @example
     * // Create one RecipeReview
     * const RecipeReview = await prisma.recipeReview.create({
     *   data: {
     *     // ... data to create a RecipeReview
     *   }
     * })
     * 
     */
    create<T extends RecipeReviewCreateArgs>(args: SelectSubset<T, RecipeReviewCreateArgs<ExtArgs>>): Prisma__RecipeReviewClient<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecipeReviews.
     * @param {RecipeReviewCreateManyArgs} args - Arguments to create many RecipeReviews.
     * @example
     * // Create many RecipeReviews
     * const recipeReview = await prisma.recipeReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeReviewCreateManyArgs>(args?: SelectSubset<T, RecipeReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeReviews and returns the data saved in the database.
     * @param {RecipeReviewCreateManyAndReturnArgs} args - Arguments to create many RecipeReviews.
     * @example
     * // Create many RecipeReviews
     * const recipeReview = await prisma.recipeReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeReviews and only return the `id`
     * const recipeReviewWithIdOnly = await prisma.recipeReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecipeReview.
     * @param {RecipeReviewDeleteArgs} args - Arguments to delete one RecipeReview.
     * @example
     * // Delete one RecipeReview
     * const RecipeReview = await prisma.recipeReview.delete({
     *   where: {
     *     // ... filter to delete one RecipeReview
     *   }
     * })
     * 
     */
    delete<T extends RecipeReviewDeleteArgs>(args: SelectSubset<T, RecipeReviewDeleteArgs<ExtArgs>>): Prisma__RecipeReviewClient<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecipeReview.
     * @param {RecipeReviewUpdateArgs} args - Arguments to update one RecipeReview.
     * @example
     * // Update one RecipeReview
     * const recipeReview = await prisma.recipeReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeReviewUpdateArgs>(args: SelectSubset<T, RecipeReviewUpdateArgs<ExtArgs>>): Prisma__RecipeReviewClient<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecipeReviews.
     * @param {RecipeReviewDeleteManyArgs} args - Arguments to filter RecipeReviews to delete.
     * @example
     * // Delete a few RecipeReviews
     * const { count } = await prisma.recipeReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeReviewDeleteManyArgs>(args?: SelectSubset<T, RecipeReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeReviews
     * const recipeReview = await prisma.recipeReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeReviewUpdateManyArgs>(args: SelectSubset<T, RecipeReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeReviews and returns the data updated in the database.
     * @param {RecipeReviewUpdateManyAndReturnArgs} args - Arguments to update many RecipeReviews.
     * @example
     * // Update many RecipeReviews
     * const recipeReview = await prisma.recipeReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecipeReviews and only return the `id`
     * const recipeReviewWithIdOnly = await prisma.recipeReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecipeReview.
     * @param {RecipeReviewUpsertArgs} args - Arguments to update or create a RecipeReview.
     * @example
     * // Update or create a RecipeReview
     * const recipeReview = await prisma.recipeReview.upsert({
     *   create: {
     *     // ... data to create a RecipeReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeReview we want to update
     *   }
     * })
     */
    upsert<T extends RecipeReviewUpsertArgs>(args: SelectSubset<T, RecipeReviewUpsertArgs<ExtArgs>>): Prisma__RecipeReviewClient<$Result.GetResult<Prisma.$RecipeReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecipeReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeReviewCountArgs} args - Arguments to filter RecipeReviews to count.
     * @example
     * // Count the number of RecipeReviews
     * const count = await prisma.recipeReview.count({
     *   where: {
     *     // ... the filter for the RecipeReviews we want to count
     *   }
     * })
    **/
    count<T extends RecipeReviewCountArgs>(
      args?: Subset<T, RecipeReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeReviewAggregateArgs>(args: Subset<T, RecipeReviewAggregateArgs>): Prisma.PrismaPromise<GetRecipeReviewAggregateType<T>>

    /**
     * Group by RecipeReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeReviewGroupByArgs['orderBy'] }
        : { orderBy?: RecipeReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeReview model
   */
  readonly fields: RecipeReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeReview model
   */
  interface RecipeReviewFieldRefs {
    readonly id: FieldRef<"RecipeReview", 'String'>
    readonly userId: FieldRef<"RecipeReview", 'String'>
    readonly recipeId: FieldRef<"RecipeReview", 'String'>
    readonly rating: FieldRef<"RecipeReview", 'Float'>
    readonly comment: FieldRef<"RecipeReview", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RecipeReview findUnique
   */
  export type RecipeReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * Filter, which RecipeReview to fetch.
     */
    where: RecipeReviewWhereUniqueInput
  }

  /**
   * RecipeReview findUniqueOrThrow
   */
  export type RecipeReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * Filter, which RecipeReview to fetch.
     */
    where: RecipeReviewWhereUniqueInput
  }

  /**
   * RecipeReview findFirst
   */
  export type RecipeReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * Filter, which RecipeReview to fetch.
     */
    where?: RecipeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeReviews to fetch.
     */
    orderBy?: RecipeReviewOrderByWithRelationInput | RecipeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeReviews.
     */
    cursor?: RecipeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeReviews.
     */
    distinct?: RecipeReviewScalarFieldEnum | RecipeReviewScalarFieldEnum[]
  }

  /**
   * RecipeReview findFirstOrThrow
   */
  export type RecipeReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * Filter, which RecipeReview to fetch.
     */
    where?: RecipeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeReviews to fetch.
     */
    orderBy?: RecipeReviewOrderByWithRelationInput | RecipeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeReviews.
     */
    cursor?: RecipeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeReviews.
     */
    distinct?: RecipeReviewScalarFieldEnum | RecipeReviewScalarFieldEnum[]
  }

  /**
   * RecipeReview findMany
   */
  export type RecipeReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * Filter, which RecipeReviews to fetch.
     */
    where?: RecipeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeReviews to fetch.
     */
    orderBy?: RecipeReviewOrderByWithRelationInput | RecipeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeReviews.
     */
    cursor?: RecipeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeReviews.
     */
    skip?: number
    distinct?: RecipeReviewScalarFieldEnum | RecipeReviewScalarFieldEnum[]
  }

  /**
   * RecipeReview create
   */
  export type RecipeReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeReview.
     */
    data: XOR<RecipeReviewCreateInput, RecipeReviewUncheckedCreateInput>
  }

  /**
   * RecipeReview createMany
   */
  export type RecipeReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeReviews.
     */
    data: RecipeReviewCreateManyInput | RecipeReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeReview createManyAndReturn
   */
  export type RecipeReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * The data used to create many RecipeReviews.
     */
    data: RecipeReviewCreateManyInput | RecipeReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeReview update
   */
  export type RecipeReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeReview.
     */
    data: XOR<RecipeReviewUpdateInput, RecipeReviewUncheckedUpdateInput>
    /**
     * Choose, which RecipeReview to update.
     */
    where: RecipeReviewWhereUniqueInput
  }

  /**
   * RecipeReview updateMany
   */
  export type RecipeReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeReviews.
     */
    data: XOR<RecipeReviewUpdateManyMutationInput, RecipeReviewUncheckedUpdateManyInput>
    /**
     * Filter which RecipeReviews to update
     */
    where?: RecipeReviewWhereInput
    /**
     * Limit how many RecipeReviews to update.
     */
    limit?: number
  }

  /**
   * RecipeReview updateManyAndReturn
   */
  export type RecipeReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * The data used to update RecipeReviews.
     */
    data: XOR<RecipeReviewUpdateManyMutationInput, RecipeReviewUncheckedUpdateManyInput>
    /**
     * Filter which RecipeReviews to update
     */
    where?: RecipeReviewWhereInput
    /**
     * Limit how many RecipeReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeReview upsert
   */
  export type RecipeReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeReview to update in case it exists.
     */
    where: RecipeReviewWhereUniqueInput
    /**
     * In case the RecipeReview found by the `where` argument doesn't exist, create a new RecipeReview with this data.
     */
    create: XOR<RecipeReviewCreateInput, RecipeReviewUncheckedCreateInput>
    /**
     * In case the RecipeReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeReviewUpdateInput, RecipeReviewUncheckedUpdateInput>
  }

  /**
   * RecipeReview delete
   */
  export type RecipeReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
    /**
     * Filter which RecipeReview to delete.
     */
    where: RecipeReviewWhereUniqueInput
  }

  /**
   * RecipeReview deleteMany
   */
  export type RecipeReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeReviews to delete
     */
    where?: RecipeReviewWhereInput
    /**
     * Limit how many RecipeReviews to delete.
     */
    limit?: number
  }

  /**
   * RecipeReview without action
   */
  export type RecipeReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeReview
     */
    select?: RecipeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecipeReview
     */
    omit?: RecipeReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeReviewInclude<ExtArgs> | null
  }


  /**
   * Model Favourites
   */

  export type AggregateFavourites = {
    _count: FavouritesCountAggregateOutputType | null
    _min: FavouritesMinAggregateOutputType | null
    _max: FavouritesMaxAggregateOutputType | null
  }

  export type FavouritesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    recipeId: string | null
    createdAt: Date | null
  }

  export type FavouritesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    recipeId: string | null
    createdAt: Date | null
  }

  export type FavouritesCountAggregateOutputType = {
    id: number
    userId: number
    recipeId: number
    createdAt: number
    _all: number
  }


  export type FavouritesMinAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createdAt?: true
  }

  export type FavouritesMaxAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createdAt?: true
  }

  export type FavouritesCountAggregateInputType = {
    id?: true
    userId?: true
    recipeId?: true
    createdAt?: true
    _all?: true
  }

  export type FavouritesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourites to aggregate.
     */
    where?: FavouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favourites
    **/
    _count?: true | FavouritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouritesMaxAggregateInputType
  }

  export type GetFavouritesAggregateType<T extends FavouritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourites[P]>
      : GetScalarType<T[P], AggregateFavourites[P]>
  }




  export type FavouritesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritesWhereInput
    orderBy?: FavouritesOrderByWithAggregationInput | FavouritesOrderByWithAggregationInput[]
    by: FavouritesScalarFieldEnum[] | FavouritesScalarFieldEnum
    having?: FavouritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouritesCountAggregateInputType | true
    _min?: FavouritesMinAggregateInputType
    _max?: FavouritesMaxAggregateInputType
  }

  export type FavouritesGroupByOutputType = {
    id: string
    userId: string
    recipeId: string
    createdAt: Date
    _count: FavouritesCountAggregateOutputType | null
    _min: FavouritesMinAggregateOutputType | null
    _max: FavouritesMaxAggregateOutputType | null
  }

  type GetFavouritesGroupByPayload<T extends FavouritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavouritesGroupByOutputType[P]>
        }
      >
    >


  export type FavouritesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>

  export type FavouritesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>

  export type FavouritesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>

  export type FavouritesSelectScalar = {
    id?: boolean
    userId?: boolean
    recipeId?: boolean
    createdAt?: boolean
  }

  export type FavouritesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "recipeId" | "createdAt", ExtArgs["result"]["favourites"]>
  export type FavouritesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type FavouritesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type FavouritesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $FavouritesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favourites"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      recipeId: string
      createdAt: Date
    }, ExtArgs["result"]["favourites"]>
    composites: {}
  }

  type FavouritesGetPayload<S extends boolean | null | undefined | FavouritesDefaultArgs> = $Result.GetResult<Prisma.$FavouritesPayload, S>

  type FavouritesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavouritesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouritesCountAggregateInputType | true
    }

  export interface FavouritesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favourites'], meta: { name: 'Favourites' } }
    /**
     * Find zero or one Favourites that matches the filter.
     * @param {FavouritesFindUniqueArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouritesFindUniqueArgs>(args: SelectSubset<T, FavouritesFindUniqueArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favourites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavouritesFindUniqueOrThrowArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouritesFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouritesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesFindFirstArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouritesFindFirstArgs>(args?: SelectSubset<T, FavouritesFindFirstArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesFindFirstOrThrowArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouritesFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouritesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourites
     * const favourites = await prisma.favourites.findMany()
     * 
     * // Get first 10 Favourites
     * const favourites = await prisma.favourites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favouritesWithIdOnly = await prisma.favourites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavouritesFindManyArgs>(args?: SelectSubset<T, FavouritesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favourites.
     * @param {FavouritesCreateArgs} args - Arguments to create a Favourites.
     * @example
     * // Create one Favourites
     * const Favourites = await prisma.favourites.create({
     *   data: {
     *     // ... data to create a Favourites
     *   }
     * })
     * 
     */
    create<T extends FavouritesCreateArgs>(args: SelectSubset<T, FavouritesCreateArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favourites.
     * @param {FavouritesCreateManyArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourites = await prisma.favourites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouritesCreateManyArgs>(args?: SelectSubset<T, FavouritesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favourites and returns the data saved in the database.
     * @param {FavouritesCreateManyAndReturnArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourites = await prisma.favourites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favourites and only return the `id`
     * const favouritesWithIdOnly = await prisma.favourites.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavouritesCreateManyAndReturnArgs>(args?: SelectSubset<T, FavouritesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favourites.
     * @param {FavouritesDeleteArgs} args - Arguments to delete one Favourites.
     * @example
     * // Delete one Favourites
     * const Favourites = await prisma.favourites.delete({
     *   where: {
     *     // ... filter to delete one Favourites
     *   }
     * })
     * 
     */
    delete<T extends FavouritesDeleteArgs>(args: SelectSubset<T, FavouritesDeleteArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favourites.
     * @param {FavouritesUpdateArgs} args - Arguments to update one Favourites.
     * @example
     * // Update one Favourites
     * const favourites = await prisma.favourites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouritesUpdateArgs>(args: SelectSubset<T, FavouritesUpdateArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favourites.
     * @param {FavouritesDeleteManyArgs} args - Arguments to filter Favourites to delete.
     * @example
     * // Delete a few Favourites
     * const { count } = await prisma.favourites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouritesDeleteManyArgs>(args?: SelectSubset<T, FavouritesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourites
     * const favourites = await prisma.favourites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouritesUpdateManyArgs>(args: SelectSubset<T, FavouritesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites and returns the data updated in the database.
     * @param {FavouritesUpdateManyAndReturnArgs} args - Arguments to update many Favourites.
     * @example
     * // Update many Favourites
     * const favourites = await prisma.favourites.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favourites and only return the `id`
     * const favouritesWithIdOnly = await prisma.favourites.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavouritesUpdateManyAndReturnArgs>(args: SelectSubset<T, FavouritesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favourites.
     * @param {FavouritesUpsertArgs} args - Arguments to update or create a Favourites.
     * @example
     * // Update or create a Favourites
     * const favourites = await prisma.favourites.upsert({
     *   create: {
     *     // ... data to create a Favourites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourites we want to update
     *   }
     * })
     */
    upsert<T extends FavouritesUpsertArgs>(args: SelectSubset<T, FavouritesUpsertArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesCountArgs} args - Arguments to filter Favourites to count.
     * @example
     * // Count the number of Favourites
     * const count = await prisma.favourites.count({
     *   where: {
     *     // ... the filter for the Favourites we want to count
     *   }
     * })
    **/
    count<T extends FavouritesCountArgs>(
      args?: Subset<T, FavouritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavouritesAggregateArgs>(args: Subset<T, FavouritesAggregateArgs>): Prisma.PrismaPromise<GetFavouritesAggregateType<T>>

    /**
     * Group by Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavouritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouritesGroupByArgs['orderBy'] }
        : { orderBy?: FavouritesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavouritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favourites model
   */
  readonly fields: FavouritesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favourites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouritesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favourites model
   */
  interface FavouritesFieldRefs {
    readonly id: FieldRef<"Favourites", 'String'>
    readonly userId: FieldRef<"Favourites", 'String'>
    readonly recipeId: FieldRef<"Favourites", 'String'>
    readonly createdAt: FieldRef<"Favourites", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favourites findUnique
   */
  export type FavouritesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where: FavouritesWhereUniqueInput
  }

  /**
   * Favourites findUniqueOrThrow
   */
  export type FavouritesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where: FavouritesWhereUniqueInput
  }

  /**
   * Favourites findFirst
   */
  export type FavouritesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * Favourites findFirstOrThrow
   */
  export type FavouritesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * Favourites findMany
   */
  export type FavouritesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favourites.
     */
    cursor?: FavouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * Favourites create
   */
  export type FavouritesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * The data needed to create a Favourites.
     */
    data: XOR<FavouritesCreateInput, FavouritesUncheckedCreateInput>
  }

  /**
   * Favourites createMany
   */
  export type FavouritesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favourites.
     */
    data: FavouritesCreateManyInput | FavouritesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favourites createManyAndReturn
   */
  export type FavouritesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * The data used to create many Favourites.
     */
    data: FavouritesCreateManyInput | FavouritesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourites update
   */
  export type FavouritesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * The data needed to update a Favourites.
     */
    data: XOR<FavouritesUpdateInput, FavouritesUncheckedUpdateInput>
    /**
     * Choose, which Favourites to update.
     */
    where: FavouritesWhereUniqueInput
  }

  /**
   * Favourites updateMany
   */
  export type FavouritesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouritesUpdateManyMutationInput, FavouritesUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouritesWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
  }

  /**
   * Favourites updateManyAndReturn
   */
  export type FavouritesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouritesUpdateManyMutationInput, FavouritesUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouritesWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourites upsert
   */
  export type FavouritesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * The filter to search for the Favourites to update in case it exists.
     */
    where: FavouritesWhereUniqueInput
    /**
     * In case the Favourites found by the `where` argument doesn't exist, create a new Favourites with this data.
     */
    create: XOR<FavouritesCreateInput, FavouritesUncheckedCreateInput>
    /**
     * In case the Favourites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouritesUpdateInput, FavouritesUncheckedUpdateInput>
  }

  /**
   * Favourites delete
   */
  export type FavouritesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter which Favourites to delete.
     */
    where: FavouritesWhereUniqueInput
  }

  /**
   * Favourites deleteMany
   */
  export type FavouritesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourites to delete
     */
    where?: FavouritesWhereInput
    /**
     * Limit how many Favourites to delete.
     */
    limit?: number
  }

  /**
   * Favourites without action
   */
  export type FavouritesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourites
     */
    omit?: FavouritesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
  }


  /**
   * Model Award
   */

  export type AggregateAward = {
    _count: AwardCountAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  export type AwardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type AwardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
  }

  export type AwardCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type AwardMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type AwardMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type AwardCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type AwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Award to aggregate.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Awards
    **/
    _count?: true | AwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardMaxAggregateInputType
  }

  export type GetAwardAggregateType<T extends AwardAggregateArgs> = {
        [P in keyof T & keyof AggregateAward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward[P]>
      : GetScalarType<T[P], AggregateAward[P]>
  }




  export type AwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithAggregationInput | AwardOrderByWithAggregationInput[]
    by: AwardScalarFieldEnum[] | AwardScalarFieldEnum
    having?: AwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardCountAggregateInputType | true
    _min?: AwardMinAggregateInputType
    _max?: AwardMaxAggregateInputType
  }

  export type AwardGroupByOutputType = {
    id: string
    userId: string
    name: string
    _count: AwardCountAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  type GetAwardGroupByPayload<T extends AwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardGroupByOutputType[P]>
            : GetScalarType<T[P], AwardGroupByOutputType[P]>
        }
      >
    >


  export type AwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["award"]>

  export type AwardSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
  }

  export type AwardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name", ExtArgs["result"]["award"]>
  export type AwardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AwardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AwardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Award"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
    }, ExtArgs["result"]["award"]>
    composites: {}
  }

  type AwardGetPayload<S extends boolean | null | undefined | AwardDefaultArgs> = $Result.GetResult<Prisma.$AwardPayload, S>

  type AwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardCountAggregateInputType | true
    }

  export interface AwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Award'], meta: { name: 'Award' } }
    /**
     * Find zero or one Award that matches the filter.
     * @param {AwardFindUniqueArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardFindUniqueArgs>(args: SelectSubset<T, AwardFindUniqueArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardFindUniqueOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardFindFirstArgs>(args?: SelectSubset<T, AwardFindFirstArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Awards
     * const awards = await prisma.award.findMany()
     * 
     * // Get first 10 Awards
     * const awards = await prisma.award.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awardWithIdOnly = await prisma.award.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwardFindManyArgs>(args?: SelectSubset<T, AwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award.
     * @param {AwardCreateArgs} args - Arguments to create a Award.
     * @example
     * // Create one Award
     * const Award = await prisma.award.create({
     *   data: {
     *     // ... data to create a Award
     *   }
     * })
     * 
     */
    create<T extends AwardCreateArgs>(args: SelectSubset<T, AwardCreateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Awards.
     * @param {AwardCreateManyArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardCreateManyArgs>(args?: SelectSubset<T, AwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Awards and returns the data saved in the database.
     * @param {AwardCreateManyAndReturnArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwardCreateManyAndReturnArgs>(args?: SelectSubset<T, AwardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award.
     * @param {AwardDeleteArgs} args - Arguments to delete one Award.
     * @example
     * // Delete one Award
     * const Award = await prisma.award.delete({
     *   where: {
     *     // ... filter to delete one Award
     *   }
     * })
     * 
     */
    delete<T extends AwardDeleteArgs>(args: SelectSubset<T, AwardDeleteArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award.
     * @param {AwardUpdateArgs} args - Arguments to update one Award.
     * @example
     * // Update one Award
     * const award = await prisma.award.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardUpdateArgs>(args: SelectSubset<T, AwardUpdateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Awards.
     * @param {AwardDeleteManyArgs} args - Arguments to filter Awards to delete.
     * @example
     * // Delete a few Awards
     * const { count } = await prisma.award.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardDeleteManyArgs>(args?: SelectSubset<T, AwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardUpdateManyArgs>(args: SelectSubset<T, AwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards and returns the data updated in the database.
     * @param {AwardUpdateManyAndReturnArgs} args - Arguments to update many Awards.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AwardUpdateManyAndReturnArgs>(args: SelectSubset<T, AwardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award.
     * @param {AwardUpsertArgs} args - Arguments to update or create a Award.
     * @example
     * // Update or create a Award
     * const award = await prisma.award.upsert({
     *   create: {
     *     // ... data to create a Award
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award we want to update
     *   }
     * })
     */
    upsert<T extends AwardUpsertArgs>(args: SelectSubset<T, AwardUpsertArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardCountArgs} args - Arguments to filter Awards to count.
     * @example
     * // Count the number of Awards
     * const count = await prisma.award.count({
     *   where: {
     *     // ... the filter for the Awards we want to count
     *   }
     * })
    **/
    count<T extends AwardCountArgs>(
      args?: Subset<T, AwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AwardAggregateArgs>(args: Subset<T, AwardAggregateArgs>): Prisma.PrismaPromise<GetAwardAggregateType<T>>

    /**
     * Group by Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardGroupByArgs['orderBy'] }
        : { orderBy?: AwardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Award model
   */
  readonly fields: AwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Award.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Award model
   */
  interface AwardFieldRefs {
    readonly id: FieldRef<"Award", 'String'>
    readonly userId: FieldRef<"Award", 'String'>
    readonly name: FieldRef<"Award", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Award findUnique
   */
  export type AwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findUniqueOrThrow
   */
  export type AwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findFirst
   */
  export type AwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findFirstOrThrow
   */
  export type AwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findMany
   */
  export type AwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter, which Awards to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award create
   */
  export type AwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to create a Award.
     */
    data: XOR<AwardCreateInput, AwardUncheckedCreateInput>
  }

  /**
   * Award createMany
   */
  export type AwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Award createManyAndReturn
   */
  export type AwardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Award update
   */
  export type AwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The data needed to update a Award.
     */
    data: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
    /**
     * Choose, which Award to update.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award updateMany
   */
  export type AwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award updateManyAndReturn
   */
  export type AwardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Award upsert
   */
  export type AwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * The filter to search for the Award to update in case it exists.
     */
    where: AwardWhereUniqueInput
    /**
     * In case the Award found by the `where` argument doesn't exist, create a new Award with this data.
     */
    create: XOR<AwardCreateInput, AwardUncheckedCreateInput>
    /**
     * In case the Award was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
  }

  /**
   * Award delete
   */
  export type AwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
    /**
     * Filter which Award to delete.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award deleteMany
   */
  export type AwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Awards to delete
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to delete.
     */
    limit?: number
  }

  /**
   * Award without action
   */
  export type AwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AwardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    kitchenType: 'kitchenType',
    cookingTime: 'cookingTime',
    calories: 'calories',
    authorId: 'authorId',
    ingredientsCount: 'ingredientsCount',
    rating: 'rating'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    defaultUnit: 'defaultUnit',
    category: 'category'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const IngredientItemVOScalarFieldEnum: {
    id: 'id',
    recipeId: 'recipeId',
    ingredientId: 'ingredientId',
    quantity: 'quantity',
    unit: 'unit'
  };

  export type IngredientItemVOScalarFieldEnum = (typeof IngredientItemVOScalarFieldEnum)[keyof typeof IngredientItemVOScalarFieldEnum]


  export const ShoppingListScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    isCompleted: 'isCompleted'
  };

  export type ShoppingListScalarFieldEnum = (typeof ShoppingListScalarFieldEnum)[keyof typeof ShoppingListScalarFieldEnum]


  export const ShoppingListItemVOScalarFieldEnum: {
    id: 'id',
    shoppingListId: 'shoppingListId',
    ingredientId: 'ingredientId',
    quantity: 'quantity',
    unit: 'unit',
    isPurchased: 'isPurchased'
  };

  export type ShoppingListItemVOScalarFieldEnum = (typeof ShoppingListItemVOScalarFieldEnum)[keyof typeof ShoppingListItemVOScalarFieldEnum]


  export const RecipeReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recipeId: 'recipeId',
    rating: 'rating',
    comment: 'comment'
  };

  export type RecipeReviewScalarFieldEnum = (typeof RecipeReviewScalarFieldEnum)[keyof typeof RecipeReviewScalarFieldEnum]


  export const FavouritesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    recipeId: 'recipeId',
    createdAt: 'createdAt'
  };

  export type FavouritesScalarFieldEnum = (typeof FavouritesScalarFieldEnum)[keyof typeof FavouritesScalarFieldEnum]


  export const AwardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type AwardScalarFieldEnum = (typeof AwardScalarFieldEnum)[keyof typeof AwardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'KitchenType'
   */
  export type EnumKitchenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KitchenType'>
    


  /**
   * Reference to a field of type 'KitchenType[]'
   */
  export type ListEnumKitchenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KitchenType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    recipes?: RecipeListRelationFilter
    ratings?: RecipeReviewListRelationFilter
    shoppingLists?: ShoppingListListRelationFilter
    favourites?: FavouritesListRelationFilter
    awards?: AwardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    recipes?: RecipeOrderByRelationAggregateInput
    ratings?: RecipeReviewOrderByRelationAggregateInput
    shoppingLists?: ShoppingListOrderByRelationAggregateInput
    favourites?: FavouritesOrderByRelationAggregateInput
    awards?: AwardOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    recipes?: RecipeListRelationFilter
    ratings?: RecipeReviewListRelationFilter
    shoppingLists?: ShoppingListListRelationFilter
    favourites?: FavouritesListRelationFilter
    awards?: AwardListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    kitchenType?: EnumKitchenTypeFilter<"Recipe"> | $Enums.KitchenType
    cookingTime?: IntFilter<"Recipe"> | number
    calories?: IntFilter<"Recipe"> | number
    authorId?: StringFilter<"Recipe"> | string
    ingredientsCount?: IntFilter<"Recipe"> | number
    rating?: FloatFilter<"Recipe"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredientItems?: IngredientItemVOListRelationFilter
    favourites?: FavouritesListRelationFilter
    ratings?: RecipeReviewListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kitchenType?: SortOrder
    cookingTime?: SortOrder
    calories?: SortOrder
    authorId?: SortOrder
    ingredientsCount?: SortOrder
    rating?: SortOrder
    author?: UserOrderByWithRelationInput
    ingredientItems?: IngredientItemVOOrderByRelationAggregateInput
    favourites?: FavouritesOrderByRelationAggregateInput
    ratings?: RecipeReviewOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    kitchenType?: EnumKitchenTypeFilter<"Recipe"> | $Enums.KitchenType
    cookingTime?: IntFilter<"Recipe"> | number
    calories?: IntFilter<"Recipe"> | number
    authorId?: StringFilter<"Recipe"> | string
    ingredientsCount?: IntFilter<"Recipe"> | number
    rating?: FloatFilter<"Recipe"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredientItems?: IngredientItemVOListRelationFilter
    favourites?: FavouritesListRelationFilter
    ratings?: RecipeReviewListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kitchenType?: SortOrder
    cookingTime?: SortOrder
    calories?: SortOrder
    authorId?: SortOrder
    ingredientsCount?: SortOrder
    rating?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    name?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringWithAggregatesFilter<"Recipe"> | string
    kitchenType?: EnumKitchenTypeWithAggregatesFilter<"Recipe"> | $Enums.KitchenType
    cookingTime?: IntWithAggregatesFilter<"Recipe"> | number
    calories?: IntWithAggregatesFilter<"Recipe"> | number
    authorId?: StringWithAggregatesFilter<"Recipe"> | string
    ingredientsCount?: IntWithAggregatesFilter<"Recipe"> | number
    rating?: FloatWithAggregatesFilter<"Recipe"> | number
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    defaultUnit?: StringFilter<"Ingredient"> | string
    category?: StringFilter<"Ingredient"> | string
    shoppingListItems?: ShoppingListItemVOListRelationFilter
    IngredientItemVO?: IngredientItemVOListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    defaultUnit?: SortOrder
    category?: SortOrder
    shoppingListItems?: ShoppingListItemVOOrderByRelationAggregateInput
    IngredientItemVO?: IngredientItemVOOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    name?: StringFilter<"Ingredient"> | string
    defaultUnit?: StringFilter<"Ingredient"> | string
    category?: StringFilter<"Ingredient"> | string
    shoppingListItems?: ShoppingListItemVOListRelationFilter
    IngredientItemVO?: IngredientItemVOListRelationFilter
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    defaultUnit?: SortOrder
    category?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    defaultUnit?: StringWithAggregatesFilter<"Ingredient"> | string
    category?: StringWithAggregatesFilter<"Ingredient"> | string
  }

  export type IngredientItemVOWhereInput = {
    AND?: IngredientItemVOWhereInput | IngredientItemVOWhereInput[]
    OR?: IngredientItemVOWhereInput[]
    NOT?: IngredientItemVOWhereInput | IngredientItemVOWhereInput[]
    id?: StringFilter<"IngredientItemVO"> | string
    recipeId?: StringFilter<"IngredientItemVO"> | string
    ingredientId?: StringFilter<"IngredientItemVO"> | string
    quantity?: FloatFilter<"IngredientItemVO"> | number
    unit?: StringFilter<"IngredientItemVO"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type IngredientItemVOOrderByWithRelationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type IngredientItemVOWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredientItemVOWhereInput | IngredientItemVOWhereInput[]
    OR?: IngredientItemVOWhereInput[]
    NOT?: IngredientItemVOWhereInput | IngredientItemVOWhereInput[]
    recipeId?: StringFilter<"IngredientItemVO"> | string
    ingredientId?: StringFilter<"IngredientItemVO"> | string
    quantity?: FloatFilter<"IngredientItemVO"> | number
    unit?: StringFilter<"IngredientItemVO"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id">

  export type IngredientItemVOOrderByWithAggregationInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    _count?: IngredientItemVOCountOrderByAggregateInput
    _avg?: IngredientItemVOAvgOrderByAggregateInput
    _max?: IngredientItemVOMaxOrderByAggregateInput
    _min?: IngredientItemVOMinOrderByAggregateInput
    _sum?: IngredientItemVOSumOrderByAggregateInput
  }

  export type IngredientItemVOScalarWhereWithAggregatesInput = {
    AND?: IngredientItemVOScalarWhereWithAggregatesInput | IngredientItemVOScalarWhereWithAggregatesInput[]
    OR?: IngredientItemVOScalarWhereWithAggregatesInput[]
    NOT?: IngredientItemVOScalarWhereWithAggregatesInput | IngredientItemVOScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IngredientItemVO"> | string
    recipeId?: StringWithAggregatesFilter<"IngredientItemVO"> | string
    ingredientId?: StringWithAggregatesFilter<"IngredientItemVO"> | string
    quantity?: FloatWithAggregatesFilter<"IngredientItemVO"> | number
    unit?: StringWithAggregatesFilter<"IngredientItemVO"> | string
  }

  export type ShoppingListWhereInput = {
    AND?: ShoppingListWhereInput | ShoppingListWhereInput[]
    OR?: ShoppingListWhereInput[]
    NOT?: ShoppingListWhereInput | ShoppingListWhereInput[]
    id?: StringFilter<"ShoppingList"> | string
    userId?: StringFilter<"ShoppingList"> | string
    isCompleted?: BoolFilter<"ShoppingList"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shoppingListItems?: ShoppingListItemVOListRelationFilter
  }

  export type ShoppingListOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    isCompleted?: SortOrder
    user?: UserOrderByWithRelationInput
    shoppingListItems?: ShoppingListItemVOOrderByRelationAggregateInput
  }

  export type ShoppingListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingListWhereInput | ShoppingListWhereInput[]
    OR?: ShoppingListWhereInput[]
    NOT?: ShoppingListWhereInput | ShoppingListWhereInput[]
    userId?: StringFilter<"ShoppingList"> | string
    isCompleted?: BoolFilter<"ShoppingList"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shoppingListItems?: ShoppingListItemVOListRelationFilter
  }, "id">

  export type ShoppingListOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    isCompleted?: SortOrder
    _count?: ShoppingListCountOrderByAggregateInput
    _max?: ShoppingListMaxOrderByAggregateInput
    _min?: ShoppingListMinOrderByAggregateInput
  }

  export type ShoppingListScalarWhereWithAggregatesInput = {
    AND?: ShoppingListScalarWhereWithAggregatesInput | ShoppingListScalarWhereWithAggregatesInput[]
    OR?: ShoppingListScalarWhereWithAggregatesInput[]
    NOT?: ShoppingListScalarWhereWithAggregatesInput | ShoppingListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShoppingList"> | string
    userId?: StringWithAggregatesFilter<"ShoppingList"> | string
    isCompleted?: BoolWithAggregatesFilter<"ShoppingList"> | boolean
  }

  export type ShoppingListItemVOWhereInput = {
    AND?: ShoppingListItemVOWhereInput | ShoppingListItemVOWhereInput[]
    OR?: ShoppingListItemVOWhereInput[]
    NOT?: ShoppingListItemVOWhereInput | ShoppingListItemVOWhereInput[]
    id?: StringFilter<"ShoppingListItemVO"> | string
    shoppingListId?: StringFilter<"ShoppingListItemVO"> | string
    ingredientId?: StringFilter<"ShoppingListItemVO"> | string
    quantity?: FloatFilter<"ShoppingListItemVO"> | number
    unit?: StringFilter<"ShoppingListItemVO"> | string
    isPurchased?: BoolFilter<"ShoppingListItemVO"> | boolean
    shoppingList?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type ShoppingListItemVOOrderByWithRelationInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    isPurchased?: SortOrder
    shoppingList?: ShoppingListOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type ShoppingListItemVOWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShoppingListItemVOWhereInput | ShoppingListItemVOWhereInput[]
    OR?: ShoppingListItemVOWhereInput[]
    NOT?: ShoppingListItemVOWhereInput | ShoppingListItemVOWhereInput[]
    shoppingListId?: StringFilter<"ShoppingListItemVO"> | string
    ingredientId?: StringFilter<"ShoppingListItemVO"> | string
    quantity?: FloatFilter<"ShoppingListItemVO"> | number
    unit?: StringFilter<"ShoppingListItemVO"> | string
    isPurchased?: BoolFilter<"ShoppingListItemVO"> | boolean
    shoppingList?: XOR<ShoppingListScalarRelationFilter, ShoppingListWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id">

  export type ShoppingListItemVOOrderByWithAggregationInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    isPurchased?: SortOrder
    _count?: ShoppingListItemVOCountOrderByAggregateInput
    _avg?: ShoppingListItemVOAvgOrderByAggregateInput
    _max?: ShoppingListItemVOMaxOrderByAggregateInput
    _min?: ShoppingListItemVOMinOrderByAggregateInput
    _sum?: ShoppingListItemVOSumOrderByAggregateInput
  }

  export type ShoppingListItemVOScalarWhereWithAggregatesInput = {
    AND?: ShoppingListItemVOScalarWhereWithAggregatesInput | ShoppingListItemVOScalarWhereWithAggregatesInput[]
    OR?: ShoppingListItemVOScalarWhereWithAggregatesInput[]
    NOT?: ShoppingListItemVOScalarWhereWithAggregatesInput | ShoppingListItemVOScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShoppingListItemVO"> | string
    shoppingListId?: StringWithAggregatesFilter<"ShoppingListItemVO"> | string
    ingredientId?: StringWithAggregatesFilter<"ShoppingListItemVO"> | string
    quantity?: FloatWithAggregatesFilter<"ShoppingListItemVO"> | number
    unit?: StringWithAggregatesFilter<"ShoppingListItemVO"> | string
    isPurchased?: BoolWithAggregatesFilter<"ShoppingListItemVO"> | boolean
  }

  export type RecipeReviewWhereInput = {
    AND?: RecipeReviewWhereInput | RecipeReviewWhereInput[]
    OR?: RecipeReviewWhereInput[]
    NOT?: RecipeReviewWhereInput | RecipeReviewWhereInput[]
    id?: StringFilter<"RecipeReview"> | string
    userId?: StringFilter<"RecipeReview"> | string
    recipeId?: StringFilter<"RecipeReview"> | string
    rating?: FloatFilter<"RecipeReview"> | number
    comment?: StringNullableFilter<"RecipeReview"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type RecipeReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type RecipeReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_recipeId?: RecipeReviewUserIdRecipeIdCompoundUniqueInput
    AND?: RecipeReviewWhereInput | RecipeReviewWhereInput[]
    OR?: RecipeReviewWhereInput[]
    NOT?: RecipeReviewWhereInput | RecipeReviewWhereInput[]
    userId?: StringFilter<"RecipeReview"> | string
    recipeId?: StringFilter<"RecipeReview"> | string
    rating?: FloatFilter<"RecipeReview"> | number
    comment?: StringNullableFilter<"RecipeReview"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id" | "userId_recipeId">

  export type RecipeReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: RecipeReviewCountOrderByAggregateInput
    _avg?: RecipeReviewAvgOrderByAggregateInput
    _max?: RecipeReviewMaxOrderByAggregateInput
    _min?: RecipeReviewMinOrderByAggregateInput
    _sum?: RecipeReviewSumOrderByAggregateInput
  }

  export type RecipeReviewScalarWhereWithAggregatesInput = {
    AND?: RecipeReviewScalarWhereWithAggregatesInput | RecipeReviewScalarWhereWithAggregatesInput[]
    OR?: RecipeReviewScalarWhereWithAggregatesInput[]
    NOT?: RecipeReviewScalarWhereWithAggregatesInput | RecipeReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeReview"> | string
    userId?: StringWithAggregatesFilter<"RecipeReview"> | string
    recipeId?: StringWithAggregatesFilter<"RecipeReview"> | string
    rating?: FloatWithAggregatesFilter<"RecipeReview"> | number
    comment?: StringNullableWithAggregatesFilter<"RecipeReview"> | string | null
  }

  export type FavouritesWhereInput = {
    AND?: FavouritesWhereInput | FavouritesWhereInput[]
    OR?: FavouritesWhereInput[]
    NOT?: FavouritesWhereInput | FavouritesWhereInput[]
    id?: StringFilter<"Favourites"> | string
    userId?: StringFilter<"Favourites"> | string
    recipeId?: StringFilter<"Favourites"> | string
    createdAt?: DateTimeFilter<"Favourites"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type FavouritesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type FavouritesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavouritesWhereInput | FavouritesWhereInput[]
    OR?: FavouritesWhereInput[]
    NOT?: FavouritesWhereInput | FavouritesWhereInput[]
    userId?: StringFilter<"Favourites"> | string
    recipeId?: StringFilter<"Favourites"> | string
    createdAt?: DateTimeFilter<"Favourites"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type FavouritesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
    _count?: FavouritesCountOrderByAggregateInput
    _max?: FavouritesMaxOrderByAggregateInput
    _min?: FavouritesMinOrderByAggregateInput
  }

  export type FavouritesScalarWhereWithAggregatesInput = {
    AND?: FavouritesScalarWhereWithAggregatesInput | FavouritesScalarWhereWithAggregatesInput[]
    OR?: FavouritesScalarWhereWithAggregatesInput[]
    NOT?: FavouritesScalarWhereWithAggregatesInput | FavouritesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favourites"> | string
    userId?: StringWithAggregatesFilter<"Favourites"> | string
    recipeId?: StringWithAggregatesFilter<"Favourites"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favourites"> | Date | string
  }

  export type AwardWhereInput = {
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    id?: StringFilter<"Award"> | string
    userId?: StringFilter<"Award"> | string
    name?: StringFilter<"Award"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AwardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AwardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    userId?: StringFilter<"Award"> | string
    name?: StringFilter<"Award"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AwardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: AwardCountOrderByAggregateInput
    _max?: AwardMaxOrderByAggregateInput
    _min?: AwardMinOrderByAggregateInput
  }

  export type AwardScalarWhereWithAggregatesInput = {
    AND?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    OR?: AwardScalarWhereWithAggregatesInput[]
    NOT?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Award"> | string
    userId?: StringWithAggregatesFilter<"Award"> | string
    name?: StringWithAggregatesFilter<"Award"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    ratings?: RecipeReviewCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    favourites?: FavouritesCreateNestedManyWithoutUserInput
    awards?: AwardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
    awards?: AwardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    ratings?: RecipeReviewUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUpdateManyWithoutUserNestedInput
    awards?: AwardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    ratings?: RecipeReviewUncheckedUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
    awards?: AwardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    ingredientsCount: number
    rating: number
    author: UserCreateNestedOneWithoutRecipesInput
    ingredientItems?: IngredientItemVOCreateNestedManyWithoutRecipeInput
    favourites?: FavouritesCreateNestedManyWithoutRecipeInput
    ratings?: RecipeReviewCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    authorId: string
    ingredientsCount: number
    rating: number
    ingredientItems?: IngredientItemVOUncheckedCreateNestedManyWithoutRecipeInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutRecipeInput
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredientItems?: IngredientItemVOUpdateManyWithoutRecipeNestedInput
    favourites?: FavouritesUpdateManyWithoutRecipeNestedInput
    ratings?: RecipeReviewUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    ingredientItems?: IngredientItemVOUncheckedUpdateManyWithoutRecipeNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutRecipeNestedInput
    ratings?: RecipeReviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    authorId: string
    ingredientsCount: number
    rating: number
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    defaultUnit: string
    category: string
    shoppingListItems?: ShoppingListItemVOCreateNestedManyWithoutIngredientInput
    IngredientItemVO?: IngredientItemVOCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    name: string
    defaultUnit: string
    category: string
    shoppingListItems?: ShoppingListItemVOUncheckedCreateNestedManyWithoutIngredientInput
    IngredientItemVO?: IngredientItemVOUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultUnit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    shoppingListItems?: ShoppingListItemVOUpdateManyWithoutIngredientNestedInput
    IngredientItemVO?: IngredientItemVOUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultUnit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    shoppingListItems?: ShoppingListItemVOUncheckedUpdateManyWithoutIngredientNestedInput
    IngredientItemVO?: IngredientItemVOUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    name: string
    defaultUnit: string
    category: string
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultUnit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultUnit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientItemVOCreateInput = {
    id?: string
    quantity: number
    unit: string
    recipe: RecipeCreateNestedOneWithoutIngredientItemsInput
    ingredient: IngredientCreateNestedOneWithoutIngredientItemVOInput
  }

  export type IngredientItemVOUncheckedCreateInput = {
    id?: string
    recipeId: string
    ingredientId: string
    quantity: number
    unit: string
  }

  export type IngredientItemVOUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientItemsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutIngredientItemVONestedInput
  }

  export type IngredientItemVOUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientItemVOCreateManyInput = {
    id?: string
    recipeId: string
    ingredientId: string
    quantity: number
    unit: string
  }

  export type IngredientItemVOUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientItemVOUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type ShoppingListCreateInput = {
    id?: string
    isCompleted: boolean
    user: UserCreateNestedOneWithoutShoppingListsInput
    shoppingListItems?: ShoppingListItemVOCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedCreateInput = {
    id?: string
    userId: string
    isCompleted: boolean
    shoppingListItems?: ShoppingListItemVOUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutShoppingListsNestedInput
    shoppingListItems?: ShoppingListItemVOUpdateManyWithoutShoppingListNestedInput
  }

  export type ShoppingListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    shoppingListItems?: ShoppingListItemVOUncheckedUpdateManyWithoutShoppingListNestedInput
  }

  export type ShoppingListCreateManyInput = {
    id?: string
    userId: string
    isCompleted: boolean
  }

  export type ShoppingListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListItemVOCreateInput = {
    id?: string
    quantity: number
    unit: string
    isPurchased?: boolean
    shoppingList: ShoppingListCreateNestedOneWithoutShoppingListItemsInput
    ingredient: IngredientCreateNestedOneWithoutShoppingListItemsInput
  }

  export type ShoppingListItemVOUncheckedCreateInput = {
    id?: string
    shoppingListId: string
    ingredientId: string
    quantity: number
    unit: string
    isPurchased?: boolean
  }

  export type ShoppingListItemVOUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    shoppingList?: ShoppingListUpdateOneRequiredWithoutShoppingListItemsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutShoppingListItemsNestedInput
  }

  export type ShoppingListItemVOUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListItemVOCreateManyInput = {
    id?: string
    shoppingListId: string
    ingredientId: string
    quantity: number
    unit: string
    isPurchased?: boolean
  }

  export type ShoppingListItemVOUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListItemVOUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecipeReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    user: UserCreateNestedOneWithoutRatingsInput
    recipe: RecipeCreateNestedOneWithoutRatingsInput
  }

  export type RecipeReviewUncheckedCreateInput = {
    id?: string
    userId: string
    recipeId: string
    rating: number
    comment?: string | null
  }

  export type RecipeReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RecipeReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeReviewCreateManyInput = {
    id?: string
    userId: string
    recipeId: string
    rating: number
    comment?: string | null
  }

  export type RecipeReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavouritesCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavouritesInput
    recipe: RecipeCreateNestedOneWithoutFavouritesInput
  }

  export type FavouritesUncheckedCreateInput = {
    id?: string
    userId: string
    recipeId: string
    createdAt?: Date | string
  }

  export type FavouritesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouritesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouritesCreateManyInput = {
    id?: string
    userId: string
    recipeId: string
    createdAt?: Date | string
  }

  export type FavouritesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouritesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutAwardsInput
  }

  export type AwardUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
  }

  export type AwardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAwardsNestedInput
  }

  export type AwardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AwardCreateManyInput = {
    id?: string
    userId: string
    name: string
  }

  export type AwardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AwardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type RecipeReviewListRelationFilter = {
    every?: RecipeReviewWhereInput
    some?: RecipeReviewWhereInput
    none?: RecipeReviewWhereInput
  }

  export type ShoppingListListRelationFilter = {
    every?: ShoppingListWhereInput
    some?: ShoppingListWhereInput
    none?: ShoppingListWhereInput
  }

  export type FavouritesListRelationFilter = {
    every?: FavouritesWhereInput
    some?: FavouritesWhereInput
    none?: FavouritesWhereInput
  }

  export type AwardListRelationFilter = {
    every?: AwardWhereInput
    some?: AwardWhereInput
    none?: AwardWhereInput
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShoppingListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavouritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AwardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumKitchenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KitchenType | EnumKitchenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KitchenType[] | ListEnumKitchenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KitchenType[] | ListEnumKitchenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKitchenTypeFilter<$PrismaModel> | $Enums.KitchenType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IngredientItemVOListRelationFilter = {
    every?: IngredientItemVOWhereInput
    some?: IngredientItemVOWhereInput
    none?: IngredientItemVOWhereInput
  }

  export type IngredientItemVOOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kitchenType?: SortOrder
    cookingTime?: SortOrder
    calories?: SortOrder
    authorId?: SortOrder
    ingredientsCount?: SortOrder
    rating?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    cookingTime?: SortOrder
    calories?: SortOrder
    ingredientsCount?: SortOrder
    rating?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kitchenType?: SortOrder
    cookingTime?: SortOrder
    calories?: SortOrder
    authorId?: SortOrder
    ingredientsCount?: SortOrder
    rating?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    kitchenType?: SortOrder
    cookingTime?: SortOrder
    calories?: SortOrder
    authorId?: SortOrder
    ingredientsCount?: SortOrder
    rating?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    cookingTime?: SortOrder
    calories?: SortOrder
    ingredientsCount?: SortOrder
    rating?: SortOrder
  }

  export type EnumKitchenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KitchenType | EnumKitchenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KitchenType[] | ListEnumKitchenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KitchenType[] | ListEnumKitchenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKitchenTypeWithAggregatesFilter<$PrismaModel> | $Enums.KitchenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKitchenTypeFilter<$PrismaModel>
    _max?: NestedEnumKitchenTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ShoppingListItemVOListRelationFilter = {
    every?: ShoppingListItemVOWhereInput
    some?: ShoppingListItemVOWhereInput
    none?: ShoppingListItemVOWhereInput
  }

  export type ShoppingListItemVOOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    defaultUnit?: SortOrder
    category?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    defaultUnit?: SortOrder
    category?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    defaultUnit?: SortOrder
    category?: SortOrder
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type IngredientItemVOCountOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type IngredientItemVOAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IngredientItemVOMaxOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type IngredientItemVOMinOrderByAggregateInput = {
    id?: SortOrder
    recipeId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type IngredientItemVOSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ShoppingListCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCompleted?: SortOrder
  }

  export type ShoppingListMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCompleted?: SortOrder
  }

  export type ShoppingListMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    isCompleted?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ShoppingListScalarRelationFilter = {
    is?: ShoppingListWhereInput
    isNot?: ShoppingListWhereInput
  }

  export type ShoppingListItemVOCountOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    isPurchased?: SortOrder
  }

  export type ShoppingListItemVOAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ShoppingListItemVOMaxOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    isPurchased?: SortOrder
  }

  export type ShoppingListItemVOMinOrderByAggregateInput = {
    id?: SortOrder
    shoppingListId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    isPurchased?: SortOrder
  }

  export type ShoppingListItemVOSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecipeReviewUserIdRecipeIdCompoundUniqueInput = {
    userId: string
    recipeId: string
  }

  export type RecipeReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type RecipeReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type RecipeReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type RecipeReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
  }

  export type RecipeReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FavouritesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavouritesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavouritesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipeId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AwardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type AwardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type AwardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type RecipeCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type RecipeReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeReviewCreateWithoutUserInput, RecipeReviewUncheckedCreateWithoutUserInput> | RecipeReviewCreateWithoutUserInput[] | RecipeReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeReviewCreateOrConnectWithoutUserInput | RecipeReviewCreateOrConnectWithoutUserInput[]
    createMany?: RecipeReviewCreateManyUserInputEnvelope
    connect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
  }

  export type ShoppingListCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
  }

  export type FavouritesCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput> | FavouritesCreateWithoutUserInput[] | FavouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutUserInput | FavouritesCreateOrConnectWithoutUserInput[]
    createMany?: FavouritesCreateManyUserInputEnvelope
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
  }

  export type AwardCreateNestedManyWithoutUserInput = {
    create?: XOR<AwardCreateWithoutUserInput, AwardUncheckedCreateWithoutUserInput> | AwardCreateWithoutUserInput[] | AwardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutUserInput | AwardCreateOrConnectWithoutUserInput[]
    createMany?: AwardCreateManyUserInputEnvelope
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
  }

  export type RecipeUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type RecipeReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeReviewCreateWithoutUserInput, RecipeReviewUncheckedCreateWithoutUserInput> | RecipeReviewCreateWithoutUserInput[] | RecipeReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeReviewCreateOrConnectWithoutUserInput | RecipeReviewCreateOrConnectWithoutUserInput[]
    createMany?: RecipeReviewCreateManyUserInputEnvelope
    connect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
  }

  export type ShoppingListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
  }

  export type FavouritesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput> | FavouritesCreateWithoutUserInput[] | FavouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutUserInput | FavouritesCreateOrConnectWithoutUserInput[]
    createMany?: FavouritesCreateManyUserInputEnvelope
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
  }

  export type AwardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AwardCreateWithoutUserInput, AwardUncheckedCreateWithoutUserInput> | AwardCreateWithoutUserInput[] | AwardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutUserInput | AwardCreateOrConnectWithoutUserInput[]
    createMany?: AwardCreateManyUserInputEnvelope
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RecipeUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput | RecipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput | RecipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput | RecipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type RecipeReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeReviewCreateWithoutUserInput, RecipeReviewUncheckedCreateWithoutUserInput> | RecipeReviewCreateWithoutUserInput[] | RecipeReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeReviewCreateOrConnectWithoutUserInput | RecipeReviewCreateOrConnectWithoutUserInput[]
    upsert?: RecipeReviewUpsertWithWhereUniqueWithoutUserInput | RecipeReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeReviewCreateManyUserInputEnvelope
    set?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    disconnect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    delete?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    connect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    update?: RecipeReviewUpdateWithWhereUniqueWithoutUserInput | RecipeReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeReviewUpdateManyWithWhereWithoutUserInput | RecipeReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeReviewScalarWhereInput | RecipeReviewScalarWhereInput[]
  }

  export type ShoppingListUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingListUpsertWithWhereUniqueWithoutUserInput | ShoppingListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    set?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    disconnect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    delete?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    update?: ShoppingListUpdateWithWhereUniqueWithoutUserInput | ShoppingListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingListUpdateManyWithWhereWithoutUserInput | ShoppingListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
  }

  export type FavouritesUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput> | FavouritesCreateWithoutUserInput[] | FavouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutUserInput | FavouritesCreateOrConnectWithoutUserInput[]
    upsert?: FavouritesUpsertWithWhereUniqueWithoutUserInput | FavouritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouritesCreateManyUserInputEnvelope
    set?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    disconnect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    delete?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    update?: FavouritesUpdateWithWhereUniqueWithoutUserInput | FavouritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouritesUpdateManyWithWhereWithoutUserInput | FavouritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
  }

  export type AwardUpdateManyWithoutUserNestedInput = {
    create?: XOR<AwardCreateWithoutUserInput, AwardUncheckedCreateWithoutUserInput> | AwardCreateWithoutUserInput[] | AwardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutUserInput | AwardCreateOrConnectWithoutUserInput[]
    upsert?: AwardUpsertWithWhereUniqueWithoutUserInput | AwardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AwardCreateManyUserInputEnvelope
    set?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    disconnect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    delete?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    update?: AwardUpdateWithWhereUniqueWithoutUserInput | AwardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AwardUpdateManyWithWhereWithoutUserInput | AwardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AwardScalarWhereInput | AwardScalarWhereInput[]
  }

  export type RecipeUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput> | RecipeCreateWithoutAuthorInput[] | RecipeUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutAuthorInput | RecipeCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutAuthorInput | RecipeUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipeCreateManyAuthorInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutAuthorInput | RecipeUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutAuthorInput | RecipeUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type RecipeReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeReviewCreateWithoutUserInput, RecipeReviewUncheckedCreateWithoutUserInput> | RecipeReviewCreateWithoutUserInput[] | RecipeReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeReviewCreateOrConnectWithoutUserInput | RecipeReviewCreateOrConnectWithoutUserInput[]
    upsert?: RecipeReviewUpsertWithWhereUniqueWithoutUserInput | RecipeReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeReviewCreateManyUserInputEnvelope
    set?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    disconnect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    delete?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    connect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    update?: RecipeReviewUpdateWithWhereUniqueWithoutUserInput | RecipeReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeReviewUpdateManyWithWhereWithoutUserInput | RecipeReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeReviewScalarWhereInput | RecipeReviewScalarWhereInput[]
  }

  export type ShoppingListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput> | ShoppingListCreateWithoutUserInput[] | ShoppingListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShoppingListCreateOrConnectWithoutUserInput | ShoppingListCreateOrConnectWithoutUserInput[]
    upsert?: ShoppingListUpsertWithWhereUniqueWithoutUserInput | ShoppingListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShoppingListCreateManyUserInputEnvelope
    set?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    disconnect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    delete?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    connect?: ShoppingListWhereUniqueInput | ShoppingListWhereUniqueInput[]
    update?: ShoppingListUpdateWithWhereUniqueWithoutUserInput | ShoppingListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShoppingListUpdateManyWithWhereWithoutUserInput | ShoppingListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
  }

  export type FavouritesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput> | FavouritesCreateWithoutUserInput[] | FavouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutUserInput | FavouritesCreateOrConnectWithoutUserInput[]
    upsert?: FavouritesUpsertWithWhereUniqueWithoutUserInput | FavouritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouritesCreateManyUserInputEnvelope
    set?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    disconnect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    delete?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    update?: FavouritesUpdateWithWhereUniqueWithoutUserInput | FavouritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouritesUpdateManyWithWhereWithoutUserInput | FavouritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
  }

  export type AwardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AwardCreateWithoutUserInput, AwardUncheckedCreateWithoutUserInput> | AwardCreateWithoutUserInput[] | AwardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AwardCreateOrConnectWithoutUserInput | AwardCreateOrConnectWithoutUserInput[]
    upsert?: AwardUpsertWithWhereUniqueWithoutUserInput | AwardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AwardCreateManyUserInputEnvelope
    set?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    disconnect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    delete?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    connect?: AwardWhereUniqueInput | AwardWhereUniqueInput[]
    update?: AwardUpdateWithWhereUniqueWithoutUserInput | AwardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AwardUpdateManyWithWhereWithoutUserInput | AwardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AwardScalarWhereInput | AwardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type IngredientItemVOCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientItemVOCreateWithoutRecipeInput, IngredientItemVOUncheckedCreateWithoutRecipeInput> | IngredientItemVOCreateWithoutRecipeInput[] | IngredientItemVOUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientItemVOCreateOrConnectWithoutRecipeInput | IngredientItemVOCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientItemVOCreateManyRecipeInputEnvelope
    connect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
  }

  export type FavouritesCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavouritesCreateWithoutRecipeInput, FavouritesUncheckedCreateWithoutRecipeInput> | FavouritesCreateWithoutRecipeInput[] | FavouritesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutRecipeInput | FavouritesCreateOrConnectWithoutRecipeInput[]
    createMany?: FavouritesCreateManyRecipeInputEnvelope
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
  }

  export type RecipeReviewCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeReviewCreateWithoutRecipeInput, RecipeReviewUncheckedCreateWithoutRecipeInput> | RecipeReviewCreateWithoutRecipeInput[] | RecipeReviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeReviewCreateOrConnectWithoutRecipeInput | RecipeReviewCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeReviewCreateManyRecipeInputEnvelope
    connect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
  }

  export type IngredientItemVOUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<IngredientItemVOCreateWithoutRecipeInput, IngredientItemVOUncheckedCreateWithoutRecipeInput> | IngredientItemVOCreateWithoutRecipeInput[] | IngredientItemVOUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientItemVOCreateOrConnectWithoutRecipeInput | IngredientItemVOCreateOrConnectWithoutRecipeInput[]
    createMany?: IngredientItemVOCreateManyRecipeInputEnvelope
    connect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
  }

  export type FavouritesUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavouritesCreateWithoutRecipeInput, FavouritesUncheckedCreateWithoutRecipeInput> | FavouritesCreateWithoutRecipeInput[] | FavouritesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutRecipeInput | FavouritesCreateOrConnectWithoutRecipeInput[]
    createMany?: FavouritesCreateManyRecipeInputEnvelope
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
  }

  export type RecipeReviewUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<RecipeReviewCreateWithoutRecipeInput, RecipeReviewUncheckedCreateWithoutRecipeInput> | RecipeReviewCreateWithoutRecipeInput[] | RecipeReviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeReviewCreateOrConnectWithoutRecipeInput | RecipeReviewCreateOrConnectWithoutRecipeInput[]
    createMany?: RecipeReviewCreateManyRecipeInputEnvelope
    connect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
  }

  export type EnumKitchenTypeFieldUpdateOperationsInput = {
    set?: $Enums.KitchenType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    upsert?: UserUpsertWithoutRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipesInput, UserUpdateWithoutRecipesInput>, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type IngredientItemVOUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientItemVOCreateWithoutRecipeInput, IngredientItemVOUncheckedCreateWithoutRecipeInput> | IngredientItemVOCreateWithoutRecipeInput[] | IngredientItemVOUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientItemVOCreateOrConnectWithoutRecipeInput | IngredientItemVOCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientItemVOUpsertWithWhereUniqueWithoutRecipeInput | IngredientItemVOUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientItemVOCreateManyRecipeInputEnvelope
    set?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    disconnect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    delete?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    connect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    update?: IngredientItemVOUpdateWithWhereUniqueWithoutRecipeInput | IngredientItemVOUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientItemVOUpdateManyWithWhereWithoutRecipeInput | IngredientItemVOUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientItemVOScalarWhereInput | IngredientItemVOScalarWhereInput[]
  }

  export type FavouritesUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavouritesCreateWithoutRecipeInput, FavouritesUncheckedCreateWithoutRecipeInput> | FavouritesCreateWithoutRecipeInput[] | FavouritesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutRecipeInput | FavouritesCreateOrConnectWithoutRecipeInput[]
    upsert?: FavouritesUpsertWithWhereUniqueWithoutRecipeInput | FavouritesUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavouritesCreateManyRecipeInputEnvelope
    set?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    disconnect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    delete?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    update?: FavouritesUpdateWithWhereUniqueWithoutRecipeInput | FavouritesUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavouritesUpdateManyWithWhereWithoutRecipeInput | FavouritesUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
  }

  export type RecipeReviewUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeReviewCreateWithoutRecipeInput, RecipeReviewUncheckedCreateWithoutRecipeInput> | RecipeReviewCreateWithoutRecipeInput[] | RecipeReviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeReviewCreateOrConnectWithoutRecipeInput | RecipeReviewCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeReviewUpsertWithWhereUniqueWithoutRecipeInput | RecipeReviewUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeReviewCreateManyRecipeInputEnvelope
    set?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    disconnect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    delete?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    connect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    update?: RecipeReviewUpdateWithWhereUniqueWithoutRecipeInput | RecipeReviewUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeReviewUpdateManyWithWhereWithoutRecipeInput | RecipeReviewUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeReviewScalarWhereInput | RecipeReviewScalarWhereInput[]
  }

  export type IngredientItemVOUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<IngredientItemVOCreateWithoutRecipeInput, IngredientItemVOUncheckedCreateWithoutRecipeInput> | IngredientItemVOCreateWithoutRecipeInput[] | IngredientItemVOUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: IngredientItemVOCreateOrConnectWithoutRecipeInput | IngredientItemVOCreateOrConnectWithoutRecipeInput[]
    upsert?: IngredientItemVOUpsertWithWhereUniqueWithoutRecipeInput | IngredientItemVOUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: IngredientItemVOCreateManyRecipeInputEnvelope
    set?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    disconnect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    delete?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    connect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    update?: IngredientItemVOUpdateWithWhereUniqueWithoutRecipeInput | IngredientItemVOUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: IngredientItemVOUpdateManyWithWhereWithoutRecipeInput | IngredientItemVOUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: IngredientItemVOScalarWhereInput | IngredientItemVOScalarWhereInput[]
  }

  export type FavouritesUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavouritesCreateWithoutRecipeInput, FavouritesUncheckedCreateWithoutRecipeInput> | FavouritesCreateWithoutRecipeInput[] | FavouritesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutRecipeInput | FavouritesCreateOrConnectWithoutRecipeInput[]
    upsert?: FavouritesUpsertWithWhereUniqueWithoutRecipeInput | FavouritesUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavouritesCreateManyRecipeInputEnvelope
    set?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    disconnect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    delete?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    update?: FavouritesUpdateWithWhereUniqueWithoutRecipeInput | FavouritesUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavouritesUpdateManyWithWhereWithoutRecipeInput | FavouritesUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
  }

  export type RecipeReviewUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<RecipeReviewCreateWithoutRecipeInput, RecipeReviewUncheckedCreateWithoutRecipeInput> | RecipeReviewCreateWithoutRecipeInput[] | RecipeReviewUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: RecipeReviewCreateOrConnectWithoutRecipeInput | RecipeReviewCreateOrConnectWithoutRecipeInput[]
    upsert?: RecipeReviewUpsertWithWhereUniqueWithoutRecipeInput | RecipeReviewUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: RecipeReviewCreateManyRecipeInputEnvelope
    set?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    disconnect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    delete?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    connect?: RecipeReviewWhereUniqueInput | RecipeReviewWhereUniqueInput[]
    update?: RecipeReviewUpdateWithWhereUniqueWithoutRecipeInput | RecipeReviewUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: RecipeReviewUpdateManyWithWhereWithoutRecipeInput | RecipeReviewUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: RecipeReviewScalarWhereInput | RecipeReviewScalarWhereInput[]
  }

  export type ShoppingListItemVOCreateNestedManyWithoutIngredientInput = {
    create?: XOR<ShoppingListItemVOCreateWithoutIngredientInput, ShoppingListItemVOUncheckedCreateWithoutIngredientInput> | ShoppingListItemVOCreateWithoutIngredientInput[] | ShoppingListItemVOUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ShoppingListItemVOCreateOrConnectWithoutIngredientInput | ShoppingListItemVOCreateOrConnectWithoutIngredientInput[]
    createMany?: ShoppingListItemVOCreateManyIngredientInputEnvelope
    connect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
  }

  export type IngredientItemVOCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientItemVOCreateWithoutIngredientInput, IngredientItemVOUncheckedCreateWithoutIngredientInput> | IngredientItemVOCreateWithoutIngredientInput[] | IngredientItemVOUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientItemVOCreateOrConnectWithoutIngredientInput | IngredientItemVOCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientItemVOCreateManyIngredientInputEnvelope
    connect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
  }

  export type ShoppingListItemVOUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<ShoppingListItemVOCreateWithoutIngredientInput, ShoppingListItemVOUncheckedCreateWithoutIngredientInput> | ShoppingListItemVOCreateWithoutIngredientInput[] | ShoppingListItemVOUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ShoppingListItemVOCreateOrConnectWithoutIngredientInput | ShoppingListItemVOCreateOrConnectWithoutIngredientInput[]
    createMany?: ShoppingListItemVOCreateManyIngredientInputEnvelope
    connect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
  }

  export type IngredientItemVOUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<IngredientItemVOCreateWithoutIngredientInput, IngredientItemVOUncheckedCreateWithoutIngredientInput> | IngredientItemVOCreateWithoutIngredientInput[] | IngredientItemVOUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientItemVOCreateOrConnectWithoutIngredientInput | IngredientItemVOCreateOrConnectWithoutIngredientInput[]
    createMany?: IngredientItemVOCreateManyIngredientInputEnvelope
    connect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
  }

  export type ShoppingListItemVOUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<ShoppingListItemVOCreateWithoutIngredientInput, ShoppingListItemVOUncheckedCreateWithoutIngredientInput> | ShoppingListItemVOCreateWithoutIngredientInput[] | ShoppingListItemVOUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ShoppingListItemVOCreateOrConnectWithoutIngredientInput | ShoppingListItemVOCreateOrConnectWithoutIngredientInput[]
    upsert?: ShoppingListItemVOUpsertWithWhereUniqueWithoutIngredientInput | ShoppingListItemVOUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: ShoppingListItemVOCreateManyIngredientInputEnvelope
    set?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    disconnect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    delete?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    connect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    update?: ShoppingListItemVOUpdateWithWhereUniqueWithoutIngredientInput | ShoppingListItemVOUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: ShoppingListItemVOUpdateManyWithWhereWithoutIngredientInput | ShoppingListItemVOUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: ShoppingListItemVOScalarWhereInput | ShoppingListItemVOScalarWhereInput[]
  }

  export type IngredientItemVOUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientItemVOCreateWithoutIngredientInput, IngredientItemVOUncheckedCreateWithoutIngredientInput> | IngredientItemVOCreateWithoutIngredientInput[] | IngredientItemVOUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientItemVOCreateOrConnectWithoutIngredientInput | IngredientItemVOCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientItemVOUpsertWithWhereUniqueWithoutIngredientInput | IngredientItemVOUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientItemVOCreateManyIngredientInputEnvelope
    set?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    disconnect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    delete?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    connect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    update?: IngredientItemVOUpdateWithWhereUniqueWithoutIngredientInput | IngredientItemVOUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientItemVOUpdateManyWithWhereWithoutIngredientInput | IngredientItemVOUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientItemVOScalarWhereInput | IngredientItemVOScalarWhereInput[]
  }

  export type ShoppingListItemVOUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<ShoppingListItemVOCreateWithoutIngredientInput, ShoppingListItemVOUncheckedCreateWithoutIngredientInput> | ShoppingListItemVOCreateWithoutIngredientInput[] | ShoppingListItemVOUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: ShoppingListItemVOCreateOrConnectWithoutIngredientInput | ShoppingListItemVOCreateOrConnectWithoutIngredientInput[]
    upsert?: ShoppingListItemVOUpsertWithWhereUniqueWithoutIngredientInput | ShoppingListItemVOUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: ShoppingListItemVOCreateManyIngredientInputEnvelope
    set?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    disconnect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    delete?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    connect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    update?: ShoppingListItemVOUpdateWithWhereUniqueWithoutIngredientInput | ShoppingListItemVOUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: ShoppingListItemVOUpdateManyWithWhereWithoutIngredientInput | ShoppingListItemVOUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: ShoppingListItemVOScalarWhereInput | ShoppingListItemVOScalarWhereInput[]
  }

  export type IngredientItemVOUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<IngredientItemVOCreateWithoutIngredientInput, IngredientItemVOUncheckedCreateWithoutIngredientInput> | IngredientItemVOCreateWithoutIngredientInput[] | IngredientItemVOUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: IngredientItemVOCreateOrConnectWithoutIngredientInput | IngredientItemVOCreateOrConnectWithoutIngredientInput[]
    upsert?: IngredientItemVOUpsertWithWhereUniqueWithoutIngredientInput | IngredientItemVOUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: IngredientItemVOCreateManyIngredientInputEnvelope
    set?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    disconnect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    delete?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    connect?: IngredientItemVOWhereUniqueInput | IngredientItemVOWhereUniqueInput[]
    update?: IngredientItemVOUpdateWithWhereUniqueWithoutIngredientInput | IngredientItemVOUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: IngredientItemVOUpdateManyWithWhereWithoutIngredientInput | IngredientItemVOUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: IngredientItemVOScalarWhereInput | IngredientItemVOScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutIngredientItemsInput = {
    create?: XOR<RecipeCreateWithoutIngredientItemsInput, RecipeUncheckedCreateWithoutIngredientItemsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientItemsInput
    connect?: RecipeWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutIngredientItemVOInput = {
    create?: XOR<IngredientCreateWithoutIngredientItemVOInput, IngredientUncheckedCreateWithoutIngredientItemVOInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutIngredientItemVOInput
    connect?: IngredientWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutIngredientItemsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientItemsInput, RecipeUncheckedCreateWithoutIngredientItemsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientItemsInput
    upsert?: RecipeUpsertWithoutIngredientItemsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientItemsInput, RecipeUpdateWithoutIngredientItemsInput>, RecipeUncheckedUpdateWithoutIngredientItemsInput>
  }

  export type IngredientUpdateOneRequiredWithoutIngredientItemVONestedInput = {
    create?: XOR<IngredientCreateWithoutIngredientItemVOInput, IngredientUncheckedCreateWithoutIngredientItemVOInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutIngredientItemVOInput
    upsert?: IngredientUpsertWithoutIngredientItemVOInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutIngredientItemVOInput, IngredientUpdateWithoutIngredientItemVOInput>, IngredientUncheckedUpdateWithoutIngredientItemVOInput>
  }

  export type UserCreateNestedOneWithoutShoppingListsInput = {
    create?: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShoppingListsInput
    connect?: UserWhereUniqueInput
  }

  export type ShoppingListItemVOCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<ShoppingListItemVOCreateWithoutShoppingListInput, ShoppingListItemVOUncheckedCreateWithoutShoppingListInput> | ShoppingListItemVOCreateWithoutShoppingListInput[] | ShoppingListItemVOUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: ShoppingListItemVOCreateOrConnectWithoutShoppingListInput | ShoppingListItemVOCreateOrConnectWithoutShoppingListInput[]
    createMany?: ShoppingListItemVOCreateManyShoppingListInputEnvelope
    connect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
  }

  export type ShoppingListItemVOUncheckedCreateNestedManyWithoutShoppingListInput = {
    create?: XOR<ShoppingListItemVOCreateWithoutShoppingListInput, ShoppingListItemVOUncheckedCreateWithoutShoppingListInput> | ShoppingListItemVOCreateWithoutShoppingListInput[] | ShoppingListItemVOUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: ShoppingListItemVOCreateOrConnectWithoutShoppingListInput | ShoppingListItemVOCreateOrConnectWithoutShoppingListInput[]
    createMany?: ShoppingListItemVOCreateManyShoppingListInputEnvelope
    connect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutShoppingListsNestedInput = {
    create?: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShoppingListsInput
    upsert?: UserUpsertWithoutShoppingListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShoppingListsInput, UserUpdateWithoutShoppingListsInput>, UserUncheckedUpdateWithoutShoppingListsInput>
  }

  export type ShoppingListItemVOUpdateManyWithoutShoppingListNestedInput = {
    create?: XOR<ShoppingListItemVOCreateWithoutShoppingListInput, ShoppingListItemVOUncheckedCreateWithoutShoppingListInput> | ShoppingListItemVOCreateWithoutShoppingListInput[] | ShoppingListItemVOUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: ShoppingListItemVOCreateOrConnectWithoutShoppingListInput | ShoppingListItemVOCreateOrConnectWithoutShoppingListInput[]
    upsert?: ShoppingListItemVOUpsertWithWhereUniqueWithoutShoppingListInput | ShoppingListItemVOUpsertWithWhereUniqueWithoutShoppingListInput[]
    createMany?: ShoppingListItemVOCreateManyShoppingListInputEnvelope
    set?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    disconnect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    delete?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    connect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    update?: ShoppingListItemVOUpdateWithWhereUniqueWithoutShoppingListInput | ShoppingListItemVOUpdateWithWhereUniqueWithoutShoppingListInput[]
    updateMany?: ShoppingListItemVOUpdateManyWithWhereWithoutShoppingListInput | ShoppingListItemVOUpdateManyWithWhereWithoutShoppingListInput[]
    deleteMany?: ShoppingListItemVOScalarWhereInput | ShoppingListItemVOScalarWhereInput[]
  }

  export type ShoppingListItemVOUncheckedUpdateManyWithoutShoppingListNestedInput = {
    create?: XOR<ShoppingListItemVOCreateWithoutShoppingListInput, ShoppingListItemVOUncheckedCreateWithoutShoppingListInput> | ShoppingListItemVOCreateWithoutShoppingListInput[] | ShoppingListItemVOUncheckedCreateWithoutShoppingListInput[]
    connectOrCreate?: ShoppingListItemVOCreateOrConnectWithoutShoppingListInput | ShoppingListItemVOCreateOrConnectWithoutShoppingListInput[]
    upsert?: ShoppingListItemVOUpsertWithWhereUniqueWithoutShoppingListInput | ShoppingListItemVOUpsertWithWhereUniqueWithoutShoppingListInput[]
    createMany?: ShoppingListItemVOCreateManyShoppingListInputEnvelope
    set?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    disconnect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    delete?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    connect?: ShoppingListItemVOWhereUniqueInput | ShoppingListItemVOWhereUniqueInput[]
    update?: ShoppingListItemVOUpdateWithWhereUniqueWithoutShoppingListInput | ShoppingListItemVOUpdateWithWhereUniqueWithoutShoppingListInput[]
    updateMany?: ShoppingListItemVOUpdateManyWithWhereWithoutShoppingListInput | ShoppingListItemVOUpdateManyWithWhereWithoutShoppingListInput[]
    deleteMany?: ShoppingListItemVOScalarWhereInput | ShoppingListItemVOScalarWhereInput[]
  }

  export type ShoppingListCreateNestedOneWithoutShoppingListItemsInput = {
    create?: XOR<ShoppingListCreateWithoutShoppingListItemsInput, ShoppingListUncheckedCreateWithoutShoppingListItemsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutShoppingListItemsInput
    connect?: ShoppingListWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutShoppingListItemsInput = {
    create?: XOR<IngredientCreateWithoutShoppingListItemsInput, IngredientUncheckedCreateWithoutShoppingListItemsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutShoppingListItemsInput
    connect?: IngredientWhereUniqueInput
  }

  export type ShoppingListUpdateOneRequiredWithoutShoppingListItemsNestedInput = {
    create?: XOR<ShoppingListCreateWithoutShoppingListItemsInput, ShoppingListUncheckedCreateWithoutShoppingListItemsInput>
    connectOrCreate?: ShoppingListCreateOrConnectWithoutShoppingListItemsInput
    upsert?: ShoppingListUpsertWithoutShoppingListItemsInput
    connect?: ShoppingListWhereUniqueInput
    update?: XOR<XOR<ShoppingListUpdateToOneWithWhereWithoutShoppingListItemsInput, ShoppingListUpdateWithoutShoppingListItemsInput>, ShoppingListUncheckedUpdateWithoutShoppingListItemsInput>
  }

  export type IngredientUpdateOneRequiredWithoutShoppingListItemsNestedInput = {
    create?: XOR<IngredientCreateWithoutShoppingListItemsInput, IngredientUncheckedCreateWithoutShoppingListItemsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutShoppingListItemsInput
    upsert?: IngredientUpsertWithoutShoppingListItemsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutShoppingListItemsInput, IngredientUpdateWithoutShoppingListItemsInput>, IngredientUncheckedUpdateWithoutShoppingListItemsInput>
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutRatingsInput = {
    create?: XOR<RecipeCreateWithoutRatingsInput, RecipeUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRatingsInput
    connect?: RecipeWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type RecipeUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<RecipeCreateWithoutRatingsInput, RecipeUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRatingsInput
    upsert?: RecipeUpsertWithoutRatingsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutRatingsInput, RecipeUpdateWithoutRatingsInput>, RecipeUncheckedUpdateWithoutRatingsInput>
  }

  export type UserCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<RecipeCreateWithoutFavouritesInput, RecipeUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavouritesInput
    connect?: RecipeWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    upsert?: UserUpsertWithoutFavouritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouritesInput, UserUpdateWithoutFavouritesInput>, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type RecipeUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<RecipeCreateWithoutFavouritesInput, RecipeUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavouritesInput
    upsert?: RecipeUpsertWithoutFavouritesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutFavouritesInput, RecipeUpdateWithoutFavouritesInput>, RecipeUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserCreateNestedOneWithoutAwardsInput = {
    create?: XOR<UserCreateWithoutAwardsInput, UserUncheckedCreateWithoutAwardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAwardsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAwardsNestedInput = {
    create?: XOR<UserCreateWithoutAwardsInput, UserUncheckedCreateWithoutAwardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAwardsInput
    upsert?: UserUpsertWithoutAwardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAwardsInput, UserUpdateWithoutAwardsInput>, UserUncheckedUpdateWithoutAwardsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumKitchenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KitchenType | EnumKitchenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KitchenType[] | ListEnumKitchenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KitchenType[] | ListEnumKitchenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKitchenTypeFilter<$PrismaModel> | $Enums.KitchenType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumKitchenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KitchenType | EnumKitchenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KitchenType[] | ListEnumKitchenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KitchenType[] | ListEnumKitchenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKitchenTypeWithAggregatesFilter<$PrismaModel> | $Enums.KitchenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKitchenTypeFilter<$PrismaModel>
    _max?: NestedEnumKitchenTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RecipeCreateWithoutAuthorInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    ingredientsCount: number
    rating: number
    ingredientItems?: IngredientItemVOCreateNestedManyWithoutRecipeInput
    favourites?: FavouritesCreateNestedManyWithoutRecipeInput
    ratings?: RecipeReviewCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutAuthorInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    ingredientsCount: number
    rating: number
    ingredientItems?: IngredientItemVOUncheckedCreateNestedManyWithoutRecipeInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutRecipeInput
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput>
  }

  export type RecipeCreateManyAuthorInputEnvelope = {
    data: RecipeCreateManyAuthorInput | RecipeCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RecipeReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    recipe: RecipeCreateNestedOneWithoutRatingsInput
  }

  export type RecipeReviewUncheckedCreateWithoutUserInput = {
    id?: string
    recipeId: string
    rating: number
    comment?: string | null
  }

  export type RecipeReviewCreateOrConnectWithoutUserInput = {
    where: RecipeReviewWhereUniqueInput
    create: XOR<RecipeReviewCreateWithoutUserInput, RecipeReviewUncheckedCreateWithoutUserInput>
  }

  export type RecipeReviewCreateManyUserInputEnvelope = {
    data: RecipeReviewCreateManyUserInput | RecipeReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingListCreateWithoutUserInput = {
    id?: string
    isCompleted: boolean
    shoppingListItems?: ShoppingListItemVOCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListUncheckedCreateWithoutUserInput = {
    id?: string
    isCompleted: boolean
    shoppingListItems?: ShoppingListItemVOUncheckedCreateNestedManyWithoutShoppingListInput
  }

  export type ShoppingListCreateOrConnectWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput>
  }

  export type ShoppingListCreateManyUserInputEnvelope = {
    data: ShoppingListCreateManyUserInput | ShoppingListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavouritesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    recipe: RecipeCreateNestedOneWithoutFavouritesInput
  }

  export type FavouritesUncheckedCreateWithoutUserInput = {
    id?: string
    recipeId: string
    createdAt?: Date | string
  }

  export type FavouritesCreateOrConnectWithoutUserInput = {
    where: FavouritesWhereUniqueInput
    create: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput>
  }

  export type FavouritesCreateManyUserInputEnvelope = {
    data: FavouritesCreateManyUserInput | FavouritesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AwardCreateWithoutUserInput = {
    id?: string
    name: string
  }

  export type AwardUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
  }

  export type AwardCreateOrConnectWithoutUserInput = {
    where: AwardWhereUniqueInput
    create: XOR<AwardCreateWithoutUserInput, AwardUncheckedCreateWithoutUserInput>
  }

  export type AwardCreateManyUserInputEnvelope = {
    data: AwardCreateManyUserInput | AwardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecipeUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutAuthorInput, RecipeUncheckedUpdateWithoutAuthorInput>
    create: XOR<RecipeCreateWithoutAuthorInput, RecipeUncheckedCreateWithoutAuthorInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutAuthorInput, RecipeUncheckedUpdateWithoutAuthorInput>
  }

  export type RecipeUpdateManyWithWhereWithoutAuthorInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: StringFilter<"Recipe"> | string
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    kitchenType?: EnumKitchenTypeFilter<"Recipe"> | $Enums.KitchenType
    cookingTime?: IntFilter<"Recipe"> | number
    calories?: IntFilter<"Recipe"> | number
    authorId?: StringFilter<"Recipe"> | string
    ingredientsCount?: IntFilter<"Recipe"> | number
    rating?: FloatFilter<"Recipe"> | number
  }

  export type RecipeReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: RecipeReviewWhereUniqueInput
    update: XOR<RecipeReviewUpdateWithoutUserInput, RecipeReviewUncheckedUpdateWithoutUserInput>
    create: XOR<RecipeReviewCreateWithoutUserInput, RecipeReviewUncheckedCreateWithoutUserInput>
  }

  export type RecipeReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: RecipeReviewWhereUniqueInput
    data: XOR<RecipeReviewUpdateWithoutUserInput, RecipeReviewUncheckedUpdateWithoutUserInput>
  }

  export type RecipeReviewUpdateManyWithWhereWithoutUserInput = {
    where: RecipeReviewScalarWhereInput
    data: XOR<RecipeReviewUpdateManyMutationInput, RecipeReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type RecipeReviewScalarWhereInput = {
    AND?: RecipeReviewScalarWhereInput | RecipeReviewScalarWhereInput[]
    OR?: RecipeReviewScalarWhereInput[]
    NOT?: RecipeReviewScalarWhereInput | RecipeReviewScalarWhereInput[]
    id?: StringFilter<"RecipeReview"> | string
    userId?: StringFilter<"RecipeReview"> | string
    recipeId?: StringFilter<"RecipeReview"> | string
    rating?: FloatFilter<"RecipeReview"> | number
    comment?: StringNullableFilter<"RecipeReview"> | string | null
  }

  export type ShoppingListUpsertWithWhereUniqueWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    update: XOR<ShoppingListUpdateWithoutUserInput, ShoppingListUncheckedUpdateWithoutUserInput>
    create: XOR<ShoppingListCreateWithoutUserInput, ShoppingListUncheckedCreateWithoutUserInput>
  }

  export type ShoppingListUpdateWithWhereUniqueWithoutUserInput = {
    where: ShoppingListWhereUniqueInput
    data: XOR<ShoppingListUpdateWithoutUserInput, ShoppingListUncheckedUpdateWithoutUserInput>
  }

  export type ShoppingListUpdateManyWithWhereWithoutUserInput = {
    where: ShoppingListScalarWhereInput
    data: XOR<ShoppingListUpdateManyMutationInput, ShoppingListUncheckedUpdateManyWithoutUserInput>
  }

  export type ShoppingListScalarWhereInput = {
    AND?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
    OR?: ShoppingListScalarWhereInput[]
    NOT?: ShoppingListScalarWhereInput | ShoppingListScalarWhereInput[]
    id?: StringFilter<"ShoppingList"> | string
    userId?: StringFilter<"ShoppingList"> | string
    isCompleted?: BoolFilter<"ShoppingList"> | boolean
  }

  export type FavouritesUpsertWithWhereUniqueWithoutUserInput = {
    where: FavouritesWhereUniqueInput
    update: XOR<FavouritesUpdateWithoutUserInput, FavouritesUncheckedUpdateWithoutUserInput>
    create: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput>
  }

  export type FavouritesUpdateWithWhereUniqueWithoutUserInput = {
    where: FavouritesWhereUniqueInput
    data: XOR<FavouritesUpdateWithoutUserInput, FavouritesUncheckedUpdateWithoutUserInput>
  }

  export type FavouritesUpdateManyWithWhereWithoutUserInput = {
    where: FavouritesScalarWhereInput
    data: XOR<FavouritesUpdateManyMutationInput, FavouritesUncheckedUpdateManyWithoutUserInput>
  }

  export type FavouritesScalarWhereInput = {
    AND?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
    OR?: FavouritesScalarWhereInput[]
    NOT?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
    id?: StringFilter<"Favourites"> | string
    userId?: StringFilter<"Favourites"> | string
    recipeId?: StringFilter<"Favourites"> | string
    createdAt?: DateTimeFilter<"Favourites"> | Date | string
  }

  export type AwardUpsertWithWhereUniqueWithoutUserInput = {
    where: AwardWhereUniqueInput
    update: XOR<AwardUpdateWithoutUserInput, AwardUncheckedUpdateWithoutUserInput>
    create: XOR<AwardCreateWithoutUserInput, AwardUncheckedCreateWithoutUserInput>
  }

  export type AwardUpdateWithWhereUniqueWithoutUserInput = {
    where: AwardWhereUniqueInput
    data: XOR<AwardUpdateWithoutUserInput, AwardUncheckedUpdateWithoutUserInput>
  }

  export type AwardUpdateManyWithWhereWithoutUserInput = {
    where: AwardScalarWhereInput
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyWithoutUserInput>
  }

  export type AwardScalarWhereInput = {
    AND?: AwardScalarWhereInput | AwardScalarWhereInput[]
    OR?: AwardScalarWhereInput[]
    NOT?: AwardScalarWhereInput | AwardScalarWhereInput[]
    id?: StringFilter<"Award"> | string
    userId?: StringFilter<"Award"> | string
    name?: StringFilter<"Award"> | string
  }

  export type UserCreateWithoutRecipesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    ratings?: RecipeReviewCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    favourites?: FavouritesCreateNestedManyWithoutUserInput
    awards?: AwardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecipesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
    awards?: AwardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
  }

  export type IngredientItemVOCreateWithoutRecipeInput = {
    id?: string
    quantity: number
    unit: string
    ingredient: IngredientCreateNestedOneWithoutIngredientItemVOInput
  }

  export type IngredientItemVOUncheckedCreateWithoutRecipeInput = {
    id?: string
    ingredientId: string
    quantity: number
    unit: string
  }

  export type IngredientItemVOCreateOrConnectWithoutRecipeInput = {
    where: IngredientItemVOWhereUniqueInput
    create: XOR<IngredientItemVOCreateWithoutRecipeInput, IngredientItemVOUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientItemVOCreateManyRecipeInputEnvelope = {
    data: IngredientItemVOCreateManyRecipeInput | IngredientItemVOCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type FavouritesCreateWithoutRecipeInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavouritesInput
  }

  export type FavouritesUncheckedCreateWithoutRecipeInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavouritesCreateOrConnectWithoutRecipeInput = {
    where: FavouritesWhereUniqueInput
    create: XOR<FavouritesCreateWithoutRecipeInput, FavouritesUncheckedCreateWithoutRecipeInput>
  }

  export type FavouritesCreateManyRecipeInputEnvelope = {
    data: FavouritesCreateManyRecipeInput | FavouritesCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type RecipeReviewCreateWithoutRecipeInput = {
    id?: string
    rating: number
    comment?: string | null
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RecipeReviewUncheckedCreateWithoutRecipeInput = {
    id?: string
    userId: string
    rating: number
    comment?: string | null
  }

  export type RecipeReviewCreateOrConnectWithoutRecipeInput = {
    where: RecipeReviewWhereUniqueInput
    create: XOR<RecipeReviewCreateWithoutRecipeInput, RecipeReviewUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeReviewCreateManyRecipeInputEnvelope = {
    data: RecipeReviewCreateManyRecipeInput | RecipeReviewCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecipesInput = {
    update: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    ratings?: RecipeReviewUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUpdateManyWithoutUserNestedInput
    awards?: AwardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    ratings?: RecipeReviewUncheckedUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
    awards?: AwardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IngredientItemVOUpsertWithWhereUniqueWithoutRecipeInput = {
    where: IngredientItemVOWhereUniqueInput
    update: XOR<IngredientItemVOUpdateWithoutRecipeInput, IngredientItemVOUncheckedUpdateWithoutRecipeInput>
    create: XOR<IngredientItemVOCreateWithoutRecipeInput, IngredientItemVOUncheckedCreateWithoutRecipeInput>
  }

  export type IngredientItemVOUpdateWithWhereUniqueWithoutRecipeInput = {
    where: IngredientItemVOWhereUniqueInput
    data: XOR<IngredientItemVOUpdateWithoutRecipeInput, IngredientItemVOUncheckedUpdateWithoutRecipeInput>
  }

  export type IngredientItemVOUpdateManyWithWhereWithoutRecipeInput = {
    where: IngredientItemVOScalarWhereInput
    data: XOR<IngredientItemVOUpdateManyMutationInput, IngredientItemVOUncheckedUpdateManyWithoutRecipeInput>
  }

  export type IngredientItemVOScalarWhereInput = {
    AND?: IngredientItemVOScalarWhereInput | IngredientItemVOScalarWhereInput[]
    OR?: IngredientItemVOScalarWhereInput[]
    NOT?: IngredientItemVOScalarWhereInput | IngredientItemVOScalarWhereInput[]
    id?: StringFilter<"IngredientItemVO"> | string
    recipeId?: StringFilter<"IngredientItemVO"> | string
    ingredientId?: StringFilter<"IngredientItemVO"> | string
    quantity?: FloatFilter<"IngredientItemVO"> | number
    unit?: StringFilter<"IngredientItemVO"> | string
  }

  export type FavouritesUpsertWithWhereUniqueWithoutRecipeInput = {
    where: FavouritesWhereUniqueInput
    update: XOR<FavouritesUpdateWithoutRecipeInput, FavouritesUncheckedUpdateWithoutRecipeInput>
    create: XOR<FavouritesCreateWithoutRecipeInput, FavouritesUncheckedCreateWithoutRecipeInput>
  }

  export type FavouritesUpdateWithWhereUniqueWithoutRecipeInput = {
    where: FavouritesWhereUniqueInput
    data: XOR<FavouritesUpdateWithoutRecipeInput, FavouritesUncheckedUpdateWithoutRecipeInput>
  }

  export type FavouritesUpdateManyWithWhereWithoutRecipeInput = {
    where: FavouritesScalarWhereInput
    data: XOR<FavouritesUpdateManyMutationInput, FavouritesUncheckedUpdateManyWithoutRecipeInput>
  }

  export type RecipeReviewUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeReviewWhereUniqueInput
    update: XOR<RecipeReviewUpdateWithoutRecipeInput, RecipeReviewUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeReviewCreateWithoutRecipeInput, RecipeReviewUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeReviewUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeReviewWhereUniqueInput
    data: XOR<RecipeReviewUpdateWithoutRecipeInput, RecipeReviewUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeReviewUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeReviewScalarWhereInput
    data: XOR<RecipeReviewUpdateManyMutationInput, RecipeReviewUncheckedUpdateManyWithoutRecipeInput>
  }

  export type ShoppingListItemVOCreateWithoutIngredientInput = {
    id?: string
    quantity: number
    unit: string
    isPurchased?: boolean
    shoppingList: ShoppingListCreateNestedOneWithoutShoppingListItemsInput
  }

  export type ShoppingListItemVOUncheckedCreateWithoutIngredientInput = {
    id?: string
    shoppingListId: string
    quantity: number
    unit: string
    isPurchased?: boolean
  }

  export type ShoppingListItemVOCreateOrConnectWithoutIngredientInput = {
    where: ShoppingListItemVOWhereUniqueInput
    create: XOR<ShoppingListItemVOCreateWithoutIngredientInput, ShoppingListItemVOUncheckedCreateWithoutIngredientInput>
  }

  export type ShoppingListItemVOCreateManyIngredientInputEnvelope = {
    data: ShoppingListItemVOCreateManyIngredientInput | ShoppingListItemVOCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type IngredientItemVOCreateWithoutIngredientInput = {
    id?: string
    quantity: number
    unit: string
    recipe: RecipeCreateNestedOneWithoutIngredientItemsInput
  }

  export type IngredientItemVOUncheckedCreateWithoutIngredientInput = {
    id?: string
    recipeId: string
    quantity: number
    unit: string
  }

  export type IngredientItemVOCreateOrConnectWithoutIngredientInput = {
    where: IngredientItemVOWhereUniqueInput
    create: XOR<IngredientItemVOCreateWithoutIngredientInput, IngredientItemVOUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientItemVOCreateManyIngredientInputEnvelope = {
    data: IngredientItemVOCreateManyIngredientInput | IngredientItemVOCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type ShoppingListItemVOUpsertWithWhereUniqueWithoutIngredientInput = {
    where: ShoppingListItemVOWhereUniqueInput
    update: XOR<ShoppingListItemVOUpdateWithoutIngredientInput, ShoppingListItemVOUncheckedUpdateWithoutIngredientInput>
    create: XOR<ShoppingListItemVOCreateWithoutIngredientInput, ShoppingListItemVOUncheckedCreateWithoutIngredientInput>
  }

  export type ShoppingListItemVOUpdateWithWhereUniqueWithoutIngredientInput = {
    where: ShoppingListItemVOWhereUniqueInput
    data: XOR<ShoppingListItemVOUpdateWithoutIngredientInput, ShoppingListItemVOUncheckedUpdateWithoutIngredientInput>
  }

  export type ShoppingListItemVOUpdateManyWithWhereWithoutIngredientInput = {
    where: ShoppingListItemVOScalarWhereInput
    data: XOR<ShoppingListItemVOUpdateManyMutationInput, ShoppingListItemVOUncheckedUpdateManyWithoutIngredientInput>
  }

  export type ShoppingListItemVOScalarWhereInput = {
    AND?: ShoppingListItemVOScalarWhereInput | ShoppingListItemVOScalarWhereInput[]
    OR?: ShoppingListItemVOScalarWhereInput[]
    NOT?: ShoppingListItemVOScalarWhereInput | ShoppingListItemVOScalarWhereInput[]
    id?: StringFilter<"ShoppingListItemVO"> | string
    shoppingListId?: StringFilter<"ShoppingListItemVO"> | string
    ingredientId?: StringFilter<"ShoppingListItemVO"> | string
    quantity?: FloatFilter<"ShoppingListItemVO"> | number
    unit?: StringFilter<"ShoppingListItemVO"> | string
    isPurchased?: BoolFilter<"ShoppingListItemVO"> | boolean
  }

  export type IngredientItemVOUpsertWithWhereUniqueWithoutIngredientInput = {
    where: IngredientItemVOWhereUniqueInput
    update: XOR<IngredientItemVOUpdateWithoutIngredientInput, IngredientItemVOUncheckedUpdateWithoutIngredientInput>
    create: XOR<IngredientItemVOCreateWithoutIngredientInput, IngredientItemVOUncheckedCreateWithoutIngredientInput>
  }

  export type IngredientItemVOUpdateWithWhereUniqueWithoutIngredientInput = {
    where: IngredientItemVOWhereUniqueInput
    data: XOR<IngredientItemVOUpdateWithoutIngredientInput, IngredientItemVOUncheckedUpdateWithoutIngredientInput>
  }

  export type IngredientItemVOUpdateManyWithWhereWithoutIngredientInput = {
    where: IngredientItemVOScalarWhereInput
    data: XOR<IngredientItemVOUpdateManyMutationInput, IngredientItemVOUncheckedUpdateManyWithoutIngredientInput>
  }

  export type RecipeCreateWithoutIngredientItemsInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    ingredientsCount: number
    rating: number
    author: UserCreateNestedOneWithoutRecipesInput
    favourites?: FavouritesCreateNestedManyWithoutRecipeInput
    ratings?: RecipeReviewCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutIngredientItemsInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    authorId: string
    ingredientsCount: number
    rating: number
    favourites?: FavouritesUncheckedCreateNestedManyWithoutRecipeInput
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutIngredientItemsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientItemsInput, RecipeUncheckedCreateWithoutIngredientItemsInput>
  }

  export type IngredientCreateWithoutIngredientItemVOInput = {
    id?: string
    name: string
    defaultUnit: string
    category: string
    shoppingListItems?: ShoppingListItemVOCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutIngredientItemVOInput = {
    id?: string
    name: string
    defaultUnit: string
    category: string
    shoppingListItems?: ShoppingListItemVOUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutIngredientItemVOInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutIngredientItemVOInput, IngredientUncheckedCreateWithoutIngredientItemVOInput>
  }

  export type RecipeUpsertWithoutIngredientItemsInput = {
    update: XOR<RecipeUpdateWithoutIngredientItemsInput, RecipeUncheckedUpdateWithoutIngredientItemsInput>
    create: XOR<RecipeCreateWithoutIngredientItemsInput, RecipeUncheckedCreateWithoutIngredientItemsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientItemsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientItemsInput, RecipeUncheckedUpdateWithoutIngredientItemsInput>
  }

  export type RecipeUpdateWithoutIngredientItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    favourites?: FavouritesUpdateManyWithoutRecipeNestedInput
    ratings?: RecipeReviewUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    favourites?: FavouritesUncheckedUpdateManyWithoutRecipeNestedInput
    ratings?: RecipeReviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type IngredientUpsertWithoutIngredientItemVOInput = {
    update: XOR<IngredientUpdateWithoutIngredientItemVOInput, IngredientUncheckedUpdateWithoutIngredientItemVOInput>
    create: XOR<IngredientCreateWithoutIngredientItemVOInput, IngredientUncheckedCreateWithoutIngredientItemVOInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutIngredientItemVOInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutIngredientItemVOInput, IngredientUncheckedUpdateWithoutIngredientItemVOInput>
  }

  export type IngredientUpdateWithoutIngredientItemVOInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultUnit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    shoppingListItems?: ShoppingListItemVOUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutIngredientItemVOInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultUnit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    shoppingListItems?: ShoppingListItemVOUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type UserCreateWithoutShoppingListsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    ratings?: RecipeReviewCreateNestedManyWithoutUserInput
    favourites?: FavouritesCreateNestedManyWithoutUserInput
    awards?: AwardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShoppingListsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutUserInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
    awards?: AwardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShoppingListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
  }

  export type ShoppingListItemVOCreateWithoutShoppingListInput = {
    id?: string
    quantity: number
    unit: string
    isPurchased?: boolean
    ingredient: IngredientCreateNestedOneWithoutShoppingListItemsInput
  }

  export type ShoppingListItemVOUncheckedCreateWithoutShoppingListInput = {
    id?: string
    ingredientId: string
    quantity: number
    unit: string
    isPurchased?: boolean
  }

  export type ShoppingListItemVOCreateOrConnectWithoutShoppingListInput = {
    where: ShoppingListItemVOWhereUniqueInput
    create: XOR<ShoppingListItemVOCreateWithoutShoppingListInput, ShoppingListItemVOUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingListItemVOCreateManyShoppingListInputEnvelope = {
    data: ShoppingListItemVOCreateManyShoppingListInput | ShoppingListItemVOCreateManyShoppingListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutShoppingListsInput = {
    update: XOR<UserUpdateWithoutShoppingListsInput, UserUncheckedUpdateWithoutShoppingListsInput>
    create: XOR<UserCreateWithoutShoppingListsInput, UserUncheckedCreateWithoutShoppingListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShoppingListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShoppingListsInput, UserUncheckedUpdateWithoutShoppingListsInput>
  }

  export type UserUpdateWithoutShoppingListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    ratings?: RecipeReviewUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUpdateManyWithoutUserNestedInput
    awards?: AwardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShoppingListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    ratings?: RecipeReviewUncheckedUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
    awards?: AwardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShoppingListItemVOUpsertWithWhereUniqueWithoutShoppingListInput = {
    where: ShoppingListItemVOWhereUniqueInput
    update: XOR<ShoppingListItemVOUpdateWithoutShoppingListInput, ShoppingListItemVOUncheckedUpdateWithoutShoppingListInput>
    create: XOR<ShoppingListItemVOCreateWithoutShoppingListInput, ShoppingListItemVOUncheckedCreateWithoutShoppingListInput>
  }

  export type ShoppingListItemVOUpdateWithWhereUniqueWithoutShoppingListInput = {
    where: ShoppingListItemVOWhereUniqueInput
    data: XOR<ShoppingListItemVOUpdateWithoutShoppingListInput, ShoppingListItemVOUncheckedUpdateWithoutShoppingListInput>
  }

  export type ShoppingListItemVOUpdateManyWithWhereWithoutShoppingListInput = {
    where: ShoppingListItemVOScalarWhereInput
    data: XOR<ShoppingListItemVOUpdateManyMutationInput, ShoppingListItemVOUncheckedUpdateManyWithoutShoppingListInput>
  }

  export type ShoppingListCreateWithoutShoppingListItemsInput = {
    id?: string
    isCompleted: boolean
    user: UserCreateNestedOneWithoutShoppingListsInput
  }

  export type ShoppingListUncheckedCreateWithoutShoppingListItemsInput = {
    id?: string
    userId: string
    isCompleted: boolean
  }

  export type ShoppingListCreateOrConnectWithoutShoppingListItemsInput = {
    where: ShoppingListWhereUniqueInput
    create: XOR<ShoppingListCreateWithoutShoppingListItemsInput, ShoppingListUncheckedCreateWithoutShoppingListItemsInput>
  }

  export type IngredientCreateWithoutShoppingListItemsInput = {
    id?: string
    name: string
    defaultUnit: string
    category: string
    IngredientItemVO?: IngredientItemVOCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutShoppingListItemsInput = {
    id?: string
    name: string
    defaultUnit: string
    category: string
    IngredientItemVO?: IngredientItemVOUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutShoppingListItemsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutShoppingListItemsInput, IngredientUncheckedCreateWithoutShoppingListItemsInput>
  }

  export type ShoppingListUpsertWithoutShoppingListItemsInput = {
    update: XOR<ShoppingListUpdateWithoutShoppingListItemsInput, ShoppingListUncheckedUpdateWithoutShoppingListItemsInput>
    create: XOR<ShoppingListCreateWithoutShoppingListItemsInput, ShoppingListUncheckedCreateWithoutShoppingListItemsInput>
    where?: ShoppingListWhereInput
  }

  export type ShoppingListUpdateToOneWithWhereWithoutShoppingListItemsInput = {
    where?: ShoppingListWhereInput
    data: XOR<ShoppingListUpdateWithoutShoppingListItemsInput, ShoppingListUncheckedUpdateWithoutShoppingListItemsInput>
  }

  export type ShoppingListUpdateWithoutShoppingListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutShoppingListsNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutShoppingListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IngredientUpsertWithoutShoppingListItemsInput = {
    update: XOR<IngredientUpdateWithoutShoppingListItemsInput, IngredientUncheckedUpdateWithoutShoppingListItemsInput>
    create: XOR<IngredientCreateWithoutShoppingListItemsInput, IngredientUncheckedCreateWithoutShoppingListItemsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutShoppingListItemsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutShoppingListItemsInput, IngredientUncheckedUpdateWithoutShoppingListItemsInput>
  }

  export type IngredientUpdateWithoutShoppingListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultUnit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    IngredientItemVO?: IngredientItemVOUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutShoppingListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    defaultUnit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    IngredientItemVO?: IngredientItemVOUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type UserCreateWithoutRatingsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    favourites?: FavouritesCreateNestedManyWithoutUserInput
    awards?: AwardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
    awards?: AwardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type RecipeCreateWithoutRatingsInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    ingredientsCount: number
    rating: number
    author: UserCreateNestedOneWithoutRecipesInput
    ingredientItems?: IngredientItemVOCreateNestedManyWithoutRecipeInput
    favourites?: FavouritesCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutRatingsInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    authorId: string
    ingredientsCount: number
    rating: number
    ingredientItems?: IngredientItemVOUncheckedCreateNestedManyWithoutRecipeInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutRatingsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutRatingsInput, RecipeUncheckedCreateWithoutRatingsInput>
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUpdateManyWithoutUserNestedInput
    awards?: AwardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
    awards?: AwardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeUpsertWithoutRatingsInput = {
    update: XOR<RecipeUpdateWithoutRatingsInput, RecipeUncheckedUpdateWithoutRatingsInput>
    create: XOR<RecipeCreateWithoutRatingsInput, RecipeUncheckedCreateWithoutRatingsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutRatingsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutRatingsInput, RecipeUncheckedUpdateWithoutRatingsInput>
  }

  export type RecipeUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredientItems?: IngredientItemVOUpdateManyWithoutRecipeNestedInput
    favourites?: FavouritesUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    ingredientItems?: IngredientItemVOUncheckedUpdateManyWithoutRecipeNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UserCreateWithoutFavouritesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    ratings?: RecipeReviewCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    awards?: AwardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouritesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    awards?: AwardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type RecipeCreateWithoutFavouritesInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    ingredientsCount: number
    rating: number
    author: UserCreateNestedOneWithoutRecipesInput
    ingredientItems?: IngredientItemVOCreateNestedManyWithoutRecipeInput
    ratings?: RecipeReviewCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutFavouritesInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    authorId: string
    ingredientsCount: number
    rating: number
    ingredientItems?: IngredientItemVOUncheckedCreateNestedManyWithoutRecipeInput
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutFavouritesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutFavouritesInput, RecipeUncheckedCreateWithoutFavouritesInput>
  }

  export type UserUpsertWithoutFavouritesInput = {
    update: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    ratings?: RecipeReviewUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    awards?: AwardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    ratings?: RecipeReviewUncheckedUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    awards?: AwardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeUpsertWithoutFavouritesInput = {
    update: XOR<RecipeUpdateWithoutFavouritesInput, RecipeUncheckedUpdateWithoutFavouritesInput>
    create: XOR<RecipeCreateWithoutFavouritesInput, RecipeUncheckedCreateWithoutFavouritesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutFavouritesInput, RecipeUncheckedUpdateWithoutFavouritesInput>
  }

  export type RecipeUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredientItems?: IngredientItemVOUpdateManyWithoutRecipeNestedInput
    ratings?: RecipeReviewUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    ingredientItems?: IngredientItemVOUncheckedUpdateManyWithoutRecipeNestedInput
    ratings?: RecipeReviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UserCreateWithoutAwardsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeCreateNestedManyWithoutAuthorInput
    ratings?: RecipeReviewCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListCreateNestedManyWithoutUserInput
    favourites?: FavouritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAwardsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    recipes?: RecipeUncheckedCreateNestedManyWithoutAuthorInput
    ratings?: RecipeReviewUncheckedCreateNestedManyWithoutUserInput
    shoppingLists?: ShoppingListUncheckedCreateNestedManyWithoutUserInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAwardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAwardsInput, UserUncheckedCreateWithoutAwardsInput>
  }

  export type UserUpsertWithoutAwardsInput = {
    update: XOR<UserUpdateWithoutAwardsInput, UserUncheckedUpdateWithoutAwardsInput>
    create: XOR<UserCreateWithoutAwardsInput, UserUncheckedCreateWithoutAwardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAwardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAwardsInput, UserUncheckedUpdateWithoutAwardsInput>
  }

  export type UserUpdateWithoutAwardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUpdateManyWithoutAuthorNestedInput
    ratings?: RecipeReviewUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAwardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    recipes?: RecipeUncheckedUpdateManyWithoutAuthorNestedInput
    ratings?: RecipeReviewUncheckedUpdateManyWithoutUserNestedInput
    shoppingLists?: ShoppingListUncheckedUpdateManyWithoutUserNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecipeCreateManyAuthorInput = {
    id?: string
    name: string
    description: string
    kitchenType: $Enums.KitchenType
    cookingTime: number
    calories: number
    ingredientsCount: number
    rating: number
  }

  export type RecipeReviewCreateManyUserInput = {
    id?: string
    recipeId: string
    rating: number
    comment?: string | null
  }

  export type ShoppingListCreateManyUserInput = {
    id?: string
    isCompleted: boolean
  }

  export type FavouritesCreateManyUserInput = {
    id?: string
    recipeId: string
    createdAt?: Date | string
  }

  export type AwardCreateManyUserInput = {
    id?: string
    name: string
  }

  export type RecipeUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    ingredientItems?: IngredientItemVOUpdateManyWithoutRecipeNestedInput
    favourites?: FavouritesUpdateManyWithoutRecipeNestedInput
    ratings?: RecipeReviewUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    ingredientItems?: IngredientItemVOUncheckedUpdateManyWithoutRecipeNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutRecipeNestedInput
    ratings?: RecipeReviewUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kitchenType?: EnumKitchenTypeFieldUpdateOperationsInput | $Enums.KitchenType
    cookingTime?: IntFieldUpdateOperationsInput | number
    calories?: IntFieldUpdateOperationsInput | number
    ingredientsCount?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type RecipeReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipeUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RecipeReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    shoppingListItems?: ShoppingListItemVOUpdateManyWithoutShoppingListNestedInput
  }

  export type ShoppingListUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    shoppingListItems?: ShoppingListItemVOUncheckedUpdateManyWithoutShoppingListNestedInput
  }

  export type ShoppingListUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FavouritesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipe?: RecipeUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouritesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouritesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AwardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AwardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientItemVOCreateManyRecipeInput = {
    id?: string
    ingredientId: string
    quantity: number
    unit: string
  }

  export type FavouritesCreateManyRecipeInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type RecipeReviewCreateManyRecipeInput = {
    id?: string
    userId: string
    rating: number
    comment?: string | null
  }

  export type IngredientItemVOUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutIngredientItemVONestedInput
  }

  export type IngredientItemVOUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientItemVOUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritesUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouritesUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavouritesUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeReviewUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RecipeReviewUncheckedUpdateWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeReviewUncheckedUpdateManyWithoutRecipeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShoppingListItemVOCreateManyIngredientInput = {
    id?: string
    shoppingListId: string
    quantity: number
    unit: string
    isPurchased?: boolean
  }

  export type IngredientItemVOCreateManyIngredientInput = {
    id?: string
    recipeId: string
    quantity: number
    unit: string
  }

  export type ShoppingListItemVOUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    shoppingList?: ShoppingListUpdateOneRequiredWithoutShoppingListItemsNestedInput
  }

  export type ShoppingListItemVOUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListItemVOUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    shoppingListId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IngredientItemVOUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutIngredientItemsNestedInput
  }

  export type IngredientItemVOUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientItemVOUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipeId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
  }

  export type ShoppingListItemVOCreateManyShoppingListInput = {
    id?: string
    ingredientId: string
    quantity: number
    unit: string
    isPurchased?: boolean
  }

  export type ShoppingListItemVOUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    ingredient?: IngredientUpdateOneRequiredWithoutShoppingListItemsNestedInput
  }

  export type ShoppingListItemVOUncheckedUpdateWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShoppingListItemVOUncheckedUpdateManyWithoutShoppingListInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}