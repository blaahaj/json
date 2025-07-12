export type JSONValue = JSONScalar | JSONArray | JSONObject | null;
export type JSONScalar = string | number | boolean;
export type JSONArray = JSONValue[];
export type JSONObject = { [name: string]: JSONValue };
