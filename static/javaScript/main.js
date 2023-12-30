//main.js
import {
    fetchJson, createHotProductList, selectRandomProducts,
    getCategoriesList, getSubcategories, findProducts, findProductsInfo
} from './backend.js';
import {
    createUI, initializeEventListeners,
    updateUserInfo, updateList
} from './FrontSide.js';

document.addEventListener('DOMContentLoaded', async() => {
    await Initialization()
    initializeEventListeners()
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
            fetchJson('../json/ProductInformationSheet.json'),
            fetchJson('../json/ProductClassificationTable.json'),
            fetchJson('../json/salesRecord.json')
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

function finalTest() {
}

console.log("ok")