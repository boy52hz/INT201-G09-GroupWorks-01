import CookieUtil from './classes/CookieUtil.js';
// username use cookie
const logginbtn = document.getElementById('toggleLogin');
const textusername = document.getElementById('usernametext');

logginbtn.addEventListener('click', event => {
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
    textusername.textContent = userinput;
})

document.addEventListener('DOMContentLoaded', function() {
    if(CookieUtil.get("username") === null){
        textusername.textContent = "guest";
    } else {
        textusername.textContent = CookieUtil.get("username");
    }
 }, false);
