// let jsonData = {
//     "category": {
//         "奇幻主題商品": {
//             "奇幻服裝和飾品": [
//                 "PRD1001",
//                 "PRD1002",
//                 "PRD1003"
//             ],
//             "奇幻藝術品": [
//                 "PRD1010",
//                 "PRD1011",
//                 "PRD1012"
//             ],
//             "魔法道具和飾品": [
//                 "PRD1020",
//                 "PRD1021",
//                 "PRD1022"
//             ],
//             "收藏品和模型": [
//                 "PRD1030",
//                 "PRD1031",
//                 "PRD1032"
//             ],
//             "奇幻食品和飲料": [
//                 "PRD1040",
//                 "PRD1041",
//                 "PRD1042"
//             ],
//             "遊戲和玩具": [
//                 "PRD1050",
//                 "PRD1051",
//                 "PRD1052"
//             ],
//             "數位產品": [
//                 "PRD1060",
//                 "PRD1061",
//                 "PRD1062"
//             ],
//             "家居裝飾": [
//                 "PRD1070",
//                 "PRD1071",
//                 "PRD1072"
//             ],
//             "化妝和美容產品": [
//                 "PRD1080",
//                 "PRD1081",
//                 "PRD1082"
//             ],
//             "個性化服務": [
//                 "PRD1090",
//                 "PRD1091",
//                 "PRD1092"
//             ]
//         },
//         "先進科技產品": {
//             "儲存與移動技術": [
//                 "TECH2001",
//                 "TECH2002"
//             ],
//             "影像與顯示技術": [
//                 "TECH2010",
//                 "TECH2011"
//             ],
//             "個人輔助裝置": [
//                 "TECH2020",
//                 "TECH2021"
//             ],
//             "能量與供電裝置": [
//                 "TECH2030",
//                 "TECH2031"
//             ]
//         },
//         "寵物種類": {
//             "傳說中的生物": [
//                 "PET3001",
//                 "PET3002"
//             ],
//             "自然奇觀生物": [
//                 "PET3010",
//                 "PET3011"
//             ],
//             "科技融合宠物": [
//                 "PET3020",
//                 "PET3021"
//             ],
//             "守護與陪伴": [
//                 "PET3030",
//                 "PET3031"
//             ]
//         },
//         "魔法": {
//             "擬態魔法": [
//                 "MAG4001",
//                 "MAG4002"
//             ],
//             "元素魔法": [
//                 "MAG4010",
//                 "MAG4011",
//                 "MAG4012",
//                 "MAG4013"
//             ],
//             "治癒與防禦魔法": [
//                 "MAG4020",
//                 "MAG4021"
//             ],
//             "契約魔法": [
//                 "MAG4030",
//                 "MAG4031"
//             ],
//             "幻覺與塑形魔法": [
//                 "MAG4040",
//                 "MAG4041"
//             ],
//             "禁止魔法": [
//                 "MAG4050",
//                 "MAG4051",
//                 "MAG4052",
//                 "MAG4053"
//             ],
//             "特殊魔法": [
//                 "MAG4060",
//                 "MAG4061",
//                 "MAG4062"
//             ],
//             "派系": [
//                 "MAG4070",
//                 "MAG4071",
//                 "MAG4072",
//                 "MAG4073"
//             ]
//         }
//     }
// };

// function getCategoriesList(jsonData) {
//     let parentCategories = [];

//     for (let category in jsonData.category) {
//         parentCategories.push(category);
//     }

//     return parentCategories;
// }
// function getAllSubcategories(jsonData) {
//     let subCategories = [];
//     for (let category in jsonData.category) {
//         subCategories = subCategories.concat(Object.keys(jsonData.category[category]));
//     }
//     return subCategories;
// }
// function getSubcategories(jsonData, parentCategory) {
//     if (jsonData.category[parentCategory]) {
//         return Object.keys(jsonData.category[parentCategory]);
//     } else {
//         return [];
//     }
// }

// console.log("父分類:", getCategoriesList(jsonData));
// console.log("所有子分類:", getAllSubcategories(jsonData));
// console.log("特定子分類:", getSubcategories(jsonData, "奇幻主題商品"));



// 使用示例
let data = {
    "奇幻主題商品": {
        "奇幻服裝和飾品": ["PRD1001", "PRD1002", "PRD1003"],
        "奇幻藝術品": ["PRD1010", "PRD1011", "PRD1012"],
        "魔法道具和飾品": ["PRD1020", "PRD1021", "PRD1022"],
        "收藏品和模型": ["PRD1030"]
    },
    // 其他父分類...
};

let parentCategory = "奇幻主題商品";
let subCategory = "奇幻服裝和飾品"; // 可以設為null或不提供來檢索所有子分類

console.log(findProducts(data, parentCategory, subCategory));
