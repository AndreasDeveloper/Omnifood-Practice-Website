<?php

    // Get the form fields, remove white space and html tags
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r", "\n")),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check the data
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_SANITIZE_EMAIL)) {
        header("Location: www.examplewebsitedomain.co/omnifood/index.php?success=-1#form");
        exit;
    }

    // Set the recipient email address. UPDATE this to YOUR desired email address.
    $recipient = "examplemail@gmail.com"

    // Set the email subject
    $subject = "New contact from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message: $message\n";

    // Build the email headers
    $email_headers = "From: $name <$email>";

    // Send the email
    mail($recipient, $subject, $email_content, $email_headers);

    // Redirect to the index.html page with success code
    header("Location: www.examplewebsitedomain.co/omnifood/index.php?success=1#form");

?>
