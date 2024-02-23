<?php
$cookie = $_COOKIE;
// 直接刪掉
setcookie("user", "", time() - 3600);
// 給有效期限
setcookie("user", "", time() + 3600);

echo $cookie;
?>