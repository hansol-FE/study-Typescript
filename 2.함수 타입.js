/*
  함수에 타입 지정하는 방법)
  1. 파라미터 타입지정 가능
  2. return값 타입지정 가능

  void 타입)
  함수에서 return 하고 싶지 않을때 쓰임
  실수로 뭔가를 return 했을때 오류로 잡아줌.

  물음표 특징)
  타입지정된 파라미터는 필수 입력값이다.
  => 필수 해제하고 싶으면 파라미터에 물음표를 붙인다.

  변수?:number 은 변수:number|undefined 와 같은 표현이다.

*/
function Fnc1(a) {
    return a * 2;
}
Fnc1(5);
function Fnc2(a) {
    a * 2;
}
Fnc2(5);
