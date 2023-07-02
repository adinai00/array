//1
// let arr = [10, 20, 30, 60, 70, 80, 90, 100]
// arr.splice(3, 0, 40,50)
// console.log(arr);

//2
// let arr = [10, 20, 30, 23, 45, 60, 70, 80, 90, 100]
// arr.splice(3, 2, 40,50)
// console.log(arr);

//3
// let arr1 = [1, 2, 3, 4, 5, 999]
// arr1.pop()
// console.log(arr1);
//4
// let arr2 = [999, 1, 2, 3, 4, 5]
// arr2.shift()
// console.log(arr2);
//5
// let arr3 = [1, 2, 3, 4,]
// arr3.push(5)
// console.log(arr3);
//6
// let arr4 = [2, 3, 4, 5]
// arr4.unshift(1)
// console.log(arr4);

///////////////////////////
// let arr1 = [1,2,3]
// arr1.push(4,5,6)
// console.log(arr1);

// let arr2 = ['js','css','jq']
// console.log(arr2.shift());

// let arr3 = ['js','css','jq']
// console.log(arr3.pop());

// let arr4 = [1,2,3,4,5]
// arr4.splice(1,2,)
// console.log(arr4);

// let arr5 = [1,2,3,4,5]

// console.log(arr5.splice(1,3));

// let arr6 = [1,2,3,4,5]
// arr6.splice(3,0,'a','b','c')
// console.log(arr6);

// let arr7 = [1,2,3,4,5]
// arr7.splice(1,0,'a','b')
// arr7.splice(6,0,'c')
// arr7.splice(8,0,'e')
// console.log(arr7);

// let arr = [1,2,3,4,5]
// console.log(arr.slice(0,3));

// let arr = [1,2,3,4,5]
// console.log(arr.slice(3,5));

//task1
// function getRandomInt() {
//     let min = 117;
//     let max = 132;
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(rand);
// }

// getRandomInt()

/////////////////////////////////
// filter | map | reduce | some | includes | sort | forEach | find |

//FILTER

// const arr = [1,2,3,4,5,6,7,8,9,10]
// const arr2 = [0, 1, false, 2, "", 3, 4, -1, 5, 6, 7, 8, 9, 10]
// const arr3 = ["Bekzhan", "Adinai", "Bilal", "Jakshylyk", "Amantur", "Den", "John","Tom", "Jerry"]

// console.log(arr.filter((el) => el > 5));
// console.log(arr2.filter((el) => el));
// console.log(arr.filter((el) => {
//     return el % 2 === 0
// }));
// console.log(arr.filter((el) => {
//     return el % 2 !== 0
// }));
// console.log(arr3.filter((el)=>{
//     return el.length < 5
//     //return el.length => 5
// }));

// console.log(arr3.filter((el)=>{
//     return el.includes ("a")
//    // return !el.includes ("a")

// }));

// //MAP
// const arr4 = ["Bekzhan", "Adinai", "Bilal", "Jakshylyk", "Amantur", "Den", "John","Tom", "Jerry"]

// console.log(arr4.map((el) => {
//     return el.toUpperCase()
// }));
// console.log(arr4.map((el) => {
//     return el.includes("a")
// }));
// console.log(arr4.map((el) => {
//     if (el.includes("a")){
//       return el
//     }else {
//         return null
//     }
// }));
// console.log(arr4.map ((el) => {
//     if (el.length > 5){
//     return el.toUpperCase()
//     }else {
//         return el.toLowerCase()
//     }
// }));
// console.log(arr4.map ((el, index) => {
//     if (index % 2 === 0){
//         return el.toUpperCase()
//     }else {
//         return el.toLowerCase()
//     }
// }))

// const arr5 = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr5.map ((el) => {
//     return el % 2 === 0
// }));

// console.log(arr5.map ((el) => {
//     if (el % 2 === 0){
//         return el * 2
//     }
//     return el
// }));

// //REDUCE
// const arr6 = [1, '2', 3, '4', 5]
// let sum = 0

// arr6.forEach((el) => {
//     sum = sum + el
// })
// console.log(sum);

// const results = arr6.reduce((acc, el) => {
//     return acc * el
// })
// console.log(results);

// const result = arr6.filter(el => typeof el === "number").reduce((acc, el) => {
//     return acc + el
// })
// console.log(result);

//FIND

//const a = [2, 3, 4 ,5]

