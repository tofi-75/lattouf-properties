<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Email details
$to = 'tofi.lattouf@gmail.com';
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

// Send email
$mailSent = mail($to, $subject, $body);

// Check if email was sent successfully
if ($mailSent) {
    echo 'Thank you for your message. We will get back to you soon.';
} else {
    echo 'There was a problem sending your message. Please try again later.';
}
?>
