
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Server
 * 
 */
export type Server = $Result.DefaultSelection<Prisma.$ServerPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Conversations
 * 
 */
export type Conversations = $Result.DefaultSelection<Prisma.$ConversationsPayload>
/**
 * Model DirectMessage
 * 
 */
export type DirectMessage = $Result.DefaultSelection<Prisma.$DirectMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MemberRole: {
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR',
  GUEST: 'GUEST'
};

export type MemberRole = (typeof MemberRole)[keyof typeof MemberRole]


export const ChannelType: {
  TEXT: 'TEXT',
  AUDIO: 'AUDIO',
  VIDEO: 'VIDEO'
};

export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType]

}

export type MemberRole = $Enums.MemberRole

export const MemberRole: typeof $Enums.MemberRole

export type ChannelType = $Enums.ChannelType

export const ChannelType: typeof $Enums.ChannelType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
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
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.server`: Exposes CRUD operations for the **Server** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.server.findMany()
    * ```
    */
  get server(): Prisma.ServerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversations`: Exposes CRUD operations for the **Conversations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversations.findMany()
    * ```
    */
  get conversations(): Prisma.ConversationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.directMessage`: Exposes CRUD operations for the **DirectMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectMessages
    * const directMessages = await prisma.directMessage.findMany()
    * ```
    */
  get directMessage(): Prisma.DirectMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Profile: 'Profile',
    Server: 'Server',
    Member: 'Member',
    Channel: 'Channel',
    Message: 'Message',
    Conversations: 'Conversations',
    DirectMessage: 'DirectMessage'
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
      modelProps: "profile" | "server" | "member" | "channel" | "message" | "conversations" | "directMessage"
      txIsolationLevel: never
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProfileFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProfileAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Server: {
        payload: Prisma.$ServerPayload<ExtArgs>
        fields: Prisma.ServerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findFirst: {
            args: Prisma.ServerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          findMany: {
            args: Prisma.ServerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>[]
          }
          create: {
            args: Prisma.ServerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          createMany: {
            args: Prisma.ServerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          update: {
            args: Prisma.ServerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          deleteMany: {
            args: Prisma.ServerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServerPayload>
          }
          aggregate: {
            args: Prisma.ServerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServer>
          }
          groupBy: {
            args: Prisma.ServerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServerCountArgs<ExtArgs>
            result: $Utils.Optional<ServerCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MemberFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MemberAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChannelFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChannelAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Conversations: {
        payload: Prisma.$ConversationsPayload<ExtArgs>
        fields: Prisma.ConversationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findFirst: {
            args: Prisma.ConversationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          findMany: {
            args: Prisma.ConversationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>[]
          }
          create: {
            args: Prisma.ConversationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          createMany: {
            args: Prisma.ConversationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConversationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          update: {
            args: Prisma.ConversationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          deleteMany: {
            args: Prisma.ConversationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationsPayload>
          }
          aggregate: {
            args: Prisma.ConversationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversations>
          }
          groupBy: {
            args: Prisma.ConversationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConversationsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConversationsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConversationsCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationsCountAggregateOutputType> | number
          }
        }
      }
      DirectMessage: {
        payload: Prisma.$DirectMessagePayload<ExtArgs>
        fields: Prisma.DirectMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          findFirst: {
            args: Prisma.DirectMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          findMany: {
            args: Prisma.DirectMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>[]
          }
          create: {
            args: Prisma.DirectMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          createMany: {
            args: Prisma.DirectMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DirectMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          update: {
            args: Prisma.DirectMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          deleteMany: {
            args: Prisma.DirectMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DirectMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectMessagePayload>
          }
          aggregate: {
            args: Prisma.DirectMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectMessage>
          }
          groupBy: {
            args: Prisma.DirectMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DirectMessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DirectMessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DirectMessageCountArgs<ExtArgs>
            result: $Utils.Optional<DirectMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    profile?: ProfileOmit
    server?: ServerOmit
    member?: MemberOmit
    channel?: ChannelOmit
    message?: MessageOmit
    conversations?: ConversationsOmit
    directMessage?: DirectMessageOmit
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
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    servers: number
    members: number
    channels: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servers?: boolean | ProfileCountOutputTypeCountServersArgs
    members?: boolean | ProfileCountOutputTypeCountMembersArgs
    channels?: boolean | ProfileCountOutputTypeCountChannelsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountServersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }


  /**
   * Count Type ServerCountOutputType
   */

  export type ServerCountOutputType = {
    members: number
    channels: number
  }

  export type ServerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ServerCountOutputTypeCountMembersArgs
    channels?: boolean | ServerCountOutputTypeCountChannelsArgs
  }

  // Custom InputTypes
  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerCountOutputType
     */
    select?: ServerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    messages: number
    directMessages: number
    conversationInitiated: number
    conversationReceived: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | MemberCountOutputTypeCountMessagesArgs
    directMessages?: boolean | MemberCountOutputTypeCountDirectMessagesArgs
    conversationInitiated?: boolean | MemberCountOutputTypeCountConversationInitiatedArgs
    conversationReceived?: boolean | MemberCountOutputTypeCountConversationReceivedArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountDirectMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectMessageWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountConversationInitiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountConversationReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
  }


  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    messages: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChannelCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ConversationsCountOutputType
   */

  export type ConversationsCountOutputType = {
    directMessages: number
  }

  export type ConversationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directMessages?: boolean | ConversationsCountOutputTypeCountDirectMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationsCountOutputType
     */
    select?: ConversationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationsCountOutputType without action
   */
  export type ConversationsCountOutputTypeCountDirectMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    imageUrl: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    imageUrl: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    imageUrl: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    imageUrl?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    imageUrl?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    imageUrl?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    imageUrl?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servers?: boolean | Profile$serversArgs<ExtArgs>
    members?: boolean | Profile$membersArgs<ExtArgs>
    channels?: boolean | Profile$channelsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>



  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    imageUrl?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "imageUrl" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servers?: boolean | Profile$serversArgs<ExtArgs>
    members?: boolean | Profile$membersArgs<ExtArgs>
    channels?: boolean | Profile$channelsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      servers: Prisma.$ServerPayload<ExtArgs>[]
      members: Prisma.$MemberPayload<ExtArgs>[]
      channels: Prisma.$ChannelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      imageUrl: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * @param {ProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const profile = await prisma.profile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProfileFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Profile.
     * @param {ProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const profile = await prisma.profile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProfileAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servers<T extends Profile$serversArgs<ExtArgs> = {}>(args?: Subset<T, Profile$serversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Profile$membersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channels<T extends Profile$channelsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly imageUrl: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile findRaw
   */
  export type ProfileFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profile aggregateRaw
   */
  export type ProfileAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Profile.servers
   */
  export type Profile$serversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    where?: ServerWhereInput
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    cursor?: ServerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Profile.members
   */
  export type Profile$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Profile.channels
   */
  export type Profile$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Server
   */

  export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  export type ServerMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    inviteCode: string | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    inviteCode: string | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServerCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    inviteCode: number
    profileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServerMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    inviteCode?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServerMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    inviteCode?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServerCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    inviteCode?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Server to aggregate.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerMaxAggregateInputType
  }

  export type GetServerAggregateType<T extends ServerAggregateArgs> = {
        [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer[P]>
      : GetScalarType<T[P], AggregateServer[P]>
  }




  export type ServerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServerWhereInput
    orderBy?: ServerOrderByWithAggregationInput | ServerOrderByWithAggregationInput[]
    by: ServerScalarFieldEnum[] | ServerScalarFieldEnum
    having?: ServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerCountAggregateInputType | true
    _min?: ServerMinAggregateInputType
    _max?: ServerMaxAggregateInputType
  }

  export type ServerGroupByOutputType = {
    id: string
    name: string
    imageUrl: string
    inviteCode: string
    profileId: string
    createdAt: Date
    updatedAt: Date
    _count: ServerCountAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  type GetServerGroupByPayload<T extends ServerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerGroupByOutputType[P]>
            : GetScalarType<T[P], ServerGroupByOutputType[P]>
        }
      >
    >


  export type ServerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    inviteCode?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    members?: boolean | Server$membersArgs<ExtArgs>
    channels?: boolean | Server$channelsArgs<ExtArgs>
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["server"]>



  export type ServerSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    inviteCode?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl" | "inviteCode" | "profileId" | "createdAt" | "updatedAt", ExtArgs["result"]["server"]>
  export type ServerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    members?: boolean | Server$membersArgs<ExtArgs>
    channels?: boolean | Server$channelsArgs<ExtArgs>
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Server"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      members: Prisma.$MemberPayload<ExtArgs>[]
      channels: Prisma.$ChannelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      imageUrl: string
      inviteCode: string
      profileId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["server"]>
    composites: {}
  }

  type ServerGetPayload<S extends boolean | null | undefined | ServerDefaultArgs> = $Result.GetResult<Prisma.$ServerPayload, S>

  type ServerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServerCountAggregateInputType | true
    }

  export interface ServerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Server'], meta: { name: 'Server' } }
    /**
     * Find zero or one Server that matches the filter.
     * @param {ServerFindUniqueArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServerFindUniqueArgs>(args: SelectSubset<T, ServerFindUniqueArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Server that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServerFindUniqueOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServerFindUniqueOrThrowArgs>(args: SelectSubset<T, ServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Server that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServerFindFirstArgs>(args?: SelectSubset<T, ServerFindFirstArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Server that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServerFindFirstOrThrowArgs>(args?: SelectSubset<T, ServerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.server.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.server.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serverWithIdOnly = await prisma.server.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServerFindManyArgs>(args?: SelectSubset<T, ServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Server.
     * @param {ServerCreateArgs} args - Arguments to create a Server.
     * @example
     * // Create one Server
     * const Server = await prisma.server.create({
     *   data: {
     *     // ... data to create a Server
     *   }
     * })
     * 
     */
    create<T extends ServerCreateArgs>(args: SelectSubset<T, ServerCreateArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servers.
     * @param {ServerCreateManyArgs} args - Arguments to create many Servers.
     * @example
     * // Create many Servers
     * const server = await prisma.server.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServerCreateManyArgs>(args?: SelectSubset<T, ServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Server.
     * @param {ServerDeleteArgs} args - Arguments to delete one Server.
     * @example
     * // Delete one Server
     * const Server = await prisma.server.delete({
     *   where: {
     *     // ... filter to delete one Server
     *   }
     * })
     * 
     */
    delete<T extends ServerDeleteArgs>(args: SelectSubset<T, ServerDeleteArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Server.
     * @param {ServerUpdateArgs} args - Arguments to update one Server.
     * @example
     * // Update one Server
     * const server = await prisma.server.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServerUpdateArgs>(args: SelectSubset<T, ServerUpdateArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servers.
     * @param {ServerDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.server.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServerDeleteManyArgs>(args?: SelectSubset<T, ServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServerUpdateManyArgs>(args: SelectSubset<T, ServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Server.
     * @param {ServerUpsertArgs} args - Arguments to update or create a Server.
     * @example
     * // Update or create a Server
     * const server = await prisma.server.upsert({
     *   create: {
     *     // ... data to create a Server
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server we want to update
     *   }
     * })
     */
    upsert<T extends ServerUpsertArgs>(args: SelectSubset<T, ServerUpsertArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servers that matches the filter.
     * @param {ServerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const server = await prisma.server.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ServerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Server.
     * @param {ServerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const server = await prisma.server.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.server.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServerCountArgs>(
      args?: Subset<T, ServerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServerAggregateArgs>(args: Subset<T, ServerAggregateArgs>): Prisma.PrismaPromise<GetServerAggregateType<T>>

    /**
     * Group by Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerGroupByArgs} args - Group by arguments.
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
      T extends ServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerGroupByArgs['orderBy'] }
        : { orderBy?: ServerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Server model
   */
  readonly fields: ServerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Server.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Server$membersArgs<ExtArgs> = {}>(args?: Subset<T, Server$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    channels<T extends Server$channelsArgs<ExtArgs> = {}>(args?: Subset<T, Server$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Server model
   */
  interface ServerFieldRefs {
    readonly id: FieldRef<"Server", 'String'>
    readonly name: FieldRef<"Server", 'String'>
    readonly imageUrl: FieldRef<"Server", 'String'>
    readonly inviteCode: FieldRef<"Server", 'String'>
    readonly profileId: FieldRef<"Server", 'String'>
    readonly createdAt: FieldRef<"Server", 'DateTime'>
    readonly updatedAt: FieldRef<"Server", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Server findUnique
   */
  export type ServerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findUniqueOrThrow
   */
  export type ServerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server findFirst
   */
  export type ServerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server findFirstOrThrow
   */
  export type ServerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Server to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server findMany
   */
  export type ServerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter, which Servers to fetch.
     */
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     */
    orderBy?: ServerOrderByWithRelationInput | ServerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     */
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     */
    skip?: number
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[]
  }

  /**
   * Server create
   */
  export type ServerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The data needed to create a Server.
     */
    data: XOR<ServerCreateInput, ServerUncheckedCreateInput>
  }

  /**
   * Server createMany
   */
  export type ServerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servers.
     */
    data: ServerCreateManyInput | ServerCreateManyInput[]
  }

  /**
   * Server update
   */
  export type ServerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The data needed to update a Server.
     */
    data: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
    /**
     * Choose, which Server to update.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server updateMany
   */
  export type ServerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servers.
     */
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     */
    where?: ServerWhereInput
    /**
     * Limit how many Servers to update.
     */
    limit?: number
  }

  /**
   * Server upsert
   */
  export type ServerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * The filter to search for the Server to update in case it exists.
     */
    where: ServerWhereUniqueInput
    /**
     * In case the Server found by the `where` argument doesn't exist, create a new Server with this data.
     */
    create: XOR<ServerCreateInput, ServerUncheckedCreateInput>
    /**
     * In case the Server was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
  }

  /**
   * Server delete
   */
  export type ServerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
    /**
     * Filter which Server to delete.
     */
    where: ServerWhereUniqueInput
  }

  /**
   * Server deleteMany
   */
  export type ServerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servers to delete
     */
    where?: ServerWhereInput
    /**
     * Limit how many Servers to delete.
     */
    limit?: number
  }

  /**
   * Server findRaw
   */
  export type ServerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Server aggregateRaw
   */
  export type ServerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Server.members
   */
  export type Server$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Server.channels
   */
  export type Server$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Server without action
   */
  export type ServerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Server
     */
    select?: ServerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Server
     */
    omit?: ServerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServerInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    role: $Enums.MemberRole | null
    profileId: string | null
    serverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    role: $Enums.MemberRole | null
    profileId: string | null
    serverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    role: number
    profileId: number
    serverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    role?: true
    profileId?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    role?: true
    profileId?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    role?: true
    profileId?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    role: $Enums.MemberRole
    profileId: string
    serverId: string
    createdAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    profileId?: boolean
    serverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
    messages?: boolean | Member$messagesArgs<ExtArgs>
    directMessages?: boolean | Member$directMessagesArgs<ExtArgs>
    conversationInitiated?: boolean | Member$conversationInitiatedArgs<ExtArgs>
    conversationReceived?: boolean | Member$conversationReceivedArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean
    role?: boolean
    profileId?: boolean
    serverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "profileId" | "serverId" | "createdAt" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
    messages?: boolean | Member$messagesArgs<ExtArgs>
    directMessages?: boolean | Member$directMessagesArgs<ExtArgs>
    conversationInitiated?: boolean | Member$conversationInitiatedArgs<ExtArgs>
    conversationReceived?: boolean | Member$conversationReceivedArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      server: Prisma.$ServerPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
      directMessages: Prisma.$DirectMessagePayload<ExtArgs>[]
      conversationInitiated: Prisma.$ConversationsPayload<ExtArgs>[]
      conversationReceived: Prisma.$ConversationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.MemberRole
      profileId: string
      serverId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * @param {MemberFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const member = await prisma.member.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MemberFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Member.
     * @param {MemberAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const member = await prisma.member.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MemberAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    server<T extends ServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServerDefaultArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Member$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Member$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    directMessages<T extends Member$directMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Member$directMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationInitiated<T extends Member$conversationInitiatedArgs<ExtArgs> = {}>(args?: Subset<T, Member$conversationInitiatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversationReceived<T extends Member$conversationReceivedArgs<ExtArgs> = {}>(args?: Subset<T, Member$conversationReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly role: FieldRef<"Member", 'MemberRole'>
    readonly profileId: FieldRef<"Member", 'String'>
    readonly serverId: FieldRef<"Member", 'String'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member findRaw
   */
  export type MemberFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Member aggregateRaw
   */
  export type MemberAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Member.messages
   */
  export type Member$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Member.directMessages
   */
  export type Member$directMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    where?: DirectMessageWhereInput
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    cursor?: DirectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * Member.conversationInitiated
   */
  export type Member$conversationInitiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Member.conversationReceived
   */
  export type Member$conversationReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    cursor?: ConversationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ChannelType | null
    profileId: string | null
    serverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ChannelType | null
    profileId: string | null
    serverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    name: number
    type: number
    profileId: number
    serverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChannelMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    profileId?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    profileId?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    profileId?: true
    serverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ChannelType
    profileId: string
    serverId: string
    createdAt: Date
    updatedAt: Date
    _count: ChannelCountAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    profileId?: boolean
    serverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
    messages?: boolean | Channel$messagesArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>



  export type ChannelSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    profileId?: boolean
    serverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "profileId" | "serverId" | "createdAt" | "updatedAt", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    server?: boolean | ServerDefaultArgs<ExtArgs>
    messages?: boolean | Channel$messagesArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      server: Prisma.$ServerPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ChannelType
      profileId: string
      serverId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * @param {ChannelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const channel = await prisma.channel.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ChannelFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Channel.
     * @param {ChannelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const channel = await prisma.channel.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ChannelAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
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
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    server<T extends ServerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServerDefaultArgs<ExtArgs>>): Prisma__ServerClient<$Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Channel$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Channel$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'String'>
    readonly name: FieldRef<"Channel", 'String'>
    readonly type: FieldRef<"Channel", 'ChannelType'>
    readonly profileId: FieldRef<"Channel", 'String'>
    readonly serverId: FieldRef<"Channel", 'String'>
    readonly createdAt: FieldRef<"Channel", 'DateTime'>
    readonly updatedAt: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channel findRaw
   */
  export type ChannelFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Channel aggregateRaw
   */
  export type ChannelAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Channel.messages
   */
  export type Channel$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    fileUrl: string | null
    memberId: string | null
    channelId: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    fileUrl: string | null
    memberId: string | null
    channelId: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    fileUrl: number
    memberId: number
    channelId: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    memberId?: true
    channelId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    memberId?: true
    channelId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    memberId?: true
    channelId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    fileUrl: string | null
    memberId: string
    channelId: string
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    fileUrl?: boolean
    memberId?: boolean
    channelId?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    fileUrl?: boolean
    memberId?: boolean
    channelId?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "fileUrl" | "memberId" | "channelId" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      fileUrl: string | null
      memberId: string
      channelId: string
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * @param {MessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const message = await prisma.message.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Message.
     * @param {MessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const message = await prisma.message.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly fileUrl: FieldRef<"Message", 'String'>
    readonly memberId: FieldRef<"Message", 'String'>
    readonly channelId: FieldRef<"Message", 'String'>
    readonly deleted: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message findRaw
   */
  export type MessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message aggregateRaw
   */
  export type MessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Conversations
   */

  export type AggregateConversations = {
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  export type ConversationsMinAggregateOutputType = {
    id: string | null
    memberOneId: string | null
    memberTwoId: string | null
  }

  export type ConversationsMaxAggregateOutputType = {
    id: string | null
    memberOneId: string | null
    memberTwoId: string | null
  }

  export type ConversationsCountAggregateOutputType = {
    id: number
    memberOneId: number
    memberTwoId: number
    _all: number
  }


  export type ConversationsMinAggregateInputType = {
    id?: true
    memberOneId?: true
    memberTwoId?: true
  }

  export type ConversationsMaxAggregateInputType = {
    id?: true
    memberOneId?: true
    memberTwoId?: true
  }

  export type ConversationsCountAggregateInputType = {
    id?: true
    memberOneId?: true
    memberTwoId?: true
    _all?: true
  }

  export type ConversationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to aggregate.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationsMaxAggregateInputType
  }

  export type GetConversationsAggregateType<T extends ConversationsAggregateArgs> = {
        [P in keyof T & keyof AggregateConversations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversations[P]>
      : GetScalarType<T[P], AggregateConversations[P]>
  }




  export type ConversationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationsWhereInput
    orderBy?: ConversationsOrderByWithAggregationInput | ConversationsOrderByWithAggregationInput[]
    by: ConversationsScalarFieldEnum[] | ConversationsScalarFieldEnum
    having?: ConversationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationsCountAggregateInputType | true
    _min?: ConversationsMinAggregateInputType
    _max?: ConversationsMaxAggregateInputType
  }

  export type ConversationsGroupByOutputType = {
    id: string
    memberOneId: string
    memberTwoId: string
    _count: ConversationsCountAggregateOutputType | null
    _min: ConversationsMinAggregateOutputType | null
    _max: ConversationsMaxAggregateOutputType | null
  }

  type GetConversationsGroupByPayload<T extends ConversationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationsGroupByOutputType[P]>
        }
      >
    >


  export type ConversationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberOneId?: boolean
    memberTwoId?: boolean
    memberOne?: boolean | MemberDefaultArgs<ExtArgs>
    memberTwo?: boolean | MemberDefaultArgs<ExtArgs>
    directMessages?: boolean | Conversations$directMessagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversations"]>



  export type ConversationsSelectScalar = {
    id?: boolean
    memberOneId?: boolean
    memberTwoId?: boolean
  }

  export type ConversationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberOneId" | "memberTwoId", ExtArgs["result"]["conversations"]>
  export type ConversationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberOne?: boolean | MemberDefaultArgs<ExtArgs>
    memberTwo?: boolean | MemberDefaultArgs<ExtArgs>
    directMessages?: boolean | Conversations$directMessagesArgs<ExtArgs>
    _count?: boolean | ConversationsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConversationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversations"
    objects: {
      memberOne: Prisma.$MemberPayload<ExtArgs>
      memberTwo: Prisma.$MemberPayload<ExtArgs>
      directMessages: Prisma.$DirectMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberOneId: string
      memberTwoId: string
    }, ExtArgs["result"]["conversations"]>
    composites: {}
  }

  type ConversationsGetPayload<S extends boolean | null | undefined | ConversationsDefaultArgs> = $Result.GetResult<Prisma.$ConversationsPayload, S>

  type ConversationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationsCountAggregateInputType | true
    }

  export interface ConversationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversations'], meta: { name: 'Conversations' } }
    /**
     * Find zero or one Conversations that matches the filter.
     * @param {ConversationsFindUniqueArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationsFindUniqueArgs>(args: SelectSubset<T, ConversationsFindUniqueArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationsFindUniqueOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationsFindFirstArgs>(args?: SelectSubset<T, ConversationsFindFirstArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindFirstOrThrowArgs} args - Arguments to find a Conversations
     * @example
     * // Get one Conversations
     * const conversations = await prisma.conversations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversations.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationsWithIdOnly = await prisma.conversations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationsFindManyArgs>(args?: SelectSubset<T, ConversationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversations.
     * @param {ConversationsCreateArgs} args - Arguments to create a Conversations.
     * @example
     * // Create one Conversations
     * const Conversations = await prisma.conversations.create({
     *   data: {
     *     // ... data to create a Conversations
     *   }
     * })
     * 
     */
    create<T extends ConversationsCreateArgs>(args: SelectSubset<T, ConversationsCreateArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationsCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversations = await prisma.conversations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationsCreateManyArgs>(args?: SelectSubset<T, ConversationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversations.
     * @param {ConversationsDeleteArgs} args - Arguments to delete one Conversations.
     * @example
     * // Delete one Conversations
     * const Conversations = await prisma.conversations.delete({
     *   where: {
     *     // ... filter to delete one Conversations
     *   }
     * })
     * 
     */
    delete<T extends ConversationsDeleteArgs>(args: SelectSubset<T, ConversationsDeleteArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversations.
     * @param {ConversationsUpdateArgs} args - Arguments to update one Conversations.
     * @example
     * // Update one Conversations
     * const conversations = await prisma.conversations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationsUpdateArgs>(args: SelectSubset<T, ConversationsUpdateArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationsDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationsDeleteManyArgs>(args?: SelectSubset<T, ConversationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversations = await prisma.conversations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationsUpdateManyArgs>(args: SelectSubset<T, ConversationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversations.
     * @param {ConversationsUpsertArgs} args - Arguments to update or create a Conversations.
     * @example
     * // Update or create a Conversations
     * const conversations = await prisma.conversations.upsert({
     *   create: {
     *     // ... data to create a Conversations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversations we want to update
     *   }
     * })
     */
    upsert<T extends ConversationsUpsertArgs>(args: SelectSubset<T, ConversationsUpsertArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * @param {ConversationsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const conversations = await prisma.conversations.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConversationsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Conversations.
     * @param {ConversationsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const conversations = await prisma.conversations.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConversationsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversations.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationsCountArgs>(
      args?: Subset<T, ConversationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationsAggregateArgs>(args: Subset<T, ConversationsAggregateArgs>): Prisma.PrismaPromise<GetConversationsAggregateType<T>>

    /**
     * Group by Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationsGroupByArgs} args - Group by arguments.
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
      T extends ConversationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationsGroupByArgs['orderBy'] }
        : { orderBy?: ConversationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversations model
   */
  readonly fields: ConversationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberOne<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memberTwo<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    directMessages<T extends Conversations$directMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversations$directMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversations model
   */
  interface ConversationsFieldRefs {
    readonly id: FieldRef<"Conversations", 'String'>
    readonly memberOneId: FieldRef<"Conversations", 'String'>
    readonly memberTwoId: FieldRef<"Conversations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conversations findUnique
   */
  export type ConversationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations findUniqueOrThrow
   */
  export type ConversationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations findFirst
   */
  export type ConversationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations findFirstOrThrow
   */
  export type ConversationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations findMany
   */
  export type ConversationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationsOrderByWithRelationInput | ConversationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationsScalarFieldEnum | ConversationsScalarFieldEnum[]
  }

  /**
   * Conversations create
   */
  export type ConversationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversations.
     */
    data: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
  }

  /**
   * Conversations createMany
   */
  export type ConversationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationsCreateManyInput | ConversationsCreateManyInput[]
  }

  /**
   * Conversations update
   */
  export type ConversationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversations.
     */
    data: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
    /**
     * Choose, which Conversations to update.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations updateMany
   */
  export type ConversationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationsWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversations upsert
   */
  export type ConversationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversations to update in case it exists.
     */
    where: ConversationsWhereUniqueInput
    /**
     * In case the Conversations found by the `where` argument doesn't exist, create a new Conversations with this data.
     */
    create: XOR<ConversationsCreateInput, ConversationsUncheckedCreateInput>
    /**
     * In case the Conversations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationsUpdateInput, ConversationsUncheckedUpdateInput>
  }

  /**
   * Conversations delete
   */
  export type ConversationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
    /**
     * Filter which Conversations to delete.
     */
    where: ConversationsWhereUniqueInput
  }

  /**
   * Conversations deleteMany
   */
  export type ConversationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationsWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversations findRaw
   */
  export type ConversationsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Conversations aggregateRaw
   */
  export type ConversationsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Conversations.directMessages
   */
  export type Conversations$directMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    where?: DirectMessageWhereInput
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    cursor?: DirectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * Conversations without action
   */
  export type ConversationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversations
     */
    select?: ConversationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversations
     */
    omit?: ConversationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationsInclude<ExtArgs> | null
  }


  /**
   * Model DirectMessage
   */

  export type AggregateDirectMessage = {
    _count: DirectMessageCountAggregateOutputType | null
    _min: DirectMessageMinAggregateOutputType | null
    _max: DirectMessageMaxAggregateOutputType | null
  }

  export type DirectMessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    fileUrl: string | null
    memberId: string | null
    conversationId: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    fileUrl: string | null
    memberId: string | null
    conversationId: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectMessageCountAggregateOutputType = {
    id: number
    content: number
    fileUrl: number
    memberId: number
    conversationId: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectMessageMinAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    memberId?: true
    conversationId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMessageMaxAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    memberId?: true
    conversationId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectMessageCountAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    memberId?: true
    conversationId?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectMessage to aggregate.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectMessages
    **/
    _count?: true | DirectMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectMessageMaxAggregateInputType
  }

  export type GetDirectMessageAggregateType<T extends DirectMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectMessage[P]>
      : GetScalarType<T[P], AggregateDirectMessage[P]>
  }




  export type DirectMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectMessageWhereInput
    orderBy?: DirectMessageOrderByWithAggregationInput | DirectMessageOrderByWithAggregationInput[]
    by: DirectMessageScalarFieldEnum[] | DirectMessageScalarFieldEnum
    having?: DirectMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectMessageCountAggregateInputType | true
    _min?: DirectMessageMinAggregateInputType
    _max?: DirectMessageMaxAggregateInputType
  }

  export type DirectMessageGroupByOutputType = {
    id: string
    content: string
    fileUrl: string | null
    memberId: string
    conversationId: string
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: DirectMessageCountAggregateOutputType | null
    _min: DirectMessageMinAggregateOutputType | null
    _max: DirectMessageMaxAggregateOutputType | null
  }

  type GetDirectMessageGroupByPayload<T extends DirectMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectMessageGroupByOutputType[P]>
            : GetScalarType<T[P], DirectMessageGroupByOutputType[P]>
        }
      >
    >


  export type DirectMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    fileUrl?: boolean
    memberId?: boolean
    conversationId?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    consversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directMessage"]>



  export type DirectMessageSelectScalar = {
    id?: boolean
    content?: boolean
    fileUrl?: boolean
    memberId?: boolean
    conversationId?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DirectMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "fileUrl" | "memberId" | "conversationId" | "deleted" | "createdAt" | "updatedAt", ExtArgs["result"]["directMessage"]>
  export type DirectMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    consversation?: boolean | ConversationsDefaultArgs<ExtArgs>
  }

  export type $DirectMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectMessage"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      consversation: Prisma.$ConversationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      fileUrl: string | null
      memberId: string
      conversationId: string
      deleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["directMessage"]>
    composites: {}
  }

  type DirectMessageGetPayload<S extends boolean | null | undefined | DirectMessageDefaultArgs> = $Result.GetResult<Prisma.$DirectMessagePayload, S>

  type DirectMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectMessageCountAggregateInputType | true
    }

  export interface DirectMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectMessage'], meta: { name: 'DirectMessage' } }
    /**
     * Find zero or one DirectMessage that matches the filter.
     * @param {DirectMessageFindUniqueArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectMessageFindUniqueArgs>(args: SelectSubset<T, DirectMessageFindUniqueArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DirectMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectMessageFindUniqueOrThrowArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindFirstArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectMessageFindFirstArgs>(args?: SelectSubset<T, DirectMessageFindFirstArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindFirstOrThrowArgs} args - Arguments to find a DirectMessage
     * @example
     * // Get one DirectMessage
     * const directMessage = await prisma.directMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DirectMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectMessages
     * const directMessages = await prisma.directMessage.findMany()
     * 
     * // Get first 10 DirectMessages
     * const directMessages = await prisma.directMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directMessageWithIdOnly = await prisma.directMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectMessageFindManyArgs>(args?: SelectSubset<T, DirectMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DirectMessage.
     * @param {DirectMessageCreateArgs} args - Arguments to create a DirectMessage.
     * @example
     * // Create one DirectMessage
     * const DirectMessage = await prisma.directMessage.create({
     *   data: {
     *     // ... data to create a DirectMessage
     *   }
     * })
     * 
     */
    create<T extends DirectMessageCreateArgs>(args: SelectSubset<T, DirectMessageCreateArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DirectMessages.
     * @param {DirectMessageCreateManyArgs} args - Arguments to create many DirectMessages.
     * @example
     * // Create many DirectMessages
     * const directMessage = await prisma.directMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectMessageCreateManyArgs>(args?: SelectSubset<T, DirectMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DirectMessage.
     * @param {DirectMessageDeleteArgs} args - Arguments to delete one DirectMessage.
     * @example
     * // Delete one DirectMessage
     * const DirectMessage = await prisma.directMessage.delete({
     *   where: {
     *     // ... filter to delete one DirectMessage
     *   }
     * })
     * 
     */
    delete<T extends DirectMessageDeleteArgs>(args: SelectSubset<T, DirectMessageDeleteArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DirectMessage.
     * @param {DirectMessageUpdateArgs} args - Arguments to update one DirectMessage.
     * @example
     * // Update one DirectMessage
     * const directMessage = await prisma.directMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectMessageUpdateArgs>(args: SelectSubset<T, DirectMessageUpdateArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DirectMessages.
     * @param {DirectMessageDeleteManyArgs} args - Arguments to filter DirectMessages to delete.
     * @example
     * // Delete a few DirectMessages
     * const { count } = await prisma.directMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectMessageDeleteManyArgs>(args?: SelectSubset<T, DirectMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectMessages
     * const directMessage = await prisma.directMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectMessageUpdateManyArgs>(args: SelectSubset<T, DirectMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DirectMessage.
     * @param {DirectMessageUpsertArgs} args - Arguments to update or create a DirectMessage.
     * @example
     * // Update or create a DirectMessage
     * const directMessage = await prisma.directMessage.upsert({
     *   create: {
     *     // ... data to create a DirectMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectMessage we want to update
     *   }
     * })
     */
    upsert<T extends DirectMessageUpsertArgs>(args: SelectSubset<T, DirectMessageUpsertArgs<ExtArgs>>): Prisma__DirectMessageClient<$Result.GetResult<Prisma.$DirectMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DirectMessages that matches the filter.
     * @param {DirectMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const directMessage = await prisma.directMessage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DirectMessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DirectMessage.
     * @param {DirectMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const directMessage = await prisma.directMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DirectMessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DirectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageCountArgs} args - Arguments to filter DirectMessages to count.
     * @example
     * // Count the number of DirectMessages
     * const count = await prisma.directMessage.count({
     *   where: {
     *     // ... the filter for the DirectMessages we want to count
     *   }
     * })
    **/
    count<T extends DirectMessageCountArgs>(
      args?: Subset<T, DirectMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectMessageAggregateArgs>(args: Subset<T, DirectMessageAggregateArgs>): Prisma.PrismaPromise<GetDirectMessageAggregateType<T>>

    /**
     * Group by DirectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectMessageGroupByArgs} args - Group by arguments.
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
      T extends DirectMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectMessageGroupByArgs['orderBy'] }
        : { orderBy?: DirectMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirectMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectMessage model
   */
  readonly fields: DirectMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consversation<T extends ConversationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationsDefaultArgs<ExtArgs>>): Prisma__ConversationsClient<$Result.GetResult<Prisma.$ConversationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DirectMessage model
   */
  interface DirectMessageFieldRefs {
    readonly id: FieldRef<"DirectMessage", 'String'>
    readonly content: FieldRef<"DirectMessage", 'String'>
    readonly fileUrl: FieldRef<"DirectMessage", 'String'>
    readonly memberId: FieldRef<"DirectMessage", 'String'>
    readonly conversationId: FieldRef<"DirectMessage", 'String'>
    readonly deleted: FieldRef<"DirectMessage", 'Boolean'>
    readonly createdAt: FieldRef<"DirectMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"DirectMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DirectMessage findUnique
   */
  export type DirectMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage findUniqueOrThrow
   */
  export type DirectMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage findFirst
   */
  export type DirectMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessages.
     */
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * DirectMessage findFirstOrThrow
   */
  export type DirectMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessage to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectMessages.
     */
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * DirectMessage findMany
   */
  export type DirectMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter, which DirectMessages to fetch.
     */
    where?: DirectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectMessages to fetch.
     */
    orderBy?: DirectMessageOrderByWithRelationInput | DirectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectMessages.
     */
    cursor?: DirectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectMessages.
     */
    skip?: number
    distinct?: DirectMessageScalarFieldEnum | DirectMessageScalarFieldEnum[]
  }

  /**
   * DirectMessage create
   */
  export type DirectMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectMessage.
     */
    data: XOR<DirectMessageCreateInput, DirectMessageUncheckedCreateInput>
  }

  /**
   * DirectMessage createMany
   */
  export type DirectMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectMessages.
     */
    data: DirectMessageCreateManyInput | DirectMessageCreateManyInput[]
  }

  /**
   * DirectMessage update
   */
  export type DirectMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectMessage.
     */
    data: XOR<DirectMessageUpdateInput, DirectMessageUncheckedUpdateInput>
    /**
     * Choose, which DirectMessage to update.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage updateMany
   */
  export type DirectMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectMessages.
     */
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyInput>
    /**
     * Filter which DirectMessages to update
     */
    where?: DirectMessageWhereInput
    /**
     * Limit how many DirectMessages to update.
     */
    limit?: number
  }

  /**
   * DirectMessage upsert
   */
  export type DirectMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectMessage to update in case it exists.
     */
    where: DirectMessageWhereUniqueInput
    /**
     * In case the DirectMessage found by the `where` argument doesn't exist, create a new DirectMessage with this data.
     */
    create: XOR<DirectMessageCreateInput, DirectMessageUncheckedCreateInput>
    /**
     * In case the DirectMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectMessageUpdateInput, DirectMessageUncheckedUpdateInput>
  }

  /**
   * DirectMessage delete
   */
  export type DirectMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
    /**
     * Filter which DirectMessage to delete.
     */
    where: DirectMessageWhereUniqueInput
  }

  /**
   * DirectMessage deleteMany
   */
  export type DirectMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectMessages to delete
     */
    where?: DirectMessageWhereInput
    /**
     * Limit how many DirectMessages to delete.
     */
    limit?: number
  }

  /**
   * DirectMessage findRaw
   */
  export type DirectMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DirectMessage aggregateRaw
   */
  export type DirectMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DirectMessage without action
   */
  export type DirectMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectMessage
     */
    select?: DirectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectMessage
     */
    omit?: DirectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    imageUrl: 'imageUrl',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const ServerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    inviteCode: 'inviteCode',
    profileId: 'profileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    role: 'role',
    profileId: 'profileId',
    serverId: 'serverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    profileId: 'profileId',
    serverId: 'serverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    fileUrl: 'fileUrl',
    memberId: 'memberId',
    channelId: 'channelId',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ConversationsScalarFieldEnum: {
    id: 'id',
    memberOneId: 'memberOneId',
    memberTwoId: 'memberTwoId'
  };

  export type ConversationsScalarFieldEnum = (typeof ConversationsScalarFieldEnum)[keyof typeof ConversationsScalarFieldEnum]


  export const DirectMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    fileUrl: 'fileUrl',
    memberId: 'memberId',
    conversationId: 'conversationId',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectMessageScalarFieldEnum = (typeof DirectMessageScalarFieldEnum)[keyof typeof DirectMessageScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MemberRole'
   */
  export type EnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole'>
    


  /**
   * Reference to a field of type 'MemberRole[]'
   */
  export type ListEnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole[]'>
    


  /**
   * Reference to a field of type 'ChannelType'
   */
  export type EnumChannelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelType'>
    


  /**
   * Reference to a field of type 'ChannelType[]'
   */
  export type ListEnumChannelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChannelType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    imageUrl?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    servers?: ServerListRelationFilter
    members?: MemberListRelationFilter
    channels?: ChannelListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servers?: ServerOrderByRelationAggregateInput
    members?: MemberOrderByRelationAggregateInput
    channels?: ChannelOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringFilter<"Profile"> | string
    imageUrl?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    servers?: ServerListRelationFilter
    members?: MemberListRelationFilter
    channels?: ChannelListRelationFilter
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    imageUrl?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type ServerWhereInput = {
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    id?: StringFilter<"Server"> | string
    name?: StringFilter<"Server"> | string
    imageUrl?: StringFilter<"Server"> | string
    inviteCode?: StringFilter<"Server"> | string
    profileId?: StringFilter<"Server"> | string
    createdAt?: DateTimeFilter<"Server"> | Date | string
    updatedAt?: DateTimeFilter<"Server"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    members?: MemberListRelationFilter
    channels?: ChannelListRelationFilter
  }

  export type ServerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    inviteCode?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    members?: MemberOrderByRelationAggregateInput
    channels?: ChannelOrderByRelationAggregateInput
  }

  export type ServerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteCode?: string
    AND?: ServerWhereInput | ServerWhereInput[]
    OR?: ServerWhereInput[]
    NOT?: ServerWhereInput | ServerWhereInput[]
    name?: StringFilter<"Server"> | string
    imageUrl?: StringFilter<"Server"> | string
    profileId?: StringFilter<"Server"> | string
    createdAt?: DateTimeFilter<"Server"> | Date | string
    updatedAt?: DateTimeFilter<"Server"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    members?: MemberListRelationFilter
    channels?: ChannelListRelationFilter
  }, "id" | "inviteCode">

  export type ServerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    inviteCode?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServerCountOrderByAggregateInput
    _max?: ServerMaxOrderByAggregateInput
    _min?: ServerMinOrderByAggregateInput
  }

  export type ServerScalarWhereWithAggregatesInput = {
    AND?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    OR?: ServerScalarWhereWithAggregatesInput[]
    NOT?: ServerScalarWhereWithAggregatesInput | ServerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Server"> | string
    name?: StringWithAggregatesFilter<"Server"> | string
    imageUrl?: StringWithAggregatesFilter<"Server"> | string
    inviteCode?: StringWithAggregatesFilter<"Server"> | string
    profileId?: StringWithAggregatesFilter<"Server"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Server"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Server"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    role?: EnumMemberRoleFilter<"Member"> | $Enums.MemberRole
    profileId?: StringFilter<"Member"> | string
    serverId?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    server?: XOR<ServerScalarRelationFilter, ServerWhereInput>
    messages?: MessageListRelationFilter
    directMessages?: DirectMessageListRelationFilter
    conversationInitiated?: ConversationsListRelationFilter
    conversationReceived?: ConversationsListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    server?: ServerOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    directMessages?: DirectMessageOrderByRelationAggregateInput
    conversationInitiated?: ConversationsOrderByRelationAggregateInput
    conversationReceived?: ConversationsOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    role?: EnumMemberRoleFilter<"Member"> | $Enums.MemberRole
    profileId?: StringFilter<"Member"> | string
    serverId?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    server?: XOR<ServerScalarRelationFilter, ServerWhereInput>
    messages?: MessageListRelationFilter
    directMessages?: DirectMessageListRelationFilter
    conversationInitiated?: ConversationsListRelationFilter
    conversationReceived?: ConversationsListRelationFilter
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    role?: EnumMemberRoleWithAggregatesFilter<"Member"> | $Enums.MemberRole
    profileId?: StringWithAggregatesFilter<"Member"> | string
    serverId?: StringWithAggregatesFilter<"Member"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    type?: EnumChannelTypeFilter<"Channel"> | $Enums.ChannelType
    profileId?: StringFilter<"Channel"> | string
    serverId?: StringFilter<"Channel"> | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    server?: XOR<ServerScalarRelationFilter, ServerWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    server?: ServerOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    name?: StringFilter<"Channel"> | string
    type?: EnumChannelTypeFilter<"Channel"> | $Enums.ChannelType
    profileId?: StringFilter<"Channel"> | string
    serverId?: StringFilter<"Channel"> | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    server?: XOR<ServerScalarRelationFilter, ServerWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Channel"> | string
    name?: StringWithAggregatesFilter<"Channel"> | string
    type?: EnumChannelTypeWithAggregatesFilter<"Channel"> | $Enums.ChannelType
    profileId?: StringWithAggregatesFilter<"Channel"> | string
    serverId?: StringWithAggregatesFilter<"Channel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    fileUrl?: StringNullableFilter<"Message"> | string | null
    memberId?: StringFilter<"Message"> | string
    channelId?: StringFilter<"Message"> | string
    deleted?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    fileUrl?: StringNullableFilter<"Message"> | string | null
    memberId?: StringFilter<"Message"> | string
    channelId?: StringFilter<"Message"> | string
    deleted?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    memberId?: StringWithAggregatesFilter<"Message"> | string
    channelId?: StringWithAggregatesFilter<"Message"> | string
    deleted?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ConversationsWhereInput = {
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    id?: StringFilter<"Conversations"> | string
    memberOneId?: StringFilter<"Conversations"> | string
    memberTwoId?: StringFilter<"Conversations"> | string
    memberOne?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    memberTwo?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    directMessages?: DirectMessageListRelationFilter
  }

  export type ConversationsOrderByWithRelationInput = {
    id?: SortOrder
    memberOneId?: SortOrder
    memberTwoId?: SortOrder
    memberOne?: MemberOrderByWithRelationInput
    memberTwo?: MemberOrderByWithRelationInput
    directMessages?: DirectMessageOrderByRelationAggregateInput
  }

  export type ConversationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberOneId_memberTwoId?: ConversationsMemberOneIdMemberTwoIdCompoundUniqueInput
    AND?: ConversationsWhereInput | ConversationsWhereInput[]
    OR?: ConversationsWhereInput[]
    NOT?: ConversationsWhereInput | ConversationsWhereInput[]
    memberOneId?: StringFilter<"Conversations"> | string
    memberTwoId?: StringFilter<"Conversations"> | string
    memberOne?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    memberTwo?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    directMessages?: DirectMessageListRelationFilter
  }, "id" | "memberOneId_memberTwoId">

  export type ConversationsOrderByWithAggregationInput = {
    id?: SortOrder
    memberOneId?: SortOrder
    memberTwoId?: SortOrder
    _count?: ConversationsCountOrderByAggregateInput
    _max?: ConversationsMaxOrderByAggregateInput
    _min?: ConversationsMinOrderByAggregateInput
  }

  export type ConversationsScalarWhereWithAggregatesInput = {
    AND?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    OR?: ConversationsScalarWhereWithAggregatesInput[]
    NOT?: ConversationsScalarWhereWithAggregatesInput | ConversationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversations"> | string
    memberOneId?: StringWithAggregatesFilter<"Conversations"> | string
    memberTwoId?: StringWithAggregatesFilter<"Conversations"> | string
  }

  export type DirectMessageWhereInput = {
    AND?: DirectMessageWhereInput | DirectMessageWhereInput[]
    OR?: DirectMessageWhereInput[]
    NOT?: DirectMessageWhereInput | DirectMessageWhereInput[]
    id?: StringFilter<"DirectMessage"> | string
    content?: StringFilter<"DirectMessage"> | string
    fileUrl?: StringNullableFilter<"DirectMessage"> | string | null
    memberId?: StringFilter<"DirectMessage"> | string
    conversationId?: StringFilter<"DirectMessage"> | string
    deleted?: BoolFilter<"DirectMessage"> | boolean
    createdAt?: DateTimeFilter<"DirectMessage"> | Date | string
    updatedAt?: DateTimeFilter<"DirectMessage"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    consversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
  }

  export type DirectMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    consversation?: ConversationsOrderByWithRelationInput
  }

  export type DirectMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DirectMessageWhereInput | DirectMessageWhereInput[]
    OR?: DirectMessageWhereInput[]
    NOT?: DirectMessageWhereInput | DirectMessageWhereInput[]
    content?: StringFilter<"DirectMessage"> | string
    fileUrl?: StringNullableFilter<"DirectMessage"> | string | null
    memberId?: StringFilter<"DirectMessage"> | string
    conversationId?: StringFilter<"DirectMessage"> | string
    deleted?: BoolFilter<"DirectMessage"> | boolean
    createdAt?: DateTimeFilter<"DirectMessage"> | Date | string
    updatedAt?: DateTimeFilter<"DirectMessage"> | Date | string
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    consversation?: XOR<ConversationsScalarRelationFilter, ConversationsWhereInput>
  }, "id">

  export type DirectMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectMessageCountOrderByAggregateInput
    _max?: DirectMessageMaxOrderByAggregateInput
    _min?: DirectMessageMinOrderByAggregateInput
  }

  export type DirectMessageScalarWhereWithAggregatesInput = {
    AND?: DirectMessageScalarWhereWithAggregatesInput | DirectMessageScalarWhereWithAggregatesInput[]
    OR?: DirectMessageScalarWhereWithAggregatesInput[]
    NOT?: DirectMessageScalarWhereWithAggregatesInput | DirectMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DirectMessage"> | string
    content?: StringWithAggregatesFilter<"DirectMessage"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"DirectMessage"> | string | null
    memberId?: StringWithAggregatesFilter<"DirectMessage"> | string
    conversationId?: StringWithAggregatesFilter<"DirectMessage"> | string
    deleted?: BoolWithAggregatesFilter<"DirectMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DirectMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DirectMessage"> | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerCreateNestedManyWithoutProfileInput
    members?: MemberCreateNestedManyWithoutProfileInput
    channels?: ChannelCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerUncheckedCreateNestedManyWithoutProfileInput
    members?: MemberUncheckedCreateNestedManyWithoutProfileInput
    channels?: ChannelUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUpdateManyWithoutProfileNestedInput
    members?: MemberUpdateManyWithoutProfileNestedInput
    channels?: ChannelUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUncheckedUpdateManyWithoutProfileNestedInput
    members?: MemberUncheckedUpdateManyWithoutProfileNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerCreateInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutServersInput
    members?: MemberCreateNestedManyWithoutServerInput
    channels?: ChannelCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutServerInput
    channels?: ChannelUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutServersNestedInput
    members?: MemberUpdateManyWithoutServerNestedInput
    channels?: ChannelUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutServerNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServerCreateManyInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    id?: string
    role?: $Enums.MemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMembersInput
    server: ServerCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    role?: $Enums.MemberRole
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsUncheckedCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsUncheckedCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberUpdateInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMembersNestedInput
    server?: ServerUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUncheckedUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUncheckedUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUncheckedUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    role?: $Enums.MemberRole
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelCreateInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutChannelsInput
    server: ServerCreateNestedOneWithoutChannelsInput
    messages?: MessageCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutChannelsNestedInput
    server?: ServerUpdateOneRequiredWithoutChannelsNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    fileUrl?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutMessagesInput
    channel: ChannelCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    fileUrl?: string | null
    memberId: string
    channelId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMessagesNestedInput
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    fileUrl?: string | null
    memberId: string
    channelId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsCreateInput = {
    id?: string
    memberOne: MemberCreateNestedOneWithoutConversationInitiatedInput
    memberTwo: MemberCreateNestedOneWithoutConversationReceivedInput
    directMessages?: DirectMessageCreateNestedManyWithoutConsversationInput
  }

  export type ConversationsUncheckedCreateInput = {
    id?: string
    memberOneId: string
    memberTwoId: string
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutConsversationInput
  }

  export type ConversationsUpdateInput = {
    memberOne?: MemberUpdateOneRequiredWithoutConversationInitiatedNestedInput
    memberTwo?: MemberUpdateOneRequiredWithoutConversationReceivedNestedInput
    directMessages?: DirectMessageUpdateManyWithoutConsversationNestedInput
  }

  export type ConversationsUncheckedUpdateInput = {
    memberOneId?: StringFieldUpdateOperationsInput | string
    memberTwoId?: StringFieldUpdateOperationsInput | string
    directMessages?: DirectMessageUncheckedUpdateManyWithoutConsversationNestedInput
  }

  export type ConversationsCreateManyInput = {
    id?: string
    memberOneId: string
    memberTwoId: string
  }

  export type ConversationsUpdateManyMutationInput = {

  }

  export type ConversationsUncheckedUpdateManyInput = {
    memberOneId?: StringFieldUpdateOperationsInput | string
    memberTwoId?: StringFieldUpdateOperationsInput | string
  }

  export type DirectMessageCreateInput = {
    id?: string
    content: string
    fileUrl?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutDirectMessagesInput
    consversation: ConversationsCreateNestedOneWithoutDirectMessagesInput
  }

  export type DirectMessageUncheckedCreateInput = {
    id?: string
    content: string
    fileUrl?: string | null
    memberId: string
    conversationId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutDirectMessagesNestedInput
    consversation?: ConversationsUpdateOneRequiredWithoutDirectMessagesNestedInput
  }

  export type DirectMessageUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageCreateManyInput = {
    id?: string
    content: string
    fileUrl?: string | null
    memberId: string
    conversationId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ServerListRelationFilter = {
    every?: ServerWhereInput
    some?: ServerWhereInput
    none?: ServerWhereInput
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type ServerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type ServerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    inviteCode?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    inviteCode?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    inviteCode?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type ServerScalarRelationFilter = {
    is?: ServerWhereInput
    isNot?: ServerWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type DirectMessageListRelationFilter = {
    every?: DirectMessageWhereInput
    some?: DirectMessageWhereInput
    none?: DirectMessageWhereInput
  }

  export type ConversationsListRelationFilter = {
    every?: ConversationsWhereInput
    some?: ConversationsWhereInput
    none?: ConversationsWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type EnumChannelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeFilter<$PrismaModel> | $Enums.ChannelType
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    profileId?: SortOrder
    serverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumChannelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChannelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelTypeFilter<$PrismaModel>
    _max?: NestedEnumChannelTypeFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type ChannelScalarRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    channelId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConversationsMemberOneIdMemberTwoIdCompoundUniqueInput = {
    memberOneId: string
    memberTwoId: string
  }

  export type ConversationsCountOrderByAggregateInput = {
    id?: SortOrder
    memberOneId?: SortOrder
    memberTwoId?: SortOrder
  }

  export type ConversationsMaxOrderByAggregateInput = {
    id?: SortOrder
    memberOneId?: SortOrder
    memberTwoId?: SortOrder
  }

  export type ConversationsMinOrderByAggregateInput = {
    id?: SortOrder
    memberOneId?: SortOrder
    memberTwoId?: SortOrder
  }

  export type ConversationsScalarRelationFilter = {
    is?: ConversationsWhereInput
    isNot?: ConversationsWhereInput
  }

  export type DirectMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    memberId?: SortOrder
    conversationId?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerCreateNestedManyWithoutProfileInput = {
    create?: XOR<ServerCreateWithoutProfileInput, ServerUncheckedCreateWithoutProfileInput> | ServerCreateWithoutProfileInput[] | ServerUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ServerCreateOrConnectWithoutProfileInput | ServerCreateOrConnectWithoutProfileInput[]
    createMany?: ServerCreateManyProfileInputEnvelope
    connect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
  }

  export type MemberCreateNestedManyWithoutProfileInput = {
    create?: XOR<MemberCreateWithoutProfileInput, MemberUncheckedCreateWithoutProfileInput> | MemberCreateWithoutProfileInput[] | MemberUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutProfileInput | MemberCreateOrConnectWithoutProfileInput[]
    createMany?: MemberCreateManyProfileInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type ChannelCreateNestedManyWithoutProfileInput = {
    create?: XOR<ChannelCreateWithoutProfileInput, ChannelUncheckedCreateWithoutProfileInput> | ChannelCreateWithoutProfileInput[] | ChannelUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutProfileInput | ChannelCreateOrConnectWithoutProfileInput[]
    createMany?: ChannelCreateManyProfileInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type ServerUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ServerCreateWithoutProfileInput, ServerUncheckedCreateWithoutProfileInput> | ServerCreateWithoutProfileInput[] | ServerUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ServerCreateOrConnectWithoutProfileInput | ServerCreateOrConnectWithoutProfileInput[]
    createMany?: ServerCreateManyProfileInputEnvelope
    connect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<MemberCreateWithoutProfileInput, MemberUncheckedCreateWithoutProfileInput> | MemberCreateWithoutProfileInput[] | MemberUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutProfileInput | MemberCreateOrConnectWithoutProfileInput[]
    createMany?: MemberCreateManyProfileInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type ChannelUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ChannelCreateWithoutProfileInput, ChannelUncheckedCreateWithoutProfileInput> | ChannelCreateWithoutProfileInput[] | ChannelUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutProfileInput | ChannelCreateOrConnectWithoutProfileInput[]
    createMany?: ChannelCreateManyProfileInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServerUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ServerCreateWithoutProfileInput, ServerUncheckedCreateWithoutProfileInput> | ServerCreateWithoutProfileInput[] | ServerUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ServerCreateOrConnectWithoutProfileInput | ServerCreateOrConnectWithoutProfileInput[]
    upsert?: ServerUpsertWithWhereUniqueWithoutProfileInput | ServerUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ServerCreateManyProfileInputEnvelope
    set?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    disconnect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    delete?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    connect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    update?: ServerUpdateWithWhereUniqueWithoutProfileInput | ServerUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ServerUpdateManyWithWhereWithoutProfileInput | ServerUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ServerScalarWhereInput | ServerScalarWhereInput[]
  }

  export type MemberUpdateManyWithoutProfileNestedInput = {
    create?: XOR<MemberCreateWithoutProfileInput, MemberUncheckedCreateWithoutProfileInput> | MemberCreateWithoutProfileInput[] | MemberUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutProfileInput | MemberCreateOrConnectWithoutProfileInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutProfileInput | MemberUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: MemberCreateManyProfileInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutProfileInput | MemberUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutProfileInput | MemberUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type ChannelUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ChannelCreateWithoutProfileInput, ChannelUncheckedCreateWithoutProfileInput> | ChannelCreateWithoutProfileInput[] | ChannelUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutProfileInput | ChannelCreateOrConnectWithoutProfileInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutProfileInput | ChannelUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ChannelCreateManyProfileInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutProfileInput | ChannelUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutProfileInput | ChannelUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type ServerUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ServerCreateWithoutProfileInput, ServerUncheckedCreateWithoutProfileInput> | ServerCreateWithoutProfileInput[] | ServerUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ServerCreateOrConnectWithoutProfileInput | ServerCreateOrConnectWithoutProfileInput[]
    upsert?: ServerUpsertWithWhereUniqueWithoutProfileInput | ServerUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ServerCreateManyProfileInputEnvelope
    set?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    disconnect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    delete?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    connect?: ServerWhereUniqueInput | ServerWhereUniqueInput[]
    update?: ServerUpdateWithWhereUniqueWithoutProfileInput | ServerUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ServerUpdateManyWithWhereWithoutProfileInput | ServerUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ServerScalarWhereInput | ServerScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<MemberCreateWithoutProfileInput, MemberUncheckedCreateWithoutProfileInput> | MemberCreateWithoutProfileInput[] | MemberUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutProfileInput | MemberCreateOrConnectWithoutProfileInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutProfileInput | MemberUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: MemberCreateManyProfileInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutProfileInput | MemberUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutProfileInput | MemberUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type ChannelUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ChannelCreateWithoutProfileInput, ChannelUncheckedCreateWithoutProfileInput> | ChannelCreateWithoutProfileInput[] | ChannelUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutProfileInput | ChannelCreateOrConnectWithoutProfileInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutProfileInput | ChannelUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ChannelCreateManyProfileInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutProfileInput | ChannelUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutProfileInput | ChannelUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutServersInput = {
    create?: XOR<ProfileCreateWithoutServersInput, ProfileUncheckedCreateWithoutServersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutServersInput
    connect?: ProfileWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutServerInput = {
    create?: XOR<MemberCreateWithoutServerInput, MemberUncheckedCreateWithoutServerInput> | MemberCreateWithoutServerInput[] | MemberUncheckedCreateWithoutServerInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutServerInput | MemberCreateOrConnectWithoutServerInput[]
    createMany?: MemberCreateManyServerInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type ChannelCreateNestedManyWithoutServerInput = {
    create?: XOR<ChannelCreateWithoutServerInput, ChannelUncheckedCreateWithoutServerInput> | ChannelCreateWithoutServerInput[] | ChannelUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutServerInput | ChannelCreateOrConnectWithoutServerInput[]
    createMany?: ChannelCreateManyServerInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<MemberCreateWithoutServerInput, MemberUncheckedCreateWithoutServerInput> | MemberCreateWithoutServerInput[] | MemberUncheckedCreateWithoutServerInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutServerInput | MemberCreateOrConnectWithoutServerInput[]
    createMany?: MemberCreateManyServerInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type ChannelUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<ChannelCreateWithoutServerInput, ChannelUncheckedCreateWithoutServerInput> | ChannelCreateWithoutServerInput[] | ChannelUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutServerInput | ChannelCreateOrConnectWithoutServerInput[]
    createMany?: ChannelCreateManyServerInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutServersNestedInput = {
    create?: XOR<ProfileCreateWithoutServersInput, ProfileUncheckedCreateWithoutServersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutServersInput
    upsert?: ProfileUpsertWithoutServersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutServersInput, ProfileUpdateWithoutServersInput>, ProfileUncheckedUpdateWithoutServersInput>
  }

  export type MemberUpdateManyWithoutServerNestedInput = {
    create?: XOR<MemberCreateWithoutServerInput, MemberUncheckedCreateWithoutServerInput> | MemberCreateWithoutServerInput[] | MemberUncheckedCreateWithoutServerInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutServerInput | MemberCreateOrConnectWithoutServerInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutServerInput | MemberUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: MemberCreateManyServerInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutServerInput | MemberUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutServerInput | MemberUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type ChannelUpdateManyWithoutServerNestedInput = {
    create?: XOR<ChannelCreateWithoutServerInput, ChannelUncheckedCreateWithoutServerInput> | ChannelCreateWithoutServerInput[] | ChannelUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutServerInput | ChannelCreateOrConnectWithoutServerInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutServerInput | ChannelUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: ChannelCreateManyServerInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutServerInput | ChannelUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutServerInput | ChannelUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<MemberCreateWithoutServerInput, MemberUncheckedCreateWithoutServerInput> | MemberCreateWithoutServerInput[] | MemberUncheckedCreateWithoutServerInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutServerInput | MemberCreateOrConnectWithoutServerInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutServerInput | MemberUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: MemberCreateManyServerInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutServerInput | MemberUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutServerInput | MemberUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type ChannelUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<ChannelCreateWithoutServerInput, ChannelUncheckedCreateWithoutServerInput> | ChannelCreateWithoutServerInput[] | ChannelUncheckedCreateWithoutServerInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutServerInput | ChannelCreateOrConnectWithoutServerInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutServerInput | ChannelUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: ChannelCreateManyServerInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutServerInput | ChannelUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutServerInput | ChannelUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProfileCreateWithoutMembersInput, ProfileUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutMembersInput
    connect?: ProfileWhereUniqueInput
  }

  export type ServerCreateNestedOneWithoutMembersInput = {
    create?: XOR<ServerCreateWithoutMembersInput, ServerUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ServerCreateOrConnectWithoutMembersInput
    connect?: ServerWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutMemberInput = {
    create?: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput> | MessageCreateWithoutMemberInput[] | MessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMemberInput | MessageCreateOrConnectWithoutMemberInput[]
    createMany?: MessageCreateManyMemberInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type DirectMessageCreateNestedManyWithoutMemberInput = {
    create?: XOR<DirectMessageCreateWithoutMemberInput, DirectMessageUncheckedCreateWithoutMemberInput> | DirectMessageCreateWithoutMemberInput[] | DirectMessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutMemberInput | DirectMessageCreateOrConnectWithoutMemberInput[]
    createMany?: DirectMessageCreateManyMemberInputEnvelope
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
  }

  export type ConversationsCreateNestedManyWithoutMemberOneInput = {
    create?: XOR<ConversationsCreateWithoutMemberOneInput, ConversationsUncheckedCreateWithoutMemberOneInput> | ConversationsCreateWithoutMemberOneInput[] | ConversationsUncheckedCreateWithoutMemberOneInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMemberOneInput | ConversationsCreateOrConnectWithoutMemberOneInput[]
    createMany?: ConversationsCreateManyMemberOneInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationsCreateNestedManyWithoutMemberTwoInput = {
    create?: XOR<ConversationsCreateWithoutMemberTwoInput, ConversationsUncheckedCreateWithoutMemberTwoInput> | ConversationsCreateWithoutMemberTwoInput[] | ConversationsUncheckedCreateWithoutMemberTwoInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMemberTwoInput | ConversationsCreateOrConnectWithoutMemberTwoInput[]
    createMany?: ConversationsCreateManyMemberTwoInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput> | MessageCreateWithoutMemberInput[] | MessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMemberInput | MessageCreateOrConnectWithoutMemberInput[]
    createMany?: MessageCreateManyMemberInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type DirectMessageUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<DirectMessageCreateWithoutMemberInput, DirectMessageUncheckedCreateWithoutMemberInput> | DirectMessageCreateWithoutMemberInput[] | DirectMessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutMemberInput | DirectMessageCreateOrConnectWithoutMemberInput[]
    createMany?: DirectMessageCreateManyMemberInputEnvelope
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutMemberOneInput = {
    create?: XOR<ConversationsCreateWithoutMemberOneInput, ConversationsUncheckedCreateWithoutMemberOneInput> | ConversationsCreateWithoutMemberOneInput[] | ConversationsUncheckedCreateWithoutMemberOneInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMemberOneInput | ConversationsCreateOrConnectWithoutMemberOneInput[]
    createMany?: ConversationsCreateManyMemberOneInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type ConversationsUncheckedCreateNestedManyWithoutMemberTwoInput = {
    create?: XOR<ConversationsCreateWithoutMemberTwoInput, ConversationsUncheckedCreateWithoutMemberTwoInput> | ConversationsCreateWithoutMemberTwoInput[] | ConversationsUncheckedCreateWithoutMemberTwoInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMemberTwoInput | ConversationsCreateOrConnectWithoutMemberTwoInput[]
    createMany?: ConversationsCreateManyMemberTwoInputEnvelope
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
  }

  export type EnumMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.MemberRole
  }

  export type ProfileUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProfileCreateWithoutMembersInput, ProfileUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutMembersInput
    upsert?: ProfileUpsertWithoutMembersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutMembersInput, ProfileUpdateWithoutMembersInput>, ProfileUncheckedUpdateWithoutMembersInput>
  }

  export type ServerUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ServerCreateWithoutMembersInput, ServerUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ServerCreateOrConnectWithoutMembersInput
    upsert?: ServerUpsertWithoutMembersInput
    connect?: ServerWhereUniqueInput
    update?: XOR<XOR<ServerUpdateToOneWithWhereWithoutMembersInput, ServerUpdateWithoutMembersInput>, ServerUncheckedUpdateWithoutMembersInput>
  }

  export type MessageUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput> | MessageCreateWithoutMemberInput[] | MessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMemberInput | MessageCreateOrConnectWithoutMemberInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutMemberInput | MessageUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MessageCreateManyMemberInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutMemberInput | MessageUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutMemberInput | MessageUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type DirectMessageUpdateManyWithoutMemberNestedInput = {
    create?: XOR<DirectMessageCreateWithoutMemberInput, DirectMessageUncheckedCreateWithoutMemberInput> | DirectMessageCreateWithoutMemberInput[] | DirectMessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutMemberInput | DirectMessageCreateOrConnectWithoutMemberInput[]
    upsert?: DirectMessageUpsertWithWhereUniqueWithoutMemberInput | DirectMessageUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: DirectMessageCreateManyMemberInputEnvelope
    set?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    disconnect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    delete?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    update?: DirectMessageUpdateWithWhereUniqueWithoutMemberInput | DirectMessageUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: DirectMessageUpdateManyWithWhereWithoutMemberInput | DirectMessageUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
  }

  export type ConversationsUpdateManyWithoutMemberOneNestedInput = {
    create?: XOR<ConversationsCreateWithoutMemberOneInput, ConversationsUncheckedCreateWithoutMemberOneInput> | ConversationsCreateWithoutMemberOneInput[] | ConversationsUncheckedCreateWithoutMemberOneInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMemberOneInput | ConversationsCreateOrConnectWithoutMemberOneInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutMemberOneInput | ConversationsUpsertWithWhereUniqueWithoutMemberOneInput[]
    createMany?: ConversationsCreateManyMemberOneInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutMemberOneInput | ConversationsUpdateWithWhereUniqueWithoutMemberOneInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutMemberOneInput | ConversationsUpdateManyWithWhereWithoutMemberOneInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationsUpdateManyWithoutMemberTwoNestedInput = {
    create?: XOR<ConversationsCreateWithoutMemberTwoInput, ConversationsUncheckedCreateWithoutMemberTwoInput> | ConversationsCreateWithoutMemberTwoInput[] | ConversationsUncheckedCreateWithoutMemberTwoInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMemberTwoInput | ConversationsCreateOrConnectWithoutMemberTwoInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutMemberTwoInput | ConversationsUpsertWithWhereUniqueWithoutMemberTwoInput[]
    createMany?: ConversationsCreateManyMemberTwoInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutMemberTwoInput | ConversationsUpdateWithWhereUniqueWithoutMemberTwoInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutMemberTwoInput | ConversationsUpdateManyWithWhereWithoutMemberTwoInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput> | MessageCreateWithoutMemberInput[] | MessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutMemberInput | MessageCreateOrConnectWithoutMemberInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutMemberInput | MessageUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MessageCreateManyMemberInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutMemberInput | MessageUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutMemberInput | MessageUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type DirectMessageUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<DirectMessageCreateWithoutMemberInput, DirectMessageUncheckedCreateWithoutMemberInput> | DirectMessageCreateWithoutMemberInput[] | DirectMessageUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutMemberInput | DirectMessageCreateOrConnectWithoutMemberInput[]
    upsert?: DirectMessageUpsertWithWhereUniqueWithoutMemberInput | DirectMessageUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: DirectMessageCreateManyMemberInputEnvelope
    set?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    disconnect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    delete?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    update?: DirectMessageUpdateWithWhereUniqueWithoutMemberInput | DirectMessageUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: DirectMessageUpdateManyWithWhereWithoutMemberInput | DirectMessageUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutMemberOneNestedInput = {
    create?: XOR<ConversationsCreateWithoutMemberOneInput, ConversationsUncheckedCreateWithoutMemberOneInput> | ConversationsCreateWithoutMemberOneInput[] | ConversationsUncheckedCreateWithoutMemberOneInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMemberOneInput | ConversationsCreateOrConnectWithoutMemberOneInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutMemberOneInput | ConversationsUpsertWithWhereUniqueWithoutMemberOneInput[]
    createMany?: ConversationsCreateManyMemberOneInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutMemberOneInput | ConversationsUpdateWithWhereUniqueWithoutMemberOneInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutMemberOneInput | ConversationsUpdateManyWithWhereWithoutMemberOneInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ConversationsUncheckedUpdateManyWithoutMemberTwoNestedInput = {
    create?: XOR<ConversationsCreateWithoutMemberTwoInput, ConversationsUncheckedCreateWithoutMemberTwoInput> | ConversationsCreateWithoutMemberTwoInput[] | ConversationsUncheckedCreateWithoutMemberTwoInput[]
    connectOrCreate?: ConversationsCreateOrConnectWithoutMemberTwoInput | ConversationsCreateOrConnectWithoutMemberTwoInput[]
    upsert?: ConversationsUpsertWithWhereUniqueWithoutMemberTwoInput | ConversationsUpsertWithWhereUniqueWithoutMemberTwoInput[]
    createMany?: ConversationsCreateManyMemberTwoInputEnvelope
    set?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    disconnect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    delete?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    connect?: ConversationsWhereUniqueInput | ConversationsWhereUniqueInput[]
    update?: ConversationsUpdateWithWhereUniqueWithoutMemberTwoInput | ConversationsUpdateWithWhereUniqueWithoutMemberTwoInput[]
    updateMany?: ConversationsUpdateManyWithWhereWithoutMemberTwoInput | ConversationsUpdateManyWithWhereWithoutMemberTwoInput[]
    deleteMany?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutChannelsInput = {
    create?: XOR<ProfileCreateWithoutChannelsInput, ProfileUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutChannelsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ServerCreateNestedOneWithoutChannelsInput = {
    create?: XOR<ServerCreateWithoutChannelsInput, ServerUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: ServerCreateOrConnectWithoutChannelsInput
    connect?: ServerWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChannelInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type EnumChannelTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChannelType
  }

  export type ProfileUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<ProfileCreateWithoutChannelsInput, ProfileUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutChannelsInput
    upsert?: ProfileUpsertWithoutChannelsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutChannelsInput, ProfileUpdateWithoutChannelsInput>, ProfileUncheckedUpdateWithoutChannelsInput>
  }

  export type ServerUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<ServerCreateWithoutChannelsInput, ServerUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: ServerCreateOrConnectWithoutChannelsInput
    upsert?: ServerUpsertWithoutChannelsInput
    connect?: ServerWhereUniqueInput
    update?: XOR<XOR<ServerUpdateToOneWithWhereWithoutChannelsInput, ServerUpdateWithoutChannelsInput>, ServerUncheckedUpdateWithoutChannelsInput>
  }

  export type MessageUpdateManyWithoutChannelNestedInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput | MessageUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChannelInput | MessageUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChannelInput | MessageUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput> | MessageCreateWithoutChannelInput[] | MessageUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChannelInput | MessageCreateOrConnectWithoutChannelInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChannelInput | MessageUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: MessageCreateManyChannelInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChannelInput | MessageUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChannelInput | MessageUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutMessagesInput = {
    create?: XOR<MemberCreateWithoutMessagesInput, MemberUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMessagesInput
    connect?: MemberWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChannelCreateWithoutMessagesInput, ChannelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutMessagesInput
    connect?: ChannelWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MemberUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<MemberCreateWithoutMessagesInput, MemberUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMessagesInput
    upsert?: MemberUpsertWithoutMessagesInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMessagesInput, MemberUpdateWithoutMessagesInput>, MemberUncheckedUpdateWithoutMessagesInput>
  }

  export type ChannelUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChannelCreateWithoutMessagesInput, ChannelUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutMessagesInput
    upsert?: ChannelUpsertWithoutMessagesInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutMessagesInput, ChannelUpdateWithoutMessagesInput>, ChannelUncheckedUpdateWithoutMessagesInput>
  }

  export type MemberCreateNestedOneWithoutConversationInitiatedInput = {
    create?: XOR<MemberCreateWithoutConversationInitiatedInput, MemberUncheckedCreateWithoutConversationInitiatedInput>
    connectOrCreate?: MemberCreateOrConnectWithoutConversationInitiatedInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutConversationReceivedInput = {
    create?: XOR<MemberCreateWithoutConversationReceivedInput, MemberUncheckedCreateWithoutConversationReceivedInput>
    connectOrCreate?: MemberCreateOrConnectWithoutConversationReceivedInput
    connect?: MemberWhereUniqueInput
  }

  export type DirectMessageCreateNestedManyWithoutConsversationInput = {
    create?: XOR<DirectMessageCreateWithoutConsversationInput, DirectMessageUncheckedCreateWithoutConsversationInput> | DirectMessageCreateWithoutConsversationInput[] | DirectMessageUncheckedCreateWithoutConsversationInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutConsversationInput | DirectMessageCreateOrConnectWithoutConsversationInput[]
    createMany?: DirectMessageCreateManyConsversationInputEnvelope
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
  }

  export type DirectMessageUncheckedCreateNestedManyWithoutConsversationInput = {
    create?: XOR<DirectMessageCreateWithoutConsversationInput, DirectMessageUncheckedCreateWithoutConsversationInput> | DirectMessageCreateWithoutConsversationInput[] | DirectMessageUncheckedCreateWithoutConsversationInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutConsversationInput | DirectMessageCreateOrConnectWithoutConsversationInput[]
    createMany?: DirectMessageCreateManyConsversationInputEnvelope
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
  }

  export type MemberUpdateOneRequiredWithoutConversationInitiatedNestedInput = {
    create?: XOR<MemberCreateWithoutConversationInitiatedInput, MemberUncheckedCreateWithoutConversationInitiatedInput>
    connectOrCreate?: MemberCreateOrConnectWithoutConversationInitiatedInput
    upsert?: MemberUpsertWithoutConversationInitiatedInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutConversationInitiatedInput, MemberUpdateWithoutConversationInitiatedInput>, MemberUncheckedUpdateWithoutConversationInitiatedInput>
  }

  export type MemberUpdateOneRequiredWithoutConversationReceivedNestedInput = {
    create?: XOR<MemberCreateWithoutConversationReceivedInput, MemberUncheckedCreateWithoutConversationReceivedInput>
    connectOrCreate?: MemberCreateOrConnectWithoutConversationReceivedInput
    upsert?: MemberUpsertWithoutConversationReceivedInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutConversationReceivedInput, MemberUpdateWithoutConversationReceivedInput>, MemberUncheckedUpdateWithoutConversationReceivedInput>
  }

  export type DirectMessageUpdateManyWithoutConsversationNestedInput = {
    create?: XOR<DirectMessageCreateWithoutConsversationInput, DirectMessageUncheckedCreateWithoutConsversationInput> | DirectMessageCreateWithoutConsversationInput[] | DirectMessageUncheckedCreateWithoutConsversationInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutConsversationInput | DirectMessageCreateOrConnectWithoutConsversationInput[]
    upsert?: DirectMessageUpsertWithWhereUniqueWithoutConsversationInput | DirectMessageUpsertWithWhereUniqueWithoutConsversationInput[]
    createMany?: DirectMessageCreateManyConsversationInputEnvelope
    set?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    disconnect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    delete?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    update?: DirectMessageUpdateWithWhereUniqueWithoutConsversationInput | DirectMessageUpdateWithWhereUniqueWithoutConsversationInput[]
    updateMany?: DirectMessageUpdateManyWithWhereWithoutConsversationInput | DirectMessageUpdateManyWithWhereWithoutConsversationInput[]
    deleteMany?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
  }

  export type DirectMessageUncheckedUpdateManyWithoutConsversationNestedInput = {
    create?: XOR<DirectMessageCreateWithoutConsversationInput, DirectMessageUncheckedCreateWithoutConsversationInput> | DirectMessageCreateWithoutConsversationInput[] | DirectMessageUncheckedCreateWithoutConsversationInput[]
    connectOrCreate?: DirectMessageCreateOrConnectWithoutConsversationInput | DirectMessageCreateOrConnectWithoutConsversationInput[]
    upsert?: DirectMessageUpsertWithWhereUniqueWithoutConsversationInput | DirectMessageUpsertWithWhereUniqueWithoutConsversationInput[]
    createMany?: DirectMessageCreateManyConsversationInputEnvelope
    set?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    disconnect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    delete?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    connect?: DirectMessageWhereUniqueInput | DirectMessageWhereUniqueInput[]
    update?: DirectMessageUpdateWithWhereUniqueWithoutConsversationInput | DirectMessageUpdateWithWhereUniqueWithoutConsversationInput[]
    updateMany?: DirectMessageUpdateManyWithWhereWithoutConsversationInput | DirectMessageUpdateManyWithWhereWithoutConsversationInput[]
    deleteMany?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutDirectMessagesInput = {
    create?: XOR<MemberCreateWithoutDirectMessagesInput, MemberUncheckedCreateWithoutDirectMessagesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutDirectMessagesInput
    connect?: MemberWhereUniqueInput
  }

  export type ConversationsCreateNestedOneWithoutDirectMessagesInput = {
    create?: XOR<ConversationsCreateWithoutDirectMessagesInput, ConversationsUncheckedCreateWithoutDirectMessagesInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutDirectMessagesInput
    connect?: ConversationsWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutDirectMessagesNestedInput = {
    create?: XOR<MemberCreateWithoutDirectMessagesInput, MemberUncheckedCreateWithoutDirectMessagesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutDirectMessagesInput
    upsert?: MemberUpsertWithoutDirectMessagesInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutDirectMessagesInput, MemberUpdateWithoutDirectMessagesInput>, MemberUncheckedUpdateWithoutDirectMessagesInput>
  }

  export type ConversationsUpdateOneRequiredWithoutDirectMessagesNestedInput = {
    create?: XOR<ConversationsCreateWithoutDirectMessagesInput, ConversationsUncheckedCreateWithoutDirectMessagesInput>
    connectOrCreate?: ConversationsCreateOrConnectWithoutDirectMessagesInput
    upsert?: ConversationsUpsertWithoutDirectMessagesInput
    connect?: ConversationsWhereUniqueInput
    update?: XOR<XOR<ConversationsUpdateToOneWithWhereWithoutDirectMessagesInput, ConversationsUpdateWithoutDirectMessagesInput>, ConversationsUncheckedUpdateWithoutDirectMessagesInput>
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

  export type NestedEnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type NestedEnumChannelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeFilter<$PrismaModel> | $Enums.ChannelType
  }

  export type NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChannelType | EnumChannelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChannelType[] | ListEnumChannelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChannelTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChannelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChannelTypeFilter<$PrismaModel>
    _max?: NestedEnumChannelTypeFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServerCreateWithoutProfileInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutServerInput
    channels?: ChannelCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutServerInput
    channels?: ChannelUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutProfileInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutProfileInput, ServerUncheckedCreateWithoutProfileInput>
  }

  export type ServerCreateManyProfileInputEnvelope = {
    data: ServerCreateManyProfileInput | ServerCreateManyProfileInput[]
  }

  export type MemberCreateWithoutProfileInput = {
    id?: string
    role?: $Enums.MemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    server: ServerCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberUncheckedCreateWithoutProfileInput = {
    id?: string
    role?: $Enums.MemberRole
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsUncheckedCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsUncheckedCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberCreateOrConnectWithoutProfileInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutProfileInput, MemberUncheckedCreateWithoutProfileInput>
  }

  export type MemberCreateManyProfileInputEnvelope = {
    data: MemberCreateManyProfileInput | MemberCreateManyProfileInput[]
  }

  export type ChannelCreateWithoutProfileInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    createdAt?: Date | string
    updatedAt?: Date | string
    server: ServerCreateNestedOneWithoutChannelsInput
    messages?: MessageCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutProfileInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutProfileInput, ChannelUncheckedCreateWithoutProfileInput>
  }

  export type ChannelCreateManyProfileInputEnvelope = {
    data: ChannelCreateManyProfileInput | ChannelCreateManyProfileInput[]
  }

  export type ServerUpsertWithWhereUniqueWithoutProfileInput = {
    where: ServerWhereUniqueInput
    update: XOR<ServerUpdateWithoutProfileInput, ServerUncheckedUpdateWithoutProfileInput>
    create: XOR<ServerCreateWithoutProfileInput, ServerUncheckedCreateWithoutProfileInput>
  }

  export type ServerUpdateWithWhereUniqueWithoutProfileInput = {
    where: ServerWhereUniqueInput
    data: XOR<ServerUpdateWithoutProfileInput, ServerUncheckedUpdateWithoutProfileInput>
  }

  export type ServerUpdateManyWithWhereWithoutProfileInput = {
    where: ServerScalarWhereInput
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyWithoutProfileInput>
  }

  export type ServerScalarWhereInput = {
    AND?: ServerScalarWhereInput | ServerScalarWhereInput[]
    OR?: ServerScalarWhereInput[]
    NOT?: ServerScalarWhereInput | ServerScalarWhereInput[]
    id?: StringFilter<"Server"> | string
    name?: StringFilter<"Server"> | string
    imageUrl?: StringFilter<"Server"> | string
    inviteCode?: StringFilter<"Server"> | string
    profileId?: StringFilter<"Server"> | string
    createdAt?: DateTimeFilter<"Server"> | Date | string
    updatedAt?: DateTimeFilter<"Server"> | Date | string
  }

  export type MemberUpsertWithWhereUniqueWithoutProfileInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutProfileInput, MemberUncheckedUpdateWithoutProfileInput>
    create: XOR<MemberCreateWithoutProfileInput, MemberUncheckedCreateWithoutProfileInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutProfileInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutProfileInput, MemberUncheckedUpdateWithoutProfileInput>
  }

  export type MemberUpdateManyWithWhereWithoutProfileInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutProfileInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    role?: EnumMemberRoleFilter<"Member"> | $Enums.MemberRole
    profileId?: StringFilter<"Member"> | string
    serverId?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type ChannelUpsertWithWhereUniqueWithoutProfileInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutProfileInput, ChannelUncheckedUpdateWithoutProfileInput>
    create: XOR<ChannelCreateWithoutProfileInput, ChannelUncheckedCreateWithoutProfileInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutProfileInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutProfileInput, ChannelUncheckedUpdateWithoutProfileInput>
  }

  export type ChannelUpdateManyWithWhereWithoutProfileInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutProfileInput>
  }

  export type ChannelScalarWhereInput = {
    AND?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    OR?: ChannelScalarWhereInput[]
    NOT?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    id?: StringFilter<"Channel"> | string
    name?: StringFilter<"Channel"> | string
    type?: EnumChannelTypeFilter<"Channel"> | $Enums.ChannelType
    profileId?: StringFilter<"Channel"> | string
    serverId?: StringFilter<"Channel"> | string
    createdAt?: DateTimeFilter<"Channel"> | Date | string
    updatedAt?: DateTimeFilter<"Channel"> | Date | string
  }

  export type ProfileCreateWithoutServersInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberCreateNestedManyWithoutProfileInput
    channels?: ChannelCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutServersInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutProfileInput
    channels?: ChannelUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutServersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutServersInput, ProfileUncheckedCreateWithoutServersInput>
  }

  export type MemberCreateWithoutServerInput = {
    id?: string
    role?: $Enums.MemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberUncheckedCreateWithoutServerInput = {
    id?: string
    role?: $Enums.MemberRole
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsUncheckedCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsUncheckedCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberCreateOrConnectWithoutServerInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutServerInput, MemberUncheckedCreateWithoutServerInput>
  }

  export type MemberCreateManyServerInputEnvelope = {
    data: MemberCreateManyServerInput | MemberCreateManyServerInput[]
  }

  export type ChannelCreateWithoutServerInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutChannelsInput
    messages?: MessageCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutServerInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutServerInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutServerInput, ChannelUncheckedCreateWithoutServerInput>
  }

  export type ChannelCreateManyServerInputEnvelope = {
    data: ChannelCreateManyServerInput | ChannelCreateManyServerInput[]
  }

  export type ProfileUpsertWithoutServersInput = {
    update: XOR<ProfileUpdateWithoutServersInput, ProfileUncheckedUpdateWithoutServersInput>
    create: XOR<ProfileCreateWithoutServersInput, ProfileUncheckedCreateWithoutServersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutServersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutServersInput, ProfileUncheckedUpdateWithoutServersInput>
  }

  export type ProfileUpdateWithoutServersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutProfileNestedInput
    channels?: ChannelUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutServersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutProfileNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutServerInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutServerInput, MemberUncheckedUpdateWithoutServerInput>
    create: XOR<MemberCreateWithoutServerInput, MemberUncheckedCreateWithoutServerInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutServerInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutServerInput, MemberUncheckedUpdateWithoutServerInput>
  }

  export type MemberUpdateManyWithWhereWithoutServerInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutServerInput>
  }

  export type ChannelUpsertWithWhereUniqueWithoutServerInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutServerInput, ChannelUncheckedUpdateWithoutServerInput>
    create: XOR<ChannelCreateWithoutServerInput, ChannelUncheckedCreateWithoutServerInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutServerInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutServerInput, ChannelUncheckedUpdateWithoutServerInput>
  }

  export type ChannelUpdateManyWithWhereWithoutServerInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutServerInput>
  }

  export type ProfileCreateWithoutMembersInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerCreateNestedManyWithoutProfileInput
    channels?: ChannelCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutMembersInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerUncheckedCreateNestedManyWithoutProfileInput
    channels?: ChannelUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutMembersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutMembersInput, ProfileUncheckedCreateWithoutMembersInput>
  }

  export type ServerCreateWithoutMembersInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutServersInput
    channels?: ChannelCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutMembersInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutMembersInput, ServerUncheckedCreateWithoutMembersInput>
  }

  export type MessageCreateWithoutMemberInput = {
    id?: string
    content: string
    fileUrl?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    channel: ChannelCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutMemberInput = {
    id?: string
    content: string
    fileUrl?: string | null
    channelId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutMemberInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput>
  }

  export type MessageCreateManyMemberInputEnvelope = {
    data: MessageCreateManyMemberInput | MessageCreateManyMemberInput[]
  }

  export type DirectMessageCreateWithoutMemberInput = {
    id?: string
    content: string
    fileUrl?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consversation: ConversationsCreateNestedOneWithoutDirectMessagesInput
  }

  export type DirectMessageUncheckedCreateWithoutMemberInput = {
    id?: string
    content: string
    fileUrl?: string | null
    conversationId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateOrConnectWithoutMemberInput = {
    where: DirectMessageWhereUniqueInput
    create: XOR<DirectMessageCreateWithoutMemberInput, DirectMessageUncheckedCreateWithoutMemberInput>
  }

  export type DirectMessageCreateManyMemberInputEnvelope = {
    data: DirectMessageCreateManyMemberInput | DirectMessageCreateManyMemberInput[]
  }

  export type ConversationsCreateWithoutMemberOneInput = {
    id?: string
    memberTwo: MemberCreateNestedOneWithoutConversationReceivedInput
    directMessages?: DirectMessageCreateNestedManyWithoutConsversationInput
  }

  export type ConversationsUncheckedCreateWithoutMemberOneInput = {
    id?: string
    memberTwoId: string
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutConsversationInput
  }

  export type ConversationsCreateOrConnectWithoutMemberOneInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutMemberOneInput, ConversationsUncheckedCreateWithoutMemberOneInput>
  }

  export type ConversationsCreateManyMemberOneInputEnvelope = {
    data: ConversationsCreateManyMemberOneInput | ConversationsCreateManyMemberOneInput[]
  }

  export type ConversationsCreateWithoutMemberTwoInput = {
    id?: string
    memberOne: MemberCreateNestedOneWithoutConversationInitiatedInput
    directMessages?: DirectMessageCreateNestedManyWithoutConsversationInput
  }

  export type ConversationsUncheckedCreateWithoutMemberTwoInput = {
    id?: string
    memberOneId: string
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutConsversationInput
  }

  export type ConversationsCreateOrConnectWithoutMemberTwoInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutMemberTwoInput, ConversationsUncheckedCreateWithoutMemberTwoInput>
  }

  export type ConversationsCreateManyMemberTwoInputEnvelope = {
    data: ConversationsCreateManyMemberTwoInput | ConversationsCreateManyMemberTwoInput[]
  }

  export type ProfileUpsertWithoutMembersInput = {
    update: XOR<ProfileUpdateWithoutMembersInput, ProfileUncheckedUpdateWithoutMembersInput>
    create: XOR<ProfileCreateWithoutMembersInput, ProfileUncheckedCreateWithoutMembersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutMembersInput, ProfileUncheckedUpdateWithoutMembersInput>
  }

  export type ProfileUpdateWithoutMembersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUpdateManyWithoutProfileNestedInput
    channels?: ChannelUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutMembersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUncheckedUpdateManyWithoutProfileNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ServerUpsertWithoutMembersInput = {
    update: XOR<ServerUpdateWithoutMembersInput, ServerUncheckedUpdateWithoutMembersInput>
    create: XOR<ServerCreateWithoutMembersInput, ServerUncheckedCreateWithoutMembersInput>
    where?: ServerWhereInput
  }

  export type ServerUpdateToOneWithWhereWithoutMembersInput = {
    where?: ServerWhereInput
    data: XOR<ServerUpdateWithoutMembersInput, ServerUncheckedUpdateWithoutMembersInput>
  }

  export type ServerUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutServersNestedInput
    channels?: ChannelUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutServerNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutMemberInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutMemberInput, MessageUncheckedUpdateWithoutMemberInput>
    create: XOR<MessageCreateWithoutMemberInput, MessageUncheckedCreateWithoutMemberInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutMemberInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutMemberInput, MessageUncheckedUpdateWithoutMemberInput>
  }

  export type MessageUpdateManyWithWhereWithoutMemberInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMemberInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    fileUrl?: StringNullableFilter<"Message"> | string | null
    memberId?: StringFilter<"Message"> | string
    channelId?: StringFilter<"Message"> | string
    deleted?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type DirectMessageUpsertWithWhereUniqueWithoutMemberInput = {
    where: DirectMessageWhereUniqueInput
    update: XOR<DirectMessageUpdateWithoutMemberInput, DirectMessageUncheckedUpdateWithoutMemberInput>
    create: XOR<DirectMessageCreateWithoutMemberInput, DirectMessageUncheckedCreateWithoutMemberInput>
  }

  export type DirectMessageUpdateWithWhereUniqueWithoutMemberInput = {
    where: DirectMessageWhereUniqueInput
    data: XOR<DirectMessageUpdateWithoutMemberInput, DirectMessageUncheckedUpdateWithoutMemberInput>
  }

  export type DirectMessageUpdateManyWithWhereWithoutMemberInput = {
    where: DirectMessageScalarWhereInput
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyWithoutMemberInput>
  }

  export type DirectMessageScalarWhereInput = {
    AND?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
    OR?: DirectMessageScalarWhereInput[]
    NOT?: DirectMessageScalarWhereInput | DirectMessageScalarWhereInput[]
    id?: StringFilter<"DirectMessage"> | string
    content?: StringFilter<"DirectMessage"> | string
    fileUrl?: StringNullableFilter<"DirectMessage"> | string | null
    memberId?: StringFilter<"DirectMessage"> | string
    conversationId?: StringFilter<"DirectMessage"> | string
    deleted?: BoolFilter<"DirectMessage"> | boolean
    createdAt?: DateTimeFilter<"DirectMessage"> | Date | string
    updatedAt?: DateTimeFilter<"DirectMessage"> | Date | string
  }

  export type ConversationsUpsertWithWhereUniqueWithoutMemberOneInput = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutMemberOneInput, ConversationsUncheckedUpdateWithoutMemberOneInput>
    create: XOR<ConversationsCreateWithoutMemberOneInput, ConversationsUncheckedCreateWithoutMemberOneInput>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutMemberOneInput = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutMemberOneInput, ConversationsUncheckedUpdateWithoutMemberOneInput>
  }

  export type ConversationsUpdateManyWithWhereWithoutMemberOneInput = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutMemberOneInput>
  }

  export type ConversationsScalarWhereInput = {
    AND?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
    OR?: ConversationsScalarWhereInput[]
    NOT?: ConversationsScalarWhereInput | ConversationsScalarWhereInput[]
    id?: StringFilter<"Conversations"> | string
    memberOneId?: StringFilter<"Conversations"> | string
    memberTwoId?: StringFilter<"Conversations"> | string
  }

  export type ConversationsUpsertWithWhereUniqueWithoutMemberTwoInput = {
    where: ConversationsWhereUniqueInput
    update: XOR<ConversationsUpdateWithoutMemberTwoInput, ConversationsUncheckedUpdateWithoutMemberTwoInput>
    create: XOR<ConversationsCreateWithoutMemberTwoInput, ConversationsUncheckedCreateWithoutMemberTwoInput>
  }

  export type ConversationsUpdateWithWhereUniqueWithoutMemberTwoInput = {
    where: ConversationsWhereUniqueInput
    data: XOR<ConversationsUpdateWithoutMemberTwoInput, ConversationsUncheckedUpdateWithoutMemberTwoInput>
  }

  export type ConversationsUpdateManyWithWhereWithoutMemberTwoInput = {
    where: ConversationsScalarWhereInput
    data: XOR<ConversationsUpdateManyMutationInput, ConversationsUncheckedUpdateManyWithoutMemberTwoInput>
  }

  export type ProfileCreateWithoutChannelsInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerCreateNestedManyWithoutProfileInput
    members?: MemberCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutChannelsInput = {
    id?: string
    userId: string
    name: string
    imageUrl: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    servers?: ServerUncheckedCreateNestedManyWithoutProfileInput
    members?: MemberUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutChannelsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutChannelsInput, ProfileUncheckedCreateWithoutChannelsInput>
  }

  export type ServerCreateWithoutChannelsInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutServersInput
    members?: MemberCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutChannelsInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MemberUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutChannelsInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutChannelsInput, ServerUncheckedCreateWithoutChannelsInput>
  }

  export type MessageCreateWithoutChannelInput = {
    id?: string
    content: string
    fileUrl?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChannelInput = {
    id?: string
    content: string
    fileUrl?: string | null
    memberId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChannelInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput>
  }

  export type MessageCreateManyChannelInputEnvelope = {
    data: MessageCreateManyChannelInput | MessageCreateManyChannelInput[]
  }

  export type ProfileUpsertWithoutChannelsInput = {
    update: XOR<ProfileUpdateWithoutChannelsInput, ProfileUncheckedUpdateWithoutChannelsInput>
    create: XOR<ProfileCreateWithoutChannelsInput, ProfileUncheckedCreateWithoutChannelsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutChannelsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutChannelsInput, ProfileUncheckedUpdateWithoutChannelsInput>
  }

  export type ProfileUpdateWithoutChannelsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUpdateManyWithoutProfileNestedInput
    members?: MemberUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutChannelsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servers?: ServerUncheckedUpdateManyWithoutProfileNestedInput
    members?: MemberUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ServerUpsertWithoutChannelsInput = {
    update: XOR<ServerUpdateWithoutChannelsInput, ServerUncheckedUpdateWithoutChannelsInput>
    create: XOR<ServerCreateWithoutChannelsInput, ServerUncheckedCreateWithoutChannelsInput>
    where?: ServerWhereInput
  }

  export type ServerUpdateToOneWithWhereWithoutChannelsInput = {
    where?: ServerWhereInput
    data: XOR<ServerUpdateWithoutChannelsInput, ServerUncheckedUpdateWithoutChannelsInput>
  }

  export type ServerUpdateWithoutChannelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutServersNestedInput
    members?: MemberUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutChannelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutServerNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChannelInput, MessageUncheckedUpdateWithoutChannelInput>
    create: XOR<MessageCreateWithoutChannelInput, MessageUncheckedCreateWithoutChannelInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChannelInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChannelInput, MessageUncheckedUpdateWithoutChannelInput>
  }

  export type MessageUpdateManyWithWhereWithoutChannelInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChannelInput>
  }

  export type MemberCreateWithoutMessagesInput = {
    id?: string
    role?: $Enums.MemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMembersInput
    server: ServerCreateNestedOneWithoutMembersInput
    directMessages?: DirectMessageCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberUncheckedCreateWithoutMessagesInput = {
    id?: string
    role?: $Enums.MemberRole
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsUncheckedCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsUncheckedCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberCreateOrConnectWithoutMessagesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMessagesInput, MemberUncheckedCreateWithoutMessagesInput>
  }

  export type ChannelCreateWithoutMessagesInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutChannelsInput
    server: ServerCreateNestedOneWithoutChannelsInput
  }

  export type ChannelUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelCreateOrConnectWithoutMessagesInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutMessagesInput, ChannelUncheckedCreateWithoutMessagesInput>
  }

  export type MemberUpsertWithoutMessagesInput = {
    update: XOR<MemberUpdateWithoutMessagesInput, MemberUncheckedUpdateWithoutMessagesInput>
    create: XOR<MemberCreateWithoutMessagesInput, MemberUncheckedCreateWithoutMessagesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMessagesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMessagesInput, MemberUncheckedUpdateWithoutMessagesInput>
  }

  export type MemberUpdateWithoutMessagesInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMembersNestedInput
    server?: ServerUpdateOneRequiredWithoutMembersNestedInput
    directMessages?: DirectMessageUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUncheckedUpdateWithoutMessagesInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    directMessages?: DirectMessageUncheckedUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUncheckedUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUncheckedUpdateManyWithoutMemberTwoNestedInput
  }

  export type ChannelUpsertWithoutMessagesInput = {
    update: XOR<ChannelUpdateWithoutMessagesInput, ChannelUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChannelCreateWithoutMessagesInput, ChannelUncheckedCreateWithoutMessagesInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutMessagesInput, ChannelUncheckedUpdateWithoutMessagesInput>
  }

  export type ChannelUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutChannelsNestedInput
    server?: ServerUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type ChannelUncheckedUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateWithoutConversationInitiatedInput = {
    id?: string
    role?: $Enums.MemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMembersInput
    server: ServerCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageCreateNestedManyWithoutMemberInput
    conversationReceived?: ConversationsCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberUncheckedCreateWithoutConversationInitiatedInput = {
    id?: string
    role?: $Enums.MemberRole
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutMemberInput
    conversationReceived?: ConversationsUncheckedCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberCreateOrConnectWithoutConversationInitiatedInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutConversationInitiatedInput, MemberUncheckedCreateWithoutConversationInitiatedInput>
  }

  export type MemberCreateWithoutConversationReceivedInput = {
    id?: string
    role?: $Enums.MemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMembersInput
    server: ServerCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsCreateNestedManyWithoutMemberOneInput
  }

  export type MemberUncheckedCreateWithoutConversationReceivedInput = {
    id?: string
    role?: $Enums.MemberRole
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
    directMessages?: DirectMessageUncheckedCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsUncheckedCreateNestedManyWithoutMemberOneInput
  }

  export type MemberCreateOrConnectWithoutConversationReceivedInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutConversationReceivedInput, MemberUncheckedCreateWithoutConversationReceivedInput>
  }

  export type DirectMessageCreateWithoutConsversationInput = {
    id?: string
    content: string
    fileUrl?: string | null
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    member: MemberCreateNestedOneWithoutDirectMessagesInput
  }

  export type DirectMessageUncheckedCreateWithoutConsversationInput = {
    id?: string
    content: string
    fileUrl?: string | null
    memberId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateOrConnectWithoutConsversationInput = {
    where: DirectMessageWhereUniqueInput
    create: XOR<DirectMessageCreateWithoutConsversationInput, DirectMessageUncheckedCreateWithoutConsversationInput>
  }

  export type DirectMessageCreateManyConsversationInputEnvelope = {
    data: DirectMessageCreateManyConsversationInput | DirectMessageCreateManyConsversationInput[]
  }

  export type MemberUpsertWithoutConversationInitiatedInput = {
    update: XOR<MemberUpdateWithoutConversationInitiatedInput, MemberUncheckedUpdateWithoutConversationInitiatedInput>
    create: XOR<MemberCreateWithoutConversationInitiatedInput, MemberUncheckedCreateWithoutConversationInitiatedInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutConversationInitiatedInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutConversationInitiatedInput, MemberUncheckedUpdateWithoutConversationInitiatedInput>
  }

  export type MemberUpdateWithoutConversationInitiatedInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMembersNestedInput
    server?: ServerUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUpdateManyWithoutMemberNestedInput
    conversationReceived?: ConversationsUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUncheckedUpdateWithoutConversationInitiatedInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUncheckedUpdateManyWithoutMemberNestedInput
    conversationReceived?: ConversationsUncheckedUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUpsertWithoutConversationReceivedInput = {
    update: XOR<MemberUpdateWithoutConversationReceivedInput, MemberUncheckedUpdateWithoutConversationReceivedInput>
    create: XOR<MemberCreateWithoutConversationReceivedInput, MemberUncheckedCreateWithoutConversationReceivedInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutConversationReceivedInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutConversationReceivedInput, MemberUncheckedUpdateWithoutConversationReceivedInput>
  }

  export type MemberUpdateWithoutConversationReceivedInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMembersNestedInput
    server?: ServerUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUpdateManyWithoutMemberOneNestedInput
  }

  export type MemberUncheckedUpdateWithoutConversationReceivedInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUncheckedUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUncheckedUpdateManyWithoutMemberOneNestedInput
  }

  export type DirectMessageUpsertWithWhereUniqueWithoutConsversationInput = {
    where: DirectMessageWhereUniqueInput
    update: XOR<DirectMessageUpdateWithoutConsversationInput, DirectMessageUncheckedUpdateWithoutConsversationInput>
    create: XOR<DirectMessageCreateWithoutConsversationInput, DirectMessageUncheckedCreateWithoutConsversationInput>
  }

  export type DirectMessageUpdateWithWhereUniqueWithoutConsversationInput = {
    where: DirectMessageWhereUniqueInput
    data: XOR<DirectMessageUpdateWithoutConsversationInput, DirectMessageUncheckedUpdateWithoutConsversationInput>
  }

  export type DirectMessageUpdateManyWithWhereWithoutConsversationInput = {
    where: DirectMessageScalarWhereInput
    data: XOR<DirectMessageUpdateManyMutationInput, DirectMessageUncheckedUpdateManyWithoutConsversationInput>
  }

  export type MemberCreateWithoutDirectMessagesInput = {
    id?: string
    role?: $Enums.MemberRole
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutMembersInput
    server: ServerCreateNestedOneWithoutMembersInput
    messages?: MessageCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberUncheckedCreateWithoutDirectMessagesInput = {
    id?: string
    role?: $Enums.MemberRole
    profileId: string
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutMemberInput
    conversationInitiated?: ConversationsUncheckedCreateNestedManyWithoutMemberOneInput
    conversationReceived?: ConversationsUncheckedCreateNestedManyWithoutMemberTwoInput
  }

  export type MemberCreateOrConnectWithoutDirectMessagesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutDirectMessagesInput, MemberUncheckedCreateWithoutDirectMessagesInput>
  }

  export type ConversationsCreateWithoutDirectMessagesInput = {
    id?: string
    memberOne: MemberCreateNestedOneWithoutConversationInitiatedInput
    memberTwo: MemberCreateNestedOneWithoutConversationReceivedInput
  }

  export type ConversationsUncheckedCreateWithoutDirectMessagesInput = {
    id?: string
    memberOneId: string
    memberTwoId: string
  }

  export type ConversationsCreateOrConnectWithoutDirectMessagesInput = {
    where: ConversationsWhereUniqueInput
    create: XOR<ConversationsCreateWithoutDirectMessagesInput, ConversationsUncheckedCreateWithoutDirectMessagesInput>
  }

  export type MemberUpsertWithoutDirectMessagesInput = {
    update: XOR<MemberUpdateWithoutDirectMessagesInput, MemberUncheckedUpdateWithoutDirectMessagesInput>
    create: XOR<MemberCreateWithoutDirectMessagesInput, MemberUncheckedCreateWithoutDirectMessagesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutDirectMessagesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutDirectMessagesInput, MemberUncheckedUpdateWithoutDirectMessagesInput>
  }

  export type MemberUpdateWithoutDirectMessagesInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMembersNestedInput
    server?: ServerUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUncheckedUpdateWithoutDirectMessagesInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    profileId?: StringFieldUpdateOperationsInput | string
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUncheckedUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUncheckedUpdateManyWithoutMemberTwoNestedInput
  }

  export type ConversationsUpsertWithoutDirectMessagesInput = {
    update: XOR<ConversationsUpdateWithoutDirectMessagesInput, ConversationsUncheckedUpdateWithoutDirectMessagesInput>
    create: XOR<ConversationsCreateWithoutDirectMessagesInput, ConversationsUncheckedCreateWithoutDirectMessagesInput>
    where?: ConversationsWhereInput
  }

  export type ConversationsUpdateToOneWithWhereWithoutDirectMessagesInput = {
    where?: ConversationsWhereInput
    data: XOR<ConversationsUpdateWithoutDirectMessagesInput, ConversationsUncheckedUpdateWithoutDirectMessagesInput>
  }

  export type ConversationsUpdateWithoutDirectMessagesInput = {
    memberOne?: MemberUpdateOneRequiredWithoutConversationInitiatedNestedInput
    memberTwo?: MemberUpdateOneRequiredWithoutConversationReceivedNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutDirectMessagesInput = {
    memberOneId?: StringFieldUpdateOperationsInput | string
    memberTwoId?: StringFieldUpdateOperationsInput | string
  }

  export type ServerCreateManyProfileInput = {
    id?: string
    name: string
    imageUrl: string
    inviteCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberCreateManyProfileInput = {
    id?: string
    role?: $Enums.MemberRole
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelCreateManyProfileInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    serverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUpdateManyWithoutServerNestedInput
    channels?: ChannelUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MemberUncheckedUpdateManyWithoutServerNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateManyWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUpdateWithoutProfileInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServerUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUncheckedUpdateWithoutProfileInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUncheckedUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUncheckedUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUncheckedUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutProfileInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: ServerUpdateOneRequiredWithoutChannelsNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    serverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyServerInput = {
    id?: string
    role?: $Enums.MemberRole
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChannelCreateManyServerInput = {
    id?: string
    name: string
    type?: $Enums.ChannelType
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutServerInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutMembersNestedInput
    messages?: MessageUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUncheckedUpdateWithoutServerInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutMemberNestedInput
    directMessages?: DirectMessageUncheckedUpdateManyWithoutMemberNestedInput
    conversationInitiated?: ConversationsUncheckedUpdateManyWithoutMemberOneNestedInput
    conversationReceived?: ConversationsUncheckedUpdateManyWithoutMemberTwoNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutServerInput = {
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUpdateWithoutServerInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutChannelsNestedInput
    messages?: MessageUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutServerInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutServerInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChannelTypeFieldUpdateOperationsInput | $Enums.ChannelType
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyMemberInput = {
    id?: string
    content: string
    fileUrl?: string | null
    channelId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageCreateManyMemberInput = {
    id?: string
    content: string
    fileUrl?: string | null
    conversationId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationsCreateManyMemberOneInput = {
    id?: string
    memberTwoId: string
  }

  export type ConversationsCreateManyMemberTwoInput = {
    id?: string
    memberOneId: string
  }

  export type MessageUpdateWithoutMemberInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutMemberInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutMemberInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    channelId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUpdateWithoutMemberInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consversation?: ConversationsUpdateOneRequiredWithoutDirectMessagesNestedInput
  }

  export type DirectMessageUncheckedUpdateWithoutMemberInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyWithoutMemberInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationsUpdateWithoutMemberOneInput = {
    memberTwo?: MemberUpdateOneRequiredWithoutConversationReceivedNestedInput
    directMessages?: DirectMessageUpdateManyWithoutConsversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutMemberOneInput = {
    memberTwoId?: StringFieldUpdateOperationsInput | string
    directMessages?: DirectMessageUncheckedUpdateManyWithoutConsversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutMemberOneInput = {
    memberTwoId?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationsUpdateWithoutMemberTwoInput = {
    memberOne?: MemberUpdateOneRequiredWithoutConversationInitiatedNestedInput
    directMessages?: DirectMessageUpdateManyWithoutConsversationNestedInput
  }

  export type ConversationsUncheckedUpdateWithoutMemberTwoInput = {
    memberOneId?: StringFieldUpdateOperationsInput | string
    directMessages?: DirectMessageUncheckedUpdateManyWithoutConsversationNestedInput
  }

  export type ConversationsUncheckedUpdateManyWithoutMemberTwoInput = {
    memberOneId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyChannelInput = {
    id?: string
    content: string
    fileUrl?: string | null
    memberId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutChannelInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChannelInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChannelInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageCreateManyConsversationInput = {
    id?: string
    content: string
    fileUrl?: string | null
    memberId: string
    deleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectMessageUpdateWithoutConsversationInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutDirectMessagesNestedInput
  }

  export type DirectMessageUncheckedUpdateWithoutConsversationInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectMessageUncheckedUpdateManyWithoutConsversationInput = {
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    memberId?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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