// //ЗАДАЧИ
// function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }
//   console.log(camelize("my name is Adinai"));

//   console.log([1,4,3,0,4,5,4]
//     .filter(el => (el % 2 === 0))
//     .reduceRight((acc, el)=> acc + Math.sqrt(el), 0));

//  const apple = 1.15
//  const orange = 2.30
//  const res = apple + orange
//  console.log(res);

//  cycle :for (let i = 0; i < 10; i++) { //! Эту строку можно изменить
//  for (let j = 0; j < 10; j++) {
//    if (i === 5 && j === 5) {
//     break cycle;
//      //! Эту строку можно изменить
//    }

//    console.log(i, j);
//  }
// }

// function f1(arr){
//   return arr.slice(1, -1)

// }

// console.log(f1([1, 2, 3, 4, 5]));

// function f2(arr2, arr3){

// }

// console.log(f2([1, 2, 3, 4, 5, 6], [3, 5, 7, 4, 9, 1]));

// function task(arr){
//     return [...new Set(arr)]
// }

// console.log(task([1, 2, 4 ,7 ,7, 54, 2, 4]));

// function task(arr){
//     return arr.filter((el) =>{
//         return el.length > 5
//     })
// }

// console.log(task(["Adinai","Amantur","Ayana","bilal"]));

// function f3(array){
//     return array.map((el) =>{
//         if (el % 2 === 0){
//             return el * 2
//         }
//return el

//     })

// }
// console.log(f3([1, 2, 3, 4, 5, 6]));

// function f4(str){
//      return str.map((el) => {
//         return el.toUpperCase()
//     })

// }
// console.log(f4(['wind','storm','breeze','rain']));

// function f5 (arr){
//     return arr.map((el) => {
//         return el * 2
//     })

// }
// console.log(f5([10, 20, 30, 60, 70, 80, 90, 100]));

// function f1(arr) {
//     return arr.reduce ((acc, el) => {
//         return acc + el
//     })

// }
// console.log(f1([10, 20, 30, 60, 70, 80, 90, 100]));

// function f(arr) {
//     return arr.filter((el) => {
//         return el % 2 === 0
//     })

// }
// console.log(f([1, 2, 4 ,7 ,7, 54, 2, 4, 5]));

// function f4(str){
//          return str.map((el) => {
//             return el.toUpperCase()
//         })

//     }
//     console.log(f4(['wind','storm','breeze','rain']));

//     function f1(arr) {
//             return arr.reduce ((acc, el) => {
//                 return acc + el
//             })

//         }
//         console.log(f1([10, 20, 30, 60, 70, 80, 90, 100]));

//     function f2(arr5){
//         return arr5.map((el) => {
//             return el * 2
//         })
//     }
//     console.log(f2([10, 20, 30, 60, 70, 80, 90, 100]));

// function foo2(arr1, arr2) {
//   return [...new Set(arr1)].filter(el => arr2.includes(el))
// }
// console.log(foo2([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 3, 1, 9, 11, 56, 45]));

// function f(arr) {
//     return arr.sort()

// }
// console.log(f([3, 6, 4, 2, 1, 0, 9, 8]));
1;
// function fun(arr){
//           return arr.map((el) => {
//               return el * 2
//           })
//       }
//       console.log(fun([11, 22, 33, 66, 77, 88, 99, 100]));

// 2
// function fun2(str){
//        return str.map((el) => {
//           return el.toUpperCase()
//       })

//   }
//   console.log(fun2(['Monday','Sunday','Thuesday','Wednesday']));

// 3
// function fun3(arr2) {
//               return arr2.reduce ((acc, el) => {
//                   return acc + el
//               })

//           }
//           console.log(fun3([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

// 4
// function fun4(arr3) {
//       return arr3.filter((el) => {
//           return el % 2 === 0
//       })

//   }
//   console.log(fun4([1, 2, 4 ,7 ,7, 54, 2, 4, 5, 6, 23, 50, 67, 78]));

// 5
// function fun5(arr4){
//   return arr4.map((el) => {
//     return parseInt(el)
//   })

// }
// console.log(fun5(["1","2","3","4","5","6","7","8"]));
// 6
// function fun6(arr5){
//   return arr5.filter((el) =>{
//    return el > 0
//   })

// }
// console.log(fun6([-2, -1, 0, 1, 2, -3, 4, 5]));

// 7

