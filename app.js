var modal=document.getElementById("modal-div");
function signup(khan){
    khan.preventDefault();
    modal.style.display="flex";
    var form= document.forms.register;
    
 let user={
    first_name:form.elements.firstname.value,
    last_name:form.elements.lastname.value,
    pass:form.elements.password.value,
    email:form.elements.email.value,
    phone_no: form.elements.number.value,
 }
 console.log(user);
}
function closeModal(){
    modal.style.display="none";
}

function signin(e){
  e.preventDefault();
  var form1= document.forms.login;
  var user2={
   email:form1.elements.email.value,
   password:form1.elements.password.value,
  }
 console.log(user2);
}





