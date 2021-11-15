// username use cookie
const logginbtn = document.getElementById('toggleLogin');
const textusername = document.getElementById('usernametext');

logginbtn.addEventListener('click', event => {
    let person = prompt("Please enter your Username:");
    
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

//-------------------------------------------------------------------------------------

class CookieUtil {
    static get(name) {
        let cookieName = `${encodeURIComponent(name)}=`,
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;


        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(
                document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
            );
        }

        return cookieValue;
    }

    static set(name, value, expires) {
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        if (expires) {
            cookieText += `; max-age=${expires}`;
        }
        console.log(`cookieText = ${cookieText}`);
        document.cookie = cookieText;
    }

    static unset(name) {
        CookieUtil.set(name, "none", new Date(0));
    }
}

//-------------------------------------------------------------------------------------