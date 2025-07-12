import * as a from "node:assert";
import * as t from "node:test";

import { protoSafeParse } from "@blaahaj/json";

void t.suite("protoSafeParse", () => {
  const withProto = '{ "foo": ["bar"], "__proto__": "XXX" }';
  const withoutProto = '{ "foo": ["bar"] }';
  const data = { foo: ["bar"] };

  const reviver = (_key: string, value: unknown) =>
    value === "bar" ? "BAR" : value;
  const dataWithReviver = { foo: ["BAR"] };

  void t.it("can parse JSON", () =>
    a.deepStrictEqual(protoSafeParse(withoutProto), data),
  );

  void t.it("throws if a __proto__ name is seen", () =>
    a.throws(() => protoSafeParse(withProto)),
  );

  void t.it("supports a reviver argument", () =>
    a.deepStrictEqual(protoSafeParse(withoutProto, reviver), dataWithReviver),
  );

  void t.it("still rejects __proto__, with a reviver argument", () =>
    a.throws(() => protoSafeParse(withProto, reviver)),
  );
});
