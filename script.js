// Fonction pour attribuer des coordonnées à chaque sommet
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var depart = 'A'; // Sommet de départ initial
var arrivee = 'B'; // Sommet d'arrivée initial
var graphVisible=false
let cheminsParcourus = [];
function assignCoordinates() {
    // Centrer les coordonnées dans un canvas de 1000x1000
    let coordinates = {
        A: [300, 500],
        B: [400, 700],
        C: [600, 500],
        D: [800, 300],
        E: [300, 300],
        F: [400, 100],
        G: [600, 100],
        H: [800, 500],
        I: [900, 300],
        J: [900, 100]
    };

    return coordinates;
}

function showGraph() {
    if (!graphVisible) {
        graphVisible = true; // Mettre à jour l'état
    }
    // Réinitialiser les valeurs du graphe
    depart = 'A'; // Sommet de départ initial
    arrivee = 'B'; // Sommet d'arrivée initial
    cheminsParcourus = [];

    // Réinitialiser le canvas et redessiner le graphe initial
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    graph_rep(chemin, nodeCoordinates); // Dessiner le graphe initial
}

// Fonction pour masquer le graphe
function hideGraph() {
    if (graphVisible) {
        graphVisible = false; // Mettre à jour l'état
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas
    }
}

// Fonction pour annuler le dernier coup
function undoLastMove() {
    if (cheminsParcourus.length > 0) {
        // Supprimer le dernier chemin parcouru
        const lastMove = cheminsParcourus.pop();
        const [previousDepart] = lastMove;

        // Réinitialiser le sommet de départ au précédent
        depart = previousDepart;

        // Redessiner le graphe
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        graph_rep(chemin, nodeCoordinates);

        // Redessiner les chemins parcourus
        cheminsParcourus.forEach(([start, end]) => {
            const [xStart, yStart] = nodeCoordinates[start];
            const [xEnd, yEnd] = nodeCoordinates[end];
            ctx.beginPath();
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xEnd, yEnd);
            ctx.strokeStyle = "red";
            ctx.lineWidth = 10;
            ctx.stroke();
        });

        // Dessiner le sommet actuel
        sommet_acces(chemin, depart, nodeCoordinates);
    }
}

// Ajouter un gestionnaire d'événements pour le bouton d'annulation
document.getElementById('undoButton')?.addEventListener('click', undoLastMove);


// Gestionnaires d'événements pour les boutons
document.getElementById('startButton')?.addEventListener('click', showGraph);
document.getElementById('exitButton')?.addEventListener('click', hideGraph);



// Fonction pour vérifier l'accessibilité entre deux sommets
function is_acces(chemin, s1, s2) {
    // Vérifier si le sommet s2 est accessible depuis s1
    if (chemin[s1] && Object.keys(chemin[s1]).some(via => chemin[s1][via].includes(s2))) {
        return true;
    }
    return false;
}


// Fonction pour dessiner le graphe avec le sommet de départ mis à jour
function sommet_acces(chemin, sommet, coord) {
    // Réinitialiser le canvas avant de redessiner
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner les arêtes parcourues en rouge
    cheminsParcourus.forEach(([start, end]) => {
        const [xStart, yStart] = coord[start];
        const [xEnd, yEnd] = coord[end];
        ctx.beginPath();
        ctx.moveTo(xStart, yStart);
        ctx.lineTo(xEnd, yEnd);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 10; // Épaisseur des lignes rouges
        ctx.stroke();
    });

    // Dessiner toutes les autres arêtes
    for (const [key, value] of Object.entries(chemin)) {
        const [xStart, yStart] = coord[key];
        for (const via in value) {
            value[via].forEach(destination => {
                const [xEnd, yEnd] = coord[destination];
                ctx.beginPath();
                ctx.moveTo(xStart, yStart);
                ctx.lineTo(xEnd, yEnd);
                ctx.strokeStyle = "white"; // Couleur par défaut
                ctx.lineWidth = 2;
                ctx.stroke();
            });
        }
    }
}

