$(document).ready(function(){
  $('#a1').focus()
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        if(minutes==5&&seconds==00){
            $("#exampleModal").modal();
            $(".time-left").addClass('droiwureba');
        }
        if(minutes==0&&seconds==01){
          document.getElementById("oqmi").submit();
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
    if(!$(evt.path).val() && (charCode == 4334 || charCode == 120 || charCode == 1093)){
      return evt.target.value = "X" 
    }

    else if (charCode > 31 && (charCode !=88&&(charCode != 120 &&(charCode < 48 || charCode > 57)))){
        return false;
    }
    else return evt.key;
}
$(".form-input").mousedown(function () {
  if (this.value.length == this.maxLength) {
    $(this).val('')
  }
});
$(".form-input").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next('.form-input').focus();
  }
});
$("#a4").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#b1").focus();
  }
});
$("#b4").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#c1").focus();
  }
});
$("#c4").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#d1").focus();
  }
});
$("#d4").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#e1").focus();
  }
});
$("#e4").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#f1").focus();
  }
});
$("#f4").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#g1").focus();
  }
});
$("#g4").keyup(function () {
  if (this.value.length == this.maxLength) {
    if(document.getElementById("tb1")){
      $("#tb1").focus();
    }else{
      $("#h1").focus();
    }
  }
});
$("#tb4").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#tb5").focus();
  }
});
$("#tb8").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#tb9").focus();
  }
});
$("#tb12").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#i1").focus();
  }
});
$("#h4").keyup(function () {
  if (this.value.length == this.maxLength) {
    $("#i1").focus();
  }
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
    let lineHeight = getCookie("saveLineHeight")
      if(size !="" && lineHeight !=""){
      $(resize).css('font-size',size)
      $(resize).css('line-height',lineHeight)
      }

    //increases font size when "+" is clicked
    $(".increase").click(function(){
      var originalFontSize = $(resize).css('font-size');
      var originalFontLineHeight = $(resize).css('line-height');
      var originalFontNumber = parseFloat(originalFontSize, 10);
      var originalFontLineSpace = parseFloat(originalFontLineHeight, 10);
      $(resize).css('font-size', originalFontNumber*1.2);
      $(resize).css('line-height', originalFontLineSpace+4+"px");
      setCookie("saveFontSize", $(resize).css('font-size'));
      setCookie("saveLineHeight", $(resize).css('line-height'));
      console.log(document.cookie)
      console.log( $(resize).css('font-size'))
      console.log( $(resize).css('line-height'))
      console.log(size)
      console.log(lineHeight)
       return false;
    });
    
    //decrease font size when "-" is clicked
    $(".decrease").click(function(){
      var originalFontSize = $(resize).css('font-size');
      var originalFontLineHeight = $(resize).css('line-height');
      var originalFontNumber = parseFloat(originalFontSize, 10);
      var originalFontLineSpace = parseFloat(originalFontLineHeight, 10);
      $(resize).css('font-size', originalFontNumber*0.8);
      $(resize).css('line-height', originalFontLineSpace-4+"px");
      setCookie("saveFontSize", $(resize).css('font-size'));
      setCookie("saveLineHeight", $(resize).css('line-height'));
      console.log(document.cookie)
      console.log( $(resize).css('font-size'))
      console.log( $(resize).css('line-height'))
      console.log(size)
      console.log(lineHeight)
       return false;
    });
    
  });
