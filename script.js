// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Como deve ser feita a formatação de uma String em JavaScript?",
    respostas: [
      { opcao: "Sem aspas", correto: false },
      { opcao: "Com aspas simples ou duplas", correto: true },
      { opcao: "Com colchetes", correto: false },
      { opcao: "Com parênteses", correto: false }
    ]
  },
  {
    pergunta: "Qual é a função do Math.random()?",
    respostas: [
      { opcao: "Gera um número inteiro.", correto: false },
      { opcao: "Arredonda um número para cima.", correto: false },
      { opcao: "Converte uma string em número.", correto: false },
      { opcao: "Gera um número aleatório entre 0 e 1.", correto: true }
    ]},
  {
    pergunta: "O que o comando if faz em um código?",
    respostas: [
      { opcao: "Executa um bloco de código sempre.", correto: false },
      { opcao: "Cria uma nova variável.", correto: false },
      { opcao: "Verifica se uma condição é verdadeira e executa um bloco de código se for.", correto: true },
      { opcao: "Finaliza a execução do programa.", correto: false }
    ]
  },
  {
    pergunta: "Qual é a função do loop while?",
    respostas: [
      { opcao: "Executar um bloco de código enquanto uma condição for verdadeira", correto: true },
      { opcao: "Executar um bloco de código apenas uma vez", correto: false },
      { opcao: "Comparar duas variáveis.", correto: false },
      { opcao: "Criar uma nova função", correto: false }
    ]
    },
  {
    pergunta: "Qual é a principal diferença entre o loop while e o loop for?",
    respostas: [
      { opcao: "O while é usado apenas para contagem, enquanto o for é usado para condições.", correto: false },
      { opcao: "O for é baseado em um contador, enquanto o while é baseado em uma condição.", correto: true },
      { opcao: "O while não pode ser usado para arrays, enquanto o for pode.", correto: false },
      { opcao: "Não há diferença, ambos são iguais.", correto: false }
    ]
    },
  {
    pergunta: "O que é JSON?",
    respostas: [
      { opcao: "Um tipo de linguagem de programação", correto: false },
      { opcao: "Um banco de dados", correto: false},
      { opcao: "Um formato de texto usado para armazenar e transmitir dados", correto: true},
      { opcao: "Um sistema operacional", correto: false }
    ]
    },
  {
    pergunta: "Como você pode acessar o primeiro elemento de um array chamado jogadores?",
    respostas: [
      { opcao: "jogadores[1]", correto: false },
      { opcao: "jogadores.first()", correto: false},
      { opcao: "jogadores[0]", correto: true},
      { opcao: "jogadores[1st]", correto: false }
    ]
    },
  {
    pergunta: "O que é uma variável em JavaScript?",
    respostas: [
      { opcao: "Um espaço na memória para armazenar um valor", correto: true},
      { opcao: "Um tipo de dado que não pode ser alterado", correto: false },
      { opcao: "Um comando que executa uma função", correto: false},
      { opcao: "Um erro no código", correto: false }
    ]
  }];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 1;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
