const form = document.getElementById('form');
const fname = document.getElementById('fname');
const sname = document.getElementById('sname');
const email = document.getElementById('email');
const job = document.getElementById('job');
const company = document.getElementById('company');
const phone =  document.getElementById('phone');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const fnameValue = fname.value.trim();
    const snameValue  = sname.value.trim();
    const emailValue  = email.value.trim();
    const jobValue  = job.value.trim();
    const companyValue  = company.value.trim();
    const phoneValue  = phone.value.trim();


    if(fnameValue === ''){
    setErrorFor(fname,'Enter your first name');
    }
   else {
       setSuccessFor(fname);
   }
   if(snameValue === ''){
    setErrorFor(sname,'Enter your last name');
    }
   else {
       setSuccessFor(sname);
   }
   if(emailValue === ''){
    setErrorFor(email,'Email cannot be blank');
    } 
    
   else {
       setSuccessFor(email);
   }
   if(jobValue === ''){
    setErrorFor(job,'Select the job lists');
    } 
    
   else {
       setSuccessFor(job);
   }
   if(companyValue === ''){
    setErrorFor(company,'Enter your company');
    } 
    
   else {
       setSuccessFor(company);
   }
   if(phoneValue === ''){
    setErrorFor(phone,'Enter 10 digit valid number');
    } 
    
   else {
       setSuccessFor(phone);
   }
}
function setErrorFor(input,message) {
    const dataControl = input.parentElement;
   
    const small = dataControl.querySelector('small');
    small.innerText = message;
    dataControl.className = 'data-control error';
   

}
function setSuccessFor(input) {
    const dataControl = input.parentElement;
    dataControl.className = 'data-control success';
   

}
function enable(){
    if(document.getElementById("validation").checked ==true){
        document.getElementById("btn").disabled = false;
        console.log("hello");
     
    }
    else {
        document.getElementById("btn").disabled = true;
        console.log(
            "Testing button result value" +
            document.getElementById("btn").disabled
        );
    }
}
$(function () {
    $("#btn").click(function () {
        var isChecked = $("#validation").is(":checked");
        if (isChecked) {
            text.style.display = "none";
        } else {
            alert("CheckBox not checked.");
        }
    });
});
function myfunction() {
    var checkBox = document.getElementById("validation");
    var text = document.getElementById("text");
    if (checkBox.checked ==true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  