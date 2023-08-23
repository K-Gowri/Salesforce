
function checkInputs(){
    
}
const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};
const setSuccess = element  => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateInputs = () => {
const fname = fname.value.trim();
const lname = lname.value.trim();
const job  = job.value.trim();
const phone =  phone.value.trim();
const country = country.value.trim();
const employ = employ.value.trim();
const company  = company.value.trim();
 if(fnameValue === ''){
 setError(fname, 'Firstname is required');
 }
else{
    setSuccess(fname);
}
if(emailValue === ''){
    setError(emailValue, 'Email is required');
    }
   else{
       setSuccess(emailValue);
   }
   if(phone === ''){
    setError(phone, 'Phone is required');
    }
   else{
       setSuccess(phone);
   }





};