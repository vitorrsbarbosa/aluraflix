// function adicionarMugiwaras() {
//   var mugiwaraProfilePictures = ['https://miro.medium.com/v2/resize:fit:1200/0*j7sVnq-dE0XWdS12.jpeg', 'https://s.aficionados.com.br/imagens/roronoa-zoro-personagens-mais-queridos-one-piece_t.jpg', 'https://sm.ign.com/ign_br/screenshot/default/blob_z8c5.jpg', 'https://i.ytimg.com/vi/Q1BqlYsTb7E/maxresdefault.jpg', 'https://i.pinimg.com/originals/a4/4a/7f/a44a7fa176f6ca34392a7260018f19cb.jpg', 'https://criticalhits.com.br/wp-content/uploads/2021/05/Tony-Tony-Chopper-One-Piece.jpg', 'https://sm.ign.com/t/ign_br/screenshot/default/one-piece-nico-robin_9sgf.1200.jpg', 'https://sm.ign.com/ign_br/screenshot/default/franky-cosplay-one-piece_7art.jpg', 'https://practicaltyping.com/wp-content/uploads/2019/01/brook.jpg', 'https://criticalhits.com.br/wp-content/uploads/2023/03/Luffy-hugging-Jinbe.jpg']
//   var mugirawaName = ['Monkey D. Luffy', 'Roronoa Zoro', 'Nami', 'Usopp', 'Vinsmoke Sanji', 'Tony Tony Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe']

//   for (var i = 0;i < mugiwaraProfilePictures.length;i++) {
//     document.write(`<img src=${mugiwaraProfilePictures[i]}>`)
//     document.write(`<p>${mugirawaName[i]}</p>`)
//   }
// }

function adicionarFilme() {
  var filme = armazenarFilmeInfo()

  limparTextos()

  var elementoLista = document.getElementById('listaFilmes')
  elementoLista.innerHTML += `<a href="${filme.filmeLink}" target="_blank"><img src=${filme.filmeImage}></a><p>${filme.filmeName}</p>`
}

function armazenarFilmeInfo() {
  var filmeImage = document.getElementById('image').value
  var filmeName = document.getElementById('name').value
  var filmeLink = document.getElementById('link').value
  var filme = [filmeImage, filmeName, filmeLink]
  return filme
}

function limparTextos() {
  document.getElementById('image').valeu = ''
  document.getElementById('name').value = null
  document.getElementById('link').value = null
}
