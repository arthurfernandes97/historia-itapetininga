// Lista de perguntas do quiz
const questions = [
  {
    image: "./assets/bolinho-de-frango.jpg",
    question: "Qual é o famoso prato típico da culinária de Itapetininga que se tornou um verdadeiro símbolo gastronômico da cidade?",
    options: ["Virado à Paulista", "Afogado de Festa", "Bolinho de Frango", "Barreado"],
    correct: "Bolinho de Frango",
    explanation: "O Bolinho de Frango é um dos maiores ícones da culinária local, feito tradicionalmente com massa de milho e recheio de frango desfiado."
  },
  {
    image: "./assets/teddy-vieira.jpg",
    question: "Uma das composições mais populares da música sertaneja foi criada por um itapetiningano. Qual é o nome dessa música?",
    options: ["O Menino da Porteira", "Rei do Gado", "Boate Azul", "Fio de Cabelo"],
    correct: "O Menino da Porteira",
    explanation: "Composta pelo itapetiningano Teddy Vieira em parceria com Luisinho, 'O Menino da Porteira' tornou-se um dos maiores clássicos do sertanejo raiz."
  },
  {
    image: "./assets/anesia-pinheiro-machado.jpg",
    question: "Qual pioneira da aviação brasileira, nascida em Itapetininga, foi a primeira mulher a realizar um voo solo em céu nacional?",
    options: ["Anastácia Pinheiro Machado", "Anésia Pinheiro Machado", "Amélia Pinheiro Machado", "Antonia Pinheiro Machado"],
    correct: "Anésia Pinheiro Machado",
    explanation: "Anésia Pinheiro Machado nasceu em Itapetininga e foi uma importante pioneira da aviação brasileira, sendo a primeira mulher a realizar um voo solo em céu nacional."
  },
  {
    image: "./assets/julio-prestes.jpg",
    question: "Qual foi a importante figura política nascida em Itapetininga que foi eleita Presidente do Brasil em 1930, embora impedida de tomar posse pela Revolução daquele ano?",
    options: ["Fernando Henrique Cardoso", "Júlio Prestes", "Washington Luís", "Rodrigues Alves"],
    correct: "Júlio Prestes",
    explanation: "Júlio Prestes venceu as eleições presidenciais de 1930, mas não chegou a tomar posse devido à Revolução de 1930, que levou Getúlio Vargas ao poder."
  },
  {
    image: "./assets/terra-das-escolas.jpg",
    question: "Por qual apelido ou título histórico a cidade de Itapetininga é amplamente conhecida?",
    options: ["Terra do Trigo", "Capital dos Tropeiros", "Terra das Escolas", "Cidade das Flores"],
    correct: "Terra das Escolas",
    explanation: "Itapetininga é tradicionalmente conhecida como 'Terra das Escolas', em razão de sua forte tradição educacional e da importância histórica na formação de professores."
  },
  {
    image: "./assets/pouso-tropeiros.jpg",
    question: "Qual foi o principal fator econômico e histórico que motivou o surgimento do povoamento em Itapetininga no século XVIII?",
    options: [
      "A extração de ouro e pedras preciosas",
      "O pouso estratégico na rota dos tropeiros rumo às feiras de Sorocaba",
      "A fundação de grandes lavouras de café de exportação",
      "A construção da primeira ferrovia do estado"
    ],
    correct: "O pouso estratégico na rota dos tropeiros rumo às feiras de Sorocaba",
    explanation: "A região tornou-se ponto de descanso e abastecimento para os tropeiros que percorriam os caminhos em direção a Sorocaba."
  },
  {
    image: "./assets/aniversario-itapetininga.jpeg",
    question: "Em qual data é comemorado oficialmente o aniversário de fundação da cidade de Itapetininga?",
    options: ["17 de julho de 1852", "13 de março de 1855", "5 de novembro de 1770", "21 de abril de 1900"],
    correct: "5 de novembro de 1770",
    explanation: "O aniversário de Itapetininga é comemorado em 5 de novembro de 1770, data que marca a fundação oficial da Vila de Nossa Senhora dos Prazeres de Itapetininga, com a celebração da primeira missa solene e o levantamento do pelourinho."
  },
  {
    image: "./assets/extensao-territorial.jpeg",
    question: "Em termos de extensão territorial, qual é a posição de Itapetininga no estado de São Paulo?",
    options: ["O maior município", "O segundo maior município", "O terceiro maior município", "O quinto maior município"],
    correct: "O terceiro maior município",
    explanation: "Itapetininga destaca-se por sua vasta extensão territorial, sendo o terceiro maior município do estado de São Paulo em área."
  },
  {
    image: "./assets/xe-giria.jpeg",
    question: "Qual é uma expressão popular muito característica associada à fala de Itapetininga?",
    options: ["Uai", "Xé", "Bah", "Né"],
    correct: "Xé",
    explanation: "A expressão 'Xé' é a gíria tradicional de Itapetininga, bastante associada ao linguajar regional."
  },
  {
    image: "./assets/pedra-enxuta-laje-seca.jpg",
    question: "De origem indígena, qual é o significado tradicionalmente aceito para o nome 'Itapetininga'?",
    options: ["Rio das águas claras", "Terra de muitas flores", "Laje seca ou pedra enxuta", "Caminho das matas fechadas"],
    correct: "Laje seca ou pedra enxuta",
    explanation: "Itapetininga é tradicionalmente interpretado como 'laje seca' ou 'pedra enxuta', relacionando-se aos elementos de origem tupi presentes na formação do nome."
  }
];

