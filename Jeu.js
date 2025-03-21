class Confetti {
                    constructor(x, y) {
                        this.x = x;
                        this.y = y;
                        this.size = Math.random() * 10 + 5;
                        this.speedX = Math.random() * 2 - 1; // Vitesse horizontale
                        this.speedY = Math.random() * 3 + 2; // Vitesse verticale
                        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`; // Couleur aléatoire
                    }
            
                    update() {
                        this.x += this.speedX;
                        this.y += this.speedY;
                        this.speedY += 0.1; // Gravité légère
            
                        // Réinitialiser les confettis en bas de l'écran
                        if (this.y > canvas.height) {
                            this.y = 0;
                            this.x = Math.random() * canvas.width;
                        }
                    }
            
                    draw() {
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                        ctx.fillStyle = this.color;
                        ctx.fill();
                    }
                }





// Fonction pour attribuer des coordonnées à chaque sommet
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var depart = 'A'; // Sommet de départ initial
var arrivee = 'B'; // Sommet d'arrivée initial
var graphVisible=false
var cheminsParcourus = [depart];
var dernier_sommet='';
var arete_chemin=[];
var list_dernier_sommet=[''];
let endIcon = new Image();
var couleur_sol='rgb(0,0,255)';
var compteur=0;
var liste_couleur_sol=[];
var sommet_accessible=[];
var taille_arete=0;
var couleur_edge = ["red", "blue", "green", "purple", "orange", "brown", "cyan", "magenta", "yellow", "pink"];
endIcon.src = 'https://cdn-icons-png.flaticon.com/512/985/985802.png';
    // Centrer les coordonnées dans un canvas de 1000x1000
    let coordinates1 = {
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

    

    let coordinates2={
        A: [ 800, 400 ],
        B: [ 757.9590557626387, 530.4171818088466 ],
        C: [ 725.4609859451685, 540.708803149106 ],
        D: [ 570.6549049967825, 1161.1265656709654 ],
        E: [ -359.57362424881626, 1125.4904166856975 ],
        F: [ 599.078317052063, 883.3469686884699 ],
        G: [ 55.661432158681535, 202.21496486870072 ],
        H: [ 405.51235447372903, 114.10349087984667 ],
        I: [ 535.5059172551331, 169.17779037379592 ],
        J: [ 575.2225502949178, -482.08358250697887 ]
      }

      let chemin3 = {
        A: { '': ['B', 'C', 'D'] },
        B: { 'A': ['E', 'F'] },
        C: { 'A': ['G', 'H'] },
        D: { 'A': ['I', 'J'] },
        E: { 'B': ['K', 'L'] },
        F: { 'B': ['M'] },
        G: { 'C': ['N', 'O'] },
        H: { 'C': ['P', 'Q'] },
        I: { 'D': ['R'] },
        J: { 'D': ['S', 'T'] },
        K: { 'E': ['U'] },
        L: { 'E': ['V'] },
        M: { 'F': ['W'] },
        N: { 'G': ['X'] },
        O: { 'G': ['Y'] },
        P: { 'H': ['Z'] },
        Q: { 'H': ['AA'] },
        R: { 'I': ['BB'] },
        S: { 'J': ['CC'] },
        T: { 'J': ['DD'] }
    };
    
    let coordinates3 = {
        A: [600, 400],
        B: [500, 300],
        C: [700, 300],
        D: [600, 500],
        E: [400, 200],
        F: [500, 150],
        G: [800, 200],
        H: [700, 150],
        I: [500, 600],
        J: [700, 600],
        K: [350, 100],
        L: [450, 100],
        M: [500, 50],
        N: [850, 100],
        O: [750, 100],
        P: [700, 50],
        Q: [650, 50],
        R: [450, 700],
        S: [650, 700],
        T: [750, 700],
        U: [300, 50],
        V: [400, 50],
        W: [450, 10],
        X: [900, 50],
        Y: [800, 50],
        Z: [750, 10],
        AA: [700, 10],
        BB: [400, 750],
        CC: [600, 750],
        DD: [700, 750]
    };
    

function height_edge(chemin){
    for (const [key, value] of Object.entries(chemin)){
        taille_arete+=value.length;
    }
}


function showGraph() {
    canvas.style.pointerEvents = 'auto';
    if (!graphVisible) {
        graphVisible = true; // Mettre à jour l'état
    }
    // Réinitialiser les valeurs du graphe
    depart = 'A'; // Sommet de départ initial
    arrivee = 'B'; // Sommet d'arrivée initial
    cheminsParcourus = [depart];
    dernier_sommet='';
    list_dernier_sommet=[''];
    arete_chemin=[];
    // Réinitialiser le canvas et redessiner le graphe initial
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    graph_rep(chemin, nodeCoordinates); // Dessiner le graphe initial
}

// Fonction pour masquer le graphe

function choix_chemin() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let container = document.getElementById('choixContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'choixContainer';
        container.style.marginTop = "20px";
        document.body.appendChild(container);
    }
    depart = 'A'; 
    arrivee = 'B'; 
    cheminsParcourus = [depart];
    dernier_sommet='';
    list_dernier_sommet=[''];
    arete_chemin=[];
    
    container.innerHTML = "";

    const btn1 = document.createElement('button');
    btn1.textContent = "Choix 1 : Chemin 1";
    btn1.className = "button choice";
    btn1.addEventListener('click', function () {
        chemin = chemin1;
        nodeCoordinates=coordinates1;
        container.innerHTML = ""; 
        graph_rep(chemin, coordinates);

    });

    const btn2 = document.createElement('button');
    btn2.textContent = "Choix 2 : Chemin 2";
    btn2.className = "button choice";
    btn2.addEventListener('click', function () {
        chemin = chemin3;
        nodeCoordinates=coordinates3;
        container.innerHTML = "";
        graph_rep(chemin, coordinates);

    });
    container.appendChild(btn1);
    container.appendChild(btn2);
}

document.getElementById('undoButton')?.addEventListener('click', undoLastMove);
document.getElementById('solutionButton').addEventListener('click', Afficher_solution);
document.getElementById('startButton').addEventListener('click', showGraph);




// Fonction pour vérifier l'accessibilité entre deux sommets
/*function is_acces(chemin, s1, s2) {
    // Vérifier si le sommet s2 est accessible depuis s1
    if (chemin[s1] && Object.keys(chemin[s1]).some(via => chemin[s1][via].includes(s2))) {
        return true;
    }
    return false;
}*/


function soustraireUnRGB(j) {
    // Extraire les valeurs RGB de la chaîne
    for(var i=0;i<j;i++){
        const match = couleur_sol.match(/rgb\((\d+),(\d+),(\d+)\)/);
        if (match) {
            let b = Math.max(0, parseInt(match[3])-30);
            let g = Math.max(0, parseInt(match[2])+10);
            let r = Math.max(0, parseInt(match[1])+10);
            if(g===0){
                let b = Math.max(0, parseInt(match[3]));
                let g = Math.max(0, parseInt(match[2]));
                let r = Math.max(0, parseInt(match[1])+30);
            }
            couleur_sol = `rgb(${r},${g},${b})`;
        }
        liste_couleur_sol.push(couleur_sol);
    }
}

// Fonction pour annuler le dernier coup
function undoLastMove() {
    if (cheminsParcourus.length > 0) {
        // Supprimer le dernier chemin parcouru
        cheminsParcourus.pop();
        arete_chemin.pop();

        // Réinitialiser le sommet de départ au précédent
        depart = dernier_sommet;
        list_dernier_sommet.pop();
        dernier_sommet=list_dernier_sommet[list_dernier_sommet.length-1];

        // Redessiner le graphe
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        graph_rep(chemin, nodeCoordinates);

    }
}

function arete_rouge(s1, s2) {
    const [xs1, ys1] = nodeCoordinates[s1];
    const [xs2, ys2] = nodeCoordinates[s2];
    arete_chemin.push([xs1, ys1, xs2, ys2]);
}

//fonction permettant de trouver le meilleur chemin du sommet de départ au sommet d'arrivée

function trouverCheminAvecPredecesseurBFS(tableTransition, sommetDepart, sommetFinal) {
    let queue = [{ sommet: sommetDepart, predecesseur: '', chemin: [sommetDepart], aretesVisitees: new Set() }];

    let visite = new Set([sommetDepart + '_']);

    while (queue.length > 0) {
        let { sommet, predecesseur, chemin, aretesVisitees } = queue.shift();

        // Si le sommet final est atteint, retourne le chemin sous forme de liste de sommets
        if (sommet === sommetFinal) {
            return chemin;
        }

        const transitionsPossibles = tableTransition[sommet][predecesseur] || [];
        for (let voisin of transitionsPossibles) {
            let arete = `${sommet}-${voisin}`;
            
            // Vérifie si l'arête n'a pas encore été visitée
            if (!aretesVisitees.has(arete)) {
                let nouvellesAretesVisitees = new Set(aretesVisitees);
                nouvellesAretesVisitees.add(arete);

                let cleVisite = voisin + '-' + sommet;
                if (!visite.has(cleVisite)) {
                    visite.add(cleVisite);

                    queue.push({
                        sommet: voisin,
                        predecesseur: sommet,
                        chemin: [...chemin, voisin], // Ajoute le sommet voisin au chemin
                        aretesVisitees: nouvellesAretesVisitees 
                    });
                }
            }
        }
    }

    // Si aucun chemin n'est trouvé
    return null;
}


function Afficher_solution(){
    depart='A';
    arrivee='B';
    let solution=trouverCheminAvecPredecesseurBFS(chemin, depart, arrivee);
    arete_chemin=[];
    graph_rep(chemin, nodeCoordinates);
    for (let i = 0; i < solution.length - 1; i++) {
        arete_rouge(solution[i], solution[i + 1]);
    }
    graph_rep(chemin, nodeCoordinates);
}

function algo_ce(chemin){
    let couleur=[];
    for (const [key, value] of Object.entries(chemin)) {
        for (const via in value) {
            value[via].forEach(destination => {
                couleur.push([key,destination]);
            });
        }
    }
    return couleur;
}
function assignColors(chemin) {
    let edgeColors = {}; // Stocker les couleurs des arêtes déjà assignées
    let index = 0;
    let coloredEdges = {};

    for (let sommet in chemin) {
        coloredEdges[sommet] = {};
        for (let prev in chemin[sommet]) {
            coloredEdges[sommet][prev] = [];
            
            chemin[sommet][prev].forEach(dest => {
                if (!edgeColors[`${prev}-${dest}`]) {
                    let color1 = couleur_edge[index % couleur_edge.length];
                    let color2 = couleur_edge[(index + 1) % couleur_edge.length];
                    index++;

                    edgeColors[`${prev}-${dest}`] = [color1, color2];
                    edgeColors[`${dest}-${prev}`] = [color2, color1];
                }
                
                let [color1, color2] = edgeColors[`${prev}-${dest}`];
                coloredEdges[sommet][prev].push([dest, color1, "white", color2]);
            });
        }
    }
    return coloredEdges;
}

function colorierAretes(chemin) {
    // On initialise une structure pour garder les arêtes colorées
    let arêtesColorées = [];
    let couleurCourante = 0;  // Compteur pour les couleurs
    let couleurs = {};  // Pour stocker les arêtes déjà colorées
    let exploré = {};  // Pour éviter de réexplorer les mêmes sommets

    // Fonction récursive pour explorer les sommets et colorier les arêtes
    function explorer(sommet, couleur) {
        if (exploré[sommet]) return;  // Si le sommet est déjà exploré, on arrête

        exploré[sommet] = true;  // On marque le sommet comme exploré

        // On parcourt les arêtes sortantes de ce sommet
        for (let origine in chemin[sommet]) {
            for (let destination of chemin[sommet][origine]) {
                // Créer une arête unique (origine, destination)
                let arête = (sommet < destination) ? `${sommet}->${destination}` : `${destination}->${sommet}`;

                // Vérifier si l'arête a déjà été colorée
                if (!couleurs[arête]) {
                    couleurs[arête] = couleur;  // On attribue la couleur à cette arête
                    // On ajoute cette arête à la bonne couleur dans la liste des arêtes colorées
                    if (!arêtesColorées[couleur]) {
                        arêtesColorées[couleur] = [];
                    }
                    arêtesColorées[couleur].push(arête);
                }

                // On poursuit l'exploration en utilisant la couleur courante
                explorer(destination, couleur);
            }
        }
    }

    // On explore tous les sommets à partir de chaque sommet non exploré
    for (let sommet in chemin) {
        if (!exploré[sommet]) {
            explorer(sommet, couleurCourante);  // On lance l'exploration d'un sommet
            couleurCourante++;  // On passe à la couleur suivante
        }
    }

    return arêtesColorées;
}

function couleur_possible(chemin, sommetDepart, exploré = {}) {
    let arêtesSuccessives = {};

    // Explorer les voisins directs du sommet courant
    for (let origine in chemin[sommetDepart]) {
        for (let destination of chemin[sommetDepart][origine]) {
            if (!arêtesSuccessives[destination]) {
                arêtesSuccessives[destination] = new Set(); // Utiliser un Set pour éviter les doublons
            }

            if (chemin[destination]) {
                for (let destination2 in chemin[destination]) {
                    for (let destination3 of chemin[destination][destination2]) {
                        let arête = `${destination}-${destination3}`;
                        arêtesSuccessives[destination].add(arête);
                    }
                }
            }
        }
    }

    // Convertir les Sets en tableaux
    for (let key in arêtesSuccessives) {
        arêtesSuccessives[key] = [...arêtesSuccessives[key]];
    }

    return arêtesSuccessives;
}

function dessinerAretes(chemin, coord, couleur = "white", largeur = 15) {
    let arêtesDessinées = new Set();
    let groupe = 0;
    // Dessiner toutes les arêtes en blanc d'abord
    for (const [key, value] of Object.entries(chemin)) {
        const [xStart, yStart] = coord[key];
        for (const via in value) {
            value[via].forEach((destination, index) => {
                const [xEnd, yEnd] = coord[destination];
                const part1X = xStart + (xEnd - xStart) / 5;
                const part1Y = yStart + (yEnd - yStart) / 5;
                const part2X = xStart + 4 * (xEnd - xStart) / 5;
                const part2Y = yStart + 4 * (yEnd - yStart) / 5;
                const arête = `${key}-${destination}`;

                if (!arêtesDessinées.has(arête)) {
                    // Dessiner toute l'arête en blanc
                    ctx.beginPath();
                    ctx.moveTo(xStart, yStart);
                    ctx.lineTo(xEnd, yEnd);
                    ctx.strokeStyle = "white";
                    ctx.lineWidth = largeur - 5; // Largeur plus petite pour les arêtes blanches
                    ctx.stroke();

                    arêtesDessinées.add(arête);
                }
            });
        }
    }

    // Dessiner les arêtes colorées par-dessus
    arêtesDessinées.clear(); // Réinitialiser le set pour redessiner les arêtes colorées
    let arêtesColorées = couleur_possible(chemin);
    for (const [key, value] of Object.entries(chemin)) {
            if(!value['']){
            const [xStart, yStart] = coord[key];
            for (const via in value) {
                value[via].forEach((destination, index) => {
                    const [xEnd, yEnd] = coord[destination];
                    const part1X = xStart + (xEnd - xStart) / 5;
                    const part1Y = yStart + (yEnd - yStart) / 5;
                    const part2X = xStart + 4 * (xEnd - xStart) / 5;
                    const part2Y = yStart + 4 * (yEnd - yStart) / 5;
                    const arête = `${key}-${destination}`;

                    if (!arêtesDessinées.has(arête)) {
                        // Dessiner le premier cinquième de l'arête en couleur
                        ctx.beginPath();
                        ctx.moveTo(xStart, yStart);
                        ctx.lineTo(part1X, part1Y);
                        ctx.strokeStyle = couleur_edge[groupe];
                        ctx.lineWidth = largeur;
                        ctx.stroke();

                        arêtesDessinées.add(arête);
                    }
                });
                groupe=(groupe+1)%2;
            }
        }
    }
}

// Fonction pour dessiner le graphe avec le sommet de départ mis à jour
function sommet_acces(chemin, sommet, coord) {
    dessinerAretes(chemin, coord, couleur = "white", largeur = 15);
    for (let i = 0; i < arete_chemin.length; i++) {
        let [xs1, ys1, xs2, ys2] = arete_chemin[i]; // Déstructuration de l'arête
        ctx.beginPath();
        ctx.moveTo(xs1, ys1);
        ctx.lineTo(xs2, ys2);
        ctx.strokeStyle = liste_couleur_sol[compteur]; // Couleur correspondant à l'arête
        compteur++;
        ctx.lineWidth = 15; // Taille de la ligne
        ctx.stroke();
    }
    compteur = 0;
    
    let double=doublons(arete_chemin);
    for (let [xs1, ys1, xs2, ys2] of double) {
        // Calculer le centre de l'arc de cercle
        const midX = (xs1 + xs2) / 2; // Milieu des deux points
        const midY = (ys1 + ys2) / 2;
        
        // Calculer un rayon pour l'arc (par exemple, la moitié de la distance entre les deux points)
        const radius = Math.sqrt((xs2 - xs1) ** 2 + (ys2 - ys1) ** 2) / 2;
    
        // Calculer les angles pour l'arc (donc un arc d'un côté des points)
        const angleStart = Math.atan2(ys1 - midY, xs1 - midX); // Angle entre le centre et le point de départ
        const angleEnd = Math.atan2(ys2 - midY, xs2 - midX); // Angle entre le centre et le point de fin
    
        // Dessiner l'arc de cercle
        ctx.beginPath();
        ctx.arc(midX, midY, radius, angleStart, angleEnd, false); // false pour un arc dans le sens horaire
        ctx.strokeStyle =liste_couleur_sol[compteur]; // Arêtes rouges
        ctx.lineWidth = 15; // Largeur des arêtes rouges
        ctx.stroke();
        compteur++;
    }
    compteur=0;
    sommet_accessible=[];
    // Redessiner tous les sommets avec les couleurs appropriées
    for (const [key, value] of Object.entries(chemin)) {
        const [x, y] = coord[key];
        if (key === depart) {
            // Dessiner le sommet de départ en bleu
            drawVertices(x, y, 20, key, "#1E88E5");
        } else if (key === sommet) {
            // Dessiner le sommet actuel en jaune
            drawVertices(x, y, 20, key, "red");
        } else if (checkSommetInChemin(chemin, sommet, dernier_sommet, key)) {
            // Dessiner les sommets accessibles en vert
            drawVertices(x, y, 20, key, "green");
            sommet_accessible.push(key);
        } else {
            // // Dessiner les autres sommets en blanc
            // if(key===arrivee){
            //     if (endIcon.complete) {
            //         // Afficher l'image en dessous du sommet, de manière réduite
            //         const iconSize = 15; // Taille réduite de l'icône
            //         ctx.drawImage(endIcon, xStart - (iconSize / 2)-10, yStart-60,40, 40);
            //     }
            // }
            drawVertices(x, y, 20, key, "black");
        }
    }
}

function drawVertices(x, y, radius, label, color = "white") {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // Cercle du sommet
    ctx.fillStyle = color; // Couleur du sommet
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 7;
    ctx.stroke();

    // Texte du sommet
    ctx.fillStyle = "white";
    ctx.font = "bold 20px Roboto";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, x, y);
}


function doublons(L) {
    let D = [];  // Liste pour stocker les doublons inversés
    let doublonsTrouves = [];  // Liste pour suivre les indices des arêtes déjà traitées (éviter les doublons exacts)

    for (let i = 0; i < L.length; i++) {
        let [x1, y1, x2, y2] = L[i];  // Arête actuelle
        let doublonInverse = [x2, y2, x1, y1];  // Créer la version inversée de l'arête

        // Vérifier si l'arête inversée existe déjà dans les arêtes précédentes
        let estDoublonInverse = false;
        for (let j = 0; j < i; j++) {  // Vérification uniquement avant l'index actuel (donc après)
            // Comparer les arêtes, en tenant compte de l'ordre inverse
            if (
                (L[j][0] === doublonInverse[0] && L[j][1] === doublonInverse[1] && L[j][2] === doublonInverse[2] && L[j][3] === doublonInverse[3])
            ) {
                estDoublonInverse = true;
                break; // Si doublon inversé trouvé, sortir de la boucle
            }
        }

        // Si c'est un doublon inversé et que ce n'est pas un doublon exact
        if (estDoublonInverse && !doublonsTrouves.includes(i) && !doublonsTrouves.includes(L.findIndex(el => el[0] === x1 && el[1] === y1 && el[2] === x2 && el[3] === y2))) {
            D.push(L[i]);  // Ajouter l'arête inversée à la liste des doublons
            doublonsTrouves.push(i);  // Marquer cet index comme trouvé
        } else if (!doublonsTrouves.includes(i)) {
            // Ajouter l'arête à doublonsTrouves si elle n'a pas été marquée (pour éviter les doublons exacts)
            doublonsTrouves.push(i);
        }
    }

    return D;
}


function graph_rep(chemin, coord) {
    dessinerAretes(chemin, coord, couleur = "white", largeur = 15);
    for (let [xs1, ys1, xs2, ys2] of arete_chemin) {
        ctx.beginPath();
        ctx.moveTo(xs1, ys1);
        ctx.lineTo(xs2, ys2);
        ctx.strokeStyle = liste_couleur_sol[compteur];
        ctx.lineWidth = 15; 
        ctx.stroke();
        compteur++;
    }
    compteur=0;
    let double=doublons(arete_chemin);
    for (let [xs1, ys1, xs2, ys2] of double) {
        const midX = (xs1 + xs2) / 2; 
        const midY = (ys1 + ys2) / 2;
        
        const radius = Math.sqrt((xs2 - xs1) ** 2 + (ys2 - ys1) ** 2) / 2;
    
        const angleStart = Math.atan2(ys1 - midY, xs1 - midX); 
        const angleEnd = Math.atan2(ys2 - midY, xs2 - midX); 
    
        ctx.beginPath();
        ctx.arc(midX, midY, radius, angleStart, angleEnd, false);
        ctx.strokeStyle = liste_couleur_sol[compteur];
        ctx.lineWidth = 15; 
        compteur++;
        ctx.stroke();
    }
    compteur=0;
    
    for (const [key, value] of Object.entries(chemin)) {
        const [xStart, yStart] = coord[key];
        if (key === depart) {
            drawVertices(xStart, yStart, 20, key, "#1E88E5");
        }
        else if (key === arrivee) {
            if(!sommet_accessible.includes(key)){
                drawVertices(xStart, yStart, 20, key, "black");
            }
            else{
                drawVertices(xStart, yStart, 20, key, "green");
            }
            if (endIcon.complete) {
                const iconSize = 15; 
                ctx.drawImage(endIcon, xStart - (iconSize / 2)-10, yStart-60,40, 40);
            }
        } 
        else if(!sommet_accessible.includes(key)){
            drawVertices(xStart, yStart, 20, key, "black");
        }
        else{
            drawVertices(xStart, yStart, 20, key, "green");
        }
    }
}



function showTransitionTable(sommet, coord) {
    graph_rep(chemin,nodeCoordinates);
    const [x, y] = coord[sommet];
    ctx.fillStyle = "rgba(30, 30, 30, 0.6)"; 
    const boxWidth = 260;
    const boxHeight = 120;
    const marginTop = 20;
    const boxX = x + 25;
    const boxY = y - 70 - marginTop; 
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
    ctx.strokeStyle = "gold";
    ctx.lineWidth = 2;
    ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
    ctx.fillStyle = "white";
    ctx.font = "bold 20px Roboto";
    ctx.textAlign = "left";
    ctx.fillText(`Transitions pour ${sommet}:`, boxX + 10, boxY + 20);
    ctx.font = "18px Roboto";
    const transition = chemin[sommet];
    let textY = boxY + 40; 
    for (const [key, value] of Object.entries(transition)) {
        const lineText = `${key} -> ${value.join(", ")}`;
        ctx.fillText(lineText, boxX + 10, textY);
        textY += 20; 
    }
}

canvas.addEventListener('mousemove', (e) => { 
    const mouseX = e.clientX - canvas.offsetLeft;
    const mouseY = e.clientY - canvas.offsetTop;
    let isHovering = false;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    sommet_acces(chemin,depart,nodeCoordinates); 
    for (const [key, value] of Object.entries(nodeCoordinates)) {
        const [x, y] = value;
        const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

        if (distance <= 20) { 
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, 2 * Math.PI); 
            ctx.fillStyle = "rgba(255, 215, 0, 0.3)"; 
            ctx.fill();
            drawVertices(x, y, 20, key, "gold"); 
            showTransitionTable(key, nodeCoordinates);

            isHovering = true;
            break;
        }
    }

    if (!isHovering) {
        graph_rep(chemin,nodeCoordinates);
    }
});

// Exemple d'utilisation
let chemin1 = {
    A: { '': ['C'] },
    C: { 'A': ['D','E'],'E':['B','A'] },
    D: { 'C': ['E'],'E':['C'] },
    E: { 'D': ['C'], 'C': ['D'] },
    B: { 'E': [] }
};

let chemin2 = {
    A: { '': ['C', 'D', 'B'] },
    B: { 'A': ['E', 'C', 'D'], 'C': ['A', 'E', 'D'] },
    C: { 'A': ['E', 'B', 'D'], 'B': ['A', 'E', 'D'], 'E': ['A', 'B', 'D'] },
    D: { 'C': ['A', 'B', 'E'], 'E': ['A', 'C', 'B'], 'A': ['C', 'E', 'B'] },
    E: { 'D': ['A', 'C', 'B'], 'C': ['A', 'B', 'D'], 'B': ['A', 'C', 'D'] }
};


function checkSommetInChemin(chemin, cle1, cle2, sommet) {
    // Vérifier si cle1 existe dans le dictionnaire chemin
    if (chemin[cle1]&&cle1!==arrivee) {
        // Vérifier si cle2 existe sous cle1
        if (chemin[cle1][cle2]) {
            // Vérifier si le sommet est présent dans le tableau chemin[cle1][cle2]
            if (chemin[cle1][cle2].includes(sommet)) {
                return true; // Le sommet est présent dans le chemin
            }
        }
    }
    return false; // Le sommet n'est pas dans le chemin
}






// Dessiner le graphe initial
var chemin=chemin2;
var nodeCoordinates = coordinates3;
soustraireUnRGB(25);
/*graph_rep(chemin, nodeCoordinates);*/
document.getElementById('choiceButton').addEventListener('click', choix_chemin);
canvas.addEventListener('click', (e) => {
    const mouseX = e.clientX - canvas.offsetLeft;
    const mouseY = e.clientY - canvas.offsetTop;

    for (const [key, value] of Object.entries(nodeCoordinates)) {
        const [x, y] = value;
        const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y + 20) ** 2);

        if (distance <= 40) { // Vérifie si le clic est dans le rayon du sommet (20 pixels)
            // Vérifier si le sommet est accessible
            if (checkSommetInChemin(chemin, depart,dernier_sommet,key) && depart !== key) {
                dernier_sommet = depart;
                list_dernier_sommet.push(dernier_sommet);
                depart = key; // Mettre à jour le sommet de départ
                cheminsParcourus.push(depart);
                arete_rouge(depart,dernier_sommet);
                sommet_acces(chemin, depart, nodeCoordinates);
                graph_rep(chemin, nodeCoordinates);
            } else if (depart === arrivee) {
                canvas.style.pointerEvents = 'none'; // Désactive les événements de la souris
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface l'écran
            
                // Paramètres de l'animation
                let alpha = 1; // Opacité initiale
                let scale = 1; // Échelle initiale
                let text = "Bravo!!!"; // Texte de félicitations
                let angle = 0; // Angle de rotation pour le texte
                let confettiCount = 100; // Nombre de confettis
                let confettiArray = []; // Tableau pour les confettis
                // Créer les confettis
                for (let i = 0; i < confettiCount; i++) {
                    confettiArray.push(new Confetti(Math.random() * canvas.width, Math.random() * canvas.height));
                }
            
                // Animation de victoire
                let victoryAnimating = true;
            
                function animateVictory() {
                    if (!victoryAnimating) return;
            
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
            
                    // Dessiner l'arrière-plan avec une couleur changeante
                    ctx.fillStyle = `rgba(0, 128, 0, ${alpha})`; // Vert translucide pour l'arrière-plan
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
            
                    // Animer les confettis
                    confettiArray.forEach(confetti => {
                        confetti.update();
                        confetti.draw();
                    });
            
                    // Animer le texte "Bravo!!!"
                    ctx.save();
                    ctx.translate(canvas.width / 2, canvas.height / 2);
                    ctx.rotate(angle); // Faire tourner le texte
                    ctx.font = `${scale * 40}px 'Arial'`;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`; // Texte en jaune avec opacité
            
                    // Dessiner le texte avec une animation de rotation
                    ctx.fillText(text, 0, 0);
                    ctx.restore();
            
                    // Modifier l'opacité et la taille du texte pour l'animation
                    alpha -= 0.01; // Réduire l'opacité
                    scale += 0.05; // Augmenter l'échelle
                    angle += 0.1; // Rotation continue
            
                    // Réduire la vitesse d'animation pour un effet plus fluide
                    if (alpha <= 0) {
                        victoryAnimating = false; // Arrêter l'animation lorsque l'opacité atteint 0
                    }
                }
            
                // Lancer l'animation de victoire
                let victoryInterval = setInterval(animateVictory, 30);
                return; // Sortir immédiatement pour éviter de redessiner le graphique après l'animation
            }
            

            // Toujours redessiner le graphe après un clic si ce n'est pas la victoire
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            sommet_acces(chemin, key, nodeCoordinates);
            graph_rep(chemin, nodeCoordinates);
            break;
        }
    }
});


