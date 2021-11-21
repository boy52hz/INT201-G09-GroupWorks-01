import CookieUtil from './classes/CookieUtil.js';
// username use cookie
const logInBtn = document.getElementById('toggleLogin');
const textUsername = document.getElementById('usernametext');

logInBtn.addEventListener('click', event => {
    const person = prompt("Please enter your Username:");  //*
    
    // when user cancel prompt
    if (person === null) return

    let userinput;

    if (person.trim() !== "") {
        userinput = person;
    } else {
        userinput = "guest";
    }
    
    CookieUtil.set("username", `${userinput}`);
    textUsername.textContent = userinput;
})

document.addEventListener('DOMContentLoaded', function() {
    if(CookieUtil.get("username") === null){
        textUsername.textContent = "guest";
    } else {
        textUsername.textContent = CookieUtil.get("username");
    }
 }, false);
