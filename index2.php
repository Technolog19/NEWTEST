<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);

    echo "<h1>Спасибо за ваш заказ, $name!</h1>";
    echo "<p>Мы свяжемся с вами по номеру $phone в ближайшее время.</p>";
}
?>