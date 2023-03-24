alert("Boas vindas ao jogo de BlackJack!")
if (confirm('Quer iniciar uma nova rodada?')) {
   let cartasUsuario = []
   const primeiraCartaUsuario = comprarCarta()
   const segundaCartaUsuario = comprarCarta()
   let somaDasCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   cartasUsuario.push(primeiraCartaUsuario.texto)
   cartasUsuario.push(segundaCartaUsuario.texto)

   // primeiraCartaUsuario.texto imprime o texto da carta. Nesse caso: "K♦️" enquanto primeiraCartaUsuario.valor imprime o valor

   let cartasPc = []
   const primeiraCartaPc = comprarCarta()
   const segundaCartaPc = comprarCarta()
   let somaDasCartasPc = primeiraCartaPc.valor + segundaCartaPc.valor
   cartasPc.push(primeiraCartaPc.texto)
   cartasPc.push(segundaCartaPc.texto)

   for (i = 0; confirm(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${primeiraCartaPc.texto}.
   \nDeseja comprar mais uma carta? `); i++) {
      let outraCartaUsuario = comprarCarta()
      cartasUsuario.push(outraCartaUsuario.texto)
      somaDasCartasUsuario = somaDasCartasUsuario + outraCartaUsuario.valor
      if (somaDasCartasUsuario > 21) {

         break
      }
   }

   if (somaDasCartasUsuario <= 21) {

      while (somaDasCartasPc <= somaDasCartasUsuario) {
         let outraCartaPc = comprarCarta()
         cartasPc.push(outraCartaPc.texto)
         somaDasCartasPc = somaDasCartasPc + outraCartaPc.valor

      }
   }

   if (somaDasCartasUsuario > somaDasCartasPc && somaDasCartasUsuario < 21 || somaDasCartasPc > 21) {
      alert(`Suas cartas são ${cartasUsuario} . Sua pontuação é ${somaDasCartasUsuario}. \nAs cartas do computador são ${cartasPc} . A pontuação do computador é ${somaDasCartasPc}. \nO usuário ganhou!`)
   } else if (somaDasCartasUsuario < somaDasCartasPc || somaDasCartasUsuario > 21) {
      alert(`Suas cartas são ${cartasUsuario} . Sua pontuação é ${somaDasCartasUsuario}. \nAs cartas do computador são ${cartasPc} . A pontuação do computador é ${somaDasCartasPc}. \nO computador ganhou!`)
   } else {
      alert(`Suas cartas são ${cartasUsuario} . Sua pontuação é ${somaDasCartasUsuario}. \nAs cartas do computador são ${cartasPc} . A pontuação do computador é ${somaDasCartasPc}. \nEmpate!`)
   }

} else {
   alert('O jogo acabou!')
}