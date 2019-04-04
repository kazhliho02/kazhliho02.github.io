console.log("Skriptet er lastet");
//Opprette variabler som referer til databsen
const db=firebase.database();
const bloggere=db.ref("bloggere");

//Pushet en string til database,firebase lager primærnøkkel
bloggere.push("Sophie Elise");

//Pushet en objekt til database,firebase lager primærnøkkel
bloggere.push({
  "navn":"Frøen Komiker",
  "folgere":5900
});

//Lagde et objekt med egen primærnøkkel
const pappahjertet=bloggere.child("pappahjertet");
pappahjertet.set({
  "navn":"Peppa Gris",
  "folgere":20000
});

//viktig med forskjellig primærnøkkel et eksmpel er: Her ser vi at
const storePappahjertet=bloggere.child("pappahjertet");
storePappahjertet.set({
  "navn":"Kåre Kånradi",
  "folgere":63572
});
//oppdatere objektet Pappahjertet med et nytt navn
storePappahjertet.update({
  "navn":"Hans Olav Lahlum"
})
