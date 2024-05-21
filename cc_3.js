//U09226075
//Create Car class.
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
        console.log(`The car is a ${make} driving ${speed} km/h.`);
    }

//Add acceleration method.
    accelerate(){
        this.speed = this.speed + 10;
        console.log(`The new speed is ${this.speed} km/h.`);
        return this.speed + 10;
    }

//Add brake method.
    brake(){
        this.speed = this.speed - 5;
        console.log(`The new speed is ${this.speed} km/h.`);
        return this.speed;
    }
}

//Test Car objects.
let car1 = new Car("BMW", 120);
car1.brake();
car1.brake();
car1.accelerate();
car1.brake();
car1.accelerate();

let car2 = new Car("Mercedes", 95);
car2.accelerate();
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();
car2.brake();