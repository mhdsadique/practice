
console.log("done")
let div=document.querySelectorAll(".button>div")
for(i=0;i<div.length;i++){
    div[i].addEventListener("click",clickfunction)
}
let bag=''
function clickfunction(){
    console.log("done")
    let display= document.getElementById("display")
    let data=event.target.innerText
    
    if(data=='='){
        display.innerText=eval(bag)
        bag=display.innerText
    }
    else if(data=="C"){
        bag=''
        display.innerText=''
    }
    else{
        bag=bag+data
       display.innerText=bag
   }
}