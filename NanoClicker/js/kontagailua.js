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
    aurrekoAleroia(){
        var aurreko = new AurrekoAleroia();
        var ekoizpena = aurreko.ekoizpena;
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
    
        if (this.aurrekoInterval !== null) {
            clearInterval(this.aurrekoInterval);
        }
    
        this.aurrekoInterval = setInterval(() => {
            this.kontagailua += osoa;  
            document.getElementById("point").innerHTML = this.kontagailua; 
        }, 1000);  
    }
    ruedas(){
        var rueda = new Erruedak();
        var ekoizpena = rueda.ekoizpena;
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
    
        if (this.ruedaInterval !== null) {
            clearInterval(this.ruedaInterval);
        }
    
        this.ruedaInterval = setInterval(() => {
            this.kontagailua += osoa;  
            document.getElementById("point").innerHTML = this.kontagailua; 
        }, 1000);  
    }
    ers(){
        var ers = new Ers();
        var ekoizpena = ers.ekoizpena;
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
    
        if (this.ersInterval !== null) {
            clearInterval(this.ersInterval);
        }
    
        this.ersInterval = setInterval(() => {
            this.kontagailua += osoa;  
            document.getElementById("point").innerHTML = this.kontagailua; 
        }, 1000);  
    }
    motor(){
        var motor = new Motor();
        var ekoizpena = motor.ekoizpena;
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
    
        if (this.motorInterval !== null) {
            clearInterval(this.motorInterval);
        }
    
        this.motorInterval = setInterval(() => {
            this.kontagailua += osoa;  
            document.getElementById("point").innerHTML = this.kontagailua; 
        }, 1000);  
    }
    
    
}