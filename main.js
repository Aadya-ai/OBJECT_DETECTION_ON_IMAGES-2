img = "";
status = "";

function preload() {
    img = loadImage('Dining.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#00008B");
    text("Table", 60, 75);
    noFill();
    stroke("#00008B");
    rect(50, 60, 550, 350);

    fill("#0000FF");
    text("Chair", 320, 120);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 320);
}

function Kchat() {
    window.location.href = "";
}

function Back() {
    window.location.href = "";
}