<?php
$connect = mysqli_connect("127.0.0.1","root","","snils");
if($connect){
echo "БД подключена <br>";
}
else{
  echo "Не удалось подключиться к БД";
}