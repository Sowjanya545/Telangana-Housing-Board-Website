let slideIndex = 0;

window.addEventListener("load", function () {

    let slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;

    // ✔️ SHOW FIRST IMAGE IMMEDIATELY (FIX for banner1 issue)
    slides[0].style.display = "block";

    function showSlides() {

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slides[slideIndex].style.display = "block";
    }

    setInterval(showSlides, 3000);
});

// Welcome Message

window.addEventListener("load", function () {
    console.log("Welcome to Telangana Housing Board");
});

// Read More Button
function showMessage() {
    alert("Welcome to Telangana Housing Board Website.");
}
// Search Function
function searchWebsite() {

    let searchBox = document.getElementById("search");

    if (!searchBox) return;

    let value = searchBox.value.trim();

    if (value === "") {
        alert("Please enter a keyword.");
    } else {
        alert("Searching for : " + value);
    }
}

// Scroll to Top

function topPage() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// Contact Form

function submitForm(event) {
    if (event) event.preventDefault();

    alert("Your details have been submitted successfully.");
    return false;
}


// Login Validation
function validateLogin(event) {
    if (event) event.preventDefault();

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (!username || !password) return false;

    if (username.value === "admin" && password.value === "admin123") {
        alert("Login Successful");
        window.location.href = "index.html";
    } else {
        alert("Invalid Username or Password");
    }

    return false;
}