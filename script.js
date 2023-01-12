function trocaImg(imagem) {
  let id = document.getElementById("imagem");
  if ((imagem = id)) {
    document.getElementById("imagem").src = "https://media3.giphy.com/media/7slrmFPHImqFqimyX3/giphy.gif?cid=790b76119c735ab92d408f7fa7ea640f20607f5121bf221c&rid=giphy.gif&ct=g";
    document.getElementById("imagem").id = "img1";
    document.querySelector("button").innerHTML = "ADICIONADO";
    document.querySelector("button").style.background = "#9085ab";
  } else {
    document.getElementById("img1").src = "./img/sofa1.svg";
    document.getElementById("img1").id = "imagem";
    document.querySelector("button").innerHTML = "ADICIONAR À CESTA";
    document.querySelector("button").style.background = "none";
  }
}
