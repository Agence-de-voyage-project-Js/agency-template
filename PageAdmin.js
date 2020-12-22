const form = document.querySelector("form");
const ajoutVol = document.querySelector(".ajoutVol");
const vols = JSON.parse(localStorage.getItem('vols')) || []

ajoutVol.addEventListener("click", (e) => {
  e.preventDefault();
  depart = document.getElementById("depart");
  departSelection = depart.options[depart.selectedIndex].text;
  numVol = document.getElementById("numVol").value;
  avion = document.getElementById("typeavion");
  typeAvion = avion.options[avion.selectedIndex].text;

  sieges = document.getElementById("sieges");
  dataList = document.getElementById("defaultNumbers");
  // const nbrSieges = sieges.list.options[sieges.selectedIndex].value;zzz
  arrivee = document.getElementById("arrivee");
  arriveeSelection = arrivee.options[arrivee.selectedIndex].text;

  hVol = document.getElementById("heureVol");
  hVoldepart = hVol.value;
  hVola = document.getElementById("heureVolarrivee");
  hVolarrivee = hVola.value;

  const vol = {
    numVol,
    typeAvion,
    hVoldepart,
    hVolarrivee,
    arriveeSelection,
    departSelection,
  };

  vols.push(vol);
  localStorage.setItem('vols',JSON.stringify(vols));
});
