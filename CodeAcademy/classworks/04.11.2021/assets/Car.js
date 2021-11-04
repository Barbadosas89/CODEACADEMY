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
        return this.currentCarAge() > 10 ? '11 or more' : '10 or less';
    }

    currentCarAge() {
        let d = new Date();
        return d.getFullYear() - this.year;
    }

}