// user inputs
let name = document.getElementById("name");
let dob_input = document.getElementById("birth");
const today = new Date();

let trip_distance = document.getElementById("trip_distance");
let fuel_efficiency = document.getElementById("fuel_efficiency");
let price = document.getElementById("price");

// span tags of summary:
let show_name = document.getElementById("show_name");
let show_age = document.getElementById("show_age");
let show_cost = document.getElementById("show_cost");

// span tags of validate :
let name_validate = document.getElementById("name_validate");
let dob_validate = document.getElementById("dob_validate");
let trip_distance_validate = document.getElementById("trip_distance_validate");
let fuel_efficiency_validate = document.getElementById("fuel_efficiency_validate");
let price_validate = document.getElementById("price_validate");

// buttons:
let age_calculate = document.getElementById("age_calculate");
let reset = document.getElementById("reset");
let validator = document.getElementById("validator");
let calculate = document.getElementById("calculate");



function validateText(text) {
    if (text=="" || text== null){
        return false;
    }else{
        return true;
    }
};
function validateNumber(num_text){
    if (num_text !="" && num_text !== null && parseFloat(num_text)){
        return true;
    }else{
        console.log(parseInt(num_text));
        return false;
    }
};

function calculateAge() {
    let dob = new Date(dob_input.value);
    let age = today.getFullYear() - dob.getFullYear();
    dob_validate.innerHTML = `Age is ${age}`;
}
function validateAge() {
    let dob = new Date(dob_input.value);
    let age = today.getFullYear() - dob.getFullYear();
    if (age == parseInt(age)){
        return true;
    }else {
        return false;
    }
}

function clickValidate(){
    num = [trip_distance.value,fuel_efficiency.value,price.value]
    if (validateNumber(num[0]) && validateNumber(num[1]) && validateNumber(num[2]) && validateText(name.value) && validateAge()){
        trip_distance_validate.innerHTML = "validated";
        fuel_efficiency_validate.innerHTML = "validated";
        price_validate.innerHTML = "validated";
        name_validate.innerHTML = "validated";
        dob_validate.innerHTML = "validated";
        return true
    } else{
        let error = "";
        if (validateText(name.value)==false){
            name_validate.innerHTML = "Enter valid full name";
            error += "Enter valid full name\n\n";
        }else {
            name_validate.innerHTML = "validated";
        }
        if ( validateAge()== false){
            dob_validate.innerHTML = "Enter date of birth";
            error += "Enter date of birth\n\n";
        }else {
            dob_validate.innerHTML = "validated";
        }
        if (validateNumber(num[0])==false){
            trip_distance_validate.innerHTML = "Enter valid trip distance";
            error += "Enter valid trip distance\n\n";
        } else {
            trip_distance_validate.innerHTML = "validated";
        }
        if (validateNumber(num[1])==false){
            fuel_efficiency_validate.innerHTML = "Enter valid fuel efficiency";
            error += "Enter valid fuel efficiency\n\n";
        }else {
            fuel_efficiency_validate.innerHTML = "validated";
        }
        if (validateNumber(num[2])==false){
            price_validate.innerHTML = "Enter valid fuel price";
            error += "Enter valid fuel price\n\n";
        }else {
            price_validate.innerHTML = "validated";
        }
        alert(`VALIDATION FAILED ! \n\n${error}`);
        return false;
    }
}


function clickClear() {
    name.value="";
    dob_input.value = today;
    trip_distance.value = "";
    fuel_efficiency.value = "";
    price.value = "";
    name_validate.innerHTML = ""
        dob_validate.innerHTML = ""
        trip_distance_validate.innerHTML = ""
        fuel_efficiency_validate.innerHTML = ""
        price_validate.innerHTML = ""
        show_name.innerHTML = "";
        show_age.innerHTML = "";
        show_cost.innerHTML = "";
}
function clickCalculate(){
    let distance = parseFloat(trip_distance.value);
    let efficiency = parseFloat(fuel_efficiency.value);
    let fuel_price = parseFloat(price.value);
    // let validate = clickValidate();
    let dob = new Date(dob_input.value);
    let age = today.getFullYear() - dob.getFullYear();

    let fuel_consumption = distance/efficiency;
    let fuel_cost = fuel_consumption*fuel_price;
    
    if (parseFloat(fuel_cost) && validateText(name.value) && validateAge()){
        show_name.innerHTML = `Full Name = ${name.value}`;
        show_age.innerHTML = `Your Age is ${age}\n`;
        show_cost.innerHTML = `Cost of fuel = ${fuel_cost}`;
    }else {
        alert("First, Validate your data!")
    }

}
age_calculate.addEventListener("click",calculateAge);
reset.addEventListener("click",clickClear);
validator.addEventListener("click",clickValidate);
calculate.addEventListener("click",clickCalculate);


// ------------------------------------------------------------------------------------------