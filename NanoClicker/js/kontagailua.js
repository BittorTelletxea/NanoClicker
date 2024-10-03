class Kontagailua {
    constructor() {
        this.kontagailua = 0; // Contador principal
        this.ekintza = 0; // Variable para guardar el incremento de mejoras
    }

    nanoClickGehitu() {
        this.kontagailua++;
        point.innerHTML = this.kontagailua; // Actualizamos el contador en el HTML
    }

    nanohobekuntzaGehitu(hobekuntza) {
        var hobekuntzak = new Hobekuntzak(); 
        hobekuntzak.hobekuntzakErosi(hobekuntza, this); // Pasamos `this` para mantener la referencia correcta
    }

    actualizarKontagailua(ekintza) {
        this.kontagailua += ekintza; // Actualiza el contador con el incremento de la mejora
        point.innerHTML = this.kontagailua; // Actualiza el HTML
    }
}