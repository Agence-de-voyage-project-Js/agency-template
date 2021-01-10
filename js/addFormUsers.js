function addFormNumber() {
  const nbrAdults = localStorage.getItem("nbresv");
  for (var i = 1; i <= nbrAdults; i++) {
    const formList = document.getElementById("adultNbr");
    const form = document.createElement("div");
    // formList.innerHTML = "";
    const form1 = ` <form>
    <h2>Merci de saisir les coordonnées du passager N°${i} </h2> 

    <div class="form-row">
    <div class="form-group col-md-6">
      
        <label for="inputEmail4">Nom</label>
        <input type="text" class="form-control Noms" id="Nom" placeholder="Nom" />
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Prenom</label>
        <input type="text" class="form-control prenoms" id="prenom" placeholder="Prenom" />
      </div>
    </div>
    <div class="form-group">
      <label for="inputAddress">Addresse</label>
      <input type="text" class="form-control inputsAddress" id="inputAddress" placeholder="Adresse" />
    </div>
    <div class="form-group">
      <label for="inputAddress2">E-mail</label>
      <input type="text" class="form-control E-mails" id="E-mail" placeholder="E-mail" />
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">Num Tel</label>
        <input type="number" class="form-control num-tels" id="num-tel" />
      </div>
    </div>
  </form> 
  <br> <br>`;
    form.innerHTML = form1;
    formList.appendChild(form);
  }
}

addFormNumber();

function verifInfo() {
  const validForm = document.getElementById("validerForm");
  const coorUser = JSON.parse(localStorage.getItem("coorUser")) || [];
  validForm.addEventListener("click", (e) => {
    const nbrAdults = localStorage.getItem("nbresv");

    const noms = document.querySelectorAll(".Noms");
    const prenoms = document.querySelectorAll(".prenoms");
    const adress = document.querySelectorAll(".inputsAddress");
    const emails = document.querySelectorAll(".E-mails");
    const tels = document.querySelectorAll(".num-tels");

    for (let i = 0; i < nbrAdults; i++) {
      const nom = noms[i].value;
      const prenom = prenoms[i].value;
      const adres = adress[i].value;
      const email = emails[i].value;
      const tel = tels[i].value;
      const user = {
        nom,
        prenom,
        adres,
        email,
        tel,
      };
      if (
        noms[i].value == "" ||
        prenoms[i].value == "" ||
        adress[i].value == "" ||
        emails[i].value == "" ||
        tels[i].value == ""
      ) {
        alert("merci de verifier la saisie de tous les champs");
        noms[i].value = "";
        prenoms[i].value = "";
        adress[i].value = "";
        emails[i].value = "";
        tels[i].value = "";
      } else {
        coorUser.push(user);
        console.log(coorUser);

        localStorage.setItem("coorUser", JSON.stringify(coorUser));
        location.href = "invoice.html";
      }
    }
  });
}

verifInfo();
