<?php
mb_internal_encoding("UTF-8");
include('include.php');
// print_r($_POST);
$fio = $_POST['fio'];
$gorod = $_POST['gorod'];
$adres = $_POST['adres'];
$tel = $_POST['tel'];
$mail = $_POST['mail'];
$snils = $_POST['snils'];
$tovari = $_POST['tovari'];
$kol = $_POST['kol'];

echo ("Ваши Данные: <br>".$fio."<hr>".$gorod."<hr>".$adres."<hr>".$tel."<hr>".$mail."<hr>".$snils."<hr>".$tovari."<hr>".$kol."<hr>");

$result = mysqli_query($connect,"INSERT INTO `data` (`fio`,`gorod`,`adres`,`tel`,`mail`,`snils`,`tovari`,`kol`) VALUES ('$fio','$gorod','$adres','$tel','$mail','$snils','$tovari','$kol')");

// $result2 = mysqli_query($connect,"DELETE FROM `data` WHERE `id`= 1");
