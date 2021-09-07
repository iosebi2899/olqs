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
  
  function setCookie(cname,cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
    var resize = new Array('.resizable');
    resize = resize.join(',');
    
    let size = getCookie("saveFontSize");
    setInterval(() => {
      console.log(size)
    }, 1000);
    var originalFontSize = $(resize).css('font-size');
      if(size !=""){
      $(resize).css('font-size',size)
      }
      var originalFontLineHeight = $(resize).css('line-height');
      var originalFontNumber = parseFloat(originalFontSize, 10);
      var originalFontLineSpace = parseFloat(originalFontLineHeight, 10);

    //increases font size when "+" is clicked
    $(".increase").click(function(){
      var newFontSize = originalFontNumber*1.2;
      var newFontLineHeight = originalFontLineSpace+3+"px";
      $(resize).css('font-size', newFontSize);
      $(resize).css('line-height', newFontLineHeight);
      setCookie("saveFontSize", newFontSize);
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
      setCookie("saveFontSize", newFontSize);
       return false;
    });
    
  });
