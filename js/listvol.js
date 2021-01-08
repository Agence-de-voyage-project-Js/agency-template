function affichVol() {
  const vols = JSON.parse(localStorage.getItem("vols")) || [];
  const infovol = document.getElementById("vol");
  if (vols.length > 0) {
    infovol.innerHTML = "";
    vols.forEach((vol, index) => {
      const ligne = document.createElement("tr");
      data = "";
      // parsing date
      var date1 = new Date(vol.hVoldepart);
      var dateDep = date1.toLocaleDateString();
      var timeDep = date1.toLocaleTimeString();

      var date2 = new Date(vol.hVolarrivee);
      var dateAr = date2.toLocaleDateString();
      var timeAr = date2.toLocaleTimeString();

      data += "<td>" + vol.numVol + "</td>";
      data += "<td>" + dateDep + "  " + timeDep + "</td>";
      data += "<td>" + vol.departSelection + "</td>";
      data += "<td>" + dateAr + "  " + timeAr + "</td>";
      data += "<td>" + vol.arriveeSelection + "</td>";
      data += "<td>" + vol.prixVol + "</td>";
      data +=
        "<td>" +
        '<button type="button" data-toggle="modal" data-target="#exampleModal2" class="btn btn-primary text-white " id="edit"><i class="fa fa-edit text-white "></i> Edit</button>' +
        '<button class="btn btn-danger text-white" onclick="deleteVol(' +
        index +
        ')"><i class="fa fa-trash text-white"> Delete</i></button>' +
        "</td>";

      ligne.innerHTML = data;

      infovol.appendChild(ligne);
    });
  }
}

affichVol();
