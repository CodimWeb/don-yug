<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $to = "codimweb@gmail.com";
    $subject = "Онлайн бронирование!";


    $message = "$subject  <br>
                Имя: $name <br>
                Телефон: $phone <br>";

    
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: don-yug\r\n";
    mail($to, $subject, $message, $headers);
?>
