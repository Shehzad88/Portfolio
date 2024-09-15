function handleMenuToggle() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("active");
}

// Add event listeners to all menu items
document.querySelectorAll(".mobile-menu-container ul li a").forEach(anchor => {
  anchor.addEventListener("click", function(event) {
    // Prevent default anchor behavior
    event.preventDefault();
    
    // Get the target section
    const targetSection = document.querySelector(this.getAttribute("href"));
    
    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
    
    // Hide the menu
    handleMenuToggle();
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelector('a[href="#projects"]').addEventListener('click', function () {
  document.querySelector('#project').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('a[href="#homes"]').addEventListener("click", function () {
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth"
  });
});

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function sendMail(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value,
    reply_to: document.getElementById("email").value, // Pass user's email to the 'Reply-To' field
  };

  emailjs.send('service_wl4xp6f', 'template_i7als1s', formData)
    .then(
      function(response) {
        alert('Message sent successfully!');
        document.getElementById("contactForm").reset(); // Clear form after submission
      },
      function(error) {
        alert('Failed to send message. Please try again later.');
      }
    );
}
