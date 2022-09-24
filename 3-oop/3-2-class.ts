{
    type CoffeeCup = {
        shots : number,
        hasMilk: boolean
    }

    class CoffeeMaker {
        // 내 클래스 안에있는 멤버변수에 접근할 때는 this 붙여야함.
        static BEANS_GRAM_PER_SHOT = 7; // static을 붙이면 class level : 객체마다 생성되지 않는다. this대신 클래스 이름을 붙여서 사용해야함.
        coffeeBeans:number =  0; // static을 붙이지 않으면 instance(object) level

        constructor(coffeeBeans: number){ // 이 클래스를 가지고 객체를 만들때 항상 호출되는 함수
            this.coffeeBeans = coffeeBeans;
        }

        //constructor를 호출하지않고 커피메이커를 만들고 싶다면..
        //클래스내부의 어떤 값도 사용하지 않으므로 static을 붙여준다. 
        //객체를 생성하지 않고도 클래스 레벨로 접근가능함. CoffeeMaker.makeMachine(7)
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans)
        }

        makeCoffee(shots:number):CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw Error("Not enough coffee bean!")
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
            return{ 
                shots,
                hasMilk: false
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker)

    const maker2 = CoffeeMaker.makeMachine(7)
}