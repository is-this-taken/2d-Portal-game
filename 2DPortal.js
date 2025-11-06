//number variables
var i = 10;
var a = 0;
var b = 0;
var c = 0;
var u = 1;
var o = 0;
var dx = 0;
var dy = 0;
var dz = 5;
var bx = 240;
var by = 25;


//global variables
var gun;
var wall;
var line;
var cube;
var elem;
var exit;
var rect;
var chell;
var floor;
var lazer;
var anyKey;
var mouseX;
var mouseY;
var restart;
var platform;
var lineCheck;
var platformer;
var portalWall;
var portalWall1;
var portalWall2;
var portalWall3;
var portalWall4;
var restartBlock;
var bluePortal;
var orangePortal;
var checkRestart;

//title screen
function start(){
    removeAll();
    stopTimer(antiFloat);
    stopTimer(right);
    stopTimer(left);
    stopTimer(jump);
    stopTimer(nextLVL);
    stopTimer(teleportChell);
    stopTimer(checkLazer);
    
    i = 10;
    a = 0;
    b = 0;
    u = 1;
    o = 0;
    dx = 0;
    dy = 0;
    dz = 5;
    bx = 240;
    by = 25;
    
    var mySong = new Audio("https://codehs.com/uploads/84127c98e8f26cb4737f7f7e4ca3aef5");
    mySong.play();
    mySong.loop = true;
    
    var backround = new WebImage("https://codehs.com/uploads/81154c74379e4b629f0adfc59447a65c");
    backround.setSize(getWidth(), getHeight());
    add(backround);
    
    var name = new Text("Portal", "40pt Courier");
    name.setPosition(getWidth()/2 - name.getWidth()/2 , getHeight()/2);
    name.setColor(Color.white);
    add(name);
    
    var soundOn = new WebImage("https://codehs.com/uploads/daaf416dc58d2adb81087154d485fb9a");
    soundOn.setSize(30, 30);
    add(soundOn);
    
    var portalBlue = new Oval(25, 50);
    portalBlue.setPosition(getWidth()/2 + name.getWidth()/2 + 20, getHeight()/2 - name.getHeight()/2);
    portalBlue.setColor(Color.blue);
    add(portalBlue);
    
    var portalOrange = new Oval(25, 50);
    portalOrange.setPosition(getWidth()/2 - name.getWidth()/2 - 22, getHeight()/2 - name.getHeight()/2);
    portalOrange.setColor(Color.orange);
    add(portalOrange);
    
    cube = new WebImage("https://codehs.com/uploads/5273ee09cb767cbd02b65de0d87a0c41");
    cube.setSize(30, 30);
    cube.setPosition(getWidth()/2 - name.getWidth()/2 - 22 - cube.getWidth()/2,110);
    add(cube);
    
    setTimer(moveCube, 250);
    setTimer(teleportCube, 1000);
    setTimer(setBy, 2000);
    setTimer(setTele, 2000);
    
    anyKey = new Text("Press ANY key to continue", "10pt Courier");
    anyKey.setPosition(getWidth()/2 - anyKey.getWidth()/2, getHeight()/2 + name.getHeight()/2);
    anyKey.setColor(Color.white);
    add(anyKey);
    
    setTimer(moveAnyKey, 500);

    keyDownMethod(info);
}

//tells move cube how to move
function setBy(){
    if (by == 25){
        by = -25;
    }else{
        by = 25;
    }
}

//animation of the cube
function moveCube(){
    cube.move(0, by);
}

//tells teleport cube when to teleport
function setTele(){
    if (bx == 240){
        bx = -240;
    }else{
        bx = 240;
    }
}

//teleports the cube in the title animation
function teleportCube(){
    cube.move(bx, 0);
    stopTimer(teleportCube);
    setTimer(teleportCube, 2000);
    
}

//animation of the text
function moveAnyKey(){
    anyKey.move(0, dz);
    if (dz == 5){
        dz = -5;
    }else{
        dz = 5;
    }
}

