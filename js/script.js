$('.submit').click(function() {
    if(/^(?=.*\d).{11}$/.test($('.id').val())==false){
        $('.personal-id').addClass('error-border');
        $('.id').addClass('error-text');
        $('.error-msg').addClass('shown')
    }else{
        window.open('registration.html','_blank');
    }
 });
 $('.burger').click(function() {
    $('.burger-nav').toggleClass('active-nav');
 });