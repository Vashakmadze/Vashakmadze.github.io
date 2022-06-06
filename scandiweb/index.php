<?php    
// loading up models (product and child product classes) and config
require("php/models/dvd.php");
require("php/models/furniture.php");
require("php/models/book.php");
require("php/config.php");
require("php/get-data.php");
require("php/delete.php");

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Junior Developer Test Task - Luka Vashakmadze</title>
    <link rel="stylesheet" href="styles/reset.css">
    <link rel="stylesheet" href="styles/style.css">
  </head>
  <body>
      <div class="header_div">
          <div class="left_header">
            <h1 class="list_header">Product List</h1>
          </div>
          <div class="right_header">
            <a href="php/add-product.php"><button class="gumroad" type="submit" name="submitbutton">Add</button></a>
            <button id="delete-product-btn" type="submit" name="delete" class="right_button gumroad" form="deleteForm">Mass Delete</button>
          </div>
      </div>
      <form class="second_div" action="php/delete.php" method="POST" id="deleteForm">
       <?php
          outputData();
        ?>
      </form>
    </div>
    <h1 class="footer">Scandiweb Test assignment</h1>
  </body>
</html>