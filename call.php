<?php
    // $name = $_POST['name'];
    // $phone = $_POST['phone'];
    // $to = "codimweb@gmail.com";
    // $subject = "Заявка на звонок";


    // $message = "$subject  <br>
    //             Имя: $name <br>
    //             Телефон: $phone <br>";

    
    // $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    // $headers .= "From: don-yug\r\n";
    // mail($to, $subject, $message, $headers);
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
$subject = "call request";


$message = "Имя: $name <br> Телефон: $phone <br>";
 
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

