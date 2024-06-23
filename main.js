// -------------READY--------------

function redirectToPage() {
    window.location.href = "one.html";
}


// ----------------ONE-----------------

        const form = document.getElementById('reponse-form');
        const input = document.getElementById('reponse-input');
        const resultat = document.getElementById('resultat');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const reponse = input.value.trim().toLowerCase();
            if (reponse == 'enveloppe') {
                resultat.textContent = 'Correct !';
            } else {
                resultat.textContent = 'Essayez encore.';
            }
        });


function verifierReponse() {
  var reponse = document.getElementById('reponse').value;
  if(reponse === 'houmous') {
    alert('(46.5068129, 6.6288912)');
  } else {
    alert("c'est pas ça ;)");
  }
  return false;
}        



