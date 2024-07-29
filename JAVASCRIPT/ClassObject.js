
//Objects
const student = {
    fullName : "shivam patel",
    marks : 100,
    printMarks : function () {
        console.log("marks= " , this.marks);
    }
};

const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },
    calcTax2 : function () {
        console.log("tax rate is 10%");
    }
};

const karanArjun = {
    salary : 100000,
};

karanArjun.__proto__ = employee;


//Class

class ToyotaCar {
    constructor(brand , mileage) {
        this.brand = brand;
        console.log("creating " + brand + " object");
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand){
        this.brandaName = brand;
    }
};

let fortuner = new ToyotaCar("fortuner" , 15);
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus" , 15);

class Parent {
    hello() {
        console.log("hello");
    }
};

class Child extends Parent {

};

let obj = new Child();

class Person {
    constructor() {
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
};

class Engineer extends Person{
    constructor(branch) {
        super();
        this.branch = branch;
    }
    work() {
        console.log("solve problem, build something");
    }
};

let shivamObj = new Engineer();

let engObj = new Engineer("chemical eng");

//problem1
class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("website data");
    }
}

let student1 = new User("shivam" , "abc@email.com");
