const warper = document.querySelector('.warper');

const loginBtn = document.querySelector('.nav-login-button');
const IconClose = document.querySelector('.icon-close');

const LoginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');




loginBtn.addEventListener('click', ()=>{
    warper.classList.add('active-popup');
})

IconClose.addEventListener('click', ()=>{
    warper.classList.remove('active-popup');
});


RegisterLink.addEventListener('click', ()=>{
    warper.classList.add('active');
});

LoginLink.addEventListener('click', ()=>{
    warper.classList.remove('active');
})



/***toggle login warper
 document.querySelector('.nav-login-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    if (warper.classList.contains('ActiveNavBtn')) {
         warper.classList.remove('ActiveNavBtn');        
    } else {
      warper.classList.add('ActiveNavBtn');
    }
  });
 **/