var users = JSON.parse(localStorage.getItem('users')) || [];
const formLogin = document.querySelector('form')

formLogin.addEventListener('submit' , (e) =>{
    e.preventDefault();
var userFound = users.find(user => user.email === formLogin.email1.value && user.password === formLogin.password1.value)
if (userFound !== undefined){
    localStorage.setItem('connectedUser', JSON.stringify(userFound))
    if (userFound.role == 'admin'){
        location.href = 'pageAdmin.html';
    }
    else{
    location.href='index.html';
    }
}
else{
    alert('Email or Password not found')
}
})

