
class Hobekuntzak {
    hobekuntzakErosi(hobekuntza, thisK) {
        var HobekuntzaClass = this.ze_hobekuntza_da(hobekuntza);

        if (HobekuntzaClass) {
            var atzeko = new HobekuntzaClass();
            var ekoizpena = atzeko.ekoizpena;
            thisK.kontagailua -= atzeko.kostua; // Resta el costo
            point.innerHTML = thisK.kontagailua; // Actualiza el HTML
                // Acumula el valor de las mejoras
            thisK.ekintza += ekoizpena;
            multiplicador.innerHTML = thisK.ekintza;
                // Iniciamos un nuevo intervalo
            this.atzekoInterval = setInterval(() => {
                thisK.actualizarKontagailua(thisK.ekintza); // Aumenta el contador
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



