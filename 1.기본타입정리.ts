/*  
  타입스크립트)
  변수에 타입 지정 가능

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

let name1 :string = 'kim';
let age :number = 50;
let members :string[] = ['kim','park'];
let member :{ name : string} = {name : 'kim'}

let name2 = 'park'; // 자동으로 타입 지정됨