// Variáveis de controle do jogo
let currentQuestionIndex = 0;
let score = 0;
let shuffledOptions = [];
let correctOptionValue = "";
let selectedOptionValue = null;

// Elementos da tela
const questionArea = document.getElementById("question-area");
const quizImage = document.getElementById("quiz-image");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const confirmBtn = document.getElementById("confirm-btn");
const quizFeedback = document.getElementById("quiz-feedback");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");
const progressFill = document.getElementById("progress-fill");
const quizCounter = document.getElementById("quiz-counter");
const quizCard = document.getElementById("quiz-card");
const quizResult = document.getElementById("quiz-result");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

// Mistura as alternativas para não ficarem na mesma ordem
function shuffleArray(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Carrega a pergunta atual na tela
function loadQuestion() {
  const currentQ = questions[currentQuestionIndex];
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  quizCounter.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  
  selectedOptionValue = null;
  confirmBtn.classList.add("hidden");
  questionArea.classList.remove("hidden");
  quizFeedback.classList.add("hidden");

  quizQuestion.innerText = currentQ.question;
  quizOptions.innerHTML = "";

  correctOptionValue = currentQ.correct;
  shuffledOptions = shuffleArray(currentQ.options);

  // Cria os botões das alternativas
  shuffledOptions.forEach((optionText) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.innerText = optionText;
    btn.addEventListener("click", () => selectOptionCandidate(optionText, btn));
    quizOptions.appendChild(btn);
  });
}

// Seleciona a alternativa que o usuário clicou
function selectOptionCandidate(optionText, selectedBtn) {
  selectedOptionValue = optionText;
  const optionButtons = quizOptions.querySelectorAll(".option-btn");
  
  optionButtons.forEach(btn => btn.classList.remove("selected"));
  selectedBtn.classList.add("selected");

  confirmBtn.classList.remove("hidden");
}

// Confirma a resposta e mostra se acertou ou errou
confirmBtn.addEventListener("click", () => {
  if (!selectedOptionValue) return;

  const currentQ = questions[currentQuestionIndex];

  questionArea.classList.add("hidden");
  quizFeedback.classList.remove("hidden");

  if (selectedOptionValue === correctOptionValue) {
    score++;
    feedbackTitle.innerText = "Resposta Correta! ✓";
    feedbackTitle.className = "feedback-title correct-text";
  } else {
    feedbackTitle.innerText = `Resposta Incorreta! ✗ (Correta: ${correctOptionValue})`;
    feedbackTitle.className = "feedback-title incorrect-text";
  }

  quizImage.src = currentQ.image;
  feedbackText.innerText = currentQ.explanation;
});

// Vai para a próxima pergunta ou tela final
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

// Mostra o resultado final do quiz
function showResults() {
  quizCard.classList.add("hidden");
  quizResult.classList.remove("hidden");
  finalScore.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
}

// Reinicia o quiz
restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  quizResult.classList.add("hidden");
  quizCard.classList.remove("hidden");
  loadQuestion();
});

// Inicia o quiz na primeira pergunta
loadQuestion();