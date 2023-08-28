function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message_success", "form_message_error");
    messageElement.classList.add(`form_message_${type}`);
}
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createaccount");

    document.querySelector("#linkcreateaccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("fhidden");
        createAccountForm.classList.remove("fhidden");
    });

    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("fhidden");
        createAccountForm.classList.add("fhidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });
});