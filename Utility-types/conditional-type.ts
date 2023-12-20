{
  /**
   * 타입에도 컨디션을 줄 수 있다.
   * 조건에 따라 타입 분기처리 가능
   */
  type Check<T> = T extends string ? boolean : number; // 조건이 맞으면 어떤 타입을 선택하게된다.
  type Type = Check<string>; // Type은 boolean타입을 갖게된다.

  /**
   * TypeName에 전달된 타입이 string을 상속한다면 문자열 'string'을 쓰고 ...
   */
  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "Object";

  type Type1 = TypeName<string>;
  const type1: Type1 = "string";

  type Type2 = TypeName<"text">;
  const type2: Type2 = "string";

  type Type3 = TypeName<() => void>;
  const type3: Type3 = "function";
}
