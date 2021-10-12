<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $phone2 = $_POST['phone2'];
    $quantity = $_POST['quantity'];
    $direction = $_POST['direction'];
    $date_from = $_POST['date-from'];
    $date_to = $_POST['date-to'];
    $to = "codimweb@gmail.com";
    $subject = "Онлайн бронирование!";


    $message = "$subject  <br>
                Имя: $name <br>
                Телефон: $phone <br>
                Телефон2: $phone2 <br>
                Кол-во: $quantity <br>
                Направление: $direction <br>
                Дата поездки: $date_from <br>
                Дата обратной поездки: $date_to <br>";

    
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: don-yug\r\n";
    mail($to, $subject, $message, $headers);
?>
