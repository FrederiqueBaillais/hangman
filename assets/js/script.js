    // Définition des variables
    let error = 0; // pour le compteur des erreurs
    let cptGallery = 0; // pour le compteur des images à afficher pour le hangman
    let lives; // nombre de vies
    let space; // nombres d'espaces restants dans le mot à trouver
    const imgWelcome = document.getElementById("welcome"); // image de bienvenue
    const imgPendu = document.getElementById("pendu"); // images pour l'affichage du pendu
    const showLives = document.getElementById("lives"); // montre le nombre de vies restantes
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // alphabet à cliquer
    let motSplite = []; // array des lettres du mot à trouver
    let mot; // mot à trouver, stocké dans une variable
    let gallery = [ // caroussel d'images du hangman en fonction des erreurs commises par l'utilisateur
        "assets/img/hangman0.png",
        "assets/img/hangman1.png",
        "assets/img/hangman2.png",
        "assets/img/hangman3.png",
        "assets/img/hangman4.png",
        "assets/img/hangman5.png",
        "assets/img/hangman6.png",
        "assets/img/hangman7.png",
        "assets/img/welcome.png",
    ];

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

    // animation du pendu
    function animate() {
        // afficher les images en fonction du nombre de vies restantes
        imgPendu.style.display = "block";
        imgPendu.src = gallery[lives];
    }

    // fin du jeu, plus de vie ou trouvé toutes les lettres
    function fin() {
        // disabled toutes les lettres restantes
        // la seule chose qu'on peut faire c'est cliquer sur le bouton newPart
        const selector = document.querySelectorAll('.ltr');
        selector.forEach(button => {
            // le bouton n'est plus cliquable
            button.disabled = true;
        });
    }

    // montre le nombre de vies restantes et affiche Win ou Lose
    function comments() {
        // nombre de vies et fin
        showLives.innerHTML = "Vous avez " + lives + " vies.";
        // si l'utilisateur n'a plus de vie et qu'il y a encore des espaces vides à trouver, RATÉ
        if ((lives < 1) && (space > 0)) {
            mot.id = "capitalize";
            showLives.innerHTML = "Game Over... Le mot était " + mot;
            fin();
        }
        // sinon si l'utilisateur a encore des vies et qu'il n'y a plus d'espaces vides à trouver, GAGNÉ
        else if ((lives > 0) && (space < 1)) {
            showLives.innerHTML = "You win !";
            fin();
        }
    }

    // teste les lettres proposées
    function check(test) {
        let counter = 0;
        for (let i = 0; i < motSplite.length; i++) {
            // si la lettre est dans le mot,
            // alors afficher la lettre à l'indice où est la lettre
            if (motSplite[i] === test) {
                // si true mettre la lettre au bon endroit
                // motSplite[i] doit être dans innerHTML
                document.getElementById(motSplite[i] + i).innerHTML = test;
                counter++;
                space--;
            }
            comments();
        }
        // si la boucle n'a pas trouvé la lettre, le counter reste à 0, on perd 1 vie
        if (counter == 0) {
            lives--;
            comments();
            animate();
        }
    }

    // désactive la lettre du clavier cliquable
    function desactivation() {
        // prend chaque button de l'alphabet créé comme un ensemble dans mon array
        const selector = document.querySelectorAll('.ltr');
        selector.forEach(button => {
            button.addEventListener("click", () => {
                // récupération du button
                const userChoice = button.id;
                // le bouton n'est plus cliquable
                button.disabled = true;
                // appel de la fonction check pour vérifier si la lettre y est
                check(userChoice);
            });
            // touches du clavier de 65 à 90 compris
            /*window.addEventListener("keydown", () => {
                // récupération du button
                const userChoice = button.id;
                console.log(userChoice);
                // le bouton n'est plus cliquable
                button.disabled = true;
                // appel de la fonction check pour vérifier si la lettre y est
                check(userChoice);
            });*/
        });
    }

    // afficher l'alphabet cliquable
    function letterscliquable() {
        myLetters = document.getElementById('alphabetACliquer');
        letters = document.createElement('div');
        for (let i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('button');
            // récupère la valeur lettre du bouton
            list.id = alphabet[i];
            list.className = "ltr";
            list.innerHTML = alphabet[i];
            check();
            myLetters.appendChild(letters);
            letters.appendChild(list);
        }
        desactivation();
    }

    // met en place le hangman pour pouvoir le jouer
    function play() {
        let newPart = document.getElementById('newPart');
        let beginNew = document.getElementById('beginNew');
        newPart.style.display = 'block';
        beginNew.style.display = 'none';

        // efface l'image de bienvenue pour laisser place au jeu
        imgWelcome.style.display = "none";
        imgPendu.style.display = "block";
        // affiche l'alphabet à jouer
        letterscliquable();
        // quand on entre les touches du clavier au lieu de lettres cliquables
        /*window.addEventListener('keydown', (touche) => {
            check(touche.key);
            desactivation();
        });*/
        // va chercher le mot à trouver
        mot = randomTown();
        // sélectionne chaque caractère du mot à trouver en lettre et les insère dans un tableau
        motSplite = mot.split('');
        // affiche des trous à la place des lettres
        for (let i = 0; i < motSplite.length; i++) {
            let hole = document.createElement('span');
            hole.className = "styleHole"; //classList.add
            hole.innerHTML = `<p id="${motSplite[i]+i}"></p>`;
            document.getElementById("toFind").appendChild(hole);
        }
        // nombre de vies restantes
        lives = 8;
        // nombre d'espaces libres dans le mot
        space = motSplite.length;
        animate();
        comments();
    }

    // relance la page en cas de clic qur le bouton Recharger pour une nouvelle partie
    document.getElementById("newPart").addEventListener("click", () => {
        document.location.reload();
        imgPendu.style.display = 'block';
    });

    // lance une toute nouvelle partie au lancement de la page
    document.getElementById("beginNew").addEventListener("click", () => {
        play();
    });