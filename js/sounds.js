var playSound = function(){

var context = new AudioContext();

var osc1 = context.createOscillator(),
    osc2 = context.createOscillator();
     
osc1.type = 'triangle';
osc2.type = 'triangle';

var volume = context.createGain();
 
volume.gain.value = 0.05;

// connect oscillators to the GainNode
osc1.connect(volume);
osc2.connect(volume);

// connect GainNode to the speakers
volume.connect(context.destination);

// play oscillator (in seconds)
var duration = 1;
var startTime = context.currentTime;
    

osc1.start(startTime);
osc2.start(startTime);
        
osc1.stop(startTime + duration);
osc2.stop(startTime + duration);
    
};

