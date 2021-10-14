<?php
    // $name = $_POST['name'];
    // $phone = $_POST['phone'];
    // $phone2 = $_POST['phone2'];
    // $quantity = $_POST['quantity'];
    // $direction = $_POST['direction'];
    // $date_from = $_POST['date-from'];
    // $date_to = $_POST['date-to'];
    // $to = "codimweb@gmail.com";
    // $subject = "Онлайн бронирование!";


    // $message = "$subject  <br>
    //             Имя: $name <br>
    //             Телефон: $phone <br>
    //             Телефон2: $phone2 <br>
    //             Кол-во: $quantity <br>
    //             Направление: $direction <br>
    //             Дата поездки: $date_from <br>
    //             Дата обратной поездки: $date_to <br>";

    
    // $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    // $headers .= "From: don-yug\r\n";
    // mail($to, $subject, $message, $headers);


    // $mail->Host = 'smtp.mail.ru';
// $mail->SMTPAuth = true;
// $mail->Username = 'don-yug.ru@mail.ru';    //Логин // пароль FYE9fNcr
// $mail->Password = '4n2mvn9dgjdH9N3BxJ3K';                   //Пароль доп
 
require 'PHPMailer/PHPMailerAutoload.php';
 
$mail = new PHPMailer;
 
$mail->isSMTP();
$mail->Host = 'server195.hosting.reg.ru';
$mail->SMTPAuth = true;
$mail->Username = 'don-yug@don-yug.ru';    //Логин
$mail->Password = 'andre5006907';                   //Пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('don-yug@don-yug.ru');
$mail->isHTML(true);
$mail->addAddress('nastenasemykina55@gmail.com'); 




$name = $_POST['name'];
$phone = $_POST['phone'];
$phone2 = $_POST['phone2'];
$quantity = $_POST['quantity'];
$direction = $_POST['direction'];
$date_from = $_POST['date-from'];
$date_to = $_POST['date-to'];
$subject = "online booking!";


$message = "Имя: $name <br>
            Телефон: $phone <br>
            Телефон2: $phone2 <br>
            Кол-во: $quantity <br>
            Направление: $direction <br>
            Дата поездки: $date_from <br>
            Дата обратной поездки: $date_to <br>";
 
$mail->Subject = $subject;
$mail->Body    = $message;
// $mail->AltBody = 'Текстовая версия письма, без HTML тегов (для клиентов не поддерживающих HTML)';
 
//Отправка сообщения
if(!$mail->send()) {
    echo 'Ошибка при отправке. Ошибка: ' . $mail->ErrorInfo;
} else {
    echo 'Сообщение успешно отправлено';
}

?>
