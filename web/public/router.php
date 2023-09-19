<?php
//error_reporting(0);

$file = ".".parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

if (file_exists($file)) {
    return false;
} else {
    $dirname = dirname($file);
    if (!file_exists($dirname)) {
        mkdir($dirname, 0755);
    }
    $data = file_get_contents("https://www.laserpecker.net".$_SERVER["REQUEST_URI"]);
    if (true)/*($data)*/ {
        file_put_contents($file, $data);
    }

    return false;
}
//echo file_get_contents("https://www.laserpecker.net".$_SERVER["REQUEST_URI"]);
