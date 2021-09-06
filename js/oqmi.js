function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        if(minutes==5&&seconds==00){
            $("#exampleModal").modal()
        }
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
        
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 20,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode !=88&&(charCode != 120 &&(charCode < 48 || charCode > 57)))){
        return false;
    }
    return true;
}

$(".form-input").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next('.form-input').focus();
  }
});
$(document).ready(function(){
    $(".bullets").css({'height':($(".oqmi").height()+'px')});
});
$(window).resize(function(){
    $(".bullets").css({'height':($(".oqmi").height()+'px')});
});

$(document).ready(function(){
    var resize = new Array('.resizable');
    resize = resize.join(',');
    
    //resets the font size when "reset" is clicked
    var resetFont = $(resize).css('font-size');
      $(".reset").click(function(){
        $(resize).css('font-size', resetFont);
      });
    
    //increases font size when "+" is clicked
    $(".increase").click(function(){
      var originalFontSize = $(resize).css('font-size');
      var originalFontLineHeight = $(resize).css('line-height');
      var originalFontNumber = parseFloat(originalFontSize, 10);
      var originalFontLineSpace = parseFloat(originalFontLineHeight, 10);
      var newFontSize = originalFontNumber*1.2;
      var newFontLineHeight = originalFontLineSpace+3+"px";
      $(resize).css('font-size', newFontSize);
      $(resize).css('line-height', newFontLineHeight);
      return false;
    });
    
    //decrease font size when "-" is clicked
    
    $(".decrease").click(function(){
      var originalFontSize = $(resize).css('font-size');
      var originalFontLineHeight = $(resize).css('line-height');
      var originalFontNumber = parseFloat(originalFontSize, 10);
      var originalFontLineSpace = parseFloat(originalFontLineHeight, 10);
      var newFontSize = originalFontNumber*0.8;
      var newFontLineHeight = originalFontLineSpace-3+"px";
      $(resize).css('font-size', newFontSize);
      $(resize).css('line-height', newFontLineHeight);
      return false;
    });
    
  });