function affichVol(){
  const vols = JSON.parse(localStorage.getItem('vols')) || []
  const infovol = document.getElementById('vol')
  if (vols.length > 0) {
    vols.forEach((vol, index) => {
      const ligne = document.createElement('tr');
        data='';
        
        data += '<td>' + vol.numVol + '</td>';
        data += '<td>' + 'DEPART' + '</td>'
        data += '<td>' + vol.hVoldepart + '</td>';
        data += '<td>' + vol.departSelection + '</td>';
        data += '<td>' + 'ARRIVEE' + '</td>'
        data += '<td>' + vol.hVolarrivee + '</td>';
        data += '<td>' + vol.arriveeSelection + '</td>'
        data += '<td><i class="fas fa-trash delete">Edit</i></td>';
        data += '<td><i class="fas fa-pen edit">Delete</i></td>';
        
        ligne.innerHTML = data;

        infovol.appendChild(ligne)
      });
    }
}

affichVol();
