// function imprimer() {
//   const imprim = document.getElementById("imprim");
//   imprim.addEventListener("click", (e) => {
//     var printContents = document.getElementById("sectionAimprimer").innerHTML;
//     var originalContents = documnt.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
//   });
// }
// imprimer();

function print(pdf) {
  // Créer un IFrame.
  var iframe = document.createElement("iframe");
  // Cacher le IFrame.
  iframe.style.visibility = "hidden";
  // Définir la source.
  iframe.src = pdf;
  // Ajouter le IFrame sur la page Web.
  document.body.appendChild(iframe);
  iframe.contentWindow.focus();
  iframe.contentWindow.print(); // Imprimer.
}
