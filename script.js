const catchlevingFrom = document.getElementById("levingFrom"),
    catchdatePicker = document.getElementById('datePicker'),
    catchgoingTo = document.getElementById("goingTo"),
    catchmainSearchBTN = document.getElementById('mainSearchBTN'),
    catchforValdtLvv = document.getElementById('forValdtLvv'),
    catchvalidategngtwo = document.getElementById("validategngtwo"),
    catchdateVldd = document.getElementById('dateVldd')


// Flatpickr দিয়ে ডেট পিকার অ্যাক্টিভেট করা হচ্ছে
flatpickr("#datePicker", {
    dateFormat: "Y-m-d", // তারিখের ফরম্যাট
    minDate: "today", // আজকের তারিখ থেকে শুরু হবে
    maxDate: new Date().fp_incr(30), // ৩০ দিন পর পর্যন্ত তারিখ বেছে নেওয়া যাবে
});
// Function to validate selections and store data in sessionStorage
function validateSelections() {
    let leavingFrom = catchlevingFrom.value;
    let goingTo = catchgoingTo.value;
    let selectedDate = catchdatePicker.value;

    // Get selected option text
    let leavingFromText = catchlevingFrom.options[catchlevingFrom.selectedIndex].text;
    let goingToText = catchgoingTo.options[catchgoingTo.selectedIndex].text;

    // Validate fields
    if (leavingFrom === "option1") {
        catchforValdtLvv.textContent = "Please select a city";
        catchforValdtLvv.classList.add("text-red-500", "text-sm");
    } else {
        catchforValdtLvv.textContent = ""; // Clear message if valid
    }

    if (goingTo === "option1") {
        catchvalidategngtwo.textContent = "Please select a destination";
        catchvalidategngtwo.classList.add("text-red-500", "text-sm");
    } else {
        catchvalidategngtwo.textContent = ""; // Clear message if valid
    }

    if (!selectedDate) {
        catchdateVldd.textContent = "Please select a date";
        catchdateVldd.classList.add("text-red-500", "text-sm");
    } else {
        catchdateVldd.textContent = ""; // Clear message if valid
    }

    // If all fields are valid, store data in sessionStorage and navigate
    if (leavingFrom !== "option1" && goingTo !== "option1" && selectedDate) {
        // Store data in localStorage instead of sessionStorage
        localStorage.setItem("leavingFrom", leavingFromText); // Store text of selected option
        localStorage.setItem("goingTo", goingToText);         // Store text of selected option
        localStorage.setItem("selectedDate", selectedDate);   // Store selected date

        // Redirect to the seat selection page
        window.location.href = `seat.html`;
    }
}

// Add event listener to the search button
document.getElementById("mainSearchBTN").addEventListener('click', function () {
    validateSelections();
});
