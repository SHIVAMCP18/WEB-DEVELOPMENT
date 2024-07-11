//Print Function
function Print(){
    console.log("HELLO WORLD!!!!");
};

// Print();

//Sum Function
function sum(a , b) {
    return a + b;
};

let total = sum(5 , 2);
console.log(total);

//Multiplication Function
function mul(a , b) {
    return a * b;
};

let price = mul(5 , 2);
console.log(price);


//Arrow Function
const arrowSum  = (a , b) => {
    console.log(a + b);
};

arrowSum(5 , 3);

let arrowMul = (a , b) => {
    return a * b;
};

console.log(arrowMul(1 , 3));

let arr = [1 , 2 , 3 , 4 , 5 , 6];

arr.forEach(function printVal(val) {
    console.log(val);
});

let names = ["shivam" , "satyam" , "gopi" , "milonee"];

names.forEach(function printNames(val , idx , arr) {
    console.log(val.toUpperCase() , idx , arr);
});

arr.forEach((val) => {
    console.log(val ** 2);
});

//Map

let newArr = arr.map((val) => {
    return val;
});

console.log(newArr);

//Filter
let evenArr = arr.filter((val) => {
    return val % 2 == 0;
});

console.log(evenArr);

//Reduce

const output = arr.reduce((prev , curr) => {
    return prev > curr ? prev : curr;
})
console.log(output);