// function fun7(arr6){
//   return arr6.map((el, index) => {
//     if (el.length > 5){
//       return el.toUpperCase()
//     }

//   })

// }
// console.log(fun7(['apple', 'banana', 'cherry', 'date', 'elderberry']));

// 8
// function fun8(arr7) {
//   return [...new Set(arr7)]

// }
// console.log(fun8([22, 45, 56, 22, 45, 7, 7, 89, 90, 89]));

// 9
// function fun9(arr8){
//  return arr8.filter((el) => {
//        return el[0] === "a"
//  })

// }
// console.log(fun9(["apple","samsung","huawei","hp","acer","lenovo"]));

// 10
// function fun10(arr9){
//   return arr9.filter((el) => {
//     return el > 50
//   })

// }
// console.log(fun10([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

11;
// function fun11(arr10){
//   return arr10.filter((el, index) => {
//     return el.toUpperCase() === el
//   })

// }
// console.log(fun11(['APPLE', 'Banana', 'CHERRY', 'date', 'ELDERBERRY']));

12;
// function f(arr) {
//   return arr.filter((el) => {
//     return el % 2 === 0 && el > 5
//   })

// }
// console.log(f( [2, 4, 6, 7, 8, 10, 11]));

13;
// function f(arr){
//   return arr.filter((el) => {
//    return typeof el === "string"
//   })
// }
// console.log(f([1, 'apple', true, null, 'banana', 5, false]));

// 14
// function f2(arr2){
//   const srotedArr = arr2.sort((a,b) => b - a)

//   return srotedArr[0]

// }

// console.log(f2([10, 5, 8, 3, 9]));

15;
// function f(arr) {
//  return arr.reduce((acc, el) => {
//   return acc + el
//  })
// }
// console.log(f(['Hello', ' ', 'world', '!']));

16;
// function f(arr) {
//   return arr.reduce((acc, el) => {
//     return (acc + el) / arr.length;
//   });
// }
// console.log(f([10, 5, 8, 3, 9]));

17;
// function f(arr){
//    return arr.filter((el, index) => {
//         return el.includes ('apple')
//    })
// }
// console.log(f(['apple', 'banana', 'apple', 'cherry', 'apple']));

18;
// function f(arr, arr2 ){
//         return arr.concat(arr2)

//       }
//       console.log(f(['wind','storm','breeze'], ['apple', 'banana']));

19;
// function f (arr){
//     return arr.find((el, index) => {
//      return el % 2 === 0
//      })

// }
// console.log(f([1, 3, 5, 2, 4, 6, 7]));

20;
// function f(arr){
//         return arr.filter((el, index) => {
//          return el.length === 4
//         })

// }
// console.log(f(['apple', 'banana', 'cherry', 'date']));

21;
// function f(arr){
//         return arr.find((el, index) => {
//          return el > 0
//         })

// }
// console.log(f([-2, -1, 0, 3, 5, 7]));

22;
// function f(arr){
//      return arr.find((el) => {
//         return el[0] === "a"

//      })

// }
// console.log(f(['apple', 'banana', 'cherry', 'date']));

////////////////////////////////////////////
//OBJECT

// const user = {
//   name: "Jonh",
//   age: 20,
//   cars: [
//     { name: "BMW", model: "M5" },
//     { name: "BMW", model: "M6" },
//   ],
//   adress: "Bishkek",
// };
// const newUser = Object.assign(user);
// console.log(newUser);
// console.log(Object.is(user, newUser));

/////////////////////////////////////////////////
//TASK

1;
// const user1 = {};

// const user2 = {
//   name: "Adinai",
//   age: 18,
//   cars: [
//     { name: "BMW", model: "M5" },
//     { name: "BMW", model: "M6" },
//   ],
// };

// console.log(Array.isArray(user2.cars));

//console.log((user2.cars[0].name = "Mers"));
//console.log(Object.keys(user2));

// user2.age = 19;
// user2.city = "vgvhbjn";

// delete user2.age;

//console.log(Object.values(user2));

// if ("city" in user2) {
//console.log("true");
// } else {
//console.log(404);
// }

// function f(obj) {
//   return Object.keys(obj).length;
// }
//console.log(f({ name: "BMW", model: "M5", year: 2010 }));

// const user3 = {
//   name: [{ add: "adjb" }],
// };
//console.log(user3);

// const user0 = {
//   name: "Adinai",
//   age: 18,
// };

