/*
  type alias = type 변수)
  타입이 너무 길고 복잡하면 변수에 담아서 쓸 수 있음
  대문자로 시작해서 차별화 하는게 관습.

  주의)
  재정의 불가

*/
var animal = '코끼리';
var people = { name: 'kim', age: 20 };
/*

  readonly)
  const는 재할당 불가지만 ,내부 object 수정은 가능하다.
  타입 alias 안에 readonly 키워드를 붙이면 수정불가


*/
var area = { region: 'seoul' };
area.region = 'busan'; // 수정가능
var area2 = { region: 'seoul' };
var position = { x: 10, y: 20 };
