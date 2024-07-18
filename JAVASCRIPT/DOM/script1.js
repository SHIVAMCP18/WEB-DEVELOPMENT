let div1 = document.querySelector("div");
console.log(div1);
console.dir(div1);

let id1 = div1.getAttribute("id");
console.log(id1);

let id2 = div1.getAttribute("name");
console.log(id2);

let para1 = document.querySelector("p");
console.log(para1.setAttribute("class" , "para2"));

para1.style.color = "red";
para1.innerHTML = "hello";

let newBtn = document.createElement("button");
newBtn.innerText = "click me";

let div = document.querySelector("div");
div.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi , I am new!</i>";

document.querySelector("body").prepend(newHeading);

let par = document.querySelector("p");
par.remove();