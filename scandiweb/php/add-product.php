<?php    
// loading up models (product and child product classes) and config
require("models/dvd.php");
require("models/furniture.php");
require("models/book.php");
require_once("config.php");
require("insert.php");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Junior Developer Test Task - Luka Vashakmadze</title>
    <link rel="stylesheet" href="../styles/reset.css">
    <link rel="stylesheet" href="../styles/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="../js/script.js"></script>
  </head>
<body>
    <div class="header_div">
        <div class="left_header">
            <h1 class="list_header">Product Add</h1>
        </div>
        <div class="right_header">
            <button form="product_form" type="submit" class="save_btn gumroad" name="submit" id="submit_button">Save</button>
            <a href="../index.php"><button class="right_button gumroad">Cancel</button></a>
        </div>
    </div>
    <div class="second_div">
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" onsubmit="return validateForm()" method="post" name="myForm"  id="product_form">
            <div class="single_input">
                <label for="sku">SKU</label>
                <input type="text" id="sku" name="sku" placeholder="Enter SKU...." >
            </div>
            <div class="single_input">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter the name...." >
            </div>
            <div class="single_input">
                <label for="price">Price ($)</label>
                <input type="text" id="price" name="price" placeholder="Enter the price...." >
            </div>
            <div class="single_input">
                <label for="switching">Type Switcher</label>
                <select name="options" id="productType" onChange="update()" >
                    <option value="dvd" >DVD</option>
                    <option value="furniture">Furniture</option>
                    <option value="book">Book</option>
                </select>
            </div>
            <div class="single_input " id="dvd_input">
                <label for="size">Size (MB) </label>
                <input type="text" id="size" name="size" placeholder="Enter the size of the DVD...." >
            </div>
            <div id="furniture_inputs">
                <label for="height">Height (CM)</label>
                <input type="text" id="height" name="height" placeholder="Enter the height...." >
                <label for="width">Width (CM)</label>
                <input type="text" id="width" name="width" placeholder="Enter the width...." >
                <label for="length">Length (CM)</label>
                <input type="text" id="length" name="length" placeholder="Enter the length...." >
            </div>
            <div id="book_input">
                <label for="weight">Weight (KG)</label>
                <input type="text" id="weight" name="weight" placeholder="Enter the weight...." >
            </div>     
            <div class="error_div">
                <h3 class="error_general text-danger" id="error_required"></h3> <!-- Please, submit required data -->
                <h3 class="error_general text-danger" id="error_indicated"></h3><!-- Please, provide the data of indicated type -->
            </div>
        </form>
    </div>
</body>
</html>