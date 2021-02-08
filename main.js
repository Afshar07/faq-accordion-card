// Adding Accordion Functions
const acc = document.getElementsByClassName("question");

for (i=0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");

    })
}