//how to play
function info(){
    removeAll();
    stopTimer(moveAnyKey);
    
    var backround = new WebImage("https://codehs.com/uploads/81154c74379e4b629f0adfc59447a65c");
    backround.setSize(getWidth(), getHeight());
    add(backround);
    
    var soundOn = new WebImage("https://codehs.com/uploads/daaf416dc58d2adb81087154d485fb9a");
    soundOn.setSize(30, 30);
    add(soundOn);
    
    var name = text("Use W,A,S,D to move", getHeight()/2 - 65);
    var name = text("Use the mouse to aim at the dark wall",getHeight()/2 - 50);
    var name = text("Then Q and E to shoot your portals", getHeight()/2 - 35);
    var name = text("Jump through one portal to get to the other", getHeight()/2 - 20);
    var name = text("The goal is to get to the exit and press W", getHeight()/2 - 5);
    var name = text("Tip: Using R will restart the level at anytime", getHeight()/2 + 30);
    var name = text("Good Luck", getHeight()/2 + 55);
    var name = text("Press ANY key to continue", getHeight()/2 + 85);
    
    keyDownMethod(stageZeroHalf);
}

//creates text
function text(text, height){
    var name = new Text(text, "10pt Courier");
    name.setPosition(getWidth()/2 - name.getWidth()/2 , height);
    name.setColor(Color.white);
    add(name);
}

function stageZeroHalf(){
    
    //reset screen
    removeAll();
    stopTimer(antiFloat);
    stopTimer(right);
    stopTimer(left);
    stopTimer(jump);
    stopTimer(nextLVL);
    stopTimer(teleportChell);
    
    var backround = new WebImage("https://codehs.com/uploads/81154c74379e4b629f0adfc59447a65c");
    backround.setSize(getWidth(), getHeight());
    add(backround);
    
    text = new Text("Teleportation Time", "20pt Courier");
    text.setPosition(getWidth()/2 - text.getWidth()/2, getHeight()/2);
    text.setColor(Color.white);
    add(text);
    
    setTimer(stageOneBegin, 1000);
}

function stageOneBegin(){
    var OneBegin = stageOne();
    stopTimer(stageOneBegin);
}

//LVL 1
function stageOne(){
    
    //reset screen
    removeAll();
    stopTimer(antiFloat);
    stopTimer(right);
    stopTimer(left);
    stopTimer(jump);
    stopTimer(nextLVL);
    stopTimer(teleportChell);
    stopTimer(chellDead);
    
    wall = new WebImage("https://codehs.com/uploads/b9f7669144a18f03ab2d232f1ac26a7b");
    wall.setSize(getWidth(), getHeight());
    add(wall);
    
    chell = new WebImage("https://codehs.com/uploads/6f43811d7ab6a0bce17986aa7598cbfb");
    chell.setSize(30, 60);
    chell.setPosition(20, getHeight()/5 * 4 - 40);
    
    gun = new WebImage("https://codehs.com/uploads/d19449f9720d6dc336ccd80b67f010b6");
    gun.setSize(20,10);
    gun.setPosition(chell.getX() + 23, chell.getY() + 15);
    
    floor = new WebImage("https://codehs.com/uploads/ea4c6e6470fbf235b7baa7ef1864cc16");
    floor.setSize(getWidth(), getHeight()/5 - chell.getHeight() + 40);
    floor.setPosition(0, getHeight()/5*4 + chell.getHeight() -40);
    add(floor);
    
    exit = new WebImage("https://codehs.com/uploads/c8a469d56aa994da3ee01bb3e9733292");
    exit.setSize(50, 50);
    exit.setPosition(50, 60);
    add(exit);
    
    bluePortal = new Oval(25, 50);
    bluePortal.setPosition(-100, -100);
    bluePortal.setColor(Color.blue);
    add(bluePortal);
    
    orangePortal = new Oval(25, 50);
    orangePortal.setPosition(-100, -100);
    orangePortal.setColor(Color.orange);
    add(orangePortal);
    
    add(gun);
    
    keyDownMethod(movement);
    keyUpMethod(antiMovement);
    mouseMoveMethod(gunAngle);
    
    setTimer(antiFloat, 1);
    setTimer(teleportChell, 1);
    setTimer(nextLVL, 1);
    setTimer(chellDead, 100);
    
    //PLATFORM CREATOR
    platformer = platform(400, 10, 0, 110);
    
    //portal walls
    portalWall1 = new WebImage("https://codehs.com/uploads/b01ab623a7fe8558664430c5240f4cc8");
    portalWall1.setSize(50, 100);
    portalWall1.setPosition(300, 300);
    add(portalWall1);
    
    portalWall2 = new WebImage("https://codehs.com/uploads/b01ab623a7fe8558664430c5240f4cc8");
    portalWall2.setSize(50, 100);
    portalWall2.setPosition(325, 0);
    add(portalWall2);
    
    add(chell);
}

