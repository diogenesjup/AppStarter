class Models{
    
    // TESTAR A DISPONIBILIDADE DA API
    testeApi(){

    	      // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"teste-api.php",
                  data:{token:app.token}
              
              })
              request.done(function (dados) {            

                  console.log("%c VERIFICAÇÃO DE DISPONIBILIDADE DE API","background:#ff0000;color:#fff;");
                  console.log(dados);

                  localStorage.setItem("dadosApi",JSON.stringify(dados));

              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (apiAtiva)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }
    
    // PROC LOGIN
    procLogin(){
       
       event.preventDefault();

       $("#btnLoginEmailSenha").html("CARREGANDO");

       var loginUsuario = $("#loginUsuario").val();
       var loginSenha = $("#loginSenha").val();

            // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"login.php",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario,loginSenha:loginSenha}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  $("#btnLoginEmailSenha").html("Login");

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     app.login(dados.id,dados.email,dadosUsuario);

                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // PROC LOGIN SMS
    procLoginSms(){
       
       event.preventDefault();

       $("#btnViewLogin").html("CARREGANDO...");

       var loginUsuario = $("#loginUsuario").val();

	          // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"token-sms-login.php",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  $("#btnViewLogin").html("PRÓXIMO");

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                  	 
                  	 localStorage.setItem("dadosUsuario",dadosUsuario);
                  	 //app.login(dados.id,dados.email,dadosUsuario);

                     app.verificarCodigoSms();
                  
                  }else{
                     
                     //$(".form-control").val("");
                     //aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                     // SE O CELULAR NAO ESTIVER CADASTRADO
                     // VAMOS DIRECIONAR O USUÁRIO PARA CONCLUIR O CADASTRO
                    
                     // SALVAR O CELULAR PARA O CADASTRO
                     localStorage.setItem("celularCadastro",dados.celular);

                     app.cadastro();

                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // VERIFICAR O CÓDIGO SMS ENVIADO PELO USUÁRIO
    verificarCodigoSms(){

      event.preventDefault();

      $("#btnConfirmarCodigo").html("PROCESSANDO...");

       var codigoSms = $("#codigoSms").val();

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"verificar-sms.php",
                  data:{token:app.token,codigoSms:codigoSms}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DA VERIFICACAO DO CODIGO DE SMS","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);

                  $("#btnConfirmarCodigo").html("Confirmar código");
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     app.login(dados.id,dados.email,dadosUsuario);
                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Código incorreto","Verifique o código recebido e tente novamente. Se ainda tiver dificuldades, tente entrar com o e-mail e senha.");
                     
                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (verificarCodigoSms)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }


    // PROC CADASTRO
    procCadastro(){

        event.preventDefault();

        $("#btnViewCadastro").html("PROCESSANDO...");
         
        var cadastroNome = $("#cadastroNome").val();
        var cadastroEmail = $("#cadastroEmail").val();
        var cadastroSenha = $("#cadastroSenha").val();
        var cadastroCelular = $("#cadastroCelular").val();
  
                // INICIO CHAMADA AJAX
                var request = $.ajax({
  
                    method: "POST",
                    url: app.urlApi+"cadastro.php",
                    data:{token:app.token,cadastroCelular:cadastroCelular,cadastroNome:cadastroNome,cadastroEmail:cadastroEmail,cadastroSenha:cadastroSenha}
                
                })
                request.done(function (dados) {            
  
                    console.log("%c RETORNO DO CADASTRO","background:#ff0000;color:#fff;");
                    console.log(dados);

                    $("#btnViewCadastro").html("Cadastrar");
  
                    var dadosUsuario = JSON.stringify(dados);
                    
                    if(dados.sucesso=="200"){
                       
                       localStorage.setItem("dadosUsuario",dadosUsuario);
  
                       // SE DEU TUDO CERTO, VAMOS LOGAR O USUÁRIO
                       app.login(dados.id,dados.email,dadosUsuario);
                    
                    }else{
                       
                       aviso("Oops! Esse e-mail já está cadastrado na nossa plataforma","Verifique os dados inseridos e tente novamente! Caso tenha esquecido sua senha, clique no link \"Esqueci Senha\" na tela de login.");
                    
                    }
                    
                });
                request.fail(function (dados) {
                       
                     console.log("API NÃO DISPONÍVEL (procCadastro)");
                     console.log(dados);
                     aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");
  
                });
                // FINAL CHAMADA AJAX
  
      }


    procResetSenha(){

              event.preventDefault();
               
              var resetEmail = $("#resetEmail").val();

              $("#btnViewResetarSenha").html("PROCESSANDO...");

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"reset-senha.php",
                  data:{token:app.token,resetEmail:resetEmail}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DO RESET","background:#ff0000;color:#fff;");
                  console.log(dados);

                  $("#btnViewResetarSenha").html("Resetar senha");

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     app.viewLogin();
                     aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     
                  }else{
                     
                     aviso("Oops! E-mail não encontrado","Seu e-mail não foi localizado na plataforma. Verique as informações inseridas e tente novamente.");
                  
                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (ResetDeSenha)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX


    }


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   BAIXAR CONTEUDO
*
*
*  ------------------------------------------------------------------------------------------------
*/
conteudo(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'app-conteudo.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CONTEUDO:");
                console.log(JSON.parse(xhr.responseText));
                
                var dados = JSON.parse(xhr.responseText);

                app.views.alimentarBanners(dados.banners);

                app.views.alimentarOfertas(dados.ofertas);

                app.views.alimentarDominios(dados.dominios);

                localStorage.setItem("categorias",JSON.stringify(dados.categorias));
                localStorage.setItem("dominios",JSON.stringify(dados.dominios));
                localStorage.setItem("ofertas",JSON.stringify(dados.ofertas));
                localStorage.setItem("banners",JSON.stringify(dados.banners));

              }else{
                
                console.log("SEM SUCESSO conteudo()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Nossos servidores estão passando por dificuldade técnicas. Tente novamente em alguns minutos.");

              }

              
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}


detalheOferta(idOferta){
    
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();

        var idUsuario = localStorage.getItem("idUsuario");
         
        xhr.open('POST', app.urlApi+'app-detalhe-oferta.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&idOferta="+idOferta+"&idUsuario="+idUsuario;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS DETALHE DA OFERTA:");
                console.log(JSON.parse(xhr.responseText));
                
                var dados = JSON.parse(xhr.responseText);

                window.open(dados.oferta[0].link_final, '_system'); return false;

              }else{
                
                console.log("SEM SUCESSO detalheOferta()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Nossos servidores estão passando por dificuldade técnicas. Tente novamente em alguns minutos.");

              }

              
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);


}


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   MEU PERFIL
*
*
*  ------------------------------------------------------------------------------------------------
*/
meuPerfil(){
     
     var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

     $(".dados-usuario h3 span").html(dados.nome);
     $(".dados-usuario h3 small").html(dados.email);

}

editarPerfil(){
    
    aviso("Deu certo!","Informações atualizadas com sucesso");
    app.meuPerfil();

}



}