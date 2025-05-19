import { registerEnumType } from '@nestjs/graphql';
import {KitchenType} from "@prisma/client";

// export enum KitchenType {
//     ASIAN,
//     EUROPEAN,
//     AMERICAN,
//     MEDITERRANEAN,
//     RUSSIAN,
//     CHINESE,
//     PORTUGUESE,
//     HUNGARIAN,
//     ITALIAN,
//     SPANISH,
//     OTHER,
// }

registerEnumType(KitchenType, {
    name: 'KitchenType',
});

export { KitchenType as KitchenType };
