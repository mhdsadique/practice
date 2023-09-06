window.addEventListener("load",()=>{
    getdata()
})
// https://smoggy-sheath-dress-fish.cyclic.app/product 
function getdata(){
   fetch("http://localhost:8000/datas").then((e)=>e.json())
    .then((e)=>{
Dataecom(e)
    }).catch((e)=>{
        console.log(e)
    })
}
    function Dataecom(data){
        data.forEach((e,i)=>{
   let div= document.createElement("div")
   div.style.border='1px solid red'
   let img= document.createElement("img")
//    img.setAttribute("src",e.image)
img.src=e.img
       img.setAttribute("class","imag")
   let name= document.createElement("h3")
   name.innerText=e.name
   let price= document.createElement("h3")
   price.innerText=e.price
   let titil= document.createElement("h4")
   titil.innerText=e.brand

   let butt=document.createElement("button")
   butt.innerText='Delete'
   butt.setAttribute("id","butt")
   butt.addEventListener("click",function(){
    deletefunction(e.id)
})

    let update=document.createElement("button")
    update.innerText='Update'
    update.setAttribute("id","butt")
    update.addEventListener("click",function(){
     updatefunction(e)
   })
   div.append(img,name,price,titil,butt,update)
   document.querySelector("#data").append(div)
            // console.log(e)
    }) }
        // ---------update
function updatefunction(i){
    let image= document.querySelector("#image").value || i.img
    let name= document.querySelector("#name").value|| i.name
    let price= document.querySelector("#price").value||i.price
    let brand= document.querySelector("#brand").value||i.brand
    let data={
     img:image,
     name:name,
     price:price,
     brand:brand
    }
    fetch(`http://localhost:8000/datas/${i.id}`,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        } })}
// -----------------delete
    function deletefunction(i){
   
        // fetch(`https://smoggy-sheath-dress-fish.cyclic.app/product/delete/${i}`,{
        fetch(`http://localhost:8000/datas/${i}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        window.location.reload()
        // getdata()
    }

    // 000000000000post
    function datasubmit(){
        event.preventDefault()
       let image= document.querySelector("#image").value
       let name= document.querySelector("#name").value
       let price= document.querySelector("#price").value
       let brand= document.querySelector("#brand").value

       let data={
        img:image,
        name:name,
        price:price,
        brand:brand
       }
       fetch("http://localhost:8000/datas/",{
        method:"post",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
       })
    //    getdata()
   // window.location.reload()
        console.log(data)
    }

  let sort=  document.getElementById("sort")
  sort.addEventListener("change",sortfunction)

  function sortfunction(){
    document.getElementById("data").innerHTML=''
    if(event.target.value=="l"){
        
            fetch("http://localhost:8000/datas?_sort=price&_order=asc"
                 ).then((e)=>e.json())
             .then((e)=>{
         // console.log(e)
         Dataecom(e)
             }).catch((e)=>{
                 console.log(e)
             })
            }
            else if(event.target.value=="h"){
                fetch("http://localhost:8000/datas?_sort=price&_order=desc"
                ).then((e)=>e.json())
            .then((e)=>{
        // console.log(e)
        Dataecom(e)
            }).catch((e)=>{
                console.log(e)
            }) }
            else{
                getdata()
            }
    console.log()
  }
  function filterfun(){
    document.getElementById("data").innerHTML=''
         let data=event.target.value
        
            fetch(`http://localhost:8000/datas?brand=${data}`
                 ).then((e)=>e.json())
             .then((e)=>{
         Dataecom(e)
             }).catch((e)=>{
                 console.log(e)
             })}