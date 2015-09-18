
    var display = document.querySelector('#flowTimer');
    var timer, length;

    
    document.querySelector('#go').addEventListener('click', function(e) {
        e.preventDefault();
        length = $("input:checked").next().children().val();
        timer = new countDownTimer(length*60, 1000);
        timer.start();
        timer.onTick(format);
    });
    
     function restart() {
        if (this.expired()) {
            setTimeout(function() { timer.start();}, 1000);
        }
    } 
    
    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }
