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
            image(startImg, 50, 660);
        }
        if(boxTwoClicked) {
            image(endImg, 50, 680);
            fill(0);
            text("time: "+(endTime / 1000).toFixed(4) + " seconds", 50, 715);
        }

    }
}

function mouseClicked() {
    if(mouseClicked && mouseX >= box[0].position.x && mouseX <= (box[0].position.x + box[0].length)) {
        //print("box 1 clicked");
        boxOneClicked = true;
        startTime = programStartTime;
    } else if(mouseClicked && mouseX >= box[1].position.x && mouseX <= (box[1].position.x + box[1].length)) {
        //print("box 2 clicked");
        boxTwoClicked = true;
        endTime = programStartTime - startTime;
        //print(endTime / 1000);
    } else if(mouseClicked && mouseX >= box[2].position.x && mouseX <= (box[2].position.x + box[2].length)) {
        boxOneClicked = false;
        boxTwoClicked = false;
        tracer.length = 0;
        tracerIndex = 0;
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
