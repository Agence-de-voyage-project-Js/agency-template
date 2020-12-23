function affichVol(){
  const vols = JSON.parse(localStorage.getItem('vols')) || []
  const infovol = document.getElementById('vol')
  if (vols.length > 0) {
    vols.forEach((vol, index) => {
      const ligne = document.createElement('tr');
      const i=index+1
        data='';
        data += '<td>' + vol.numVol + '</td>';
        data += '<td>' + vol.hVoldepart + '</td>';
        data += '<td>' + vol.departSelection + '</td>';
        data += '<td>' + vol.hVolarrivee + '</td>';
        data += '<td>' + vol.arriveeSelection + '</td>'
        data += '<td>'+
        '<button class="btn btn-info text-white"><i class="fa fa-edit text-white"></i> Edit</button>'
        +'<button class="btn btn-danger text-white"><i class="fa fa-trash text-white"> Delete</i></button>'
        +'</td>';
        
        ligne.innerHTML = data;

        infovol.appendChild(ligne)
      });
    }
}

affichVol();