function stageOneHalf(){
    
    //reset screen
    removeAll();
    stopTimer(antiFloat);
    stopTimer(right);
    stopTimer(left);
    stopTimer(jump);
    stopTimer(nextLVL);
    stopTimer(teleportChell);
    
    var backround = new WebImage("https://codehs.com/uploads/81154c74379e4b629f0adfc59447a65c");
    backround.setSize(getWidth(), getHeight());
    add(backround);
    
    text = new Text("JUMP", "20pt Courier");
    text.setPosition(getWidth()/2 - text.getWidth()/2, getHeight()/2);
    text.setColor(Color.white);
    add(text);
    
    setTimer(stageTwoBegin, 1000);
}

function stageTwoBegin(){
    var twoBegin = stageTwo();
    stopTimer(stageTwoBegin);
}

//LVL 2
function stageTwo(){
    
    //reset screen
    removeAll();
    stopTimer(antiFloat);
    stopTimer(right);
    stopTimer(left);
    stopTimer(jump);
    stopTimer(nextLVL);
    stopTimer(teleportChell);
    stopTimer(chellDead);
    
    rect = new Rectangle(100, 200);
    rect.setPosition(getWidth(), 0);
    add(rect);
    
    wall = new WebImage("https://codehs.com/uploads/b9f7669144a18f03ab2d232f1ac26a7b");
    wall.setSize(getWidth(), getHeight());
    add(wall);
    
    chell = new WebImage("https://codehs.com/uploads/6f43811d7ab6a0bce17986aa7598cbfb");
    chell.setSize(30, 60);
    chell.setPosition(20, getHeight()/5 * 4 - 40);
    
    gun = new WebImage("https://codehs.com/uploads/d19449f9720d6dc336ccd80b67f010b6");
    gun.setSize(20,10);
    gun.setPosition(chell.getX() + 23, chell.getY() + 15);
    
    floor = new WebImage("https://codehs.com/uploads/ea4c6e6470fbf235b7baa7ef1864cc16");
    floor.setSize(getWidth(), getHeight()/5 - chell.getHeight() + 40);
    floor.setPosition(0, getHeight()/5*4 + chell.getHeight() -40);
    add(floor);
    
    line = new Line(gun.getX() + 20, gun.getY() + 5, gun.getX() + 20, gun.getY() + 5);
    line.setLineWidth(1);
    
    exit = new WebImage("https://codehs.com/uploads/c8a469d56aa994da3ee01bb3e9733292");
    exit.setSize(50, 50);
    exit.setPosition(50, 60);
    add(exit);
    
    bluePortal = new Oval(25, 50);
    bluePortal.setPosition(-100, -100);
    bluePortal.setColor(Color.blue);
    add(bluePortal);
    
    orangePortal = new Oval(25, 50);
    orangePortal.setPosition(-100, -100);
    orangePortal.setColor(Color.orange);
    add(orangePortal);
    
    add(gun);

    keyDownMethod(movement);
    keyUpMethod(antiMovement);
    mouseMoveMethod(gunAngle);
    
    setTimer(antiFloat, 1);
    setTimer(teleportChell, 1);
    setTimer(nextLVL, 10);
    setTimer(chellDead, 100);
    
    //PLATFORM CREATOR
    platformer = platform(50, 10, 200, 300);
    platformer = platform(50, 10, 280, 380);
    platformer = platform(50, 10, 240, 340);
    platformer = platform(50, 10, 240, 260);
    platformer = platform(50, 10, 160, 260);
    platformer = platform(100, 10, 30, 260);
    platformer = platform(400, 10, 0, 110);
    
    //portal walls
    portalWall1 = new WebImage("https://codehs.com/uploads/b01ab623a7fe8558664430c5240f4cc8");
    portalWall1.setSize(50, 100);
    portalWall1.setPosition(10, 150);
    add(portalWall1);
    
    portalWall2 = new WebImage("https://codehs.com/uploads/b01ab623a7fe8558664430c5240f4cc8");
    portalWall2.setSize(50, 100);
    portalWall2.setPosition(325, 0);
    add(portalWall2);
    
    add(chell);
}

