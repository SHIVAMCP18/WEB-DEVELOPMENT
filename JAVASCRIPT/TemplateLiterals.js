var name = "shivam";
console.log(name[0]);

var b = "shivam patel";
console.log(b[7]);

//UpperCase & LowerCase
console.log(name.length);
console.log(name.toUpperCase());

let c = "SATYAM";
console.log(c.toLowerCase());

//Trim
const d = "     HELLO!!!";
console.log(d.trim());
console.log(d.trimStart());

const e = "    HELLO    ";
console.log(e.trimEnd());

//includes
console.log(b.includes("patel"));
console.log(b.includes("hs"));

//indexof
console.log(name.indexOf("s"));
console.log(name.indexOf("satyam"));

//replace
let fruit = "mango";
let fruit1 = fruit.replace(fruit , "Apple");
console.log(fruit1);

let fullname = "shivam patel";
let fullname1 = fullname.replace("shivam" , "satyam");
console.log(fullname1);

//concact
let message = "HELLO WORLD!";
let finalMessage = "HI , I AM SHIVAM.";
console.log(message.concat(finalMessage));
console.log(message.concat(", " , finalMessage));

//padstart
let phonenumber = "098";
console.log(phonenumber.padStart(10,"0"));  

//charat
var ch = "Book";
console.log(ch.charAt(3));

//charcodeat
console.log(ch.charCodeAt(0));

//split
let x = "my name is shivam";
console.log(x.split());
console.log(x.split(' '));

let rollno = "319";
let studentinfo = `my rollno is ${rollno}`;
console.log(studentinfo);