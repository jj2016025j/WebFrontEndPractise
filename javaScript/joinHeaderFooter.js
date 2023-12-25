
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// header.js
const header = document.querySelector('header')
if (header) {
    header.innerHTML = `
        <h1 class="note-sans-black logo">魔法空間</h1>
        <nav class="bg-opacity-50">
            <ul>
                <li><a href=./index.html>HOME</a></li>
                <li><a href=./store.html>STORE</a></li>
                <li><a href=./about.html>ABOUT</a></li>
                <li><a href=./portfolio.html>PORTFOLIO</a></li>
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
    <div class="d-flex row justify-content-around">
        <div class="col-md-5 d-flex justify-content-around mt-3" style="width: 50%">
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
        <div class="col-md-5 d-flex justify-content-around text-center mt-3" style="width: 50%;">
            <a href="https://genshin.hoyoverse.com/zh-tw/company/privacy" target="_blank"
            rel="noopener noreferrer">
                隱私權政策</a>
            <a href="https://genshin.hoyoverse.com/zh-tw/company/terms" target="_blank"
            rel="noopener noreferrer">
                使用者協議</a>
            <a href="./about.html" target="_blank" rel="noopener noreferrer">
                公司簡介</a>
            <a href="mailto:jj2016025j@gmail.com.com" target="_blank" rel="noopener noreferrer">
                聯絡我們</a>
        </div>
    </div>
    <br>
    <div class="row text-center">
        <div class="col-md-5">
            <p>
                本網站所提供的所有產品與服務資訊，包括但不限於價格、描述、可用性及性能等，
                均“如其所是”地提供，且不含任何形式的保證或聲明。我們不對任何產品或服務的準確性、
                可靠性或適用性作出任何保證。使用這些產品或服務所產生的風險完全由用戶自行承擔。
            </p>
            <p>
                All product and service information provided on this website, 
                including but not limited to prices, descriptions, availability, 
                and performance, are provided "as is" without any form of guarantee or representation. 
                We make no guarantees regarding the accuracy, reliability, 
                or applicability of any product or service. 
                The risk associated with the use of these products or services is entirely borne by the user.
            </p>
        </div>
        <div class="col-md-5">
            <p>
                本網站中的所有內容，包括文字、圖形、標誌、按鈕圖標、圖像、音頻剪輯、數位下載、數據編輯和軟件，
                均為網站擁有者或其內容提供者的財產，並受國際版權法的保護。本網站的所有內容僅用於信息和個人非商業用途，
                在未經明確的書面許可下，不得以任何形式複製、再發布、上傳、發布、傳播或分發。
            </p>
            <p>
                All content on this website, including text, graphics, logos, 
                button icons, images, audio clips, digital downloads, data compilations, and software, 
                is the property of the website owner or its content providers and is protected by international copyright laws. 
                The content of this website is intended for informational and personal non-commercial use only and may not be reproduced, 
                republished, uploaded, posted, transmitted, or distributed in any form without explicit written permission.
            </p>
        </div>
        <p>Copyright © 2023 建陞教練的工作室 All Rights Reserved.</p>
    </div>
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
                <div class="img" style="background-image: url(../img/671.png);"></div>
                <a class="product-name" href="./productInfo.html" data-product-name="Pixel 8"><b>Pixel 8</b></a>
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
                <div class="img" style="background-image: url(../img/671.png);"></div>
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
                <div class="img" style="background-image: url(../img/671.png);"></div>
                <a class="product-name" href="./productInfo.html"><b>Pixel 8</b></a>
                <a class="product-price">$24,900 起</a>
            </div>
        </div>
    </section>
    `
} else {
  // 略過
}


