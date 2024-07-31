// const print = () => {
//     console.log("hello world!!");
// }

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello shivam!!");
// } , 2000);                           // timeout; 2s = 2000 ms;


// console.log("three");

// console.log("four");

// function sum(a , b){
//     console.log(a + b);
// }

// function calculator(a , b , sumCallback) {
//     sumCallback(a , b);   
// }

// calculator(1 , 2 , sum);

//nesting
// let age = 19;
// if(age >= 18) {
//     if(age >= 60) {
//         console.log("senior");
//     }
//     else {
//         console.log("junior");
//     }
// }
// else{
//     console.log("child");
// }

// for(let i = 0 ; i < 5 ; i++){
//     let str = "";
//     for(let j = 0 ; j < 5 ; j++){
//         str += j;
//     }
//     console.log(str);
// }

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data" , dataId);
//     } , 2000);
// }


// function getData(dataId , getNextData) {
//     setTimeout(() => {
//         console.log("data" , dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }


// //CallBack Hell
// getData(1 , () => {
//     getData(2 , () => {
//         getData(3 , () => {
//             getData(4);
//         });
//     });
// });


// let promise = new Promise((resolve , reject) => {
//     console.log("i am a promise");
//     // resolve("success");
//     reject("failed");
// });

// function getData(dataId , getNextData) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log("data" , dataId);
//             resolve("success");
//             if(getNextData) {
//                 getNextData();
//             }
//         } , 3000);
//     });
// };

// const getPromise = () => {
//     return new Promise((resolve , reject) => {
//         console.log("i am promise");
//         // resolve("success");
//         reject("failed");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// })

// promise.catch((err) => {
//     console.log("rejected" , err);
// })

function AsyncFunc1() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("hello1");
            resolve("success1");
        }, 4000);
    });
};

function AsyncFunc2() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("hello2");
            resolve("success2");
        }, 4000);
    });
};

console.log("fetching data1");
let p1 = AsyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2");
    let p2 = AsyncFunc2();
    p2.then((res) => {
        console.log(res);
    })
});

// console.log("fetching data2");
// let p2 = AsyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });