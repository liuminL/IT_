<?php 
//$tid = $_GET['tid'];

//echo "do you wang to see the message of " ,$tid ;

$fh = fopen("php_1.txt", 'r');
print_r(fgetcsv($fh));

 ?>