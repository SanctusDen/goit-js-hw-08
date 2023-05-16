import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const email = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener('submit',  onSubmitForm);
form.addEventListener('input',  throttle(onSaveInput, 500));

formPopulate();
function onSubmitForm(evt) {
    evt.preventDefault();

    if (email.value === '') {
        return alert('all fields must be filled in');
    };

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY, form);
    console.log(formData);
    formData = {};
    
};

function onSaveInput(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function formPopulate() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        textarea.value = savedMessage.message || '' ;
        email.value = savedMessage.email || '';
    }
};
