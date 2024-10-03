

var kontagailu = new Kontagailua();
var atzekoAlero = new AtzekoAleroia();
var aurrekoAlero = new AurrekoAleroia();
var drsa = new Drs();
var errueda = new Erruedak();
var ersa = new Ers();
var kotxe = new Kotxea();
var motorra = new Motor(); 
var hobekuntzak =  [kontagailu, atzekoAlero, aurrekoAlero, drsa, errueda, ersa, kotxe, motorra];

nan.addEventListener('click', function() {
    kontagailu.nanoClickGehitu();
});

/*for (let i=0; hobekuntzak.length > i; i++) {
    if (hobekuntzak[i].kostua < kontagailu.kontagailua) {
        hobekuntzak[i].style.opacity = 1;
    } else {
        hobekuntzak[i].style.opacity = 0.3;
    }
}
*/
atzekoAleroia.addEventListener('click', function() {
    kontagailu.atzekoAleroia();
});
drs.addEventListener('click', function() {
    kontagailu.drs();
});

kotxea.addEventListener('click', function() {
    kontagailu.kotxea();
});

/*aurrekoAleroia.addEventListener('click', function() {
    aurrekoAlero.hobekuntza_erosi();
});



ruedas.addEventListener('click', function() {
    errueda.hobekuntza_erosi();
});

ers.addEventListener('click', function() {
    ersa.hobekuntza_erosi();
});

kotxea.addEventListener('click', function() {
    kotxe.hobekuntza_erosi();
});

motor.addEventListener('click', function() {
    motorra.hobekuntza_erosi();
});*/



