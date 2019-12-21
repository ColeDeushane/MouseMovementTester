function Target(x ,y, pic) {
    this.length = 15;
    this.position = createVector(x, y);
    this.show = function() {
        image(pic, this.position.x, this.position.y);
    }
    this.setLength = function(z) {
        this.length = z;
    }
}

function consoleBox() {
    this.show = function() {
        strokeJoin(ROUND);
        fill(125);
        rect(5, 613, 400, 150);

        if(boxOneClicked) {
            fill(0);
            textSize(15);
            image(startImg, 50, 660);
            text("clicked.", 70, 673)
        }
        if(boxTwoClicked) {
            fill(0);
            textSize(15);
            image(endImg, 50, 680);
            text("clicked.", 70, 694)
            textSize(20);
            text("Time: "+(endTime / 1000).toFixed(4) + " seconds", 50, 715);
        }

    }
}

function mouseClicked() {
    if(mouseClicked && mouseX >= box[0].position.x && mouseX <= (box[0].position.x + box[0].length)) {
        clickSound.play();
        console.log("(" + mouseX + ", " + mouseY + ")");
        boxOneClicked = true;
        startTime = programStartTime;
    } else if(mouseClicked && mouseX >= box[1].position.x && mouseX <= (box[1].position.x + box[1].length)) {
        clickSound.play();
        console.log("(" + mouseX + ", " + mouseY + ")");
        boxTwoClicked = true;
        endTime = programStartTime - startTime;
        console.log("finished in: " + (endTime / 1000).toFixed(4) + " seconds.");
    } else if(mouseClicked && mouseX >= box[2].position.x && mouseX <= (box[2].position.x + box[2].length)) {
        clickSound.play();
        boxOneClicked = false;
        boxTwoClicked = false;
        tracer.length = 0;
        tracerIndex = 0;
        console.clear();
    } else {
        //print("miss");
    }
}

function mouseMoved() {
    if(mouseMoved) {
        return true;
    } else {
        return false;
    }
}
