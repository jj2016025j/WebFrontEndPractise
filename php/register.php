<?php
$usersFile = 'json/users.json';

// 確保users.json文件存在
if (!file_exists($usersFile)) {
    file_put_contents($usersFile, json_encode([]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 從文件讀取用戶數據
    $users = json_decode(file_get_contents($usersFile), true);

    // 檢查用戶名是否已存在
    if (isset($users[$username])) {
        echo "用戶名已存在。";
    } else {
        // 儲存新用戶
        $users[$username] = $password; // 密碼應該被哈希處理，但為了簡單起見，在這裡使用明文
        file_put_contents($usersFile, json_encode($users));
        echo "註冊成功！";
    }
}
?>
