/* 터미널에 tsc -w 켜놓으면 js파일로 자동 컴파일 된다. */

let 문자열 :string = ' kim';
let 어레이 :string[] = ['kim', 'park'];
let 오브젝트 :{name? : string}= {name : 'kim'}

let 문자숫자 :string | number= '김';

type Name_type = string | number;//타입 알리아스는 대문자로 시작

function 함수(a :number) :number{
  return a * 2
}

type Member = [number, boolean];//무조건 첫째는 number, 둘째는 boolean
let john:Member = [123,true]; //어레이의 튜플타입

type Member2 ={
  [key :string] : string
}
let kim :Member2 = {name : 'kim'};

class User{
  name:string;
  constructor(name:string){
    this.name = name;
  }
}