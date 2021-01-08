function affichFlight() {
  const volsFound = JSON.parse(localStorage.getItem("volsFound")) || [];
  const infoFlight = document.getElementById("flight");
  if (volsFound.length > 0) {
    infoFlight.innerHTML = "";
    volsFound.forEach((vol) => {
      const ligne = document.createElement("tr");
      data = "";
      // parsing date
      var date1 = new Date(vol.hVoldepart);
      var dateDep = date1.toLocaleDateString();
      var timeDep = date1.toLocaleTimeString();

      var date2 = new Date(vol.hVolarrivee);
      var dateAr = date2.toLocaleDateString();
      var timeAr = date2.toLocaleTimeString();

      data += "<td>" + vol.numVol + "</td>";
      data += "<td>" + dateDep + "  " + timeDep + "</td>";
      data += "<td>" + vol.departSelection + "</td>";
      data += "<td>" + dateAr + "  " + timeAr + "</td>";
      data += "<td>" + vol.arriveeSelection + "</td>";
      data += "<td>" + vol.prixVol + "</td>";
      data +=
        "<td>" +
        '<button type="button" class="btn btn-primary text-white " id="selectionner"> Selectionner</button>' +
        "</td>";
      ligne.innerHTML = data;

      infoFlight.appendChild(ligne);
    });
  }
}

affichFlight();

function selectionVol() {
  var selections = document.querySelectorAll("#selectionner");
  const connectedUser = JSON.parse(localStorage.getItem("connectedUser")) || "";
  const volsFound = JSON.parse(localStorage.getItem("volsFound")) || "";
  console.log(connectedUser);
  selections.forEach((element, i) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      if (connectedUser == "") {
        window.location.href = "login.html";
      } else {
        var index = i;
        console.log(volsFound[index]);
      }
    });
  });
}
selectionVol();
