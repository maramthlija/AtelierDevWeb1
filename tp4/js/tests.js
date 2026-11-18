// TP4 — Tests : comparer chaque résultat avec la valeur attendue (Console, F12)
console.log("===== Partie 3 : factorielle et dénombrement =====");
console.log("5! =", factorielle(5), "(attendu : 120)");
console.log("0! =", factorielle(0), "(attendu : 1)");
console.log("10! =", factorielle(10), "(attendu : 3628800)");
console.log("A(8, 3) =", arrangement(8, 3), "(attendu : 336)");
console.log("C(10, 3) =", combinaison(10, 3), "(attendu : 120)");

console.log("===== Partie 4 : PGCD et PPCM =====");
console.log("PGCD(360, 240) =", pgcd(360, 240), "(attendu : 120)");
console.log("PGCD(84, 126) =", pgcd(84, 126), "(attendu : 42)");
console.log("PGCD(17, 5) =", pgcd(17, 5), "(attendu : 1)");
console.log("PPCM(6, 8) =", ppcm(6, 8), "(attendu : 24)");

console.log("===== Partie 5 : inverser un texte, palindromes =====");
console.log(inverserTexte("AMBULANCE"), "(attendu : ECNALUBMA)");
console.log(inverserTexte("ISET Kef"), "(attendu : feK TESI)");
console.log("radar :", estPalindrome("radar"), "(attendu : true)");
console.log("22/02/2022 :", estPalindrome("22/02/2022"), "(attendu : true)");
console.log("18/11/2026 :", estPalindrome("18/11/2026"), "(attendu : false)");
console.log("Engage le jeu que je le gagne :", estPalindrome("Engage le jeu que je le gagne"), "(attendu : true)");

console.log("===== Partie 6 : chiffre de César =====");
console.log(chiffrerCesar("Rendez-vous a 14h", 3), "(attendu : UHQGHC-YRXV D 14K)");
console.log(chiffrerCesar("XYZ", 3), "(attendu : ABC)");
console.log(dechiffrerCesar("MH VXLV SURJUDPPHXU", 3), "(attendu : JE SUIS PROGRAMMEUR)");