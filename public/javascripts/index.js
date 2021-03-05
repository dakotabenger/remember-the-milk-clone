

document.addEventListener("DOMContentLoaded", (event) => {
    const navLinks = document.querySelector(".nav-links");
    const hamburgerMenu = document.querySelector(".menu-icon");
    const indexContent = document.getElementsByClassName("index-page-content")[0];
    const toggleButton = document.getElementById("toggle-button");
    const image = document.querySelectorAll(".image-container");
    const signUpContainer = document.querySelector(".sign-up-container");
    const signUpHeader = document.querySelector(".sign-up-header");
    const signUpButton = document.querySelector(".sign-up-button");
    const signUpText = document.querySelector(".sign-up-text");
    const userInput = document.querySelectorAll(".user-input");
    const errorMsg = document.querySelectorAll(".error-msg");
    const createTagFormButton = document.querySelector(".create-tag-button")
    const createListFormButton = document.querySelector(".create-list-button")
    const hiddenListFormDiv = document.querySelector(".new-list-div")
    const hiddenTagFormDiv = document.querySelector(".new-tag-div")
    const hiddenListForm = document.querySelector(".new-list")
    const hiddenTagForm = document.querySelector(".new-tag-form")
    const addTButton = document.querySelector(".add-tag-button");
    const addLButton = document.querySelector(".add-list-button");
    const editButton = document.querySelector(".edit-task-button");
    const editForm = document.querySelector(".edit-task");
    const editDiv = document.querySelector(".edit-form-div");
    
    if (localStorage.getItem("theme") === "light") {
        lightTheme();
    };
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            if (localStorage.getItem("theme") === "light") {
                darkTheme();
            } else {
                lightTheme();
            }
        });
    }
    function lightTheme() {
        toggleButton.classList.add("light");
        image.forEach((ele) => ele.classList.add("light"));
        userInput.forEach((ele) => ele.classList.add("light"));
        signUpContainer.classList.add("light");
        signUpText.classList.add("light");
        signUpButton.classList.add("light");
        signUpHeader.classList.add("light");
        signUpText.classList.add("light");
        errorMsg.forEach((ele) => ele.classList.add("light"));
        localStorage.setItem("theme", "light");
    }
    function darkTheme() {
        toggleButton.classList.remove("light");
        image.forEach((ele) => ele.classList.remove("light"));
        userInput.forEach((ele) => ele.classList.remove("light"));
        signUpContainer.classList.remove("light");
        signUpText.classList.remove("light");
        signUpButton.classList.remove("light");
        signUpHeader.classList.remove("light");
        signUpText.classList.remove("light");
        errorMsg.forEach((ele) => ele.classList.remove("light"));
        localStorage.setItem("theme", "dark");
    }

    const trashCanButtons = document.querySelectorAll(".trashcan")
    trashCanButtons.forEach((button) => {
        button.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
      </svg>`
    })
    
    createListFormButton.addEventListener("click", async (e) => {
        hiddenListFormDiv.hidden = !hiddenListFormDiv.hidden
        createListFormButton.hidden = !createListFormButton.hidden
        if(!addLButton.hidden) {
            addLButton.hidden = true
        }
        if (!addTButton.hidden) {
            addTButton.hidden = true
        }
        if (!editButton.hidden) {
            editButton.hidden = true
        }
        createTagFormButton.hidden = !createTagFormButton.hidden
        hiddenTagFormDiv.hidden = true
        editDiv.hidden = true
    })
    createTagFormButton.addEventListener("click",async (e) =>{ 
        hiddenTagFormDiv.hidden = !hiddenTagFormDiv.hidden
        createListFormButton.hidden = !createListFormButton.hidden
        if(!addLButton.hidden) {
            addLButton.hidden = true
        }
        if (!addTButton.hidden) {
            addTButton.hidden = true
        }
        if (!editButton.hidden) {
            editButton.hidden = true
        }
        createTagFormButton.hidden = !createTagFormButton.hidden
        hiddenListFormDiv.hidden = true
        editDiv.hidden = true
    })
    
    if (localStorage.getItem("theme") === "light") {
        lightTheme();
    };

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            if (localStorage.getItem("theme") === "light") {
                darkTheme();
            } else {
                lightTheme();
            }
        });
    }

    function lightTheme() {
        toggleButton.classList.add("light");
        image.forEach((ele) => ele.classList.add("light"));
        userInput.forEach((ele) => ele.classList.add("light"));
        signUpContainer.classList.add("light");
        signUpText.classList.add("light");
        signUpButton.classList.add("light");
        signUpHeader.classList.add("light");
        signUpText.classList.add("light");
        errorMsg.forEach((ele) => ele.classList.add("light"));
        localStorage.setItem("theme", "light");
    }

    function darkTheme() {
        toggleButton.classList.remove("light");
        image.forEach((ele) => ele.classList.remove("light"));
        userInput.forEach((ele) => ele.classList.remove("light"));
        signUpContainer.classList.remove("light");
        signUpText.classList.remove("light");
        signUpButton.classList.remove("light");
        signUpHeader.classList.remove("light");
        signUpText.classList.remove("light");
        errorMsg.forEach((ele) => ele.classList.remove("light"));
        localStorage.setItem("theme", "dark");
    }



    if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", (event) => {
            navLinks.classList.toggle("open-menu");
            indexContent.classList.toggle("clicked");
        });
    }
    const subList = document.querySelector(".sub-list");
    const listsButton = document.getElementById("nav-link-lists");
    if (listsButton) {
        listsButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            subList.hidden = !subList.hidden;
        });
    }
    const tagButton = document.getElementById("nav-link-tags");
    const subTag = document.querySelector(".sub-tag");
    if (tagButton) {
        tagButton.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            subTag.hidden = !subTag.hidden;
        });
    }
    const form = document.querySelector(".new-task");

    const taskEle = document.querySelector(".task-view-container");
    const formContainer = document.querySelector(".form-container");
    const showFormButton = document.querySelector(".show-form-button");
    const closeButton = document.createElement("button");
    closeButton.setAttribute("class", "index-button")

    if (showFormButton) {
        showFormButton.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            formContainer.hidden = !formContainer.hidden;
            addLButton.hidden = true;
            addTButton.hidden = true;
            editButton.hidden = true;
            createListFormButton.hidden = !createListFormButton.hidden
            createTagFormButton.hidden = !createTagFormButton.hidden
            hiddenListFormDiv.hidden = true
            hiddenTagFormDiv.hidden = true
            editDiv.hidden = true


        });
    }
    // error start



    const checkboxes = document.querySelectorAll(".completed-checkbox");
    if (checkboxes) {
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", async (e) => {
                e.stopPropagation();
                const targetId = e.target.id;
                const resJSON = await fetch(`/api/tasks/${targetId}`, {
                    credentials: "same-origin",
                });
                res = await resJSON.json();
                let completed = !res.task.completed;
                const res2 = await fetch(`/api/tasks/${targetId}/`, {
                    credentials: "same-origin",
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ completed }),
                });

                const tagContainer = document.querySelector(".tag-form-div");
                const listContainer = document.querySelector(".list-form-div");
                addLButton.hidden = false;
                addTButton.hidden = false;
                editButton.hidden = false;
                if (!taskEle.hidden) {
                    taskEle.textContent = "";
                }
                // else if (taskEle.hidden) {
                //     taskEle.hidden = !taskEle.hidden;
                //   }
                const data = await res2.json()
                const {
                    name,
                    description,
                    // completed,
                    start_date,
                    end_date,
                    priority,
                    id,
                } = data.task;

                //   console.log("11111111111111111111111111111111111111111 startdate:     ",moment(start_date).format("MM Do YYYY"))


                const namePtag = document.createElement("p");
                const descriptionPtag = document.createElement("p");
                namePtag.innerHTML = `Task Name: ${name}`;
                if (description) {
                    descriptionPtag.innerHTML = `Description: ${description}`;
                } else {
                    descriptionPtag.innerHTML = "Description: N/A";
                }
                const completedTag = document.createElement("div");
                if (completed === false || completed === null) {
                    //Bootsrap Icon https://icons.getbootstrap.com/icons/square/
                    completedTag.innerHTML = `<p>Completed: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          </svg></p>`;
                } else {
                    // Bootstrap Icon https://icons.getbootstrap.com/icons/check-square/
                    completedTag.innerHTML = `<p>Completed: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
            </svg></p>`;
                }
                const startDateTag = document.createElement("p");
                const endDateTag = document.createElement("p");
                const priorityTag = document.createElement("div");
                if (start_date) {
                    startDateTag.innerHTML = `Start Date: ${start_date}`;
                } else {
                    startDateTag.innerHTML = "Start Date: N/A";
                }
                if (end_date) {
                    endDateTag.innerHTML = `End Date: ${end_date}`;
                } else {
                    endDateTag.innerHTML = "End Date: None";
                }
                if (priority) {
                    if (priority === 1 || priority === null) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-one" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg></p>`;
                    } else if (priority === 2) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-two" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg></p>`;
                    } else if (priority === 3) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-three" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg></p>`;
                    }
                }
                closeButton.setAttribute("type", "submit");
                closeButton.innerHTML = "Close";
                taskEle.appendChild(namePtag);
                taskEle.appendChild(descriptionPtag);
                taskEle.appendChild(completedTag);
                taskEle.appendChild(startDateTag);
                taskEle.appendChild(endDateTag);
                taskEle.appendChild(priorityTag);
                taskEle.appendChild(closeButton);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete Task";
                deleteButton.setAttribute("class", "index-button")
                taskEle.appendChild(deleteButton);

                deleteButton.addEventListener("click", async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const deleteTask = await fetch(`/api/tasks/${id}/`, {
                        credentials: "same-origin",
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    });
                    cell.parentNode.removeChild(cell);
                    taskEle.textContent = "";
                    taskEle.hidden = !taskEle.hidden;
                    let json = await deleteTask.json();
                    alert(json.message);
                });
                if (addTButton) {
                    addTButton.addEventListener("click", async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addLButton.hidden = true;
                        addTButton.hidden = true;
                        editButton.hidden = true;
                        createListFormButton.hidden = !createListFormButton.hidden
                        createTagFormButton.hidden = !createTagFormButton.hidden
                        hiddenListFormDiv.hidden = true
                        hiddenTagFormDiv.hidden = true
                        editDiv.hidden = true
                        tagContainer.hidden = !tagContainer.hidden;
                        const tagForm = document.querySelector(".add-tag");
                        const taskInput = document.createElement("input");
                        taskInput.setAttribute("class", "user-task-input");
                        taskInput.setAttribute("class", "hidden");
                        taskInput.setAttribute("value", id);
                        tagForm.appendChild(taskInput);
                        tagForm.addEventListener("submit", async (e) => {
                            e.preventDefault();
                            addLButton.hidden = false;
                            addTButton.hidden = false;
                            editButton.hidden = false;
                            createListFormButton.hidden = !createListFormButton.hidden
                            createTagFormButton.hidden = !createTagFormButton.hidden
                            hiddenListFormDiv.hidden = true
                            hiddenTagFormDiv.hidden = true
                            editDiv.hidden = true
                            const tagFormData = new FormData(tagForm);
                            const tag = tagFormData.get("add-tags");
                            const addedTask = await fetch(`/api/tasks/${id}/tag/${tag}`, {
                                credentials: "same-origin",
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                            });
                            let addedMessage = await addedTag.json();
                            alert(addedMessage.message);
                        });
                    });
                }
                if (addLButton) {
                    addLButton.addEventListener("click", async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addLButton.hidden = true;
                        addTButton.hidden = true;
                        editButton.hidden = true;
                        createListFormButton.hidden = !createListFormButton.hidden
                        createTagFormButton.hidden = !createTagFormButton.hidden
                        hiddenListFormDiv.hidden = true
                        hiddenTagFormDiv.hidden = true
                        editDiv.hidden = true
                        listContainer.hidden = !listContainer.hidden;
                        const listForm = document.querySelector(".add-list");
                        const listInput = document.createElement("input");
                        listInput.setAttribute("class", "user-task-input");
                        listInput.setAttribute("class", "hidden");
                        listInput.setAttribute("value", id);
                        listForm.appendChild(listInput);
                        listForm.addEventListener("submit", async (e) => {
                            e.preventDefault();
                            addLButton.hidden = false;
                            addTButton.hidden = false;
                            editButton.hidden = false;
                            createListFormButton.hidden = !createListFormButton.hidden
                            createTagFormButton.hidden = !createTagFormButton.hidden
                            hiddenListFormDiv.hidden = true
                            hiddenTagFormDiv.hidden = true
                            editDiv.hidden = true
                            const listFormData = new FormData(listForm);
                            const list = listFormData.get("add-list");
                            const addedList = await fetch(`/api/tasks/${id}/list/${list}`, {
                                credentials: "same-origin",
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                            });
                            let message = await addedTag.json();
                            alert(message.message);
                        });
                    });
                }
                if (editButton) {
                    editButton.addEventListener("click", async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addLButton.hidden = true;
                        addTButton.hidden = true;
                        editButton.hidden = true;
                        createListFormButton.hidden = !createListFormButton.hidden
                        createTagFormButton.hidden = !createTagFormButton.hidden
                        hiddenListFormDiv.hidden = true
                        hiddenTagFormDiv.hidden = true
                        editDiv.hidden = false
                        editForm.addEventListener("submit", async (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addLButton.hidden = false;
                            addTButton.hidden = false;
                            editButton.hidden = false;
                            createListFormButton.hidden = !createListFormButton.hidden
                            createTagFormButton.hidden = !createTagFormButton.hidden
                            hiddenListFormDiv.hidden = true
                            hiddenTagFormDiv.hidden = true
                            const editFormData = new FormData(editForm);
                            const name = editFormData.get("name");
                            const description = editFormData.get("description");
                            let priority = parseInt(editFormData.get("priority"));
                            let startDate = Date.parse(editFormData.get("start_date"));
                            let endDate = Date.parse(editFormData.get("end_date"));
                            let completed = editFormData.get("completed");
                            
                            if (completed === null) {
                                completed = false;
                            } else {
                                completed = true;
                            }
                            
                            if (Number.isNaN(priority)) {
                                priority = 1;
                            }
                            
                            let reqBody = {
                                name,
                                description,
                                priority,
                                completed,
                            };
                            
                            if (startDate && endDate) {
                                reqBody = {
                                    ...reqBody,
                                    startDate,
                                    endDate,
                                };
                            } else if (startDate) {
                                reqBody = {
                                    ...reqBody,
                                    startDate,
                                };
                            } else if (endDate) {
                                reqBody = {
                                    ...reqBody,
                                    endDate,
                                };
                            }
                            
                            const res = await fetch(`/api/tasks/${id}`, {
                                credentials: "same-origin",
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(reqBody),
                            });
                            const json = await res.json();
                            console.log(json)
                            form.reset();
                            const showTasks = receiveTaskFromServer(json);
                            alert(json.message);
                            editDiv.hidden = true
                        });
                    });
                }
            });
        });
    }
    const nameTableCells = document.querySelectorAll(".TBD2");
    if (nameTableCells) {
        nameTableCells.forEach((cell) => {
            cell.addEventListener("click", async (e) => {
                e.stopPropagation();
                const tagContainer = document.querySelector(".tag-form-div");
                const listContainer = document.querySelector(".list-form-div");
                addLButton.hidden = false;
                addTButton.hidden = false;
                editButton.hidden = false;
                if (!taskEle.hidden) {
                    taskEle.textContent = "";
                } else if (taskEle.hidden) {
                    taskEle.hidden = !taskEle.hidden;
                }
                const targetId = e.target.id;
                const resJSON = await fetch(`/api/tasks/${targetId}`, {
                    credentials: "same-origin",
                });

                const res = await resJSON.json();
                const {
                    name,
                    description,
                    completed,
                    start_date,
                    end_date,
                    priority,
                    id,
                } = res.task;

                const namePtag = document.createElement("p");
                const descriptionPtag = document.createElement("p");
                namePtag.innerHTML = `Task Name: ${name}`;
                if (description) {
                    descriptionPtag.innerHTML = `Description: ${description}`;
                } else {
                    descriptionPtag.innerHTML = "Description: N/A";
                }
                const completedTag = document.createElement("div");
                if (completed === false || completed === null) {
                    //Bootsrap Icon https://icons.getbootstrap.com/icons/square/
                    completedTag.innerHTML = `<p>Completed: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          </svg></p>`;
                } else {
                    // Bootstrap Icon https://icons.getbootstrap.com/icons/check-square/
                    completedTag.innerHTML = `<p>Completed: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
            </svg></p>`;
                }
                const startDateTag = document.createElement("p");
                const endDateTag = document.createElement("p");
                const priorityTag = document.createElement("div");
                if (start_date) {
                    startDateTag.innerHTML = `Start Date: ${start_date}`;
                } else {
                    startDateTag.innerHTML = "Start Date: N/A";
                }
                if (end_date) {
                    endDateTag.innerHTML = `End Date: ${end_date}`;
                } else {
                    endDateTag.innerHTML = "End Date: None";
                }
                if (priority) {
                    if (priority === 1 || priority === null) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-one" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg></p>`;
                    } else if (priority === 2) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-two" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg></p>`;
                    } else if (priority === 3) {
                        priorityTag.innerHTML = `<p>Priority: <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill priority-three" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg></p>`;
                    }
                }
                closeButton.setAttribute("type", "submit");
                closeButton.innerHTML = "Close";
                taskEle.appendChild(namePtag);
                taskEle.appendChild(descriptionPtag);
                taskEle.appendChild(completedTag);
                taskEle.appendChild(startDateTag);
                taskEle.appendChild(endDateTag);
                taskEle.appendChild(priorityTag);
                taskEle.appendChild(closeButton);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete Task";
                deleteButton.setAttribute("class", "index-button")

                taskEle.appendChild(deleteButton);

                deleteButton.addEventListener("click", async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const deleteTask = await fetch(`/api/tasks/${id}/`, {
                        credentials: "same-origin",
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    });
                    cell.parentNode.removeChild(cell);
                    taskEle.textContent = "";
                    taskEle.hidden = !taskEle.hidden;
                    let json = await deleteTask.json();
                    alert(json.message);
                });
                if (addTButton) {
                    addTButton.addEventListener("click", async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addLButton.hidden = true;
                        addTButton.hidden = true;
                        editButton.hidden = true;
                        createListFormButton.hidden = !createListFormButton.hidden
                        createTagFormButton.hidden = !createTagFormButton.hidden
                        hiddenListFormDiv.hidden = true
                        hiddenTagFormDiv.hidden = true
                        editDiv.hidden = true
                        tagContainer.hidden = !tagContainer.hidden;
                        const tagForm = document.querySelector(".add-tag");
                        const taskInput = document.createElement("input");
                        taskInput.setAttribute("class", "user-task-input");
                        taskInput.setAttribute("class", "hidden");
                        taskInput.setAttribute("value", id);
                        tagForm.appendChild(taskInput);
                        tagForm.addEventListener("submit", async (e) => {
                            e.preventDefault();
                            addLButton.hidden = false;
                            addTButton.hidden = false;
                            editButton.hidden = false;
                            createListFormButton.hidden = !createListFormButton.hidden
                            createTagFormButton.hidden = !createTagFormButton.hidden
                            hiddenListFormDiv.hidden = true
                            hiddenTagFormDiv.hidden = true
                            editDiv.hidden = true
                            const tagFormData = new FormData(tagForm);
                            const tag = tagFormData.get("add-tags");
                            const addedTag = await fetch(`/api/tasks/${id}/tag/${tag}`, {
                                credentials: "same-origin",
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                            });
                            let addedMessage = await addedTag.json();
                            alert(addedMessage.message);
                        });
                    });
                }
                if (addLButton) {
                    addLButton.addEventListener("click", async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addLButton.hidden = true;
                        addTButton.hidden = true;
                        editButton.hidden = true;
                        createListFormButton.hidden = !createListFormButton.hidden
                        createTagFormButton.hidden = !createTagFormButton.hidden
                        hiddenListFormDiv.hidden = true
                        hiddenTagFormDiv.hidden = true
                        editDiv.hidden = true
                        listContainer.hidden = !listContainer.hidden;
                        const listForm = document.querySelector(".add-list");
                        const listInput = document.createElement("input");
                        listInput.setAttribute("class", "user-task-input");
                        listInput.setAttribute("class", "hidden");
                        listInput.setAttribute("value", id);
                        listForm.appendChild(listInput);
                        listForm.addEventListener("submit", async (e) => {
                            e.preventDefault();
                            addLButton.hidden = false;
                            addTButton.hidden = false;
                            editButton.hidden = false;
                            createListFormButton.hidden = !createListFormButton.hidden
                            createTagFormButton.hidden = !createTagFormButton.hidden
                            hiddenListFormDiv.hidden = true
                            hiddenTagFormDiv.hidden = true
                            editDiv.hidden = true
                            const listFormData = new FormData(listForm);
                            const list = listFormData.get("add-list");
                            const addedList = await fetch(`/api/tasks/${id}/list/${list}`, {
                                credentials: "same-origin",
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                            });
                            let message = await addedList.json();
                            alert(message.message);
                        });
                    });
                }
                if (editButton) {
                    editButton.addEventListener("click", async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addLButton.hidden = true;
                        addTButton.hidden = true;
                        editButton.hidden = true;
                        createListFormButton.hidden = !createListFormButton.hidden
                        createTagFormButton.hidden = !createTagFormButton.hidden
                        hiddenListFormDiv.hidden = true
                        hiddenTagFormDiv.hidden = true
                        editDiv.hidden = false;
                        editForm.addEventListener("submit", async (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addLButton.hidden = false;
                            addTButton.hidden = false;
                            editButton.hidden = false;
                            createListFormButton.hidden = !createListFormButton.hidden
                            createTagFormButton.hidden = !createTagFormButton.hidden
                            hiddenListFormDiv.hidden = true
                            hiddenTagFormDiv.hidden = true
                            const editFormData = new FormData(editForm);
                            const name = editFormData.get("name");
                            const description = editFormData.get("description");
                            let priority = parseInt(editFormData.get("priority"));
                            let startDate = Date.parse(editFormData.get("start_date"));
                            let endDate = Date.parse(editFormData.get("end_date"));
                            let completed = editFormData.get("completed");
                            if (completed === null) {
                                completed = false;
                            } else {
                                completed = true;
                            }
                            
                            if (Number.isNaN(priority)) {
                                priority = 1;
                            }
                            
                            let reqBody = {
                                name,
                                description,
                                priority,
                                completed,
                            };
                            
                            if (startDate && endDate) {
                                reqBody = {
                                    ...reqBody,
                                    startDate,
                                    endDate,
                                };
                            } else if (startDate) {
                                reqBody = {
                                    ...reqBody,
                                    startDate,
                                };
                            } else if (endDate) {
                                reqBody = {
                                    ...reqBody,
                                    endDate,
                                };
                            }
                            
                            const res = await fetch(`/api/tasks/${id}`, {
                                credentials: "same-origin",
                                method: "PATCH",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(reqBody),
                            });
                            const json = await res.json();
                            console.log(json)
                            form.reset();
                            const showTasks = receiveTaskFromServer(json);
                            alert(json.message);
                            editDiv.hidden = true
                        });
                    });
                }
            });
        });
    }
    closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        taskEle.textContent = "";
        taskEle.hidden = !taskEle.hidden;
        addTButton.hidden = true;
        addLButton.hidden = true;
        editButton.hidden = true;
    });

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            e.stopPropagation();
            addLButton.hidden = false;
            addTButton.hidden = false;
            editButton.hidden = false;
            createListFormButton.hidden = !createListFormButton.hidden
            createTagFormButton.hidden = !createTagFormButton.hidden
            hiddenListFormDiv.hidden = true
            hiddenTagFormDiv.hidden = true
            editDiv.hidden = true
            const formData = new FormData(form);
            const name = formData.get("name");
            const description = formData.get("description");
            let priority = parseInt(formData.get("priority"));
            let startDate = Date.parse(formData.get("start_date"));
            let endDate = Date.parse(formData.get("end_date"));
            let completed = formData.get("completed");

            if (completed === null) {
                completed = false;
            } else {
                completed = true;
            }

            if (Number.isNaN(priority)) {
                priority = 1;
            }

            let reqBody = {
                name,
                description,
                priority,
                completed,
            };

            if (startDate && endDate) {
                reqBody = {
                    ...reqBody,
                    startDate,
                    endDate,
                };
            } else if (startDate) {
                reqBody = {
                    ...reqBody,
                    startDate,
                };
            } else if (endDate) {
                reqBody = {
                    ...reqBody,
                    endDate,
                };
            }

            const res = await fetch(`/api/tasks/`, {
                credentials: "same-origin",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reqBody),
            });
            const json = await res.json();
            form.reset();
            const showTasks = receiveTaskFromServer(json);
            alert(json.message);
        });
    }
});
const receiveTaskFromServer = (data) => {
    console.log(data.newTask)
    if (data.task) {
    const exisitingTask = document.querySelectorAll(`#id-${data.task.id}`)
    if (!!exisitingTask) { 
        const label = document.querySelector(`.id-${data.task.id}`)
        label.innerHTML = `${data.task.name}`
    }} else if (data.newTask) {
        
        const table = document.querySelector(".tasks-table");
        const newTr = document.createElement("tr");
        const newTd = document.createElement("td");
        const newCheckbox = document.createElement("input")
        newCheckbox.setAttribute("type","checkbox")
        newCheckbox.setAttribute("class",`completed-checkbox-${data.newTask.id} completed-checkbox`)
        if (data.newTask.completed) {
            newTd.innerHTML = `<input id="${data.newTask.id}" type="checkbox" class="completed-checkbox-${data.newTask.id} completed-checkbox" checked> <label id="${data.newTask.id}" class-"task-label id-${data.newTask.id}>${data.newTask.name}</label>`
        } else {

            newTd.innerHTML = `<input id="${data.newTask.id}" type="checkbox" class="completed-checkbox-${data.newTask.id} completed-checkbox"><label id="${data.newTask.id}" class-"task-label id-${data.newTask.id}>${data.newTask.name}</label>`;
        }
          
   
        newTr.appendChild(newTd);
        table.appendChild(newTr);
    }
};