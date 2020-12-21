const users = JSON.parse(localStorage.getItem('users')) || []
const email=document.querySelector('#email')
const pass=document.querySelector('#pass')
const pass2=document.querySelector('#pass2')
const form=document.querySelector('form')




form.addEventListener('submit', e => {
 e.preventDefault();
 if(pass.value==pass2.value){
    const iemail = email.value.trim();
    const ipassword = pass.value.trim();
    console.log(iemail);
        const user={
           email : iemail,
           password : ipassword,
           id: Math.floor(Math.random()*1000),
           role:'user',
           connected:'true',
        };
    const existant = users.find(user => user.email===iemail)
    if (!existant){
       users.push(user);
       localStorage.setItem('users',JSON.stringify(users));
       location.href='index.html'
     }
     else{
         alert('Email deja existant')
     }
     
  }
  else{
    alert('Logging ou mot de passe incorrect')
  }

});
