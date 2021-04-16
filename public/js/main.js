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

//1
let prenom = prompt("Quel est ton prénom ?");
alert("Bonjour " + prenom);
// alert(`Bonjour ${prenom}`);

//2
let age = prompt("Quel est votre age ?");
//alert(`Tu as ${age} ans`);
alert("tu as " + age + " ans")
console.log(age);

//3
let prenom_un = prompt("Donne moi ton prénom chien");
let nom = prompt("Donne moi ton nom sale cabot");
let completeNom = prenom + " " + nom;
//alert("Salut " + completeNom);
alert("Salut " + completeNom);


//4
let x = prompt("Ton prénom ?").toUpperCase() + " " + prompt("Ton nom ? ");
//alert(`Bonjour ${x}`);
alert("Bonjour " + x);


// # Consignes de l'exercice 5

let phrase = 'Bonjour tout le monde    ';

// ### 2. Afficher la longueur de la phrase

console.log(phrase.length);

// ### 3. Enlever l'espace à la fin grâce à une méthode

phrase = phrase.trimEnd();

// ### 4. Reafficher la longueur de la phrase

console.log(phrase.length);

// ### 5. Afficher uniquement la dernière lettre de la phrase

console.log(phrase.charAt(phrase.length-1)); //----> bonne méthode !
// console.log(phrase.substr(20));

// ### 6. Enlever "Bonjour" de la phrase

// phrase = phrase.replace("Bonjour","");
phrase = phrase.substr(phrase.indexOf(" ")+1); //----> bonne méthode
console.log(phrase);

// ### 7. Remettre "Bonjour" au debut de la phrase grâce à une méthode

phrase = "Bonjour ".concat(phrase);
// phrase = phrase.replace("","Bonjour ");
console.log(phrase);

// ### 8. Supprimer toute la phrase sauf "Bonjour" grâce à une méthode

// phrase = phrase.replace(" tout le monde", "");
phrase = phrase.replace(phrase, "Bonjour"); //----> bonne méthode
console.log(phrase);

// ### 9. Remplacer dans la phrase le mot "bonjour" par le mot "string"

phrase = phrase.replace("Bonjour","string");
console.log(phrase);

// ### 10. Bonus : Donner un chiffre aléatoire 

console.log(Math.random()*100)