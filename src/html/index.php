<?php
function connect()
{
	//$env_file_path = realpath("D:\OSPanel\domains\stock-site\.env");
	$env_file_path = realpath("/var/www/html/.env");
	$var_arrs = parseEnvFile($env_file_path);

	$server = $var_arrs['HOST'];
	$db_username = $var_arrs['USER'];
	$db_password = $var_arrs['PASSWORD'];
	$dbname = $var_arrs['DATABASE'];

	$conn = new mysqli($server, $db_username, $db_password, $dbname);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	} else {
		return $conn;
	}
}

function parseEnvFile($env_file_path)
{
	$var_arrs = [];
	$fopen = fopen($env_file_path, 'r');

	if ($fopen) {
		while (($line = fgets($fopen)) !== false) {
			$line_is_comment = (substr(trim($line), 0, 1) == '#') ? true : false;
			if ($line_is_comment || empty(trim($line)))
				continue;

			$line_no_comment = explode("#", $line, 2)[0];
			$env_ex = preg_split('/(\s?)=(\s?)/', $line_no_comment);
			$env_name = trim($env_ex[0]);
			$env_value = isset($env_ex[1]) ? trim($env_ex[1]) : "";
			$var_arrs[$env_name] = $env_value;
		}
		fclose($fopen);
	}

	return $var_arrs;
}

function executeQuery($query)
{
	$result = connect()->query($query);

	if (!$result) {
		die("Query failed: " . connect()->error);
	}

	return $result;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="./assets/icon.png" type="image/x-icon">

	<title>StockHub12</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.1.0/remixicon.css">
	<link rel="stylesheet" href="./style/style.css" />

	<script src="script.js"></script>
</head>

<body>
	<div class="container">
		<header class="header">
			<div class="burger" id="burger">
				<i class="ri-menu-3-line"></i>
			</div>
			<div class="header__img-adaptive">
				<img src="./assets/stocklogo.png" alt="logo" width="200" height="200" />
			</div>
			<nav>
				<ul class="nav">
					<li>
						<a href="https://telegra.ph/Dogovor-oferty-na-okazanie-uslugi-11-27">Договор оферты</a>
					</li>
					<li>
						<a href="mailto:help@stockhub12.ru">Контакты</a>
					</li>

					<li>
						<div class="header__img">
							<img src="./assets/stocklogo.png" alt="logo" width="200" height="200" />
						</div>
					</li>

					<li>
						<a href="https://t.me/stockhub12bot">Заказать</a>
					</li>
					<li>
						<a href="https://t.me/stockhub12">Телеграм канал</a>
					</li>

				</ul>
			</nav>
		</header>

		<main class="main">
			<div class="main__left-side">
				<h1>Магазин брендовых кроссовок</h1>
				<a href="https://t.me/stockhub12bot">Заказать</a>
			</div>

			<div class="main__right-side">
				<!-- <h2>Статистика</h2> -->
				<p class="main__right-side--value"><i class="ri-user-3-line"></i></span>Пользователи:

					<?php
					$resultCount = executeQuery("SELECT COUNT(*) as usersCount FROM users");
					$rowCount = $resultCount->fetch_assoc();
					echo '<span>' . $rowCount['usersCount'] . '</span>'
					?>

				</p>

				<p class="main__right-side--value"><i class="ri-survey-line"></i>Заказы:

					<?php
					$resultCount = executeQuery("SELECT COUNT(*) as ordersCount FROM orders");
					$rowCount = $resultCount->fetch_assoc();
					echo '<span>' . $rowCount['ordersCount'] . '</span>'
					?>

				</p>

			</div>

		</main>

		<footer>
			<p>Подпишись на наши новости</p>
			<form class="footer__mail--container">
				<input type="text" class="footer__mail--input" placeholder="Ваш e-mail">
				<button type="submit" class="footer__mail--submit"><i class="ri-arrow-right-double-line"></i></button>
			</form>

			<!-- <p>StockHubTech@2024</p> -->
		</footer>
	</div>
</body>

</html>
