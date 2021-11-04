let car = new Car('VW', 'Polo', 2010);
console.log(car.getIntroduction(), car.getAge(), car.currentCarAge());

let car2 = new Car('VW', 'Passat', 2011);
console.log(car2.getIntroduction(), car2.getAge(), car2.currentCarAge());

console.log(car)
console.log(car2)

let moto = new Motorcycle('Honda', 'CBR', 2021, 5);
console.log(moto.getWheelsNumber())
