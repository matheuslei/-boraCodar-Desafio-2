function trocaImg(imagem) {
  let id = document.getElementById("imagem");
  if ((imagem = id)) {
    document.getElementById("imagem").src = "./img/sofa2.gif";
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
