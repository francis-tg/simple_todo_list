const todoInput = document.querySelector("input#todoInput");
const todoSubmit = document.querySelector("button#todoSubmit");
const todoContainer = document.querySelector(".todo-content");

todoSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    const todo = todoInput.value;
    const render = ` <div class="todo-item">
                <div class="d-flex">
                    <input type="checkbox" name="" id="set-finish" class="form-check">
                    <h5>${todo}</h5>
                </div>
                <div class="action">
                    <!--<button class="btn btn-sm">Editer</button>-->
                    <button class="btn btn-sm  btn-danger" onclick="removeTodo(this.parentElement.parentElement)">Supp</button>
                </div>
            </div>`
     const doc = new DOMParser().parseFromString(render, "text/html");
    todoContainer.insertAdjacentElement("afterbegin", doc.firstChild.children[1].children[0])
    todoInput.value = "";
    const setFinishs = document.querySelectorAll("#set-finish")
    setFinishs.forEach((setFinish) => {
        setFinish.addEventListener("click", (e) => {
        if (e.target.checked) {
            setFinish.parentElement.parentElement.classList.add("finish")
        } else {
            setFinish.parentElement.parentElement.classList.remove("finish")
        }
    })
})
})

function removeTodo(e) {
    e.remove()

}
