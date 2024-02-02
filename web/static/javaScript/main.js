console.log("test");
//main.js
import {
    fetchJson, selectRandomProducts,
    getCategoriesList, getSubcategories, findProducts, findProductsInfo
} from './backEnd.js';
import {
    createUI, initializeEventListeners,
    updateUserInfo, updateList, showMessage
} from './frontSide.js';

document.addEventListener('DOMContentLoaded', async () => {
    await Initialization()
    initializeEventListeners()
    loadRememberedUser();

})

let ProductInfo
let Classification
let salesRecord
async function Initialization() {
    document.title = "艾格鲁的店 - 您異世界日常所需的一切";
    // 创建基本内容 頭尾
    // 读取json
    createUI();
    updateUserInfo();

    try {
        // 使用 async/await 等待所有 fetch 请求完成
        const [ProductInfo2, ProductInfo3, ProductInfo4] = await Promise.all([
            fetchJson('../static/json/ProductInformationSheet.json'),
            fetchJson('../static/json/ProductClassificationTable.json'),
            fetchJson('../static/json/salesRecord.json')
        ]);

        ProductInfo = ProductInfo2;
        Classification = ProductInfo3;
        salesRecord = ProductInfo4;
        InitializationUI(ProductInfo, Classification, salesRecord);
    } catch (error) {
        console.error("Error loading ProductInfo: ", error);
    }
}


function InitializationUI(ProductInfo, Classification, salesRecord) {
    if (ProductInfo && Classification && salesRecord) {
        //熱門
        let hotProducts = selectRandomProducts(ProductInfo.products, 10)
        updateList("hot-product-list", hotProducts, 'product');
        //父分類
        updateParentCategory()
        //子分類
        updateSubcategories()
        //所有物品
        let allProducts = selectRandomProducts(ProductInfo.products, 20)
        updateList("all-product-list", allProducts, 'product');
    }
}

//更新父分類
function updateParentCategory() {
    let categories = getCategoriesList(Classification)
    updateList("classification-list", categories, 'category');
    categoriesAddEventListener(".category")
}

//更新子分類
function updateSubcategories(parentCategory = null) {
    let Categories = getSubcategories(Classification, parentCategory);
    updateList("sub-classification-list", Categories, 'sub-category');
    categoriesAddEventListener(".sub-category")
}

//更新商品
function updateProduct(categorie) {
    let Products = findProducts(Classification, null, categorie);
    Products = findProductsInfo(ProductInfo, Products);
    updateList("all-product-list", Products, 'product');
}

function categoriesAddEventListener(className) {
    let elements = document.querySelectorAll(className);
    elements.forEach(element => {
        element.addEventListener("click", () => {
            if (className === ".sub-category") {
                let category = element.textContent;
                updateProduct(category);
            }
            else if (className === ".category") {
                let parentCategory = element.textContent;
                updateSubcategories(parentCategory);
            }
        });
    });
}

document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    console.log(login(username, password, rememberMe));
});

document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    if (password !== confirm_password) {
        showMessage('warning', '兩次輸入的密碼不相同');
        return false;
    }
    console.log(register(username, password));
});

function loadRememberedUser() {
    const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
    if (rememberedUser&&document.getElementById('username')&&document.getElementById('password')&&document.getElementById('rememberMe')) {
        document.getElementById('username').value = rememberedUser.username;
        document.getElementById('password').value = rememberedUser.password;
        document.getElementById('rememberMe').checked = rememberedUser.rememberedMe;
    }
}

function login(username, password, rememberMe) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username);

    if (!user) {
        showMessage('warning', '找不到用戶。');
        return '無此用戶';
    }
    if (user.password !== password) {
        showMessage('danger', '密碼錯誤。');
        return '密碼錯誤';
    }
    if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify({ username, password, rememberMe }));
    } else {
        localStorage.removeItem('rememberedUser');
    }

    localStorage.setItem('currentUser', username);
    showMessage('success', '您已成功登入。');
    return '登入成功';
}

function register(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (!Array.isArray(users)) users = [];

    const userExists = users.some(user => user.username === username);
    if (userExists) {
        showMessage('info', '該用戶已註冊。');
        return '已註冊過';
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', username);
        window.location.href = 'portfolio.html';
        return '註冊完成';
    }
}


function finalTest() {
}

console.log("ok")