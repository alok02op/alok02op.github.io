// Selecting elements:
let indicator = document.querySelector(".indicator");
let menu_items = document.querySelectorAll(".menu_items");
let msg_container = document.querySelector(".msg_container");
let circular_slider = document.querySelector(".circular-slider");
let section = document.querySelector(".section");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let box = document.querySelector(".box");
let reset = document.querySelector("#reset");

const angle = [0,-60,-120,-180,-240,-300];
const angle2 = [0,-60,-120,180,120,60];
const colors = [ 
    "radial-gradient(#a74255, #440412)",
    "radial-gradient(#ff4b5f, #a40b16)",
    "radial-gradient(#fbd76d, #f08a00)",
    "radial-gradient(#849ade, #42395f)",
    "radial-gradient(#e7ad59, #883e2a)",
    "radial-gradient(#a75355, #441512)"
    ];

menu_items.forEach((item,i) => {
    let value = `translate(-37%,-38%) rotate(${angle[i]}deg)`;
    let message = "";
    if(i==0){
      message = "<h2>MONDAY</h2>\n<p>\nWORKING DAY <br> Free periods are from 8 to 10 am.\n</p>";
    }else if(i==1){
        message = "<h2>TUESDAY</h2>\n<p>\nWORKING DAY <br> Free periods are from 8 to 10 am and 2 to 3 pm.\n</p>";
    }else if (i==2){
        message = "<h2>WEDNESDAY</h2>\n<p>\nWORKING DAY <br> Free periods are from 8 to 9 am.\n</p>";
    }else if (i==3){
        message = "<h2>THURSDAY</h2>\n<p>\nWORKING DAY <br> Free periods are from 8 to 9 am and 2 to 3 pm.\n</p>";
    }else if (i==4){
        message = "<h2>FRIDAY</h2>\n<p>\nWORKING DAY <br> Free periods are from 8 to 9 am and 3 to 4 pm.\n</p>";
    }else {
        message = "<h2>SATURDAY</h2>\n<p>\nFree day <br> Free periods are from 8 am to 6 pm.\n</p>";
    }
    
    item.addEventListener("click",() => {
        indicator.style.transform = value;
        indicator.style.transition = "all 300ms linear 1ms";
        msg_container.innerHTML = message;
        circular_slider.style.background = colors[i];
        msg_container.style.background = colors[i];
        section.style.background = colors[i];
    })
    item.addEventListener("mouseover",() => {
    })
})
let button1_clicked = false;
let button2_clicked = false;
let button3_clicked = false;

