<?php

function getData($tablename) {
    
    require("config.php");

    // connection
    $connect = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
   
    // set the PDO error mode to exception
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM $tablename";
    $result = $connect->query($sql);

    if($result->rowCount() > 0) {
        return $result;
    }
}

function outputData() {
  require("config.php");

  // connection 
  $connect = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
   
  // set the PDO error mode to exception
  $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $result = getData("products");

  $resultQuery = $connect->query("SELECT * FROM products");
    
  if($resultQuery->rowCount() > 0) {
    while ($row = $result->fetch(PDO::FETCH_ASSOC > 0)){
      if($row['type'] == 'furniture') {
        furnitureComponent($row['sku'], $row['name'], $row['price'], $row['height'], $row['width'], $row['length']);
      }
      else if($row['type'] == 'dvd') {
        dvdComponent($row['sku'], $row['name'], $row['price'], $row['size']);
      } else {
        bookComponent($row['sku'], $row['name'], $row['price'], $row['weight']);
      }
    } 
      
  }
}
?>