// const newUser2 = {
//   car: "mers",
//   color: "red",
// };

// const us = {
//   ...user0,
//   ...newUser2,
// };

//console.log(us);

// function sumSalaries(obj) {
//   let sum = 0;
//   for (let salary of Object.values(obj)) {
//     sum += salary;
//   }
//   return sum;
// }

// const obj = {
//   Den: 100,
//   Piter: 300,
//   Jonh: 250,
//   Tommy: 400,
// };
// console.log(sumSalaries(obj));

// function sumSalaries(obj1) {
//   return Object.values(obj1).reduce((a, b) => a + b, 0);
// }

// const obj1 = {
//   Den: 100,
//   Piter: 300,
//   Jonh: 250,
//   Tommy: 400,
// };

// console.log(sumSalaries(obj1));

// let userInfo = {
//   name: "oleg",
//   age: 23,
//   showInfo() {
//     console.log(`${this.name}`);
//   },
// };

// for (const key in userInfo) {
//   const value = userInfo[key];
//   console.log(value);
// }

// let user = userInfo;
// userInfo = null;
// user.showInfo();

// let newUser = userInfo;
// newUser.age = 45;
// console.log(userInfo.age);

// let userInfo = {
//   name: "Adi",
//   age: 18,
//   "likes js": true,
// };
// console.log(userInfo.name);
// console.log(Object.entries(userInfo).reverse());

// function MakeInfo(name) {
//   this.name = name;
//   this.age = 18;
// }
// console.log(new MakeInfo("Adinai"));
// console.log(new MakeInfo("Alina"));
// console.log(new MakeInfo("Diana"));

// let user = [
//   {
//     name: "John",
//     age: 30,
//   },
//   {
//     name: "Bob",
//     age: 21,
//   },
//   {
//     name: "Anna",
//     age: 19,
//   },
// ];

// // delete user[2];
// console.log(Object.keys(user.sort((a, b) => a.age - b.age)));

////////////////////////////////////////////
// const num = -23;
// if (num > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const str = "kjhsdvcsv";
// console.log(str.length);

//21.05.2023

1;
// const obj1 = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj1).length);
2;
// const obj1 = { a: 1, b: 2, c: 3 };
// console.log(Object.values("c"));
// console.log(["c"]);
3;
// const obj = {
//   Shirin: "1000",
//   Aijan: "500",
//   Atai: "200",
// };
// console.log(obj.Shirin);
// console.log(obj.Atai);
4;
// const obj = {
//   Shirin: "1000",
//   Aijan: "500",
//   Atai: "200",
// };
// obj.Atai = "500";
// console.log(obj);

5;
// const obj = {
//     Shirin: "1000",
//     Aijan: "500",
//     Atai: "200",
//   };
//   obj.Medet = "1500";
//   console.log(obj);

6;
// const obj = {
//   Shirin: "1000",
//   Aijan: "500",
//   Atai: { salary: "200" },
// };

// console.log(obj.Atai.salary);

7;

// let d = 3;

// const day = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thurday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday",
// };
// console.log(day[d]);

// 8;

9;
// const obj = {
//   Shirin: "1000",
//   Aijan: "500",
//   Atai: { salary: "200" },
// };

// console.log(Object.keys(obj));

10;
// const obj = {
//   Shirin: "1000",
//   Aijan: "500",
//   Atai: { salary: "200" },
// };

// console.log(Object.values(obj));

11;
// const obj = {
//   Shirin: "1000",
//   Aijan: "500",
//   Atai: { salary: "200" },
// };

// console.log(Object.entries(obj));

12;
// function f(name1) {
//   if (Object.keys(name1).length % 2 === 0) {
//     return 0;
//   }
//   return 1;
// }

// console.log(f({ name1: "Igor0" }));

13;
// function f(obj) {
//   return arr.map((el) => {
//     return el.id;
//   });
// }
// console.log(f([{ id: 3 }, { id: 5 }, { id: 6 }, { id: 7 }]));

14;
// function f(name) {
//   const a = {
//     ...name,
//     age: 25,
//     name: "Azat",
//   };
//   return a;
// }

// console.log(f({ name: "Igor" }));

15;
// const product = {
//   name: "headphones",
//   price: 150,
//   discount: 0,
// };
// function f(product) {
//   const defautDiscount = (product.price * 7) / 100;

//   if (product.price > 100) {
//     const sum = (product.price * 10) / 100;

