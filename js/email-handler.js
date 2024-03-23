document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the default form submission
  
      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => object[key] = value);
      const json = JSON.stringify(object);
  
      fetch('your-server-endpoint.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Optionally add an authorization header or other necessary headers
        },
        body: json
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        document.getElementById('submitSuccessMessage').classList.remove('d-none');
      })
      .catch((error) => {
        console.error('Error:', error);
        document.getElementById('submitErrorMessage').classList.remove('d-none');
      });
    });
  });
  