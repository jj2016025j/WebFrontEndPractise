document.ready(function() {
    ('#toggle-btn').click(function() {
      ('#slide-element').slideToggle();
    });
  });

  const element = document.querySelector(".element");

  element.style.transform = "translate(-100px, -100px)"
  
  // 使用 CSS 動畫
  element.style.transition = "transform 1s ease-in-out";
  
  // 移動元素
  element.style.transform = "translate(100px, 100px)";
  