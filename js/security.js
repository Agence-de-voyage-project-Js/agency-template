function connected() {
  const connectedUser = localStorage.getItem("connectedUser");
  if (!connectedUser) {
    location.href = "index.html";
  }
}

// function connectedAdmin() {
//   const Users = localStorage.getItem("users");
//   if (user !== null) {
//     if (users.role !== "admin") {
//       location.href = "login.html";
//     }
//   } else {
//     location.href = "indx.html";
//   }
// }
function connectedAdmin() {
  const connectedUser = localStorage.getItem("connectedUser");
  const logout = document.getElementById("signOut");
  logout.addEventListener("click", (e) => {
    e.preventDefault();

    window.localStorage.removeItem("connectedUser");
    location.href = "index.html";
  });
}
connectedAdmin();
