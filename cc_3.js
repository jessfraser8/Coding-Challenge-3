//U09226075
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
        console.log('The car is a ' + make + ' driving ' + speed + ' km/h.');
    }

    accelerate(){
        return this.speed + 10
        console.log('The new speed is ' + speed + ' km/h.')
    }

    brake(){
        return this.speed - 5
        console.log('The new speed is ' + speed + ' km/h.')
    }
    
}