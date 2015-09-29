window.onload = init;
var context;
var bufferLoader;

function init() {
  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();
  bufferLoader = new BufferLoader(
    context,
    [    
//'bang.mp3
'../sounds/boards.m4a',
'../sounds/eyes.mp3',
'../sounds/feel.m4a',
'../sounds/glory.mp3',
'../sounds/kia.m4a',
'../sounds/offended.mp3',
'../sounds/styles.m4a',
'../sounds/water.m4a',
'../sounds/water2.m4a'
    ],
    finishedLoading
    );

  bufferLoader.load();
}

// creating BufferLoader class

function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}


BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}

// playing sound

function finishedLoading(bufferList) {
 console.log('Yay, loaded');
}

function playSuccessSound() {
  var soundArray = bufferLoader.bufferList; 
  var sound = soundArray[Math.floor(Math.random()*soundArray.length)];
  var source1 = context.createBufferSource();
  source1.buffer = sound;
  source1.connect(context.destination);   
  source1.start(0);  
}


    


    