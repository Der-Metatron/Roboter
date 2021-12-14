/*
Eddy the robot
Eigenschaften:
1. position X
2. position Y
3. Himmelsrichtung
*/
let WIDTH = 800;
let HEIGHT = 600;

let eddy = {
    posX: 0,
    posY: 0,
    // Orientierung - Himmelsrichtung (Norden, Osten, Süden, Westen)
    heading: 'EAST'
};

/*
Funktionen des Roboters
1. step() -> bewegt sich einen Schritt in seine Himmelsrichtung
2. rotate() -> rotiert sich um seine eigene Achse im Uhrzeigersinn
*/
function step() {
    /*
    FALLS OSTEN, DANN X UM EINS ERHÖHEN
    */
    if (eddy.heading == 'EAST') {
        if(eddy.posX == 15) {
            alert("Grenze")
        }
    else {  
        eddy.posX = eddy.posX + 1;
    }}  
    /*
     FALLS SÜDEN, DANN Y UM EINS ERHÖREN
         */
    if (eddy.heading == "SOUTH") {
        if(eddy.posY == 11) {
            alert("Grenze")
        }
        else {
        eddy.posY = eddy.posY + 1;
    }}

    // FALLS WESTEN, DANN X UM EINS VERRINGERN
    if (eddy.heading == "WEST") {
        // DARF KEINE MINUSWERTE ERREICHEN
        if (eddy.posX == 0) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posX = eddy.posX - 1;
        }
    }

    //FALLS NORDEN, DANN Y UM EINS VERRINGERN
    if (eddy.heading == "NORTH") {
        // DARF KEINE MINUSWERTE ERREICHEN
        if(eddy.posY == 0) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posY = eddy.posY - 1;
        }
    }
    update();
}

function rotate() {
    // FALLS OSTEN, DANN SÜDEN
    if (eddy.heading == "EAST") {
        eddy.heading = "SOUTH";
        update();
        return;
    };


    // FALLS SÜDEN, DANN WESTEN
    if (eddy.heading == "SOUTH") {
        eddy.heading = "WEST";
        update();
        return;
    }

    // FALLS WESTEN, DANN NORDEN
    if (eddy.heading == "WEST") {
        eddy.heading = "NORTH";
        update();
        return;
    }

    // FALLS NORDEN, DANN OSTEN
    if (eddy.heading == "NORTH") {
        eddy.heading = "EAST";
        update();
        return;
    }
}

function update() {
    document.getElementById("posX").innerHTML = eddy.posX;
    document.getElementById("posY").innerHTML = eddy.posY;
    document.getElementById("heading").innerHTML = eddy.heading;


canvasContext.clearRect(0, 0, canvas.width, canvas.height)
canvasContext.fillRect(eddy.posX * 50, eddy.posY * 50, 50, 50);
canvasContext.fillStyle = "#0F0";
}
/*
CANVAS ZEICHNEN IN HTML UND ÜBER CONTEXT IMPORTIEREN
ROBOTER EINZEICHNEN
IN DER CANVAS BEWEGUNGEN AUSFÜHREN
*/
let canvas = document.getElementById("myCanvas");
let canvasContext = canvas.getContext("2d");

canvasContext.fillRect(eddy.posX, eddy.posY * 50, 50, 50);