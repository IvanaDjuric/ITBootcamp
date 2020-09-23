/*Количина (у грамима)
Цена (у динарима на 100г)
Дан у недељи (као број 1-7 где је 1 понедељак)
Понедељком и петком се одобрава попуст од 10%
Пример:
let
 kolicina = 
134.24
let
 cena = 
60
let
 dan = 
1
Купац треба да плати 72,4896 динара (можете да заокружите, али не мора)
Објашњење: 
- 134.24г
- 60 динара на 100г
- 80,544 динара
- 10% попуста јер је понедељак => 80,544 - 8,0544 = 72,4896*/

switch (dan) {
    case 1:
    case 5:
        console.log(`Vas racun je: ${ukupnaCena * 0.9}`)
        break;
    case 2:
    case 3:
    case 4:
    case 6:
    case 7:
        console.log(`Vas racun je: ${ukupnaCena}`)
    default:
        console.log("Pogresan unos za dan");
        break;
}

{
  let kolicina = 134.24
  let cenaNa100 = 60
  let dan = 2

  let cenaPoGramu = cenaNa100 / 100

  let cenaUkupno = cenaPoGramu * kolicina
  
  if(dan == 1 || dan == 5){
      cenaUkupno -= cenaUkupno / 10
  }

  if(dan > 0 && dan < 8 && cenaNa100 > 0 && kolicina > 0){
      console.log(`Купац треба да плати ${cenaUkupno} рсд`)
  }
  else{
      console.log('Грешка при уносу')
  }
}