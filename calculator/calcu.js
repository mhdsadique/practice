

var divq=document.querySelectorAll(".botto>div")
console.log(divq)

for(let q=0;q<divq.length;q++){
    divq[q].addEventListener("click",divfuntion)
}


let bag=''
function divfuntion(event){
    let value=event.target.innerText
    let disp=document.querySelector("#displa")
    disp.setAttribute("class","disp")
    if(value=="="){
        
        disp.innerText=eval(bag)
        bag=disp.innerText
    }
    else if(value=="C"){
        disp.innerText=""
        bag=""
    }
    else{
        bag=bag+value
        disp.innerText=bag

    }
}


    /*
    let data=document.querySelectorAll(".numb>div")
    // addEventListener
    // console.log(data)
    let bag=''
    for(let i=0;i<data.length;i++){
    
        data[i].addEventListener("click",myCalculator)
    }
    
    function myCalculator(params) {
        let text=params.target.innerText
        let display=  document.querySelector("#display")
        
        if(text=="="){
            display.innerText=eval(bag)
            bag=display.innerText
        }
        else if(text=="C"){
            bag=''
            display.innerText=""
        }
        else{
                bag+=text
               display.innerText=bag
    
       }
    }
    
    let a
    const arr=[1,2,3,4]
    const calcu=()=>{
    
        for(let i=0;i<arr.length;i++){
            a=  setTimeout(()=>{
                console.log(arr[i],i)
                az()
        },i*1000)
    }
    }
    // clearInterval(a)
    
    const az=()=>{
    
      console.log("donee")
    }
    const aza=()=>{
    
        azx()
    }
    const azx=()=>{
        calcu()
    
    }
    aza()          */