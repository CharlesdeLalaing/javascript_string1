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


// # Consignes de l'exercice 5
let phrase = 'Bonjour tout le monde    ';


// ### 2. Afficher la longueur de la phrase

console.log(phrase.length);

// ### 3. Enlever l'espace à la fin grâce à une méthode

phrase = phrase.trim();

// ### 4. Reafficher la longueur de la phrase

console.log(phrase.length);
// ### 5. Afficher uniquement la dernière lettre de la phrase

console.log(phrase.charAt(phrase.length-1));
// ### 6. Enlever "Bonjour" de la phrase

phrase = phrase.replace("Bonjour","");
console.log(phrase);

// ### 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode

phrase = phrase.replace("","Bonjour");
console.log(phrase);
// ### 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode

phrase = phrase.slice(7,21);
console.log(phrase);
// ### 9. Remplacer dans la phrase le mot "bonjour" par le mot "string"
phrase = 'Bonjour tout le monde    ';
phrase = phrase.replace("Bonjour","string");
console.log(phrase);
// ### 10. Bonus : Donner un chiffre aléatoire 

console.log(Math.random())