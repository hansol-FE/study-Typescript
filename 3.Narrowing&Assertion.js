/*
  애매한 타입 확정하기 Narrowing & Assertion

  Narrowing)
  type이 아직 하나로 확정되지 않았을 경우 if문 등으로 Narrowing해줘야함.
  대표적인 Narrowing 방법은
  1. typeof 변수
  2. 속성명 in 오브젝트
  3. 인스턴스 instanceof 부모

  Assertion)
  as 를 붙여서 타입을 잠깐 덮어씌움
  1.Narrowing 할때 쓴다.
  -타입을 a에서 b로 변경하는 문법이 아니다. 타입이 여러개일때 선택해주는 문법.
  3.무슨타입이 들어올지 100%알때 써야한다
  -as를 붙이면 잘못된 타입 값이 들어와도 에러 안잡아줌
  3. 비상용으로 디버깅 빨리 하고 싶을때 사용하길..

*/
function narrowing(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
narrowing(2);
function assertion(x) {
    var array = [];
    array[0] = x;
}
assertion(2);
