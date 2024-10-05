class Hobekuntzak {
    hobekuntzakErosi(hobekuntzaObj, thisK) {

        if (thisK.kontagailua >= hobekuntzaObj.kostua) {
            var ekoizpena = hobekuntzaObj.ekoizpena;

            thisK.kontagailua -= hobekuntzaObj.kostua; 
            point.innerHTML = thisK.kontagailua; 

            thisK.ekintza += ekoizpena;
            multiplicador.innerHTML = thisK.ekintza;
            
            hobekuntzaObj.kostua *= hobekuntzaObj.kostuMarginal;

            this.atzekoInterval = setInterval(() => {
                thisK.kontagailuaEguneratu(thisK.ekintza); 
            }, 1000);
        } else {
            console.log("Puntos insuficientes para comprar " + hobekuntzaObj.izena);
        }
    }
}




