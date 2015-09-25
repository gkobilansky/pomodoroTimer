// based on tutorial http://code.tutsplus.com/tutorials/the-web-audio-api-adding-sound-to-your-web-app--cms-23790

var context = new AudioContext();

var playSound = function (frequency, startTime, duration) {

var osc1 = context.createOscillator(),
    osc2 = context.createOscillator(),
    volume = context.createGain();
     
// osc wave type
osc1.type = 'triangle';
osc2.type = 'triangle';
    
volume.gain.value = 0.05;    
    
// connect oscillators to the GainNode
osc1.connect(volume);
osc2.connect(volume);    
volume.connect(context.destination); 


// detune osc for chorus effect    
osc1.frequency.value = frequency + 1;
osc2.frequency.value = frequency - 2;    

// fade out
volume.gain.setValueAtTime(0.1, startTime + duration - 0.05);
volume.gain.linearRampToValueAtTime(0, startTime + duration);  
    
// start
osc1.start(startTime);
osc2.start(startTime);
    
    
// stop        
osc1.stop(startTime + duration);
osc2.stop(startTime + duration);    
};

var playSuccessSound = function() {
// Play a 'B' now that lasts for 0.116 seconds
playSound(493.883, context.currentTime, 0.116);
 
// Play an 'E' just as the previous note finishes, that lasts for 0.232 seconds
playSound(659.255, context.currentTime + 0.116, 0.232);
};
