# Online auto kuća
### Projektni zadatak iz kolegija Programsko Inženjerstvo

### Alati i programi korišteni za izradu aplikacije:

- Vue i Vuetify
- JavaScript
- Visual Studio Code
- Firebase i Firestore
- Netlify
- Github

---

# Uvod

Prodaja rabljenih automobila u oglasima je obično prva pomisao pri spomenu „novog“ automobila. Odlazak u auto kuću po novi auto iz tvornice je, pogotovo u ne tako davno vrijeme pandemije, potpuno zaboravljen.
Postojanje online trgovina je glavni poticaj digitaliziranja prodaje najnovijih automobila – bilo to velikoj tvrtki ili pojedincu. Ovim projektom omogućuje se pregled i rezervacija novog automobila iz udobnosti vlastitog doma ili ureda. Korisnik dobiva izbor najnovijih modela proizvođača te mogućnost izmjene postojećih dijelova na istom.
Od korisnika se nakon konfiguracije traži samo potvrda narudžbe u odabranoj poslovnici i finalizacija kupnje. 

# SWOT Analiza

## Prednosti
-	Pregled inventara iz vlastitog prostora
-	Automatska kalkulacija troškova
-	Zaprimljene narudžbe su postavljene u bazu podataka poslovnice
-	Automatska dodjela R1 računa za firme

## Nedostatci
-	Potrebno je fizički potvrditi narudžbu i platiti automobil u poslovnici
-	Nedostatak ljudske interakcije

## Mogućnosti
-	Mogućnost proširenja za online naplatu
-	Mogućnost proširenja za dostavu automobila na kućnu adresu

## Prijetnje
-	Zapostavljene narudžbe
    - Izgubljeni kôdovi potvrde
-	Lažne narudžbe
-	Napad na stranicu/bazu podataka sa ponovnim narudžbama
 

## Prednosti

Korištenjem aplikacije moguće je pregledati sav dostupan inventar: automobili, naplatci, motori, interijer i dostupne boje. Nije potrebno prelaziti duže puteve da bi se u najbližoj auto kući pregledalo različite opcije. Aplikacija pri finalizaciji narudžbe prikazuje ukupan trošak za zadovoljstvo korisnika.
Nakon što korisnik naruči auto, njegova narudžba se šalje u bazu podataka gdje čeka definitivnu potvrdu iz poslovnice, kao i samo plaćanje. Ako je korisnik prijavljen kao vlasnik tvrtke, vidljivo je u bazi podataka te se automatski primjenjuje privilegija R1 računa.


## Nedostatci

Iako je aplikacijom omogućen maksimalan komfor korisnika, narudžbu je potrebno potvrditi u odabranoj poslovnici da bi se nastavio proces kupnje. Nadalje, tokom pregledavanja inventara na stranici nije moguće konzultirati se sa prodavačem, koji isto tako može, na primjer, pokazati primjerak jedne od boja na pokaznim modelima limarije.


## Mogućnosti

U slučaju uspješnosti aplikacije, moguće je daljnje proširenje podrške online plaćanja kreditnom karticom, čime se korisnika, odnosno kupca, može dodatno rasteretiti cjelokupnog procesa.
Istim smjerom logike, dodavanjem usluge dostave vozila na odabranu adresu moguće je potpuno povećati zadovoljstvo korisnika


## Prijetnje

Tokom finalizacije online narudžbe, kupac može slučajno napustiti stranicu sa potvrdnim kôdom narudžbe, čime ta narudžba postaje praktički beskorisna i teret bazi podataka te je kupac prisiljen ponovo kreirati narudžbu.
Također, zaigrani „kupci“ su u mogućnosti izrađivati narudžbe koje se nikada neće potvrditi te isto tako ostati u bazi podataka kao redundantni podaci. U najgorem slučaju, usluga može biti napadnuta automatiziranim programima koji beskrajno pune bazu podataka i time je opterećuju.



## Razrada funkcionalnosti

Ovaj projekt je napravljen kao web aplikacija u više koraka. Funkcionalnost između prijavljenih i neprijavljenih korisnika je praktički ista, razlikuje se jedino u podacima koji se šalju u bazu podataka i tipki za odjavu iz sistema.
Glavna stranica prikazuje katalog dostupnih automobila koji je moguće proširivati ili mijenjati po potrebi. Nakon što se vozilo odabere, korisnik korak po korak odabire različite pakete opreme automobila.
Cijela aplikacija je dizajnirana na način da se od korisnika ne traži nikakav unos podataka van registracije i prijave te se sve opcije biraju gumbom za odabir ili u listi.