//     return {
//       ...product,
//       price: product.price - sum,
//       discount: sum,
//     };
//   }

//   return {
//     ...product,
//     price: product.price - defautDiscount,
//     discount: defautDiscount,
//   };
// }

// console.log(f(product));

// ЦИКЛ
// let num = 0;
// while (num < 5) {
//   console.log(num);
//   num++;
// }

// let num = 8;
// while (num) {
//   console.log(num);
//   num--;
// }

// for (let num = 0; num < 3; num++) {
//   console.log(`Число ${num}`);
// }

// let num = 0;
// while (num < 3) {
//   console.log(`Число ${num}`);
//   num++;
// }

// for (let num = 0; num < 3; num++) {
//   console.log(num);
//   if (num === 1) break;
// }

// fisrtFor: for (let num = 0; num < 3; num++) {
//   for (let size = 0; size < 3; size++) {
//     if (size === 1) {
//       break fisrtFor;
//     }
//     console.log(size);
//   }
// }

/////////////////////////////////////////////////////////////////
// const names = ["Adinai", "Bekjan", "Amantur"];

// function f(names) {
//   const nameSplited = names.map((el) => {
//     return el.split("");
//   });

//   return nameSplited.map((el) => {
//     const nameChanged = el.map((item, index) => {
//       if (index % 2 === 0) {
//         return item.toUpperCase();
//       }

//       return item.toLowerCase();
//     });

//     return nameChanged.join("");
//   });
// }

// console.log(f(["Adinai", "Bekjan", "Amantur"]));

/////////////////////////////////////////////////////////////////
// TASK
1;
// for (let i = 0; i < 50; i++) {
//   console.log(i);
// }

// let a = 0;
// while (a < 50) {
//   console.log(a);
//   a++;
// }

2;
// const arr = new Array();

// for (let i = 0; i < 10; i++) {
//   arr.push("x");
// }
// console.log(arr);

// const arr = new Array();

// let num = 0;
// while (num < arr.length) {
//   arr.push("x");
//   num++;
// }
// console.log(arr);
3;
// const arr = [5, 3, 1, 2, 7];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

4;

// let arr = [5, 2, 1, 2];
// let result = 1;
// for (let i of arr) {
//   console.log(i * i);
// }

// for (let i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }

// console.log(result);

5;
// for (let i = 0; i < 100; i = i + 2) {
//   console.log(i);
// }

6;
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum);

7;
// const arr = [2, 4, 5, 6, 8];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }

// console.log(result);

8;
// const arr = [3, 4, 6, 12, 3, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

9;
// const arr = [1, 3, 5, -7, -4, 9, -6, 2, -45, 12, -36];

// const Array = arr.filter((el) => {
//   return el > 0;
// });

// const Array1 = Array.reduce((acc, el) => {
//   return acc + el;
// });

// console.log(Array1);

10;
// const arr = [5, 1, 3, 7, 6, 15, 3, 20];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log("Есть");
//   }
// }

11;
// const arr = [10, 20, 30, 40, 135, 2000];

// function fun(arr) {
//   return arr.map((el) => {
//     return el.join("");
//   });
// }
// console.log(fun(arr));
// for (let i of arr) {
//   if (i === 1 || i === 2 || i[0] === 5) {

//   }
// }

// function num(arr) {
//   return arr.filter((el) => {
//     return el[0] === 1 || el[0] === 2;
//   });
// }

// console.log(num(arr));

// 12;
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].join("" + "-"));
// }

// 13;
// const number = 1000;
// let res = 0;
// for (let i = 1000; i < 50; i--) {
//   if (i % 2 === 0) {
//     res += 1;
//   }
// }
// console.log(res);

// const n = 1000;
// let num = 0;

// for (let i = 0; i <= n; i++) {
//   if (n <= 50) {
//     break;
//   }
//   n = n / 2;
//   num++;

//   console.log(num);
// }
14;
// const arr = [1, 2, 3, 7, 6, 9];

// function num(arr) {
//   return arr.reduce((acc, el) => {
//     return (acc + el) / arr.length;
//   });
// }

// console.log(num(arr));

15;

// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

16;
// const arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

17;
// const arr = [];

// for (let i = 0; i < 10; i++) {
//   arr[i] = Math.round(Math.random() * 10);
// }

// console.log(arr);

18;
// let num = 1000;
// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

19;
// const arr = [
//   2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0 && arr[i] > 10) {
//     console.log(arr[i]);
//   }
// }

