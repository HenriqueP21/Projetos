// Seleciona o formulário de login
const form = document.querySelector('.login-form');

// Selecione os campos de entrada de usuário e senha
const usernameInput = form.querySelector('input[type="text"]');
    // Dessa forma pegamos identificamos a tag pelo tipo do input dela, usamos o form ao invés de document para indicar em qual classe, ou dentro de onde eu vou achar esse input
const senhaInput = form.querySelector('input[type="password"]');


form.addEventListener('submit', (event) =>{
    // event.preventDefault() evita que a página seja recarregada quando o formulario for enviado
    event.preventDefault();

    // Obtem os valores dos campos de entrada do usuário e senha e o trim() remove os espaços em branco que podem ter antes ou depois de cada campo
    const usuario = usernameInput.value.trim();
    const senha = senhaInput.value.trim();

    // Verifica se os campos de entrada e saída então vários
    if (usuario === '' || senha === '') {
        alert('Por favor, preencha os campos.')
    // Verifique se as informações de login e senha estão corretas
    } else if (usuario === 'usuario' && senha === 'senha') {
        alert('Bem-vindo!')
        // Redireciona o usuário para uma outra página após o login
        location.replace("/Tarefa/index.html", "_self");
    } else {
        // Exibe uma mensagem de erro se as informações estiverem errados
        alert('usuário ou senha incorreto, tente novamente')
    }

})