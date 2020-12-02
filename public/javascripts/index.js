window.addEventListener("load", (event) => {
    console.log("hello from javascript!")
})

document.addEventListener('DOMContentLoaded', event => {

    const toggleButton = document.getElementById('toggle-button');
    const image = document.querySelectorAll(".image-container");
    const signUpContainer = document.getElementById("sign-up-container-id");
    const signUpButton = document.getElementById("sign-up-button-id");
    const signUpHeader = document.getElementById("sign-up-header-id");
    const signUpText = document.getElementById("sign-up-text-id");
    const userInput = document.querySelectorAll(".user-input");

    console.log(userInput);

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('light');
        image.forEach(ele => ele.classList.toggle('light'));
        userInput.forEach(ele => ele.classList.toggle('light'));
        signUpContainer.classList.toggle('light');
        signUpButton.classList.toggle('light');
        signUpHeader.classList.toggle('light');
        signUpText.classList.toggle('light');


    });
});