function booking(i){
    let free1 = "";let free2="";let free3="";
    if(i==0){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Click to book: 9AM to 10AM";
        free3 = "";
    }else if(i==1){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Click to book: 9AM to 10AM";
        free3 = "Click to book: 2PM to 3PM";
    }else if (i==2){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "";
        free3 = "";
    }else if (i==3){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Click to book: 2PM to 3PM";
        free3 = "";
    }else if (i==4){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Click to book: 3PM to 4PM";
        free3 = "";
    }else if(i==5){
        free1 = "freeDay";
    }
    if(free1!=""){
        if(free2!=""){
            if(free3!=""){
                box.children[0].style.display="block";
                box.children[0].textContent=free1;
                button1.style.display="inline";
                box.children[1].style.display="block";
                box.children[1].textContent=free2;
                button2.style.display="inline";
                box.children[2].style.display="block";
                box.children[2].textContent=free3;
                button3.style.display="inline";
            }else{
                box.children[0].style.display="block";
                box.children[0].textContent=free1;
                button1.style.display="inline";
                box.children[1].style.display="block";
                box.children[1].textContent=free2;
                button2.style.display="inline";
                box.children[2].style.display="none";
                button3.style.display="none";
            }
        }else{
            box.children[0].style.display="block";
            box.children[0].innerText=free1;
            button1.style.display="inline";
            box.children[1].style.display="none";
            button2.style.display="none";
            box.children[2].style.display="none";
            button3.style.display="none";
        }
    }
}
function booking_button1(i){
    let free1 = "";let free2="";let free3="";
    if(i==0){
        free1 = "Booked";
        free2 = "Click to book: 9AM to 10AM";
        free3 = "";
    }else if(i==1){
        free1 = "Booked";
        free2 = "Click to book: 9AM to 10AM";
        free3 = "Click to book: 2PM to 3PM";
    }else if (i==2){
        free1 = "Booked";
        free2 = "";
        free3 = "";
    }else if (i==3){
        free1 = "Booked";
        free2 = "Click to book: 2PM to 3PM";
        free3 = "";
    }else if (i==4){
        free1 = "Booked";
        free2 = "Click to book: 3PM to 4PM";
        free3 = "";
    }else if(i==5){
        free1 = "Booked";
    }
    if(free1!=""){
        if(free2!=""){
            if(free3!=""){
                box.children[0].style.display="block";
                box.children[0].textContent=free1;
                button1.style.display="inline";
                box.children[1].style.display="block";
                box.children[1].textContent=free2;
                button2.style.display="inline";
                box.children[2].style.display="block";
                box.children[2].textContent=free3;
                button3.style.display="inline";
            }else{
                box.children[0].style.display="block";
                box.children[0].textContent=free1;
                button1.style.display="inline";
                box.children[1].style.display="block";
                box.children[1].textContent=free2;
                button2.style.display="inline";
                box.children[2].style.display="none";
                button3.style.display="none";
            }
        }else{
            box.children[0].style.display="block";
            box.children[0].innerText=free1;
            button1.style.display="inline";
            box.children[1].style.display="none";
            button2.style.display="none";
            box.children[2].style.display="none";
            button3.style.display="none";
        }
    }
}
function booking_button2(i){
    let free1 = "";let free2="";let free3="";
    if(i==0){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Booked";
        free3 = "";
    }else if(i==1){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Booked";
        free3 = "Click to book: 2PM to 3PM";
    }else if (i==2){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "";
        free3 = "";
    }else if (i==3){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Booked";
        free3 = "";
    }else if (i==4){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Booked";
        free3 = "";
    }else if(i==5) {
        free1 = "freeDay";
    }
    if(free1!=""){
        if(free2!=""){
            if(free3!=""){
                box.children[0].style.display="block";
                box.children[0].textContent=free1;
                button1.style.display="inline";
                box.children[1].style.display="block";
                box.children[1].textContent=free2;
                button2.style.display="inline";
                box.children[2].style.display="block";
                box.children[2].textContent=free3;
                button3.style.display="inline";
            }else{
                box.children[0].style.display="block";
                box.children[0].textContent=free1;
                button1.style.display="inline";
                box.children[1].style.display="block";
                box.children[1].textContent=free2;
                button2.style.display="inline";
                box.children[2].style.display="none";
                button3.style.display="none";
            }
        }else{
            box.children[0].style.display="block";
            box.children[0].innerText=free1;
            button1.style.display="inline";
            box.children[1].style.display="none";
            button2.style.display="none";
            box.children[2].style.display="none";
            button3.style.display="none";
        }
    }
}
function booking_button3(i){
    let free1 = "";let free2="";let free3="";
    if(i==0){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Click to book: 9AM to 10AM";
        free3 = "";
    }else if(i==1){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Click to book: 9AM to 10AM";
        free3 = "Booked";
    }else if (i==2){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "";
        free3 = "";
    }else if (i==3){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Click to book: 2PM to 3PM";
        free3 = "";
    }else if (i==4){
        free1 = "Click to book: 8AM to 9AM";
        free2 = "Click to book: 3PM to 4PM";
        free3 = "";
    }else if(i==5){
        free1 = "freeDay";
    }
    if(free1!=""){
        if(free2!=""){
            if(free3!=""){
                box.children[0].style.display="block";
                box.children[0].textContent=free1;
                button1.style.display="inline";
                box.children[1].style.display="block";
                box.children[1].textContent=free2;
                button2.style.display="inline";
                box.children[2].style.display="block";
                box.children[2].textContent=free3;
                button3.style.display="inline";
            }else{
                box.children[0].style.display="block";
                box.children[0].textContent=free1;
                button1.style.display="inline";
                box.children[1].style.display="block";
                box.children[1].textContent=free2;
                button2.style.display="inline";
                box.children[2].style.display="none";
                button3.style.display="none";
            }
        }else{
            box.children[0].style.display="block";
            box.children[0].innerText=free1;
            button1.style.display="inline";
            box.children[1].style.display="none";
            button2.style.display="none";
            box.children[2].style.display="none";
            button3.style.display="none";
        }
    }
}
function rotation(){
    let style = getComputedStyle(indicator);
    let transform = style.transform || style.webkitTransform || style.mozTransform;

    if (transform === 'none') {
        var rotationAngle = 0;
    } else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            var matrixValues = matrix[1].split(',');
            var a = matrixValues[0];
            var b = matrixValues[1];
            var rotationAngle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else {
            console.error('Unable to parse transform property: ' + transform);
            var rotationAngle = NaN;
        }
    }
    return rotationAngle;
}
let temp_function1 = () => {booking(0);};
let temp_function2 = () => {booking(1);};
let temp_function3 = () => {booking(2);};
let temp_function4 = () => {booking(3);};
let temp_function5 = () => {booking(4);};
let temp_function6 = () => {booking(5);};
menu_items[0].addEventListener("click",temp_function1);
menu_items[1].addEventListener("click",temp_function2);
menu_items[2].addEventListener("click",temp_function3);
menu_items[3].addEventListener("click",temp_function4);
menu_items[4].addEventListener("click",temp_function5);
menu_items[5].addEventListener("click",temp_function6);


