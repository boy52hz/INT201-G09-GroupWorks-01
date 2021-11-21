const box = document.getElementById('box');
const updateTheme = () => { 
    box.checked?document.body.classList.add("bg-dark"):document.body.classList.remove("bg-dark")        //*
}
box.addEventListener('click', () => {
    if(+localStorage.getItem('darkModeStatus') === 1){          //*
        localStorage.setItem('darkModeStatus', 0)               //*
    }else{                                                      //*
        localStorage.setItem('darkModeStatus', 1)               //*
    }                                                           //*
    updateTheme()                                               //*
});

window.addEventListener('DOMContentLoaded', event => {
    if(+localStorage.getItem('darkModeStatus') === 1){
        box.checked = true
    }else{
        box.checked = false
    }
    updateTheme()
})