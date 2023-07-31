/*
// let data=document.querySelectorAll(".bott>div")
// for(let i=0;i<data.length;i++){
//     data[i].addEventListener("click",clickme)
// }
// let bag=""
// function clickme(event){
//     let valu=event.target.innerText
//     let dis=   document.getElementById("display")
//     if(valu=="C"){
//         bag=""
//     }else if(valu=="="){
//        dis.innerText= eval(bag)
//     }else{
//         bag+=valu
//         dis.innerText= bag
//     }
//     console.log(valu)
// }
*/


const apps= document.querySelectorAll("#bott>div")
// addEventListener
console.log(apps)
 for(let q=0;q<apps.length;q++){
    apps[q].addEventListener("click",calcu)
 }
 let bag=''
function calcu(e){
   const value= e.target.innerText
   const disp=document.querySelector(".dis")
   if(value=="C"){
    bag=''
    disp.innerText=bag
   }else if(value==="="){
   let v= disp.innerText=eval(bag)
    bag=v
   }else{
    bag+=value
    disp.innerText=bag
   }
    console.log(value);
}
