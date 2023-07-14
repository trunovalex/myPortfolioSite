<?php
// Проверяем, был ли отправлен HTTP POST запрос
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем значения полей формы
    $name = $_POST['user_name'];
    $email = $_POST['user_email'];
    $message = $_POST['user_project'];

    // Пишем код для обработки данных формы (например, отправка на почту или сохранение в базе данных)

    // Пример отправки письма на указанный адрес электронной почты
    $to = 'wwtrww@mail.ru';
    $subject = 'Сообщение с сайта truenow.ru';
    $messageBody = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $messageBody, $headers)) {
        // Успешно отправлено
        echo 'Thank you! Your message has been sent.';
    } else {
        // Ошибка при отправке
        echo 'Oops! Something went wrong.';
    }
}
?>
