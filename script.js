const result = document.getElementById("R");
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const input = result.value.trim();
    if (input.match(/^([0-9+\-*\/\s])+([0-9])+$/g)) {
      try {
        const resultValue = eval(input);
        result.value = resultValue;
      } catch (error) {
        console.error(error);
        alert("Error: Operación matemática no válida.");
      }
    } else {
      alert("Error: Operación matemática no válida.");
    }
  }
});

function takeValue(x){
  document.getElementById("R").value += x;
}

function clearInput(){
  document.getElementById("R").value = "";
}

function calculateResult(){
  let result = eval(document.getElementById("R").value);
  document.getElementById("R").value = result;
}

let uno = document.getElementById("uno")
let dos = document.getElementById("dos")
let tres = document.getElementById("tres")
let cuatro = document.getElementById("cuatro")
let cinco = document.getElementById("cinco")
let seis = document.getElementById("seis")
let siete = document.getElementById("siete")
let ocho = document.getElementById("ocho")
let nueve = document.getElementById("nueve")
let menos = document.getElementById("menos")
let mas = document.getElementById("mas")
let igual = document.getElementById("igual")
let division = document.getElementById("division")
let multiplicacion = document.getElementById("multiplicacion")
let coma = document.getElementById("coma")
let cero = document.getElementById("cero")
let eliminar = document.getElementById("eliminar")

cero.addEventListener("click", function(){
  takeValue(0)
})
uno.addEventListener("click", function(){
  takeValue(1)
})
dos.addEventListener("click", function(){
  takeValue(2)
})
tres.addEventListener("click", function(){
  takeValue(3)
})
cuatro.addEventListener("click", function(){
  takeValue(4)
})
cinco.addEventListener("click", function(){
  takeValue(5)
})
seis.addEventListener("click", function(){
  takeValue(6)
})
siete.addEventListener("click", function(){
  takeValue(7)
})
ocho.addEventListener("click", function(){
  takeValue(8)
})
nueve.addEventListener("click", function(){
  takeValue(9)
})
coma.addEventListener("click", function(){
  takeValue(".")
})

mas.addEventListener("click", function(){
  takeValue("+")
})
menos.addEventListener("click", function(){
  takeValue("-")
})
multiplicacion.addEventListener("click", function(){
  takeValue("*")
})
division.addEventListener("click", function(){
  takeValue("/")
})

igual.addEventListener("click", function(){
  calculateResult();

})
eliminar.addEventListener("click", function(){
  clearInput();
})


