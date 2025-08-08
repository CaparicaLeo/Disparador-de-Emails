document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nomeInput = document.getElementById("nomeEmpresa");
  const emailInput = document.getElementById("emailEmpresa");
  const empresasSection = document.getElementById("empresas");
  const messageTextarea = document.getElementById("message");
  const enviarBtn = document.querySelectorAll("button[type='submit']")[1]; // Segundo botão "Enviar"

  let empresas = [];

  // Cadastrar empresa
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();

    if (!nome || !email) {
      alert("Por favor, preencha o nome e o email.");
      return;
    }

    empresas.push({ nome, email });
    atualizarListaEmpresas();

    // Limpar os campos
    nomeInput.value = "";
    emailInput.value = "";
  });

  // Atualizar visualização da lista de empresas
  function atualizarListaEmpresas() {
    empresasSection.innerHTML = "<h2>Empresas cadastradas:</h2>";
    const ul = document.createElement("ul");

    empresas.forEach((empresa, index) => {
      const li = document.createElement("li");
      li.textContent = `${empresa.nome} (${empresa.email})`;

      // Criar botão de deletar
      const btnDeletar = document.createElement("button");
      btnDeletar.textContent = "🗑️ Deletar";
      btnDeletar.style.marginLeft = "10px";
      btnDeletar.style.backgroundColor = "#e74c3c";
      btnDeletar.style.color = "white";
      btnDeletar.style.border = "none";
      btnDeletar.style.padding = "5px 10px";
      btnDeletar.style.borderRadius = "4px";
      btnDeletar.style.cursor = "pointer";

      // Evento de deletar
      btnDeletar.addEventListener("click", () => {
        empresas.splice(index, 1); // Remove a empresa do array
        atualizarListaEmpresas(); // Atualiza a tela
      });

      li.appendChild(btnDeletar);
      ul.appendChild(li);
    });

    empresasSection.appendChild(ul);
  }

  // Enviar mensagem para todas as empresas
  enviarBtn.addEventListener("button", () => {
    const mensagem = messageTextarea.value.trim();

    if (empresas.length === 0) {
      alert("Nenhuma empresa cadastrada.");
      return;
    }

    if (!mensagem) {
      alert("Por favor, escreva uma mensagem.");
      return;
    }

    // Simular envio
    empresas.forEach((empresa) => {
      console.log(`Enviando mensagem para ${empresa.nome} (${empresa.email})`);
      console.log(`Mensagem: ${mensagem}`);
    });

    alert("Mensagens enviadas com sucesso!");
    messageTextarea.value = "";
  });
});
