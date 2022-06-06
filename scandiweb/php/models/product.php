<?php
abstract class product {
    public $sku; // sku of the product
    public $name; // name of the product
    public $price; // price of the product 
    public $type; // type of the product for example book, dvd, furniture used to handle differences in product types
  
    public function __construct($sku, $name, $price) {
      $this->sku = $sku;
      $this->name = $name;
      $this->price = $price;
    }
  
    function get_name() {
      return $this->name;
    }
  
    function get_sku() {
      return $this->sku;
    }
  
    function get_price() {
      return $this->price;
    }
  
  }

?>
