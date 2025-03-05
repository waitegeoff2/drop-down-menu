import "./styles.css"; 

const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-root");
const dropdownRootText = document.querySelector(".dropdown-button");
const dropdownList = document.querySelector(".dropdown-list");
const dropdownOption = document.querySelectorAll(".dd-option");

dropdownButton.addEventListener("click", () =>{
    if(dropdownList.classList.contains("dropdown-list")) {
        dropdownList.classList.add("dropdown-visible");
        dropdownList.classList.remove("dropdown-list");
    } else {
        dropdownList.classList.remove("dropdown-visible");
        dropdownList.classList.add("dropdown-list");
    }
})

dropdownOption.forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('dropdown-hover');
    })
})

dropdownOption.forEach((button) => {
    button.addEventListener('mouseleave', () => {
        button.classList.remove('dropdown-hover');
    })
})

dropdownOption.forEach((button) => {
    button.addEventListener('click', () => {
        dropdownRootText.textContent = button.textContent;
        //can CHANGE THIS BEHAVIOR IF YOU WANT
    })
})

