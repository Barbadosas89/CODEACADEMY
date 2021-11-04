class Motorcycle extends Car {
    constructor(wheels) {
        super(wheels);
        this.wheels = wheels;

    }

    getWheelsNumber() {
        if (this.wheels == 3) {
            return 'motociklas turi 3 ratus';
        } else if (this.wheels == 2) {
            return 'motociklas turi 2 ratus';
        } else {
            return 'keistas pas taves motociklas!!!';
        }

    }
}