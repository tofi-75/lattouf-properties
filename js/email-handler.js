document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Send the email
      emailjs.sendForm('service_88lsl3d', 'template_bqti16q', this)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           document.getElementById('submitSuccessMessage').classList.remove('d-none');
        }, function(error) {
           console.log('FAILED...', error);
           document.getElementById('submitErrorMessage').classList.remove('d-none');
        });
    });
  });