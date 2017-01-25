$("#validate").click(function() {
  $('#alert').html('');
  // Uncomment for debugging
  $('#result').html(JSON.stringify(sentiment($('#comment').val()), undefined, 2));

  const finalresult = $('#result').text();

  if (finalresult.indexOf("NEGATIVE") >=0) {
      $('#alert').append('<div class="alert alert-danger" role="alert">Din kommentar er alt for negativ. Din konto er suspenderet i 30 minutter. Gå en tur og tænk over livet.</div>');
     } else if (finalresult.indexOf("POSITIVE") >=0) {
       $('#alert').append('<div class="alert alert-success" role="alert">Du har skrevet en positiv kommentar. Den er sendt!</div>');
     } else if (finalresult.indexOf("NEUTRAL") >=0) {
       $('#alert').append('<div class="alert alert-success" role="alert">Du har skrevet en neutral kommentar. Den er sendt!</div>');
     } else if (finalresult.indexOf('"positive": [], "negative": []')) {
         //Fallback
       $('#result').html("Noget gik galt. Prøv igen.");
     }
});
