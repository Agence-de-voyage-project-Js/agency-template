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
  dataList = document.getElementById("defaultNumbers");
  // const nbrSieges = sieges.list.options[sieges.selectedIndex].value;
  arrivee = document.getElementById("arrivee");
  arriveeSelection = arrivee.options[arrivee.selectedIndex].text;
  // console.log(sieges.list.options[1].value);
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
  console.log(vol);
});
