
//animation de fin de jeu
class Confetti {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5;
        this.speedX = Math.random() * 2 - 1; // Vitesse horizontale
        this.speedY = Math.random() * 3 + 2; // Vitesse verticale
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`; // Couleur aléatoire
    }

    update(canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += 0.1; // Gravité légère

        // Réinitialiser les confettis en bas de l'écran
        if (this.y > canvasHeight) {
            this.y = 0;
            this.x = Math.random() * canvas.width; // Assuming canvas is globally available or passed
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


//coordonnées du graphe de Martin Gardner
let Coordinates = {
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
const table_transition = {
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
        'B': ['a121','a103'],
        'a121': ['B'],
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
const table_transition_direction = {
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
      [ 'a77', 'tout droit' ],
      [ 'a85', 'tout droit' ]
    ],
    a87: [
      [ 'a75', 'tout droit' ],
      [ 'a76', 'tout droit' ],
      [ 'a84', 'tout droit' ]
    ],
    a88: [
      [ 'a76', 'tout droit' ],
      [ 'a94', 'tout droit' ],
      [ 'a95', 'tout droit' ]
    ],
    a121: [
      [ 'a78', 'tout droit' ],
      [ 'a96', 'tout droit' ],
      [ 'a120', 'tout droit' ]
    ],
    a90: [
      [ 'a78', 'tout droit' ],
      [ 'a91', 'tout droit' ],
      [ 'a93', 'tout droit' ]
    ],
    a91: [
      [ 'a79', 'tout droit' ],
      [ 'a83', 'tout droit' ],
      [ 'a90', 'tout droit' ]
    ],
    a92: [
      [ 'a80', 'tout droit' ],
      [ 'a97', 'tout droit' ],
      [ 'a100', 'tout droit' ]
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
      [ 'a88', 'tout droit' ],
      [ 'a101', 'tout droit' ],
      [ 'a102', 'tout droit' ]
    ],
    a96: [
      [ 'B', 'tout droit' ],
      [ 'a121', 'tout droit' ],
      [ 'a103', 'tout droit' ]
    ],
    a97: [
      [ 'a120', 'tout droit' ],
      [ 'a92', 'tout droit' ],
      [ 'a104', 'tout droit' ]
    ],
    a98: [
      [ 'a100', 'tout droit' ],
      [ 'a102', 'tout droit' ],
      [ 'a104', 'tout droit' ]
    ],
    a99: [
      [ 'a93', 'tout droit' ],
      [ 'a103', 'tout droit' ],
      [ 'a105', 'tout droit' ]
    ],
    a100: [ [ 'a94', 'tout droit' ], [ 'a98', 'tout droit' ] ],
    a101: [
      [ 'a95', 'tout droit' ],
      [ 'a106', 'tout droit' ],
      [ 'a107', 'tout droit' ]
    ],
    a102: [
      [ 'a95', 'tout droit' ],
      [ 'a98', 'tout droit' ],
      [ 'a108', 'tout droit' ]
    ],
    a103: [
      [ 'a96', 'tout droit' ],
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
      [ 'a99', 'tout droit' ],
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
      [ 'a110', 'tout droit' ]
    ],
    a109: [
      [ 'a103', 'tout droit' ],
      [ 'a105', 'tout droit' ],
      [ 'a114', 'tout droit' ]
    ],
    a110: [
      [ 'a104', 'tout droit' ],
      [ 'a108', 'tout droit' ],
      [ 'a115', 'tout droit' ]
    ],
    a111: [
      [ 'B', 'tout droit' ],
      [ 'a116', 'tout droit' ],
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
      [ 'a106', 'tout droit' ],
      [ 'a115', 'tout droit' ]
    ],
    a114: [
      [ 'B', 'tout droit' ],
      [ 'a109', 'tout droit' ],
      [ 'a118', 'tout droit' ]
    ],
    a115: [
      [ 'a110', 'tout droit' ],
      [ 'a113', 'tout droit' ],
      [ 'a117', 'tout droit' ]
    ],
    a116: [
      [ 'a111', 'tout droit' ],
      [ 'a117', 'tout droit' ],
      [ 'a118', 'tout droit' ]
    ],
    a117: [
      [ 'a112', 'tout droit' ],
      [ 'a115', 'tout droit' ],
      [ 'a116', 'tout droit' ]
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
      [ 'a97', 'tout droit' ],
      [ 'a67', 'tout droit' ]
    ],
    a89: [
      [ 'a85', 'tout droit' ],
      [ 'a42', 'tout droit' ],
      [ 'a77', 'tout droit' ]
    ],
    B: [
      [ 'a96', 'tout droit' ],
      [ 'a111', 'tout droit' ],
      [ 'a114', 'tout droit' ]
    ]
};
    


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
var palette = ["red", "blue"/* , "green", "purple", "orange", "brown", "cyan", "magenta", "yellow", "pink" */];
endIcon.src = 'https://cdn-icons-png.flaticon.com/512/985/985802.png';
    // Centrer les coordonnées dans un canvas de 1000x1000
    

    function findAllPaths(graph, startNode, maxDepth = 50) {
        const paths = [];
        
        function dfs(currentNode, currentPath, visited, depth, lastNode) {
            if (depth > maxDepth) return;
            paths.push([...currentPath]);
            const transitions = graph[currentNode];
            if (!transitions) return;
            
            for (const label in transitions) {
                if (label === '' || label === lastNode || !lastNode) {
                    const nextNodes = transitions[label];
                    for (const nextNode of nextNodes) {
                        if (!visited.includes(nextNode)) {
                            currentPath.push(nextNode);
                            visited.push(nextNode);
                            dfs(nextNode, currentPath, visited, depth + 1, currentNode);
                            visited.pop();
                            currentPath.pop();
                        }
                    }
                }
            }
        }
        
        dfs(startNode, [startNode], [startNode], 1, null);
        return paths;
    }
    
    // Fonction pour réduire la liste des chemins
    function reducePaths(paths) {
        const sortedPaths = [...paths].sort((a, b) => b.length - a.length);
        const result = [];
        
        for (const path of sortedPaths) {
            let isSubPath = false;
            
            for (const keptPath of result) {
                if (isSubSequence(path, keptPath)) {
                    isSubPath = true;
                    break;
                }
            }
            
            if (!isSubPath) {
                result.push(path);
            }
        }
        
        return result.sort((a, b) => a.length - b.length);
    }
    
    // Fonction utilitaire pour vérifier si path1 est une sous-séquence consécutive de path2
    function isSubSequence(path1, path2) {
        if (path1.length >= path2.length) return false;
        
        for (let i = 0; i <= path2.length - path1.length; i++) {
            let isMatch = true;
            for (let j = 0; j < path1.length; j++) {
                if (path1[j] !== path2[i + j]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) return true;
        }
        return false;
    }
    
    // Nouvelle fonction pour regrouper les chemins par couleur (non aléatoire)
    function groupPathsByColor(paths) {
        // Liste prédéfinie de couleurs
        const colors = [
      "#e6194b", "#3cb44b", "#ffe119", "#0082c8", "#f58231",
      "#911eb4", "#46f0f0", "#f032e6", "#d2f53c", "#fabebe",
      "#008080", "#e6beff", "#aa6e28", "#fffac8", "#800000",
      "#aaffc3", "#808000", "#ffd8b1", "#000080", "#808080",
      "#FFFFFF", "#000000", "#FF69B4", "#CD5C5C", "#4B0082",
      "#20B2AA", "#7FFF00", "#FF4500", "#DA70D6", "#EEE8AA",
      "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFD700",
      "#B0C4DE", "#00CED1", "#FF1493", "#1E90FF", "#B22222",
      "#228B22", "#FF00FF", "#DCDCDC", "#ADFF2F", "#F0FFF0",
      "#F5DEB3", "#00FF7F", "#FA8072", "#FF6347", "#40E0D0"
    ];
        const colorDict = {};
        
        // Regrouper les chemins par longueur
        paths.forEach(path => {
            const length = path.length;
            // Choisir une couleur en fonction de la longueur (boucler si nécessaire)
            const color = colors[(length - 1) % colors.length];
            // Initialiser la liste pour cette couleur si elle n'existe pas
            if (!colorDict[color]) {
                colorDict[color] = [];
            }
            // Ajouter le chemin à la liste de cette couleur
            colorDict[color].push(path);
        });
        
        return colorDict;
    }
    

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


function generateCoordinates(nodes, width = 1200, height = 1500, minDistance = 50) {
    const coordinates = {};
    coordinates['A'] = [width / 2, height - 100];
    coordinates['B'] = [width / 2, 300];
    const otherNodes = nodes.filter(n => n !== 'A' && n !== 'B');
    
    function isTooClose(x, y, existingCoords, minDist) {
        return Object.values(existingCoords).some(coord => {
            const dx = x - coord[0];
            const dy = y - coord[1];
            return Math.sqrt(dx * dx + dy * dy) < minDist;
        });
    }
    
    otherNodes.forEach(node => {
        let x, y, attempts = 0, maxAttempts = 100;
        const isLeurre = node.endsWith('b');
        const baseX = isLeurre ? width * 0.75 : width * 0.5;
        const baseY = isLeurre ? height * 0.5 : height * 0.6;
        
        do {
            x = baseX + (Math.random() - 0.5) * width * 0.8;
            y = baseY + (Math.random() - 0.5) * height * 0.6;
            x = Math.max(50, Math.min(width - 50, x));
            y = Math.max(250, Math.min(height - 100, y));
            attempts++;
            if (attempts > maxAttempts) {
                minDistance *= 0.9;
                attempts = 0;
            }
        } while (isTooClose(x, y, coordinates, minDistance));
        
        coordinates[node] = [x, y];
    });
    
    return coordinates;
}

function generateVisualGraphWithDirections(numIntermediateNodes = 20, minTransitions = 2, maxTransitions = 5, detourProbability = 0.4) {
    
    // Générer le graphe
    function generateVisualGraph(numIntermediateNodes, minTransitions, maxTransitions, detourProbability) {
        const numLeurres = Math.floor(numIntermediateNodes * 0.25);
        const nodes = [
            'A',
            ...Array.from({ length: numIntermediateNodes }, (_, i) => `a${i + 1}`),
            ...Array.from({ length: numLeurres }, (_, i) => `a${numIntermediateNodes + i + 1}b`),
            'B'
        ];
        
        const graph = {};
        nodes.forEach(node => graph[node] = {});
        
        const criticalPathLength = Math.floor(numIntermediateNodes / 3);
        const criticalPathNodes = ['A', ...Array.from({ length: criticalPathLength }, (_, i) => `a${i + 1}`), 'B'];
        const nonCriticalNodes = nodes.filter(n => !criticalPathNodes.includes(n) && n !== 'A' && n !== 'B' && !n.endsWith('b'));
        
        nodes.forEach(node => {
            let possiblePredecessors = nodes.filter(n => n !== node);
            if (node === 'A') possiblePredecessors = [''];
            
            possiblePredecessors.forEach(pred => {
                let possibleSuccessors = nodes.filter(n => n !== node && n !== pred);
                if (node === 'B') possibleSuccessors = nodes.filter(n => n !== pred);
                if (!possibleSuccessors.length) return;
                
                // Assurer au moins minTransitions successeurs, jusqu'à maxTransitions
                const numSuccessors = Math.floor(Math.random() * (maxTransitions - minTransitions + 1)) + minTransitions;
                const successors = [];
                
                if (node.endsWith('b')) {
                    const detourSuccessors = possibleSuccessors.filter(n => n.endsWith('b') || nonCriticalNodes.includes(n));
                    if (detourSuccessors.length > 0) {
                        const shuffledDetours = detourSuccessors.sort(() => Math.random() - 0.5);
                        for (let i = 0; i < Math.min(numSuccessors, detourSuccessors.length); i++) {
                            successors.push(shuffledDetours[i]);
                        }
                    } else {
                        const shuffled = possibleSuccessors.filter(n => nonCriticalNodes.includes(n)).sort(() => Math.random() - 0.5);
                        successors.push(shuffled[0]);
                    }
                } else {
                    const shuffledSuccessors = possibleSuccessors.sort(() => Math.random() - 0.5);
                    let added = 0;
                    
                    for (let i = 0; i < shuffledSuccessors.length && added < numSuccessors; i++) {
                        const candidate = shuffledSuccessors[i];
                        if (candidate === 'B' && Math.random() > 0.05) continue;
                        if (candidate.endsWith('b') && Math.random() > detourProbability) continue;
                        successors.push(candidate);
                        added++;
                    }
                    
                    while (added < numSuccessors && shuffledSuccessors.length > 0) {
                        const nonCritical = shuffledSuccessors.filter(n => nonCriticalNodes.includes(n) || n.endsWith('b'));
                        if (nonCritical.length > 0) {
                            successors.push(nonCritical[added % nonCritical.length]);
                        }
                        added++;
                    }
                }
                
                graph[node][pred] = successors;
            });
        });
        
        // Ajouter le chemin critique
        for (let i = 0; i < criticalPathNodes.length - 1; i++) {
            const current = criticalPathNodes[i];
            const next = criticalPathNodes[i + 1];
            const predecessors = Object.keys(graph[current]);
            predecessors.forEach(pred => {
                if (!graph[current][pred].includes(next)) {
                    graph[current][pred].push(next);
                }
            });
        }
        
        // S'assurer que chaque sommet a assez de successeurs pour atteindre 3 arêtes uniques
        nodes.forEach(node => {
            const allSuccessors = new Set();
            Object.values(graph[node]).forEach(succs => succs.forEach(s => allSuccessors.add(s)));
            const missing = 3 - allSuccessors.size;
            if (missing > 0) {
                const possibleSuccessors = nodes.filter(n => n !== node && !allSuccessors.has(n));
                if (possibleSuccessors.length > 0) {
                    const shuffled = possibleSuccessors.sort(() => Math.random() - 0.5);
                    for (let i = 0; i < Math.min(missing, possibleSuccessors.length); i++) {
                        const newSucc = shuffled[i];
                        const pred = Object.keys(graph[node])[0] || '';
                        graph[node][pred] = graph[node][pred] || [];
                        graph[node][pred].push(newSucc);
                    }
                }
            }
        });
        
        return { graph, nodes };
    }
    
    // Générer le graphe et les nœuds
    const { graph, nodes } = generateVisualGraph(numIntermediateNodes, minTransitions, maxTransitions, detourProbability);
    
    // Générer les coordonnées
    const coordinates = generateCoordinates(nodes);
    
    // Générer t3_b avec exactement 3 arêtes sortantes par sommet
    const t3_b = {};
    nodes.forEach(node => {
        // Collecter tous les successeurs uniques
        const allSuccessors = new Set();
        const predecessorMap = new Map(); // Pour suivre quels successeurs sont multiples
        const predecessors = Object.keys(graph[node]);
        
        predecessors.forEach(pred => {
            const successors = graph[node][pred];
            successors.forEach(succ => {
                allSuccessors.add(succ);
                if (successors.length > 1) {
                    predecessorMap.set(succ, (predecessorMap.get(succ) || 0) + 1);
                }
            });
        });
        
        let selectedSuccessors = Array.from(allSuccessors);
        
        // Si plus de 3 successeurs, en sélectionner 3 aléatoirement
        if (selectedSuccessors.length > 3) {
            selectedSuccessors = selectedSuccessors.sort(() => Math.random() - 0.5).slice(0, 3);
        }
        // Si moins de 3 successeurs, compléter avec des nœuds aléatoires
        else if (selectedSuccessors.length < 3) {
            const possibleSuccessors = nodes.filter(n => n !== node && !allSuccessors.has(n));
            const shuffled = possibleSuccessors.sort(() => Math.random() - 0.5);
            for (let i = 0; i < Math.min(3 - selectedSuccessors.length, possibleSuccessors.length); i++) {
                selectedSuccessors.push(shuffled[i]);
            }
        }
        
        // Assigner des directions
        t3_b[node] = selectedSuccessors.map(succ => {
            // Si le successeur apparaît dans une transition avec plusieurs successeurs, utiliser 'tout droit'
            if (predecessorMap.get(succ) > 0) {
                return [succ, 'tout droit'];
            }
            // Sinon, direction aléatoire
            const rand = Math.random();
            const direction = rand < 0.5 ? 'tout droit' : rand < 0.75 ? 'gauche' : 'droite';
            return [succ, direction];
        });
    });
    
    return { graph, coordinates, t3_b };
}



// Ajoute un écouteur d'événement pour le bouton "Annuler" (undo)
document.getElementById('undoButton')?.addEventListener('click', undoLastMove);

// Ajoute un écouteur d'événement pour le bouton "Solution"
// Lorsque l'utilisateur clique sur ce bouton, la fonction Afficher_solution est appelée pour afficher le chemin solution
document.getElementById('solutionButton').addEventListener('click', Afficher_solution);

// Ajoute un écouteur d'événement pour le bouton "Démarrer" (start)
// Lorsque l'utilisateur clique sur ce bouton, la fonction showGraph est appelée pour afficher ou réinitialiser le graphe
document.getElementById('startButton').addEventListener('click', showGraph);



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

// Function to build a single path from startNode using uncolored edges
function buildPath(graph, startNode, usedEdges, maxDepth = 50) {
    const pathEdges = [];
    let currentNode = startNode;
    let lastNode = null;
    let depth = 0;
    
    while (depth < maxDepth) {
        // Get available transitions from currentNode
        const transitions = graph[currentNode];
        if (!transitions) break;
        
        // Find an uncolored edge that respects transition rules
        let nextEdge = null;
        for (const label in transitions) {
            if (label === '' || label === lastNode || !lastNode) {
                const nextNodes = transitions[label];
                for (const nextNode of nextNodes) {
                    const edge = [currentNode, nextNode, label];
                    const edgeStr = JSON.stringify(edge);
                    if (!usedEdges.has(edgeStr)) {
                        nextEdge = edge;
                        break;
                    }
                }
                if (nextEdge) break;
            }
        }
        
        if (!nextEdge) break; // No uncolored edges available
        
        // Add the edge to the path and mark it as used
        pathEdges.push(nextEdge);
        usedEdges.add(JSON.stringify(nextEdge));
        
        // Move to the next node
        currentNode = nextEdge[1]; // toNode
        lastNode = nextEdge[0]; // fromNode (for label checking)
        depth++;
    }
    
    return pathEdges;
}

function dessinerAretes(chemins, coord, directions, couleur = "white", largeur = 10) {
    let arêtesDessinées = new Set();
    const segmentFraction = 0.25; // Fraction de l'arête pour les segments surlignés (20 %)
    const Smin=35;
    const Smax=50;

    // --- Dessiner toutes les arêtes en blanc (inchangé) ---
    for (const [sommet, destinations] of Object.entries(directions)) {
        if (!coord[sommet]) continue;

        const [xStart, yStart] = coord[sommet];

        destinations.forEach(([destination, direction]) => {
            if (!coord[destination]) return;

            const [xEnd, yEnd] = coord[destination];
            const arête = sommet < destination ? `${sommet}-${destination}` : `${destination}-${sommet}`; // Identifiant unique basé sur l'ordre alphabétique

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
                // Rotation de l'ellipse pour qu'elle suive la direction des points
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

    // --- Dessiner les arêtes surlignées comme arcs partiels pour gauche/droite ---
    const cheminsAvecCouleurs = groupPathsByColor(reducePaths(findAllPaths(chemins, 'A')));
    for (const [couleur, chemins] of Object.entries(cheminsAvecCouleurs)) {
        for (const chemin of chemins) {
            for (let i = 0; i < chemin.length - 1; i++) {
                const from = chemin[i];
                const to = chemin[i + 1];

                if (!coord[from] || !coord[to]) continue;

                const xStart = coord[from][0];
                const yStart = coord[from][1];
                const xEnd = coord[to][0];
                const yEnd = coord[to][1];

                const arêteID = `${from}-${to}-${couleur}`;

                if (!arêtesDessinées.has(arêteID)) {
                    // Trouver la direction dans directions
                    let direction = "tout droit";
                    if (directions[from]) {
                        const destinationInfo = directions[from].find(([dest, dir]) => dest === to);
                        if (destinationInfo) {
                            direction = destinationInfo[1]; // 'tout droit', 'gauche', 'droite'
                        }
                    }
                
                    // Calculer les paramètres de l'ellipse
                    const dx = xEnd - xStart;
                    const dy = yEnd - yStart;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                
                    ctx.beginPath();
                    if (direction === "gauche" || direction === "droite") {
                        const percent = 0.40; // Portion de l'ellipse

                        // Paramètres de l'ellipse
                        const centerX = (xStart + xEnd) / 2;
                        const centerY = (yStart + yEnd) / 2;
                        const radiusX = distance / 2; // Rayon horizontal
                        const radiusY = distance / 6; // Rayon vertical
                        const rotation = Math.atan2(dy, dx); // Rotation de l'ellipse

                        // CORRECTION : Angles pour dessiner la portion d'ellipse correcte
                        let startAngle, endAngle, counterclockwise;
                        const arcSweep = Math.PI * percent; // La portion angulaire à dessiner (25% de PI)

                        if (direction === "droite") {
                            startAngle = 0;
                            endAngle =arcSweep; // Avance de arcSweep dans le sens anti-horaire
                            counterclockwise = false; // Sens anti-horaire
                            console.log("droite", startAngle, endAngle, counterclockwise);
                        }


                        // Tracer l'ellipse avec les bons angles
                        ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise);
                        ctx.strokeStyle = couleur;
                        ctx.lineWidth = largeur;
                        ctx.stroke();
                    }
                    else {
                        let percent = 0.25; // Fraction de la ligne (par défaut 25%)

                        const dx = xEnd - xStart;
                        const dy = yEnd - yStart;
                        let distance = Math.sqrt(dx * dx + dy * dy);

                        // Ajuster la distance en fonction des limites Smin et Smax
                        if (0.25*distance < Smin) {
                            distance = Smin;
                            percent = Smin / Math.sqrt(dx * dx + dy * dy); // Ajuster percent pour respecter Smin
                        } else if (0.25*distance > Smax) {
                            distance = Smax;
                            percent = Smax / Math.sqrt(dx * dx + dy * dy); // Ajuster percent pour respecter Smax
                        }

                        // Calcul du point à la fraction spécifiée
                        const xPartial = xStart + dx * percent;
                        const yPartial = yStart + dy * percent;

                        // Tracer uniquement la portion de la ligne
                        ctx.beginPath();
                        ctx.moveTo(xStart, yStart);
                        ctx.lineTo(xPartial, yPartial);
                        ctx.strokeStyle = couleur;
                        ctx.lineWidth = largeur;
                        ctx.stroke();
                    }
                
                    arêtesDessinées.add(arêteID);
                }
            }
        }
    }
}


// Fonction pour dessiner le graphe avec le sommet de départ mis à jour
function sommet_acces(chemin,chemin1, sommet, coord) {
    dessinerAretes(chemin, coord,chemin1, couleur = "white", largeur = 10);
    compteur = 0;
    let double=doublons(arete_chemin);
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
    dessinerAretes(chemin, coord,chemin1, couleur = "white", largeur = 4);
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


function genererCouleursPourChemins(chemins) {
    const couleursParChemin = []; // Liste des couleurs associées aux chemins
    const arêtesParChemin = [];   // Liste des arêtes pour chaque chemin

    // Palette de couleurs prédéfinies
    const palette = [
        "#FF5733", // Rouge
        "#33FF57", // Vert
        "#3357FF", // Bleu
        "#FF33A1", // Rose
        "#FFC300", // Jaune
        "#8E44AD", // Violet
        "#1ABC9C", // Turquoise
        "#E74C3C", // Rouge foncé
        "#3498DB", // Bleu clair
        "#2ECC71"  // Vert clair
    ];

    // Parcourir tous les chemins
    for (let index = 0; index < chemins.length; index++) {
        const chemin = chemins[index];
        const couleur = palette[index % palette.length]; // Utiliser une couleur de la palette
        const aretes = [];

        for (let i = 0; i < chemin.length - 1; i++) {
            const precedent = chemin[i];
            const suivant = chemin[i + 1];
            aretes.push({ from: precedent, to: suivant });
        }

        couleursParChemin.push(couleur);
        arêtesParChemin.push(aretes);
    }

    // Construire le résultat : liste d'objets chemin avec couleur et arêtes
    const resultats = chemins.map((_, index) => ({
        couleur: couleursParChemin[index],
        aretes: arêtesParChemin[index]
    }));
    console.log(resultats);
    return resultats;
}
function nettoyerGroupesParAretes(chemins) {
    // chemins est une liste d'objets { couleur, aretes: [ {from, to}, ... ] }

    // On associe à chaque chemin son index et sa taille
    const tailles = chemins.map(chemin => chemin.aretes.length);

    // Marque les chemins à supprimer
    const aSupprimer = new Set();

    for (let i = 0; i < chemins.length; i++) {
        if (aSupprimer.has(i)) continue; // Déjà supprimé

        const aretesI = chemins[i].aretes;

        for (let j = 0; j < chemins.length; j++) {
            if (i === j || aSupprimer.has(j)) continue;

            const aretesJ = chemins[j].aretes;

            for (let k = 0; k < aretesI.length - 1; k++) {
                const arêteActuelleI = aretesI[k];
                const arêteSuivanteI = aretesI[k + 1];

                // Cherche si arête actuelle + suivante apparaissent dans j
                for (let l = 0; l < aretesJ.length - 1; l++) {
                    const arêteActuelleJ = aretesJ[l];
                    const arêteSuivanteJ = aretesJ[l + 1];

                    if (
                        arêteActuelleI.from === arêteActuelleJ.from &&
                        arêteActuelleI.to === arêteActuelleJ.to &&
                        arêteSuivanteI.from === arêteSuivanteJ.from &&
                        arêteSuivanteI.to === arêteSuivanteJ.to
                    ) {
                        // Si le groupe j est plus grand => supprimer i
                        if (tailles[j] >= tailles[i]) {
                            aSupprimer.add(i);
                        }
                        // Sinon supprimer j
                        else {
                            aSupprimer.add(j);
                        }
                    }
                }
            }
        }
    }

    // Retourne seulement les groupes qui ne sont pas marqués pour suppression
    return chemins.filter((_, index) => !aSupprimer.has(index));
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

//nous permet de voir la table de transitions de chaque sommet
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

//les fonctions qui suivent servent à générer des graphes
function generateComplexTransitionTableWithCoordinates(numIntermediate = 10) {
    // Sommets : A, B, et intermédiaires a1, a2, ...
    const intermediateVertices = Array.from({ length: numIntermediate }, (_, i) => `a${i + 1}`);
    const vertices = ['A', ...intermediateVertices, 'B'];

    // Coordonnées en cercle équidistant
    const coordinates = {};
    const centerX = 750;
    const centerY = 900;
    const radius = 14*(numIntermediate+2)+150; // Sommets plus écartés, distances 100-200 unités
    const angleStep = (2 * Math.PI) / vertices.length;
    vertices.forEach((vertex, index) => {
        const angle = index * angleStep;
        coordinates[vertex] = [
            centerX + radius * Math.cos(angle),
            centerY + radius * Math.sin(angle)
        ];
    });

    // Indices pour distances 100-200
    const validK = [];
    for (let k = 1; k < vertices.length; k++) {
        const dist = 2 * radius * Math.sin(k * angleStep / 2);
        if (dist >= 50 && dist <= 60) validK.push(k);
    }

    // Initialisation table t3
    const transitionTable = {};
    vertices.forEach(v => (transitionTable[v] = {}));

    // Successeurs de A : 3 intermédiaires
    const aIndex = vertices.indexOf('A');
    let validSuccessorsForA = [];
    validK.forEach(k => {
        const idx1 = (aIndex + k) % vertices.length;
        const idx2 = (aIndex - k + vertices.length) % vertices.length;
        if (intermediateVertices.includes(vertices[idx1])) validSuccessorsForA.push(vertices[idx1]);
        if (intermediateVertices.includes(vertices[idx2]) && vertices[idx2] !== vertices[idx1]) validSuccessorsForA.push(vertices[idx2]);
    });
    if (validSuccessorsForA.length < 3) {
        validSuccessorsForA = sample(intermediateVertices, 3);
    }
    transitionTable['A'][''] = sample(validSuccessorsForA, 3);
    transitionTable['A'][''].forEach(succ => {
        transitionTable[succ]['A'] = transitionTable[succ]['A'] || [];
        if (!transitionTable[succ]['A'].includes('A')) {
            transitionTable[succ]['A'].push('A');
        }
    });

    // Chemin A à B
    const bPredecessor = sample(intermediateVertices, 1)[0];
    const pathLength = Math.min(3, intermediateVertices.length - 1);
    const pathToB = ['A', ...sample(intermediateVertices.filter(v => v !== bPredecessor), pathLength), bPredecessor, 'B'];
    for (let i = 0; i < pathToB.length - 1; i++) {
        const curr = pathToB[i];
        const next = pathToB[i + 1];
        const pred = i === 0 ? '' : pathToB[i - 1];
        transitionTable[curr][pred] = transitionTable[curr][pred] || [];
        if (!transitionTable[curr][pred].includes(next)) {
            transitionTable[curr][pred].push(next);
            transitionTable[next][curr] = transitionTable[next][curr] || [];
            if (!transitionTable[next][curr].includes(curr)) {
                transitionTable[next][curr].push(curr);
            }
        }
    };

    // Prédécesseurs et successeurs pour intermédiaires et B
    [...intermediateVertices, 'B'].forEach(vertex => {
        const vIndex = vertices.indexOf(vertex);
        let possiblePredecessors = vertices.filter(v => v !== vertex && !Object.keys(transitionTable[vertex]).includes(v));
        const predecessors = [];
        validK.forEach(k => {
            const idx1 = (vIndex + k) % vertices.length;
            const idx2 = (vIndex - k + vertices.length) % vertices.length;
            if (possiblePredecessors.includes(vertices[idx1])) predecessors.push(vertices[idx1]);
            if (possiblePredecessors.includes(vertices[idx2]) && vertices[idx2] !== vertices[idx1]) predecessors.push(vertices[idx2]);
        });
        if (predecessors.length < 3) {
            const remaining = sample(possiblePredecessors.filter(v => !predecessors.includes(v)), 3 - predecessors.length);
            predecessors.push(...remaining);
        }

        predecessors.forEach((pred, i) => {
            transitionTable[vertex][pred] = transitionTable[vertex][pred] || [];
            const possibleSuccessors = vertices.filter(v => v !== vertex && coordinates[v] && v !== 'A');
            if (i === 0) {
                const validSuccessors = possibleSuccessors.filter(v => {
                    const succIndex = vertices.indexOf(v);
                    return validK.some(k => (
                        succIndex === (vIndex + k) % vertices.length ||
                        succIndex === (vIndex - k + vertices.length) % vertices.length
                    )) && (Math.random() > 0.2 || v !== 'B');
                });
                const succs = validSuccessors.length < 2 ? sample(possibleSuccessors, Math.min(2, possibleSuccessors.length)) : sample(validSuccessors, 2);
                succs.forEach(succ => {
                    if (!transitionTable[vertex][pred].includes(succ)) {
                        transitionTable[vertex][pred].push(succ);
                        transitionTable[succ][vertex] = transitionTable[succ][vertex] || [];
                        if (!transitionTable[succ][vertex].includes(vertex)) {
                            transitionTable[succ][vertex].push(vertex);
                        }
                    }
                });
            } else {
                const validSuccessors = possibleSuccessors.filter(v => {
                    const succIndex = vertices.indexOf(v);
                    return validK.some(k => (
                        succIndex === (vIndex + k) % vertices.length ||
                        succIndex === (vIndex - k + vertices.length) % vertices.length
                    )) && (Math.random() > 0.1 || v !== 'B');
                });
                const succ = validSuccessors.length < 1 ? sample(possibleSuccessors, 1)[0] : sample(validSuccessors, 1)[0];
                if (succ && !transitionTable[vertex][pred].includes(succ)) {
                    transitionTable[vertex][pred].push(succ);
                    transitionTable[succ][vertex] = transitionTable[succ][vertex] || [];
                    if (!transitionTable[succ][vertex].includes(vertex)) {
                        transitionTable[succ][vertex].push(vertex);
                    }
                }
            }
        });
    });

    // Transitions supplémentaires (seulement intermédiaires)
    intermediateVertices.forEach(vertex => {
        if (Math.random() < 0.3) {
            const possiblePredecessors = vertices.filter(v => v !== vertex && !Object.keys(transitionTable[vertex]).includes(v) && v !== 'A');
            const extraPredecessor = sample(possiblePredecessors, 1)[0];
            if (extraPredecessor && coordinates[extraPredecessor]) {
                const vIndex = vertices.indexOf(vertex);
                const validSuccessors = intermediateVertices.filter(v => {
                    const succIndex = vertices.indexOf(v);
                    return validK.some(k => (
                        succIndex === (vIndex + k) % vertices.length ||
                        succIndex === (vIndex - k + vertices.length) % vertices.length
                    ));
                });
                const succ = validSuccessors.length < 1 ? sample(intermediateVertices.filter(v => v !== vertex), 1)[0] : sample(validSuccessors, 1)[0];
                transitionTable[vertex][extraPredecessor] = [succ];
                transitionTable[succ][vertex] = transitionTable[succ][vertex] || [];
                if (!transitionTable[succ][vertex].includes(vertex)) {
                    transitionTable[succ][vertex].push(vertex);
                }
            }
        }
    });

    // Table c6
    const c6Table = {};
    vertices.forEach(v => {
        c6Table[v] = [];
        const succs = new Set(Object.values(transitionTable[v]).flat());
        succs.forEach(succ => {
            if (coordinates[succ]) {
                c6Table[v].push([succ, 'tout droit']);
            }
        });
    });

    // Garantir chemin A à B
    if (!hasPathToB(c6Table, 'A', 'B')) {
        const nonDirectToA = intermediateVertices.filter(v => !transitionTable['A'][''].includes(v));
        const extraPred = sample(nonDirectToA, 1)[0];
        transitionTable[extraPred][''] = transitionTable[extraPred][''] || [];
        transitionTable[extraPred][''].push('B');
        transitionTable['B'][extraPred] = transitionTable['B'][extraPred] || [];
        transitionTable['B'][extraPred].push(extraPred);
        c6Table[extraPred].push(['B', 'tout droit']);
        if (!c6Table['B'].some(([s]) => s === extraPred)) {
            c6Table['B'].push([extraPred, 'tout droit']);
        }
    }

    return { transitionTable, c6Table, coordinates };
}

function sample(array, n) {
    if (!array || array.length === 0) return [];
    const shuffled = array.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
}

function distance(coord1, coord2) {
    if (!coord1 || !coord2 || !Array.isArray(coord1) || !Array.isArray(coord2)) {
        console.error('Invalid coordinates:', coord1, coord2);
        return Infinity;
    }
    return Math.sqrt((coord2[0] - coord1[0]) ** 2 + (coord2[1] - coord1[1]) ** 2);
}

function hasPathToB(transitionTable, start, end) {
    const visited = new Set();
    function dfs(current) {
        if (current === end) return true;
        if (visited.has(current)) return false;
        visited.add(current);
        return transitionTable[current]?.some(([next]) => next && dfs(next)) || false;
    }
    return dfs(start);
}


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



const { transitionTable, directionTable, coordinates } = generateComplexTransitionTableWithCoordinates(4);



// Dessiner le graphe initial
var chemin= transitionTable; // table de transitions
var chemin1= c6Table//table de directions
var nodeCoordinates =Cor;//coordonnées des sommets

/*graph_rep(chemin, nodeCoordinates);*/

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


