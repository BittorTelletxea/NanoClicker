

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
aurrekoAleroia.addEventListener('click', function(){
    kontagailu.aurrekoAleroia();
});
ruedas.addEventListener('click', function(){
    kontagailu.ruedas();
})
/*aurrekoAleroia.addEventListener('click', function() {
    aurrekoAlero.hobekuntza_erosi();
});

drs.addEventListener('click', function() {
    drsa.hobekuntza_erosi();
});

ruedas.addEventListener('click', function() {
    errueda.hobekuntza_erosi();
});*/

ers.addEventListener('click', function() {
    kontagailu.ers();
});
document.getElementById("motorra").addEventListener('click', function() {
    kontagailu.motor();
});

/*kotxea.addEventListener('click', function() {
    kotxe.hobekuntza_erosi();
});*/





