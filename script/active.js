
// Filter Gallery

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");
for (let i=0; i<list.length; i++) {
    list[i].addEventListener("click", function(){
        for(let j=0; j<list.length; j++){
            list[j].classList.remove("active");
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute("data-filter");
        for(let k=0; k<itemBox.length; k++){
            itemBox[k].classList.remove("active");
            itemBox[k].classList.add("hide");
            if( itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
                itemBox[k].classList.remove("hide");
                itemBox[k].classList.add("active");

            }
        }

    })
}

// Get the button:
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
