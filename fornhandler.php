<?php
$name = $_POST['name'];
$visitors_email = $_POST['email'];
$service = $_POST['service'];
$message = $_POST['message'];

$email_from = 'client@ashtech.com';

$email_subject= 'New query submission';

$email_body = "User Name : $name .\n";
                "User Email : $visitors_email.\n";
                "Service requested : $service .\n";
                "Message : $message.\n";

$to = 'aw1728@gmail.com';
$headers = "from : $email_from \r \n";
$headers .= "reply-to : $visitors_email \r \n";
mail($to,$email_subject,$email_body,$headers);

header("location. contact.html");


?>