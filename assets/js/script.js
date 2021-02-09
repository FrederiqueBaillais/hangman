    // Définition des variables
    let error = 0; // pour le compteur des erreurs
    let cptGallery = 0; // pour le compteur des images à afficher pour le hangman
    const imgWelcome = document.getElementById("welcome"); // image de bienvenue
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // alphabet à cliquer
    let motSplite = []; // array des lettres du mot à trouver
    let showLives = document.getElementById("lives");


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

    function animate() {
        // affichage des images en fonction des des erreurs
        // gallery[cptGallery + 1];
        // nombre de vies -1



    }

    // fin du jeu, plus de vie ou trouvé toutes les lettres
    function fin() {
        // disabled toutes les lettres restantes
        // button.disabled = true;
        // la seule chose qu'on peut faire c'est cliquer sur le bouton newPart





    }


    // montre le nombre de vies restantes et affiche Win ou Lose
    function comments() {
        // nombre de vies et fin
        showLives.innerHTML = "You have " + lives + " lives";
        if ((lives < 1) && (space > 0)) {
            showLives.innerHTML = "Game Over...";
            fin();
        }
        if ((lives > 0) && (space < 1)) {
            showLives.innerHTML = "You Win!";
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
        }
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
        // prend chaque button de l'alphabet créé comme un ensemble dans mon array
        const selector = document.querySelectorAll('.ltr');
        console.log(selector);
        selector.forEach(button => {
            button.addEventListener("click", () => {
                // récupération du button
                const userChoice = button.id;
                console.log(userChoice);
                // le bouton n'est plus cliquable
                button.disabled = true;
                // appel de la fonction check pour vérifier si la lettre y est
                check(userChoice);
            });
        });

    }

    // met en place le hangman pour pouvoir le jouer
    function play() {

        let newPart = document.getElementById('newPart');
        let beginNew = document.getElementById('beginNew');
        newPart.style.display = 'block';
        beginNew.style.display = 'none';

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

        // nombre de vies restantes
        lives = 8;
        space = motSplite.length;
        // result();
        comments();
    }

    document.getElementById("beginNew").addEventListener("click", () => {
        play();
    });