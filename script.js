const inputField = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

inputField.addEventListener("keyup", function(event) {
    if (event.key === "Enter" && inputField.value.trim() !== "") {
        const todoText = inputField.value.trim();
        inputField.value = "";

        const listItem = document.createElement("li");
        listItem.textContent = todoText;
        
        listItem.addEventListener("click", function() {
            this.remove();
        });

        todoList.appendChild(listItem);
    }
});
