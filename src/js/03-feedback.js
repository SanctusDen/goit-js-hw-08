import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onSaveInput, 500));

textareaPopulate();
function onSubmitForm(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state", objMessage); 
};

function onSaveInput(evt) {
    message.value = evt.currentTarget.value;
    email.value = evt.currentTarget.value;

    const objMessage = { email, message };
    localStorage.setItem("feedback-form-state", objMessage);
};

function textareaPopulate(evt) {
    const savedMessage = localStorage.getItem("feedback-form-state");
    if (savedMessage) {
        textarea.value = savedMessage; 
    }
};
