const btn = document.querySelector("#envoyer");
let sent = false;
btn.addEventListener("click", () => {
  if (sent === false) {
    alert("Votre message a bien été envoyé.");

    let data = {
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      message: texte.value,
    };
    nom.value = "";
    prenom.value = "";
    email.value = "";
    texte.value = "";
    fetch("https://sannier-renaud.fr/portfolio/contact-mail/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then(() => {
        sent = true;
      })
      .catch((err) =>
        alert(
          "Il y a eu un probleme au moment de l'envoi, contactez moi par mail : sannier.renaud@gmail.com"
        )
      )
      .catch((err) =>
        alert(
          "Il y a eu un probleme au moment de l'envoi, contactez moi par mail : sannier.renaud@gmail.com"
        )
      );
  } else alert("Vous avez deja envoyé un message.");
});
