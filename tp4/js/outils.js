// =====================================================
// TP4 — Bibliothèque de fonctions : calcul et sécurité
// Écrire le corps de chaque fonction en suivant l'énoncé.
// Ne pas changer les noms des fonctions : tests.js les utilise.
// =====================================================

// ===== Partie 3 : factorielle et dénombrement =====
function factorielle(n) {
    let resultat=1;
    for(let i=1;i<=n;i++){
        resultat=resultat*i;
    }
    return resultat
}

function arrangement(n, k) {
    return factorielle(n)/factorielle(n-k);
}

function combinaison(n, k) {
    return arrangement(n, k)/factorielle(k)
}

// ===== Partie 4 : PGCD et PPCM =====
function pgcd(a, b) {
    while(b != 0){
    r = a % b;
    a = b;
    b = r;
    }
    return a;
}

function ppcm(a, b) {
    if(a ==0 || b ==0){
        return 0;

    }
    return (a*b)/pgcd(a,b);
    }

// ===== Partie 5 : inverser un texte, palindromes =====
function inverserTexte(texte) {

}

function estPalindrome(texte) {

}

// ===== Partie 6 : chiffre de César =====
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function chiffrerCesar(texte, cle) {

}

function dechiffrerCesar(texte, cle) {

}