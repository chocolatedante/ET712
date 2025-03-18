console.log("Dante")
// example 1
// collect the element
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(100,0)
})

// example 2
//collect the emelents
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")

// funtion to scroll the gallery container
function scrollgallery(pexels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left: pexels,
        behavior: "smooth"
    })
}

//add click event to each button
btnright.addEventListener("click", function(){
    scrollgallery(600)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-600)
})

//example 3
let topcontainer=document.querySelector(".topcontainer")
window.addEventListener("scroll", function(){
    let pxTop=this.window.scrollY
    if(pxTop>80){
        topcontainer.style.display="block"
    }
    else{
        topcontainer.style.display = "none"
    }
})