20;
// const str = ["jzvzszrzpz"];

// function f(str) {
// //   const strSplited = str.map((el) => {
// //     return el.split("");
// //   });

// //   return strSplited.map((el) => {
// //     const strChanged = el.map((item, index) => {
// //       if (index % 2 === 0) {
// //         return item.toUpperCase();
// //       }

// //       return item.toLowerCase();
// //     });

// //     return strChanged.join("");
// //   });
// }

// function f(str) {
//   const array = [];

//   for (let i = 0; i < str.length; i++) {
//     const a = str[i].split("");
//     const b = [];

//     for (let j = 0; j < a.length; j++) {
//       if (j % 2 === 0) {
//         b.push(a[j].toUpperCase());
//       } else {
//         b.push(a[j].toLowerCase());
//       }
//     }
//     array.push(b.join(""));
//   }

//   return array;
// }

// console.log(f(str));

//
////////////////////////////////////////////////////////////////

// let arr = [22, 33, 55, 77, 3, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let res = 0;
// let arr = [4, 5, 3, 0, 5, 0, 0, 0, 4, 4, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     res += 1;
//   }
// }
// console.log(res);

// for (let i = 1; i <= 55; i++) {
//   console.log(i);
// }
// for (let i = 55; i > 0; i--) {
//   console.log(i);
// }

//
// let res = [];
// for (let i = 1; i <= 7; i++) {
//   res += "#";
//   console.log(res);
// }

// let arr = "HelloWorld";
// let res = 0;
// for (let i of arr) {
//   res += 1;
// }
// console.log(res);

// let arr = [22, 33, 55, 77, 3, 5];

// for (let i of arr) {
//   console.log(i ** 2);
// }

//////////////////////////////////////////////////////
// let num = 1;
// while (num < 100) {
//   console.log(num);
//   num++;
// }

// let num = 0;
// while (num < 100) {
//   if (num % 2 === 0) console.log(num);
//   num++;
// }

// let num = 1;
// let res = 0;
// while (num < 100) {
//   res += num;
//   num++;
// }
// console.log(res);

// const arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);

// let obj = { Kolya: "200", Vasya: "300", Petya: "400" };

// for (let key in obj) {
//   console.log(key);
// }

// for (let key in obj) {
//   console.log(obj[key]);
// }

// for (let key in obj) {
//   console.log(key + "- salary" + obj[key] + "dollars");
// }

// const arr = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thurday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const a = 10;
// const b = 3;
// console.log(a % b);

// const a = 10;
// const b = 4;
// if (a % b === 0) {
//   console.log("Делится");
// } else if (a % b) {
//   console.log(`Делится с остатком: ${a % b}`);
// }

// const a = 2;
// const b = 10;
// console.log(Math.pow(2, 10));

// const a = 245;
// console.log(Math.sqrt(a));

// const arr = [4, 2, 5, 19, 13, 0, 10];
// let res = 0;

// for (let i = 0; i < arr.length; i++) {
//   res += Math.pow(arr[i], 3);
// }

// console.log(Math.sqrt(res));

// const num = 379;
// let a = Math.sqrt(num);
// console.log(a);
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.fround(a));

// const num = 587;
// let a = Math.sqrt(num);
// // console.log(a);
// console.log(Math.ceil(a));
// console.log(Math.floor(a));

// const num = (4, -2, 5, 19, -130, 0, 10);
// console.log(Math.max(num));
// console.log(Math.min(num));

// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr[i] = Math.round(Math.random() * 10);
// }
// console.log(arr);

// const str = "Я-учу-javascript!";
// console.log(str.replace(/-/g, "!"));

// const str = "Я учу javascript!";
// console.log(str.substring(1, 5));
// console.log(str.substr(1, 4));
// console.log(str.slice(1, 5));

// const str = "Я учу javascript!";
// const arr = split(``);
// console.log(str);

// const names = ["Anna", "Bekjan", "Aziza", "Jonn", "Dwd"];

// function getPalindromeName(names) {
//   const arr = [];

//   return names.filter((name) => {
//     const palindromeName = name.split("").reverse().join("");

//     return name.toLowerCase() === palindromeName.toLowerCase();
//   });

//   for (let i = 0; i < names.length; i++) {
//     const palindromeName = names[i].split("").reverse().join("");

