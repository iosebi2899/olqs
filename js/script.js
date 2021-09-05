$('.submit').click(function() {
    if(/^(?=.*\d).{11}$/.test($('.id').val())==false){
        $('.personal-id').addClass('error-border');
        $('.id').addClass('error-text');
        $('.error-msg').addClass('shown')
    }else{
        window.open('registration.html','_self');
    }
 });
    $('.reg-submit').click(function() {
    
    if(/^(?=.*\d).{11}$/.test($('#id').val())==false){
        $('#id').addClass('error-input');
        $('.tiny').html('დაფიქსირდა შეცდომა, აუცილებელია ყველა ველის შევსება');
        $('.tiny').addClass('shown');
    }else if(jQuery.inArray($('#olqNum').val(), olqNum)==-1){
        $('.reg-input').removeClass('error-input');
        $('#olqNum').addClass('error-input');
        $('.tiny').html('თქვენ მიერ მითითებული ოლქი არ არსებობს');
        $('.tiny').addClass('shown');
    }else if(!$('#name').val()){
        $('.reg-input').removeClass('error-input');
        $('#name').addClass('error-input');
        $('.tiny').html('დაფიქსირდა შეცდომა, აუცილებელია ყველა ველის შევსება');
        $('.tiny').addClass('shown');
    }else if(jQuery.inArray($('#strNum').val(), strNum)==-1){
        $('.reg-input').removeClass('error-input');
        $('#strNum').addClass('error-input');
        $('.tiny').html('თქვენ მიერ მითითებული უბანი არ არსებობს');
        $('.tiny').addClass('shown');
    }else if(!$('#surname').val()){
        $('.reg-input').removeClass('error-input');
        $('#surname').addClass('error-input');
        $('.tiny').html('დაფიქსირდა შეცდომა, აუცილებელია ყველა ველის შევსება');
        $('.tiny').addClass('shown');
    }else if($('.disabled-value').is(':selected')){
        $('.reg-input').removeClass('error-input');
        $('#position').addClass('error-input');
        $('.tiny').html('დაფიქსირდა შეცდომა, აუცილებელია ყველა ველის შევსება');
        $('.tiny').addClass('shown');
    }
    else{
        $('.reg-input').removeClass('error-input');
        $('.tiny').removeClass('shown');
        window.open('test.html','_self');

    }
 });
 var isSelected = false;

 $('#auth-submit').click(function() {
     if(/@/.test($("#auth-email").val())==false){
        $('.auth-input').removeClass('error-input');
        $('#auth-email').addClass('error-input');
        $('.auth-tiny').html('ავტორიზაციისთვის შეიყვანეთ ელ.ფოსტა');
        $('.auth-tiny').addClass('shown');
     }else if(!$('#auth-password').val()){
        $('.auth-input').removeClass('error-input');
        $('#auth-password').addClass('error-input');
        $('.auth-tiny').html('ავტორიზაციისთვის შეიყვანეთ პაროლი');
        $('.auth-tiny').addClass('shown');
     }else{
        $('.auth-input').removeClass('error-input');
        $('.auth-tiny').removeClass('shown');
         return true;
     }
 });
//  autocomplete
var olqNum = ["31093900191","1093162221","1098482276","1093900191","1093900191","1093900191"];
var strNum = ["1093900191","1093162221","1098482276","1093900191","1093900191","1093900191"];
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            this.parentNode.appendChild(a);
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

//   select
  var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
        $('.select-selected').addClass('filled');
        isSelected = true;
        submit();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

$('.reg-input').on('input propertychange', function(){
  if($('#id').val()&&$('#olqNum').val()&&$('#name').val()&&$('#strNum').val()&&$('#surname').val()){
    inputFilled = true;
  }else{
    inputFilled = false;
  }
  if(inputFilled&&isSelected){
    $('.reg-submit').addClass('active-submit')
  }
  else{
    $('.reg-submit').removeClass('active-submit')
  }
 })
function submit(){
  if(inputFilled&&isSelected){
    $('.reg-submit').addClass('active-submit')
  }
  else{
    $('.reg-submit').removeClass('active-submit')
  }
}
$('#olqNum').on('keyup',function(){
 if($('#olqNum').val()>=1){
   console.log('diax')
  $("#strNum").prop('disabled', false)
 }else{
   console.log('ara')
  $("#strNum").val('');
  $("#strNum").prop('disabled', true)
 }
})

$('.reg-submit').click(function(){
  var num = $('#olqNum').val();
  num.toString();
  console.log(num);
  
});
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
  autocomplete(document.getElementById("olqNum"), olqNum);
  autocomplete(document.getElementById("strNum"), strNum);