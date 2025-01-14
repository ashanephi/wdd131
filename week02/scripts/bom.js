const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    if(input.value.trim() != ""){
        const li = document.createElement("li");
        li.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.appendChild(li);
        input.value = "";

        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();

        });
    }
    else {
        input.focus();
    }
});