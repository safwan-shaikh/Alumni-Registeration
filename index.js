var form = document.getElementById("myform")
var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var email = document.getElementById("email")
var addre = document.getElementById("addre")
var passout = document.getElementById("passout")
var profession = document.getElementById("profession")
var day = document.getElementById("day")
var month = document.getElementById("month")
var year = document.getElementById("year")
var city = document.getElementById("city")
var state = document.getElementById("state")
var pincode = document.getElementById("pincode")
var phno = document.getElementById("phno")
function validate() {
  
    if (firstname.value == "" || lastname.value == "" || email.value == "" || address.value == "" || passout.value == "" || profession.value == "" || day.value == "")
        alert("No blank values allowed");
    else if (phone.value = "" || month.value == "" || year.value == "" || city.value == "" || state.value == "" || pincode.value == "")
        alert("No blank values allowed");

        var phoneRegex = /^[0-9]{10}$/; // regular expression to validate phone number
        var phone = phno.value;

        if (!phone.match(phoneRegex)) {
            // if phone number is not valid, show error message and prevent form submission
            document.getElementById("phoneError").innerHTML = "Invalid phone number";
            return false;
        }
       
    // navigate to the message.html page with the first name and last name as URL parameters
    window.location.href = `message.html?firstName=${firstName}&lastName=${lastName}&addre=${addre}&email=${email}&passout=${passout}&phno=${phno}&profession=${profession}&day=${day}&month=${month}&year=${year}&city=${city}&state=${state}&pincode=${pincode}`;

}

    

