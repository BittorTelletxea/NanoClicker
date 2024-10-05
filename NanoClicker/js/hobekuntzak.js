class Hobekuntzak {
    hobekuntzakErosi(hobekuntzaObj, thisK) {
        // Verificar si el usuario tiene suficientes puntos para comprar
        if (thisK.kontagailua >= hobekuntzaObj.kostua) {
            var ekoizpena = hobekuntzaObj.ekoizpena;
            
            // Restar el costo de la mejora de los puntos actuales
            thisK.kontagailua -= hobekuntzaObj.kostua; 
            point.innerHTML = thisK.kontagailua; 

            // Incrementar la producción
            thisK.ekintza += ekoizpena;
            multiplicador.innerHTML = thisK.ekintza;
            
            // Incrementar el costo para la próxima compra
            hobekuntzaObj.kostua *= hobekuntzaObj.kostuMarginal;
            
            // Actualizar el costo mostrado en la interfaz (si es necesario)
            // document.getElementById('cost-element').innerHTML = hobekuntzaObj.kostua;

            // Establecer un intervalo para añadir la producción periódica
            this.atzekoInterval = setInterval(() => {
                thisK.kontagailuaEguneratu(thisK.ekintza); 
            }, 1000);
        } else {
            console.log("Puntos insuficientes para comprar " + hobekuntzaObj.izena);
        }
    }
}




