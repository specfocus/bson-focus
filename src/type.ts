import { BSONType } from 'mongodb';

export const BSON_NUMBER = "number";
export const BSON_DOUBLE = "double";
export const BSON_STRING = "string";
export const BSON_OBJECT = "object";
export const BSON_ARRAY = "array";
export const BSON_BIN_DATA = "binData";
export const BSON_OBJECT_ID = "objectId";
export const BSON_BOOL = "bool";
export const BSON_DATE = "date";
export const BSON_NULL = "null";
export const BSON_REGEX = "regex";
export const BSON_JAVA_SCRIPT = "javascript";
export const BSON_JAVA_SCRIPT_WITH_SCOPE = "javascriptWithScope";
export const BSON_INT = "int";
export const BSON_TIMESTAMP = "timestamp";
export const BSON_LONG = "long";
export const BSON_DECIMAL = "decimal";
export const BSON_MIN_KEY = "minKey";
export const BSON_MAX_KEY = "maxKey";

const BSON_TYPES = [
  BSON_NUMBER,
  BSON_DOUBLE,
  BSON_STRING,
  BSON_OBJECT,
  BSON_ARRAY,
  BSON_BIN_DATA,
  BSON_OBJECT_ID,
  BSON_BOOL,
  BSON_DATE,
  BSON_NULL,
  BSON_REGEX,
  BSON_JAVA_SCRIPT,
  BSON_JAVA_SCRIPT_WITH_SCOPE,
  BSON_INT,
  BSON_TIMESTAMP,
  BSON_LONG,
  BSON_DECIMAL,
  BSON_MIN_KEY,
  BSON_MAX_KEY
] as const;

export type BsonType = typeof BSON_TYPES[number];

const BSON_TYPE_MAP = {
  [BSON_NUMBER]: BSONType.Double,
  [BSON_DOUBLE]: BSONType.Double,
  [BSON_STRING]: BSONType.String,
  [BSON_OBJECT]: BSONType.Object,
  [BSON_ARRAY]: BSONType.Array,
  [BSON_BIN_DATA]: BSONType.BinData,
  [BSON_OBJECT_ID]: BSONType.ObjectId,
  [BSON_BOOL]: BSONType.Boolean,
  [BSON_DATE]: BSONType.Date,
  [BSON_NULL]: BSONType.Null,
  [BSON_REGEX]: BSONType.Regex,
  [BSON_JAVA_SCRIPT]: BSONType.JavaScript,
  [BSON_JAVA_SCRIPT_WITH_SCOPE]: BSONType.JavaScriptWithScope,
  [BSON_INT]: BSONType.Int,
  [BSON_TIMESTAMP]: BSONType.Timestamp,
  [BSON_LONG]: BSONType.Long,
  [BSON_DECIMAL]: BSONType.Decimal,
  [BSON_MIN_KEY]: BSONType.MinKey,
  [BSON_MAX_KEY]: BSONType.MinKey
};