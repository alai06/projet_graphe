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
var couleur_edge = ["red", "blue"/* , "green", "purple", "orange", "brown", "cyan", "magenta", "yellow", "pink" */];
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

        // Ajoutez les autres sommets ici en suivant le même format 
    
        let t3 =  {
            'A': {
                '': ['a1', 'a3', 'a4'],
                'a1': ['a3', 'a4'],
                'a3': ['a1', 'a4'],
                'a4': ['a1', 'a3'],
            },
            'a1': {
                'A': ['a2', 'a19'],
                'a2': ['A'],
                'a19': ['A']
            },
            'a2': {
                'a1': ['a3', 'a5'],
                'a3': ['a1'],
                'a5': ['a1']
            },
            'a3': {
                'A': ['a2'],
                'a2': ['a3', 'a8'],
                'a8': ['a2']
            },
            'a4': {
                'A': ['a9', 'a10'],
                'a9': ['A'],
                'a10': ['A']
            },
            'a5': {
                'a2': ['a6', 'a7'],
                'a6': ['a2'],
                'a7': ['a2']
            },
            'a6': {
                'a5': ['a119', 'a11'],
                'a119': ['a5'],
                'a11': ['a5']
            },
            'a7': {
                'a5': ['a12', 'a11'],
                'a12': ['a5'],
                'a11': ['a5']
            },
            'a8': {
                'a3': ['a9'],
                'a9': ['a3','a13'],
                'a13': ['a9']
            },
            'a9': {
                'a4': ['a8'],
                'a8': ['a4', 'a14'],
                'a14': ['a8']
            },
            'a10': {
                'a4': ['a16'],
                'a16': ['a4', 'a17'],
                'a17': ['a16']
            },
            'a11': {
                'a6': ['a7'],
                'a7': ['a6', 'a18'],
                'a18': ['a7']
            },
            'a12': {
                'a7': ['a19', 'a20'],
                'a19': ['a7'],
                'a20': ['a7']
            },
            'a13': {
                'a8': ['a22'],
                'a21': ['a22'],
                'a22': ['a8', 'a21']
            },
            'a14': {
                'a9': ['a15'],
                'a15': ['a9', 'a23'],
                'a23': ['a15']
            },
            'a15': {
                'a14': ['a16'],
                'a16': ['a14', 'a24'],
                'a24': ['a16']
            },
            'a16': {
                'a10': ['a25'],
                'a15': ['a25'],
                'a25': ['a15', 'a10']
            },
            'a17': {
                'a10': ['a25', 'a26'],
                'a25': ['a10'],
                'a26': ['a10']
            },
            'a18': {
                'a11': ['a20', 'a27'],
                'a20': ['a11'],
                'a27': ['a11']
            },
            'a19': {
                'a1': ['a12'],
                'a12': ['a1', 'a26'],
                'a26': ['a12']
            },
            'a20': {
                'a12': ['a18'],
                'a18': ['a12', 'a28'],
                'a28': ['a18']
            },
            'a21': {
                'a13': ['a30'],
                'a29': ['a30'],
                'a30': ['a13', 'a29']
            },
            'a22': {
                'a13': ['a32'],
                'a31': ['a32'],
                'a32': ['a13', 'a31']
            },
            'a23': {
                'a14': ['a33', 'a34'],
                'a33': ['a14'],
                'a34': ['a14']
            },
            'a24': {
                'a15': ['a35'],
                'a35': ['a15', 'a36'],
                'a36': ['a35']
            },
            'a25': {
                'a16': ['a37'],
                'a17': ['a37'],
                'a37': ['a16', 'a17']
            },
            'a26': {
                'a17': ['a38','a19'],
                'a19': ['a17'],
                'a38': ['a17']
            },
            'a27': {
                'a18': ['a39'],
                'a28': ['a39'],
                'a39': ['a18', 'a28']
            },
            'a28': {
                'a20': ['a38'],
                'a27': ['a38'],
                'a38': ['a20', 'a27']
            },
            'a29': {
                'a21': ['a40'],
                'a31': ['a40'],
                'a40': ['a21', 'a31']
            },
            'a30': {
                'a21': ['a40', 'a41'],
                'a40': ['a21'],
                'a41': ['a21']
            },
            'a31': {
                'a22': ['a29', 'a42'],
                'a29': ['a22'],
                'a42': ['a22']
            },
            'a32': {
                'a119': ['a22'],
                'a22': ['a119', 'a43'],
                'a43': ['a22']
            },
            'a33': {
                'a23': ['a44'],
                'a44': ['a23', 'a45'],
                'a45': ['a44']
            },
            'a34': {
                'a23': ['a46'],
                'a45': ['a46'],
                'a46': ['a23', 'a45']
            },
            'a35': {
                'a46': ['a24'],
                'a24': ['a68','a46'],
                'a68': ['a24']
            },
            'a36': {
                'a24': ['a48'],
                'a47': ['a48'],
                'a48': ['a24', 'a47']
            },
            'a37': {
                'a25': ['a48', 'a49'],
                'a48': ['a25'],
                'a49': ['a25']
            },
            'a38': {
                'a26': ['a49'],
                'a28': ['a49'],
                'a49': ['a26', 'a28']
            },
            'a39': {
                'a27': ['a48', 'a49'],
                'a48': ['a27'],
                'a49': ['a27']
            },
            'a40': {
                'a29': ['a50'],
                'a30': ['a50'],
                'a50': ['a29', 'a30']
            },
            'a41': {
                'a30': ['a51', 'a52'],
                'a51': ['a30'],
                'a52': ['a30']
            },
            'a42': {
                'a54': ['a31'],
                'a31': ['a89','a54'],
                'a89': ['a31']
            },
            'a43': {
                'a32': ['a54'],
                'a53': ['a54'],
                'a54': ['a32', 'a53']
            },
            'a44': {
                'a33': ['a55'],
                'a55': ['a33', 'a56'],
                'a56': ['a55']
            },
            'a45': {
                'a33': ['a57'],
                'a34': ['a57'],
                'a57': ['a33', 'a34']
            },
            'a46': {
                'a34': ['a35', 'a58'],
                'a35': ['a34'],
                'a58': ['a34']
            },
            'a47': {
                'a24': ['a48'],
                'a47': ['a48'],
                'a48': ['a24', 'a47']
            },
            'a48': {
                'a36': ['a37','a39'],
                'a37': ['a36'],
                'a39': ['a36']
            },
            'a49': {
                'a37': ['a38'],
                'a38': ['a37', 'a39'],
                'a39': ['a38']
            },
            'a50': {
                'a40': ['a61', 'a62'],
                'a61': ['a40'],
                'a62': ['a40']
            },
            'a51': {
                'a41': ['a63', 'a64'],
                'a63': ['a41','a51'],
                'a52': ['a63']
            },
          'a52': {
                'a41': ['a56'],
                'a51': ['a56'],
                'a56': ['a41','a51']
            },
            'a53': {
                'a119': ['a64'],
                'a43': ['a64'],
                'a64': ['a119','a43']
            },
            'a54': {
                'a42': ['a43','a65'],
                'a43': ['a42'],
                'a65': ['a42']
            },
            'a55': {
                'a44': ['a57'],
                'a57': ['a44','a66'],
                'a66': ['a57']
            },
            'a56': {
                'a44': ['a67'],
                'a52': ['a67'],
                'a67': ['a44','a52']
            },
            'a57': {
                'a45': ['a58'],
                'a55': ['a58'],
                'a58': ['a45','a55']
            },
            'a58': {
                'a46': ['a57'],
                'a57': ['a68','a46'],
                'a68': ['a57']
            },
            'a59': {
                'a47': ['a69'],
                'a68': ['a69'],
                'a69': ['a47','a68']
            },
            'a60': {
                'a47': ['a70'],
                'a69': ['a70'],
                'a70': ['a47','a69']
            },
            'a61': {
                'a50': ['a72'],
                'a71': ['a72'],
                'a72': ['a50','a71']
            },
            'a62': {
                'a50': ['a63'],
                'a63': ['a50','a73'],
                'a73': ['a63']
            },
            'a63': {
                'a51': ['a62','a74'],
                'a62': ['a51'],
                'a74': ['a51']
            },
            'a64': {
                'a53': ['a75','a76'],
                'a75': ['a53'],
                'a76': ['a53']
            },
            'a65': {
                'a54': ['a75','a77'],
                'a75': ['a54'],
                'a77': ['a54']
            },
            'a66': {
                'a55': ['a79'],
                'a78': ['a79'],
                'a79': ['a78','a55']
            },
            'a67': {
                'a56': ['a120','a80'],
                'a120': ['a56'],
                'a80': ['a56']
            },
            'a68': {
                'a35': ['a59'],
                'a58': ['a59'],
                'a59': ['a35','a58','a81'],
                'a81': ['a59']
            },
            'a69': {
                'a59': ['a82'],
                'a60': ['a82'],
                'a82': ['a59','a60']
            },
            'a70': {
                'a60': ['a82'],
                'a82': ['a60','a83'],
                'a83': ['a82']
            },
            'a71': {
                'a84': ['a73','a61'],
                'a61': ['a84'],
                'a73': ['a84']
            },
            'a72': {
                'a61': ['a85','a86'],
                'a85': ['a61'],
                'a86': ['a61']
            },
            'a73': {
                'a71': ['a74','a62'],
                'a62': ['a71'],
                'a74': ['a71']
            },
            'a74': {
                'a63': ['a80'],
                'a73': ['a80'],
                'a80': ['a63','a73']
            },
            'a75': {
                'a64': ['a65'],
                'a65': ['a64','a87'],
                'a87': ['a65']
            },
            'a76': {
                'a64': ['a88'],
                'a87': ['a88'],
                'a88': ['a64','a84']
            },
            'a77': {
                'a65': ['a86'],
                'a86': ['a65','a89'],
                'a89': ['a86']
            },
            'a78': {
                'a66': ['a121','a90'],
                'a121': ['a66'],
                'a90': ['a66']
            },
            'a79': {
                'a66': ['a81','a91'],
                'a81': ['a66'],
                'a91': ['a66']
            },
            'a80': {
                'a74': ['a92','a67'],
                'a67': ['a74'],
                'a92': ['a74']
            },
            'a81': {
                'a68': ['a79','a82'],
                'a79': ['a68'],
                'a82': ['a68']
            },
            'a82': {
                'a69': ['a70','a81'],
                'a70': ['a69'],
                'a81': ['a69']
            },
            'a83': {
                'a70': ['a93'],
                'a91': ['a93'],
                'a93': ['a70','a91']
            },
            'a84': {
                'a71': ['a87'],
                'a87': ['a71','a94'],
                'a94': ['a87']
            },
            'a85': {
                'a72': ['a89'],
                'a86': ['a89'],
                'a89': ['a72','a86']
            },
            'a86': {
                'a72': ['a77'],
                'a77': ['a72','a85'],
                'a85': ['a77']
            },
            'a87': {
                'a75': ['a84'],
                'a76': ['a84'],
                'a84': ['a75','a76']
            },
            'a88': {
                'a76': ['a94'],
                'a94': ['a76','a95'],
                'a95': ['a94']
            },
            'a121': {
                'a78': ['a96','a120'],
                'a120': ['a78'],
                'a96': ['a78']
            },
            'a90': {
                'a78': ['a91','a93'],
                'a91': ['a78'],
                'a93': ['a78']
            },
            'a91': {
                'a79': ['a90'],
                'a83': ['a90'],
                'a90': ['a79','a83']
            },
            'a92': {
                'a80': ['a97'],
                'a97': ['a80','a100'],
                'a100': ['a97']
            },
            'a93': {
                'a83': ['a90'],
                'a90': ['a83','a99'],
                'a99': ['a90']
            },
            'a94': {
                'a84': ['a88','a100'],
                'a88': ['a84'],
                'a100': ['a84']
            },
            'a95': {
                'a88': ['a101'],
                'a101': ['a88','a102'],
                'a102': ['a101']
            },
            'a96': {
                'B': ['a89','a103'],
                'a89': ['B'],
                'a103': ['B']
            },
            'a97': {
                'a120': ['a92'],
                'a92': ['a120','a104'],
                'a104': ['a92']
            },
            'a98': {
                'a100': ['a102'],
                'a102': ['a100','a104'],
                'a104': ['a102']
            },
            'a99': {
                'a93': ['a103','a105'],
                'a103': ['a93'],
                'a105': ['a93']
            },
            'a100': {
                'a94': ['a98'],
                'a98': ['a94']
            },
            'a101': {
                'a95': ['a106','a107'],
                'a106': ['a95'],
                'a107': ['a95']
            },
            'a102': {
                'a95': ['a108'],
                'a98': ['a108'],
                'a108': ['a95','a98']
            },
            'a103': {
                'a96': ['a109'],
                'a99': ['a109'],
                'a109': ['a96','a99']
            },
            'a104': {
                'a97': ['a98'],
                'a98': ['a97','a110','a111'],
                'a110': ['a98'],
                'a111': ['a98']
            },
            'a105': {
                'a99': ['a112'],
                'a109': ['a112'],
                'a112': ['a99','a109']
            },
            'a106': {
                'a108': ['a113','a101'],
                'a101': ['a108'],
                'a113': ['a108']
            },
            'a107': {
                'a101': ['a112'],
                'a112': ['a101','a113'],
                'a113': ['a112']
            },
            'a108': {
                'a102': ['a106','a110'],
                'a106': ['a102'],
                'a110': ['a102']
            },
            'a109': {
                'a103': ['a114'],
                'a105': ['a114'],
                'a114': ['a103','a105']
            },
            'a110': {
                'a104': ['a108','a115'],
                'a108': ['a104'],
                'a115': ['a104']
            },
            'a111': {
                'B': ['a116','a104'],
                'a116': ['B'],
                'a104': ['B']
            },
            'a112': {
                'a105': ['a107','a117','a118'],
                'a107': ['a105'],
                'a117': ['a105'],
                'a118': ['a105']
            },
            'a113': {
                'a106': ['a107'],
                'a107': ['a106','a106'],
                'a115': ['a107']
            },
            'a114': {
                'B': ['a118'],
                'a109': ['a118'],
                'a118': ['B','a109']
            },
            'a115': {
                'a110': ['a113'],
                'a113': ['a110','a117'],
                'a117': ['a113']
            },
            'a116': {
                'a111': ['a117','a118'],
                'a117': ['a111'],
                'a118': ['a111']
            },
            'a117': {
                'a112': ['a115','a116'],
                'a115': ['a112'],
                'a116': ['a112']
            },
            'a118': {
                'a112': ['a114'],
                'a114': ['a112','a116'],
                'a116': ['a114']
            },
            'a119': {
                'a6': ['a53'],
                'a53': ['a6','a32'],
                'a32': ['a53']
            },
            'a120': {
                'a121': ['a97','a67'],
                'a67': ['a121'],
                'a97': ['a121']
            },
            'a89':{
                'a85': ['a42','a77'],
                'a42': ['a85'],
                'a77': ['a85']
            },
            'B': {
                'a96':['a111'],
                'a111':['a96','a114'],
                'a114':['a111']
            }
    
        };

    let t3_b ={
        A: [
          [ 'a1', 'tout droit' ],
          [ 'a3', 'gauche' ],
          [ 'a4', 'tout droit' ]
        ],
        a1: [ [ 'A', 'tout droit' ], [ 'a2', 'droite' ], [ 'a19', 'tout droit' ] ],
        a2: [ [ 'a1', 'gauche' ], [ 'a3', 'droite' ], [ 'a5', 'tout droit' ] ],
        a3: [ [ 'A', 'droite' ], [ 'a2', 'gauche' ], [ 'a8', 'tout droit' ] ],
        a4: [
          [ 'A', 'tout droit' ],
          [ 'a9', 'gauche' ],
          [ 'a10', 'tout droit' ]
        ],
        a5: [
          [ 'a2', 'tout droit' ],
          [ 'a6', 'tout droit' ],
          [ 'a7', 'gauche' ]
        ],
        a6: [
          [ 'a5', 'tout droit' ],
          [ 'a119', 'tout droit' ],
          [ 'a11', 'gauche' ]
        ],
        a7: [
          [ 'a5', 'droite' ],
          [ 'a12', 'tout droit' ],
          [ 'a11', 'tout droit' ]
        ],
        a8: [
          [ 'a3', 'tout droit' ],
          [ 'a9', 'tout droit' ],
          [ 'a13', 'tout droit' ]
        ],
        a9: [
          [ 'a4', 'droite' ],
          [ 'a8', 'tout droit' ],
          [ 'a14', 'tout droit' ]
        ],
        a10: [
          [ 'a4', 'tout droit' ],
          [ 'a16', 'droite' ],
          [ 'a17', 'tout droit' ]
        ],
        a11: [ [ 'a6', 'droite' ], [ 'a7', 'tout droit' ], [ 'a18', 'gauche' ] ],
        a12: [
          [ 'a7', 'tout droit' ],
          [ 'a19', 'tout droit' ],
          [ 'a20', 'tout droit' ]
        ],
        a13: [
          [ 'a8', 'tout droit' ],
          [ 'a21', 'tout droit' ],
          [ 'a22', 'tout droit' ]
        ],
        a14: [
          [ 'a9', 'tout droit' ],
          [ 'a15', 'tout droit' ],
          [ 'a23', 'droite' ]
        ],
        a15: [
          [ 'a14', 'tout droit' ],
          [ 'a16', 'tout droit' ],
          [ 'a24', 'tout droit' ]
        ],
        a16: [
          [ 'a10', 'gauche' ],
          [ 'a15', 'tout droit' ],
          [ 'a25', 'tout droit' ]
        ],
        a17: [
          [ 'a10', 'tout droit' ],
          [ 'a25', 'tout droit' ],
          [ 'a26', 'tout droit' ]
        ],
        a18: [
          [ 'a11', 'droite' ],
          [ 'a20', 'tout droit' ],
          [ 'a27', 'tout droit' ]
        ],
        a19: [
          [ 'a1', 'tout droit' ],
          [ 'a12', 'tout droit' ],
          [ 'a26', 'tout droit' ]
        ],
        a20: [
          [ 'a12', 'tout droit' ],
          [ 'a18', 'tout droit' ],
          [ 'a28', 'tout droit' ]
        ],
        a21: [
          [ 'a13', 'tout droit' ],
          [ 'a29', 'droite' ],
          [ 'a30', 'tout droit' ]
        ],
        a22: [
          [ 'a13', 'tout droit' ],
          [ 'a31', 'tout droit' ],
          [ 'a32', 'tout droit' ]
        ],
        a23: [
          [ 'a14', 'gauche' ],
          [ 'a33', 'tout droit' ],
          [ 'a34', 'tout droit' ]
        ],
        a24: [
          [ 'a15', 'tout droit' ],
          [ 'a35', 'tout droit' ],
          [ 'a36', 'tout droit' ]
        ],
        a25: [
          [ 'a16', 'tout droit' ],
          [ 'a17', 'tout droit' ],
          [ 'a37', 'tout droit' ]
        ],
        a26: [
          [ 'a17', 'tout droit' ],
          [ 'a19', 'tout droit' ],
          [ 'a38', 'gauche' ]
        ],
        a27: [
          [ 'a18', 'tout droit' ],
          [ 'a28', 'droite' ],
          [ 'a39', 'tout droit' ]
        ],
        a28: [
          [ 'a20', 'tout droit' ],
          [ 'a27', 'gauche' ],
          [ 'a38', 'tout droit' ]
        ],
        a29: [
          [ 'a21', 'gauche' ],
          [ 'a31', 'tout droit' ],
          [ 'a40', 'tout droit' ]
        ],
        a30: [
          [ 'a21', 'tout droit' ],
          [ 'a40', 'tout droit' ],
          [ 'a41', 'tout droit' ]
        ],
        a31: [
          [ 'a22', 'tout droit' ],
          [ 'a29', 'tout droit' ],
          [ 'a42', 'tout droit' ]
        ],
        a32: [
          [ 'a119', 'tout droit' ],
          [ 'a22', 'tout droit' ],
          [ 'a43', 'droite' ]
        ],
        a33: [
          [ 'a23', 'tout droit' ],
          [ 'a44', 'droite' ],
          [ 'a45', 'tout droit' ]
        ],
        a34: [
          [ 'a23', 'tout droit' ],
          [ 'a45', 'droite' ],
          [ 'a46', 'tout droit' ]
        ],
        a35: [
          [ 'a46', 'tout droit' ],
          [ 'a24', 'tout droit' ],
          [ 'a68', 'tout droit' ]
        ],
        a36: [
          [ 'a24', 'tout droit' ],
          [ 'a47', 'tout droit' ],
          [ 'a48', 'tout droit' ]
        ],
        a37: [
          [ 'a25', 'tout droit' ],
          [ 'a48', 'tout droit' ],
          [ 'a49', 'droite' ]
        ],
        a38: [
          [ 'a26', 'droite' ],
          [ 'a28', 'tout droit' ],
          [ 'a49', 'tout droit' ]
        ],
        a39: [
          [ 'a27', 'tout droit' ],
          [ 'a48', 'tout droit' ],
          [ 'a49', 'tout droit' ]
        ],
        a40: [
          [ 'a29', 'tout droit' ],
          [ 'a30', 'tout droit' ],
          [ 'a50', 'tout droit' ]
        ],
        a41: [
          [ 'a30', 'tout droit' ],
          [ 'a51', 'tout droit' ],
          [ 'a52', 'tout droit' ]
        ],
        a42: [
          [ 'a54', 'tout droit' ],
          [ 'a31', 'tout droit' ],
          [ 'a89', 'tout droit' ]
        ],
        a43: [
          [ 'a32', 'gauche' ],
          [ 'a53', 'tout droit' ],
          [ 'a54', 'tout droit' ]
        ],
        a44: [
          [ 'a33', 'gauche' ],
          [ 'a55', 'tout droit' ],
          [ 'a56', 'tout droit' ]
        ],
        a45: [
          [ 'a33', 'tout droit' ],
          [ 'a34', 'gauche' ],
          [ 'a57', 'tout droit' ]
        ],
        a46: [
          [ 'a34', 'tout droit' ],
          [ 'a35', 'tout droit' ],
          [ 'a58', 'tout droit' ]
        ],
        a47: [
          [ 'a24', 'tout droit' ],
          [ 'a36', 'tout droit' ],
          [ 'a48', 'tout droit' ]
        ],
        a48: [
          [ 'a36', 'tout droit' ],
          [ 'a37', 'tout droit' ],
          [ 'a39', 'tout droit' ]
        ],
        a49: [
          [ 'a37', 'gauche' ],
          [ 'a38', 'tout droit' ],
          [ 'a39', 'tout droit' ]
        ],
        a50: [
          [ 'a40', 'tout droit' ],
          [ 'a61', 'tout droit' ],
          [ 'a62', 'tout droit' ]
        ],
        a51: [
          [ 'a41', 'tout droit' ],
          [ 'a63', 'tout droit' ],
          [ 'a52', 'tout droit' ]
        ],
        a52: [
          [ 'a41', 'tout droit' ],
          [ 'a51', 'tout droit' ],
          [ 'a56', 'tout droit' ]
        ],
        a53: [
          [ 'a119', 'tout droit' ],
          [ 'a43', 'tout droit' ],
          [ 'a64', 'tout droit' ]
        ],
        a54: [
          [ 'a42', 'tout droit' ],
          [ 'a43', 'tout droit' ],
          [ 'a65', 'tout droit' ]
        ],
        a55: [
          [ 'a44', 'tout droit' ],
          [ 'a57', 'tout droit' ],
          [ 'a66', 'droite' ]
        ],
        a56: [
          [ 'a44', 'tout droit' ],
          [ 'a52', 'tout droit' ],
          [ 'a67', 'tout droit' ]
        ],
        a57: [
          [ 'a45', 'tout droit' ],
          [ 'a55', 'tout droit' ],
          [ 'a58', 'tout droit' ]
        ],
        a58: [
          [ 'a46', 'tout droit' ],
          [ 'a57', 'tout droit' ],
          [ 'a68', 'tout droit' ]
        ],
        a59: [
          [ 'a47', 'tout droit' ],
          [ 'a68', 'tout droit' ],
          [ 'a69', 'tout droit' ]
        ],
        a60: [
          [ 'a47', 'droite' ],
          [ 'a69', 'droite' ],
          [ 'a70', 'gauche' ]
        ],
        a61: [
          [ 'a50', 'tout droit' ],
          [ 'a71', 'tout droit' ],
          [ 'a72', 'tout droit' ]
        ],
        a62: [
          [ 'a50', 'tout droit' ],
          [ 'a63', 'tout droit' ],
          [ 'a73', 'tout droit' ]
        ],
        a63: [
          [ 'a51', 'tout droit' ],
          [ 'a62', 'tout droit' ],
          [ 'a74', 'droite' ]
        ],
        a64: [ [ 'a53', 'tout droit' ], [ 'a75', 'droite' ], [ 'a76', 'droite' ] ],
        a65: [
          [ 'a54', 'tout droit' ],
          [ 'a75', 'tout droit' ],
          [ 'a77', 'tout droit' ]
        ],
        a66: [
          [ 'a55', 'gauche' ],
          [ 'a78', 'tout droit' ],
          [ 'a79', 'tout droit' ]
        ],
        a67: [
          [ 'a56', 'tout droit' ],
          [ 'a120', 'tout droit' ],
          [ 'a80', 'gauche' ]
        ],
        a68: [
          [ 'a35', 'tout droit' ],
          [ 'a58', 'tout droit' ],
          [ 'a59', 'tout droit' ],
          [ 'a81', 'tout droit' ]
        ],
        a69: [
          [ 'a59', 'tout droit' ],
          [ 'a60', 'gauche' ],
          [ 'a82', 'tout droit' ]
        ],
        a70: [
          [ 'a60', 'droite' ],
          [ 'a82', 'tout droit' ],
          [ 'a83', 'tout droit' ]
        ],
        a71: [
          [ 'a84', 'tout droit' ],
          [ 'a61', 'tout droit' ],
          [ 'a73', 'tout droit' ]
        ],
        a72: [
          [ 'a61', 'tout droit' ],
          [ 'a85', 'tout droit' ],
          [ 'a86', 'tout droit' ]
        ],
        a73: [
          [ 'a71', 'tout droit' ],
          [ 'a62', 'tout droit' ],
          [ 'a74', 'tout droit' ]
        ],
        a74: [
          [ 'a63', 'gauche' ],
          [ 'a73', 'tout droit' ],
          [ 'a80', 'tout droit' ]
        ],
        a75: [ [ 'a64', 'gauche' ], [ 'a65', 'tout droit' ], [ 'a87', 'droite' ] ],
        a76: [ [ 'a64', 'gauche' ], [ 'a87', 'tout droit' ], [ 'a88', 'droite' ] ],
        a77: [
          [ 'a65', 'tout droit' ],
          [ 'a86', 'droite' ],
          [ 'a89', 'gauche' ]
        ],
        a78: [
          [ 'a66', 'tout droit' ],
          [ 'a121', 'tout droit' ],
          [ 'a90', 'tout droit' ]
        ],
        a79: [
          [ 'a66', 'tout droit' ],
          [ 'a81', 'tout droit' ],
          [ 'a91', 'tout droit' ]
        ],
        a80: [
          [ 'a74', 'tout droit' ],
          [ 'a67', 'droite' ],
          [ 'a92', 'tout droit' ]
        ],
        a81: [
          [ 'a68', 'tout droit' ],
          [ 'a79', 'tout droit' ],
          [ 'a82', 'tout droit' ]
        ],
        a82: [
          [ 'a69', 'tout droit' ],
          [ 'a70', 'tout droit' ],
          [ 'a81', 'tout droit' ]
        ],
        a83: [
          [ 'a70', 'tout droit' ],
          [ 'a91', 'droite' ],
          [ 'a93', 'tout droit' ]
        ],
        a84: [
          [ 'a71', 'tout droit' ],
          [ 'a87', 'tout droit' ],
          [ 'a94', 'tout droit' ]
        ],
        a85: [
          [ 'a72', 'tout droit' ],
          [ 'a86', 'tout droit' ],
          [ 'a89', 'tout droit' ]
        ],
        a86: [
          [ 'a72', 'tout droit' ],
          [ 'a77', 'gauche' ]
        ],
        a87: [
          [ 'a75', 'gauche' ],
          [ 'a76', 'tout droit' ],
          [ 'a84', 'tout droit' ]
        ],
        a88: [ [ 'a76', 'gauche' ], [ 'a94', 'tout droit' ], [ 'a95', 'droite' ] ],
        a89: [
          [ 'a85', 'tout droit' ],
          [ 'a77', 'droite' ],
          [ 'a42', 'tout droit' ]
        ],
        a90: [
          [ 'a78', 'tout droit' ],
          [ 'a91', 'tout droit' ],
          [ 'a93', 'tout droit' ]
        ],
        a91: [
          [ 'a79', 'tout droit' ],
          [ 'a83', 'gauche' ],
          [ 'a90', 'tout droit' ]
        ],
        a92: [
          [ 'a80', 'tout droit' ],
          [ 'a97', 'tout droit' ],
          [ 'a100', 'droite' ]
        ],
        a93: [
          [ 'a83', 'tout droit' ],
          [ 'a90', 'tout droit' ],
          [ 'a99', 'tout droit' ]
        ],
        a94: [
          [ 'a84', 'tout droit' ],
          [ 'a88', 'tout droit' ],
          [ 'a100', 'tout droit' ]
        ],
        a95: [
          [ 'a88', 'gauche' ],
          [ 'a101', 'tout droit' ],
          [ 'a102', 'tout droit' ]
        ],
        a96: [
          [ 'B', 'tout droit' ],
          [ 'a121', 'tout droit' ],
          [ 'a103', 'gauche' ]
        ],
        a97: [
          [ 'a120', 'tout droit' ],
          [ 'a92', 'tout droit' ],
          [ 'a104', 'tout droit' ]
        ],
        a98: [
          [ 'a100', 'tout droit' ],
          [ 'a102', 'droite' ],
          [ 'a104', 'tout droit' ]
        ],
        a99: [
          [ 'a93', 'tout droit' ],
          [ 'a103', 'tout droit' ],
          [ 'a105', 'gauche' ]
        ],
        a100: [ [ 'a94', 'tout droit' ], [ 'a98', 'tout droit' ] ],
        a101: [
          [ 'a95', 'tout droit' ],
          [ 'a106', 'tout droit' ],
          [ 'a107', 'tout droit' ]
        ],
        a102: [
          [ 'a95', 'tout droit' ],
          [ 'a98', 'gauche' ],
          [ 'a108', 'tout droit' ]
        ],
        a103: [
          [ 'a96', 'droite' ],
          [ 'a99', 'tout droit' ],
          [ 'a109', 'tout droit' ]
        ],
        a104: [
          [ 'a97', 'tout droit' ],
          [ 'a98', 'tout droit' ],
          [ 'a110', 'tout droit' ],
          [ 'a111', 'tout droit' ]
        ],
        a105: [
          [ 'a99', 'droite' ],
          [ 'a109', 'tout droit' ],
          [ 'a112', 'tout droit' ]
        ],
        a106: [
          [ 'a108', 'tout droit' ],
          [ 'a101', 'tout droit' ],
          [ 'a113', 'tout droit' ]
        ],
        a107: [
          [ 'a101', 'tout droit' ],
          [ 'a112', 'tout droit' ],
          [ 'a113', 'tout droit' ]
        ],
        a108: [
          [ 'a102', 'tout droit' ],
          [ 'a106', 'tout droit' ],
          [ 'a110', 'droite' ]
        ],
        a109: [
          [ 'a103', 'tout droit' ],
          [ 'a105', 'tout droit' ],
          [ 'a114', 'droite' ]
        ],
        a110: [
          [ 'a104', 'tout droit' ],
          [ 'a108', 'gauche' ],
          [ 'a115', 'tout droit' ]
        ],
        a111: [
          [ 'B', 'tout droit' ],
          [ 'a116', 'droite' ],
          [ 'a104', 'tout droit' ]
        ],
        a112: [
          [ 'a105', 'tout droit' ],
          [ 'a107', 'tout droit' ],
          [ 'a117', 'tout droit' ],
          [ 'a118', 'tout droit' ]
        ],
        a113: [
          [ 'a106', 'tout droit' ],
          [ 'a107', 'tout droit' ],
          [ 'a115', 'tout droit' ]
        ],
        a114: [
          [ 'B', 'tout droit' ],
          [ 'a109', 'gauche' ],
          [ 'a118', 'tout droit' ]
        ],
        a115: [
          [ 'a110', 'tout droit' ],
          [ 'a113', 'tout droit' ],
          [ 'a117', 'tout droit' ]
        ],
        a116: [
          [ 'a111', 'gauche' ],
          [ 'a117', 'droite' ],
          [ 'a118', 'tout droit' ]
        ],
        a117: [
          [ 'a112', 'tout droit' ],
          [ 'a115', 'tout droit' ],
          [ 'a116', 'gauche' ]
        ],
        a118: [
          [ 'a112', 'tout droit' ],
          [ 'a114', 'tout droit' ],
          [ 'a116', 'tout droit' ]
        ],
        a119: [
          [ 'a6', 'tout droit' ],
          [ 'a53', 'tout droit' ],
          [ 'a32', 'tout droit' ]
        ],
        a120: [
          [ 'a121', 'tout droit' ],
          [ 'a67', 'tout droit' ],
          [ 'a97', 'tout droit' ]
        ],
        a121: [
          [ 'a96', 'tout droit' ],
          [ 'a120', 'tout droit' ],
          [ 'a78', 'tout droit' ]
        ],
        B: [
          [ 'a114', 'tout droit' ],
          [ 'a111', 'tout droit' ],
          [ 'a96', 'tout droit' ]
        ]
      };
      let c3 = {
        A: [680.0, 1360.68],
        B: [550.477, 585],
        a1: [667.046, 1455.302],
        a2: [809.523, 1438.778],
        a3: [809.523, 1299.276],
        a4: [582.862, 1329.043],
        a5: [888.862, 1438.778],
        a6: [1016.77, 1346.706],
        a7: [895.662, 1554.99],
        a8: [660, 1216.231],
        a9: [563.431, 1228.165],
        a10: [472.77, 1381.301],
        a11: [906.661, 1650.907],
        a12: [820, 1586.746],
        a13: [731.816, 1216.231],
        a14: [500, 1250],
        a15: [388.569, 1358.283],
        a16: [433.908, 1455.302],
        a17: [563.431, 1408.858],
        a18: [809.523, 1685.006],
        a19: [725.339, 1579.674],
        a20: [764.184, 1630],
        a21: [662.507, 1120.742],
        a22: [874.293, 1261.553],
        a23: [531.046, 1129.327],
        a24: [369.138, 1296.743],
        a25: [447.831, 1520.99],
        a26: [602.293, 1490.781],
        a27: [662.507, 1718.309],
        a28: [680.0, 1600.907],
        a29: [828.954, 1004.003],
        a30: [641.138, 1035.742],
        a31: [828.954, 1164.585],
        a32: [984.385, 1261.553],
        a33: [589.339, 949.926],
        a34: [466.293, 1087.541],
        a35: [362.661, 1228.165],
        a36: [310.862, 1471.044],
        a37: [440.385, 1593.835],
        a38: [550.477, 1574.387],
        a39: [531.046, 1718.309],
        a40: [855.508, 944.639],
        a41: [647.615, 971.346],
        a42: [855.508, 1129.327],
        a43: [1016.77, 1176.519],
        a44: [550.477, 873.882],
        a45: [485.147, 1004.003],
        a46: [421.954, 1119.603],
        a47: [259.046, 1358.283],
        a48: [369.138, 1619.063],
        a49: [505.138, 1619.063],
        a50: [874.293, 887.165],
        a51: [692.954, 907.443],
        a52: [628.184, 880],
        a53: [1146.293, 1216.231],
        a54: [971.431, 1119.603],
        a55: [453.339, 907.443],
        a56: [627.538, 820],
        a57: [421.954, 978.418],
        a58: [356.184, 1065.22],
        a59: [181.339, 1241.0],
        a60: [52.207, 1170.535],
        a61: [1003.816, 809.319],
        a62: [822.477, 844.053],
        a63: [757.707, 863.736],
        a64: [1249.908, 1150.407],
        a65: [1081.523, 1071.714],
        a66: [330.293, 857.293],
        a67: [628.184, 760],
        a68: [304.385, 1216.231],
        a69: [161.908, 1151.563],
        a70: [148.954, 926.126],
        a71: [1000, 759.0],
        a72: [1023.23, 860.053],
        a73: [878.138, 809.319],
        a74: [775.184, 808.993],
        a75: [1146.293, 1023.825],
        a76: [1215.908, 692.99],
        a77: [1088.0, 1020.0],
        a78: [343.893, 753.593],
        a79: [291.431, 926.126],
        a80: [730, 776.271],
        a81: [291.431, 1060.916],
        a82: [194.293, 1067.0],
        a83: [129.523, 844.053],
        a84: [1068.569, 780],
        a85: [1003.816, 920.822],
        a86: [1068.569, 901.561],
        a87: [1133.339, 784.516],
        a88: [1133.339, 531.216],
        a89: [971.431, 1020.0],
        a90: [280.092, 679.031],
        a91: [215.339, 828.597],
        a92: [744.77, 712.793],
        a93: [246.092, 648.703],
        a94: [1049.138, 712.793],
        a95: [1003.816, 375.734],
        a96: [532.338, 679.031],
        a97: [723.231, 650.5],
        a98: [1040.4, 569.228],
        a99: [246.092, 569.228],
        a100: [1003.816, 625],
        a101: [906.661, 323.391],
        a102: [952.0, 440.776],
        a103: [376.261, 467.483],
        a104: [841.908, 601.967],
        a105: [453.339, 368.662],
        a106: [830.938, 368.662],
        a107: [680.0, 250],
        a108: [874.293, 452.71],
        a109: [446.862, 485.707],
        a110: [809.523, 535.941],
        a111: [680.0, 595.68],
        a112: [539.138, 355.402],
        a113: [744.77, 310.913],
        a114: [539.138, 498.236],
        a115: [777.138, 370],
        a116: [725.339, 520.0],
        a117: [692.954, 390.0],
        a118: [600, 474.895],
        a119: [1101.954, 1250.758],
        a120: [530, 745.637],
        a121: [421.954, 692.99]
    };
    
    let c4 = {
        A: [400.0, 800.4],
        B: [323.81, 340],
        a1: [392.38, 856.06],
        a2: [476.19, 846.34],
        a3: [476.19, 764.28],
        a4: [342.86, 781.79],
        a5: [522.86, 846.34],
        a6: [598.1, 792.18],
        a7: [526.86, 914.7],
        a8: [411.43, 715.43],
        a9: [331.43, 722.45],
        a10: [278.1, 812.53],
        a11: [533.33, 941.71],
        a12: [468.57, 933.38],
        a13: [430.48, 715.43],
        a14: [304.76, 781.79],
        a15: [228.57, 798.99],
        a16: [255.24, 856.06],
        a17: [331.43, 828.74],
        a18: [476.19, 991.18],
        a19: [426.67, 929.22],
        a20: [449.52, 772.47],
        a21: [389.71, 659.26],
        a22: [514.29, 742.09],
        a23: [312.38, 664.31],
        a24: [217.14, 762.79],
        a25: [263.43, 870],
        a26: [354.29, 876.93],
        a27: [389.71, 1010.77],
        a28: [400.0, 941.71],
        a29: [487.62, 590.59],
        a30: [377.14, 609.26],
        a31: [487.62, 685.05],
        a32: [579.05, 742.09],
        a33: [346.67, 558.78],
        a34: [274.29, 639.73],
        a35: [213.33, 722.45],
        a36: [182.86, 865.32],
        a37: [259.05, 937.55],
        a38: [323.81, 926.11],
        a39: [312.38, 1010.77],
        a40: [503.24, 555.67],
        a41: [380.95, 571.38],
        a42: [503.24, 664.31],
        a43: [598.1, 692.07],
        a44: [323.81, 513.46],
        a45: [285.71, 590.59],
        a46: [247.62, 658.59],
        a47: [152.38, 798.99],
        a48: [217.14, 952.39],
        a49: [297.14, 952.39],
        a50: [514.29, 522.45],
        a51: [407.62, 533.79],
        a52: [369.52, 497.09],
        a53: [674.29, 715.43],
        a54: [571.43, 658.59],
        a55: [266.67, 533.79],
        a56: [369.14, 497.09],
        a57: [247.62, 575.54],
        a58: [209.52, 626.6],
        a59: [106.67, 730],
        a60: [30.71, 688.55],
        a61: [590.48, 476.07],
        a62: [483.81, 497.09],
        a63: [445.71, 508.08],
        a64: [735.24, 676.71],
        a65: [636.19, 630.42],
        a66: [194.29, 504.29],
        a67: [369.52, 475.29],
        a68: [179.05, 715.43],
        a69: [95.24, 677.39],
        a70: [87.62, 544.78],
        a71: [609.52, 446.41],
        a72: [601.9, 497.09],
        a73: [517.14, 476.07],
        a74: [449.52, 475.29],
        a75: [674.29, 602.25],
        a76: [715.24, 407.7],
        a77: [640.0, 600],
        a78: [202.29, 443.29],
        a79: [171.43, 544.78],
        a80: [438.1, 456.63],
        a81: [171.43, 623.48],
        a82: [114.29, 627.64],
        a83: [76.19, 497.09],
        a84: [628.57, 446.41],
        a85: [590.48, 541.66],
        a86: [628.57, 530.33],
        a87: [666.67, 461.48],
        a88: [666.67, 312.48],
        a89: [571.43, 600],
        a90: [164.76, 399.43],
        a91: [126.67, 487.41],
        a92: [438.1, 419.29],
        a93: [144.76, 381.59],
        a94: [617.14, 419.29],
        a95: [590.48, 221.02],
        a96: [313.14, 399.43],
        a97: [425.43, 375],
        a98: [612.0, 334.84],
        a99: [144.76, 334.84],
        a100: [590.48, 353.51],
        a101: [533.33, 190.23],
        a102: [560.0, 259.28],
        a103: [221.33, 274.99],
        a104: [495.24, 353.51],
        a105: [266.67, 216.86],
        a106: [481.14, 216.86],
        a107: [400.0, 171.56],
        a108: [514.29, 266.3],
        a109: [262.86, 285.71],
        a110: [476.19, 331.73],
        a111: [400.0, 350.4],
        a112: [317.14, 209.06],
        a113: [438.1, 182.89],
        a114: [317.14, 293.08],
        a115: [457.14, 209.06],
        a116: [426.67, 305.85],
        a117: [407.62, 229.4],
        a118: [342.86, 279.35],
        a119: [647.62, 735.74],
        a120: [342.86, 438.61],
        a121: [247.62, 407.7]
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
    graph_rep(chemin,chemin1, nodeCoordinates); // Dessiner le graphe initial
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
        graph_rep(chemin,chemin1, coordinates);

    });

    const btn2 = document.createElement('button');
    btn2.textContent = "Choix 2 : Chemin 2";
    btn2.className = "button choice";
    btn2.addEventListener('click', function () {
        chemin = chemin3;
        nodeCoordinates=coordinates3;
        container.innerHTML = "";
        graph_rep(chemin,chemin1, coordinates);

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
                let r = Math.max(0, parseInt(match[1])+10);
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
        graph_rep(chemin,chemin1,nodeCoordinates);

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

function verifierDirection(chemin1, sommetDepart, sommetArrivee) {
    // Vérifier si le sommet de départ existe dans chemin1
    if (!chemin1[sommetDepart]) {
        console.warn(`Le sommet ${sommetDepart} n'existe pas dans chemin1.`);
        return null;
    }

    // Parcourir les destinations possibles depuis le sommet de départ
    for (const [destination, direction] of chemin1[sommetDepart]) {
        if (destination === sommetArrivee) {
            console.log(`Direction trouvée : ${sommetDepart} -> ${sommetArrivee} (${direction})`);
            return direction; // Retourner la direction si elle correspond
        }
    }

    // Si aucune correspondance n'est trouvée
    console.warn(`Aucune direction trouvée pour l'arête ${sommetDepart} -> ${sommetArrivee} dans chemin1.`);
    return null;
}

function Afficher_solution(){
    depart='A';
    arrivee='B';
    let solution=trouverCheminAvecPredecesseurBFS(chemin, depart, arrivee);
    arete_chemin=[];
    graph_rep(chemin,chemin1,nodeCoordinates);
    for (let i = 0; i < solution.length - 1; i++) {
        arete_rouge(solution[i], solution[i + 1]);
    }
    graph_rep(chemin,chemin1,nodeCoordinates);
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

function dessinerAretes(chemin, coord, couleur = "white", largeur = 10) {
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
                    ctx.lineWidth = largeur; // Largeur plus petite pour les arêtes blanches
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

function dessinerAretes2(chemin, coord, couleur = "white", largeur = 10) {
    let arêtesDessinées = new Set();
    let groupe = 0;

    // === 1ère passe : dessin de base ===
    for (const [sommet, destinations] of Object.entries(chemin)) {
        if (!coord[sommet]) continue;

        const [xStart, yStart] = coord[sommet];

        destinations.forEach(([destination, direction]) => {
            if (!coord[destination]) return;

            const [xEnd, yEnd] = coord[destination];
            const arête = `${sommet}-${destination}`;

            if (!arêtesDessinées.has(arête)) {
                const dx = xEnd - xStart;
                const dy = yEnd - yStart;
                const centerX = (xStart + xEnd) / 2;
                const centerY = (yStart + yEnd) / 2;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Rayon horizontal = moitié de la distance
                const radiusX = distance / 2;
                // Rayon vertical plus petit pour donner une vraie courbe
                const radiusY = distance / 6;
                // Rotation de l’ellipse pour qu’elle suive la direction des points
                const rotation = Math.atan2(dy, dx);

                ctx.beginPath();

                if (direction === "gauche") {
                    ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, Math.PI, 0, false);
                } else if (direction === "droite") {
                    ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, Math.PI, 0, true);
                } else if (direction === "tout droit") {
                    ctx.moveTo(xStart, yStart);
                    ctx.lineTo(xEnd, yEnd);
                }

                ctx.strokeStyle = 'white';
                ctx.lineWidth = largeur;
                ctx.stroke();

                arêtesDessinées.add(arête);
            }
        });
    }

    // === 2ème passe : dessin coloré ===
    arêtesDessinées.clear();
    for (const [sommet, destinations] of Object.entries(chemin)) {
        if (!coord[sommet]) continue;

        const [xStart, yStart] = coord[sommet];

        destinations.forEach(([destination, direction]) => {
            if (!coord[destination]) return;

            const [xEnd, yEnd] = coord[destination];
            const arête = `${sommet}-${destination}`;

            if (!arêtesDessinées.has(arête)) {
                const dx = xEnd - xStart;
                const dy = yEnd - yStart;
                const centerX = (xStart + xEnd) / 2;
                const centerY = (yStart + yEnd) / 2;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const radiusX = distance / 2;
                const radiusY = distance / 6;
                const rotation = Math.atan2(dy, dx);

                ctx.beginPath();

                if (direction === "gauche") {
                    ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, Math.PI, 0, false);
                } else if (direction === "droite") {
                    ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, Math.PI, 0, true);
                } else if (direction === "tout droit") {
                    ctx.moveTo(xStart, yStart);
                    ctx.lineTo(xEnd, yEnd);
                }

                ctx.strokeStyle = couleur//couleur_edge[groupe];
                ctx.lineWidth = largeur;
                ctx.stroke();

                arêtesDessinées.add(arête);
            }
        });

        groupe = (groupe + 1) % couleur_edge.length;
    }
}


