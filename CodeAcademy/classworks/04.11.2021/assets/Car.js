class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;


    }
    getIntroduction() {
        return `${this.make} ${this.model}`;
    }
    getAge() {

        let d = new Date();

        let carYear = d.getFullYear() - this.year;

        return carYear > 10 ? '11 or more' : '10 or less';


    }
}
