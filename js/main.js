import{todaslastarjetas} from './data.js';

function agregartitulos(){
//DOM
let root= document.querySelector("#root");

todaslastarjetas.forEach( function(fruta){

    //CREAR UN ELEMENTO
    let titulo = document.createElement("div");


    //SE AGREGA CONTENIDO AL ELEMENTO
    titulo.innerHTML = 
    '<div class= "tarjeta">' +
        fruta +
    '</div>' ;
   


    //SE AGREGA AL DOM
    root.appendChild(titulo);

} );

}
agregartitulos();