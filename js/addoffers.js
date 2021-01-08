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
              <p class="card-text" id="description1">${offer.description}</p>
              <a  class="btn btn-primary primary-btn" id="edit" onclick = "editOffer()">Edit<span class="lnr lnr-arrow-right"></span></a>
             
              <a  class="btn btn-primary primary-btn" onclick = "deleteOffer()">Delete<span class="lnr lnr-arrow-right"></span></a>
            </div>
            
            </div>
        </div>
        </div>`;

        card.innerHTML = html,
        cardList.appendChild(card);


    });
}

function editOffer(){
    var offers = JSON.parse(localStorage.getItem('offers')) || [];
    const edit = document.getElementById('edit');
     edit.addEventListener('click', e =>{
          const editModal =`
          <div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">New Offer</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Offer Duration:</label>
                      <input type="text" class="form-control" id="date" placeholder="For ... To ...">
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">later Price:</label>
                      <input type="text" class="form-control" id="lprice" placeholder="Later Price DT/Per">
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">New Price:</label>
                      <input type="text" class="form-control" id="nprice" placeholder="New Price DT/Per">
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Name of Country:</label>
                      <input type="text" class="form-control" id="country" placeholder="Name of Country">
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Description:</label>
                      <textarea type="text" class="form-control" id="description" placeholder="Description"></textarea>
                                    </div>
                                    <div class="form-group">
                                      <form>
                                          <div class="form-group">
                                            <label for="exampleFormControlFile1">Image of country</label>
                                            <input type="file" class="form-control-file" id="image">
                                          </div>
                                        </form>
                                    </div>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" id="button">Add Offer</button>
                                  </form>
      
      
                                </div>
                              </div>
                            </div>
                  </div>
              </div>
          `
     })

}



