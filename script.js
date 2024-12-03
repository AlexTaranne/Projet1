// Déclaration de variables

let score = 0;

let increment = 1;

let timeBonus = 5000;

let timePb = 4; /// temps de la barre de progression en secondes avec une seconde de moin

// Déclaration d'un tableau avec des objets pour les équipements à ajouter

const equipementsSpatials = [
  {
    image: "./img/Bouteille.jpg",
    alt: "bouteilles d'oxygène",
    title: "x 15🚀",
    soundId: "SoundCo2", // ID du son
    incrementBonus: 15, // les incréments sont aussi le prix d'achat des équipements
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

const hamster = document.querySelector(".centerHamster");

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

      if (score >= incrementBonus) {
        const audio = document.getElementById(soundId);
        if (audio) {
          audio.play();
        }
        score -= incrementBonus;
        displayScore();
        increment = incrementBonus;
        countdownBonus();
        startButton.addEventListener("click", startTimer);
      }
    });
  });
}

const bar = new ProgressBar.Circle("#progress-bar", {
  color: "#4caf50",
  strokeWidth: 10,
  trailColor: "#",
  trailWidth: 5,
  duration: 1000,
  easing: "linear",
  from: { color: "#FEB310", width: 1 },
  to: { color: "#f44336", width: 3 },
  step: function (state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);
    circle.path.setAttribute("stroke-linecap", "round");
  },
});

function updateProgress(progress) {
  bar.animate(progress / 100);
}
//  timer  de X secondes  lors d un clic sur les equipements
const startButton = document.getElementsByClassName("equipementsBar")[0];

function startTimer() {
  const updateInterval = 100;
  let elapsedTime = 1;
  bar.set(0);
  const interval = setInterval(() => {
    const ProgressBar = (elapsedTime / timePb) * 100;
    updateProgress(ProgressBar);
    // console.log(elapsedTime);
    if (elapsedTime >= timePb) {
      clearInterval(interval);
    }
    elapsedTime++;
  }, 1000);
  setTimeout(() => {
    bar.set(0);
    // console.log("barSupprimer");
  }, timePb * 1000 + 1000);
}

//animations des Rockets  de maniere random
function launchRandomRockets() {
  //nombre de rockets
  const rocketCount = 1;
  for (let i = 0; i < rocketCount; i++) {
    const rocket = document.createElement("div");
    rocket.classList.add("rocket");
    rocket.innerText = "🚀";

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    rocket.style.position = "absolute";
    rocket.style.left = `${startX}px`;
    rocket.style.top = `${startY}px`;
    rocket.style.fontSize = "50px";
    rocket.style.transition = "transform 2s ease-out, opacity 2s ease-out";

    document.body.appendChild(rocket);

    setTimeout(() => {
      const endX = startX + (Math.random() - 0.5) * 500;
      const endY = startY + (Math.random() - 0.5) * 500;

      rocket.style.transform = `translate(${endX - startX}px, ${
        endY - startY
      }px)`;
      rocket.style.opacity = "0";
    }, 50);
    setTimeout(() => {
      rocket.remove();
    }, 2000);
  }
}

hamster.addEventListener("click", launchRandomRockets);

checkIfIcanBuy(equipementsSpatials);
createRocket();
displayScore();
createEquipement(equipementsSpatials);
