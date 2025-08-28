const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('nav__menu--active');
});

//VALIDAÇÃO DO FORMULÁRIO
const form = document.getElementById('form-contato');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  //Verificar se email tem formato válido
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert('Digite um e-mail válido.');
    return;
  }

  alert('Mensagem enviada com sucesso! 🚀');
  form.reset();
});