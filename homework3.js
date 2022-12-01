// task1 
 
// const arr = [2, 3, 4, 5];

// let product = 1;

// for(let i = 0; i < arr.length; i++) {
//     product *= arr[i];
// }
// console.log(product);

// let product = 1;
// let i = 0;

// while(i < arr.length) {
//     product *= arr[i];
//     i++;
// };
// console.log(product);



// task2

// for(let i = 0; i <= 15; i++) {
//     if(i % 2 === 0) {
//         console.log(`${i} is even`);
//     }else {
//         console.log(`${i} is odd`);
//     }
// }

// task3 

// function randArray(k) {
//     const someArr = [];
//     for(let i = 0; i < k; i++) {
//         someArr.push(Math.floor(Math.random() * 500));
//     }
//     console.log(someArr);
// }

// randArray(5);

// task4

// function raiseToDegree(a, b) {
//     if(isNaN(a)|| isNaN(b)) {
//         console.log("is not a number. Please try more...")
//     }else {
//         console.log(a**b);
//     }
// }

// console.log(raiseToDegree(
//     a = +prompt("ведіть число", 0),
//     b = +prompt("ведіть число 2", 0), 
// )) ;

// task5

// function findMid() {
//     let minValue = arguments[0];
//     for(let i = 0; i < arguments.length; i++) {
//         if(arguments[i] < minValue) {
//             minValue = arguments[i];
//         }
//     }
//     console.log(minValue)
// }

// findMid(12, 14, 4, -4, 0.2);



// task6

// function findUnique(arr) {
//     let newArr = [];
//     for(let i = 0; i < arr.length;i++) {
//         if(!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(arr.length === newArr.length)
// }
// findUnique([1, 2, 3, 5, 3]); 
// findUnique([1, 2, 3, 5, 11]); 

// task7
// function lastElem(a, b=1) {
//     let newArr = [];
//     newArr = a.slice(-b);
   
//     return newArr;

// } 

// console.log(lastElem([3, 4, 10, -5]));     
// console.log(lastElem([3, 4, 10, -5],2));   
// console.log(lastElem([3, 4, 10, -5],8));   

// task8

// function firstSymbolToUpercase (str) {
//     let someArr = str.split(' ');
//     let newArr = [];

//     for(let i = 0; i < someArr.length; i++) {
//         newArr.push(someArr[i].charAt(0).toUpperCase() + someArr[i].slice(1));
//     }
//     let strWihtBigSymbol = newArr.join(" ");
//     console.log(strWihtBigSymbol);
// }

// firstSymbolToUpercase("i love java script");
