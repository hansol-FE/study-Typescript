/**
 * Let's make a game 🕹
 */


{
    type Move = 'up'| 'down'|'left'|'right';
    type Position =  {x:number, y:number}
    let position:Position = {x:0, y:0};

    function move(move:Move):Position{
        switch(move){
            case 'up':
                position.y ++;
                return position
            case 'down':
                position.y --;
                return position
            case 'left':
                position.x --;
                return position
            case 'right':
                position.x ++;
                return position
            default:
                throw Error('error!')
        }
    }

    console.log(position); // { x: 0, y: 0}
    move('up');
    console.log(position); // { x: 0, y: 1}
    move('down');
    console.log(position); // { x: 0, y: 0}
    move('left');
    console.log(position); // { x: -1, y: 0}
    move('right');
    console.log(position); // { x: 0, y: 0}
}
