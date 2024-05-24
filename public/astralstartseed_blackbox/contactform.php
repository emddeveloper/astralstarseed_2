<?php
include "mydestinationbridge.php";

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;

$email =$data->email;

$phone = $data->phone;

$subject = $data->subject;

$message = $data->message;





$sql = "INSERT INTO contact_table (name,email,phone,subject,message)

VALUES ('".$name."','".$email."','".$phone."','".$subject."','".$message."')";

if ($conn->query($sql) === TRUE) {
/*Mail script starts here @SK*/
	 $to = "astralstarseed@gmail.com"; // this is your Email address  astralstarseed@gmail.com
    $from = $email; // this is the sender's Email address
    $first_name = $name;
    $subject = $subject;
    $subject1 = "Copy of your form submission at LightWorkers";
    $message = $name . " " . " wrote the following:" . "\n\n" . $message;
    $message2 = "<<MAIL from website Query>> Here is a copy of contact form: " . $name . "\n\n" . "Query details:"."\n\n"."Name :".$first_name."\n\n"."Mobile:".$phone."\n\n"."Email:".$from."\n\n"."Message:".$message;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject1,$message2,$headers);
    mail("emd.developer@gmail.com",$subject1,$message2,$headers);//development testing
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    $myObj->name = $name;
    $myObj->mailsent = true;
    $myObj->error = false;
    $myObj->msg = "Thank you for contact us. We have received your query. Will contact with you soon, If any urgency, kindly Whatsapp us or dial the mobile no.";

    $myJSON = json_encode($myObj);

    echo $myJSON;
/*Mail script closed here @SK*/
} else {
    $myObj->name = $name;
    $myObj->mailsent = false;
    $myObj->error = true;
    $myObj->errorMsg = $conn->error;
    $myObj->msg = "Sorry something went wrong!.Kindly Whatsapp us or dial the mobile no.";

    $myJSON = json_encode($myObj);
    echo $myJSON;

}



?>
