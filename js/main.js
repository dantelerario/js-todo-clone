// Ricreare la todo list vista oggi durante la lezione (focus dell’esercizio la logica)
// Usiamo i template in html e il clone per separare la parte logica (JS) dalla parte di markup (HTML)
// recap funzionalità: mostrare, aggiungere e eliminare elementi dalla lista

$(document).ready( function() {

  var list = $('.todo');
  var keyInput = $('.addelement');

  keyInput.keyup(function(e) {
    console.log(e.which, e.keyCode);

    if (e.which == 13 || e.keyCode == 13) {
      var inputList = keyInput.val().trim();

        if (inputList.length > 0) {
          var newInputList = $('.template li').clone();
          newInputList.prepend(inputList);
          list.append(newInputList);
          keyInput.val('');
        }
    }
  });

  $('body').on('click', '.todo li i', function() {
    $(this).parent().remove();
  })

















}); /* END DOCUMENT */
