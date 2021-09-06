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

$("#minus").click(function(){
    $('p').filter(function () {
        return $(this).css("font-size") === "16px";
       })
    $(".grid-header").css("font-size",size + "px");
    console.log(`clicked ${$('.grid-header').css('font-size')}`)
})
