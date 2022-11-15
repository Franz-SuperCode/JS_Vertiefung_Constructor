class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}


let ball1 = new Ball();
let ball2 = new Ball("super");

console.log(ball1.ballType);	//=> "regular"
console.log(ball2.ballType);	//=> "super"