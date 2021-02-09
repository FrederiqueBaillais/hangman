    // Définition des variables
    let error = 0; // pour le compteur des erreurs
    let cptGallery = 0; // pour le compteur des images à afficher pour le hangman
    const imgWelcome = document.getElementById("welcome"); // image de bienvenue
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // alphabet à cliquer
    let motSplite = []; // array des lettres du mot à trouver


    // choix aléatoire du pays à trouver
    function randomTown() {
        const pays = [
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
        const hasard = Math.floor(Math.random() * pays.length);
        const secretTown = pays[hasard];
        return (secretTown);
    }

    // caroussel d'images du hangman en fonction des erreurs commises par l'utilisateur
    let gallery = [
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

    // error8() {
    //     // 8ème erreur, affichage de l'image hangman.png
    //     gallery[7];
    //     // affichage du compteur d'erreurs possibles restantes "nombre d'erreurs encore possibles : 0"
    //     error++;
    //     // affichage "You lose"
    //     .innerHTML = "Sorry, you lose. Let's try again !";
    //     // affichage du mot à trouver
    //     .innerHTML = "Le mot à trouver était : " + secretTown;
    //     // arrêter le jeu, griser toutes les lettres et les rendre incliquables

    // };

    // quand on clique sur une lettre, récupérer la lettre
    // et faire la recherche secretTown.forEach(element)

    // boucle compteur error
    // si la lettre n'est pas dans le mot
    // secretTown.forEach(element => {
    //     if (element pas dans secretTown) {
    //         gallery[cptGallery + 1];
    //         error++;
    //     } else if (element dans secretTown) {
    //         afficher la lettre au bon endroit dans le mot;
    //         appel de la fonction de choix;
    //     }
    // });

    // if (error == 8) {
    //     error8;
    //     perdu;
    // }

    // quelle que soit la lettre, bonne ou mauvaise, sélectionnée, griser la lettre choisie
    // quand c'est onClick
    // this.disabled = true;

    function check() {
        list.onclick = () => {
            let guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (let i = 0; i < motSplite.length; i++) {
                if (motSplite[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter++;
                }
            }
            let j = motSplite.indexOf(guess);
            if (j === -1) {
                lives--;
                comments();
                animate();
            } else {
                comments();
            }
        }
    }



    // afficher l'alphabet cliquable
    function letterscliquable() {
        myLetters = document.getElementById('alphabetACliquer');
        letters = document.createElement('div');

        for (let i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('button');
            list.className = "ltr";
            list.innerHTML = alphabet[i];
            check();
            myLetters.appendChild(letters);
            letters.appendChild(list);
        }

        const selector = document.querySelectorAll('.ltr');
        selector.forEach(button => {
            document.getElementById('alphabetACliquer').addEventListener("click", () => {
                // return la lettre cliquée
            });
        });
    }

    // met en place le hangman pour pouvoir le jouer
    function play() {
        // efface l'image de bienvenue pour laisser place au jeu
        imgWelcome.style.display = "none";
        // affiche l'alphabet à jouer
        letterscliquable();
        // va chercher le mot à trouver
        let word = randomTown();
        // vérifie que le mot qui a été trouvé
        console.log(word);
        // sélectionne chaque caractère du mot à trouver en lettre et les insère dans un tableau
        motSplite = word.split('');
        // vérifie que le mot a bien été splité lettre par lettre
        console.log(motSplite);
        // affiche des trous à la place des lettres
        for (let i = 0; i < motSplite.length; i++) {
            let hole = document.createElement('span');
            hole.className = "styleHole"; //classList.add
            hole.innerHTML = `<p id="${motSplite[i]+i}"></p>`;
            document.getElementById("toFind").appendChild(hole);
        }
        // appel de la fonction check pour vérifier si la lettre y est
        check();










        // essais
        guesses = [];
        // nombre de vies restantes
        lives = 8;
        counter = 0;
        space = 0;
        // result();
        // comments();
        // canvas();
    }

    document.getElementById("beginNew").addEventListener("click", () => {
        play();
    });