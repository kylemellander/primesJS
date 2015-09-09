$(document).ready( function() {
  $('form').submit( function(event) {
    var number = parseInt($("#number").val());
    var result = primeNumberOutput(number);

    $("#results").text(result);
    $("#results").show();
    $('.ui.basic.modal')
      .modal('show')
    ;
    $('.ui.basic.modal')
    .transition({
      animation : 'jiggle',
    })
    ;

    event.preventDefault();
  })
})
