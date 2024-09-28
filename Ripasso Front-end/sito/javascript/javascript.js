const SecretFunction = function() //scrive numeri interi random
{
    return Math.floor(Math.random()*10)+1;
}

let secretNumber;
var buttons = document.querySelectorAll("button");

secretNumber = SecretFunction();
//console.log(secretNumber) mostra il numero random nella console della pagina

//entro nel body dell'html button check
buttons[0].addEventListener("click", function() 
//document.body.querySelector("button").addEventListener("click", function()
{
    if(secretNumber == document.body.querySelector("input").value)
    {
        alert("hai indovinato!");
    }
    else
    {
        alert("hai sbagliato!");
    }
}); 

//button reset
buttons[1].addEventListener("click", function(){
    secretNumber = SecretFunction();
})