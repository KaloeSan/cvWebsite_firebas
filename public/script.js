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
document.addEventListener('DOMContentLoaded', function() {
  var themeBtn = document.querySelector('.theme-btn');
  
  // Check the local Storage for dark-mode
  if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
      themeBtn.querySelector('span').textContent = '☀️';
  } else {
      document.body.classList.remove('dark-mode');
      themeBtn.querySelector('span').textContent = '🌙';
  }

  themeBtn.addEventListener('click', function() {
      // Toggle dark-mode class for body
      document.body.classList.toggle('dark-mode');
      
      // Change the icon on button
      var icon = themeBtn.querySelector('span');
      if (document.body.classList.contains('dark-mode')) {
          icon.textContent = '☀️';
          // Save the dark mode to local Storage
          localStorage.setItem('dark-mode', 'true');
      } else {
          icon.textContent = '🌙';
          // Save the light mode to local Storage
          localStorage.setItem('dark-mode', 'false');
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
    });
};

// reCaptcha authentication
window.addEventListener("load", () => {
  const $recaptcha = document.querySelector("#g-recaptcha-response");
  if ($recaptcha) {
    $recaptcha.setAttribute("required", "required");
  }
});
