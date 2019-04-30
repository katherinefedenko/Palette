window.onload = function() {
    var currColor = document.getElementById('currColor');
    var prevColor = document.getElementById('prevColor');
    var paintBucket = document.getElementById("paintBucket");
    var canvasBox = document.getElementById('canvas');
    var transform = document.getElementById('transform');

    var setColor = function(){
        canvasBox.removeEventListener('click', circleSquare, false);
        canvasBox.addEventListener('click', setBoxColor, false);
    }
    var setBoxColor = function(e){
        if(e.target && e.target.nodeName == 'DIV'){
            e.target.style.backgroundColor = currColor.value;
        } 
    }
    paintBucket.addEventListener('click' , setColor, false);

    var red = document.getElementById('red');
    var redColor = document.getElementById('inputRed');
    var blue = document.getElementById('blue');
    var blueColor = document.getElementById('inputBlue');

    var redToCurrent = function(){
        if(currColor.value != redColor.value){
            prevColor.value = currColor.value;
            currColor.value = redColor.value; 
        }
    }
    red.addEventListener('click', redToCurrent, false);

    var blueToCurrent = function(){
        if(currColor.value != blueColor.value){
            prevColor.value = currColor.value;
            currColor.value = blueColor.value; 
        }
    }
    blue.addEventListener('click', blueToCurrent, false);

    var transformer = function (e){
        canvasBox.removeEventListener('click', setBoxColor, false);
        canvasBox.addEventListener('click', circleSquare, false);
    }
    var circleSquare = function(e){
        if(e.target && e.target.nodeName == 'DIV'){
            if(!e.target.style.borderRadius) e.target.style.borderRadius = '50%';
            else{
                e.target.style.borderRadius = null;
            }
        } 
    }
    transform.addEventListener('click', transformer, false);

    var chooseColor = document.getElementById('chooseColor');
    var colorFromInput = document.getElementById('pickColorFromInput');
    var colorPicker = function(){
        if(currColor.value != colorFromInput.value){
        prevColor.value = currColor.value;
        currColor.value = colorFromInput.value;
        }
    }
    chooseColor.addEventListener('click', colorPicker, false);
    
    document.onkeypress = function(e){
        if(e.keyCode == 112) setColor();            //'p'  
        else if(e.keyCode == 99) colorPicker();     //'c'
        else if(e.keyCode == 116) transformer();    //'t'
        else if(e.keyCode == 114) redToCurrent();   //'r'
        else if(e.keyCode == 98) blueToCurrent();   //'b'
    }
};