const adultNbr=document.getElementById('adultNbr')
function valider(){
    const vols = JSON.parse(localStorage.getItem("vols")) || [];
    const volsFound = JSON.parse(localStorage.getItem("volsFound")) || [];

    var selections = document.querySelectorAll('#selectionner');
    selections.forEach((selection, i) => {
    selection.addEventListener("click", (e) => {
        e.preventDefault();
        var index=i; 
        numVolValid=volsFound[index].numVol;
        prixTotal=volsFound[index].prixVol;
        // console.log(prixTotal);
        const volValid = vols.find(vol => vol.numVol===numVolValid);
        const prixVol = volValid.prixVol; 
        // console.log(prixVol)   
        const nbeAdult = prixTotal/prixVol; 
        console.log(nbeAdult); 
        JSON.parse(localStorage.setItem("nbresv",nbeAdult))
        // location.href="validation.html"
    });
  
    });
};
valider();