// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// création des élements de pieces-autos.json dans le DOM

// création des variables article
let sectionArticle = document.querySelector(".fiches");

function AffichageListe (liste) {
  for (let i=0; i<liste.length; i++) {
      // console.log(sectionArticle);
      let article = liste[i];
      let articleCategorie = document.createElement("h2");
      articleCategorie.innerText = article.categorie ?? ("(Pas de catégorie)");
      let articleImg = document.createElement("img");
      articleImg.src = article.image;
      let articleName = document.createElement("h3");
      articleName.innerText = article.nom;
      let articlePrix = document.createElement("p");
      articlePrix.innerText = `Prix : ${article.prix} € ${article.prix < 35 ? "*" : "***"}`;
      // let articleCategorie = document.createElement("p");
      // articleCategorie.innerHTML = article.categorie;
      
      // console.log(articleImg);
      // console.log(articleName);
      // console.log(articlePrix);
      // console.log(articleCategorie);
      
      // création des éléments dans la section
      let divArticle = document.createElement("div");
      divArticle.className = `article n_${article.id}`;
      divArticle.appendChild(articleCategorie);
      divArticle.appendChild(articleImg);
      divArticle.appendChild(articleName);
      divArticle.appendChild(articlePrix);

      sectionArticle.appendChild(divArticle);
  }
}

// Bouton Tri par prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.onclick = () => {
    let piecesTriees = Array.from(pieces);
    piecesTriees.sort(function (a,b) {
        return a.prix - b.prix;
    });
    sectionArticle.innerHTML = "";
    AffichageListe(piecesTriees);
    console.log(piecesTriees);
}

// // Bouton Tri par prix croissant
// const boutonTrier = document.querySelector(".btn-filtrer");
// boutonTrier.onclick = () => {
//     let piecesFiltrees = pieces.sort((a,b) => a.prix - b.prix);
//     console.log(piecesFiltrees);
// }

// Bouton Tri par disponibilité
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.onclick = () => {
    let piecesFiltrees = pieces.filter(pieces => pieces.disponibilite);
    sectionArticle.innerHTML = "";
    AffichageListe(piecesFiltrees);
    console.log(piecesFiltrees);
}

// // Bouton Tri par disponibilité
// const boutonFiltrer = document.querySelector(".btn-filtrer");
// boutonFiltrer.onclick = () => {
//     let piecesFiltrees = pieces.filter(function (piece){
//     return piece.disponibilite;
//     })
//     console.log(piecesFiltrees);
// }

// Bouton Tri par disponibilité
const boutonEco = document.querySelector(".btn-eco");
boutonEco.onclick = () => {
    let piecesEco = pieces.filter(piece => piece.prix <= 35);
    sectionArticle.innerHTML = "";
    AffichageListe(piecesEco);
    console.log(piecesEco);
}

// Bouton Tous les produits
const boutonTout = document.querySelector(".btn-tout");
boutonTout.onclick = () => {
    sectionArticle.innerHTML = "";
    AffichageListe(pieces);
}

AffichageListe (pieces);
