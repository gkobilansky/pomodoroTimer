//$(function() {
var display = $('#flowTimer');
var length;
var whatFinished;    
var workCount = 4; // bc 0%3 === 0

// Let's flow button sets length, kicks-off timer and assigns an .on finish.countdown event listener
    
$('#go').on('click', function(e) {
    e.preventDefault();

    length = new Date().getTime() + ($('input:checked').next().children().val() * 60 * 1000);
    
    display.countdown(length, function(event) {
    $(this).html(event.strftime('%M:%S'));    
    })
    
    .on('finish.countdown', function() {    
        $(this).text('BZZZ');   
        whatFinished = $( 'input:checked' ).prop( 'id' );
        switchTimer(); 
    });   
  }); 

// after work, take a break, after a break work. if you've worked 3 times, take a long break

var switchTimer = function(){
   if(whatFinished === 'work' && workCount%3 === 0){  
          workCount++;
          $('input').prop('checked', false);                                  
          $('#long').prop('checked', true);
    } else if(whatFinished === 'work'){  
          workCount++;
          $('input').prop('checked', false);                                  
          $('#short').prop('checked', true);   
    } else if (whatFinished === 'short') {
          $('input').prop('checked', false);            
          $('#work').prop('checked', true);
    } else {
          $("input").prop('checked', false); 
          $('#work').prop('checked', true);
}};
    
    
//});

