/* 
  type alias = type 변수)
  타입이 너무 길고 복잡하면 변수에 담아서 쓸 수 있음
  대문자로 시작해서 차별화 하는게 관습.

  주의)
  재정의 불가

*/

type Animal = string | number | undefined;
let animal :Animal = '코끼리';

type People = {name : string , age : number};
let people :People = {name : 'kim' , age : 20};




/* 

  readonly)
  const는 재할당 불가지만 ,내부 object 수정은 가능하다.
  타입 alias 안에 readonly 키워드를 붙이면 수정불가


*/
const area = {region : 'seoul'};
area.region = 'busan'; // 수정가능

type Region = {readonly region : string};
const area2 :Region = {region : 'seoul'};
//area2.region = 'busan'; // 수정불가


/*  
  type변수는 union type으로 합치기 가능
*/

type Name = string;
type Age = number;

type Person = Name | Age;


/*  
  object타입 extend)
  & 연산자로 object type변수 합치기 
*/
type PositionX = { x : number};
type PositionY = { y : number};

type NewType = PositionX & PositionY; // {x:number,y:number}

let position :NewType = {x :10 ,y : 20};

