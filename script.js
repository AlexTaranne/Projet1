// Déclaration d'un tableau avec des objets pour les équipements à ajouter

const hamster = document.querySelector(".centerHamster");

//Dès qu'on clique on veut incrementer une variable score de 1 et l'afficher en h2
let score = 0;

let increment = 1;

let timeBonus = 4000;

function createRocket() {
  hamster.addEventListener("click", () => {
    score += increment;
    displayScore();
    // console.log(score);
  });
}

// function grayImage() {
//   hamster.addEventListener("click", () => {
//     const equipementImg = document.querySelector(".equipementImage");
//     if (score >= 15) {
//       //     equipementImg.style.filter = "grayscale(0)";
//       //     console.log("cc");
//       //   }
//     // console.log(score);
//   });
// }

// function grayImage() {
//   if (score >= 15) {
//     equipementImg.style.filter = "grayscale(0)";
//     console.log("cc");
//   }
// }

// grayImage();

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

function checkIfIcanBuy() {
  setInterval(() => {
    const equipementImg = document.querySelector(".equipementImage");
    if (score < 15){
      equipementImg.style.filter = "grayscale(100)";
    }
    else if ( score >= 15) {
      equipementImg.style.filter ="none";
    }
  },200);
}
checkIfIcanBuy();

const equipementsSpatials = [
  {
    image: "./img/Bouteille.jpg",
    alt: "bouteilles d'oxygène",
    title: "x 15🚀",
    incrementBonus: 15,
  },
  {
    image: "./img/Casque.jpg",
    alt: "Casque spatial",
    title: "x 25🚀",
    incrementBonus: 25,
  },

  {
    image: "./img/Fusee.jpg",
    alt: "fusée spatial",
    title: "x 50🚀",
    incrementBonus: 50,
  },
];

// function checkIfIcanBuy(equipement) {
//   setInterval(() => {
//     const equipementsImg = document.querySelectorAll(".equipementImage");

//     equipementsImg.forEach((img) => {
//       const { image, alt, title, incrementBonus } = equipement;
//       if (score < incrementBonus) {
//         img.style.filter = "grayscale(100)";
//       } else {
//         img.style.filter = "none";
//       }
//     });
//   }, 200);
// }

//console.log(equipementImg);

// checkIfIcanBuy(equipementsSpatials);



//Création fonction qui creer des éléments à partir d'un tableau fournit
function createEquipement(equipements) {
  const equipementsBar = document.querySelector(".equipementsBar");
  equipementsBar.innerHTML = "";

  // on boucle sur l'ensemble des éléments du tableau
  equipements.forEach((equipement) => {
    const { image, alt, title, incrementBonus } = equipement;
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
      score -= incrementBonus;
      displayScore();
      increment = incrementBonus;
      countdownBonus();

      // equipementImg.style.filter = "grayscale(0)";
      // SoundCo2.play();
    });

    // equipementImg.addEventListener(score >= 15, function () {
    //   equipementImg.style.filter = "grayscale(0)";

    //   // SoundCo2.play();
    // });
  });
}

createRocket();
displayScore();
createEquipement(equipementsSpatials);