/*
Name: Ashish Ali
Date Created: 6/23/26 
Date Modified: 6/26/26
Purpose: Homework 2 javascript file
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

function validateDob() {
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear()-120); 

    if(date > new Date()) {
        document.getElementById("dobError").innerHTML = "Date cannot be in the future."
        dob.value=""; 
        return false;
    }

    else if(date < new Date (maxDate)) {
    document.getElementById("dobError").innerHTML = "Date cannot be from over 120 years ago."
    dob.value="";
    return false;
    }
    
    else {
        document.getElementById("dobError").innerHTML = "";
        return true;
    }
}

function validateSsn() {
    const ssnInput = document.getElementById("ssn");
    const ssn = ssnInput.value.replace(/\D/g, "");

    if (ssn.length != 9) {
        document.getElementById("ssnError").innerHTML = "Please enter a valid Social Security Number.";
        return false;
    }

    ssnInput.value = ssn.slice(0, 3) + "-" + ssn.slice(3, 5) + "-" + ssn.slice(5);

    document.getElementById("ssnError").innerHTML = "";
    return true;
}

function validateAddress1() {
var ad1 = document.getElementById("address1").value;
console.log(ad1);
console.log(ad1.length);

if(ad1.length < 2) {
    document.getElementById("address1Error").innerHTML = "Please enter something on address line";
    return false;
} 
else {
    document.getElementById("address1Error").innerHTML = "";
    return true;
    }
}

function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g,"") 
    
    if (!zip) {
    document.getElementById ("zipError").innerHTML ="Zip code cannot be left blank.";
    return false;
    }

    if (zip.length > 5) {
    zip = zip.slice(0,5); 
    }

    zipInput.value = zip;
    document.getElementById("zipError").innerHTML = "";
    return true;
}


function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
    if(email == "") {
    document.getElementById("emailError"). innerHTML = "Email cannot be empty.";
    return false;
    } 
    else if (!email.match(emailR)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        return false;
    }
else {
    document.getElementById("emailError").innerHTML = "";
    return true;
    }
}

function validatePhone() {
   const phoneInput = document.getElementById("phone");
   let phone = phoneInput.value.replace(/\D/g, "");

   if (phone.length > 10) {
    phone = phone.slice(0, 10);
}

   if(phone.length !=10) {
       document.getElementById("phoneError").innerHTML = "Please enter a valid phone number.";
       return false;
   }
   const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
   phoneInput.value = formattedPhone;
   document.getElementById("phoneError").innerHTML = "";
   return true;
}

function validateUname() {
    uname = document.getElementById("uName").value;
    uname = uname.toLowerCase();
    document.getElementById("uName").value = uname;

    if(uname.length == 0) {
        document.getElementById("unameError").innerHTML = "Username field cannot be blank.";
        return false;
    }

    if(!isNaN(uname.charAt(0))) {
        document.getElementById("unameError").innerHTML = "Username cannot begin with a number";
        return false;
    }

    let regex = /^[A-Za-z][A-Za-z0-9_]*$/;
    if (!regex.test(uname)) {
        document.getElementById("unameError").innerHTML = "Username can only contain letters, numbers, or underscores."; 
        return false;
    }

    else if(uname.length < 5) {
        document.getElementById("unameError").innerHTML = "Username must be at least 5 characters.";
        return false;
    }

    else if(uname.length > 30) {
        document.getElementById("unameError").innerHTML = "Username cannot exceed 30 characters.";
        return false;
    }
    else {
        document.getElementById("unameError").innerHTML = "";
        return true;
    }
}

function validatePword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uName").value;

    const errorMessage = [];

    if(!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }

    if(!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }

    if(!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }

    if(!pword.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        errorMessage.push("Enter at least one special character");
    }

    if(pword == uname || pword.includes(uname)) {
        errorMessage.push("Password cannot contain username.");
    }

    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
}

function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con-pword").value;

    if(pword1 != pword2) {
        document.getElementById("pwordError").innerHTML = "Passwords do not match.";
        return false;  
    }

    else {
        document.getElementById("pwordError").innerHTML = "Passwords match.";
        return true;
    }
}

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Account Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if(formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch(datatype) {
                case "checkbox":
                if (formcontent.elements[i].checked) {
                    formoutput = formoutput + "<tr> <td align = 'right'>" + formcontent.elements[i].name +  "</td>"
                    formoutput = formoutput + "<td class = 'output'>&#x2713;</td></tr>";
                }
                break;
            case "radio":
                if(formcontent.elements[i].checked) {
                    formoutput = formoutput + "<tr> <td align = 'right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class = 'output'>" + formcontent.elements[i].value + "</td></tr>";
                }
                break;
            case "button":
            case "submit":
            case "reset":
                break;
            default:
                formoutput = formoutput + "<tr><td align = 'right'>" + formcontent.elements[i].name + "</td>";
                formoutput = formoutput + "<td class = 'output'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if(formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

