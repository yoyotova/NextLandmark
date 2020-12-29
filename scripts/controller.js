const registerFormElement = document.getElementById("register-form");
const loginFormElement = document.getElementById("login-form");

const emailElement = document.querySelector(".auth-input[name=email]");
const passwordElement = document.querySelector(".auth-input[name=password]");
const usernameElement = document.querySelector(".auth-input[name=username]");
const errorElement = document.getElementById("errors");

const validateEmail = email => {
  const notEmpty = !!email.length;
  const hasEmailSign = email.includes("@");
  const hasDotSign = email.includes(".");
  const hasMinLength = email.length > 4;

  if (notEmpty && hasEmailSign && hasDotSign && hasMinLength) {
    return true;
  } else {
    errorElement.innerText = "Invalid email address.";
  }

};

const validatePassword = password => {
  const hasCapitalLetter = /([A-Z])/.test(password);
  const hasNumber = /([0-9])/.test(password);
  const hasSymbol = ["!","@","#","$","%","^","&"].some(symbol => password.includes(symbol));
  const hasPasswordMinWidth = password.length > 5;

  if (hasPasswordMinWidth && hasCapitalLetter && hasNumber && hasSymbol) {
    return true;
  } else {
    errorElement.innerText = "Password  must be with at least 6 symbols, 1 uppercase, 1 digit and special symbol.";
  }
};

[registerFormElement, loginFormElement].forEach(form => {
  form &&
    form.addEventListener("submit", event => {
      event.preventDefault();
  
      const emailValue = emailElement.value;
      const passwordValue = passwordElement.value;
  
      let hasValidEmail = validateEmail(emailValue);
      let hasValidPassword = validatePassword(passwordValue);
  
  
      if (hasValidEmail && hasValidPassword) {
        window.location = "/home";
      }
    
    });
});
