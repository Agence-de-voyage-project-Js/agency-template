var button = document.getElementById('button')
button.addEventListener('click' , (e) =>{
    e.preventDefault();
    
    var offers = JSON.parse(localStorage.getItem('offers')) || []
    var date = document.getElementById('date').value
    var lprice = document.getElementById('lprice').value
    var nprice = document.getElementById('nprice').value
    var country = document.getElementById('country').value
    var description = document.getElementById('description').value
    var Status = "en cours";

    var offerObject ={
        date,
        lprice,
        nprice,
        country,
        description,
        image,
        Status,
}

if ( 
    date == "" ||
    lprice == "" ||
    nprice == "" ||
    country =="" ||
    description =="" 
){
    alert("Please check your inputs")
}
else{
    offers.push(offerObject)
    localStorage.setItem('offers',JSON.stringify(offers));
    // affichage
    listOffers();
}
})

// function delet offer

function deleteOffer(index){
    const offers = JSON.parse(localStorage.getItem('offers')) || [] ;
    offers.splice(index,1);
    localStorage.setItem("offers", JSON.stringify(offers));

    // re affiche de liste
    listOffers(); 
}
// function add offer

function listOffers(){
    const offers = JSON.parse(localStorage.getItem("offers")) || [];
    const cardList = document.getElementById('card');
    cardList.innerHTML= "";

    offers.forEach((offer, index) => {
        const card = document.createElement('div');
        card.className="col-sm-4";
        const html = 
        `<div class="row">
        <div class="col-xs-12 col-md-4">
          <div class="card h-100" style="width: 18rem;">
          <img src="./images" class="card-img-top" alt="" id="image1" ${offer.image}>
          <div class="bande">
          <div  class="duration" id="date1">${offer.date} </div>
          <div class="rating">
                <a href="#5" title="Donner 5 étoiles">☆</a>
                <a href="#4" title="Donner 4 étoiles">☆</a>
                <a href="#3" title="Donner 3 étoiles">☆</a>
                <a href="#2" title="Donner 2 étoiles">☆</a>
                <a href="#1" title="Donner 1 étoile">☆</a>
               </div>
              
               <div class="prix">
                <h6 class="line" id="lprice1">${offer.lprice}DT/Per</h6>
                <h6 id="nprice1">${offer.nprice}DT/Per</h6>
               </div>
            </div>
            <div class="card-body">
              <h5 class="card-title" style="text-align: center;" id="country1">${offer.country}</h5>
              <p class="card-text " id="description1">${offer.description}</p>
              <button  class="btn btn-primary primary-btn edit1997 " onclick="edit(${index})" data-toggle="modal" data-target="#modalEdit" >Edit<span class="lnr lnr-arrow-right" ></span></button>
              <a  class="btn btn-primary primary-btn" onclick = "deleteOffer()">Delete<span class="lnr lnr-arrow-right"></span></a>
            </div>
            
            </div>
        </div>
        </div>
        `;
        

        card.innerHTML = html,
        cardList.appendChild(card);


    });
}



