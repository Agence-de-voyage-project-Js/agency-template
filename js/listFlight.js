const booking = document.querySelector("booking-form");
const vols = JSON.parse(localStorage.getItem("vols")) || [];

boutton.addEventListener("click", (e) => {
  e.preventDefault();
  const depart = document.getElementById("depart");
  departSelection = depart.options[depart.selectedIndex].text;

  const arrivee = document.getElementById("arrivee");
  arriveeSelection = arrivee.options[arrivee.selectedIndex].text;

  var hvoldepart = document.getElementById("datepicker");
  var hvolarrivee = document.getElementById("datepicker2");
  var nbrAdults = document.getElementById("adults").value;
  var date1 = new Date(hvoldepart.value);

  var date2 = new Date(hvolarrivee.value);
  if (nbrAdults == "" || nbrAdults == 0) {
    alert("merci de saisir le nombre d'adultes");
  } else {
    var volsFound = vols.filter(
      (vol) =>
        vol.departSelection === departSelection &&
        vol.arriveeSelection === arriveeSelection &&
        new Date(vol.hVoldepart).toLocaleDateString() === date1.toLocaleDateString() &&
        new Date(vol.hVolarrivee).toLocaleDateString() === date2.toLocaleDateString()
    );
    console.log(volsFound);
    if (volsFound.length > 0) {
      volsFound.forEach((element) => {
        element.prixVol = element.prixVol * nbrAdults;
      });

      localStorage.setItem("volsFound", JSON.stringify(volsFound));
      location.href = "listFlight.html";
    } else {
      alert("Il n'y a pas de vol programmé pour cette date");
    }
  }
  //vider les champs apres la saisie//
  document.getElementById("depart").selectedIndex = "0";
  document.getElementById("arrivee").selectedIndex = "0";
  document.getElementById("datepicker").value = "";
  document.getElementById("datepicker2").value = "";
  document.getElementById("adults").value = "";
});
