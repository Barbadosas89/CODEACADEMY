// !!!!!!!!!!!!!!!!!!!!! Parašykite 2 skirtingas funkcijas, kurios apverčia masyvą atvirkštine tvarka.!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let data = [1, 2, 3, 4];
// let reverseArray = data => data.reverse();
//
// console.log(reverseArray(data));
// console.assert(JSON.stringify(reverseArray(data.reverse())) == JSON.stringify([4, 3, 2, 1]));


// let data = [1, 2, 3, 4];
// let reverse2 = data => {
//   for (let i = 0; i < Math.floor(data.length / 2); i++) {
//       [data[i], data[data.length - 1 - i]] = [data[data.length - 1 - i], data[i]];
//   }
//   return data;
// }
//
// console.log(reverse2(data));
// console.assert(JSON.stringify(reverse2(data = [1, 2, 3, 4])) == JSON.stringify([4, 3, 2, 1]));


// let data = [1, 2, 3, 4];
// function reverse2(arr) {
//     let result = [];
//     for (i = arr.length-1; i >= 0; i--) {
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(reverse2(data));
// console.assert(JSON.stringify(reverse2(data)) == JSON.stringify([4, 3, 2, 1]))
//
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Parašykite funkciją, kuri grąžiną švarų masyvą.!!!!!!!!!!!!!!!!!!!!!
//
// let data = [0, 1, false, 2, undefined, '', 3, null];
//
// function cleanArray(data){
//   return data.filter(function(arr){
//   return arr > 0;
//   })
// }
//
// console.log(cleanArray(data));
// console.assert(JSON.stringify(cleanArray(data)) == JSON.stringify([1, 2, 3]));
