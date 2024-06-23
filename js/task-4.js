const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const userData = {
        email: event.target.elements.email.value.trim(),
        password: event.target.elements.password.value.trim(),
    };
    if (userData.email === "" || userData.password === "") {
        return alert("All form fields must be filled in");
    }
    console.log(userData);
    form.reset();
});