var playSound=function(){var t=new AudioContext,e=t.createOscillator(),a=t.createOscillator();e.type="triangle",a.type="triangle";var n=t.createGain();n.gain.value=.05,e.connect(n),a.connect(n),n.connect(t.destination);var r=1,c=t.currentTime;e.start(c),a.start(c),e.stop(c+r),a.stop(c+r)};