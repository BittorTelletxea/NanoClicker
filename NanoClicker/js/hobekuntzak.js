
class Hobekuntzak {
    hobekuntzakErosi(hobekuntza, thisK) {
        var HobekuntzaClass = this.ze_hobekuntza_da(hobekuntza);

        if (HobekuntzaClass) {
            var atzeko = new HobekuntzaClass();
            var ekoizpena = atzeko.ekoizpena;
            thisK.kontagailua -= atzeko.kostua; 
            point.innerHTML = thisK.kontagailua; 
               
            thisK.ekintza += ekoizpena;
            multiplicador.innerHTML = thisK.ekintza;
                
            this.atzekoInterval = setInterval(() => {
                thisK.actualizarKontagailua(thisK.ekintza); 
            }, 1000);
           
        } else {
            console.error("Mejora no encontrada");
        }
    }

    ze_hobekuntza_da(hobekuntza) {
        var hobekuntzak = {
            atzekoAleroia: AtzekoAleroia,
            aurrekoAleroia: AurrekoAleroia,
            drs: Drs,
            gurpila: Erruedak,
            ers: Ers,
            kotxea: Kotxea,
            motorra: Motor
        };

        return hobekuntzak[hobekuntza] || null;
    }
}



