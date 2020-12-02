window.addEventListener("load", (event) => {
    console.log("hello from javascript!")
})

document.addEventListener('DOMContentLoaded', event => {

    const toggleButton = document.getElementById('toggle-button');
    const image = document.querySelectorAll(".image-container");
    const signUpContainer = document.querySelectorAll(".sign-up-container");
    const signUpHeader = document.querySelectorAll(".sign-up-header");
    const signUpButton = document.getElementById("sign-up-button-id");
    const signUpText = document.querySelectorAll(".sign-up-text");
    const userInput = document.querySelectorAll(".user-input");
    // const placeholder = document.getAttribute("placeholder")


    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('light');
        signUpHeader.forEach(ele => ele.classList.toggle('light'));
        image.forEach(ele => ele.classList.toggle('light'));
        userInput.forEach(ele => ele.classList.toggle('light'));
        signUpContainer.forEach(ele => ele.classList.toggle('light'));
        signUpText.forEach(ele => ele.classList.toggle('light'));
        signUpButton.classList.toggle('light');
<<<<<<< HEAD
=======
        signUpHeader.classList.toggle('light');
        signUpText.classList.toggle('light');
<<<<<<< HEAD

>>>>>>> 596a25f1677ca05d783f75e037a823eebc7f145d

=======
        userInput.forEach(ele => ele.classList.toggle('light'));
       userInput.forEach(ele => ele.getAttribute("placeholder").classList.toggle('light'))
>>>>>>> 9008a740ecd72f084a13e1ce6d9099c94167d95f
    });
});
