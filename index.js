function mudarImagem() {
    var text = window.document.getElementById('texto');
    text.style.fontSize = '35px';
    text.innerText = "Esse é o melhor do mundo em 2021";
    text.style.transition = "all 2.5s";
    var imagem = window.document.getElementById('imagem');
    imagem.src = "lewa.jpeg";
    var cor = window.document.getElementById('pagina');
    cor.style.backgroundColor = 'cyan';
    cor.style.transition = "all 3.0s";
    
    
}