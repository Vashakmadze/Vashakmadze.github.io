<?php    
// loading up models (product and child product classes) and config
require("config.php");


// header("Location: ../index.php", TRUE, 307); //redirects to main page
if(isset($_POST['delete'])){
    $checkbox = $_POST['check'];
    for($i=0;$i<count($checkbox);$i++) {
        $del_id = $checkbox[$i];
        $sql = "DELETE FROM products WHERE sku='$del_id'";
        $connect->exec($sql);
    }
    header("Location: ../index.php", TRUE, 307); //redirects to main page
    exit();
}
?>