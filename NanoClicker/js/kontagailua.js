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
    atzekoAleroia(){
        var atzeko = new atzekoAleroia();
        var ekoizpena = atzeko.ekoizpena;
        document.getElementById("multiplicador").innerHTML += parseInt(ekoizpena);
        point.innerHTML = this.kontagailua - ekoizpena;
    }


}