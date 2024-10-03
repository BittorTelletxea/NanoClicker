class Kontagailua {

    constructor () {

        this.kontagailua = 0;
    }


    nanoClickGehitu() {
        this.kontagailua++;
        point.innerHTML=this.kontagailua;
    }

    nanohobekuntzaGehitu() {
        
    }

    atzekoAleroiaHobekuntza(){
        var atzeko = new AtzekoAleroia();
        var ekoizpena = atzeko.ekoizpena;
        document.getElementById("multiplicador").innerHTML += parseInt(ekoizpena);
        point.innerHTML = this.kontagailua - ekoizpena;
    }


}