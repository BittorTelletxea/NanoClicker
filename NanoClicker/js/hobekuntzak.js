class Hobekuntzak {

    hobekuntza_erosi(kontagailua,ekoizpena) {

        kontagailua = kontagailua - this.kostua;
        ekoizpena = ekoizpena + this.ekoizpena;
        this.kostua = this.kostua * this.kostuMarginal;

        return { kontagailua, ekoizpena };
    }

}