<?php
require_once("product.php");

class dvd extends product {
  
  public $size;

  public function __construct($sku, $name, $price, $size) {
    parent::__construct($sku, $name, $price);
    $this->size = $size;
  }

  function get_size() {
    return $this->size;
  }

}

function dvdComponent($sku, $name, $price, $size) {
  $element = "
  <div class=\"card\" method=\"POST\">
    <div class=\"checkbox_div\">
      <input class=\"delete-checkbox\" type=\"checkbox\" id=\"ramerume\" name=\"check[]\" value=\"$sku\">
    </div>
    <h3 class=\"sku\">$sku</h3>
    <h3 class=\"name\">$name</h3>
    <h3 class=\"price\">$price</h3>
    <h3 class=\"size\">Size: $size</h3>
  </div>
  ";

echo $element;



}

?>
