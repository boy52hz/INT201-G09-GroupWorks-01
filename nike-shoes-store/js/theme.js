const themeBtn = document.getElementById('box');

const updateTheme = () => { 
    themeBtn.checked?document.body.classList.add("bg-dark"):document.body.classList.remove("bg-dark")        //*
}

themeBtn.addEventListener('click', () => {
    if(+localStorage.getItem('darkModeStatus') === 1){          //*
        localStorage.setItem('darkModeStatus', 0)               //*
    }else{                                                      //*
        localStorage.setItem('darkModeStatus', 1)               //*
    }                                                           //*
    updateTheme()                                               //*
});

window.addEventListener('DOMContentLoaded', event => {
    if(+localStorage.getItem('darkModeStatus') === 1){
        themeBtn.checked = true
    }else{
        themeBtn.checked = false
    }
    updateTheme()
})
