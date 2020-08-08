
// DOM grab selectors

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submit = document.querySelector('.btn');
const userInput = document.querySelector('#users');
const message = document.querySelector('.msg');


// submit event
myForm.addEventListener('submit',submitValue);

function submitValue(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value ===''){
        // alert('Please Enter Form Fields')
        message.classList.add('errorValue');
        message.innerHTML = 'Please Enter Form Fields';
        setTimeout(()=>
        message.remove(),2000);
    }else{
        console.log(nameInput.value);
        console.log(emailInput.value);

        //create element "li"
        const InputList = document.createElement('li');
        InputList.appendChild(document.createTextNode(`UserInput: ${nameInput.value} - ${emailInput.value}`));

        //appent created element
        userInput.appendChild(InputList);

        // clear forminput
        nameInput.value = ''
        emailInput.value = ''
    }

}

