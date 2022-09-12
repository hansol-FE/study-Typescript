{
  /**
   * JavaScript
   * Primitive(원시타입): number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined: 값이 있는지 없는지 아무것도 결정되지 않을 상태 
  let name: undefined; // 💩 단독으로 타입지정할때 쓰이지는 않음
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null: 좀 더 명확하게 비어있음을 나타냄.
  let person: null; // 💩 단독으로 타입지정할때 쓰이지는 않음
  let person2: string | null;

  // unknown 💩 어떤 종류의 데이터가 담길지 알 수 없을 때. 어떤 데이터도 담을 수 있음. 가능한 쓰지 않길..
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩, 어떤것이든 담을 수 있는 타입. 가능한 쓰지 않길..
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never, 절대 다른것을 return하지 않는 경우에 쓰임
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // 💩

  // objet, 광범위하게 모든 object 타입을 다 받을 수 있음. 가능한 쓰지 않길..
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
