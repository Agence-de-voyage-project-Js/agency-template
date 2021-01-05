function connected(){
    const connectedUser = localStorage.getItem('connectedUser')
    if ( !connectedUser ){
        location.href='login.html';
    }
}
function connectedAdmin(){
    const Users = localStorage.getItem('users')
    console.log(Users);
    if (user!==null){
        
        if (users.role !== 'admin'){
            console.log(users.role);
            location.href = 'login.html';
        }
        
    }
    else {
        location.href='login.html';
    }
}