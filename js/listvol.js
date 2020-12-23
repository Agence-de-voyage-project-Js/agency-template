function affichVol(){
  const vols = JSON.parse(localStorage.getItem('vols')) || []
  const infovol = document.getElementById('vol')
  data='';
  if (vols.length > 0) {
      for (i = 0; i < vols.length; i++) {
        data += '<tr>';
        data += '<td>' + vols[i].numVol + '</td>';
        data += '<td>' + 'DEPART' + '</td>'
        data += '<td>' + vols[i].hVoldepart + '</td>';
        data += '<td>' + vols[i].departSelection + '</td>';
        data += '<td>' + 'ARRIVEE' + '</td>'
        data += '<td>' + vols[i].hVolarrivee + '</td>';
        data += '<td>' + vols[i].arriveeSelection + '</td>'
        data += '<td><i class="fas fa-trash delete">Edit</i></td>';
        data += '<td><i class="fas fa-pen edit">Delete</i></td>';
        data += '</tr>';
      }
    }
    return infovol.innerHTML = data;
}
console.log(affichVol());
