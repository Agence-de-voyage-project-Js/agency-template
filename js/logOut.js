const logut = document.getElementById("logOut");
console.log(logut);
logut.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("connectedUser");
  location.href = "index.html";
});