// Fonction pour dessiner un graphe avec sommet de départ et arrivée
function graph_rep(chemin, coord) {
    // Dessiner les arêtes d'abord
    for (const [key, value] of Object.entries(chemin)) {
        const [xStart, yStart] = coord[key];
    
        for (const via in value) {
            value[via].forEach(destination => {
                const [xEnd, yEnd] = coord[destination];
                ctx.beginPath();
                ctx.moveTo(xStart, yStart);
                ctx.lineTo(xEnd, yEnd);
                
                // Toujours dessiner les lignes en blanc
                ctx.strokeStyle = "white";  // Définit la couleur des lignes en blanc
                ctx.lineWidth = 2;  // Vous pouvez aussi définir l'épaisseur des lignes si nécessaire
                ctx.stroke();
            });
        }
    }
    

    // Dessiner les sommets par-dessus les arêtes
    for (const [key, value] of Object.entries(chemin)) {
        const [xStart, yStart] = coord[key];

        // Si c'est le sommet de départ
        if (key === depart) {
            // Dessiner le sommet de départ avec une couleur spéciale (bleu)
            drawVertices(xStart, yStart, 20, key, "#1E88E5");
        }
        // Si c'est le sommet d'arrivée
        else if (key === arrivee) {
            // Dessiner le sommet d'arrivée avec une couleur spéciale (blanc ou autre)
            drawVertices(xStart, yStart, 20, key, "white");

            // Ajouter une icône de drapeau sous le sommet d'arrivée
            const endIcon = new Image();
            endIcon.src = 'https://cdn-icons-png.flaticon.com/512/985/985802.png'; 
            endIcon.onload = function() {
                // Afficher l'image en dessous du sommet, de manière réduite
                const iconSize = 15; // Taille réduite de l'icône
                ctx.drawImage(endIcon, xStart - iconSize / 2, yStart-50, 40, 40);
            };
        }
        else {
            // Dessiner les autres sommets avec la couleur par défaut (blanc)
            drawVertices(xStart, yStart, 20, key, "white");
        }
    }
}

// Fonction pour dessiner un sommet
function drawVertices(x, y, radius, label, color = "white") {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // Cercle du sommet
    ctx.fillStyle = color; // Couleur du sommet
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Texte du sommet
    ctx.fillStyle = "black";
    ctx.font = "bold 20px Roboto";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, x, y);
}




function showTransitionTable(sommet, coord) {
    graph_rep(chemin, coord); // Redessiner le graphe en arrière-plan

    // Coordonnées du sommet pour positionner la table
    const [x, y] = coord[sommet];

    // Style de la boîte pour la table de transition
    ctx.fillStyle = "rgba(30, 30, 30, 0.6)"; // Fond sombre et translucide
    const boxWidth = 260;
    const boxHeight = 120;

    // Ajouter une marge en haut de la boîte (par exemple 20px)
    const marginTop = 20;
    const boxX = x + 25; // Position décalée par rapport au sommet
    const boxY = y - 70 - marginTop; // Ajouter la marge en haut
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

    // Ajouter une bordure lumineuse à la boîte
    ctx.strokeStyle = "gold";
    ctx.lineWidth = 2;
    ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

    // Afficher le titre de la table de transition
    ctx.fillStyle = "white";
    ctx.font = "bold 20px Roboto";
    ctx.textAlign = "left";
    ctx.fillText(`Transitions pour ${sommet}:`, boxX + 10, boxY + 20);

    // Afficher les transitions dans la boîte
    ctx.font = "18px Roboto";
    const transition = chemin[sommet];
    let textY = boxY + 40; // Position initiale pour le texte des transitions

    for (const [key, value] of Object.entries(transition)) {
        const lineText = `${key} -> ${value.join(", ")}`;
        ctx.fillText(lineText, boxX + 10, textY);
        textY += 20; // Espacement entre les lignes
    }
}



