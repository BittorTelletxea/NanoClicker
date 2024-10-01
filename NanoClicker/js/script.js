var kontagailua = new Kontagailua();
var atzekoAleroia = document.getElementById("atzekoAleroia");
var aurrekoAleroia = document.getElementById("aurrekoAleroia");
var drs = document.getElementById("drs");
var ruedas = document.getElementById("ruedas");
var kotxea = document.getElementById("kotxea");
var motor = document.getElementById("motorra");



kontagailua.addEventListener('click', function() {
    kontagailua.nanoClickGehitu();
});

atzekoAleroia.addEventListener('click', function(){
    atzekoAleroia.gehituAbiadura();
});

aurrekoAleroia.addEventListener('click', function(){
    aurrekoAleroia.gehituAbiadura();
});

drs.addEventListener('click', function(){
    drs.gehituAbiadura();
});




