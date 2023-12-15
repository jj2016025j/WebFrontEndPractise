// header.js
const header = document.querySelector('header')
if (header) {
    header.innerHTML = `
        <h1 class="note-sans-black logo">魔術空間</h1>
        <nav>
            <ul>
                <li><a href=./index.html>HOME</a></li>
                <li><a href=./store.html>STORE</a></li>
                <li><a href=./portfolio.html>PORTFOLIO</a></li>
                <li><a href=./about.html>ABOUT</a></li>
            </ul>  
        </nav>
    `;
} else {
    // 略過
}  

// footer.js
const footer = document.getElementsByTagName('footer')[0]
if (footer) {
    footer.innerHTML = `
    <div class="d-flex flex-direction-row justify-content-space-around">
        <div class="d-flex column-gap justify-content-space-around" style="width: 50%;height:30px">
            <a href="https://github.com/jj2016025j"><i class="bi bi-github"></i></a>
            <a href="https://www.facebook.com/lee871116/"><i class="bi bi-facebook" size="2x"></i></a>            
            <a href="https://www.instagram.com/lee_871116"><i class="bi bi-instagram"></i></a>           
            <a href="https://twitter.com/LEECS871116"><i class="bi bi-twitter"></i></a>
            <a href="https://www.youtube.com/channel/UCdFWtSFizZFpBovsUY7ZKyg"><i class="bi bi-youtube"></i></a>
            <a href="https://www.behance.net/d71ea9ce"><i class="bi bi-behance"></i></a>
            <a href="https://www.linkedin.com/in/%E5%BB%BA%E9%99%9E-%E6%9D%8E-3145931b2/"><i class="bi bi-linkedin"></i></a>
            <a href="linkfly.to/leecs871116"><i class="bi bi-link"></i></a>
            <a href="https://jj2016025j.github.io/WebPractice20230826/"><i class="bi bi-browser-chrome"></i></a>
        </div>
        <div class="d-flex column-gap justify-content-space-around" style="width: 50%;">
            <a href="https://genshin.hoyoverse.com/zh-tw/company/privacy" target="_blank"
            rel="noopener noreferrer">
                隱私權政策</a>
            <a href="https://genshin.hoyoverse.com/zh-tw/company/terms" target="_blank"
            rel="noopener noreferrer">
                使用者協議</a>
            <a href="./about.html"
                target="_blank" rel="noopener noreferrer">
                公司簡介</a>
            <a href="mailto:jj2016025j@gmail.com.com" target="_blank" rel="noopener noreferrer">
                聯絡我們</a>
        </div>
    </div>
    <br>
    <p class="text-align-center">
        本遊戲為免費使用，遊戲內另提供購買虛擬貨幣、物品等付費服務。請注意遊戲時間，避免沉迷。本遊戲部份情節涉及性、暴力。<br />&#34;PlayStation
        Family Mark,&#34; &#34;PS5 logo&#34; and &#34;PS4 logo&#34; are registered trademarks or trademarks of Sony
        Interactive Entertainment Inc.<br />Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic
        Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the
        property of their respective owners.
    </p>
    <p class="text-align-center">Copyright © 2023 建陞教練的工作室 All Rights Reserved.</p>
    `;
} else {
// 略過
}

//=====================================活動
const activityDisplay = document.getElementById('Activity-display')
if (activityDisplay) {
    activityDisplay.innerHTML = `
    <h1 class="note-sans-black colorful" id="Activity-display">當前活動</h1>       
    <div class="display row Activity-display">
        <div class="Activity-list col-12 d-flex py-3" id="activity-list">
            <img class="img" src="../img/e弓箭手22.png" alt="">
            <img class="img" src="../img/e弓箭手22.png" alt="">
            <img class="img" src="../img/e弓箭手22.png" alt="">
        </div>
    </div>
    `
} else {
  // 略過
}

//=====================================熱門商品
const hotProductDisplay = document.getElementById('hot-product-display')
if (hotProductDisplay) {
    hotProductDisplay.innerHTML = `
    <h1 class="note-sans-black colorful" id="hot-product-display">熱門商品</h1>       
    <section class="display row overflow-auto product-list">
        <div class="product-list col-12 d-flex py-3" id="hot-product-list">
            <div class="product-card d-flex flex-direction-column">
                <div class="img" style="background-image: url(../img/3.jpg);"></div>
                <a class="product-name" href="./productInfo.html"><b>Pixel 8</b></a>
                <a class="product-price">$24,900 起</a>
            </div>
        </div>
    </section>
    `
} else {
  // 略過
}

//=====================================商品分類
const productClassificationDisplay = document.getElementById('hot-classification-display')
if (productClassificationDisplay) {
    productClassificationDisplay.innerHTML = `
    <h1 class="note-sans-black colorful" id="hot-classification-display">熱門分類</h1>       
    <section class="display row overflow-auto product-list">
        <div class="product-list col-12 d-flex py-3" id="product-classification-list">
            <div class="product-card d-flex flex-direction-column">
                <div class="img" style="background-image: url(../img/3.jpg);"></div>
                <a class="product-name" href="./productInfo.html"><b>Pixel 8</b></a>
            </div>
        </div>
    </section>
    `
} else {
  // 略過
}

//=====================================所有產品
const allProductDisplay = document.getElementById('all-product-display')
if (allProductDisplay) {
    allProductDisplay.innerHTML = `
    <h1 class="note-sans-black colorful" id="all-product-display">所有商品</h1>
    <div class="row classification-list" id="classification-list">
        <div class="classification-option">分類選項</div>
        <div class="classification-option">魔法</div>
        <div class="classification-option">科技</div>
        <div class="classification-option">寵物</div>
    </div>
    <section class="display row all-product-list">
        <div class="row all-product-list col-12 py-3" id="all-product-list">
            <div class="product-card d-flex flex-direction-column">
                <div class="img" style="background-image: url(../img/3.jpg);"></div>
                <a class="product-name" href="./productInfo.html"><b>Pixel 8</b></a>
                <a class="product-price">$24,900 起</a>
            </div>
        </div>
    </section>
    `
} else {
  // 略過
}


