import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmitForm);
textarea.addEventListener('input', throttle(onSaveInput, 500));

textareaPopulate();
function onSubmitForm(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY, form); 
};

function onSaveInput(evt) {
    const message = evt.currentTarget.value;
    const email = evt.currentTarget.value;

    localStorage.setItem(STORAGE_KEY, ({email, message}));
};

function textareaPopulate() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        textarea.value = savedMessage;
    }
};