<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $msg = $_POST['message'];
    $date = date("d-m-Y h:i:s a");

    $to = "info@londonaestheticandspa.co.uk";
    $from = "booking@londonaestheticandspa.co.uk";
    $bcc = "sayyam@theadvertizers.com";

    $to = "humzaa2z@gmail.com";
    $from = "booking@londonaestheticsandtrainingacademy.com.pk";
    $bcc = "";

    $message = "
    <!DOCTYPE html>
    <html lang=\"en\">

    <head>
        <meta charset=\"UTF-8\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <title></title>
        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">
        <link href=\"https://fonts.googleapis.com/css2?family=Quicksand&display=swap\" rel=\"stylesheet\">
    </head>

    <body>

                <table style=\"border: 1px solid black; border-collapse: collapse;\">
                    <tr style=\"border: 1px solid black;\">
                        <th style=\"border: 1px solid black; padding: 8px 32px;\">Name</th>
                        <td style=\"border: 1px solid black; padding: 8px 32px;\">".$name."</td>
                    </tr>
                    <tr style=\"border: 1px solid black;\">
                        <th style=\"border: 1px solid black; padding: 8px 32px;\">Email</th>
                        <td style=\"border: 1px solid black; padding: 8px 32px;\"><a href=\"mailto:".$email."\">".$email."</a></td>
                    </tr>
                    <tr style=\"border: 1px solid black;\">
                        <th style=\"border: 1px solid black; padding: 8px 32px;\">Phone</th>
                        <td style=\"border: 1px solid black; padding: 8px 32px;\"><a href=\"tel:".$phone."\">".$phone."</a></td>
                    </tr>
                    <tr style=\"border: 1px solid black;\">
                        <th style=\"border: 1px solid black; padding: 8px 32px;\">Service</th>
                        <td style=\"border: 1px solid black; padding: 8px 32px;\">".$service."</td>
                    </tr>
                    <tr style=\"border: 1px solid black;\">
                        <th style=\"border: 1px solid black; padding: 8px 32px;\">Date</th>
                        <td style=\"border: 1px solid black; padding: 8px 32px;\">".$date."</td>
                    </tr>
                    <tr style=\"border: 1px solid black;\">
                        <th style=\"border: 1px solid black; padding: 8px 32px;\">Message</th>
                        <td style=\"border: 1px solid black; padding: 8px 32px;\">".$msg."</td>
                    </tr>
                </table>
    </body>
    </html>";

    $header = "From: ". $from ."\r\n";
    $header .= "X-Mailer: php\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: text/html; charset=UTF-8\r\n";
    $header .= "Bcc: ".$bcc.",\r\n";

    if (!function_exists('http_response_code'))
    {
        function http_response_code($newcode = NULL)
        {
            static $code = 200;
            if($newcode !== NULL)
            {
                header('X-PHP-Response-Code: '.$newcode, true, $newcode);
                if(!headers_sent())
                    $code = $newcode;
            }
            return $code;
        }
    }

    if(empty($name) || empty($phone)){
        http_response_code(400);
    } else if (mail($to, "Appointment Booking", $message, $header)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
?>