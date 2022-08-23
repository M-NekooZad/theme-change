const colorBtn = document.querySelectorAll(".color");
let selectedColor ;
  

colorBtn.forEach(function(btn){
    btn.addEventListener("click", function(event){
        selectedColor =event.target.dataset.color;
        console.log(selectedColor)

        document.documentElement.style.setProperty("--main-color", selectedColor )
    })
    })
