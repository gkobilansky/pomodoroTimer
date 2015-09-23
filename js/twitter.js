  
// twitter button	
$('.tweet').on('click', function(e){
    e.preventDefault();
    var loc = window.location.href;
    console.log(loc);
    var howMuchWork = (workCount-4).toString();
    var title = 'Completed ' + howMuchWork + ' productive sessions thanks to the ' + escape($(this).attr('title')); 
    window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});  