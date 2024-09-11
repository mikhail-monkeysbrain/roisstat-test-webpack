<?
    $message = '';
    $date = date('Y-m-d H:i:s');

    foreach ($_POST as $key => $value) {
        $message .= $key . " - " . $value . " ";
    }

    $log = $date . " : " . $message;
    file_put_contents(__DIR__ . '/log.txt', $log . PHP_EOL, FILE_APPEND);
?>