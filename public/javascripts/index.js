
    document.addEventListener('DOMContentLoaded', event => {
        const navLinks = document.querySelector(".nav-links")
        const hamburgerMenu = document.querySelector(".menu-icon")
        const indexContent = document.getElementsByClassName('index-page-content')[0]



    const toggleButton = document.getElementById('toggle-button');
    const image = document.querySelectorAll(".image-container");
    const signUpContainer = document.querySelectorAll(".sign-up-container");
    const signUpHeader = document.querySelectorAll(".sign-up-header");
    const signUpButton = document.getElementById("sign-up-button-id");
    const signUpText = document.querySelectorAll(".sign-up-text");
    const userInput = document.querySelectorAll(".user-input");
    const errorMsg = document.querySelectorAll(".error-msg");

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            toggleButton.classList.toggle('light');
            signUpHeader.forEach(ele => ele.classList.toggle('light'));
            image.forEach(ele => ele.classList.toggle('light'));
            userInput.forEach(ele => ele.classList.toggle('light'));
            signUpContainer.forEach(ele => ele.classList.toggle('light'));
            signUpText.forEach(ele => ele.classList.toggle('light'));
            signUpButton.classList.toggle('light');
            signUpHeader.classList.toggle('light');
            signUpText.classList.toggle('light');

            errorMsg.forEach(ele => ele.classList.toggle("light"));


        });
    };

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', event => {
            navLinks.classList.toggle('open-menu')
            indexContent.classList.toggle('clicked')
        })
    



        const form = document.querySelector('.new-task')
        const nameTableCells = document.querySelectorAll(".task-td")
        const taskEle = document.querySelector(".task-view-container")
        const formContainer = document.querySelector(".form-container")
        const showFormButton = document.querySelector(".show-form-button")
        const closeButton = document.createElement("button")

        showFormButton.addEventListener("click",(e) => {
            e.stopPropagation()
            console.log("hereGUYS")
            e.preventDefault()
            console.log("formContainer Before",formContainer)
            formContainer.hidden = !formContainer.hidden
            console.log("formContainer after", formContainer)
        });
        // error start
        nameTableCells.forEach((cell) => {
            cell.addEventListener("click",async (e) => {
                e.stopPropagation()
                if (!taskEle.classList.contains("hidden")) {
                    taskEle.textContent = ""
                }
                if (taskEle.classList.contains("hidden")) {
                    taskEle.classList.toggle("hidden")
                }
                const targetId = e.target.id
                const resJSON = await fetch(`/api/tasks/${targetId}`, {
                    credentials:"same-origin"
                })
                const res = await resJSON.json();
                const {name,description,completed,start_date,end_date,priority,id} = res.task
                const namePtag = document.createElement("p")
                const descriptionPtag = document.createElement("p")
                namePtag.innerHTML = `Task Name: ${name}`
                if (description) {
                    descriptionPtag.innerHTML = `Description: ${description}`
                } else {
                    descriptionPtag.innerHTML = "Description: N/A"
                }
                const completedTag = document.createElement("div")
                console.log(completed, "COMPLETED")
                if (completed === false || completed === null) {
                    //Bootsrap Icon https://icons.getbootstrap.com/icons/square/
                    completedTag.innerHTML = `<p>Completed: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    </svg></p>`
                } else {
                    // Bootstrap Icon https://icons.getbootstrap.com/icons/check-square/
                    completedTag.innerHTML = `<p>Completed: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                    </svg></p>`
                }
                const startDateTag = document.createElement("p")
                const endDateTag = document.createElement("p")
                const priorityTag = document.createElement("div")
                if (start_date) {
                    startDateTag.innerHTML = `Start Date: ${start_date}`
                } else {
                    startDateTag.innerHTML = "Start Date: N/A"
                }
                if (end_date) {
                    endDateTag.innerHTML = `End Date: ${end_date}`
                } else {
                    endDateTag.innerHTML = "End Date: None"
                }
                if (priority) {
                    if (priority === 1 || priority === null) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-one" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg></p>`
                    } else if (priority === 2) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-two" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg></p>`
                    } else if (priority === 3) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-three" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg></p>`
                    }
                }
                closeButton.setAttribute("type","submit")
                closeButton.innerHTML = "Close"
                taskEle.appendChild(namePtag)
                taskEle.appendChild(descriptionPtag)
                taskEle.appendChild(completedTag)
                taskEle.appendChild(startDateTag)
                taskEle.appendChild(endDateTag)
                taskEle.appendChild(priorityTag)
                taskEle.appendChild(closeButton)
            })
        })
        closeButton.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation()
            taskEle.textContent = ""
            taskEle.classList.toggle("hidden")
        })


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
            const json = await res.json()
            form.reset()
            const showTasks = receiveTaskFromServer(json)

        });


    }

    });


    const receiveTaskFromServer = (data) => {
        const table = document.querySelector(".tasks-table")
        const newTr = document.createElement("tr")
        const newTd = document.createElement("td")
        newTd.setAttribute("id",`${data.newTask.id}`)
        newTd.innerHTML = `${data.newTask.name}`
        newTr.appendChild(newTd)
        table.appendChild(newTr)
                 };
