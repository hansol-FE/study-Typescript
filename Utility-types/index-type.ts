/**
 * 인덱스 타입
 * - 인덱스를 이용하여 다른 타입의 'key의 타입'을 재활용 할 수 있다.
 */

{
  /**
   * obj를 출력하는 두가지 방법
   */
  const obj = {
    name: "Kim",
  };

  obj.name;
  obj["name"]; // 인덱스를 기반으로 출력할 수 있다.

  /**
   * 타입도 인덱스로 꺼낼 수 있다.
   */
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // Name의 타입은 string이 된다.
  const name: Name = "Lee";

  type Gender = Animal["gender"]; // "male" 또는 "female"만 값을 할당할 수 있다.
  const gender: Gender = "female";

  type Keys = keyof Animal; // Animal의 모든 key를 유니언 타입으로 할당받는다. "name" | "age" | "gender"
  const key: Keys = "age";

  type Person = {
    name: string;
    gender: Animal["gender"]; //"male" 또는 "female"만 값을 할당할 수 있다.
  };
  const person: Person = {
    name: "Park",
    gender: "male",
  };
}
