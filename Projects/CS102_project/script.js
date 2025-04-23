document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let contact = document.querySelector("#contact");
let dropdown = document.querySelector(".dropdown");

contact.addEventListener("mouseover",() => {
    dropdown.style.visibility = "visible";
})
contact.addEventListener("mouseout",() => {
    dropdown.style.visibility = "hidden";
})
dropdown.addEventListener("mouseover",() => {
    dropdown.style.visibility = "visible";
})
dropdown.addEventListener("mouseout",() => {
    dropdown.style.visibility = "hidden";
})

let information = document.querySelectorAll(".information");
let contactInfo = document.querySelectorAll(".contactInfo");
contactInfo.forEach((info,i) => {
    info.addEventListener("mouseover",() => {
        information[i].style.display = "grid";
    })
    info.addEventListener("mouseout",() => {
        information[i].style.display = "none";
    })
})
// -----------------------------------------------------------------------------------
