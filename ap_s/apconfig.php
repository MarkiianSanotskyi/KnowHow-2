<?php

$v_c = 1; //  0 - Подключение через smtp - сервер необходимо заполнить параметры подключения
	  //  1 - отправка почты без натсройки параметров подключения

// smtp - сервер Параметры подключения в серверу необходимо заполнить если $v_c = 0 



$smtpServer = "smtp.yandex.ru";  
$port = "465";  // ssl - 465, 25
$username = "user";  
$password = "pass";
$is_ssl = 1; // yes - 1, no - 0


//Куда необходимо слать письмо
$to = "info_@knowhow.agency";  

//от кого письмо необходимо указывать реальный адрес
$from = "user@yandex.ru";  


// Тема письма  
$subject = "Заявка с сайта прошу связаться"; 
// Заголовок в письме 
$mtitle = "" ;



// отправка смс  через сервис sms.ru

// номер телефона в межународном формате
// пустой номер без отправки СМС
// для отправки нужно запросить api_id взять можно в панеле управления на сайте sms.ru
$sms_phone = "";
// номер апи кода  код выглядит так 74235946-7839-0514-699c-3e53fc642426 взять можно после регистрации на sms.ru 
$sms_api_key = "74283946-7859-0524-699c-3e5bfc642426";

// поля должны быть в sname в форме с именами
$sms_phone_fild = "Телефон:";
$sms_name_fild = "Имя:";

?>
