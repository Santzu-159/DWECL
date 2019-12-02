let personne1 = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true
  }
];

let totalPuntuaciones = personne1
  .filter(function (personne1) { return personne1.isForceUser;})
  .reduce(function
    (acumulador, personne1) {
      return acumulador + personne1.pilotingScore + personne1.shootingScore;},
    0
  );
  

totalPuntuaciones = personne1
  .filter(personne1 => personne1.isForceUser)
  .reduce(
    (acumulador, personne1) =>
      acumulador + personne1.pilotingScore + personne1.shootingScore,
    0
  );


  document.write("<b>El total de todas las puntuaciones es: </b>"+totalPuntuaciones);