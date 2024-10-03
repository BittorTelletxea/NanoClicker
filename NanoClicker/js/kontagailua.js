class Kontagailua {
    constructor() {
        this.kontagailua = 0; 
        this.ekintza = 0; 
    }

    nanoClickGehitu() {
        this.kontagailua++;
        point.innerHTML = this.kontagailua; 
    }

    nanohobekuntzaGehitu(hobekuntza) {
        var hobekuntzak = new Hobekuntzak(); 
        hobekuntzak.hobekuntzakErosi(hobekuntza, this); 
    }

    actualizarKontagailua(ekintza) {
        this.kontagailua += ekintza; 
        point.innerHTML = this.kontagailua; 
    }
}