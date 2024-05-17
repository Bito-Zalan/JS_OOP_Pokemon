export default class Pokemon{
    //privát adattagok
    #nev=""
    #kep=""
    #mondat=""

    constructor(nev, kep, mondat, szuloElem){
        // ez hivodik meg a példányositáskor
        // beállítja az adattagokat
        //this mindig az aktuális objektumra fog mutatni
        this.#nev = nev;
        this.#kep = kep;
        this.#mondat = mondat;//privátok
        this.szuloElem = szuloElem;//publikus
        this.#megjelenit()
    }

    get nev(){
        return this.#nev
    }

    set mondat(szoveg){
        this.#mondat = szoveg
    }

    beszel(){
        console.log(this.#mondat);
    }

    #htmlOszzeallit(){
        let txt = `
            <div class="poki">
                <h3>${this.#nev}</h3>
                <img src = "${this.#kep}" alt="${this.#nev} pokemon">
            </div>
        `
        return txt
    }

    #megjelenit(){
        this.szuloElem.append(this.#htmlOszzeallit())
    }

}