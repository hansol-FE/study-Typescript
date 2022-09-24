{
    type CoffeeCup = {
        shots : number,
        hasMilk: boolean
    }


    // public : 외부에서 접근 가능.
    // private : 외부에서 접근하지 못하도록
    // protected: 상속받은 자식클래스에서만 접근할 수 있도록
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7; 
        private coffeeBeans:number =  0; 

        private constructor(coffeeBeans: number){ 
            this.coffeeBeans = coffeeBeans;
        }

        // 보통 constructor로 객체를 만들지 않고 싶어서 만드는 함수이므로 constructor함수를 private으로 바꿔줌
        // 그래서 이 함수를 통해서 객체를 만들도록 권장할 수 있다.
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans)
        }
        
        // private한 멤버변수 상태를 바꾸지 못하므로 함수를 통해서 바꾸게 한다.
        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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

    const maker = CoffeeMaker.makeMachine(32);
    //maker.coffeeBeans = -3; // invaild. 외부에서 상태를 유효하지 않게 변경할 수 있음.
    maker.fillCoffeeBeans(3);

    class User{
        //private firstName: string;
        //private lastName: string;

        private internalAge = 20;
        get age():number{
            return this.internalAge;
        }
        set age(num:number){
            if(num < 0){ //... 유효성 체크 로직
            }
            this.internalAge = num;
        }
        
        // get을붙이면 함수처럼 ()를 붙이지만 객체를 만들어서 호출할때는 멤버변수 호출하듯이 () 없이..
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        // 인자앞에 public,private 등 을 바로 붙이면 class의 멤버변수가 됨. 자동으로 this.멤버변수에 값이 할당됨.
        constructor(private firstName: string, private lastName: string){
            //this.firstName = firstName;
            //this.lastName = lastName;
        }

    }

    const user = new User('steve', 'ho');
    console.log(user.fullName)
    user.age = 21;

    
}