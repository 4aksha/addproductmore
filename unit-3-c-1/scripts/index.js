//store the products array in localstorage as "products"


document.getElementById("add_product").addEventListener("click",myfuns)

document.getElementById("show_products").addEventListener("click",shhowufns)

let prod = JSON.parse(localStorage.getItem("products"))||[]

function shhowufns(){
    window.location.href = "inventory.html"
}



   function shyam(t,d,p,i){
 
   this.type = t 
   this.desc = d 
   this.price = p 
   this.image = i
   
     

   }

function myfuns(e){
    e.preventDefault()
    let form = document.getElementById("products")
    let t = form.type.value 
    let n = form.desc.value
    let p = form.price.value 
    let i = form.image.value

    let show  = new shyam(t,n,p,i)
    console.log(show)

    prod.push(show)

    localStorage.setItem("products",JSON.stringify(prod))
    window.location.reload()
   
}