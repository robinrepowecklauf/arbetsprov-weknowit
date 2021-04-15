# Arbetsprov för We Know IT
Denna uppgift bygger på ett fiktivt scenario där We Know IT ska utveckla en webbapp åt en kund. Användaren ska både kunna söka fram hur många invånare en viss stad har, samt kunna söka på ett land och få fram de största städernas invånarantal för det landet.  
Detta gjordes med [React](https://reactjs.org/) tillsammans med [TypeScript](https://www.typescriptlang.org/).

## Struktur  
Komponenter: `arbetsprov-weknowit/citypop/src/components/`  
Styling: `arbetsprov-weknowit/citypop/src/css/`  
Fetch: `arbetsprov-weknowit/citypop/src/data/`  
Vyer: `arbetsprov-weknowit/citypop/src/views/`

## Nödvändiga förutsättningar
* [NodeJS](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)

## Köra programmet
1. Öppna terminalen och klona projektet, `git clone https://github.com/robinrepowecklauf/arbetsprov-weknowit.git`.
2. Skriv `cd arbetsprov-weknowit/citypop` för att navigera dig in i `arbetsprov-weknowit/citypop`.
3. Skriv `npm install` och vänta tills allt har laddats ner.
4. Skriv `npm install react-router-dom` för att ladda ner ytterligare ett paket.
5. Skriv `npm start` för att starta applikationen.

## Förbättringsmöjligheter
Nedan förklaras förbättringsmöjligheter om tid fanns:
* En design utöver given wireframe skulle kunna implementeras (osäker på om jag skulle göra det eller inte)
* Laddningsanimationen när resultat hämtas skulle kunna sättas senare i kodblocket för att tydligt visa att den finns
* Skapa en separat styling på felmeddelanden
