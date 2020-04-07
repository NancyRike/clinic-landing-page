var button = document.getElementById("bookings")
button.addEventListener("click", toggle_form)
function toggle_form() {
    var toToggle = document.getElementById("for_booking")
    if (toToggle.style.display === "none") {
        toToggle.style.display = "block";
    }
    else {
        toToggle.style.display = "none"
    }
}
let booking = []
var get_details = document.getElementById("to_submit")
get_details.addEventListener("click", toSubmit);
function toSubmit(e) {
    e.preventDefault()
    var pName = document.getElementById("pName").value;
    var pGender = document.getElementById("pGender").value;
    var pAge = document.getElementById("pAge").value;
    var pSpecs = document.getElementById("pSpecs").value;
    var pNumber = document.getElementById("pNumber").value;
    var pSymptom = document.getElementById("pSymptom").value;

    var booking = {pName, pAge, pGender, pSpecs, pSymptom }
    localStorage.setItem('tname', JSON.stringify(booking));
    var booking = JSON.parse(localStorage.getItem("tname"));
    document.getElementById("showAppoint").innerText = `Dear ${booking.pName}`
   document.getElementById("theappoint").innerText = `you  will see a
    consultant in ${booking.pSpecs} please head to the ${booking.pGender} 
consulting room by the left, a nurse awaits you to confirm the reason for your ${booking.pSymptom}`
}
function onDomMount() {
    var booking = JSON.parse(localStorage.getItem("tname"));
    document.getElementById("showAppoint").innerText = `Dear ${booking.pName}`
   document.getElementById("theappoint").innerText = `you  will see a
    consultant in ${booking.pSpecs} please head to the ${booking.pGender} 
consulting room by the left, a nurse awaits you to confirm the reason for your ${booking.pSymptom}`
}

var cancelbutton = document.getElementById("cancelbutton")
    cancelbutton.addEventListener("click", reset)
    function reset(){
        localStorage.clear("tname");
        location.reload()
    }
