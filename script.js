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
      // alert("équipement :" + equipementTitle.textContent);
      SoundCo2.play();
    });
  });
}

createEquipement(equipementsSpatials);

const bar = new ProgressBar.Circle("#progress-bar", {
  color: "#4caf50",
  strokeWidth: 10,
  trailColor: "#",
  trailWidth: 5,
  duration: 1400,
  easing: "easeInOut",
  from: { color: "#FEB310", width: 3 },
  to: { color: "#f44336", width: 3 },
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);
    circle.path.setAttribute("stroke-linecap", "round");
  },
});

function updateProgress(progress) {
  bar.set(progress / 100);
}

updateProgress(50);

// ajout des deux autres équipement

// son sur équipement
// document.addEventListener('DOMContentLoaded', (event) => {
//   // Sélection image
//   // const equipementImage = document.getElementById('equipementImage');
//   const equipementImage = document.getElementsByClassName('equipementImage');
//   // Sélection l'audio
//   const SoundCo2 = document.getElementById('SoundCo2');

//   // Ajout clic sur l'image
//   equipementImage.addEventListener('click', () => {
//     // play lorsque l'image est cliquée
//     SoundCo2.play();
//   });
// });
