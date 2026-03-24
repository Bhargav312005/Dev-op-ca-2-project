const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (validateAll()) {
        alert("Feedback submitted successfully 🚀");
        form.reset();
        clearErrors();
    }
});

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
}

function setError(id, msg) {
    document.getElementById(id).textContent = msg;
}

function validateAll() {
    clearErrors();
    let valid = true;

    if (!validateName()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateCourse()) valid = false;
    if (!validateRating()) valid = false;
    if (!validateFeedback()) valid = false;

    return valid;
}

function validateName() {
    const val = document.getElementById("name").value.trim();
    if (val === "") {
        setError("nameError", "Name required");
        return false;
    }
    return true;
}

function validateEmail() {
    const val = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(val)) {
        setError("emailError", "Invalid email");
        return false;
    }
    return true;
}

function validatePhone() {
    const val = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(val)) {
        setError("phoneError", "Enter 10 digit number");
        return false;
    }
    return true;
}

function validateCourse() {
    if (document.getElementById("course").value === "") {
        setError("courseError", "Select course");
        return false;
    }
    return true;
}

function validateRating() {
    if (document.getElementById("rating").value === "") {
        setError("ratingError", "Give rating");
        return false;
    }
    return true;
}

function validateFeedback() {
    const text = document.getElementById("feedback").value.trim();
    const words = text.split(/\s+/).length;

    if (text === "" || words < 8) {
        setError("feedbackError", "Minimum 8 words required");
        return false;
    }
    return true;
}