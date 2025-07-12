const PROTO = "__proto__";

export class JSONProtoParsingError extends SyntaxError {
  constructor() {
    super(`Found a ${PROTO} name while parsing JSON`);
  }
}

type JSONReviver = NonNullable<Parameters<typeof JSON.parse>[1]>;

export function protoSafeParse(input: string, reviver?: JSONReviver) {
  return JSON.parse(input, function (key, value) {
    if (key === PROTO) throw new JSONProtoParsingError();

    return reviver ? reviver.call(this, key, value) : value;
  });
}
