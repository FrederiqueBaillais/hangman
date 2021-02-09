var hangman = {
    // Définition des variables
    let error = 0; // pour le compteur des erreurs
    let cptGallery = 0; // pour le compteur des images à afficher pour le hangman


    // choix aléatoire du pays à trouver
    function paysAleatoire() {
        var hasard = Math.floor(Math.random() * 10);
        let pays = [
            "belgique",
            "france",
            "luxembourg",
            "allemagne",
            "suisse",
            "italie",
            "espagne",
            "portugal",
            "autriche",
            "pologne"
        ];
        let secretTown = pays[hasard];
        return (secretTown);
    }

    // choix aléatoire du pays à trouver
    function paysAleatoire() {
        var hasard = Math.floor(Math.random() * 10);
        let pays = [
            "belgique",
            "france",
            "luxembourg",
            "allemagne",
            "suisse",
            "italie",
            "espagne",
            "portugal",
            "autriche",
            "pologne",
        ];
        let secretTown = pays[hasard];
        return (secretTown);
    }

    // écrire les blancs à la place des lettres


    // caroussel d'images du hangman en fonction des erreurs commises par l'utilisateur
    let gallery = [
        "assets/img/welcome.png",
        "assets/img/hangman7.png",
        "assets/img/hangman6.png",
        "assets/img/hangman5.png",
        "assets/img/hangman4.png",
        "assets/img/hangman3.png",
        "assets/img/hangman2.png",
        "assets/img/hangman1.png",
        "assets/img/hangman0.png",
    ];

    let newImages = document.getElementsByClassName("imageHangman")[0];


    // boucle pour l'affichage du pendu

    error8() {
        // 8ème erreur, affichage de l'image hangman.png
        gallery[7];
        // affichage du compteur d'erreurs possibles restantes "nombre d'erreurs encore possibles : 0"
        error++;
        // affichage "You lose"
        .innerHTML = "Sorry, you lose. Let's try again !"
            // affichage du mot à trouver
            .innerHTML = "Le mot à trouver était : " + secretTown;
    };

    // boucle compteur error
    // si la lettre n'est pas dans le mot
    secretTown.forEach(element => {
        if (element pas dans secretTown) {
            gallery[cptGallery + 1];
            error++;
        } else if (element dans secretTown) {
            afficher la lettre au bon endroit dans le mot;
            appel de la fonction de choix;
        }
    });

    if (error == 8) {
        error8;
        perdu;
    }

    // quelle que soit la lettre, bonne ou mauvaise, sélectionnée, griser la lettre choisie
    this.disabled = true;
}

window.addEventListener("DOMContentLoaded", hangman.init);