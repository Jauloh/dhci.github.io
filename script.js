let formulaire_box = document.getElementById('formulaire_box');
let bouton = document.getElementById('bouton');
let close_form = document.getElementById('close');

close_form.addEventListener('click', function(event)
{
    formulaire_box.style.display = "none";
})

bouton.addEventListener('click', function(event)
{
    formulaire_box.style.display = "flex";
})


// bouton.addEventListener('click', function(event)
// {
//     formulaire_box.style.display = "block";
//     alert('Formular');
// })

// formulaire_box.addEventListener('click', function(event)
// {
//     formulaire_box.style.display = "none";
// })





//-----------form-------------
/*
document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);

            fetch('https://script.google.com/macros/s/AKfycbz1BQme1aJEWLHZJQ1l_pQaCCNiUyvd962m6DdCz6hk1FZIEV0KT06yz11iAHkhyqZF/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => alert('Formulaire envoyé avec succès !'))
            .catch(error => console.error('Erreur:', error));
        });
*/
//---------------------------------Thank you page
document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi par défaut du formulaire

            const formData = new FormData(this);

            fetch('https://script.google.com/macros/s/AKfycbz1BQme1aJEWLHZJQ1l_pQaCCNiUyvd962m6DdCz6hk1FZIEV0KT06yz11iAHkhyqZF/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                // Masque le formulaire et affiche le message de remerciement
                document.getElementById('formulaire').classList.add('hidden');
                document.getElementById('thankYouMessage').classList.remove('hidden');
            })
            .catch(error => {
                console.error('Erreur:', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
            });
        });