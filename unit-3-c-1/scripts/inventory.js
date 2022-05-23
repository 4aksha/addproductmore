

document.getElementById("add_more_product").addEventListener("click",shobackfut)

function shobackfut(){
    window.location.href = "index.html"
}




let prof = JSON.parse(localStorage.getItem("products"))

prof.map(function(e,index){

    let  div = document.createElement("div")

    let type = document.createElement("p")

    let desc = document.createElement("p")

    let price = document.createElement("p")

    let image = document.createElement("img")


    let rem = document.createElement("button")
    rem.innerText = "Remove Product"

    rem.addEventListener("click",function(){
        remfu(e,index)
    })

    


    image.src = e.image
    desc.innerText = e.desc 
    type.innerText = e.type 
    price.innerText = e.price

    div.append(image,desc,type,price,rem)
    document.getElementById("all_products").append(div)

















    function   remfu(e,index){
            prof.splice[index,1]
            localStorage.setItem("products",JSON.stringify(prof))
            window.location.reload()
    }




    function   remfu(e,index){
        prof.splice(index,1)
        localStorage.setItem("products",JSON.stringify(prof))
        window.location.reload()
}
})
