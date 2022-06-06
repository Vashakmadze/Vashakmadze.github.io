<?php
require_once("product.php");

class book extends product {

  public $type;
  public $weight;

  public function __construct($sku, $name, $price, $weight) {
    parent::__construct($sku, $name, $price);
    $this->weight = $weight;
  }

  function get_weight() {
    return $this -> weight;
  }

}

function bookComponent($sku, $name, $price, $weight) {
  $element = "
  <div class=\"card\" method=\"POST\">
    <div class=\"checkbox_div\">
      <input class=\"delete-checkbox\" type=\"checkbox\" id=\"ramerume\" name=\"check[]\" value=\"$sku\">
    </div>
    <h3 class=\"sku\">$sku</h3>
    <h3 class=\"name\">$name</h3>
    <h3 class=\"price\">$price</h3>
    <h3 class=\"weight\">Weight: $weight</h3>
  </div>
";

echo $element;

}

?>
