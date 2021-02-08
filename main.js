// Adding Accordion Functions
const acc = document.getElementsByClassName("question");

for (i=0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");


        // Showing and Hiding Answers
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        };

    })
}