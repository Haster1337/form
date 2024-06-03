const regForm = document.forms.regForm;

const firstNameField = regForm.firstName;
const LastNameField = regForm.lastName;
const emailField = regForm.email;
const mobileField = regForm.mobile;
const passwordField = regForm.password;
const confirmPasswordField = regForm.confirmPassword;
const companyField = regForm.companyField;

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
    // email validation

    const emailErrorMessages = emailField.parentElement.children
    const emailFieldValue = emailField.value;

    if(/^[a-z][a-z._0-9)]+@[a-z]+\.[a-z]{2,3}$/i.test(emailFieldValue)){
        emailErrorMessages.namedItem('emailError').style.display = 'none'
    } else {
        emailErrorMessages.namedItem('emailError').style.display = 'block'
    }

    // password validation 

    const passwordErrorMessages = passwordField.parentElement.children
    const passwordFieldValue = passwordField.value

    
    if(passwordFieldValue.length >= 8) {
        passwordErrorMessages.namedItem('length').style.display = 'none'
    } else {
        passwordErrorMessages.namedItem('length').style.display = 'block'
    }

    if(/[0-9]/.test(passwordFieldValue)) {
        passwordErrorMessages.namedItem('digit').style.display = 'none'
    } else {
        passwordErrorMessages.namedItem('digit').style.display = 'block'
    }

    // confirmPassword validation 

    const confirmPasswordErrorMessages = confirmPasswordField.parentElement.children
    const confirmPasswordFieldValue = confirmPasswordField.value

    if(confirmPasswordFieldValue === passwordFieldValue) {
        confirmPasswordErrorMessages.namedItem('equality').style.display = 'none'
    } else {
        confirmPasswordErrorMessages.namedItem('equality').style.display = 'block'
    }

})