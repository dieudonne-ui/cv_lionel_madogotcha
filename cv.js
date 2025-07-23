function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        if (el.dataset.i18n === lang) {
            el.classList.remove('hidden');
        } else if (el.dataset.i18n === 'fr' || el.dataset.i18n === 'en') {
            el.classList.add('hidden');
        }
    });
}
document.getElementById('downloadPdfBtn').addEventListener('click', () => {
    const element = document.querySelector('.cv-container'); // Sélectionne toute la zone du CV
    const opt = {
      margin:       0.5,
      filename:     'CV_Lionel_Madogotcha.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
  
    html2pdf().set(opt).from(element).save();
  });
  // Affiche la modale à l'ouverture
window.onload = function() {
    document.getElementById("pdfModal").style.display = "block";
  };
  
  // Fermer la modale
  function closeModal() {
    document.getElementById("pdfModal").style.display = "none";
  }
  
  // Bouton Télécharger
  document.getElementById("downloadPdfBtn").addEventListener("click", function () {
    window.print(); // ou utiliser html2pdf si tu veux un vrai export PDF
  });
  
  