let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}
let book1_function1 = () => {booking_button1(0);};
let book1_function2 = () => {booking_button1(1);};
let book1_function3 = () => {booking_button1(2);};
let book1_function4 = () => {booking_button1(3);};
let book1_function5 = () => {booking_button1(4);};
let book1_function6 = () => {booking_button1(5);};

let book2_function1 = () => {booking_button2(0);};
let book2_function2 = () => {booking_button2(1);};
let book2_function3 = () => {booking_button2(2);};
let book2_function4 = () => {booking_button2(3);};
let book2_function5 = () => {booking_button2(4);};
let book2_function6 = () => {booking_button2(5);};

let book3_function1 = () => {booking_button3(0);};
let book3_function2 = () => {booking_button3(1);};
let book3_function3 = () => {booking_button3(2);};
let book3_function4 = () => {booking_button3(3);};
let book3_function5 = () => {booking_button3(4);};
let book3_function6 = () => {booking_button3(5);};

function fun_button1(){
    const free1="Booked";
    box.children[0].style.display="block";
    box.children[0].textContent=free1;
    let rotationAngle = rotation();
    let temp = ""
    for(i in angle2){
        if(angle2[i]===rotationAngle){
            temp = i;
        }
    }
    if (temp!=""){
        if (temp==0){menu_items[0].removeEventListener("click",temp_function1)};
        if (temp==0){menu_items[0].addEventListener("click",book1_function1)};
        if (temp==1){menu_items[1].removeEventListener("click",temp_function2)};
        if (temp==1){menu_items[1].addEventListener("click",book1_function2)};
        if (temp==2){menu_items[2].removeEventListener("click",temp_function3)};
        if (temp==2){menu_items[2].addEventListener("click",book1_function3)};
        if (temp==3){menu_items[3].removeEventListener("click",temp_function4)};
        if (temp==3){menu_items[3].addEventListener("click",book1_function4)};
        if (temp==4){menu_items[4].removeEventListener("click",temp_function5)};
        if (temp==4){menu_items[4].addEventListener("click",book1_function5)};
        if (temp==5){menu_items[5].removeEventListener("click",temp_function6)};
        if (temp==5){menu_items[5].addEventListener("click",book1_function6)};
    }
    openPopup();
}
function fun_button2(){
    const free2="Booked";
    box.children[1].style.display="block";
    box.children[1].textContent=free2;
    let rotationAngle = rotation();
    let temp = ""
    for(i in angle2){
        if(angle2[i]===rotationAngle){
            temp = i;
        }
    }
    if (temp!=""){
        if (temp==0){menu_items[0].removeEventListener("click",temp_function1)};
        if (temp==0){menu_items[0].addEventListener("click",book2_function1)};
        if (temp==1){menu_items[1].removeEventListener("click",temp_function2)};
        if (temp==1){menu_items[1].addEventListener("click",book2_function2)};
        if (temp==2){menu_items[2].removeEventListener("click",temp_function3)};
        if (temp==2){menu_items[2].addEventListener("click",book2_function3)};
        if (temp==3){menu_items[3].removeEventListener("click",temp_function4)};
        if (temp==3){menu_items[3].addEventListener("click",book2_function4)};
        if (temp==4){menu_items[4].removeEventListener("click",temp_function5)};
        if (temp==4){menu_items[4].addEventListener("click",book2_function5)};
        if (temp==5){menu_items[5].removeEventListener("click",temp_function6)};
        if (temp==5){menu_items[5].addEventListener("click",book2_function6)};
    }
    openPopup();
}
function fun_button3() {
    const free3="Booked";
    box.children[2].style.display="block";
    box.children[2].textContent=free3;
    let rotationAngle = rotation();
    let temp = ""
    for(i in angle2){
        if(angle2[i]===rotationAngle){
            temp = parseInt(i);
        }
    }
    if (temp!=""){
        if (temp==0){menu_items[0].removeEventListener("click",temp_function1)};
        if (temp==0){menu_items[0].addEventListener("click",book3_function1)};
        if (temp==1){menu_items[1].removeEventListener("click",temp_function2)};
        if (temp==1){menu_items[1].addEventListener("click",book3_function2)};
        if (temp==2){menu_items[2].removeEventListener("click",temp_function3)};
        if (temp==2){menu_items[2].addEventListener("click",book3_function3)};
        if (temp==3){menu_items[3].removeEventListener("click",temp_function4)};
        if (temp==3){menu_items[3].addEventListener("click",book3_function4)};
        if (temp==4){menu_items[4].removeEventListener("click",temp_function5)};
        if (temp==4){menu_items[4].addEventListener("click",book3_function5)};
        if (temp==5){menu_items[5].removeEventListener("click",temp_function6)};
        if (temp==5){menu_items[5].addEventListener("click",book3_function6)};
    }
    openPopup();
}
button1.addEventListener("click",fun_button1);
button2.addEventListener("click",fun_button2);
button3.addEventListener("click",fun_button3);

reset.addEventListener("click",() => {
    location.reload();
})
// -----------------------------------------------------------------------------------------------------------------------------