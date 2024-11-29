// Déclaration d'un tableau avec des objets pour les équipements à ajouter

const equipementsSpatials = [
  {
    image: "./img/Bouteille.jpg",
    alt: "bouteilles d'oxygène",
    title: "15🚀",
  },
  {
    image: "./img/Casque.jpg",
    alt: "Casque spatial",
    title: "25🚀",
  },

  {
    image: "./img/Fusee.jpg",
    alt: "fusée spatial",
    title: "50🚀",
  },
];

//Création fonction qui creer des éléments à partir d'un tableau fournit
function createEquipement(equipements) {
  const equipementsBar = document.querySelector(".equipementsBar");
  equipementsBar.innerHTML = "";

  // on boucle sur l'ensemble des éléments du tableau
  equipements.forEach((equipement) => {
    const { image, alt, title } = equipement;

    //création de l'article equipementArt
    const equipementArt = document.createElement("article");
    equipementArt.classList.add("equipement");
    equipementsBar.appendChild(equipementArt);

    //création de l'image equipementImg
    const equipementImg = document.createElement("img");
    equipementImg.src = image;
    equipementImg.alt = alt;
    equipementImg.classList.add("equipementImage");
    equipementArt.appendChild(equipementImg);

    const equipementTitle = document.createElement("h3");
    equipementTitle.classList.add("equipementTitle");
    equipementTitle.innerText = title;
    equipementArt.appendChild(equipementTitle);

    equipementImg.addEventListener("click", function () {
      alert("équipement :" + equipementTitle.textContent);
    });
  });
}

createEquipement(equipementsSpatials);
