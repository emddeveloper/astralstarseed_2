<?php
// Get the JSON data from the request
$data = json_decode(file_get_contents('php://input'), true);

// Check if the JSON data is valid
if ($data === null) {
    http_response_code(400);
    echo json_encode(array("mailSent" => false, "message" => "Invalid JSON data"));
    exit;
}

// Extract data from the JSON
$name = $data['name'];
$phone = $data['phone'];
$subject = $data['subject'];
$message = $data['message'];
$email = $data['email'];

// Compose the email content for recipient
$email_content_recipient = "<html><body>";
$email_content_recipient .= "<h2>Name: $name</h2>";
$email_content_recipient .= "<p>Phone: $phone</p>";
$email_content_recipient .= "<p>Subject: $subject</p>";
$email_content_recipient .= "<p>Message: $message</p>";
$email_content_recipient .= "<p>Email: $email</p>";
$email_content_recipient .= "</body></html>";

// Compose the email content for sender
$email_content_sender = "<html><body>";
$email_content_sender .= "<p>Dear $name,</p>";
$email_content_sender .= "<p>Thank you for reaching out. We have received your message and will get back to you shortly. If urgent, please contact us via Whatsapp <a data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" href=\"https://api.whatsapp.com/send?phone=+918420347137&amp;text=Hi I want to contact with you regarding Lightworker\" target=\"_blank\" data-original-title=\"whatsapp\">+91 8420347137</a>.</p>";
$email_content_sender .= "<p>Best regards,<br>astralstarseed.com</p>";
$email_content_sender .= "</body></html>";

// Set the recipient email address
//$to = 'emd.developer@gmail.com';
$to = 'astralstarseed@gmail.com';

// Set the email headers for recipient
$headers_recipient = "MIME-Version: 1.0" . "\r\n";
$headers_recipient .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers_recipient .= "From: $email\r\n";
$headers_recipient .= "Reply-To: $email\r\n";

// Send email to recipient
if (mail($to, $subject, $email_content_recipient, $headers_recipient)) {
    // Set the email headers for sender
    $headers_sender = "MIME-Version: 1.0" . "\r\n";
    $headers_sender .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers_sender .= "From: Your Name <your_email@example.com>\r\n";
    $headers_sender .= "Reply-To: Your Name <your_email@example.com>\r\n";
    
    // Send email to sender
    mail($email, "Thank you for your message", $email_content_sender, $headers_sender);
    
    echo json_encode(array("mailSent" => true, "error" => false, "message" => "Email sent successfully"));
} else {
    http_response_code(500);
    echo json_encode(array("mailSent" => false, "error" => true, "message" => "Failed to send email"));
}
?>
