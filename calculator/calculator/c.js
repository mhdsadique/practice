

let data=document.querySelectorAll(".bott>div")
for(let i=0;i<data.length;i++){
    data[i].addEventListener("click",clickme)
}

let bag=""
function clickme(event){
    let valu=event.target.innerText
    let dis=   document.getElementById("display")
    if(valu=="C"){
        bag=""
    }else if(valu=="="){
       dis.innerText= eval(bag)
    }else{
        bag+=valu
        dis.innerText= bag
    }
    console.log(valu)
}