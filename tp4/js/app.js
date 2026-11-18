// ===== Outils communs =====
function lireNombre(id) {
  const valeur = document.querySelector(id).value;
  if (valeur.trim() === "") {
    return NaN;                          // champ vide : pas un nombre
  }
  return Number(valeur);
}

function afficherResultat(id, texte, type) {
  const zone = document.querySelector(id);
  zone.textContent = texte;
  zone.className = `alert alert-${type} mt-3 mb-0`;
}

// ===== Carte 2 : PGCD et PPCM (fournie) =====
document.querySelector("#btn-pgcd").addEventListener("click", function () {
  const a = lireNombre("#a");
  const b = lireNombre("#b");
  if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0) {
    afficherResultat("#res-pgcd", "Saisir deux entiers strictement positifs.", "danger");
    return;
  }
  afficherResultat("#res-pgcd", `PGCD = ${pgcd(a, b)}  •  PPCM = ${ppcm(a, b)}`, "success");
});

// ===== Carte 4 : chiffre de César (fournie) =====
function traiterCesar(sens) {
  const texte = document.querySelector("#texte-cesar").value;
  const cle = lireNombre("#cle-cesar");
  if (texte.trim() === "" || !Number.isInteger(cle) || cle < 1 || cle > 25) {
    afficherResultat("#res-cesar", "Saisir un message et une clé de 1 à 25.", "danger");
    return;
  }
  let resultat;
  if (sens === "chiffrer") {
    resultat = chiffrerCesar(texte, cle);
  } else {
    resultat = dechiffrerCesar(texte, cle);
  }
  afficherResultat("#res-cesar", resultat, "secondary");
}

document.querySelector("#btn-chiffrer").addEventListener("click", function () {
  traiterCesar("chiffrer");
});
document.querySelector("#btn-dechiffrer").addEventListener("click", function () {
  traiterCesar("dechiffrer");
});

// ===== Carte 1 : dénombrement (à écrire) =====
// Au clic sur #btn-denombrement : lire n et k, vérifier que 0 ≤ k ≤ n ≤ 20,
// puis afficher n!, A(n, k) et C(n, k) dans #res-denombrement.


// ===== Carte 3 : miroir et palindrome (à écrire) =====
// Au clic sur #btn-miroir : lire le texte de #texte-miroir, vérifier qu'il n'est pas vide,
// puis afficher le texte inversé et dire si c'est un palindrome dans #res-miroir.