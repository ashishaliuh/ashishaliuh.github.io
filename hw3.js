/*
Name: Ashish Ali
Date Created: 6/29/26 
Date Modified: 7/4/26
Purpose: Homework 3 javascript file
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

function validateFname() {
    fname = document.getElementById("fName").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if(fname == "") {
        document.getElementById("fNameError").innerHTML = "First name field cannot be empty.";
        return false;
    }
    
    else if(!fname.match(namePattern)) {
        document.getElementById("fNameError").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    }

    else {
        document.getElementById("fNameError").innerHTML = "";
        return true;
    }
}

function validateMi() {
    let mi = document.getElementById("mi").value;
    const namePattern = /^[A-Z]$/;

    mi = mi.toUpperCase();
    document.getElementById("mi").value = mi;
    
    if(mi === "") {
        document.getElementById("miError").innerHTML = "";
        return true;        
    }

    if(!mi.match(namePattern)) {
        document.getElementById("miError").innerHTML = "One letter only.";
        return false;
    }

    else {
        document.getElementById("miError").innerHTML = "";
        return true;
    }
}

function validateLname() {
    lname = document.getElementById("lName").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if(lname == "") {
        document.getElementById("lNameError").innerHTML = "Last name field cannot be empty.";
        return false;
    }
    
    else if(!lname.match(namePattern)) {
        document.getElementById("lNameError").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    }

    else {
        document.getElementById("lNameError").innerHTML = "";
        return true;
    }
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
    let ssn = ssnInput.value.replace(/\D/g, "");

    if (ssn.length != 9) {
        if (ssn.length == 0) {
            document.getElementById("ssnError").innerHTML = "Social Security Number cannot be left blank.";
        }
        else {
            document.getElementById("ssnError").innerHTML = "Please enter exactly 9 digits.";
        }
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

if (ad1 == "") {
    document.getElementById("address1Error").innerHTML = "Address field cannot be empty.";
    return false;
}
    
    
else if(ad1.length < 2) {
    document.getElementById("address1Error").innerHTML = "Please enter a valid address.";
    return false;
} 
else {
    document.getElementById("address1Error").innerHTML = "";
    return true;
    }
}

function validateCity() {
    city = document.getElementById("city").value.trim();

    if(city == "") {
        document.getElementById("cityError").innerHTML = "City field cannot be empty.";
        return false;
    }

    else if(city.length < 2) {
        document.getElementById("cityError").innerHTML = "Please enter a valid city name.";
        return false;
    }
    else {
        document.getElementById("cityError").innerHTML = "";
        return true;
    }
}

function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g,"") 
    
    if(zip.length == 0) {
        document.getElementById("zipError").innerHTML = "Zip code cannot be left blank."; 
        return false;
        }
    else if(zip.length > 0 && zip.length < 5) {
        document.getElementById("zipError").innerHTML = "Please enter a valid zip code.";
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

    if(phone.length == 0) {
        document.getElementById("phoneError").innerHTML = "Phone number cannot be left blank.";
        return false;
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

    let regex = /^[A-Za-z][A-Za-z0-9_-]*$/;
    if (!regex.test(uname)) {
        document.getElementById("unameError").innerHTML = "Username can only contain letters, numbers, or underscores."; 
        return false;
    }

    else if(uname.length < 5) {
        document.getElementById("unameError").innerHTML = "Username must be at least 5 characters.";
        return false;
    }

    else if(uname.length > 20) {
        document.getElementById("unameError").innerHTML = "Username cannot exceed 20 characters.";
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

    if (errorMessage.length > 0) {
    return false;
    }

    return true;
}

function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con-pword").value;

    if(pword1 != pword2) {
        document.getElementById("conPwordError").innerHTML = "Passwords do not match.";
        return false;  
    }

    else {
        document.getElementById("conPwordError").innerHTML = "";
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
                let status = "";

                switch (formcontent.elements[i].id) {
                    case "fName":
                        status = validateFname() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "mi":
                        status = validateMi() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "lName":
                        status = validateLname() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "dob":
                        status = validateDob() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "ssn":
                        status = validateSsn() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "address1":
                        status = validateAddress1() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "city":
                        status = validateCity() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "zip":
                        status = validateZip() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "phone":
                        status = validatePhone() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "email":
                        status = validateEmail() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "uName":
                        status = validateUname() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "pword":
                        status = validatePword() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    case "con-pword":
                        status = confirmPword() ? "<span class='valid'>Valid</span>" : "<span class='invalid'>Invalid</span>";
                        break;

                    default:
                        status = "";
    }

    formoutput += "<tr>";
    formoutput += "<td align='right'>" + formcontent.elements[i].name + "</td>";
    formoutput += "<td class='output'>" + formcontent.elements[i].value + "</td>";
    formoutput += "<td class='output'>" + status + "</td></tr>";
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


function validateData() {
    let valid = true;

    if(validateFname() == false) {
        valid = false;
    }

    if(validateMi() == false) {
        valid = false;
    }

    if(validateLname() == false) {
        valid = false;
    }

    if(validateDob() == false) {
        valid = false;
    }

    if(validateSsn() == false) {
        valid = false;
    }

    if(validateAddress1() == false) {
        valid = false;
    }

    if(validateCity() == false) {
        valid = false;
    }

    if(validateZip() == false) {
        valid = false;
    }

    if(validatePhone() == false) {
        valid = false;
    }

    if(validateEmail() == false) {
        valid = false;
    }

    if(validateUname() == false) {
        valid = false;
    }

    if(validatePword() == false) {
        valid = false;
    }

    if(confirmPword() == false) {
        valid = false;
    }

    const submitButton = document.getElementById("submit");

    if(valid) {
        document.getElementById("submit").disabled = false;
    }

    else {
        submitButton.disabled = true;
    }
}