<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "scandiweb";



// connection
$connect = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
   
// set the PDO error mode to exception
$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>