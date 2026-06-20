/*
Name: Ashish Ali
Date Created: 6/13/26 
Date Modified: 6/19/26
Purpose: Homework 1 javascript file
*/ 

const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
let output = document.getElementById("range_slider");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}