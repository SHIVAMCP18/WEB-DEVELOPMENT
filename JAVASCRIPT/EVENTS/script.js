let btn = document.querySelector("#btn");

// btn.onclick = (e) => {
//     console.log("button was clicked again");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX , e.clientY);
// };

let box1 = document.querySelector(".box1");

// box1.onmouseover = () => {
//     console.log("you are inside div");
// };

box1.addEventListener("mouseover" , () => {
    console.log("you are inside div");
});

btn.addEventListener("click" , () => {
    console.log("button was clicked - handler1");
});
btn.addEventListener("click" , () => {
    console.log("button was clicked - handler2");
});
const handler3 = () => {
    console.log("button was clicked - handler3");
}

btn.addEventListener("click" , handler3);

btn.addEventListener("click" , () => {
    console.log("button was clicked - handler4");
});

btn.removeEventListener("click" , handler3);

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click" , () => {
    if(currMode == "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});

