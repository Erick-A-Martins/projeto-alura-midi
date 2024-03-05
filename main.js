// JavaScript é uma linguagem case sensitive
// o ponto e virgula é opcional porém recomendado.
// document.querySelector() - acessa o documento html e a função busca e traz o elemento informado

// document.querySelector('input[type=tel]'); - acessa o documento html e procura pelo elemento input que tenha como atributo [type=tel]
// os colchetes fazem parte da sintaxe para seleção de atributos de um elemento HTML, funciona tanto para o CSS quanto para o Javascript
// entra dentro do console e imprime uma mensagem para ser visualizada
// console.log (contador);]

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento /*!= null*/ && elemento.localName === 'audio') { // se o valor for nulo ou vázio em uma referência não precisamos compará-lo com nulo
        elemento.play();
    } else {
        alert('Elemento não encontrado.');
        console.log('Elemento não encontrado ou seletor inválido.');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla'); 

// laço repetição (PARA)
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function () { // função anônima ou função sem nome so podem ser utilizada quando são o valor de algum atributo ou estão sendo armazenadas dentro de alguma referência constante ou variável.
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento /*objeto event*/) { // onkeydown evento ao apertar uma tecla
        if (evento.code === 'Space' || evento.code === 'Enter') { // operador "==" compara apenas valores e "===" compara valores e tipo de dado
            tecla.classList.add('ativa');
        }   
    }

    tecla.onkeyup = function () { // onkeyup evento ao soltar uma tecla
        tecla.classList.remove('ativa');
    }
}

// boa prática sempre deixar uma linha vázia no fim do documento

/* document.querySelector('.tecla_pom').onclick = tocaSomPom; 
 para guardar a função tocaSomPom() dentro do atributo onlick, devem ser retirados os parenteses ao atribui-la e somenter ter a REFERÊNCIA dela (peculiaridade do arquivo js) */

/* referência constante = listaDeTeclas
 As referências no JavaScript devem ser criadas ou declaradas com base no valor que elas vão receber e guardar */

 // adicionar e remover classes em um elemento HTML usando as funções add() e remove() do classList.
