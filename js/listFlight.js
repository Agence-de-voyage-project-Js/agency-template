
const booking = document.querySelector("booking-form");
const vols = JSON.parse(localStorage.getItem("vols")) || [];

boutton.addEventListener('click' , (e) =>{
    e.preventDefault();
    const depart = document.getElementById("depart");
    departSelection = depart.options[depart.selectedIndex].text;
    
    const arrivee = document.getElementById("arrivee");
    arriveeSelection = arrivee.options[arrivee.selectedIndex].text;
    
    const hvoldepart = document.getElementById("datepicker");
    const hvolarrivee = document.getElementById("datepicker2");

    var date1 = new Date(hvoldepart.value);
    console.log(hvoldepart.value)
    var d = date1.getDate()
    var m = date1.getMonth()
    var a = date1.getFullYear()
    console.log (d)
    console.log(m)
    console.log(a)

      var date2 = new Date(hvolarrivee);
   
    console.log(departSelection)
    var volFound = vols.filter(vol => (vol.departSelection === departSelection && vol.arriveeSelection === arriveeSelection ) )
    console.log(volFound);
});
// if (volFound !== undefined){}