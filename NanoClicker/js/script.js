var kontagailu = new Kontagailua();
var atzekoAlero = new AtzekoAleroia(atzekoAleroiaElement);
var aurrekoAlero = new AurrekoAleroia(aurrekoAleroiaElement);
var drsa = new Drs(drsElement);
var errueda = new Erruedak(ruedasElement);
var ersa = new Ers(ersElement);
var kotxe = new Kotxea(kotxeaElement);
var motor = new Motor(motorraElement); 
var hobekuntzak =  [atzekoAlero, aurrekoAlero, drsa, errueda, ersa, kotxe, motor];

nan.addEventListener('click', function() {
    kontagailu.nanoClickGehitu();
});

setInterval(function() {
    hobekuntzakOpacity();
}, 100); 

function hobekuntzakOpacity() {
    for (let i = 0; i < hobekuntzak.length; i++) {
        //console.log(hobekuntzak[i].kostua);
        if (hobekuntzak[i].kostua <= kontagailu.kontagailua) {
            hobekuntzak[i].element.style.opacity = 1;
            hobekuntzak[i].element.style.pointerEvents = "auto";
        } else {
            hobekuntzak[i].element.style.opacity = 0.3;
            hobekuntzak[i].element.style.pointerEvents = "none";
        }
    }
}


atzekoAleroiaElement.addEventListener('click', function() {
    kontagailu.nanohobekuntzaGehitu(atzekoAlero);
});
aurrekoAleroiaElement.addEventListener('click', function(){
    kontagailu.nanohobekuntzaGehitu(aurrekoAlero);
});
ruedasElement.addEventListener('click', function(){
    kontagailu.nanohobekuntzaGehitu(errueda);
});
ersElement.addEventListener('click', function() {
    kontagailu.nanohobekuntzaGehitu(ersa);
});
motorraElement.addEventListener('click', function() {
    kontagailu.nanohobekuntzaGehitu(motor);
});
drsElement.addEventListener('click', function() {
    kontagailu.nanohobekuntzaGehitu(drsa);
});
kotxeaElement.addEventListener('click', function() {
    kontagailu.nanohobekuntzaGehitu(kotxe);
});



