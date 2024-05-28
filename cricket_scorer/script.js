let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let frame = document.querySelector("#frame");

let value = ["new_match.html","teams.html","history.html"];
let box = [box1,box2,box3];

box1.addEventListener("click",()=>{frame.setAttribute("src",value[0])});
box2.addEventListener("click",()=>{frame.setAttribute("src",value[1])});
box3.addEventListener("click",()=>{frame.setAttribute("src",value[2])});

let bgColor = () => {
    if(frame.getAttribute("src") === value[0]){
        box1.style.backgroundColor = "#ff7200";
        box1.children[0].style.backgroundColor = "#ff7200";
        box2.style.backgroundColor = "white";
        box2.children[0].style.backgroundColor = "white";
        box3.style.backgroundColor = "white";
        box3.children[0].style.backgroundColor = "white";
    }else if(frame.getAttribute("src") === value[1]){
        box2.style.backgroundColor = "#ff7200";
        box2.children[0].style.backgroundColor = "#ff7200";
        box1.style.backgroundColor = "white";
        box1.children[0].style.backgroundColor = "white";
        box3.style.backgroundColor = "white";
        box3.children[0].style.backgroundColor = "white";
    }else if(frame.getAttribute("src") === value[2]){
        box3.style.backgroundColor = "#ff7200";
        box3.children[0].style.backgroundColor = "#ff7200";
        box2.style.backgroundColor = "white";
        box2.children[0].style.backgroundColor = "white";
        box1.style.backgroundColor = "white";
        box1.children[0].style.backgroundColor = "white";
    }
}
box1.addEventListener("click",bgColor);
box2.addEventListener("click",bgColor);
box3.addEventListener("click",bgColor);
// ---------------------------------------------------------------------------------------------------------------