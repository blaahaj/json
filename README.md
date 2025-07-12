# @blaahaj/json

Types and proto-safe parsing for JSON.

## Types

Type `JSONValue` represents all values which can be mapped to/from JSON.

Type `JSONScalar` represents the scalar types in JSON: string, number, boolean.

Types `JSONObject` and `JSONArray` represent the aggregate types in JSON.

## Proto-safe parsing

Function `protoSafeParse` behaves exactly like `JSON.parse`, except that if it
ever sees the name (i.e. object key) `"__proto__"`, then it will throw
a `JSONProtoParsingError`.
