{
    type CoffeeCup = {
        shots : number,
        hasMilk: boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        fillCoffeeBeans(beans:number): void;
        clean():void;
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker,CommercialCoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7; 
        private coffeeBeans:number =  0; 

        private constructor(coffeeBeans: number){ 
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

    const maker1:CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker1.fillCoffeeBeans(3);
    maker1.makeCoffee(2);

    const maker2:CoffeeMaker = CoffeeMachine.makeMachine(32);
    //maker2.fillCoffeeBeans(3); //interface에 정의해놓지않아서 쓸 수 없음
    maker2.makeCoffee(2);

    const maker3:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker3.fillCoffeeBeans(2);
    maker3.clean();
    maker3.makeCoffee(2);

    class AmateurUser{
        constructor(private machine:CoffeeMaker){}
        makeCoffe(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista{
        constructor(private machine:CommercialCoffeeMaker){}
        makeCoffe(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(2);
            this.machine.clean();
        }
    }

    const maker4:CoffeeMachine = CoffeeMachine.makeMachine(32);

    const amateur = new AmateurUser(maker4);
    const pro = new ProBarista(maker4);
   

    
}