// // 所有商品
// const products = [...data.products];
// products.shuffle();

// // 熱門商品
// const popularProducts = products.filter((product) => product.sales > 0);
// popularProducts.sort((a, b) => b.sales - a.sales);

// // 熱門分類
// const popularCategories = data.categories.filter((category) => category.products.length > 0);
// popularCategories.sort((a, b) => b.products.length - a.products.length);

// // 角色
// const roles = data.roles.sort((a, b) => b.value - a.value);

// // 物品
// const items = data.items.sort((a, b) => a.name.localeCompare(b.name));

//............................................
let data ={}

fetch('../json/data.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData
    // console.log(data); // 访问产品名

    updateUI(data);
})
  .catch(error => {
    console.error('Error fetching JSON:', error);
});

//===============================================================

function updateUI(data){
    const nameElement = document.querySelector("#name");
    if (nameElement) {
      nameElement.innerText = data.user.name;
    } else {
      // 略過
    }
    const moneyElement = document.querySelector("#money");
    if (moneyElement) {
        moneyElement.innerText = data.user.money;
    } else {
      // 略過
    }

    updateActivityList(data)
    
    // 熱門商品
    const hotProductList = createHotProductList(data.products, data.salesRecords);
    // console.log(hotProductList);
    updateHotProductList(hotProductList)
    
    //熱門分類
    const categoryBestSellers = getCategoryBestSellers(data.products);
    // console.log("Category Best Sellers:", categoryBestSellers);
    updateProductClassificationList(categoryBestSellers)
    //列出分類
    updateClassificationList(categoryBestSellers)
    
    //所有物品
    const selectedProducts = selectRandomProducts(data.products, 20);
    // console.log("random product:",selectedProducts);
    updateAllProductList(selectedProducts)
    
    updateRoleList(data.roles)
    updateAllItemList(data.items)
}

//==================活動=============================================
const activityList = document.getElementById("activity-list");

function updateActivityList(data) {
    if (activityList === null) {
        return;
    }

    // 初始化一个空字符串来构建所有活动的 HTML
    let activitiesHTML = "";

    // 遍历每个活动并创建相应的 DOM 字符串
    data.activities.forEach(activity => {
        activitiesHTML += `
            <div class="product-card d-flex flex-column">
            <a class="product-name" href="./productInfo.html"><div class="img" style="background-image: url(${activity.image});"></div></a>
            </div>
        `;
    });

    // 将构建好的字符串一次性赋值给 activityList 的 innerHTML
    activityList.innerHTML = activitiesHTML;
}

//====================熱門商品===========================================
const hotProductList = document.getElementById("hot-product-list");

function createHotProductList(products, salesRecords) {
    let salesMap = {};
  
    // 累计每个产品的销售量
    salesRecords.forEach(record => {
      if (salesMap[record.product_name]) {
        salesMap[record.product_name] += record.quantity;
      } else {
        salesMap[record.product_name] = record.quantity;
      }
    });
  
    // 匹配产品信息并创建热门商品列表
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

//=====================================熱門商品
function updateHotProductList(topSellingProducts) {
    if (hotProductList === null) {
        return;
    }

    // 初始化一个空字符串来构建所有热门商品的 HTML
    let hotProductsHTML = "";

    // 遍历每个产品并创建相应的 DOM 字符串
    topSellingProducts.forEach(product => {
        hotProductsHTML += `
            <div class="product-card d-flex flex-column">
                <div class="img" style="background-image: url(${product.image});"></div>
                <a class="product-name" href="#"><b>${product.name}</b></a>
                <a class="product-price">$${product.price}</a>
            </div>
        `;
    });

    // 将构建好的字符串一次性赋值给 hotProductList 的 innerHTML
    hotProductList.innerHTML = hotProductsHTML;
}

    // debugModel("===============產出熱門商品結束===============")


//=====================熱門分類==========================================
const productClassificationList = document.getElementById("product-classification-list");

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

function updateProductClassificationList(products) {
    if(productClassificationList===null)
        return
    productClassificationList.innerHTML = "";
    // 遍历每个商品分类并创建相应的 DOM 元素
    products.forEach(product => {
        // 创建商品分类卡片容器
        let categoryCard = document.createElement('div');
        categoryCard.className = "product-card d-flex flex-column";

        // 创建图片元素
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${product.image})`;

        // 创建商品分类名称元素
        let categoryName = document.createElement('a');
        categoryName.className = "product-classification-name";
        categoryName.href = `./productInfo.html`;
        categoryName.innerHTML = `<b>${product.category}</b>`;

        // 组合所有元素
        categoryCard.appendChild(imgDiv);
        categoryCard.appendChild(categoryName);

        // 将商品分类卡片添加到列表中
        productClassificationList.appendChild(categoryCard);
    });
}


//========================商品種類=======================================
//創建分類
const classificationList = document.getElementById("classification-list");

function updateClassificationList(products) {
    if(classificationList===null)
        return
    classificationList.innerHTML = "";
    // 假设 data.categories 是你的数据源
    products.forEach(product => {
        // 创建分类选项元素
        let categoryElement = document.createElement('div');
        categoryElement.className = "classification-option";
        categoryElement.href = `./productInfo.html`;
        categoryElement.textContent = product.category;

        // 将分类选项添加到分类列表中
        classificationList.appendChild(categoryElement);
    });
}
//========================所有商品=======================================
//創建所有商品
const allProductList = document.getElementById("all-product-list");

function selectRandomProducts(products, maxCount) {
    const shuffledProducts = [...products].sort(() => 0.5 - Math.random()); // 打乱数组
    return shuffledProducts.slice(0, maxCount); // 选择前20个商品
}
  
function updateAllProductList(selectedProducts){
    if(allProductList===null)
        return
    allProductList.innerHTML = "";
    // 遍历每个产品并创建相应的 DOM 元素
    selectedProducts.forEach(product => {
        // 创建产品卡片容器
        let productCard = document.createElement('div');
        productCard.className = "product-card d-flex flex-column shadow";

        // 创建图片元素
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${product.image})`;

        // 创建产品名称元素
        let productName = document.createElement('a');
        productName.className = "product-name";
        productName.href = `./productInfo.html`;
        productName.innerHTML = `<b>${product.name}</b>`;
        productName.productName = product.name

        // 创建产品价格元素
        let productPrice = document.createElement('a');
        productPrice.className = "product-price";
        productPrice.textContent = `$${product.price}`;

        // 组合所有元素
        productCard.appendChild(imgDiv);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        // 将产品卡片添加到列表中
        allProductList.appendChild(productCard);
    });
}
//===============================================================
//角色創建
const roleList = document.getElementById("role-list");

