let time =2000,
indexImage =0,
imagens = document.querySelectorAll('#slider img');
max = imagens.length;

console.log(imagens.length)

function proximaImagem(){
  imagens[indexImage].classList.remove("selected")
  indexImage++

  if(indexImage >= max){
    indexImage =0
  }
  imagens[indexImage].classList.add("selected")

}


function inicio(){
  setInterval(()=>{
    //troca de imagem
    proximaImagem()
    console.log("rodando")
  }, time)
}


window.addEventListener("load", inicio)