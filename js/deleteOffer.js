function deleteOffer(index){
    const offers = JSON.parse(localStorage.getItem('offers')) || [] ;
    offers.splice(index,1);
    localStorage.setItem("offers", JSON.stringify(offers));

    // re affiche de liste
    addOffers(); 
}