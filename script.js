function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  O conteudo acima faz o mesmo que a primeira linha.
  */
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Renan Ramadan sorrindo usando uma toca preta com casaco caramelo em um fim de tarde na times square em NY"
    )
  } else {
    //se tiver sem light mode, manter a imagem atual
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Renan Ramadan sorrindo usando um casaco caramelo em uma noite iluminada na times square em NY"
    )
  }
}
