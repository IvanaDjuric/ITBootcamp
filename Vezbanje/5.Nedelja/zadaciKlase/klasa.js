class Covek {
    constructor(ime,prezime,godina_rodjenja){
        this.ime = ime
        this.prezime = prezime
        this.godina_rodjenja = godina_rodjenja
    }
}

class Student extends Covek{
    constructor(ime,prezime,godina_rodjenja,trenutnaGodina,trenutniProsek){
    super(ime,prezime,godina_rodjenja)
    this.trenutnaGodina = trenutnaGodina
    this.trenutniProsek = trenutniProsek
    }
}

class StudentOS extends Student{
    constructor(ime,prezime,godina_rodjenja,trenutnaGodina,trenutniProsek,smerOS){
        super(ime,prezime,godina_rodjenja,trenutnaGodina,trenutniProsek)
    this.smerOS = smerOS
    }
}

class StudentMS extends Student{
    constructor(ime,prezime,godina_rodjenja,trenutnaGodina,trenutniProsek,smerMS){
        super(ime,prezime,godina_rodjenja,trenutnaGodina,trenutniProsek)
    this.smerMS = smerMS
    }
}

class Zaposleni extends Covek{
    constructor(ime,prezime,godina_rodjenja,godinaZaposlenja,plata){
        super(ime,prezime,godina_rodjenja)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}

class Nastavnik extends Zaposleni{
    constructor(ime,prezime,godina_rodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta){
        super(ime,prezime,godina_rodjenja,godinaZaposlenja,plata)
        this.omiljeniPredmet = omiljeniPredmet
        this.listaPredmeta = listaPredmeta
    }
}

class Profesor extends Nastavnik{
    constructor(ime,prezime,godina_rodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta,titula){
        super(ime,prezime,godina_rodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta)
        this.titula = titula
    }
}
class Asistent extends Nastavnik{
    constructor(ime,prezime,godina_rodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta,smerDok){
        super(ime,prezime,godina_rodjenja,godinaZaposlenja,plata,omiljeniPredmet,listaPredmeta)
        this.smerDok = smerDok
    }
}

class Sluzbenik extends Covek{
    constructor(ime,prezime,godina_rodjenja,odsek){
        super(ime,prezime,godina_rodjenja)
        this.odsek = odsek
    }
}
