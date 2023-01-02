/* eslint-disable no-undef */
// @ts-nocheck

// Find my blog at https://codeheir.com/
// I do a lot of p5.js stuff that might interest you!

let initialHealth = 100;
let health = 100;

let initialBullets = 10;
let bulletsRemaining = 10;

class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = 20;
    }


    draw() {
        push();
        fill(255, 255, 0);
        circle(this.x, this.y, 10);
        pop();
    }

    update() {
        this.x += this.speed * cos(this.angle);
        this.y += this.speed * sin(this.angle);
    }
}


class Player {
    constructor() {
        this.pos = createVector(width / 2, height / 2)
        this.angle = 0;
        this.bullets = [];
    }

    draw() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        image(playerImg, -50, -50, 75, 75);
        pop();

        for (let bullet of this.bullets) {
            bullet.update();
            bullet.draw();
        }
    }

    update() {
        let xSpeed = 0;
        let ySpeed = 0;
        if (keyIsDown(65)) {
            xSpeed = -2;
        }

        if (keyIsDown(68)) {
            xSpeed = 2;
        }

        if (keyIsDown(87)) {
            ySpeed = -2;
        }

        if (keyIsDown(83)) {
            ySpeed = 2;
        }




        this.pos.add(xSpeed, ySpeed);
        this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x); // add this
    }

    shoot() {
        if (bulletsRemaining > 0) {
            this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
            bulletsRemaining--;
        }
    }

    hasShot(zombie) {
        for (let i = 0; i < this.bullets.length; i++) {
            if (dist(this.bullets[i].x, this.bullets[i].y, zombie.pos.x, zombie.pos.y) < 15) {
                this.bullets.splice(i, 1);
                return true;
            }
        }
        return false;
    }
}


class Zombie {

    constructor(speed) {
        this.speed = speed;
        let y;
        if (random(1) < 0.5) {
            // from the top
            y = random(-300, 0);
        } else {
            // from the bottom
            y = random(height, height + 300);
        }

        let x = random(-300, width + 300);
        this.pos = createVector(x, y);
    }


    draw() {
        push();
       
        let angle = atan2(player.pos.y - this.pos.y, player.pos.x - this.pos.x);
        translate(this.pos.x, this.pos.y);
        rotate(angle);
        
        image(zombieImg, -35, -35, 75, 75);
        pop();
    }


    update() {
        let difference = p5.Vector.sub(player.pos, this.pos);
        difference.limit(this.speed);
        this.pos.add(difference);
    }

    ateYou() {
        return dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y) < 20;
    }
}

let player;
let zombies = [];

let div = document.getElementById("game");
let width = div.offsetWidth;
let height = div.offsetHeight;


let zombieSpawnTime = 300;
let zombieMaxSpeed = 5;
let frame = 0
let score = 0;
function setup() {
    let myCanvas = createCanvas(width, height);
    myCanvas.parent("game");
    player = new Player();

    zombieImg = loadImage("assets/game/zombie.gif");
    playerImg = loadImage("assets/game/soldier.gif");

    grassImg = loadImage("assets/game/lander.png");
}

function draw() {
    image(grassImg, 0, 0, width, height);
    rectMode(CENTER);
    player.draw();
    player.update();


    for (let i = zombies.length - 1; i >= 0; i--) {
        zombies[i].draw();
        zombies[i].update();

        if (zombies[i].ateYou()) {

            health -= 1;
            
            if (health <= 0) {
                restart();
                health = initialHealth;
                bulletsRemaining = initialBullets;
                score = 0;
                zombieSpawnTime = 300;

            }

            break;
        }

        if (player.hasShot(zombies[i])) {
            score++;
            zombies.splice(i, 1);
        }
    }

    if (zombies.length < 20) {

        if (frame >= zombieSpawnTime) {
            zombies.push(new Zombie(random(zombieMaxSpeed)));
            zombieSpawnTime *= 0.95;
            frame = 0;
        }
        if (frameCount % 1000 == 0) {
            zombieMaxSpeed += 0.1;
        }
    }

    frame++;
    textAlign(CENTER);
    textSize(40);
    fill(255, 255, 255);
    text(`${score} Kills`, width / 2, 100);


    textAlign(RIGHT);
    textSize(40);
    fill(255, 0, 0);
    text(`${health}/${initialHealth} +`, width - 100, 50);


    textAlign(RIGHT);
    textSize(20);
    fill(255, 255, 255);
    text(`${bulletsRemaining}/${initialBullets}`, width - 100, 100);

  
}

function restart() {
    player = new Player();
    zombies = [];
    zombieSpawnTime = 300;
    zombieMaxSpeed = 2;
    score = 0;
}

function mouseClicked() {
    player.shoot();
}

function keyPressed() {
    if (keyCode === 82) {
        bulletsRemaining = initialBullets;
    }
}