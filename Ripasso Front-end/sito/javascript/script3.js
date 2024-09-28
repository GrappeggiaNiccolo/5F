const btn3 =  document.getElementById('mdfy');
function CambiaColore() {
    // Cambia il colore della sidebar
    document.body.style.backgroundColor = localStorage.getItem("bgColor");
}

btn3.addEventListener("click", function(){
    
});

window.addEventListener("storage", CambiaColore);