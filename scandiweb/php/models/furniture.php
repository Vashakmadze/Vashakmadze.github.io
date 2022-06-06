<?php
require_once("product.php");

class furniture extends product {

  public $height;
  public $width;
  public $length;

  public function __construct($sku, $name, $price, $height, $width, $length) {
    parent::__construct($sku, $name, $price);
    $this->height = $height;
    $this->width = $width;
    $this->length = $length;
  }

  function get_height() {
    return $this ->height;
  }

  function get_width() {
    return $this ->width;
  }

  function get_length() {
    return $this ->length;
  }
  
}

function furnitureComponent($sku, $name, $price, $height, $width, $length) {
  $element = " 
  <div class=\"card\" method=\"POST\">
    <div class=\"checkbox_div\">
      <input class=\"delete-checkbox\" type=\"checkbox\" id=\"checkbox\" name=\"check[]\" value=\"$sku\">
    </div>
    <h3 class=\"sku\">$sku</h3>
    <h3 class=\"name\">$name</h3>
    <h3 class=\"price\">$price</h3>
    <h3 class=\"dimensions\">Dimensions: $height x $width x $length</h3>
  </div>
  ";  

echo $element;


}

?>
