function connected(){
    const connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    if ( !connectedUser ){
        location.href='login.html';
    }
}
function connectedAdmin(){
    const connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
    if (connectedUser!==null){
        // console.log(connectedUser);
        if (connectedUser.role != 'admin'){
            location.href = 'index.html';
        }
        
    }
    else {
        location.href='login.html';
    }
}