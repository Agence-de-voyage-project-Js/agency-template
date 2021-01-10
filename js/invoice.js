function add() {
  const ligne = document.createElement("tr");
  const cards = document.querySelector("#card");
  const nbreAdult = JSON.parse(localStorage.getItem("nbresv"));

  const volSelect = JSON.parse(localStorage.getItem("volsSelection"));
  const prixU = volSelect[0].prixVol / nbreAdult;
  ligne.className = "item";
  const contenu = `
<td>Vol allant de ${volSelect[0].departSelection} vers ${volSelect[0].arriveeSelection} </td>
<td>date de depart le ${volSelect[0].hVoldepart} et l'arrivee est estimée pour le ${volSelect[0].hVolarrivee} </td>



<td style="position: relative; left: 140px">${nbreAdult}</td>
<td style="position: relative; left: 180px">${prixU}DT</td>



`;
  ligne.innerHTML = contenu;
  cards.appendChild(ligne);
  const ligne1 = document.createElement("td");
  const total = document.querySelector("#tot");
  ligne1.className = "total";
  const contenus = ` TOTAL:${volSelect[0].prixVol}DT`;
  ligne1.innerHTML = contenus;
  total.append(ligne1);
}
add();
function payement() {
  const payer = document.getElementById("payer");
  const nbreAdult = JSON.parse(localStorage.getItem("nbresv"));
  const volsinfo = JSON.parse(localStorage.getItem("volsSelection"));
  const vols = JSON.parse(localStorage.getItem("vols"));
  const numvol = volsinfo[0].numVol;
  for (let i = 0; i < vols.length; i++) {
    if (vols[i].numVol == numvol) {
      vols[i].nbrSieges = vols[i].nbrSieges - nbreAdult;
    }
  }
  localStorage.setItem("vols", JSON.stringify(vols));
  payer.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("coorUser");
    localStorage.removeItem("volsFound");
    localStorage.removeItem("volsSelection");
    localStorage.removeItem("nbresv");
    location.href = "index.html";
  });
}
payement();
