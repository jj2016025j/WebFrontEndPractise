<?php
$usersFile = 'json/users.json';

// 確保users.json文件存在
if (!file_exists($usersFile)) {
    file_put_contents($usersFile, json_encode([]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST['action'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 從文件讀取用戶數據
    $users = json_decode(file_get_contents($usersFile), true);

    if ($action == 'register') {
        // 註冊邏輯
        if (isset($users[$username])) {
            echo "用戶名已存在。";
        } else {
            $users[$username] = $password; // 密碼應該被哈希處理
            file_put_contents($usersFile, json_encode($users));
            echo "註冊成功！";
        }
    } elseif ($action == 'login') {
        // 登入邏輯
        if (!isset($users[$username])) {
            echo "用戶名不存在。";
        } elseif ($users[$username] == $password) {
            echo "登入成功！";
        } else {
            echo "密碼錯誤。";
        }
    }
}
?>
