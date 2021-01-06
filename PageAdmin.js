const form = document.querySelector("form");
const ajoutVol = document.querySelector(".ajoutVol");
const vols = JSON.parse(localStorage.getItem("vols")) || [];

ajoutVol.addEventListener("click", (e) => {
  e.preventDefault();
  depart = document.getElementById("depart");
  departSelection = depart.options[depart.selectedIndex].text;
  numVol = document.getElementById("numVol").value;
  avion = document.getElementById("typeavion");
  typeAvion = avion.options[avion.selectedIndex].text;

  sieges = document.getElementById("sieges");
  arriveeSelection = arrivee.options[arrivee.selectedIndex].text;
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
    nbrSieges == "" ||
    hVoldepart >= hVolarrivee
  ) {
    alert("merci de verifier la date de retrour ou la saisie de tous les champs");
  } else {
    vols.push(vol);
    localStorage.setItem("vols", JSON.stringify(vols));
  }
  affichVol();
  document.getElementById("numVol").value = "";
  document.getElementById("typeavion").selectedIndex = "0";
  document.getElementById("depart").selectedIndex = "0";
  document.getElementById("nbreSieges").selectedIndex = "0";
  document.getElementById("arrivee").selectedIndex = "0";
  document.getElementById("heureVol").value = "";
  document.getElementById("heureVolarrivee").value = "";
});
