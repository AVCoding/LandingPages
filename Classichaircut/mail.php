<?php
$_POST["query"] = urldecode(stripcslashes($_POST["query"])); parse_str($_POST['query'], $query);

//отправляем мейл
$message = '';
for ($i=0; $i<count($query["input"]); $i++)
	$message .= $query["name"][$i].': '.$query["input"][$i].'<br>';


mail(
	"vagharshak1992@gmail.com",
	"Отзыв",
	$message,
	"From: noreply@".$_SERVER["HTTP_HOST"]."\r\n"
	."Content-type: text/html; charset=utf-8\r\n"
	."X-Mailer: PHP mail script"
);

exit();
?>