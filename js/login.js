// Preenchendo dados no login e mostrando comportamento de erro nas informações
getInfo = () => {

  let usuario = document.getElementById("usuario");
  let senha = document.getElementById("senha");
  usuario.value = "email.usuario@compasso.com.br";
  senha.value = "123";

  // Adicionando classe de erro e de movimento do icone do campo de usuário
  $(usuario).addClass("inputs-error");
  $("#icon-user").addClass("icon-input-move");

  // Adicionando classe de erro e de movimento do icone do campo de senha
  $(senha).addClass("inputs-error");
  $("#icon-pass").addClass("icon-input-move");

  // Mostrando texto informativo
  $("#text-error").show();

}

// Verificando se o campo de usuário está vazio, se sim,
// remove a classe de erro e o valor da senha 
removeError = (text) => {
  let _valueText = text.value; // Valor do imput

  if (_valueText === '') {

    // Removendo classes de erro e de movimento do icone do campo de usuário
    $(usuario).removeClass("inputs-error");
    $("#icon-user").removeClass("icon-input-move");

    // Removendo classes de erro e de movimento do icone do campo de senha
    $(senha).removeClass("inputs-error");
    $("#icon-pass").removeClass("icon-input-move");

    // Limpando a senha
    senha.value = '';

    // Escondendo texto informativo
    $("#text-error").hide();
  }

}

// Abrindo a Home
openHome = () => {
  window.open('./home.html', '_self');
}