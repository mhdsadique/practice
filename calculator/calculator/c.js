
const apps= document.querySelectorAll("#bott>div")
 for(let q=0;q<apps.length;q++){
    apps[q].addEventListener("click",calcu)
 }
 let bag=""
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
