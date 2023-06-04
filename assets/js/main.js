

// La cantidad del input cantidad
const cantidad = document.querySelector("#cantidad");
// la región del input region
const region = document.querySelector("#region");
// El precio es para calcular después
const precio = document.querySelector("#precio"); 
const nuevoPrecio = precio.innerText.replace(/[^0-9]/g, "");

// Circulo de la esposa
const colorEsposa = document.querySelector("#colorEsposa"); 


// parrafo con mensaje de error a numero negativo, también para validar
const errCant = document.querySelector("#errorCantidad");
// parrafo con mensaje de error a string vacío, también para validar
const errRegion = document.querySelector("#errorRegion");

// AHORA GUARDAMOS LOS ID DE LOS PARRAFOS PARA MANIPULARLOS EN NUESTRA FUNCION

const muestraInfo = document.querySelector("#muestraInfo");
const totalInfo = document.querySelector("#totalInfo");
const cantidadInfo = document.querySelector("#cantidadInfo");
const regionInfo = document.querySelector("#regionInfo");
const colorOpcion = document.querySelector('select');
let colorValue = colorOpcion.value;

cantidad.addEventListener("wheel", function(event){
    if(cantidad.value <= 0){
        event.preventDefault();
    }
});

colorOpcion.addEventListener('change', function(){
colorValue = colorOpcion.value;
});

// Boton que aplicara el innerHTML

btnCalcular.addEventListener("click", function(){

    const validaRegion = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$/;
    const esValidoRegion = validaRegion.test(region.value);
    // Validamos que la cantidad sea mayor a 0
   if(cantidad.value <= 0){
    errCant.style.display = "block";
    errRegion.style.display = "none";
   }if(!esValidoRegion || region.value.trim().length === 0){ // validamos que sea un string
    errRegion.style.display = "block";
    errCant.style.display = "none";
   }else{
    totalInfo.innerHTML = "$" + (Number(nuevoPrecio) * Number(cantidad.value)).toLocaleString();
    cantidadInfo.innerHTML = cantidad.value;
    regionInfo.innerHTML = region.value;
    errCant.style.display = "none";
    errRegion.style.display = "none";
     if(colorValue == "blanca"){
        colorEsposa.style.backgroundColor = "RGB(255, 218, 185)";
    } if(colorValue == "morena"){
        colorEsposa.style.backgroundColor = "rgb(212, 134, 82)" ;
    } if(colorValue == "negra"){
        colorEsposa.style.backgroundColor = "rgb(27, 25, 23)" ;
    } if(colorValue == "amarilla"){
        colorEsposa.style.backgroundColor = "rgb(202, 212, 61)" ;
    }
   } 
   
});

