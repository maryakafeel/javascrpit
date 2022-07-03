var  count=document.getElementById("sec")
var startButton=document.getElementById("startButton")
var stopButton=document.getElementById("stopButton")
var resetButton=document.getElementById("resetButton")


var seconds=0
var milisec=0
var minutes=0





function cntdown(){
    var timeDisplay=document.getElementById("sec");
    var minutes=Math.floor(mySeconds/60);
    var seconds=mySeconds-(min*60);
    if (sec < 10) {
    sec="0"+sec;
    }
    var message=min.toString()+":"+sec;
    timeDisplay.innerHTML=message;
    if(mySeconds===0){
    alert("Done");
    clearInterval(intervalHandle);
    resetPage();
    }
    mySeconds--;
    }