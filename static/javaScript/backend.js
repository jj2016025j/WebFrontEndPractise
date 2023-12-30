//列出熱門商品 要加紀錄
function createHotProductList(products, salesRecords) {
    let salesMap = {};
    salesRecords.forEach(record => {
        if (salesMap[record.product_name]) {
            salesMap[record.product_name] += record.quantity;
        } else {
            salesMap[record.product_name] = record.quantity;
        }
    });
    return products
        .filter(product => salesMap[product.name])
        .map(product => ({
            image: product.image,
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: salesMap[product.name]
        }));
}

//過濾熱門分類 目前用不到了
function getCategoryBestSellers(products) {
    const categoryBestSellers = new Map();
    products.forEach(product => {
        const category = product.category;
        if (!categoryBestSellers.has(category) || categoryBestSellers.get(category).sales < product.sales) {
            categoryBestSellers.set(category, { image: product.image, sales: product.sales });
        }
    });
    return Array.from(categoryBestSellers, ([category, { image, sales }]) => ({ category, image, sales }));
}

// list中选择前X个商品
function selectRandomProducts(products, maxCount) {
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random()); // 打乱数组
    return shuffledProducts.slice(0, maxCount);
}

//列出父分類
function getCategoriesList(jsonData) {
    return Object.keys(jsonData.category);
}

function getSubcategories(jsonData, parentCategory = null) {
    // 確保jsonData和jsonData.category是有效的
    if (!jsonData || !jsonData.category) {
        console.error('Invalid jsonData structure');
        return [];
    }

    if (!parentCategory) {
        const parentCategories = getCategoriesList(jsonData);
        if (parentCategories.length > 0) {
            parentCategory = parentCategories[0];
        } else {
            return [];
        }
    }

    // 確保父分類存在於jsonData.category中
    if (jsonData.category.hasOwnProperty(parentCategory)) {
        return Object.keys(jsonData.category[parentCategory]);
    } else {
        console.warn(`Parent category '${parentCategory}' not found`);
        return [];
    }
}

//找父類或子類下的所有產品id
function findProducts(data, parentCategory = null, subCategory = null) {
    let products = [];

    if (parentCategory === null && subCategory === null) {
        // 沒有提供任何類別，返回所有產品ID
        Object.values(data.category).forEach(parent => {
            Object.values(parent).forEach(subCatProducts => {
                products = [...products, ...subCatProducts];
            });
        });
    } else if (parentCategory && subCategory === null) {
        // 僅提供父類別，返回該父類別下所有子類別的產品ID
        const parent = data.category[parentCategory];
        if (parent) {
            Object.values(parent).forEach(subCatProducts => {
                products = [...products, ...subCatProducts];
            });
        }
    } else if (subCategory) {
        // 提供了子類別，返回該子類別下的所有產品ID
        Object.values(data.category).forEach(parent => {
            if (parent[subCategory]) {
                products = [...products, ...parent[subCategory]];
            }
        });
    }

    return products;
}

function findProductsInfo(jsonData, productIds ) {
    let productsInfo = [];

    jsonData.products.forEach(product => {
        if (productIds.includes(product.id)) {
            productsInfo.push(product);
        }
    });

    return productsInfo;
}

async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

//test
fetchJson('../json/ProductClassificationTable.json')
    .then(jsonData => {
        // console.log(getCategoriesList(jsonData))
    }).catch(error => {
        console.error("Error loading data: ", error);
    });

export {
    fetchJson, createHotProductList, getCategoryBestSellers, selectRandomProducts,
    getCategoriesList, getSubcategories, findProducts, findProductsInfo
}