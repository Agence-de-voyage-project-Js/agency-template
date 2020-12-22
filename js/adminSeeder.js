function  load(){
    const users = JSON.parse(localStorage.getItem('users'))  || [];
    if (users.length === 0){
        const admin1={
            email : "js.wafa@gmail.com",
            password : "123",
            id:0,
            role:'admin'   
        };
        
        const admin2={
            email : "nasserimen102@gmail.com",
            password : "14305193",
            id:1,
            role:'admin'   
        };
        const admin3={
            email : "sofien1@gmail.com",
            password : "12345",
            id:2,
            role:'admin'  
        };
        const admin4={
            email : "imen2@gmail.com",
            password : "6789",
            id:3,
            role:'admin'  
        };

        users.push(admin1);
        users.push(admin2);
        users.push(admin3);
        users.push(admin4);

        localStorage.setItem('users',JSON.stringify(users));
    }

}