// Fonction pour dessiner le graphe avec le sommet de départ mis à jour
function sommet_acces(chemin,chemin1, sommet, coord) {
    dessinerAretes2(chemin1, coord, couleur = "white", largeur = 10);
/*     for (let i = 0; i < arete_chemin.length; i++) {
        let [xs1, ys1, xs2, ys2] = arete_chemin[i]; // Déstructuration de l'arête
        const direction = verifierDirection(chemin1, sommet, sommet_accessible[i]); // Vérifier la direction de l'arête

        ctx.beginPath();
        if (direction === "tout droit") {
            // Dessiner une ligne droite
            ctx.moveTo(xs1, ys1);
            ctx.lineTo(xs2, ys2);
        } else if (direction === "gauche") {
            // Dessiner une ellipse pour "gauche"
            const dx = xs2 - xs1;
            const dy = ys2 - ys1;
            const centerX = (xs1 + xs2) / 2;
            const centerY = (ys1 + ys2) / 2;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const radiusX = distance / 2;
            const radiusY = distance / 6;
            const rotation = Math.atan2(dy, dx);
        
            ctx.ellipse(
                centerX,
                centerY,
                radiusX,
                radiusY,
                rotation,
                Math.PI, // Début de l'ellipse pour "gauche"
                0,
                true
            );
        } else if(direction === "droite") {
            // Dessiner une ellipse pour "droite"
            const dx = xs2 - xs1;
            const dy = ys2 - ys1;
            const centerX = (xs1 + xs2) / 2;
            const centerY = (ys1 + ys2) / 2;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const radiusX = distance / 2;
            const radiusY = distance / 6;
            const rotation = Math.atan2(dy, dx);
        
            ctx.ellipse(
                centerX,
                centerY,
                radiusX,
                radiusY,
                rotation,
                0, // Début de l'ellipse pour "droite"
                Math.PI,
                false
            );
        }
        ctx.strokeStyle = liste_couleur_sol[compteur]; // Couleur correspondant à l'arête
        compteur++;
        ctx.lineWidth = 10; // Taille de la ligne
        ctx.stroke();
    } */
    compteur = 0;
    
    let double=doublons(arete_chemin);
/*     for (let [xs1, ys1, xs2, ys2] of double) {
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
    } */
    compteur=0;
    sommet_accessible=[];
    // Redessiner tous les sommets avec les couleurs appropriées
    for (const [key, value] of Object.entries(chemin)) {
        const [x, y] = coord[key];
        if (key === depart) {
            // Dessiner le sommet de départ en bleu
            drawVertices(x, y, Math.max(20,checkBE(key)), key, "#1E88E5");
        } 
        else if (key === sommet) {
            // Dessiner le sommet actuel en jaune
            drawVertices(x, y, Math.max(20,checkBE(key)), key, "red");
        } else if (checkSommetInChemin(chemin, sommet, dernier_sommet, key)) {
            // Dessiner les sommets accessibles en vert
            drawVertices(x, y, Math.max(20,checkBE(key)), key, "green");
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
            drawVertices(x, y, Math.max(10,checkBE(key)),key, "black");
        }
        height=0;
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

    // Texte du sommet avec taille dynamique
    const fontSize = Math.max(10, radius * 0.9); // taille mini pour éviter qu'elle soit trop petite
    ctx.fillStyle = "white";
    ctx.font = `bold ${fontSize}px Roboto`;
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


function graph_rep(chemin,chemin1,coord) {
    dessinerAretes2(chemin1, coord, couleur = "white", largeur = 10);
    for (let [xs1, ys1, xs2, ys2] of arete_chemin) {
        const sommetDepart = Object.keys(coord).find(key => {
            const [x, y] = coord[key];
            return x === xs1 && y === ys1;
        });
    
        const sommetArrivee = Object.keys(coord).find(key => {
            const [x, y] = coord[key];
            return x === xs2 && y === ys2;
        });
    
        if (!sommetDepart || !sommetArrivee) {
            console.warn("Impossible de trouver les sommets pour les coordonnées données.");
            continue;
        }
        const direction = verifierDirection(chemin1, sommetDepart, sommetArrivee); // Vérifier la direction de l'arête
        console.log("Direction de l'arête:", direction);
    
        ctx.beginPath();
        if (direction === "tout droit") {
            // Dessiner une ligne droite
            ctx.moveTo(xs1, ys1);
            ctx.lineTo(xs2, ys2);
        } else if (direction === "gauche") {
            // Dessiner une ellipse pour "gauche"
            const dx = xs2 - xs1;
            const dy = ys2 - ys1;
            const centerX = (xs1 + xs2) / 2;
            const centerY = (ys1 + ys2) / 2;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const radiusX = distance / 2;
            const radiusY = distance / 6;
            const rotation = Math.atan2(dy, dx);
        
            ctx.ellipse(
                centerX,
                centerY,
                radiusX,
                radiusY,
                rotation,
                Math.PI, // Début de l'ellipse pour "gauche"
                0,
                false
            );
        } else if(direction === "droite") {
            // Dessiner une ellipse pour "droite"
            const dx = xs2 - xs1;
            const dy = ys2 - ys1;
            const centerX = (xs1 + xs2) / 2;
            const centerY = (ys1 + ys2) / 2;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const radiusX = distance / 2;
            const radiusY = distance / 6;
            const rotation = Math.atan2(dy, dx);
        
            ctx.ellipse(
                centerX,
                centerY,
                radiusX,
                radiusY,
                rotation,
                0, // Début de l'ellipse pour "droite"
                Math.PI,
                false
            );
        }
    
        ctx.strokeStyle = liste_couleur_sol[compteur]; // Couleur correspondant à l'arête
        ctx.lineWidth = 12; // Taille de la ligne
        ctx.stroke();
        compteur++;
    }
    compteur=0;
    let double=doublons(arete_chemin);
    for (let [xs1, ys1, xs2, ys2] of double) {
    
        ctx.beginPath();
        const dx = xs2 - xs1;
        const dy = ys2 - ys1;
        const centerX = (xs1 + xs2) / 2;
        const centerY = (ys1 + ys2) / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const radiusX = distance / 2;
        const radiusY = distance / 6;
        const rotation = Math.atan2(dy, dx);
    
        ctx.ellipse(
            centerX,
            centerY,
            radiusX,
            radiusY,
            rotation,
            0, // Début de l'ellipse pour "droite"
            Math.PI,
            false
        );
        ctx.strokeStyle = liste_couleur_sol[compteur];
        ctx.lineWidth = 15; 
        compteur++;
        ctx.stroke();
    }
    compteur=0;
    let height=0;
    for (const [key, value] of Object.entries(chemin)) {
        const [xStart, yStart] = coord[key];
        if (key === depart) {
            drawVertices(xStart, yStart, Math.max(20,checkBE(key)), key, "#1E88E5");
        }
        else if (key === arrivee) {
            if(!sommet_accessible.includes(key)){
                drawVertices(xStart, yStart,Math.max(20,checkBE(key)) , key, "black");
            }
            else{
                drawVertices(xStart, yStart, Math.max(20,checkBE(key)), key, "green");
            }
        } 
        else if(!sommet_accessible.includes(key)){
            drawVertices(xStart, yStart, Math.max(20,checkBE(key)), key, "black");
        }
        else{
            drawVertices(xStart, yStart, Math.max(20,checkBE(key)), key, "green");
        }
    }
}

function checkBE(key){
    if (key === 'A' || key === 'B') {
        return 35;
    }
    return 0;
}

function showTransitionTable(sommet, coord) {
    graph_rep(chemin,chemin1,nodeCoordinates);
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
    sommet_acces(chemin,chemin1,depart,nodeCoordinates); 
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
        graph_rep(chemin,chemin1,nodeCoordinates);
    }
});
function dessinerAretes3(chemin, coord, couleur = "white", largeur = 10) {
    let arêtesDessinées = new Set();

    // Dessiner toutes les arêtes en blanc
    for (const [sommet, transitions] of Object.entries(chemin)) {
        const [xStart, yStart] = coord[sommet];
        for (const [via, destinations] of Object.entries(transitions)) {
            destinations.forEach(([destination, direction]) => {
                if (!coord[destination]) {
                    console.warn(`Coordonnées manquantes pour la destination: ${destination}`);
                    return; // Ignorez cette destination si elle n'a pas de coordonnées
                }

                const [xEnd, yEnd] = coord[destination];
                const arête = `${sommet}-${destination}`;

                if (!arêtesDessinées.has(arête)) {
                    ctx.beginPath();
                    ctx.moveTo(xStart, yStart);
                    ctx.lineTo(xEnd, yEnd);
                    ctx.strokeStyle = couleur; // Couleur blanche pour les arêtes
                    ctx.lineWidth = largeur; // Largeur des arêtes
                    ctx.stroke();

                    arêtesDessinées.add(arête);
                }
            });
        }
    }
}

// Exemple d'utilisation
let chemin12 = {
    A: { 
        '': [['C', "tout droit"]] 
    },
    C: { 
        'A': [['D', "tout droit"], ['E', "tout droit"]],
        'E': [['B', "tout droit"], ['A', "tout droit"]]
    },
    D: { 
        'C': [['E', "tout droit"]], 
        'E': [['C', "tout droit"]] 
    },
    E: { 
        'D': [['C', "tout droit"]], 
        'C': [['D', "tout droit"]] 
    },
    B: { 
        'E': [['C', "tout droit"]] 
    }
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
var chemin=t3;
var chemin1=t3_b;
var nodeCoordinates = c3;
soustraireUnRGB(50);
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
                sommet_acces(chemin,chemin1,depart, nodeCoordinates);
                graph_rep(chemin,chemin1,nodeCoordinates);
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
            sommet_acces(chemin,chemin1, key, nodeCoordinates);
            graph_rep(chemin,chemin1,nodeCoordinates);
            break;
        }
    }
});


