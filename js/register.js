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
    let id = users.length;
    if (id !== 0){
       id = users[users.length-1].id + 1;
    }
        const user={
           email : iemail,
           password : ipassword,
           id: users.length,
           role:'user'
        };
    const userFound = users.find(user => user.email===iemail)
    if (userFound === undefined){
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
