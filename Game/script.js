score = 0;
cross = true;
audio = new Audio(`sound.mp3`);
audiogo = new Audio(`Gameover.mp3`);
setTimeout(() => {
    audio.play();
}, 1000);
myaudio = new Audio (`sound.mp3`);
if(typeof audio.loop ==`boolean`)
{
    audio.loop = true;
}
else{
    audio.addEventListener(`ended`, function(){
        this.currentTime = 0;
        this.play();
    },false);
}
audio.play();
document.onkeydown = function (e) {
    console.log("Key code is ", e.key)
    if (e.key == `ArrowUp`) {
        doraemon = document.querySelector(`.doraemon`);
        doraemon.classList.add(`animateDoraemon`);
        setTimeout(() => {
            doraemon.classList.remove(`animateDoraemon`)
        }, 700);
    }
    if (e.code == `ArrowRight`) {
        doraemon = document.querySelector(`.doraemon`);
        doraemonX = parseInt(window.getComputedStyle(doraemon, null).getPropertyValue(`left`));
        doraemon.style.left = doraemonX + 112 + "px";
    }
    if (e.code == `ArrowLeft`) {
        doraemon = document.querySelector(`.doraemon`);
        doraemonX = parseInt(window.getComputedStyle(doraemon, null).getPropertyValue(`left`));
        doraemon.style.left = (doraemonX - 112) + "px";
    }
}

setInterval(() => {
    doraemon = document.querySelector(`.doraemon`);
    gameOver = document.querySelector(`.gameOver`);
    obstacle = document.querySelector(`.obstacle`);

    dx = parseInt(window.getComputedStyle(doraemon, null).getPropertyValue(`left`));
    dy = parseInt(window.getComputedStyle(doraemon, null).getPropertyValue(`bottom`));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue(`left`));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue(`bottom`));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX,offsetY)
    if (offsetX < 113 && offsetY < 52) {
        gameOver.innerHTML = "Game Over = Reload to Play Again"
        obstacle.classList.remove(`obstacleAni`)
        audiogo.play();
        setTimeout(() => {
             audio.pause();
             audigo.pause();
        },100 );
    }
    else if (offsetX < 145 && cross) {
        score += 10;
        updateSCORE(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue(`animation.duration`));
            newDur = aniDur - 1;
            obstacle.style.animationDuration = newDur + `s`;
            console.log(`New animation duration: `,newDur)
        }, 500);
    }

}, 10);

function updateSCORE(score) {
    scoreContainer.innerHTML = "Your Score: " + score
}