function ValidationEvent() {

const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const email = document.getElementById('email').value;

const emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

var letters = /^[A-Za-z]+$/;
//conditions
    
    if(firstName.value.match(letters)){
        if (email.match(emailReg)){
            alert('cannot be empty');
            return true;
        }
    }
}
