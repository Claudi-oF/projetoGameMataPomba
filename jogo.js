var altura = 0
var largura = 0 
var vidas = 1
var tempo = 10

var criaPombaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	//1500
	criaPombaTempo = 1500
} else if (nivel === 'dificil') {
	//1000
	criaPombaTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaPombaTempo = 750
}

function tamanhoTelaVariado(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

tamanhoTelaVariado()

var cronometro = setInterval(function() {
	
	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaPomba)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function posicaoRandomica() {

	// remover o pomba anterior (caso exista)
	if(document.getElementById('pomba')) {
		document.getElementById('pomba').remove()

		if(vidas > 3) {
		    window.location.href = 'fim_de_jogo.html'
		} else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        
            vidas++
		}
	}
	 
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90	
	
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)
	
	// criar elemento html
	var pomba = document.createElement('img')
	pomba.src = 'imagens/pomba.png'
	pomba.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	pomba.style.left = posicaoX + 'px'
	pomba.style.top = posicaoY + 'px'
	pomba.style.position = 'absolute'
	pomba.id = 'pomba'
	pomba.onclick = function() {
		this.remove()
	}

	document.body.appendChild(pomba)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'pomba1'
		case 1:
			return 'pomba2'
		case 2:
			return 'pomba3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}