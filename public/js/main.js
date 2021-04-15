// ## 1.
// - Demande à l'utilisateur avec l'aide d'un prompt quel est son prénom
// - Répond lui avec Bonjour "prenom"

// ## 2.
// - Demande lui son age
// - Dit lui tu as x ans


// ## 3. 
// - Demande lui son prénom
// - Demande lui son nom de famille
// - Stock le prénom et le nom dans une variable
// - Répond avec le contenu de la variable

// ## 4.
// - Demande lui son prénom
// - Demande lui son nom de famille
// - Applique sur le prénom une methode pour le mettre en majuscule
// - Stock le prénom et le nom dans une variable
// - Répond lui avec le contenu de la nouvelle variable, Bonjour "NOM prénom"

let person = prompt("Entrez vote prénom svp");

alert("Bonjour" + " " + person);

let age = prompt("Quelle âge as-tu?");

alert("Cool, moi j'ai 22 ans");

let prénomDeux = prompt("Tu peux me redire ton prénom?");
let nomUn = prompt("Tu peux aussi me donner ton nom de famille?");
let nom = prénomDeux.toUpperCase() + " " + nomUn;
alert("bonjour" + " " + nom);