function deleteVol(index){
    const vols = JSON.parse(localStorage.getItem('vols')) || [] ;
    vols.splice(index,1);
    localStorage.setItem("vols", JSON.stringify(vols));

    // re affiche de liste
    affichVol(); 
}