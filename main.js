// Adding Accordion Functions
const acc = document.getElementsByClassName("question");
const panel = document.getElementsByClassName("answer");

// for (i=0; i< acc.length; i++){
//     acc[i].addEventListener("click", function(){
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("show");

//     })
// }


for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains("active");
        setClass(acc, "active", "remove");
        setClass(panel, "show", "remove");

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}
function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);

    }
}
