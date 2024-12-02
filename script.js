// Déclaration d'un tableau avec des objets pour les équipements à ajouter

const hamster = document.querySelector(".centerHamster");

//Dès qu'on clique on veut incrementer une variable score de 1 et l'afficher en h2
let score = 0;

let increment = 1;

let timeBonus = 3000;

function createRocket() {
  hamster.addEventListener("click", () => {
    score += increment;
    displayScore();
    // console.log(score);
  });
}

function displayScore() {
  const header = document.querySelector("header");
  const scoreText = document.querySelector("h2");
  scoreText.innerHTML = ` ${score} 🚀`;
  header.appendChild(scoreText);
}

function countdownBonus() {
  setTimeout(() => {
    increment = 1;
  }, timeBonus);
}

const equipementsSpatials = [
  {
    image: "./img/Bouteille.jpg",
    alt: "bouteilles d'oxygène",
    title: "x 15🚀",
    soundId: "SoundCo2", // ID du son
    incrementBonus: 15,
  },
  {
    image: "./img/Casque.jpg",
    alt: "Casque spatial",
    title: "x 250🚀",
    soundId: "SoundCasque", // ID du son
    incrementBonus: 250,
  },

  {
    image: "./img/Fusee.jpg",
    alt: "fusée spatial",
    title: "x 5000🚀",
    soundId: "SoundFusee",
    incrementBonus: 5000,
  },
];

function checkIfIcanBuy(equipements) {
  setInterval(() => {
    const equipementsImg = document.querySelectorAll(".equipementImage");

    equipementsImg.forEach((img, index) => {
      const equipment = equipements[index];
      const increment = equipment.incrementBonus;
      if (score < increment) {
        img.style.filter = "grayscale(100)";
      } else {
        img.style.filter = "none";
      }
    });
  }, 200);
}

//Création fonction qui creer des éléments à partir d'un tableau fournit
function createEquipement(equipements) {
  const equipementsBar = document.querySelector(".equipementsBar");
  equipementsBar.innerHTML = "";

  // on boucle sur l'ensemble des éléments du tableau
  equipements.forEach((equipement) => {
    const { image, alt, title, soundId, incrementBonus } = equipement;
    // const {15, 25, 50} = bonus ;

    //création de l'article equipementArt
    const equipementArt = document.createElement("article");
    equipementArt.classList.add("equipement");
    equipementsBar.appendChild(equipementArt);

    //création de l'image equipementImg
    const equipementImg = document.createElement("img");
    equipementImg.src = image;
    equipementImg.alt = alt;
    equipementImg.classList.add("equipementImage");
    equipementImg.style.filter = "grayscale(100)";

    equipementArt.appendChild(equipementImg);

    const equipementTitle = document.createElement("h3");
    equipementTitle.classList.add("equipementTitle");
    equipementTitle.innerText = title;
    equipementArt.appendChild(equipementTitle);

    //ajout d'un listener pour augmenter l'increment du score pendant un certain temps
    equipementImg.addEventListener("click", function () {
      // Récupére l'audio en fonction de soundId
      const audio = document.getElementById(soundId);
      if (audio) {
        audio.play();
      }
      score -= incrementBonus;
      displayScore();
      increment = incrementBonus;
      countdownBonus();
    });
  });
}

checkIfIcanBuy(equipementsSpatials);
createRocket();
displayScore();
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

function updateProgress(progress) {
  bar.set(progress / 100);
}

updateProgress(50);
