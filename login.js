var users = JSON.parse(localStorage.getItem('users')) || [];

const formLogin = document.querySelector('form')



formLogin.addEventListener('submit' , (e) =>{
    e.preventDefault();
var userInfo = users.find(user => user.email === formLogin.email1.value && user.password === formLogin.password1.value)
console.log(userInfo);
if (userInfo){
    var userConnecte ={ email:userInfo.email , id:userInfo.id}
    localStorage.setItem('Connect', JSON.stringify(userConnecte))
    console.log(userConnecte);
    location.href='index.html';
}
else{
    alert('Email or Password not found')
}
})

