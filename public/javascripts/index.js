
window.addEventListener("load", (event) => {
    console.log("hello from javascript!")
});
document.addEventListener('DOMContentLoaded', event => {

    const toggleButton = document.getElementById('toggle-button');
    const image = document.querySelectorAll(".image-container");
    const signUpContainer = document.querySelectorAll(".sign-up-container");
    const signUpHeader = document.querySelectorAll(".sign-up-header");
    const signUpButton = document.getElementById("sign-up-button-id");
    const signUpText = document.querySelectorAll(".sign-up-text");
    const userInput = document.querySelectorAll(".user-input");
    const errorMsg = document.querySelectorAll(".error-msg")
    const form = document.querySelector('.new-task')
    console.log(form)
    const nameTable = document.querySelectorAll(".task-td")
    const taskEle = document.querySelector(".task-view-container")
    const formContainer = document.querySelector(".form-container")
    const showFormButton = document.querySelector(".show-form-button")

    showFormButton.addEventListener("click",(e) => {
        e.preventDefault()
        formContainer.hidden = !formContainer.hidden
    })

    // nameTable.addEventListener("click",async (e) => {
    //     const targetId = e.target.id
    //     const resJSON = await fetch(`/api/task/${targetId}`)
    //     const res = resJSON.json();
    //     const {name,description,completed,startDate,endDate,priority,id} = res
    //     const namePtag = document.createElement("p")
    //     namePtag.innerHTML(name)
    //     const descriptionPtag = document.createElement("p")
    //     descriptionPtag.innerHTML(description)
    //     const completedTag = document.createElement("div")
    //     if (completed === false || completed === null) {
    //         //Bootsrap Icon https://icons.getbootstrap.com/icons/square/
    //         completedTag.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //         <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    //         </svg>`
    //     } else {
    //         // Bootstrap Icon https://icons.getbootstrap.com/icons/check-square/
    //         completedTag.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //         <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    //         <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
    //         </svg>`
    //     }
        
    //     const startDateTag = document.createElement("p")
    //     startDateTag.innerHTML(startDate)
    //     const endDateTag = document.createElement("p")
    //     endDateTag.innerHTML(endDate)
    //     const priorityTag = document.createElement("div")
    //     if (priority === 1) {
    //         priorityTag.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-square priority-one" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //         <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    //         </svg>`
    //     } else if (priority === 2) {
    //         priorityTag.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-square priority-two" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //         <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    //         </svg>`
    //     } else if (priority === 3) {
    //         priorityTag.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-square priority-three" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //         <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    //         </svg>`
    //     }
    //     taskEle.appendChild(namePtag)
    //     taskEle.appendChild(descriptionPtag)
    //     taskEle.appendChild(completedTag)
    //     taskEle.appendChild(startDateTag)
    //     taskEle.appendChild(endDateTag)
    //     taskEle.appendChild(priorityTag)
    //     taskEle.classList.toggle('unhide')
    // })

    form.addEventListener('submit',async (e) => {
         e.preventDefault();
         const formData = new FormData(form);
         const name = formData.get("name")
         const description = formData.get('description')
         const priority = formData.get('priority')
         const startDate = formData.get('start_date')
         const endDate = formData.get("end_date");
         const completed = formData.get("completed")
 
        
        const reqBody = {  name, description, priority, startDate, endDate, completed } 
        
         const res = await fetch('/api/tasks', {
             credentials:"same-origin",
             method:'POST',
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(reqBody)
         })
         console.log(res)
         const json = await res.json()
         form.reset()
         const showTasks = receiveTaskFromServer(json)
         
         });

    toggleButton.addEventListener('click', () => {
        console.log(errorMsg)
        toggleButton.classList.toggle('light');
        signUpHeader.forEach(ele => ele.classList.toggle('light'));
        image.forEach(ele => ele.classList.toggle('light'));
        userInput.forEach(ele => ele.classList.toggle('light'));
        signUpContainer.forEach(ele => ele.classList.toggle('light'));
        signUpText.forEach(ele => ele.classList.toggle('light'));
        signUpButton.classList.toggle('light');
        errorMsg.forEach(ele => ele.classList.toggle("light"));

    });
});

 const receiveTaskFromServer = (data) => {
        const table = document.querySelector(".tasks-table")
        const newTr = document.createElement("tr")     
        const newTd = document.createElement("td")
        newTd.setAttribute("id",`${data.newTask.id}`)
        newTd.innerHTML = `${data.newTask.name}`
        newTr.appendChild(newTd)
        table.appendChild(newTr)

            
    }
      

    // TO DO
    // Event Listener for checkbox to update task completed boolean and change css class to strikethrough
    // Fix Name table event listener
    // Tasks left to complete div with counter
    
    
    
    
  

    

