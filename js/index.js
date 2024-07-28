// 1-masala
// function sqrtNumber(num){
//     return Math.sqrt(num)
// }
// let res = sqrtNumber(9)
// console.log(res);

// 2-masala
// function twoNumber(num1, num2){
//     return num1 - num2
// }
// let res = twoNumber(12, 5)
// console.log(res);

// 3-masala
// function stringReturn(str, num){
//     let natija = ''
//     for(let i = 1; i <= num; i++){
//         natija += str
//     }
//     return natija
// }
// let res = stringReturn('salom ', 3)
// console.log(res);

// 4-masala
// function kubNumber(num){
//     return num ** 3
// }
// let res = kubNumber(3)
// console.log(res);

// 5-masala
// function midOfTwoNumber(num1, num2){
//     return Math.floor(num1 / num2)
// }
// let res = midOfTwoNumber(8, 3)
// console.log(res);

// 6-masala
// function findYear(yil){
//     if(yil % 100 == 0){
//         return yil / 100
//     } else{
//         return Math.floor(yil / 100) + 1
//     }
// }
// let res = findYear(1951)
// console.log(res);

// 7-masala
// function findFoktorial(num){
//     if(num == 0 || num == 1){
//         return 1
//     }else{
//         return num * findFoktorial(num - 1)
//     }
// }
// let res = findFoktorial(5)
// console.log(res);

// 8-masala
// function

// 9-masala
// function cutNum(str, num){
//     let result = ''
//     for(let i = str.length - num; i < str.length; i++){
//         result += str[i]
//     }
//     return result
// }
// let res = cutNum('salom dunyo', 5)
// console.log(res);

// 10-masala
// function checkNumber(str){
//     for(let i = 0; i < str.length; i++){
//         if(str[i] < '0' || str[i] > '0'){
//             return false
//         } else{
//             return true
//         }
//     }
// }
// let res = checkNumber('salom54')
// console.log(res);

// 11-masala
// function findDaraja(num, daraja){
//     let sum = 1
//     for(let i = 0; i < daraja; i++){
//         sum *= num
//     }
//     return sum
// }
// let res = findDaraja(4, 3)
// console.log(res);

// 12-masala
// function deletProbel(str){
//     let sum =''
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== ' '){
//             sum += str[i]
//         }
//     }
//     return sum
// }
// let res = deletProbel('   Hayrli tong ')
// console.log(res);

// 13-masala
// function addTwoStr(str1, str2){
//     let sum = ''
//     for(let i = 0; i < str1.length; i++){
//         sum += str1[i]
//     }
//     for(let i = 0; i < str2.length; i++){
//         sum += str2[i]
//     }
//     return sum
// }
// let res = addTwoStr('salom', 'dunyo!')
// console.log(res);

// 14-masala

// 15-masala
// function boshHarfKattaQil(str) {
//     let result = '';
//     if (str.length > 0) {
//         let firstCharCode = str.charCodeAt(0);
//         if (firstCharCode >= 97 && firstCharCode <= 122) {
//             result += String.fromCharCode(firstCharCode - 32)
//         } else {
//             result += str[0];
//         }
//         for (let i = 1; i < str.length; i++) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// let res = boshHarfKattaQil('salom')
// console.log(res);

// 1-masala
// function sumArr(arr){
//     let sum = 0
//     for (const iterator of arr) {
//         sum += iterator
//     }
//     return sum
// }
// let res = sumArr([1, 2, 5, 4, 8])
// console.log(res);

// 2-masala
// function maxArr(arr){
//     let max = arr[0]
//     for (const iterator of arr) {
//         if(max < iterator){
//             max = iterator
//         }
//     }
//     return max
// }
// let res = maxArr([2, 5, 7, 10])
// console.log(res);

// 3-masala
// function reverseArr(arr){
//     let result = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         result.unshift(arr[i])
//     }
// }
// let res = reverseArr([1, 2, 3, 4, 5])
// console.log(res);

// 4-masala
// function musbatNUmber(arr){
//     let result = []
//     for (const iterator of arr) {
//         if(iterator > 0){
//             result.push(iterator)
//         }
//     }
//     return result
// }
// let res = musbatNUmber([1, -4, 9, -8, 5, 7, -6])
// console.log(res);

// 5-masala
// function kvArr(arr){
//     let result = []
//     for (const iterator of arr) {
//         result.push(iterator ** 2)
//     }
//     return result
// }
// let res = kvArr([2, 4, 5, 7, 3])
// console.log(res);

// 6-masala
// function deletPaftor(arr) {
//   let yangiArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let takrorlanmaydi = true;
//     for (let j = 0; j < yangiArr.length; j++) {
//       if (arr[i] === yangiArr[j]) {
//         takrorlanmaydi = false;
//         break;
//       }
//     }
//     if (takrorlanmaydi) {
//       yangiArr.push(arr[i]);
//     }
//   }
//   return yangiArr;
// }
// let res = deletPaftor([1, 1, 2, 5, 4, 4, 8, 7, 7]);
// console.log(res);

// 7-masala
// function concatTwoArr(arr1, arr2){
//     return arr1.concat(arr2)
// }
// let res = concatTwoArr([12, 13, 14], [15, 16])
// console.log(res);

// 8-masala
// function sumToqArr(arr){
//     let sum = 0
//     for (const iterator of arr) {
//         if(iterator % 2 == 1){
//             sum ++
//         }
//     }
//     return sum
// }
// let res = sumToqArr([1, 2, 3, 5, 8, 9, 6])
// console.log(res);

// 9-masala
// function addArrNumber(arr, num){
//     let result = [] 
//     for (const iterator of arr) {
//         result.push(iterator + num)
//     }
//     return result
// }
// let res = addArrNumber([12, 2, 22, 32, 42], 8)
// console.log(res);

// 10-masala
// function minNumberArr(arr){
//     let min = arr[0]
//     for (const iterator of arr) {
//         if(min > iterator){
//             min = iterator
//         }       
//     }
//     return min
// }
// let res = minNumberArr([11, 4, 87, 52, 10])
// console.log(res);