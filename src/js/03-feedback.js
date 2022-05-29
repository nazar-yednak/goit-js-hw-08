import throttle from 'lodash.throttle';


const LOCALSTORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea "),
    input: document.querySelector(".feedback-form input ")
}
refs.form.addEventListener('submit', onFormSubmit)
refs.form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};

populateInput();

function onFormSubmit(e) {
    e.preventDefault();
    // console.log("send form");
    
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
    }
function populateInput() {
    try {
        const formValueStorage = localStorage.getItem(LOCALSTORAGE_KEY) ;  
        if (formValueStorage) {
            const  dataFormValue = JSON.parse(formValueStorage)
            refs.input.value = dataFormValue.email || "" ;
            refs.textarea.value = dataFormValue.message ||"";
        }
      
       
    }
    catch {
        console.log("Error");
    }
    
}

