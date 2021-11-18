<?php
    if (!function_exists('http_response_code')) {
        function http_response_code($newcode = NULL) {
            static $code = 200;
            if($newcode !== NULL) {
                header('X-PHP-Response-Code: '.$newcode, true, $newcode);
                if(!headers_sent())
                    $code = $newcode;
            }
            return $code;
        }
    }

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Methods: POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type');
            header('Content-Length: 0');
            header('Content-Type: text/plain');
            die();
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');

        $_POST = json_decode(file_get_contents('php://input'), true);

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $course = $_POST['course'];
        $msg = $_POST['message'];
        $date = date("d-m-Y h:i:s a", strtotime('+5 hours'));

        $to = "info@londonaestheticandspa.co.uk";
        $from = "booking@londonaestheticsandtrainingacademy.com.pk";
        $bcc = "sayyam@theadvertizers.com";

        // values override for testing
//         $from = "booking@londonaestheticsandtrainingacademy.com.pk";
//         $to = "humzaa2z@gmail.com";
//         $bcc = "";

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
                    <th style=\"border: 1px solid black; padding: 8px 32px;\">Course</th>
                    <td style=\"border: 1px solid black; padding: 8px 32px;\">".$course."</td>
                </tr>
                <tr style=\"border: 1px solid black;\">
                    <th style=\"border: 1px solid black; padding: 8px 32px;\">Date</th>
                    <td style=\"border: 1px solid black; padding: 8px 32px;\">".$date." PKT</td>
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

        if(empty($name) || empty($phone)){
            http_response_code(400);
        } else if (mail($to, "Course Booking", $message, $header)) {
            http_response_code(200);
        } else {
            http_response_code(500);
        }
    }
?>
