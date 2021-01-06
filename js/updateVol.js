function updateVol() {
  const vols = JSON.parse(localStorage.getItem("vols")) || [];
  const editsVol = document.querySelectorAll("#edit");
  console.log(editsVol);
  editsVol.forEach((element, i) => {
    element.addEventListener("click", (e) => {
      const numVol2 = document.getElementById("numVol2");
      numVol2.value = vols[i].numVol;
      const typeAvion2 = document.getElementById("typeavion2");
      typeAvion2.options[typeAvion2.selectedIndex].text = vols[i].typeAvion;
      const nbreSieges2 = document.getElementById("nbreSieges2");
      nbreSieges2.options[nbreSieges2.selectedIndex].text = vols[i].nbrSieges;
      const departselection2 = document.getElementById("depart2");
      departselection2.options[departselection2.selectedIndex].text = vols[i].departSelection;
      const arriveeSelection2 = document.getElementById("arrivee2");
      arriveeSelection2.options[arriveeSelection2.selectedIndex].text = vols[i].arriveeSelection;
      const hdepart2 = document.getElementById("heureVol2");
      hdepart2.value = vols[i].hVoldepart;
      const harrivee2 = document.getElementById("heureVolarrivee2");
      harrivee2.value = vols[i].hVolarrivee;
      // save index
      const index2 = document.getElementById("index");
      index2.value = i;
    });
  });
  // -------------
}
updateVol();

function saveupdate() {
  const vols = JSON.parse(localStorage.getItem("vols")) || [];
  const modifModal = document.getElementById("ajoutVol2");
  const numVol2 = document.getElementById("numVol2");
  const editsVol = document.querySelectorAll(".edit");

  modifModal.addEventListener("click", (e) => {
    const index = document.getElementById("index");
    const i = index.value;
    const modifVol = vols[i];
    vols[i].numVol = document.getElementById("numVol2").value;
    vols[i].typeAvion = document.getElementById("typeavion2").options[
      document.getElementById("typeavion2").selectedIndex
    ].text;
    console.log(vols[i].typeAvion);
    vols[i].nbrSieges = document.getElementById("nbreSieges2").options[
      document.getElementById("nbreSieges2").selectedIndex
    ].text;
    console.log(vols[i].nbrSieges);
    vols[i].departSelection = document.getElementById("depart2").options[
      document.getElementById("depart2").selectedIndex
    ].text;
    console.log(vols[i].departSelection);
    vols[i].arriveeSelection = document.getElementById("arrivee2").options[
      document.getElementById("arrivee2").selectedIndex
    ].text;
    console.log(vols[i].arriveeSelection);
    vols[i].hVoldepart = document.getElementById("heureVol2").value;
    console.log(vols[i].hVoldepart);
    vols[i].hVolarrivee = document.getElementById("heureVolarrivee2").value;
    console.log(vols[i].hVolarrivee);
    var numVol = vols[i].numVol;
    var nbrSieges = vols[i].nbrSieges;
    var typeAvion = vols[i].typeAvion;
    var hVoldepart = vols[i].hVoldepart;
    var hVolarrivee = vols[i].hVolarrivee;
    var departSelection = vols[i].departSelection;
    var arriveeSelection = vols[i].arriveeSelection;
    var updatedVol = {
      numVol,
      typeAvion,
      nbrSieges,
      departSelection,
      arriveeSelection,
      hVoldepart,
      hVolarrivee,
    };
    vols.splice(i, 1, updatedVol);
    localStorage.setItem("vols", JSON.stringify(vols));
    affichVol();
  });
}
saveupdate();
