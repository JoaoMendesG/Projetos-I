const dinosaur = document.querySelector('.dinosaur');
const background = document.querySelector('.background');

let isJumping = false;
let isGameover = false;
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode === 32 || event.keyCode === 38) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {

        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;

        } else {
          position -= 20;
          dinosaur.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      position += 20;
      dinosaur.style.bottom = position + 'px';
    }
  }, 20);
}

function generateCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  if (isGameover) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftTimer = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftTimer);
      background.removeChild(cactus);

    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      clearInterval(leftTimer);
      isGameover = true;
      document.body.innerHTML = '<h1 class="gameover">Game Over Dude ! :(</h1>';

    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 20);

  setTimeout(generateCactus, randomTime); //recursividade
}

generateCactus();
document.addEventListener('keyup', handleKeyUp);