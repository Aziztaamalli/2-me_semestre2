document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("display").addEventListener("click", function() {
        fetch('Etudiant.json')
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                var table = '<table border="1">';
                table += '<tr><th>CIN</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>Clubs</th><th>Redoublant</th><th>Moyenne</th></tr>';
                data.forEach(student => {
                    table += '<tr>';
                    table += '<td>' + student.cin + '</td>';
                    table += '<td>' + student.nom + '</td>';
                    table += '<td>' + student.prenom + '</td>';
                    table += '<td>' + student.date_naissance + '</td>';
                    table += '<td>' + student.clubs.join(', ') + '</td>';
                    table += '<td>' + (student.redoublant ? "Oui" : "Non") + '</td>';
                    table += '<td>' + student.moyenne + '</td>';
                    table += '</tr>';
                });
                table += '</table>';
                document.getElementById("studentTable").innerHTML = table;
            } else {
                document.getElementById("studentTable").innerHTML = "Aucune donnée d'étudiant disponible.";
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
    });
});
