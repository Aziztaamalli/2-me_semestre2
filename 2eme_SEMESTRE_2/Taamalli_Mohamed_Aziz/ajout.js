document.getElementById("envoyer").addEventListener("click", function(event) {
    event.preventDefault();
    var cin = document.getElementById("cin").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var date_naissance = document.getElementById("date_naissance").value;
    var clubs = document.getElementById("clubs").value;
    var redoublant = document.getElementById("redoublant").checked;
    var moyenne = document.getElementById("moyenne").value;
    var alertMessage = "CIN: " + cin + "\n" +
                       "Nom: " + nom + "\n" +
                       "Prénom: " + prenom + "\n" +
                       "Date de naissance: " + date_naissance + "\n" +
                       "Clubs: " + clubs + "\n" +
                       "Redoublant: " + (redoublant ? "Yes" : "No") + "\n" +
                       "Moyenne: " + moyenne;
    alert(alertMessage);
  });
  