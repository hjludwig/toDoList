// Get objects
const itemInput = document.querySelector("input[name='add-item']");
const addButton = document.querySelector(".add-button");
const toDoList = document.querySelector(".list");


// Functions

let fragment = new DocumentFragment();

function addItem() {
    let newItem = document.createElement("li");
    let itemText = document.createElement("p");
    itemText.textContent = itemInput.value;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
    
    let checkBtn = document.createElement("button");
    checkBtn.classList.add('check-button');
    checkBtn.innerHTML = "<i class='fas fa-check'></i>";
    
    newItem.appendChild(itemText);
    newItem.appendChild(checkBtn);
    newItem.appendChild(deleteBtn);
    fragment.appendChild(newItem);
    
    toDoList.appendChild(fragment);
    itemInput.value = "";
}
function deleteCheck(e) {
    const clicked = e.target;
    if(clicked.classList[0] === 'delete-button') {
        clicked.parentElement.remove();
        
    } else if(clicked.classList[0] === 'check-button') {
        clicked.parentElement.classList.toggle('checked');
    }
} 



// Event listeners


addButton.addEventListener("click", addItem, false);
toDoList.addEventListener("click", deleteCheck, false);


