// modal of edit
const date2 = document.getElementById('date2');
const lprice2 = document.getElementById('lprice2');
const nprice2 = document.getElementById('nprice2');
const country2 = document.getElementById('country2');
const description2 = document.getElementById('description2');
const image2 = document.getAnimations('image2')
function edit (i){

            var offers = JSON.parse(localStorage.getItem("offers")) || [];
            date2.value = offers[i].date;
            lprice2.value = offers[i].lprice;
            nprice2.value = offers[i].nprice;
            country2.value = offers[i].country;
            description2.value = offers[i].description;

}



function updateEdit(i){
    // data of card admin
const image1 = document.getElementById('image1');
const date1 = document.getElementById('date1').value;
const lprice1 = document.getElementById('lprice1').value;
const nprice1 = document.getElementById('nprice1').value;
const country1 = document.getElementById('country1').value;
const description1 = document.getElementById('description1').value;
    var offers = JSON.parse(localStorage.getItem('offers')) || [];

    date2.value = date1;
    console.log(date2.value);

}