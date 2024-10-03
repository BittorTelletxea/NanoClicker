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
    atzekoAleroia() {
        var atzeko = new AtzekoAleroia();
        var ekoizpena = atzeko.ekoizpena;
        var balorea = 0;
    
        if (document.getElementById("multiplicador").innerHTML) {
            balorea = parseInt(document.getElementById("multiplicador").innerHTML); 
        } else {
            balorea = 0; 
        }
    
        var osoa = balorea + ekoizpena;

        document.getElementById("multiplicador").innerHTML = osoa;
    
        this.kontagailua = this.kontagailua - ekoizpena;
        document.getElementById("point").innerHTML = this.kontagailua;
    
        if (this.atzekoInterval !== null) {
            clearInterval(this.atzekoInterval);
        }
    
        this.atzekoInterval = setInterval(() => {
            this.kontagailua += osoa;  
            document.getElementById("point").innerHTML = this.kontagailua;  
        }, 1000);  
    }
    
}