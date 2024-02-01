const botaoPlayPause = document.getElementById("play-pause");
const audioMusic = document.getElementById("audio-musica");
const botaoAvancar = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const imgCd = document.getElementById("img-cd");
const music1 = document.getElementById("m1");
const music2 = document.getElementById("m2");
const music3 = document.getElementById("m3");
const music4 = document.getElementById("m4");
const music5 = document.getElementById("m5");
const music6 = document.getElementById("m6");
const music7 = document.getElementById("m7");
const music8 = document.getElementById("m8");
const music9 = document.getElementById("m9");
const music10 = document.getElementById("m10");
const repeatMusic = document.getElementById("botaoPlayPlaylist");
const barraProgresso = document.getElementById("barraProgresso");
const curtida = document.getElementById("heart");

const maxFaixa = 10;
let = taTocando = 0;
let = faixaAtual = 1;
let = repeatActive = 0;
let selectLike = 0

const nameFaixa = {
  1: "Bênçãos Que Não Têm Fim",
  2: "Toca Em Mim De Novo",
  3: "Minha Morada",
  4: "Oi, Jesus",
  5: "Oi, Jesus",
  6: "Oi, Jesus",
  7: "Oi, Jesus",
  8: "Oi, Jesus",
  9: "Oi, Jesus",
  10: "Oi, Jesus",
};

function toggleBarraLateral() {
  let barraLateral = document.getElementById("barraLateral");
  let conteudoPrincipal = document.getElementById("conteudoPrincipal");

  if (barraLateral.style.width === "300px") {
    barraLateral.style.width = "0";
    conteudoPrincipal.style.marginLeft = "0";
  } else {
    barraLateral.style.width = "300px";
    conteudoPrincipal.style.marginLeft = "300px";
  }
}
function TocarMusic1() {
  faixaAtual = 1;
  audioMusic.src = "./music/" + faixaAtual + ".mp3";
  playPause();
  nomeMusica();
  trocarImgCd();
}
function TocarMusic2() {
  faixaAtual = 2;
  audioMusic.src = "./music/" + faixaAtual + ".mp3";
  playPause();
  nomeMusica();
  trocarImgCd();
}

function TocarMusic3() {
  faixaAtual = 3;
  audioMusic.src = "./music/" + faixaAtual + ".mp3";
  playPause();
  nomeMusica();
  trocarImgCd();
}
function TocarMusic4() {
  faixaAtual = 4;
  audioMusic.src = "./music/" + faixaAtual + ".mp3";
  playPause();
  nomeMusica();
  trocarImgCd();
}
function tocarFaixa() {
  audioMusic.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}
function pausarFaixa() {
  audioMusic.pause();
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  botaoPlayPause.classList.add("bi-play-circle-fill");
}

function playPause() {
  if (taTocando === 0) {
    taTocando = 1;
    tocarFaixa();
    nomeMusica();
  } else {
    taTocando = 0;
    pausarFaixa();
    nomeMusica();
  }
}
function trocarImgCd() {
  imgCd.src = `./assets/musica-` + faixaAtual + ".jpg";
}
function nomeMusica() {
  const informacoesFaixa = document.getElementById("nomeMusica");
  informacoesFaixa.innerHTML = `${nameFaixa[faixaAtual]}`;
}
function proximaFaixa() {
  if (faixaAtual === maxFaixa) {
    faixaAtual = 1;
  } else {
    faixaAtual++;
  }
  audioMusic.src = "./music/" + faixaAtual + ".mp3";
  tocarFaixa();
  trocarImgCd();
  nomeMusica();
  taTocando = 1;
}

function voltarFaixa() {
  if (faixaAtual === maxFaixa) {
    faixaAtual = maxFaixa;
  } else {
    faixaAtual = faixaAtual - 1;
  }
  audioMusic.src = "./music/" + faixaAtual + ".mp3";
  tocarFaixa();
  trocarImgCd();
  nomeMusica();
  taTocando = 1;
}
function botaoRepeatActivate() {
  if (repeatActive === 0) {
    repeatActive = 1;
    repeatMusic.classList.remove("bi-repeat");
    repeatMusic.classList.add("bi-repeat-1");
  } else {
    repeatActive = 0;
    repeatMusic.classList.remove("bi-repeat-1");
    repeatMusic.classList.add("bi-repeat");
  }
}

function repeat() {
    repeatMusic.classList.remove()
    // Atualiza a barra de progresso conforme o áudio é reproduzido
    audioMusic.addEventListener("timeupdate", function () {
      const percentual = (audioMusic.currentTime / audioMusic.duration) * 100;
      barraProgresso.value = percentual;
    });
  }

barraProgresso.addEventListener("input", function () {
  const percentual = this.value;
  const novaPosicao = (percentual * audioMusic.duration) / 100;
  audioMusic.currentTime = novaPosicao;
});

// Atualiza a barra de progresso conforme o áudio é reproduzido
audioMusic.addEventListener("timeupdate", function () {
  const percentual = (audioMusic.currentTime / audioMusic.duration) * 100;
  barraProgresso.value = percentual;
});

function like() {
    
    if(selectLike === 0){
        selectLike = 1
        curtida.classList.remove('bi-heart');
        curtida.classList.add('bi-heart-fill');
        curtida.classList.add('heartRed');

    }else {
        selectLike = 0
        curtida.classList.remove('heartRed');
        curtida.classList.remove('bi-heart-fill');
        curtida.classList.add('bi-heart');
        
    }
}
curtida.addEventListener('click', like)
botaoPlayPause.addEventListener("click", playPause);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoAnterior.addEventListener("click", voltarFaixa);
music1.addEventListener("click", TocarMusic1);
music2.addEventListener("click", TocarMusic2);
music3.addEventListener("click", TocarMusic3);
music4.addEventListener("click", TocarMusic4);
repeatMusic.addEventListener("click", repeat);

document.getElementById("toggleBtn").addEventListener("click", function () {
  toggleBarraLateral();
});
