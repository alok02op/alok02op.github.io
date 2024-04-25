// Selecting elements
let name = document.querySelector("#name");
let dob_text = document.querySelector("#dob");
let courses = document.querySelector("#courses");
let state = document.querySelector("#state");

let display_age = document.querySelector("#age");
let error = document.querySelectorAll(".error");
let results = document.querySelectorAll(".results");

let calculate_age = document.querySelector("#calculate_age");
let clear = document.querySelector("#clear");
let validate = document.querySelector("#validate");
let calculate_fee = document.querySelector("#calculate_fee");


function validateText(text){
    if(text==="" || text===null){
        return false;
    }else{
        return true;
    }
}

function validateNumber(num_text){
    if(num_text==="" || num_text===null || isNaN(parseInt(num_text))){
        return false;
    }else{
        return true;
    }
}

function validateAge(){
    let age = new Date().getFullYear() - new Date(dob_text.value).getFullYear();
    if(age>1){
        return true;
    }else if(age == 1 && new Date(dob_text.value).getMonth()<=new Date().getMonth()){
        return true;
    }else{
        return false;
    }
}

function calculateAge(){
    let dob = new Date(dob_text.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if(validateAge()){
        display_age.innerText = `Age ${age} years`;
        return age;
    }else{
        alert("Enter a date of birth greater than 1 year");
    }
}


function clickValidate(){
    temp = [validateText(name.value),validateAge(),validateText(state.value),validateNumber(courses.value)];
    message = ["Enter a valid name please!","Choose/enter a valid date please!","Enter a valid state please!","Enter a valid number please!"];
    for(val in temp){
        if(temp[val]){
            error[val].innerText = "Validated";
        }else{
            error[val].innerText = message[val];
        }
    }
}

function clickClear(){
    error.forEach((item) => {
        item.innerText = "";
    })
    results.forEach((item) => {
        item.innerText ="";
    })
    name.value = "";
    dob.value = "";
    state.value= "";
    courses.value = "";
    display_age.innerText = "";
}

function clickCalculate(){
    if (validateText(name.value) && validateAge() && validateNumber(courses.value) && validateText(state.value)){
        if (state.value == "goa" || state.value == "Goa"){
            let tuition_fee = 0.9*1000*courses.value;
            results[0].innerText = `${name.value}(${calculateAge()}y)`;
            results[1].innerText = `Number of courses registered:${courses.value}`;
            results[2].innerText = "10% in-state discount";
            results[3].innerText = `Total tuition due(in rupees):${tuition_fee}`;
        }else{
            let tuition_fee = 1000*courses.value;
            results[0].innerText = `${name.value}(${calculateAge()}y)`;
            results[1].innerText = `Number of courses registered:${courses.value}`;
            results[2].innerText = "No in-state discount";
            results[3].innerText = `Total tuition due(in rupees):${tuition_fee}`;
        }
    }else{
        alert("First Validate your data.");
    }
}

function popuop(){
    temp = [validateText(name.value),validateAge(),validateText(state.value),validateNumber(courses.value)];
    message = ["Enter a valid name","Choose/enter a valid date","Enter a valid state","Enter a valid number"];
    display_message = ""
    for(val in temp){
        if(!temp[val]){
            display_message += `${message[val]}\n`;
        }
    }
    if(display_message != ""){alert(display_message)}
}

clear.addEventListener("click",clickClear);
validate.addEventListener("click",clickValidate);
validate.addEventListener("click",popuop);
calculate_age.addEventListener("click",calculateAge);
calculate_fee.addEventListener("click", clickCalculate);
// --------------------------------------------------------------------------------------------------------------------------------------