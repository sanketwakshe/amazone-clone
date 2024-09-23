// console.dir(document);
// console.dir(document.all[7]);
// console.dir(document.all[7].innerText);
// document.all[7].innerText="sanket";
// document.getElementById("para");
// console.dir(document.querySelector('p'));
// let dii=document.createElement("div");
//  let h = document.createElement("h3");
//  let p =document.createElement("p");
//  h.innerText="i am h3";
//  p.innerText="ME TOO!";
// dii.append(h);
// dii.append(p);
// dii.classList.add("div");

// document.querySelector("body").append(dii);
let input=document.createElement("input");

// let btn=document.createElement("button");

// btn.innerText="Click me";
// document.querySelector("body").append(input);
// document.querySelector("body").append(btn);
// btn.setAttribute("id","btn");
// input.setAttribute("placeholder","username");
// let bb=document.querySelector("n");
// btn.classList.add("div");
// let h1 =document.createElement("h1");
// h1.innerText=("sanket  <b>practice</b> kartoy");

//  let btns = document.querySelectorAll("button");
//  for(btn of btns){
//      btn.onclick=sanket;
//      btn.onclick=ss;
// //     btn.onmouseenter = function(){
// //         console.log("entre in button");
// //     };
    
 
//  function sanket(){
//      console.log("like");
//  }
//  function ss(){
//     console.log("press");
//  }
// }

//  let btns = document.querySelectorAll("button");
//  for(btn of btns){
//      btn.addEventListener("click",clck);
//      btn.addEventListener("click",clck2);
//      btn.addEventListener("dblclick", function(){
//         console.log("double cliked");
//      });
//  }
//  function clck(){
//      console.log("pressed");
//  }
//  function clck2(){
//      console.log("clicked");
//  }

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h2");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     let div = document.querySelector("div");
//         div.style.backgroundColor = randomColor;
    
//     console.log("color update");
// });
// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=` rgb(${red},${green},${blue})`;
//     return color;
// }

// let h3 = document.querySelector("h3");
// let p= document.querySelector("p");
// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
// }
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
    
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
  console.dir(form);
  let user=this.elements[0];
  let user1=this.elements[1];
  let pass=this.elements[2];
  console.log(user.value);
  console.log(user1.value);
  console.log(pass.value)
});