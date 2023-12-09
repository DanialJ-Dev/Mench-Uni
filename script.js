const redPlayers = document.querySelectorAll('.red, .red2, .red3, .red4, .red5, .red6, .red7, .red8, .red9');
const bluePlayers = document.querySelectorAll('.blue, .blue2, .blue3, .blue4, .blue5, .blue6, .blue7, .blue8, .blue9');
const yellowPlayers = document.querySelectorAll('.yellow, .yellow2, .yellow3, .yellow4, .yellow5, .yellow6, .yellow7, .yellow8, .yellow9');
const greenPlayers = document.querySelectorAll('.green, .green2, .green3, .green4, .green5, .green6, .green7, .green8, .green9');
const whiteWay = document.querySelectorAll('.white, .white2, .white3, .white4, .white6, .white7, .white8, .white9, .white10, .white11, .white12, .white13, .white14, .white16, .white17, .white18, .white19, .white20, .white21, .white22, .white23, .white24, .white26, .white27, .white28, .white29, .white30, .white31, .white32, .white33, .white34, .white36, .white37, .white38, .white39, .white40');

const playSound = (audioElement) => {
  audioElement.currentTime = 0; // Reset audio to start
  audioElement.play();
};

redPlayers.forEach(player => {
  player.addEventListener('mouseenter', () => {
    const redSound = document.getElementById('redSound');
    playSound(redSound);
  });
});

bluePlayers.forEach(player => {
  player.addEventListener('mouseenter', () => {
    const blueSound = document.getElementById('blueSound');
    playSound(blueSound);
  });
});

yellowPlayers.forEach(player => {
  player.addEventListener('mouseenter', () => {
    const yellowSound = document.getElementById('yellowSound');
    playSound(yellowSound);
  });
});

greenPlayers.forEach(player => {
  player.addEventListener('mouseenter', () => {
    const greenSound = document.getElementById('greenSound');
    playSound(greenSound);
  });
});

whiteWay.forEach(player => {
  player.addEventListener('mouseenter', () => {
    const whiteWay = document.getElementById('whiteSound');
    playSound(whiteSound);
  });
});