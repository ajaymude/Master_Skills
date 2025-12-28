// DOM

// select element
const element = document.getElementById("id");
const element1 = document.querySelector("selector");
const elements = document.querySelectorAll("selector");

// modify element
const element2 = document.getElementById("id");
const element3 = document.querySelector("selector");
const elements1 = document.querySelectorAll("selector");


// list of the dom events 
// click, mouseover, mouseout, mouseenter, mouseleave, mousemove, mousedown, mouseup, 
// keydown, keyup, keypress, submit, change, focus, blur, load, resize, scroll, unload, 
// transitionend, animationend, input, invalid, reset, select,   submit, change, load, error

// example 
element.addEventListener("click", function () {
    console.log("clicked");
});

// manupulate in the css example 
element.style.color = "red";
element.style.backgroundColor = "blue";


// event on the specific  button esc

const button = document.getElementById("id");
button.addEventListener("click", function () {
    console.log("clicked");
});


// <button id="closeBtn">Close</button>

// <script>
//   document.addEventListener("keydown", function (event) {
//     if (event.key === "Escape") {
//       console.log("Escape key pressed");
//       document.getElementById("closeBtn").click();
//     }
//   });
// </script>


