let calcular=document.getElementById("calcular");
let siguiente=document.getElementById("siguiente");
let gif=document.getElementById("giff");

calcular.addEventListener("click",verificarRespuesta);
siguiente.addEventListener("click",cambiarDatos);



function verificarRespuesta(){
    
    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;

    let calcularResultado= Number(numero1)+Number(numero2);

     console.log(resultado)
     console.log(calcularResultado)
    
    if(resultado==calcularResultado){

        console.log("ok");
        gif.classList.remove("invisible")
        gif.src=("https://giphy.com/embed/3o7abKhOpu0NwenH3O");

    }else{

        console.log("ojo");
        gif.classList.remove("invisible")
        gif.src=("https://giphy.com/embed/3oEjI96ryYFtijYjss");

    }


}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

 
function cambiarDatos(){

    let numero1=document.getElementById("numero1");
    let numero2=document.getElementById("numero2");

    numero1.value=getRandomInt(1,20);
    numero2.value=getRandomInt(1,20);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
  }