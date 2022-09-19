const btn = document.querySelector('#envoyer')
btn.addEventListener('click', () => {
    let data = {
        "nom" : nom.value,
        "prenom": prenom.value,
        "email" : email.value ,
        "message": texte.value 
    }
    fetch('https://sannier-renaud.fr/portfolio/contact-mail/messages', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
    .then((resp) => {
        alert('Votre message a bien été envoyé.')
        nom.value = ''
        prenom.value = ''
        email.value = ''
        texte.value = ''
})
    .catch((err) => console.log(err))
})