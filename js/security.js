function connected(){
    const connectedUser = localStorage.getItem('connectedUser')
    if ( !connectedUser ){
        location.href='login.html';
    }
}
function connectedAdmin(){
    const connectedUser = localStorage.getItem('connectedUser')
    if (connectedUser!==null){
        if (connectedUser.role !== 'admin'){
            location.href = 'login.html';
        }
    }else {
        location.href='login.html';
    }
}