function validar() {
  /* declarando as variáveis*/
  let usuario = document.getElementById('email-text').value;
  let senha = document.getElementById('senha-text').value;





  if (senha == '' && usuario == '') {
    document.getElementById('inserir').style.display = 'block';
  }


  else {
    if (usuario != 'admin@gmail.com') {
      document.getElementById("email-text").value = "";
      document.getElementById("inserir").style.display = "none";
      document.getElementById('email-errado').style.display = 'block';
    }

    if (senha != '123456') {
      document.getElementById("senha-text").value = "";
      document.getElementById("inserir").style.display = "none";
      document.getElementById('senha-errada').style.display = 'block';
    }

    else {
      if (senha == '123456' && usuario == 'admin@gmail.com') {
        //chama a tela do index
        window.open('perfis.html');
        //fecha a tela login
        window.close('index.html');
      }

      else {
        document.getElementById('user-pass').style.display = 'block';
      }
    }
  }

}