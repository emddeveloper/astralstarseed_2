

<?php

$servername = "127.0.0.1:3306";

$username = "u769955481_lightworkersdb";

$password = "India@123";

$dbname ="u769955481_astralstarseed";


// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);



// Check connection

if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

} 


?>