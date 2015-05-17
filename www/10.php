<?php 
	//print_r($_POST);
/*$fh = fopen('php_1.txt', 'a');

fwrite($fh, 'from text to php');
fclose($fh);
echo 'ok';*/
$str = $_POST['title'] . "," . $_POST['content'] . "\n";

$fh = fopen('php_1.txt', 'a');
fwrite($fh, $str);
fclose($fh);

echo "ok";


 ?>