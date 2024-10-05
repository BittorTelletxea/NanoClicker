class Kontagailua {
    constructor() {
        this.kontagailua = 0; 
        this.ekintza = 0; 
        this.kostua = 0;
    }

    nanoClickGehitu() {
        this.kontagailua++;
        point.innerHTML = this.kontagailua; 
    }

    // Modificado para recibir directamente la instancia de la mejora
    nanohobekuntzaGehitu(hobekuntzaObj) {
        if (hobekuntzaObj) {
            var hobekuntzakClass = new Hobekuntzak(); 
            hobekuntzakClass.hobekuntzakErosi(hobekuntzaObj, this); 
        }
    }

    kontagailuaEguneratu(ekintza) {
        this.kontagailua += ekintza; 
        point.innerHTML = this.kontagailua; 
    }
}