# Aplikacija

Početna stranica sadrži skup Vue komponenti koje su predložak šablona kartica koje prikazuju inventar. Kartice se razlikuju po podacima koje su unesene u njih.
Gornja traka sadrži gumb za prijavu (desno) i gumb za povratak na početnu stranicu (logo na lijevoj strani). Nakon prijave, gumb za prijavu je zamijenjen crvenim gumbom za odjavu.
Ekran za prijavu sadrži standardne funkcionalnosti kao što su registracija novih korisnika i izmjena lozinke. 
Nakon odabira automobila korisnik je prenesen na odabir paketa naplataka. Odabir se sastoji od više različitih veličina: 17'', 18'', 19'' i 20''. Za karticu naplataka izrađena je zasebna Vue komponenta koja se koristi kao šablona. Sastoji se od slike naplataka, njihovog imena, veličine i cijene. Na dnu kartice se nalazi gumb za odabir.
 


 

Odabir motora je odvojen u dvije sekcije: izbor benzinskih i izbor dizelskih pogona. Kao i na prethodnim koracima, šablone kartice su kreirane kao Vue komponente tako da se izbor motora može bezbrižno proširivati po potrebi.
U karticama sa motorima su ispisani najvažniji podaci: ime, kubikaža (veličina) motora, snaga, zakretni moment i potrošnja goriva. Odabirom motora korisnika se dovodi do stranice za odabir interijera.
 
Nakon što smo odabrali glavni pogon vozila, stranica od nas zahtijeva odabir paketa interijera. Kartice za odabir interijera dijele svojstvo šablonske izrade u svrhu proširenja izbora. U kartici je prikazana slika interijera te je isti detaljnije opisan. Na kraju kartice nalazi se cijena i standardni gumb za odabir.
 
Posljednji izbornik prije pregleda sveukupne narudžbe jest izbornik sa bojama. Kartice za odabir boja su podijeljene u tri skupine: uni-boje (gloss/sjajne), metalik i metalik boje s efektom. Svaka kartica je, kao i u prijašnjim izbornicima, Vue komponenta koja dozvoljava lako proširenje izbornika.
Kao glavni podaci o boji ističu se: ime boje, tip boje, njihove cijene i gumb za odabir. Nakon što se dovrši biranje boje, stranica nas vodi na finalnu potvrdu narudžbe.
 

U zadnjem koraku ostaje još pregledati sve podatke narudžbe te odabrati željenu poslovnicu u kojoj želimo da se automobil dostavi nakon potvrde i plaćanja narudžbe.
Ovo je ujedno jedina stranica koja ne koristi predloške Vue komponenti. Podaci o vozilu su prikazani svaki u zasebnom okviru, ovisno o različitim izborima. Za svaki izbor (automobil, naplaci, motor, interijer i boja) prikazana su njihova imena i cijena, dok se na dnu vidi sveukupna cijena automobila.
Ispod prikazane izračunate cijene nalaze se gumbi za potvrdu (koji je isključen do odabira lokacije) i poništavanje narudžbe i izbornik lokacija dostave.
Nakon uspješne provedbe narudžbe, korisnik dobiva svoj jedinstveni kôd narudžbe koji je potrebno pribilježiti da bi se nastavilo s kupnjom automobila u poslovnici. Povratkom na početnu stranicu ponuđenim gumbom proces završava.


# Implementacija


## UML dijagram

 
Aplikaciji je svrha rezervirati željeni automobil za korisnika da bi ga kasnije mogao kupiti u poslovnici. Također pruža mogućnost personalizacije, odnosno mijenjanje pojedinih dijelova opreme i izgleda automobila korisniku. Zaprimljena narudžba tada dolazi do auto kuće koja nadalje pregovara kupnju s pojedincem te dostavlja gotov proizvod.


## Klasni dijagram

Ovaj dijagram predstavlja povezanosti različitih atributa tokom korištenja. Za pohranu podataka narudžbe koristi se Firestore uz Firebase za autentifikaciju korisnika.
 
### Opis



---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
