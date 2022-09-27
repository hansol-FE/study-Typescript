{
    type CoffeeCup = {
        shots : number,
        hasMilk: boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7; 
        private coffeeBeans:number =  0; 

        constructor(coffeeBeans: number){ 
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans)
        }
        
        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning the machine..')
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`)
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
                throw Error("Not enough coffee bean!")
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
        }

        private preheat():void{
            console.log("heating up...")
        }

        private extract(shots: number): CoffeeCup{
            console.log(`pulling ${shots} shots...`)
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots:number):CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots)
        }
    }

    class CateLatteMachine extends CoffeeMachine{
        constructor(bean: number, public readonly serialNumber: string){
            super(bean);
        }

        //자식 클래스에만 있는 함수
        private steamMilk():void{
            console.log('Steaming some milk...');
        }

        makeCoffee(shots:number):CoffeeCup{
            //super키워드로 부모클래스에 접근 가능함.
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return{
                ...coffee,
                hasMilk:true
            }
        }
    }

    const machine = new CoffeeMachine(32);
    const latteMachine = new CateLatteMachine(32,'SSS12314');

    const coffee = latteMachine.makeCoffee(2);
    console.log(coffee);
   

    
}