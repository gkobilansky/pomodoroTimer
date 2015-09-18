//@codekit-prepend "../bower_components/jquery/dist/jquery.js"

// countdown timer by robbmj http://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer

function countDownTimer(duration, granularity) {
    this.duration = duration;
    this.granularity = granularity;
    this.tickFtns = [];
    this.running = false;
}

countDownTimer.prototype.start = function() {
    if (this.running) {
        return;
    }
    this.running = true;
    var start = Date.now(),
        that = this,
        diff, obj;
    (function timer() {
        diff = that.duration - (((Date.now() - start)/1000) || 0);
        
        if (diff > 0) {
            setTimeout(timer, that.granularity);
        } else {
            diff = 0;
            that.running = false;
        }
        
        obj = countDownTimer.parse(diff);
        that.tickFtns.forEach(function(ftn) {
            ftn.call(this, obj.minutes, obj.seconds);
        }, that);
    }());
};

countDownTimer.prototype.onTick = function(ftn) {
    if (typeof ftn === 'function') {
        this.tickFtns.push(ftn);
    }
    return this;
};
    
countDownTimer.prototype.expired = function() {
    return !this.running;
};
    
countDownTimer.parse = function(seconds) {
    return {'minutes': (seconds / 60) | 0,
            'seconds': (seconds % 60) | 0
           };
};