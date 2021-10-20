// // Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2,  7, 9, 4, -5, 2, -6, -4, 6];
// // 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

let arrDouble = (num, numb) =>numbers.map(num => num * numb);
console.log(arrDouble(numbers,2));
//
//
// // 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
//
let arrMultiplied = (num, numb) => numbers.map(num => num * numb);
console.log(arrMultiplied(numbers,3));
//
//
//
// // 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
let arrCountTwos = (num, numb) => numbers.filter(num => num == numb);
console.log(arrCountTwos(numbers,2))
//
//
// // 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
//
let arrIndexOfFirst = (num, numb) => num.indexOf(numb);
console.log(arrIndexOfFirst(numbers,7));
//
//
// // 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.
//
let arrIndexOfLast = (num, numb) => num.lastIndexOf(numb);
console.log(arrIndexOfLast(numbers,1));
//
//
// // 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// // Pvz.: Turime skaičius 32243;
// // Iškvietus funkciją rezultata bus: 34223
//
let reverseNumbers = num => num.toString().split('').reverse().join('');
console.log(reverseNumbers(32243));
//
// // 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// // Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// // Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"
let bigestSmalest = numbers.slice().sort(function(a, b){
  return a-b;
});
let smallest = bigestSmalest[0];
let bigest = bigestSmalest[bigestSmalest.length -1];
console.log('Smallest: ' +smallest + ', Largest: ' + bigest);
//
// // 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
//
function checkForLetters(str, letter){

 let letter_Count = 0;
 for (let i = 0; i < str.length; i++)
 {
    if (str.charAt(i) == letter)
      {
      letter_Count += 1;
      }
  }
  return 'Word/sentence > ' + str + ' < have ' + letter_Count + ' letters ' + '> ' + letter + ' <';
}

console.log(checkForLetters('Pasikiskiokopusteliaudami', 'i'));


// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1, 11,10,14,40];
// // Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];
//
function cleanArray(arr2){
  return arr2.filter(function(arr){
  return arr > 0;
}).sort(function(a, b){
    return a-b
})
 }
console.log(cleanArray(arr2));

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

function checkIfAllSmaller(arr,max){
  for(i = 0; i < arr.length; i++){
      if(arr[i] <= max)
      return false;
  }
  return true;
}
console.log(checkIfAllSmaller(numbers,-89))




// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// // Testuosime šį masyvą
let cities = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
];


function filteredByLetter(arrCities,letter){
return arrCities.filter(arr => arr.includes(letter))
}
console.log(filteredByLetter(cities,'l'));


// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

function calculateValue(num1, num2, calc){
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error ('Its not a valid number!')
  } else if( calc == 'addition'){
    return num1 + num2;
  } else if( calc == 'subtraction'){
    return num1 - num2;
  } else if( calc == 'multiplication'){
    return num1 * num2;
  } else if( calc == 'division'){
    return num1 / num2;
  } else {
    throw new Error ('Its not caluculation operator !')
  }
}
console.log(Math.floor(calculateValue(5, 4, 'division'))+Math.floor(calculateValue(10, 4, 'multiplication')))

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.