function stageTwoHalf(){
    
    //reset screen
    removeAll();
    stopTimer(antiFloat);
    stopTimer(right);
    stopTimer(left);
    stopTimer(jump);
    stopTimer(nextLVL);
    stopTimer(teleportChell);
    
    var backround = new WebImage("https://codehs.com/uploads/81154c74379e4b629f0adfc59447a65c");
    backround.setSize(getWidth(), getHeight());
    add(backround);
    
    text = new Text("lazers kill", "20pt Courier");
    text.setPosition(getWidth()/2 - text.getWidth()/2, getHeight()/2);
    text.setColor(Color.white);
    add(text);
    
    setTimer(stageThreeBegin, 1000);
}

function stageThreeBegin(){
    var threeBegin = stageThree();
    stopTimer(stageThreeBegin);
}

//LVL 3
function stageThree(){
    
    //reset screen
    removeAll();
    stopTimer(antiFloat);
    stopTimer(right);
    stopTimer(left);
    stopTimer(jump);
    stopTimer(nextLVL);
    stopTimer(teleportChell);
    stopTimer(checkLazer);
    stopTimer(chellDead);
    
    wall = new WebImage("https://codehs.com/uploads/b9f7669144a18f03ab2d232f1ac26a7b");
    wall.setSize(getWidth(), getHeight());
    add(wall);
    
    chell = new WebImage("https://codehs.com/uploads/6f43811d7ab6a0bce17986aa7598cbfb");
    chell.setSize(30, 60);
    chell.setPosition(20, getHeight()/5 * 4 - 40);
    
    gun = new WebImage("https://codehs.com/uploads/d19449f9720d6dc336ccd80b67f010b6");
    gun.setSize(20,10);
    gun.setPosition(chell.getX() + 23, chell.getY() + 15);
    
    floor = new WebImage("https://codehs.com/uploads/ea4c6e6470fbf235b7baa7ef1864cc16");
    floor.setSize(getWidth(), getHeight()/5 - chell.getHeight() + 40);
    floor.setPosition(0, getHeight()/5*4 + chell.getHeight() -40);
    add(floor);
    
    exit = new WebImage("https://codehs.com/uploads/c8a469d56aa994da3ee01bb3e9733292");
    exit.setSize(50, 50);
    exit.setPosition(300, 50);
    add(exit);
    
    lazer = new Rectangle(5, 304);
    lazer.setPosition(getWidth()/2, 0);
    lazer.setColor(Color.red);
    add(lazer);
    
    bluePortal = new Oval(25, 50);
    bluePortal.setPosition(-100, -100);
    bluePortal.setColor(Color.blue);
    add(bluePortal);
    
    orangePortal = new Oval(25, 50);
    orangePortal.setPosition(-100, -100);
    orangePortal.setColor(Color.orange);
    add(orangePortal);
    
    add(gun);
    
    keyDownMethod(movement);
    keyUpMethod(antiMovement);
    mouseMoveMethod(gunAngle);
    
    setTimer(antiFloat, 1);
    setTimer(teleportChell, 1);
    setTimer(nextLVL, 1);
    setTimer(checkLazer, 1);
    setTimer(chellDead, 100);
    
    //PLATFORM CREATOR
    //Left side platforms
    platformer = platform(50, 10, 50, 380);
    platformer = platform(50, 10, 100, 340);
    platformer = platform(50, 10, 50, 300);
    platformer = platform(50, 10, 100, 260);
    platformer = platform(50, 10, 50, 220);
    platformer = platform(50, 10, 100, 180);
    platformer = platform(50, 10, 50, 140);
    platformer = platform(150, 10, 25, 100);
    
    //right side platforms
    platformer = platform(150, 10, 260, 300);
    platformer = platform(50, 10, 260, 260);
    platformer = platform(50, 10, 260, 220);
    platformer = platform(50, 10, 260, 180);
    platformer = platform(50, 10, 260, 140);
    
    //template
    //platformer = platform(, , , );
    
    //portal walls
    portalWall1 = new WebImage("https://codehs.com/uploads/b01ab623a7fe8558664430c5240f4cc8");
    portalWall1.setSize(50, 100);
    portalWall1.setPosition(25, 0);
    add(portalWall1);
    
    portalWall2 = new WebImage("https://codehs.com/uploads/b01ab623a7fe8558664430c5240f4cc8");
    portalWall2.setSize(50, 100);
    portalWall2.setPosition(325, 180);
    add(portalWall2);
    
    add(chell);
}

