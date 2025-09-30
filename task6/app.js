const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

 
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  } else {
    clearError(nameInput);
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    isValid = false;
  } else {
    clearError(emailInput);
  }


  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message cannot be empty");
    isValid = false;
  } else {
    clearError(messageInput);
  }


  if (isValid) {
    successMsg.textContent = "Message sent successfully";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});


function showError(input, message) {
  const errorEl = input.parentElement.querySelector(".error");
  errorEl.textContent = message;
  input.style.borderColor = "#e74c3c";
}

function clearError(input) {
  const errorEl = input.parentElement.querySelector(".error");
  errorEl.textContent = "";
  input.style.borderColor = "#ccc";
}
