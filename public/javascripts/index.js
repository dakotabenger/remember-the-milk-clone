window.addEventListener("load", (event) => {
    console.log("hello from javascript!")

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

// Copy paste from here -->
 const receiveTasksFromServer = (data) => {
        const formName = document.querySelector('name')
        formName.innerHTML = '';
        data.formName.forEach((taskName, i) => {
            const newTaskRow = document.createElement('tr');
            newTaskRow.className = 'tbd'  //change class name

            const newTaskTD = document.createElement('td')
            newTaskTD.appendChild(document.createTextNode(taskName))

            //adding a delete button
            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.appendChild(document.createTextNode('Delete'));
            deleteButton.setAttribute('id', i);
            
            newTaskRow.appendChild(newTaskTD);
            newTaskRow.appendChild(deleteButton);
            formName.appendChild(newTaskRow);
    });
      
    }
    
    
    document.querySelector('.tasksubmitbutton').addEventListener('click', (e) => {
        e.preventDefault();
        const createNewTask = document.querySelector('.new-task');
        const formData = new FormData(createNewTask);
        const formName = formData.get("name")
        const formDescription = formData.get('description')
        const formPriority = formData.get('priority')
        const formStartDate = formData.get('start_date')
        const formEndDate = formData.get("end_date");
        const formCompleted = formData.get("completed")

       

       
        const res = await fetch('/api/task', {
            method:'POST',
            body: JSON.stringify({  //probably need to change this part
              formName, formDescription, formPriority, formStartDate, formEndDate, formCompleted
            })
        })
        const json = await res.json()
        const resetForm = await createNewTask.reset()
        const showTasks = await receiveTasksFromServer(json)
        
        });
// to here  <--

    
})