//     if (names[i].toLowerCase() === palindromeName.toLowerCase()) {
//       arr.push(names[i]);
//     }
//   }

//   return arr;
// }

// console.log(getPalindromeName(names));

// function lowerArr(names) {
//   const arr1 = [];

//   for (let i = 0; i < names.length; i++) {
//     const changedArr = names[i].split("");
//     const a = [];

//     for (let j = 0; j < changedArr.length; j++) {
//       if (j % 2 === 0) {
//         a.push(changedArr[j].toUpperCase());
//       } else {
//         a.push(changedArr[j].toLowerCase());
//       }
//     }

//     arr1.push(a.join(""));
//   }

//   return arr1;
// }

// const arr = ["Anna", "Bekjan", "Aziza", "Jonn", "Dwd"];

// console.log(lowerArr(arr));

// const arr = [];

// for (let i = 1; i < 50; i++) {}
// console.log(arr[i]);

// const arr = ["fadASda", "sjKlSsaH ", "aklAsDsAp"];

// function f(arr) {
//   const arr1 = [];

//   for (let i = 0; i < arr.length; i++) {

//     const arr2 = [];
//     const arr3 = [];

//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === arr[i][j].toUpperCase()) {
//         arr2.push(arr[i][j]);
//       } else {
//         arr3.push(arr[i][j]);
//       }
//     }

//     arr1.concat(arr2, arr3);
//   }

//   return arr1;
// }

// console.log(f(arr));

// const arr = ["fadASda", "sjKlSsaH", "aklAsDsAp"];

// function f(arr) {
//   const arr1 = [];

//   for (let i = 0; i < arr.length; i++) {
//     const str = "";
//     const str1 = "";
//     const str2 = "";

//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === arr[i][j].toUpperCase()) {
//         str1 = str1 + arr[i][j];
//       } else {
//         str2 = str2 + arr[i][j];
//       }
//     }
//     str = str1 + str2;

//     arr1.push(str.trim());
//   }

//   return arr1;
// }

// console.log(f(arr));

// const str = "abcd";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// function addItemInArray(arr) {
//   const newArr = [...arr];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(i);
//   }
//   return newArr;
// }

// const arr = [1, 2, 3, 4];

// console.log(addItemInArray(arr));

// function search(users, name) {
//   const oneSearch = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i] === name) {
//       oneSearch.push(name);
//     }
//   }
//   return oneSearch;

// return users.find((el) => {
//   if (el === name) {
//     return el;
//     } else {
//       return 0;
//   }
// });
// }

// const users = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "David",
//   "Emily",
//   "Frank",
//   "Grace",
//   "Henry",
//   "Isabella",
//   "Jack",
//   "Kate",
//   "Liam",
//   "Mia",
//   "Noah",
//   "Olivia",
//   "Patrick",
//   "Quinn",
//   "Rachel",
//   "Samuel",
//   "Taylor",
// ];

// console.log(search(users, "Rachel"));

// const num = 3;
// let sum = 0;
// for (let i = 0; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);

// let str = "Hello";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     res += str[i];
//   }
// }
// console.log(res);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i of matrix) {
//   for (let j of i) {
//     console.log(j);
//   }
// }

// const arr = [2, 4, 6, 8];
// let res = 1;
// for (let i of arr) {
//   res *= i;
// }
// console.log(res);

// function findMaxNumber(numbers) {
//   let maxNumber = numbers.reduce((acc, el) => {
//     if (el < acc) {
//       return acc;
//     }

//     return el;
//   });
//   return maxNumber;
// }
// console.log(findMaxNumber([1, 2, 3, 4, 1000, 6, 8]));

// function checktask(arr) {
//   let sum = 0;

//   for (const num of arr) {
//     if (num === 0) {
//       break;
//     }
//     sum += num;
//   }
//   return sum;
// }
// console.log(checktask([4, 6, 2, 5, 45, 0, 45, 78, 98]));

// let person = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42,
// };

// function sumAge(person) {
//   let sum = 0;

//   for (let age of Object.values(person)) {
//     sum += age;
//   }

//   return sum;
// }
// console.log(sumAge(person));
///////////////////////////////////////////////////////////////////////
1;
// const car = {
//   message: "Вы заведили эту машину - ",
//   start: function (model) {
//     return this.message + model;
//   },
// };
// console.log(car.start("Toyota"));

2;
// const person = {
//   name: "Adinai",
//   greet: function () {
//     return this.name;
//   },
// };
// console.log(`Hello ${person.greet()}`);

