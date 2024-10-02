class Hobekuntzak {

    constructor () {

        this.izena = "";
        this.kopurua = 0;
        this.ekoizpena = 0;
        this.kostua = 0;
        this.kostuMarginal = 0;
        
    }

    gehituAbiadura() {

        kopurua = this.kopurua;
        kostua = this.kostua;
        kostuMarginal = this.kostuMarginal;


    }

    hobekuntza_erosi(kontagailua,ekoizpena) {

        kontagailua = kontagailua - this.kostua;
        ekoizpena = ekoizpena + this.ekoizpena;
        this.kostua = this.kostua * this.kostuMarginal;

        return { kontagailua, ekoizpena };
    }

}