function updateRoleList(roles){
    if(roleList===null)
        return
    roleList.innerHTML = "";
    // 假设 data.roles 是你的数据源
    roles.forEach(role => {
        // 创建角色卡片容器
        let roleCard = document.createElement('div');
        roleCard.className = "role-card";

        // 创建角色图片
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${role.image})`;

        // 创建角色信息容器
        let roleInfo = document.createElement('div');
        roleInfo.className = "role-info";

        // 角色名
        let nameDiv = document.createElement('div');
        nameDiv.className = "name";
        nameDiv.textContent = role.name;

        // 角色能力值
        let abilityValueDiv = document.createElement('div');
        abilityValueDiv.className = "ability-value";
        abilityValueDiv.textContent = `體力：${role.value}`;

        // 角色物品列表
        let inventoryListDiv = document.createElement('div');
        inventoryListDiv.className = "inventory-list";
        role.inventory.forEach(item => {
            let inventoryDiv = document.createElement('div');
            inventoryDiv.className = "inventory";

            let itemImgDiv = document.createElement('div');
            itemImgDiv.className = "img";
            itemImgDiv.style.backgroundImage = `url(${item.image})`;

            inventoryDiv.appendChild(itemImgDiv);
            inventoryListDiv.appendChild(inventoryDiv);
        });

        // 操作按钮
        let buttonsDiv = document.createElement('div');
        buttonsDiv.className = "d-flex justify-content-between row-gap";

        let travelButton = document.createElement('button');
        travelButton.className = "travel";
        travelButton.textContent = "旅行";

        let exileButton = document.createElement('button');
        exileButton.className = "exile";
        exileButton.textContent = "放逐";

        buttonsDiv.appendChild(travelButton);
        buttonsDiv.appendChild(exileButton);

        // 组装角色卡片
        roleCard.appendChild(imgDiv);
        roleInfo.appendChild(nameDiv);
        roleInfo.appendChild(abilityValueDiv);
        roleInfo.appendChild(inventoryListDiv);
        roleInfo.appendChild(buttonsDiv);
        roleCard.appendChild(roleInfo);

        // 将角色卡片添加到列表中
        roleList.appendChild(roleCard);
    });
}

//===============================================================
//物品列表
const allItemList = document.getElementById("all-item-list");

function updateAllItemList(items){
    if(allItemList===null)
        return
    allItemList.innerHTML = "";
    // 假设 data.items 是你的数据源
    items.forEach(item => {
        // 创建每个项目的容器
        let itemElement = document.createElement('div');
        itemElement.className = "item d-flex flex-column";

        // 创建图片元素
        let imgDiv = document.createElement('div');
        imgDiv.className = "img";
        imgDiv.style.backgroundImage = `url(${item.image})`;

        // 创建项目名称元素
        let nameElement = document.createElement('a');
        nameElement.className = "item-name";
        let nameText = document.createElement('b');
        nameText.textContent = item.name;
        nameElement.appendChild(nameText);

        // 创建项目数量元素
        let quantityElement = document.createElement('a');
        quantityElement.className = "item-quantity";
        quantityElement.textContent = item.quantity;

        // 组合所有元素
        itemElement.appendChild(imgDiv);
        itemElement.appendChild(nameElement);
        itemElement.appendChild(quantityElement);

        // 将整个项目元素添加到列表中
        allItemList.appendChild(itemElement);
    });
}

// let onDebugModel = true
// let onDebugModel = false
// function debugModel(text){
//     if(onDebugModel){
//         console.log(text)
//     }
// }