3;
// const calculator = {
//   multiply: function (a, b) {
//     return a * b;
//   },
//   add: function (c, d) {
//     return c + d;
//   },
// };
// console.log(calculator.multiply(3, 5));
// console.log(calculator.add(3, 5));

4;
// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };
// function printFullName() {
//   return this.firstName + " " + this.lastName;
// }
// console.log(printFullName.apply(person));

// function foo(name) {
//   return function (age) {
//     return function (job) {
//       `My name is ${name}, age: ${age}, job: ${job}`;
//     };
//   };
// }

// const a = foo("Askar", 18);

// console.log(a("Lawyer"));

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const increment = counter();

// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// const users = (users) => {
//   return (user) => {
//     return users.includes(user);
//   };
// };

// const finduser = users(["Adinai", "Ayana", "Bekjan", "Amantur"]);

// console.log(finduser("Adinai"));

// const myMoney = (myMoney) => {
//   const rand = Math.floor(Math.random() * myMoney.length);

//   return (sum) => {
//   const res2 = [];

//   while (true){
//     const randSum = myMoney[rand]
//   }

//   };
// };

// const money = myMoney([
//   1, 3, 5, 5, 5, 5, 10, 20, 100, 20, 50, 200, 500, 200, 20, 5, 1, 3, 1, 50, 20,
//   100,
// ]);

// console.log(money(10));

//////////////////////////////////////////
// recursion

// function foo(a) {
//   if (a > 1000) {
//     return a;
//   } else {
//     return foo(a * 2);
//   }
// }
// console.log(foo(100));

// function arr(numbers) {
//   const rand = Math.floor(Math.random() * 100) + 1;
//   let sum = numbers.reduce((acc, el) => acc + el, 0);

//   if (sum > 1000) {
//     return sum;
//   }
//     return arr([...numbers, rand]);
//
// }

// console.log(
//   arr([10, 15, 20, 25, 30, 35, 40, 45, 50, 13, 67, 45, 86, 34, 56, 89, 90])
// );

1;
// function factorial(number) {
//   if (number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }

// console.log(factorial(6));

2;
// function sumTo(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n + sumTo(n - 1);
// }

// console.log(sumTo(100));

// function foo(numbers) {
//   if (!numbers.length) {
//     return 0;
//   }
//   return numbers[0] + foo(numbers.slice(1));
// }

// console.log(foo([10, 20, 30, 40, 50]));

3;
// function findMaxNumber(number) {
//   if (number.length === 1) {
//     return number[0];
//   }

//   const a = findMaxNumber(number.slice(1));

//   return a > number[0] ? a : number[0];
// }

// console.log(findMaxNumber([0, 4, 7, 9, 78, 23, -89, -45, 90, 31, 97]));

4;
// function findMinNumber(number) {
//   if (number.length === 1) {
//     return number[0];
//   }

//   const a = findMinNumber(number.slice(1));

//   return a < number[0] ? a : number[0];
// }

// console.log(findMinNumber([0, 4, 7, 9, 78, 23, -89, -45, 90, 31, 97]));

5;
// function reverseString(str) {
//   if (str.length === 1) {
//     return str;
//   } else {
//     return reverseString(str.slice(1)) + str[0];
//   }
// }

// console.log(reverseString("Hello World"));

6;
// function strPalindrome(str) {
//   const names = str.toLowerCase();
//   if (names.length <= 1) {
//     return true;
//   }
//   if (names[0] !== names[names.length - 1]) {
//     return false;
//   }
//   return strPalindrome(names.slice(1, -1));
// }
// console.log(strPalindrome("Anna"));

7;
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(4));

8;
// function pow(x, y) {
//   if (y === 1) {
//     return x;
//   } else {
//     return x * pow(x, y - 1);
//   }
// }
// console.log(pow(3, 4));

9;
// function commonDivider(a, b) {
//   if (!b) return a;
//   return commonDivider(b, a % b);
// }

// console.log(commonDivider(25, 20));

10;
// function primeNumber(n) {
//   if (n > 1) {
//     return n;
//   } else {
//     return primeNumber(n);
//   }
// }

// console.log(primeNumber());

11;
// function evenNumber(n) {
//   if (n > 0) {
//     return n;
//   } else {
//     return evenNumber(n % 2 );
//   }
// }

// console.log(evenNumber(4));
