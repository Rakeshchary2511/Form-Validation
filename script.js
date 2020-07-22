const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//email validation
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re.test(String(email).toLowerCase());
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid!");
  }
}

//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check Required
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldElement(input)} is required!`);
    } else {
      showSuccess(input);
    }
  });
}

//getFieldElement
function getFieldElement(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check the length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldElement(input)} must be atleast ${min} characters !!`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldElement(input)} must be lessthan ${max} characters !!`
    );
  } else {
    showSuccess(input);
  }
}

//Password match
function checkpasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Passwords did not match `);
  } else {
    showSuccess(input1);
  }
}

//addEvent Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(password2, 6, 25);
  checkpasswordMatch(password, password2);
});
