// esercizio

// creare uno slider di immagini



$(document).ready (

  function() {

// cliccando sul tasto freccia destra genero un evento

// slider img successiva
$(".next").click (

  function() {
    immagineSuccessiva();


  });




// slider img precedente

  $(".prev").click (

    function() {
      // immaginePrecedente();


    });


  });





//funzioni

//ho bisogno di una funzione che, cliccando sulla freccia dx, mi permetta di passare dall'immagine corrente a quella successiva
// questa stessa funzione deve evidenziare il cerchietto dell'immagine che è visibile in quel momento.


function immagineSuccessiva() {


// definisco la mia variabile riferita all'immagine che al momento risulta selezionata,visibile
  var immagineSelezionata = $(" .images img.active ");

// rimuovo la classe " active" all'immagine che al momento è visibile e(..)
  immagineSelezionata.removeClass("active");


  // aggiungo la classe " active" all'immagine successiva.

immagineSelezionata.next().addClass("active");




};


//ho bisogno di una funzione che, cliccando sulla freccia sx, mi permetta di passare dall'immagine corrente a quella precedente
// questa stessa funzione deve evidenziare il cerchietto dell'immagine che è visibile in quel momento.
