$(function() {
var display = $('#flowTimer');
var length; 
// var shortCount = 0;

    
$('#go').on('click', function(e) {
        e.preventDefault();
  /*  var type = input.prop(checked).attr('id');  // part 1 - counting short breaks             
        if (type === 'short') {
        shortCount += 1;
    }  */ 
    length = new Date().getTime() + ($("input:checked").next().children().val() * 60 * 1000);
    
    display.countdown(length, function(event) {
    $(this).html(event.strftime('%M:%S'));    
    })
    .on('finish.countdown', function() {    
        $(this).text('BZZZ');   
/*         if($('input:checked').attr('id') === 'work' && shortCount%3 === 0){  //part 2 - if I've taken 3 short breaks
          $('input').prop('checked', false);                                    // give me a long break
          $('#long').prop('checked', true);
        } else if ($("input:checked").attr('id') === 'short') {
          $("input").prop('checked', false);            
          $('#work').prop('checked', true);
        } else {
          $("input").prop('checked', false); 
          $('#short').prop('checked', true);
} */
    
    });
 
  });    
    
});

