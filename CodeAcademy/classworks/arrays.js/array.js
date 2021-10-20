
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SUM IN ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function getMaxSubSUm(arr){
//      let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]>0)
//             sum+=arr[i];
//     }
//     return sum;
// }
// let arr = [11, -2, 34, 45, 19, 6];
// console.log(getMaxSubSUm(arr));
// console.assert(getMaxSubSUm(arr) == 115);
//

// !!!!!!!!!!!!!!!!!!!!!!!!!!!SUM IN ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let arr1 = [11, -2, 34, 45, 19, 6];
// const onlyPositive = arr1.filter(ab => ab >= 0);
// let sum1 = 0;
// for (let val of onlyPositive) {
//     sum1 += val;
// }
// console.log(sum1);


// !!!!!!!!!!!!!!!!!!!!!!!!!!! LAGEST  NUMBER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let getHighestNumber = (...arguments) => {
//      let largest = arguments[0]
//      for (i = 0; i < arguments.length; i++) {
//      if (largest < arguments[i] ) {
//         largest = arguments[i];
//     }
//    }
//   return largest;
// }
// console.log(getHighestNumber(34,7,8,55,6,56,7,9,52))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!ARRAY SHIFT PUSH!!!!!!!!!!!!!!!!!!!!!!!!!
// let arr = ['Jazz', 'Blues'];
// console.log(arr)
// arr.push('Rock-n-Roll');
// console.log(arr)
// arr[1] = 'Classics';
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// arr.unshift('Reggae', 'Rap');
// console.log(arr)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DO...WWHILE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // do..while

// let result = '';
// let i = 0;

// do {

//   i = i + 1;
//   result = result + i;
//   result = result + i;
//   result = result + i;
// } while (i < 9);

// console.log(result);
// console.assert(result === '111222333444555666777888999');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ARRAY SPLICE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let styles = [
//     'Jazz',
//     'Blues'
// ];
// console.log(styles);
// styles.push('Rock-n-Roll');
// console.log(styles);
// styles.splice(1, 1,'classics');
// console.log(styles);
// console.log(styles.slice(0,1));
// styles.splice(0, 1,);
// console.log(styles);
// styles.unshift('Rap', 'Reggae');
// console.log(styles);

// !!!!!!!!!!!!!!!!!!!!!!!!!CONCAT  indexOf!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let arr1 = [1,2,3];
// let arr2 = ['a', 'b', 'c'];
// let arrs = arr1.concat(arr2, [[1]], {});
// arrs[6] = arrs[6].concat(arr1);
// console.log(arrs);
// console.log(arrs.indexOf('a'))

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CONCAT MULTIPLY  VALUE  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function customFill(a,b){
//     let newArr = [];
//     let i = 0;
//     while (i < a){
//         newArr.push(b);
//         i++;
//     }
//     return newArr;
// }
// console.log(customFill(3,'a'));


// This  for big array or....
// function customFill(len, value) {
//   if (len == 0) return [];
//   let a = [value];
//   while (a.length * 2 <= len) a = a.concat(a);
//   if (a.length < len) a = a.concat(a.slice(0, len - a.length));
//   return a;
// }


// THIS.....
// function customFill(len, value) {
//   var arr = [];
//   for (var i = 0; i < len; i++) {
//     arr.push(value);
//   }
//   return arr;
// }


// This one shortest !!!!....
// let customFill = (len, val) => {
//     return Array(len).fill(val)
// }
// console.log(customFill( 3, 'a'));
// console.log(customFill( 3, 'b'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CHEKS IF ARRAY EQUAL TO ARRAY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function isEqual(a, b) {
//
//   if (a === b) return true;
//    if (a.length !== b.length) return false;
//    for (let i = 0; i < a.length; ++i) {
//      if (a[i] !== b[i]) return false;
//   }
//   return true;
// }




// let isEqual = (a, b) =>{
//     if(a.length == b.length){
//              for(let i = 0; i < a.length; i++){
//                 if(a[i]!=b[i]){
//                     return false;
//                 }
//              }
//              return true;
//             }
//      else{
//         return false;
//      }
// }
//
//
//
//  let arr1 = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];
// let arr3 = [1, 2, 3, 5];
// let arr4 = [1, 2, 3, 4, 5];
//
// console.log(isEqual(arr1, arr2));
// console.assert(isEqual(arr1, arr2));
// console.log(isEqual(arr1, arr3));
// console.assert(isEqual(arr1, arr3) == false);
// console.log(isEqual(arr1, arr4));
// console.assert(isEqual(arr1, arr4) == false);
// console.log(isEqual(arr3, arr4));
// console.assert(isEqual(arr3, arr4) == false);
// console.log(isEqual(arr4, arr4));
// console.assert(isEqual(arr4, arr4));
