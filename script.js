// ajout des deux autres équipement

// son sur équipement
document.addEventListener('DOMContentLoaded', (event) => {
    // Sélection image 
    const equipementImage = document.getElementById('equipementImage');
    // Sélection l'audio
    const SoundCo2 = document.getElementById('SoundCo2');
  
    // Ajout clic sur l'image
    equipementImage.addEventListener('click', () => {
      // play lorsque l'image est cliquée
      SoundCo2.play();
    });
  });
  