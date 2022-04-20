/*
  타입스크립트)
  변수에 타입 지정 가능
  타입에 대해 엄격함 => 간단한 수학연산도 타입이 맞아야함.
  string타입 + 1 (허용)
  number타입 + 1 (허용)
  string | number + 1 (불가)


  :string
  :number
  :boolean
  :null
  :undefined
  :[]  , array에 타입 지정
  :{}  , object에 타입 지정

  특징)
  1.타입지정 문법 생략가능 =>타입지정을 안해도 자동으로 된다

*/
var name1 = 'kim';
var age = 50;
var members = ['kim', 'park'];
var member = { name: 'kim' };
var name2 = 'park'; // 자동으로 타입 지정됨
/*
  타입을 미리 정하기 애매할때(union type, any, unknowm)

  union type)
  타입 2개 이상 합친 새로운 타입을 만들기

  any)
  모든 자료형 허용해줌.
  가변적인 변수에 사용하면 좋지만 타입스크립트와 관련이 없어짐.
  타입스크립트 기능이 필요없을때 사용.
  오류 안잡음.

  unknowm)
  any랑 비슷. 모든 자료형 허용해줌.
  any보다 안전함 => 오류 잡아줌

*/
//union type
var members2 = 123;
var arr = [1, 2, 3, '문자'];
var obj = { a: 123 };
//any
var name3;
name3 = 123;
name3 = true;
//unknowm
var name4;
