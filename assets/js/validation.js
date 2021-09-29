let checkname = false;
let checkemail = false;
let checkphone = false;
let checkmessage = false; 

function checkname1() {
let namevalue = $("#name").val()
let nameRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
if (namevalue == "") {
 $("#error1").html(" Name is Required!")
}
else if(namevalue.length<3 || namevalue.length>20 ){
 checkname = true
 $("#error1").html("Please enter valid name")
}
else if (namevalue.match(nameRegex)) {
 checkname = true
 $("#error1").html("")
}
} 
function checkemail1() {
    let emailvalue = $("#email").val()
    let emailRegex = /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    if (emailvalue == "") {
      $("#error2").html("Email is Required!")
    }
    else if (emailvalue.match(emailRegex)) {
      checkemail = true
      $("#error2").html("")
    }
    else {
      $("#error2").html("Invalid email!")
      checkemail = false
    }
  }
  $('#email').keypress(function( email ) {
    if(email.which === 32) 
    return false;
    });

    function checkphone1() {
        let phonevalue = $("#phone").val()
        let phoneRegex = /[0-9]{10}/;
        let messageRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
        if (phonevalue == "") {
          $("#error3").html("Mobile number is Required!")
        }
        else if (phonevalue.match(phoneRegex)) {
          checkphone = true
          $("#error3").html("")
        }
        else if(phonevalue.match(messageRegex)){
          checkphone=false
          $("#error3").html("Please enter a valid mobile number")
        }
        else if(phonevalue.length==10){
          checkphone = true
          $("#error3").html("")
        }
        else{
          $("#error3").html("Please enter 10 digit number")
          checkphone=false
        }
      }




 function checkmessage1() {
    let messagevalue = $("#message").val()
    let messageRegex = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    if (messagevalue == "") {
      $("#error4").html("Enter Something!")
    }
    else if (messagevalue.match(messageRegex)) {
      checkmessage = true
      $("#error4").html("")
    }
    else {
      $("#error4").html("")
      checkmessage = false
    }
 
  }
 
  $('#name').keypress(function(event){
   if (
       !event.key.match(/^[A-Za-z ]+$/) ||
       (this.value.slice(-1) == ' ' && event.key == ' ')||
       (this.value == '' && event.key == ' ')
     ) {
       event.preventDefault()
     }
    })

    $('#phone').keypress(function(event){
      if (
          !event.key.match(/^[0-9]+$/) ||
          (this.value.slice(-1) == ' ' && event.key == ' ')||
          (this.value == '' && event.key == ' ')
        ) {
          event.preventDefault()
        }
       })
 
 
$(document).ready(function () {
    $("#name").keyup(function () {
     checkname1()
    })
    $("#email").keyup(function () {
        checkemail1()
    })
    $("#phone").keyup(function () {
        checkphone1()
    })
    $("#message").keyup(function () {
        checkmessage1()
    })
})






$("#submit-form").submit((e)=>{
 
    e.preventDefault()
    if(checkname & checkemail & checkmessage &checkphone ){
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzpIgBSLi_iIV1Ui7xArosYRE81ZP3ELvgcPtsYfKZi7w1pFBRCVicpCx1jtUvozWyD/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully!!!")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
         
            alert("Something Error")
 
        }
    })
 
  }
  else{
    alert("Please fill!!!!")
 
    checkname1()
    checkphone1()
    checkmessage1()
    checkemail1()
 
  }
 })
  