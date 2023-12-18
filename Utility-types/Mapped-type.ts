{
  /**
   * 시나리오 1.
   * title과 author가 있어도 되지만 없어도 될 때를 대비해 Optional한 타입도 만들어 두었다.
   * 동시에  Video 타입을 readonly로도 만들어두었다.
   */
  type Video = {
    title: string;
    author: string;
  };

  type VideoOptional = {
    title?: string;
    author?: string;
  };
  type VideoOptionalReadOnly = {
    readonly title?: string;
    readonly author?: string;
  };

  /**
   * 시나리오1 문제점.
   * 그러나 추후 Video에 새로운 타입이 추가될 경우,
   * Optional도 새로 추가해주어야함.
   * ReadOnly도 새로 추가해주어야함.
   */
  type Video2 = {
    title: string;
    author: string;
    description: string;
  };
  type VideoOptional2 = {
    title?: string;
    author?: string;
    description?: string;
  };
  type VideoOptionalReadOnly2 = {
    readonly title?: string;
    readonly author?: string;
    readonly description?: string;
  };

  /** 시나리오1의 문제점을 해결하기 위해 map type을 사용할 수 있음
   *  js의 map()함수처럼, 배열을 돌면서 새로운 형태의 배열을 반환하듯이
   *  기존의 타입을 새로운 타입으로 만들어서 반환할 수 있음.
   *
   * 이때 인덱스 type을 활용함.
   * 타입 object 안에서 []기호는 for in을 썼을때와 비슷함.
   * (for in은 object의 key를 순회하는 반복문)
   */

  /**
   * 시나리오 2.
   * 어떠한 타입도 받을 수 있는 Optional, ReadOnly 타입을 생성함.
   * T라는 타입의 모든 키들을 순회하면서 해당 키에 해당하는 value를 P의 타입으로 부여하겠다.
   */
  type Optional<T> = {
    [P in keyof T]?: T[P]; //T 타입이 가지고 있는 key들 중의 하나인 P라는 key 값의 타입은, T의 인덱스타입을 이용해서 정의하겠다.
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  /**
   * 시나리오 2의 재활용성
   */
  type VideoOptional3 = Optional<Video>;
  type VideoOptionalReadOnly3 = ReadOnly<Video>;

  /**
   * map type의 여러가지 활용 예시
   */
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