//end screen
function stageVictory(){
    
    //reset screen
    removeAll();
    stopTimer(antiFloat);
    stopTimer(right);
    stopTimer(left);
    stopTimer(jump);
    stopTimer(nextLVL);
    stopTimer(teleportChell);
    
    var backround = new WebImage("https://codehs.com/uploads/81154c74379e4b629f0adfc59447a65c");
    backround.setSize(getWidth(), getHeight());
    add(backround);
    
    anyKey = new Text("You Win!", "20pt Courier");
    anyKey.setPosition(getWidth()/2 - anyKey.getWidth()/2, getHeight()/2);
    anyKey.setColor(Color.white);
    add(anyKey);
    
    setTimer(moveAnyKey, 500);
}

//function to create platforms
function platform(width, height, X, Y){
    var platform = new WebImage("https://codehs.com/uploads/ea4c6e6470fbf235b7baa7ef1864cc16");
    platform.setSize(width, height);
    platform.setPosition(X, Y);
    add(platform);
}

//makes it so that the player can go to the nest lvl
function nextLVL(){
    elem = getElementAt(chell.getX() + chell.getWidth()/2, chell.getY() + chell.getHeight() + 1);
    
    if (elem == exit){
        o++;
        var exitSound = new Audio("https://codehs.com/uploads/b8d51262ad6a277ab5e785e4e878dbc5");
        exitSound.play();
        if (o == 1){
            var theNextStage = stageOneHalf();
        }
        if (o == 2){
            var theNextStage = stageTwoHalf();
        }
        if (o == 3){
            var theNextStage = stageVictory();
        }
    }
}

//is chell out of the map
function chellDead(){
    elem = getElementAt(chell.getX() + chell.getWidth()/2, chell.getY() + chell.getHeight() + 1);
    
    if (elem == null){
        var ded = reset();
    }
}

//when you touch the lazer you die
function checkLazer(){
    elem = getElementAt(chell.getX() + chell.getWidth()/2, chell.getY() + chell.getHeight() + 1);
    
    if (elem == lazer){
        setTimer(deadLazer, 1500);
    
        var backround = new WebImage("https://codehs.com/uploads/81154c74379e4b629f0adfc59447a65c");
        backround.setSize(getWidth(), getHeight());
        add(backround);
        
        var burnt = new Text("That lazer is over 9000°C", "15pt Courier");
        burnt.setPosition(getWidth()/2 - burnt.getWidth()/2, getHeight()/2);
        burnt.setColor(Color.white);
        add(burnt);
    }
}

function deadLazer(){
    stopTimer(deadLazer);
    if (o == 0){
        var restartStage = stageOne();
    }
    if (o == 1){
        var restartStage = stageTwo();
    }
    if (o == 2){
        var restartStage = stageThree();
    }
}

//resets game when needed
function reset(){
    if (o == 0){
        var restartStage = stageOne();
    }
    if (o == 1){
        var restartStage = stageTwo();
    }
    if (o == 2){
        var restartStage = stageThree();
    }
}

//makes portals work
function teleportChell(){
    elem = getElementAt(chell.getX() + chell.getWidth()/2, chell.getY() + chell.getHeight());

    if (elem == bluePortal){
        chell.setPosition(orangePortal.getX(), orangePortal.getY());
        gun.setPosition(chell.getX() + 23, chell.getY() + 15);
	    var portalGunAudio = new Audio("https://codehs.com/uploads/96a1a0a9044211f05fbe2aeea66da777");
	    portalGunAudio.play();
    }
    if (elem == orangePortal){
        chell.setPosition(bluePortal.getX(), bluePortal.getY());
        gun.setPosition(chell.getX() + 23, chell.getY() + 15);
	    var portalGunAudio = new Audio("https://codehs.com/uploads/96a1a0a9044211f05fbe2aeea66da777");
	    portalGunAudio.play();
    }
}

