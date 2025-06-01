# Representation du graphe de Martin Gardner et génération de graphe

Ce projet JavaScript regroupe deux composants distincts : une animation de confettis pour célébrer la fin d'un jeu, et la définition des coordonnées et des transitions d'un graphe inspiré du célèbre problème de Martin Gardner.

## 🎇 Animation de Fin de Jeu (Confetti)
Le fichier contient une classe Confetti simple mais efficace, conçue pour créer une animation de confettis tombants.


## 🧭 Graphe de Martin Gardner
Ce code définit un graphe complexe avec ses coordonnées et ses règles de transition. Il est potentiellement utilisé pour un jeu de cheminement ou une simulation basée sur les problèmes de graphe de Martin Gardner.

### Variables Principales
Coordinates: Un objet JavaScript qui mappe des identifiants de nœuds (comme A, B, a1, a2, etc.) à leurs positions [x, y] sur un canvas.
A: [680.0, 1360.68]
B: [550.477, 585]
... et de nombreux autres points a1 à a121.
table_transition: Un objet définissant les règles de transition entre les nœuds du graphe. Pour chaque nœud d'origine, il spécifie les nœuds de destination possibles, potentiellement en fonction du "dernier nœud" visité (label).
Exemple: 'A': {'': ['a1', 'a3', 'a4'], 'a1': ['a3', 'a4'], ...}
table_transition_direction: Similaire à table_transition, mais inclut également une indication de direction ("tout droit", "gauche", "droite") pour chaque transition possible, ce qui peut être utile pour la navigation dans un jeu ou une interface utilisateur.
Exemple: A: [ [ 'a1', 'tout droit' ], [ 'a3', 'gauche' ], [ 'a4', 'tout droit' ] ]
### Fonctionnalités Associées
canvas, ctx: Références au canvas HTML et à son contexte de dessin 2D, indiquant que le graphe est destiné à être visualisé.
Variables de Jeu / État:
depart, arrivee: Les nœuds de départ et d'arrivée ('A' et 'B' par défaut).
graphVisible: Un booléen pour contrôler la visibilité du graphe.
cheminsParcourus, dernier_sommet, arete_chemin, list_dernier_sommet: Variables pour suivre l'état actuel du chemin parcouru.
endIcon: Une image (potentiellement un icône de fin de jeu) dont la source est définie.
couleur_sol, compteur, liste_couleur_sol, sommet_accessible, taille_arete, palette: Variables pour la gestion des couleurs, du comptage et des états du jeu.
findAllPaths(graph, startNode, maxDepth): Une fonction de recherche en profondeur (dfs) qui explore tous les chemins possibles à partir d'un startNode dans un graph, jusqu'à une maxDepth spécifiée. Cette fonction est cruciale pour la logique de jeu ou d'analyse du graphe.

### Comment ça marche
Pour afficher le graphe souhaité, vous devrez modifier le fichier Jeu.js.

Afficher le Graphe de Martin Gardner
Si vous souhaitez représenter le graphe de Martin Gardner, rendez-vous à la ligne 2620 de Jeu.js et insérez les lignes suivantes :
```
var chemin = table_transition; // table de transitions
var chemin1 = table_transition_direction; // table de directions
var nodeCoordinates = Coordinates; // coordonnées des sommets
```
Générer un Nouveau Graphe
Pour générer un graphe dynamique (en utilisant les variables retournées par generateComplexTransitionTableWithCoordinates), remplacez les lignes ci-dessus par :

JavaScript
```
var chemin = transitionTable; // table de transitions
var chemin1 = c6Table; // table de directions
var nodeCoordinates = coordinates; // coordonnées des sommets
```
Dépendances / Prérequis
Un élément <canvas> dans votre HTML avec l'ID gameCanvas.
L'image https://cdn-icons-png.flaticon.com/512/985/985802.png pour l'icône de fin.