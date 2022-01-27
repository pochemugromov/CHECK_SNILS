<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Form 2</title>
</head>

<body>

	<form action="form.php" method="POST">
		<fieldset>
			<legend>Форма</legend>
			<div class="input fio"><input type="text" id="fio" name="fio" required placeholder="ФИО"></div>
			<div class="radio">
				<div class="inputRadio"><input type="radio" value="Москва" name="gorod" id="gorod" required>Москва</div>
				<div class="inputRadio"><input type="radio" value="Тюмень" name="gorod" id="gorod" required>Тюмень</div>
				<div class="inputRadio"><input type="radio" value="Самара" name="gorod" id="gorod" required>Самара</div>
				<div class="inputRadio"><input type="radio" value="Тула" name="gorod" id="gorod" required>Тула</div>
				<div class="inputRadio"><input type="radio" value="Сургут" name="gorod" id="gorod" required>Сургут</div>
			</div>
			<div class="input adres"><input type="text" id="adres" name="adres" required placeholder="Адрес"></div>
			<div class="input tel"><input type="text" id="tel" name="tel" required placeholder="Телефон"></div>
			<div class="input mail"><input type="text" id="mail" name="mail" required placeholder="Почта"></div>
			<div class="input snils"><input type="text" id="snils" name="snils" required placeholder="СНИЛС"></div>

			<select name="tovari">
				<option name="tovar1">Видеокарта</option>
				<option name="tovar2">Материнская плата</option>
				<option name="tovar3">Процессор</option>
				<option name="tovar4">Блок питания</option>
				<option name="tovar5">Корпус</option>
			</select>

			<div class="input kol"><input type="text" id=kol name="kol" required placeholder="Количесвто"></div>

			<input type="submit" class="sub">
			<input type="reset">

		</fieldset>
	</form>
	<?php
	mb_internal_encoding("UTF-8");
	?>
	<script src="script.js"></script>
</body>

</html>