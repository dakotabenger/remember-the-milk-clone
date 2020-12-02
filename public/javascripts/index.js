window.addEventListener("load", (event) => {
    console.log("hello from javascript!")
})

document.addEventListener('DOMContentLoaded', event => {

    const toggleButton = document.getElementById('toggle-button');
    const signUpImage = document.getElementById("image-container-id");
    const signUpContainer = document.getElementById("sign-up-container-id");
    const signUpButton = document.getElementById("sign-up-button-id");
    const signUpHeader = document.getElementById("sign-up-header-id");
    const signUpText = document.getElementById("sign-up-text-id");
    const userInput = document.querySelectorAll(".user-input");
    // const placeholder = document.getAttribute("placeholder")

    console.log(userInput);

    toggleButton.addEventListener('click', () => {
        signUpImage.classList.toggle('light');
        toggleButton.classList.toggle('light');
        signUpContainer.classList.toggle('light');
        signUpButton.classList.toggle('light');
        signUpHeader.classList.toggle('light');
        signUpText.classList.toggle('light');
        userInput.forEach(ele => ele.classList.toggle('light'));
       userInput.forEach(ele => ele.getAttribute("placeholder").classList.toggle('light'))
    });
});
