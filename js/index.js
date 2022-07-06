// password eye
function myfunction(){
    var x = document.getElementById("myin");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if (x.type == 'password'){
        x.type="text";
        y.style.display="block";
        z.style.display="none";
    }
    else{
        x.type="password";
        y.style.display="none";
        z.style.display="block";
    }
}

function my_function(){
    var x = document.getElementById("myinput");
    var y = document.getElementById("hide-1");
    var z = document.getElementById("hide-2");

    if (x.type == 'password'){
        x.type="text";
        y.style.display="block";
        z.style.display="none";
    }
    else{
        x.type="password";
        y.style.display="none";
        z.style.display="block";
    }
}





// sign_in_up_mode

const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', ()=>{
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', ()=>{
    container.classList.remove('sign-up-mode');
});