//helps with later functions
function gunAngle(e){
    mouseX = e.getX();
    mouseY = e.getY();
}

//all key press functions
function movement(e){
    //movement press
    if(e.keyCode == Keyboard.letter('A')){
		if (dx != -10){
		    setTimer(left, 50);
		}
		dx = -10;
	}
	
	if(e.keyCode == Keyboard.letter('D')){
		if (dx != 10){
		    setTimer(right, 50);
		}
		dx = 10;
	}
	
	if(e.keyCode == Keyboard.letter('W')){
	    if (u == 1){
    		setTimer(jump, 10);
	    	stopTimer(antiFloat);
        }
	}
	//resets lvl
	if(e.keyCode == Keyboard.letter('R')){
	    if (o == 0){
            var restartStage = stageOne();
        }
        if (o == 1){
            var restartStage = stageTwo();
        }
        if (o == 2){
            var restartStage = stageThree();
        }
	}
	
	//allows portals to be placed
	//Orange
	var mousePosit = getElementAt(mouseX, mouseY);
	if (e.keyCode == Keyboard.letter('Q')){
	    var portalGunAudio = new Audio("https://codehs.com/uploads/96a1a0a9044211f05fbe2aeea66da777");
	    portalGunAudio.play();
	    
	    if (mousePosit == portalWall1){
	        orangePortal.setPosition(mouseX, mouseY);
	        add(orangePortal);
	    }
	    if (mousePosit == portalWall2){
	        orangePortal.setPosition(mouseX, mouseY);
	        add(orangePortal);
	    }
	    if (mousePosit == portalWall3){
	        orangePortal.setPosition(mouseX, mouseY);
	        add(orangePortal);
	    }
	    if (mousePosit == portalWall4){
	        orangePortal.setPosition(mouseX, mouseY);
	        add(orangePortal);
	    }
	}
	
	//Blue
	if (e.keyCode == Keyboard.letter('E')){
	    var portalGunAudio = new Audio("https://codehs.com/uploads/96a1a0a9044211f05fbe2aeea66da777");
	    portalGunAudio.play();
	    
	    if (mousePosit == portalWall1){
	        bluePortal.setPosition(mouseX, mouseY);
	        add(bluePortal);
	    }
	    if (mousePosit == portalWall2){
	        bluePortal.setPosition(mouseX, mouseY);
	        add(bluePortal);
	    }
	    if (mousePosit == portalWall3){
	        bluePortal.setPosition(mouseX, mouseY);
	        add(bluePortal);
	    }
	    if (mousePosit == portalWall4){
	        bluePortal.setPosition(mouseX, mouseY);
	        add(bluePortal);
	    }
	}
}

//stops the player from moving
function antiMovement(e){
    
    if(e.keyCode == Keyboard.letter('A')){
        stopTimer(left);
        dx = 0;
    }
    
    if(e.keyCode == Keyboard.letter('D')){
        stopTimer(right);
        dx = 0;
    }
}

//allows player to jump
function jump(){
    u = 2;
    chell.move(0, -6);
    gun.move(0, -6);
    i--;
    if (i < 0){
        stopTimer(jump);
        i = 10;
        setTimer(antiFloat, 1);
    }
}

//stops the player from hovering mid air
function antiFloat(){
    elem = getElementAt(chell.getX() + chell.getWidth()/2, chell.getY() + chell.getHeight() + 1);

    if (elem != wall){
        if (elem != portalWall1){
            if (elem != null){
                if (elem != restart){
                    if (elem != portalWall2){
                        u = 1;
                    }
                }
            }
        }
    }
    if (elem == floor){
        u = 1;
    }
    if (elem == wall){
        chell.move(0, 6);
        gun.move(0, 6);
    }
    if (elem == portalWall1){
        chell.move(0, 6);
        gun.move(0, 6);
    }
    if (elem == portalWall2){
        chell.move(0, 6);
        gun.move(0, 6);
    }
    if (elem == exit){
        chell.move(0, 6);
        gun.move(0, 6);
    }
}

//makes player move right
function right(){
    chell.move(dx, dy);
    gun.move(dx, dy);
}

//makes player move left
function left(){
    chell.move(dx, dy);
    gun.move(dx, dy);
}