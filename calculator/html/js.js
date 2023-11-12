
const note=document.querySelector("#display>h4")

const nokey=document.querySelectorAll("#key>div")
  
for(let q=0;q<nokey.length;q++){

    nokey[q].addEventListener("click",clickfuntion)
}
// nokey.create (clickfuntion("click"))

let bag=""
function clickfuntion(){
   let ce=event.target.innerText
   
   if(ce=="C"){
       bag=""
       note.innerText=""
    }else if(ce=="=") {
    note.innerText=eval(bag)
    bag=note.innerText
    
}
   
   else{
       bag=bag+ce
       note.innerText=bag
   }
    console.log(bag)
}


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
