class Covek {
    constructor(ime,prezime,godinaRodjenja){
        this.ime = ime
        this.prezime = prezime
        this.godinaRodjenja = godinaRodjenja
    }
}

class Student extends Covek{
    constructor(ime,prezime,godinaRodjenja,trenutnaGodina,trenutniProsek){
    super(ime,prezime,godinaRodjenja)
    this.trenutnaGodina = trenutnaGodina
    this.trenutniProsek = trenutniProsek
    }
}

class StudentOS extends Student{
    constructor(ime,prezime,godinaRodjenja,trenutnaGodina,trenutniProsek,smerOS){
        super(ime,prezime,godinaRodjenja,trenutnaGodina,trenutniProsek)
    this.smerOS = smerOS
    }
}

class StudentMS extends Student{
    constructor(ime,prezime,godinaRodjenja,trenutnaGodina,trenutniProsek,smerMS){
        super(ime,prezime,godinaRodjenja,trenutnaGodina,trenutniProsek)
    this.smerMS = smerMS
    }
}

class Zaposleni extends Covek{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata){
        super(ime,prezime,godinaRodjenja)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}

class Nastavnik extends Zaposleni{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata)
        this.omiljeniPredmet = omiljeniPredmet
        this.listaPredmeta = listaPredmeta
    }
}

class Profesor extends Nastavnik{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta,titula){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta)
        this.titula = titula
    }
}
class Asistent extends Nastavnik{
    constructor(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta,smerDok){
        super(ime,prezime,godinaRodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta)
        this.smerDok = smerDok
    }
}

//klasa Sluzbenik je bila u istoj ravni sa Covek, Student i Zaposleni, pa sam ga stavila da nasledjuje klasu Covek a ne Zaposleni, iako je logicnije da nasledjuje Zaposleni
class Sluzbenik extends Covek{
    constructor(ime,prezime,godinaRodjenja,odsek){
        super(ime,prezime,godinaRodjenja)
        this.odsek = odsek
    }
}
