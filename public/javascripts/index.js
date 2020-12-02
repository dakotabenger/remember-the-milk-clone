window.addEventListener("load", (event) => {
    console.log("hello from javascript!")
<<<<<<< HEAD
})

document.addEventListener('DOMContentLoaded', event => {

    const toggleButton = document.getElementById('toggle-button');
    const image = document.querySelectorAll(".image-container");
    const signUpContainer = document.querySelectorAll(".sign-up-container");
    const signUpHeader = document.querySelectorAll(".sign-up-header");
    const signUpButton = document.getElementById("sign-up-button-id");
    const signUpText = document.querySelectorAll(".sign-up-text");
    const userInput = document.querySelectorAll(".user-input");
    const errorMsg = document.querySelectorAll(".error-msg")



    toggleButton.addEventListener('click', () => {
        console.log(errorMsg)
        toggleButton.classList.toggle('light');
        signUpHeader.forEach(ele => ele.classList.toggle('light'));
        image.forEach(ele => ele.classList.toggle('light'));
        userInput.forEach(ele => ele.classList.toggle('light'));
        signUpContainer.forEach(ele => ele.classList.toggle('light'));
        signUpText.forEach(ele => ele.classList.toggle('light'));
        signUpButton.classList.toggle('light');
        errorMsg.forEach(ele => ele.classList.toggle("light"))

    });
});
=======



    document.getElementById('.tasksubmitbutton').addEventListener('click', async(res,req) => {
        
    })
})
>>>>>>> 777959ce1e47cf5a20039cd05cfc174fe08c65ea
