// Déclaration d'un tableau avec des objets pour les équipements à ajouter

const hamster = document.querySelector(".centerHamster");
const numberClick = document.querySelector("h2");

//Dès qu'on clique on veut incrementer une variable score de 1 et l'afficher en h2
let score = 0;

hamster.addEventListener("click", () => {
  score++;
  numberClick.innerHTML = ` ${score} 🚀`;
  //console.log(score);
});

const equipementsSpatials = [
  {
    image: "./img/Bouteille.jpg",
    alt: "bouteilles d'oxygène",
    title: "15🚀",
    soundId: "SoundCo2",  // ID du son
  },
  {
    image: "./img/Casque.jpg",
    alt: "Casque spatial",
    title: "25🚀",
    soundId: "SoundCasque",  // ID du son
  },

  {
    image: "./img/Fusee.jpg",
    alt: "fusée spatial",
    title: "50🚀",
    soundId: "SoundFusee",
  },
];

//Création fonction qui creer des éléments à partir d'un tableau fournit
function createEquipement(equipements) {
  const equipementsBar = document.querySelector(".equipementsBar");
  equipementsBar.innerHTML = "";


  // on boucle sur l'ensemble des éléments du tableau
  equipements.forEach((equipement) => {
    const { image, alt, title, soundId } = equipement;

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
      // Récupére l'audio en fonction de soundId
      const audio = document.getElementById(soundId);
      if (audio) {
        audio.play();
      }
    });
  });
}

createEquipement(equipementsSpatials);