/*const element = document.querySelector(".element");

element.style.transform = "translate(-100px, -100px)"

// 使用 CSS 動畫
element.style.transition = "transform 1s ease-in-out";

// 移動元素
element.style.transform = "translate(100px, 100px)";*/

//javascript語法練習
// let letTest="同var"
// const constTest="不可被改變"
// console.log(letTest)
// let ClassA = ["anne","amy","tom"]
// ClassA.push("amumu")
// console.log("會換行",ClassA)
//ClassA.length

// let object = {
//   image:"../images/1.jpg",
//   date:"2023/10/31",
//   comment:["好看","好帥","好美"]
// }
// let wall=[
//   object,
//   object,
//   object,
//   object
// ]
// console.log(wall)
// console.log(wall[2])
// console.log(wall[0].comment)

//switch 跟C#一樣

//這邊建立物件用funtion?


// function CreatCard(_name){
//   this.name=_name
// }
// let card1=new CreateCard("Amy")
// console.log(card1)

class Card{
  constructor(name){
    this.name=name
  }
}

// const card2=new Card("Bruce")
// console.log(card2)

// document.write("測試")
// prompt("測試")
//alert("警告視窗")

//[用來包陣列]{用來包物件}

// let letTest = document.getElementById("test")
// letTest.style.color= "white"
// letTest.innerHTML="測試innerHTML成功"
// letTest.innerText="測試innerText成功"

// try {
//   const element = document.getElementById('my-element');
//   element.style.color = 'red';
// } catch (error) {
//   // Handle the error here
// }

var test = document.getElementById("test")
test.addEventListener("click",Click)

function Click(){
  console.log(this)
  this.style.color= "white"
}
function onClick(element){
  console.log(element)
  element.style.color= "white"
}

var addlist = document.getElementById("addlist")
let testString1 ="testString1"
let testString2 ="testString2"
let testString3 ="testString3"
addlist.addEventListener("click",function(){
  addlist.innerHTML +=    `    
  <h1 class="animate infinite bounce animate--fast">${testString1}</h1>
  <h2 class="animate infinite slideInLeft animate--slow">${testString2}</h1>
  <h3 class="animate infinite rotate animate--slow">${testString3}</h1>
`
})

var myobj={}//可以這樣建立物件




//以下是主要程式碼
function Main(){
  function Start(){
    console.log("Initialization something...")
  }
  function Update(){
    console.log("Update data..."+i)
  }
  function End(){
    console.log("It's over...")
  }
  Start()
  for(i=1;i<=5;i++){
    Update()
  }
  End()
}

class Player{
  constructor(_name){
    this.name=_name
  }
}

// Main()