// Écouteur d'événements pour gérer le survol de la souris
canvas.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX - canvas.offsetLeft;
    const mouseY = e.clientY - canvas.offsetTop;
    let isHovering = false;

    // 1. Redessiner le graphe une fois
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface tout le canvas
    graph_rep(chemin, nodeCoordinates); // Redessine les arêtes et sommets

    // 2. Vérifier le survol des sommets
    for (const [key, value] of Object.entries(nodeCoordinates)) {
        const [x, y] = value;
        const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

        if (distance <= 20) {
            // Ajouter un effet de surbrillance au sommet
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, 2 * Math.PI); // Aura autour du sommet
            ctx.fillStyle = "rgba(255, 215, 0, 0.3)"; // Jaune translucide
            ctx.fill();

            drawVertices(x, y, 20, key, "gold"); // Redessiner le sommet en doré
            showTransitionTable(key, nodeCoordinates); // Afficher la table de transition
            isHovering = true;
            break; // Pas besoin de continuer si un sommet est survolé
        }
    }
});



// Exemple d'utilisation
let chemin = {
    A: { '': ['B', 'C', 'E'] },
    B: { 'A': ['C', 'D', 'F'], 'C': ['G'] },
    C: { 'A': ['B'], 'B': ['F', 'H'], 'E': ['D'] },
    D: { 'B': ['H'], 'C': ['G'] },
    E: { 'A': ['F'], 'C': ['A', 'G'] },
    F: { 'B': ['D', 'I'], 'E': ['H', 'J'] },
    G: { 'C': ['I'], 'D': ['H'] },
    H: { 'F': ['I', 'J'], 'G': ['B'] },
    I: { 'G': ['J'], 'H': ['E'] },
    J: { 'F': ['I'], 'I': ['G'] }
};





// Dessiner le graphe initial
let nodeCoordinates = assignCoordinates();
graph_rep(chemin, nodeCoordinates);
canvas.addEventListener('click', (e) => {
    const mouseX = e.clientX - canvas.offsetLeft;
    const mouseY = e.clientY - canvas.offsetTop;

    for (const [key, value] of Object.entries(nodeCoordinates)) {
        const [x, y] = value;
        const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y + 20) ** 2);

        if (distance <= 20) { // Vérifie si le clic est dans le rayon du sommet (20 pixels)
            // Vérifier si le sommet est accessible
            if (is_acces(chemin, depart, key) && depart !== key) {
                cheminsParcourus.push([depart, key]);
                depart = key; // Mettre à jour le sommet de départ
                sommet_acces(chemin, depart, nodeCoordinates);
            } else if (depart === arrivee) {
                // Gérer la victoire avec une animation et un effet de couleur
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Créer une animation de texte de félicitations
                let alpha = 1; // Opacité initiale
                let scale = 1; // Échelle initiale
                let text = "Bravo!!!";

                function animateVictory() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = `rgba(0, 128, 0, ${alpha})`; // Vert translucide pour l'arrière-plan
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    ctx.font = `${scale * 40}px 'Arial'`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`; // Texte en jaune

                    // Dessiner le texte de félicitations avec animation
                    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

                    // Modifier l'opacité et la taille pour l'animation
                    alpha -= 0.02; // Réduire l'opacité
                    scale += 0.02; // Augmenter l'échelle

                    if (alpha <= 0) {
                        clearInterval(victoryInterval); // Arrêter l'animation lorsque l'opacité atteint 0
                    }
                }

                // Lancer l'animation de victoire
                let victoryInterval = setInterval(animateVictory, 50);
                return;
            }

            // Toujours redessiner le graphe après un clic
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            graph_rep(chemin, nodeCoordinates);
            sommet_acces(chemin, key, nodeCoordinates);
            break;
        }
    }
});



