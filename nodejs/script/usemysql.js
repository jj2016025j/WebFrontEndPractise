// 不確定能不能用
const dbOperations = require('./mynodesql.js');
// 連接到資料庫
// dbOperations.connectToDatabase();

// 創建資料庫
dbOperations.createDatabase('testDB');

// 使用資料庫
dbOperations.useDatabase('testDB');

// 插入資料到表中
dbOperations.insertIntoTable('menu_items', ['name', 'description', 'price', 'category', 'photo_url'], ['漢堡', '經典美式牛肉漢堡，配生菜、番茄、起司和特製醬料', 99.00, '主餐', 'http://example.com/burger.jpg']);

// 查詢表中的資料
dbOperations.selectFromTable('menu_items');

// 更新表中的資料
dbOperations.updateTable('menu_items', { price: 120.00 }, 'name = ?', ['漢堡']);

// 刪除表中的資料
dbOperations.deleteFromTable('menu_items', 'name', ['漢堡']);

// 增加列表欄
dbOperations.addColumn('menu_items', 'description', 'TEXT');

// 移除列表欄
dbOperations.removeColumn('menu_items', 'description');

// 刪除資料表
dbOperations.dropTable('menu_items');

// 刪除資料庫
dbOperations.dropDatabase('testDB');

// 關閉資料庫連接
dbOperations.closeConnection();
