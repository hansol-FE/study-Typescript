/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

function calculate(type:string, a:number, b:number):number {
    switch(type){
        case "add":
            return a+b
        case "substract":
            return a-b
        case "multiply":
            return a*b
        case "divide":
            if(b != 0){
                return a/b
            }
        case "remainder":
            return a%b
        default:
            
    }

}
