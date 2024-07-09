//Aray
let marks = [100 , 95 , 85 , 94 , 98 , 92];
console.log(marks);
console.log(marks.length);

//Array Indices
let friends = ["shivam" , "satyam" , "suraj" , "om" , "riya" , "Rishi" , "karan"];
console.log(friends);
console.log(friends[5] + " " + friends[6]);

//Looping Over Array
for(let name of friends){
    console.log(name);
}

for(let idx = 0 ; idx < friends.length ; idx++){
    console.log(friends[idx]);
}

//Prca Que.
let marks1 = [100 , 90 , 80 , 70 , 60];

let sum = 0;
for(let i = 0 ; i < marks1.length ; i++){
    sum += marks1[i];
}

console.log(sum / marks1.length);

//Array Methods
let numbers = ["1" , "2" , "3" , "4"];
numbers.push("5" , "6" , "7");
console.log(numbers);

numbers.pop();
console.log(numbers);

let marks2 = marks1.toString();
console.log(marks2);

let arr = [1 , 2 , 3 , 4 , 5];
arr.splice(2 , 2 , 10 , 20);
console.log(arr);