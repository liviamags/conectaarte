
const startButton = document.getElementById("startButton");
const consentOverlay = document.getElementById("consentOverlay");
const acceptButton = document.getElementById("acceptButton");
const settingsButton = document.getElementById("settingsButton");
const settingsPanel = document.getElementById("settingsPanel");
const saveSettingsButton = document.getElementById("saveSettingsButton");
const analyticsOption = document.getElementById("analyticsOption");
const revealScreen = document.getElementById("revealScreen");
const revealTitle = document.getElementById("revealTitle");
const revealText = document.getElementById("revealText");
const restartButton = document.getElementById("restartButton");

function showConsent() {
  consentOverlay.hidden = false;
  acceptButton.focus();
}

function showReveal(choice) {
  consentOverlay.hidden = true;
  revealScreen.hidden = false;

  if (choice === "accept") {
    revealTitle.textContent = "Você fez uma escolha.";

    revealText.textContent =
      "Você clicou em “Aceitar e continuar”. Talvez tenha " +
      "parecido apenas mais uma etapa antes de acessar " +
      "um serviço. Algo rápido, comum e quase automático.\n\n" +

      "Mas você parou para pensar no que estava aceitando? " +
      "Leu as informações disponíveis ou confiou que estava " +
      "tudo bem seguir em frente?\n\n" +

      "No cotidiano digital, encontramos avisos, permissões " +
      "e termos de uso o tempo todo. Muitas vezes, estamos " +
      "com pressa, queremos chegar logo ao conteúdo ou " +
      "simplesmente nos acostumamos a clicar sem ler.\n\n" +

      "Isso não significa que toda aceitação seja perigosa. " +
      "Significa que uma escolha feita sem compreensão " +
      "pode não ser uma escolha verdadeiramente consciente.\n\n" +

      "Esta experiência não coletou seus dados pessoais. " +
      "O clique foi apenas uma simulação. A intenção é " +
      "mostrar como uma decisão simples pode nos fazer " +
      "refletir sobre nossos hábitos na internet.";
  } else if (choice === "customize") {
    revealTitle.textContent = "Você decidiu olhar mais de perto.";

    revealText.textContent =
      "Antes de continuar, você escolheu conferir as opções. " +
      "Talvez quisesse entender melhor o que estava sendo " +
      "apresentado antes de tomar uma decisão.\n\n" +

      "Quantas vezes você tem tempo ou disposição para " +
      "fazer isso quando usa um aplicativo ou visita um site? " +
      "E quantas vezes simplesmente segue em frente?\n\n" +

      "Na vida digital, pequenas pausas podem nos ajudar " +
      "a perceber quais informações são solicitadas, " +
      "por que são solicitadas e quais escolhas temos.\n\n" +

      "Não existe uma única resposta para todas as situações. " +
      "O importante é reconhecer que você pode parar, " +
      "perguntar e decidir com mais consciência.\n\n" +

      "Nesta demonstração, nenhuma informação pessoal " +
      "foi coletada. Sua escolha serve para iniciar " +
      "uma reflexão sobre privacidade e autonomia digital.";
  } else {
    revealTitle.textContent = "Você definiu suas preferências.";

    revealText.textContent =
      "Você decidiu observar as opções antes de prosseguir. " +
      "Essa atitude nos lembra que aceitar não precisa " +
      "ser a única maneira de interagir com a tecnologia.\n\n" +

      "Quando encontramos uma solicitação digital, vale " +
      "perguntar: o que está sendo solicitado? Qual é a " +
      "finalidade? Posso escolher de outra maneira?\n\n" +

      "Nem sempre temos todas as respostas imediatamente. " +
      "Ainda assim, conhecer as opções disponíveis pode " +
      "nos ajudar a tomar decisões mais conscientes.\n\n" +

      "As preferências desta página são fictícias e não " +
      "alteram permissões reais nem autorizam coleta " +
      "de informações pessoais. Esta é uma experiência " +
      "artística sobre nossas escolhas no mundo digital.";
  }

  revealScreen.scrollTop = 0;
}

startButton.addEventListener("click", showConsent);

acceptButton.addEventListener("click", () => {
  showReveal("accept");
});

settingsButton.addEventListener("click", () => {
  settingsPanel.hidden = !settingsPanel.hidden;

  settingsButton.textContent = settingsPanel.hidden
    ? "Personalizar preferências"
    : "Ocultar preferências";
});

saveSettingsButton.addEventListener("click", () => {
  showReveal("customize");
});

restartButton.addEventListener("click", () => {
  revealScreen.hidden = true;
  consentOverlay.hidden = true;
  settingsPanel.hidden = true;
  settingsButton.textContent = "Personalizar preferências";
  analyticsOption.checked = false;
  window.scrollTo(0, 0);
});
