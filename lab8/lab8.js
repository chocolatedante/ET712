console.log("Dante Vanderpool")
/**
 * example 1
 */
// collect the element
let btnpressme = document.querySelector(".btnpressme")

// add a click event to chnage the button text and background color when the button is clicked

btnpressme.addEventListener("click", function(e){
    if(e.target.textContent === "PRESS ME"){
        e.target.textContent = "BUTTON WAS PRESSED"
    }
    else{
        e.target.textContent = "PRESS ME"
    }
    // toggle b/w class 'btnactive' and 'btnpressme'
    e.target.classList.toggle("btnactive")
})

/**
 * Example 2
 */
// remove the <li> if it's clicked
//collect the element
let fruitlist = document.querySelector("#fruitlist")

// click event to remove the <li> when it's clicked
fruitlist.addEventListener("click", function(event){
    // chceck if the clicked element is a 'li'
    if(event.target.tagName.toLowerCase() === 'li'){
        // remove the 'li' that was clicked
        event.target.remove()
    }
    else{
        console.log(event.target)
    }
})

/**
 * Example 3: prevent default
 */
// collect the element
let linkqcc = document.querySelector(".linkqcc")
linkqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC website is down")
})

/**
 * Example 4
 */
// collect element 
let modalwindow = document.querySelector(".modalwindow")
let linkslither = document.querySelector(".linkslither")
let closex = document.querySelector(".closex")

linkslither.addEventListener("click", function(){
    modalwindow.computedStyleMap.display = "block"
})
closex.addEventListener("click", function(){
    modalwindow.computedStyleMap.display = "none"
})