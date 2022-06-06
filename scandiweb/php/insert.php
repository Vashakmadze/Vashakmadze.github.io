<?php

insertData();

function insertData() {
  require("config.php");

  try {

    // connection
    $connect = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
   
    // set the PDO error mode to exception
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //inserting data
    if(isset($_POST['submit'])) {    

      //getting inputs
      $option= $_POST['options'];
      $sku = $_POST['sku'];
      $name = $_POST['name'];
      $price = $_POST['price'];
      $sql;

      if ($option == 'dvd') { // couldn't figure out any other way than conditional statements to handle differences in prodcuts. Will be happy to discuss possible alternatives. 
        $size = $_POST['size'];
        $sql = "INSERT INTO products VALUES('$sku','$name','$price', '$option', '$size', '0', '0', '0', '0')"; // inserting straight into the database because its really a waste of rersources to first create an object and then get the properties from that object 
      } else if($option == "furniture") {
        $height = $_POST['height'];
        $width = $_POST['width'];
        $length = $_POST['length'];
        $sql = "INSERT INTO products VALUES('$sku','$name','$price', '$option', '0', '0', '$height', '$width', '$length')"; // inserting straight into the database because its really a waste of rersources to first create an object and then get the properties from that object 
      } else {
        $weight = $_POST['weight'];
        $sql = "INSERT INTO products VALUES('$sku','$name','$price', '$option', '0', '$weight', '0', '0', '0')"; // inserting straight into the database because its really a waste of rersources to first create an object and then get the properties from that object 
      }
      $connect->exec($sql);
      header("Location: ../index.php", TRUE, 307); //redirects to main page
      exit();
    }
  } catch(PDOException $e) {
      echo $sql . "<br>" . $e->getMessage();
  }
}



?>