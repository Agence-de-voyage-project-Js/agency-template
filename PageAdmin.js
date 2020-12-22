const form = document.querySelector("form");
const ajoutVol = document.querySelector(".ajoutVol");

ajoutVol.addEventListener("click", (e) => {
  e.preventDefault();
  depart = document.getElementById("depart");
  departSelection = depart.options[depart.selectedIndex].text;
  numVol = document.getElementById("numVol").value;
  avion = document.getElementById("typeavion");
  typeAvion = avion.options[avion.selectedIndex].text;

  sieges = document.getElementById("sieges");
  arrivee = document.getElementById("arrivee");
  arriveeSelection = arrivee.options[arrivee.selectedIndex].text;
  hVol = document.getElementById("heureVol");
  hVoldepart = hVol.value;
  hVola = document.getElementById("heureVolarrivee");
  hVolarrivee = hVola.value;
  nbreSieges = document.getElementById("nbreSieges");
  nbrSieges = nbreSieges.options[nbreSieges.selectedIndex].value;
  const vol = {
    numVol,
    typeAvion,
    hVoldepart,
    hVolarrivee,
    arriveeSelection,
    departSelection,
    nbrSieges,
  };
  if (
    numVol == "" ||
    typeAvion == "" ||
    hVoldepart == "" ||
    hVolarrivee == "" ||
    arriveeSelection == "" ||
    departSelection == "" ||
    nbrSieges == ""
  ) {
    alert("merci de verifier la saisie de tous les champs");
  }
});
