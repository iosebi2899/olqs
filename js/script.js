$('.submit').click(function() {
    if(/^(?=.*\d).{11}$/.test($('.id').val())==false){
        $('.personal-id').addClass('error-border');
        $('.id').addClass('error-text');
        $('.error-msg').addClass('shown')
    }else{
        window.open('registration.html','_blank');
    }
 });
 $('.reg-submit').click(function() {
    
    if(/^(?=.*\d).{11}$/.test($('#id').val())==false){
        $('#id').addClass('error-input');
        $('.tiny').addClass('shown');
    }else if(!$('#olqNum').val()){
        $('.reg-input').removeClass('error-input');
        $('#olqNum').addClass('error-input');
        $('.tiny').addClass('shown');
    }else if(!$('#name').val()){
        $('.reg-input').removeClass('error-input');
        $('#name').addClass('error-input');
        $('.tiny').addClass('shown');
    }else if(!$('#strNum').val()){
        $('.reg-input').removeClass('error-input');
        $('#strNum').addClass('error-input');
        $('.tiny').addClass('shown');
    }else if(!$('#surname').val()){
        $('.reg-input').removeClass('error-input');
        $('#surname').addClass('error-input');
        $('.tiny').addClass('shown');
    }else if($('#position').val()==""){
        $('.reg-input').removeClass('error-input');
        $('#position').addClass('error-input');
        $('.tiny').addClass('shown');
    }
    else{
        $('.reg-input').removeClass('error-input');
        $('.tiny').removeClass('shown');
    }
 });
