const mysql = require('mysql');

// 建立資料庫連接
const connection = mysql.createConnection({
  host: 'localhost', // 資料庫伺服器地址
  user: 'yourusername', // 資料庫用戶名
  password: 'yourpassword', // 資料庫密碼
  database: 'database' // 要操作的数据库名 庫名不一定要
});

// 連接到資料庫
connection.connect(err => {
  if (err) {
    console.error('連接資料庫失敗: ' + err.stack);
    return;
  }
  console.log('資料庫連接成功，連接 ID ' + connection.threadId);
});

// 選擇資料庫
connection.query('USE yourdatabase', err => {
  if (err) throw err;
  console.log('已選擇資料庫');
});

// 查詢資料
connection.query('SELECT * FROM yourtable', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});

// 插入資料
connection.query('INSERT INTO yourtable (name, age) VALUES (?, ?)', ['Alice', 30], (err, results) => {
  if (err) throw err;
  console.log('插入資料成功，插入 ID：', results.insertId);
});

// 更新資料
connection.query('UPDATE yourtable SET age = ? WHERE name = ?', [35, 'Alice'], (err, results) => {
  if (err) throw err;
  console.log('更新資料成功，影響的行數：', results.affectedRows);
});

// 刪除資料
connection.query('DELETE FROM yourtable WHERE name = ?', ['Alice'], (err, results) => {
  if (err) throw err;
  console.log('刪除資料成功，影響的行數：', results.affectedRows);
});

// 關閉資料庫連接
connection.end(err => {
  if (err) return console.error('關閉資料庫連接時出錯：', err);
  console.log('資料庫連接已關閉');
});
