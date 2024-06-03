function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Dark / Light Mode
document.addEventListener("DOMContentLoaded", function () {
  var themeBtn = document.querySelector(".theme-btn");

  // Check the local Storage for dark-mode
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
    themeBtn.querySelector("span").textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    themeBtn.querySelector("span").textContent = "🌙";
  }

  themeBtn.addEventListener("click", function () {
    // Toggle dark-mode class for body
    document.body.classList.toggle("dark-mode");

    // Change the icon on button
    var icon = themeBtn.querySelector("span");
    if (document.body.classList.contains("dark-mode")) {
      icon.textContent = "☀️";
      // Save the dark mode to local Storage
      localStorage.setItem("dark-mode", "true");
    } else {
      icon.textContent = "🌙";
      // Save the light mode to local Storage
      localStorage.setItem("dark-mode", "false");
    }
  });
});

// EmailJS configuration
(function () {
  emailjs.init({
    publicKey: "8ju-QIqMzA-9ImYZw",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      if (!validateForm()) {
        return;
      }

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      var confirmationMessage = `Data from the form you completed:\n`;
      confirmationMessage += `Name: ${name}\n`;
      confirmationMessage += `Email: ${email}\n`;
      confirmationMessage += `Message: ${message}\n`;

      if (confirm(confirmationMessage)) {
        // If confirmed, send the form using EmailJS
        emailjs.sendForm("service_3retmcs", "template_4er5w5r", this).then(
          () => {
            console.log("SUCCESS!");
            alert("Your Message Has Been Sent");
            this.reset();
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Your Message Has NOT Been Sent");
          }
        );
      } else {
        console.log("Form submission cancelled.");
      }
    });
};

// reCaptcha authentication
window.addEventListener("load", () => {
  const $recaptcha = document.querySelector("#g-recaptcha-response");
  if ($recaptcha) {
    $recaptcha.setAttribute("required", "required");
  }
});

// Validation functions
function validateForm() {
  var valid = true;

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  // Clear previous error messages
  clearErrors();

  // Validate name
  if (!/^[A-Za-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+(?:[-\s][A-Za-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+)*$/.test(name.value)) {
    showError(name, "Please enter a valid name.");
    valid = false;
  }

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError(email, "Please enter a valid email address.");
    valid = false;
  }

  // Validate message
  if (message.value.length < 10 || message.value.length > 5000) {
    showError(message, "Message must be between 10 and 5000 characters.");
    valid = false;
  }

  return valid;
}

function showError(element, message) {
  var error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.style.fontSize = "15px";
  error.style.marginTop = "-30px";
  error.innerText = message;
  element.parentNode.appendChild(error);
}

function clearErrors() {
  var errors = document.querySelectorAll(".error");
  errors.forEach(function (error) {
    error.remove();
  });
}