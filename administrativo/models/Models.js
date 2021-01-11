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

       $("#btnLoginEmailSenha").html("Carregando...");
       
       event.preventDefault();

       var loginUsuario = $("#loginUsuario").val();
       var loginSenha = $("#loginSenha").val();

            // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"login.php",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario,loginSenha:loginSenha}
              
              })
              request.done(function (dados) {    

                  $("#btnLoginEmailSenha").html("Login");        

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     localStorage.setItem("perfilUsuario",dados.dados[0].tipo);
                     app.login(dados.id,dados.email,dadosUsuario);

                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnLoginEmailSenha").html("Login");  
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // PROC LOGIN SMS
    procLoginSms(){

      $("#btnViewLogin").html("Carregando...");
       
       event.preventDefault();

       var loginUsuario = $("#loginUsuario").val();

            // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"token-sms-login.php",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario}
              
              })
              request.done(function (dados) {        

                  $("#btnViewLogin").html("Próximo");    

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200" && dados.dados[0].tipo=="admin"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     localStorage.setItem("perfilUsuario",dados.dados[0].tipo);
                     //app.login(dados.id,dados.email,dadosUsuario);

                     app.verificarCodigoSms();
                  
                  }else{

                     $("#btnViewLogin").html("Próximo"); 

                     aviso("Número não encontrado!","Verifique se seu usuário tem permissão de admin, ou então, se o número que informou está correto.");
                     
                     //$(".form-control").val("");
                     //aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                     // SE O CELULAR NAO ESTIVER CADASTRADO
                     // VAMOS DIRECIONAR O USUÁRIO PARA CONCLUIR O CADASTRO
                    
                     // SALVAR O CELULAR PARA O CADASTRO
                     //localStorage.setItem("celularCadastro",dados.celular);

                     //app.cadastro();

                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewLogin").html("Próximo"); 
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // VERIFICAR O CÓDIGO SMS ENVIADO PELO USUÁRIO
    verificarCodigoSms(){

      $("#btnConfirmarCodigo").html("Processando...");

      event.preventDefault();

       var codigoSms = $("#codigoSms").val();

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"verificar-sms.php",
                  data:{token:app.token,codigoSms:codigoSms}
              
              })
              request.done(function (dados) {         

                  $("#btnConfirmarCodigo").html("Confirmar código.");   

                  console.log("%c RETORNO DA VERIFICACAO DO CODIGO DE SMS","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dadosUsuario);
                     app.login(dados.id,dados.email,dadosUsuario);
                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Código incorreto","Verifique o código recebido e tente novamente. Se ainda tiver dificuldades, tente entrar com o e-mail e senha.");
                     
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnConfirmarCodigo").html("Confirmar código."); 
                     
                   console.log("API NÃO DISPONÍVEL (verificarCodigoSms)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }


    // PROC CADASTRO
    procCadastro(){

        $("#btnViewCadastro").html("Processando...");

        event.preventDefault();
         
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

                    $("#btnViewCadastro").html("Cadastrar");   
  
                    console.log("%c RETORNO DO CADASTRO","background:#ff0000;color:#fff;");
                    console.log(dados);
  
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

                     $("#btnViewCadastro").html("Cadastrar"); 
                       
                     console.log("API NÃO DISPONÍVEL (procCadastro)");
                     console.log(dados);
                     aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");
  
                });
                // FINAL CHAMADA AJAX
  
      }


    procResetSenha(){

              $("#btnViewResetarSenha").html("Processando...");

              event.preventDefault();
               
              var resetEmail = $("#resetEmail").val();

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"reset-senha.php",
                  data:{token:app.token,resetEmail:resetEmail}
              
              })
              request.done(function (dados) {     

                  $("#btnViewResetarSenha").html("Resetar senha");       

                  console.log("%c RETORNO DO RESET","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     app.viewLogin();
                     aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     
                  }else{
                     
                     aviso("Oops! E-mail não encontrado","Seu e-mail não foi localizado na plataforma. Verique as informações inseridas e tente novamente.");
                  
                  }
                  
              });
              request.fail(function (dados) {

                   $("#btnViewResetarSenha").html("Resetar senha");  
                     
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
*   EDITAR ACESSO USUARIO PERFIL LOGADO
*
*
*  ------------------------------------------------------------------------------------------------
*/
    editarPerfil(){

      var idUsuario = localStorage.getItem("idUsuario");

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editarPerfil.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR PERFIL");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);

                    $("#editarPerfilNome").val(dados.dados[0].nome);
                    $("#editarPerfilEmail").val(dados.dados[0].email);
                    $("#editarPerfilCelular").val(dados.dados[0].celular);
                    $("#editarPerfilSenha").val(dados.dados[0].senha);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }


            }else{
              
              console.log("SEM SUCESSO editarPerfil()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);


    }
    
    
    procEditarPerfil(){
        
        $("#btnEditarPerfil").html("Processando...");
        $(".form-control").attr("readonly","true");

        var editarPerfilNome = $("#editarPerfilNome").val();
        var editarPerfilEmail = $("#editarPerfilEmail").val();
        var editarPerfilCelular = $("#editarPerfilCelular").val();
        var editarPerfilSenha = $("#editarPerfilSenha").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-procEditarPerfil.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+editarPerfilNome+
                     "&email="+editarPerfilEmail+
                     "&celular="+editarPerfilCelular+
                     "&senha="+editarPerfilSenha;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarPerfil()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarPerfil").html("Atualizar");
      $(".form-control").removeAttr("readonly");


    }



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   STATUS API
*
*
*  ------------------------------------------------------------------------------------------------
*/

amazon(){
  
        console.log("INICIANDO COMUNICAÇÃO COM A AMAZON");

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();

        var keyword = $("#amazonKeyWord").val();
         
        xhr.open('POST', app.urlApi+'api-amazon.php?keyword='+keyword,true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS DA API AMAZON: ");
              var resposta = JSON.parse(xhr.responseText);

              console.log(JSON.parse(resposta.dados));

              var dados = JSON.parse(resposta.dados);

              app.views.amazonSinc(dados,keyword);
              fecharAviso();

            }else{
              
              console.log("SEM SUCESSO amazon()");
              console.log(JSON.parse(xhr.responseText));
              aviso("A API Amazon não retornou dados","A Amazon retornou um total de 0 (zero) produtos ou offertas com esse critério de keyword");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send();

}



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   ACESSOS ADMIN
*
*
*  ------------------------------------------------------------------------------------------------
*/
    acessosAdmin(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-acessos-admin.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS ACESSOS ADMIN:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO acessosAdmin()");
                console.log(JSON.parse(xhr.responseText));

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularAcessosAdmin(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

      
    }

    procAdicionarAcessoAdmin(){

        $("#btnAddAcessoAdmin").html("Processando...");
        $(".form-control").attr("readonly","true");

        var acessoAdminNome = $("#acessoAdminNome").val();
        var acessoAdminEmail = $("#acessoAdminEmail").val();
        var acessoAdminCelular = $("#acessoAdminCelular").val();
        var acessoAdminSenha = $("#acessoAdminSenha").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-acesso-admin.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+acessoAdminNome+
                     "&email="+acessoAdminEmail+
                     "&celular="+acessoAdminCelular+
                     "&senha="+acessoAdminSenha;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("usuário adicionado com sucesso!","O novo usuário foi cadastrado.");
              
              // VOLTAR PARA TODOS OS USUÁRIOS
              app.acessosAdmin();


            }else{
              
              console.log("SEM SUCESSO procEditarPerfil()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddAcessoAdmin").html("Adicionar");
      $(".form-control").removeAttr("readonly");



    }

    editarAcessoAdmin(id){


      var idUsuario = id;

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editarPerfil.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR PERFIL DE UM USUARIO");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    $("#acessoAdminEditarId").val(id);

                    $("#acessoAdminEditarNome").val(dados.dados[0].nome);
                    $("#acessoAdminEditarEmail").val(dados.dados[0].email);
                    $("#acessoAdminEditarCelular").val(dados.dados[0].celular);
                    $("#acessoAdminEditarSenha").val(dados.dados[0].senha);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarAcessoAdmin()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarAcessoAdmin(){

        $("#btnEditarAcessoAdmin").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = $("#acessoAdminEditarId").val();

        var acessoAdminEditarNome = $("#acessoAdminEditarNome").val();
        var acessoAdminEditarEmail = $("#acessoAdminEditarEmail").val();
        var acessoAdminEditarCelular = $("#acessoAdminEditarCelular").val();
        var acessoAdminEditarSenha = $("#acessoAdminEditarSenha").val();
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-procEditarPerfilAcessoAdmin.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+acessoAdminEditarNome+
                     "&email="+acessoAdminEditarEmail+
                     "&celular="+acessoAdminEditarCelular+
                     "&senha="+acessoAdminEditarSenha;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarPerfil()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarAcessoAdmin").html("Atualizar");
      $(".form-control").removeAttr("readonly");
       
    }

    removerAcessoAdmin(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-acesso-admin.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER ACESSO ADMIN:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Usuário foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerAcessoAdmin()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

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
*   CLIENTES
*
*
*  ------------------------------------------------------------------------------------------------
*/
    clientes(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-usuarios-comuns.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CLIENTES:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO clientes()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularClientes(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

      
    }

    adicionarClientesListaCorretores(){

       // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-lista-corretores.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CORRETORES CLIENTES:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO adicionarClientesListaCorretores()");
                console.log(JSON.parse(xhr.responseText));

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularClientesListaCorretores(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }

    procAdicionarClientes(){

        $("#btnAddClientes").html("Processando...");
        $(".form-control").attr("readonly","true");

        var clientesNome = $("#clientesNome").val();
        var clientesCpf = $("#clientesCpf").val();
        var clientesCnpj = $("clientesCnpj").val();
        var clientesEmail = $("#clientesEmail").val();
        var clientesCelular = $("#clientesCelular").val();
        var clientesTelefone = $("#clientesTelefone").val();
        var clientesSenha = $("#clientesSenha").val();
        var clientesEndereco = $("#clientesEndereco").val();
        var clientesBairro = $("#clientesBairro").val();
        var clientesCidade = $("#clientesCidade").val();
        var clientesEstado = $("#clientesEstado").val();
        var clientesCEP = $("#clientesCEP").val();
        var clientesCorretor = $("#clientesCorretor").val();
        var clientesObservacoes = $("#clientesObservacoes").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-cliente.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+clientesNome+
                     "&cpf="+clientesCpf+
                     "&cnpj="+clientesCnpj+
                     "&email="+clientesEmail+
                     "&celular="+clientesCelular+
                     "&telefone="+clientesTelefone+
                     "&senha="+clientesSenha+
                     "&endereco="+clientesEndereco+
                     "&cep="+clientesCEP+
                     "&bairro="+clientesBairro+
                     "&cidade="+clientesCidade+
                     "&estado="+clientesEstado+
                     "&id_corretor="+clientesCorretor+
                     "&observacoes="+clientesObservacoes;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Cliente adicionado com sucesso!","O novo cliente foi cadastrado.");
              
              // VOLTAR PARA TODOS OS USUÁRIOS
              app.clientes();

            }else{
              
              console.log("SEM SUCESSO procAdicionarClientes()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddClientes").html("Adicionar");
      $(".form-control").removeAttr("readonly");



    }

    editarClientes(id){

      var idUsuario = id;

      let xhr = new XMLHttpRequest();
      
      // JÁ PRÉ CARREGAR A LISTA DE CORRETORES
      this.adicionarClientesListaCorretores();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editar-cliente.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR PERFIL DE UM USUARIO");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    $("#clientesId").val(id);

                    $("#clientesNome").val(dados.dados[0].nome);
                    $("#clientesCpf").val(dados.dados[0].cpf);
                    $("#clientesCnpj").val(dados.dados[0].cnpj);
                    $("#clientesEmail").val(dados.dados[0].email);
                    $("#clientesCelular").val(dados.dados[0].celular);
                    $("#clientesTelefone").val(dados.dados[0].telefone);
                    $("#clientesSenha").val(dados.dados[0].senha);
                    $("#clientesEndereco").val(dados.dados[0].endereco);
                    $("#clientesBairro").val(dados.dados[0].bairro);
                    $("#clientesCidade").val(dados.dados[0].cidade);
                    $("#clientesEstado").val(dados.dados[0].estado);
                    $("#clientesCEP").val(dados.dados[0].cep);
                    $("#clientesCorretor").val(dados.dados[0].id_corretor);
                    $("#clientesObservacoes").val(dados.dados[0].observacoes);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarClientes()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarClientes(){

        $("#btnEditarClientes").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = $("#clientesId").val();

        var clientesNome = $("#clientesNome").val();
        var clientesCpf = $("#clientesCpf").val();
        var clientesCnpj = $("clientesCnpj").val();
        var clientesEmail = $("#clientesEmail").val();
        var clientesCelular = $("#clientesCelular").val();
        var clientesTelefone = $("#clientesTelefone").val();
        var clientesSenha = $("#clientesSenha").val();
        var clientesEndereco = $("#clientesEndereco").val();
        var clientesBairro = $("#clientesBairro").val();
        var clientesCidade = $("#clientesCidade").val();
        var clientesEstado = $("#clientesEstado").val();
        var clientesCEP = $("#clientesCEP").val();
        var clientesCorretor = $("#clientesCorretor").val();
        var clientesObservacoes = $("#clientesObservacoes").val();
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-clientes.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+clientesNome+
                     "&cpf="+clientesCpf+
                     "&cnpj="+clientesCnpj+
                     "&email="+clientesEmail+
                     "&celular="+clientesCelular+
                     "&telefone="+clientesTelefone+
                     "&senha="+clientesSenha+
                     "&endereco="+clientesEndereco+
                     "&cep="+clientesCEP+
                     "&bairro="+clientesBairro+
                     "&cidade="+clientesCidade+
                     "&estado="+clientesEstado+
                     "&id_corretor="+clientesCorretor+
                     "&observacoes="+clientesObservacoes;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarClientes()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarClientes").html("Atualizar");
      $(".form-control").removeAttr("readonly");
       
    }

    removerClientes(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-clientes.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER CLIENTE:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Cliente foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerClientes()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

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
*   CORRETORES
*
*
*  ------------------------------------------------------------------------------------------------
*/
    corretores(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-corretores.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CORRETORES:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO corretores()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularCorretores(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

      
    }

    procAdicionarCorretores(){

        $("#btnAddCorretores").html("Processando...");
        $(".form-control").attr("readonly","true");

        var clientesNome = $("#clientesNome").val();
        var clientesCpf = $("#clientesCpf").val();
        var clientesCnpj = $("clientesCnpj").val();
        var clientesEmail = $("#clientesEmail").val();
        var clientesCelular = $("#clientesCelular").val();
        var clientesTelefone = $("#clientesTelefone").val();
        var clientesSenha = $("#clientesSenha").val();
        var clientesEndereco = $("#clientesEndereco").val();
        var clientesBairro = $("#clientesBairro").val();
        var clientesCidade = $("#clientesCidade").val();
        var clientesEstado = $("#clientesEstado").val();
        var clientesCEP = $("#clientesCEP").val();
        var clientesCorretor = $("#clientesCorretor").val(); // CRECI
        var clientesObservacoes = $("#clientesObservacoes").val();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-corretor.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+clientesNome+
                     "&cpf="+clientesCpf+
                     "&cnpj="+clientesCnpj+
                     "&email="+clientesEmail+
                     "&celular="+clientesCelular+
                     "&telefone="+clientesTelefone+
                     "&senha="+clientesSenha+
                     "&endereco="+clientesEndereco+
                     "&cep="+clientesCEP+
                     "&bairro="+clientesBairro+
                     "&cidade="+clientesCidade+
                     "&estado="+clientesEstado+
                     "&id_corretor="+clientesCorretor+
                     "&observacoes="+clientesObservacoes;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Corretor adicionado com sucesso!","O novo corretor foi cadastrado.");
              
              // VOLTAR PARA TODOS OS USUÁRIOS
              app.corretores();

            }else{
              
              console.log("SEM SUCESSO procAdicionarCorretor()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddCorretor").html("Adicionar");
      $(".form-control").removeAttr("readonly");



    }

    editarCorretores(id){

      var idUsuario = id;

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editar-corretor.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR CORRETOR");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    $("#clientesId").val(id);

                    $("#clientesNome").val(dados.dados[0].nome);
                    $("#clientesCpf").val(dados.dados[0].cpf);
                    $("#clientesCnpj").val(dados.dados[0].cnpj);
                    $("#clientesEmail").val(dados.dados[0].email);
                    $("#clientesCelular").val(dados.dados[0].celular);
                    $("#clientesTelefone").val(dados.dados[0].telefone);
                    $("#clientesSenha").val(dados.dados[0].senha);
                    $("#clientesEndereco").val(dados.dados[0].endereco);
                    $("#clientesBairro").val(dados.dados[0].bairro);
                    $("#clientesCidade").val(dados.dados[0].cidade);
                    $("#clientesEstado").val(dados.dados[0].estado);
                    $("#clientesCEP").val(dados.dados[0].cep);
                    $("#clientesCorretor").val(dados.dados[0].corretor_creci); // CRECI
                    $("#clientesObservacoes").val(dados.dados[0].observacoes);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarCorretores()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarCorretores(){

        $("#btnEditarCorretores").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = $("#clientesId").val();

        var clientesNome = $("#clientesNome").val();
        var clientesCpf = $("#clientesCpf").val();
        var clientesCnpj = $("clientesCnpj").val();
        var clientesEmail = $("#clientesEmail").val();
        var clientesCelular = $("#clientesCelular").val();
        var clientesTelefone = $("#clientesTelefone").val();
        var clientesSenha = $("#clientesSenha").val();
        var clientesEndereco = $("#clientesEndereco").val();
        var clientesBairro = $("#clientesBairro").val();
        var clientesCidade = $("#clientesCidade").val();
        var clientesEstado = $("#clientesEstado").val();
        var clientesCEP = $("#clientesCEP").val();
        var clientesCorretor = $("#clientesCorretor").val(); // CRECI
        var clientesObservacoes = $("#clientesObservacoes").val();
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-corretores.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&nome="+clientesNome+
                     "&cpf="+clientesCpf+
                     "&cnpj="+clientesCnpj+
                     "&email="+clientesEmail+
                     "&celular="+clientesCelular+
                     "&telefone="+clientesTelefone+
                     "&senha="+clientesSenha+
                     "&endereco="+clientesEndereco+
                     "&cep="+clientesCEP+
                     "&bairro="+clientesBairro+
                     "&cidade="+clientesCidade+
                     "&estado="+clientesEstado+
                     "&clientesCorretor="+clientesCorretor+
                     "&observacoes="+clientesObservacoes;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarCorretores()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditarCorretores").html("Atualizar");
      $(".form-control").removeAttr("readonly");
       
    }

    removerCorretores(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-corretores.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER CORRETOR:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Corretor foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerCorretores()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

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
*   CAMPOS OFERTAS
*
*
*  ------------------------------------------------------------------------------------------------
*/

    camposOfertas(idTipoOferta){

      var idUsuario = idTipoOferta;

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-campos-ofertas.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS CAMPOS OFERTAS");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    // ENVIAR OS CAMPOS PARA O CONTROLLER
                    app.appendCadastradosCamposOfertas(dados.campos);

                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO camposOfertas()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }
    
    
    // SALVAR OS CAMPOS DO TIPO DE OFERTA
    procEditarCamposOfertas(){

      // CAPTURAR OS DADOS DO FORMULÁRIO
      var dados = $('#formCamposTipoOferta').formSerialize();

      let xhr = new XMLHttpRequest();
       
      xhr.open('POST', app.urlApi+'admin-salvar-campos-tipo-ofertas.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = dados+"&token="+app.token;

      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR CAMPOS DO TIPO DE OFERTA");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){
                      
                      aviso("Deu certo! Campos atualizados","Os campos do tipo de oferta foram atualizados com sucesso.");
                      
                  }else{
                    
                      aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO procEditarCamposOfertas()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      xhr.send(params);
        
    }





/**
*  ------------------------------------------------------------------------------------------------
*
*
*   OFERTAS
*
*
*  ------------------------------------------------------------------------------------------------
*/
    ofertas(filtro){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-ofertas.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS OFERTAS:");
                console.log(JSON.parse(xhr.responseText));

                var dados = JSON.parse(xhr.responseText);

                app.views.alimentarOfertas(dados.ofertas,filtro);

              }else{
                
                console.log("SEM SUCESSO ofertas()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularOfertas(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }



    estats(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-estats.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS ESTATS:");
                console.log(JSON.parse(xhr.responseText));

                var dados = JSON.parse(xhr.responseText);
                
                // ALIMENTAR OS DADOS
                $(".stats1").html(dados.ofertas);
                $(".stats2").html(dados.ofertas_n_map);
                $(".stats3").html(dados.suporte);
                $(".stats4").html(dados.denuncias);
                $(".stats5").html(dados.usuarios);
              
              }else{
                
                console.log("SEM SUCESSO estats()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }






    ofertasDominio(idDominio,nomeDominio,logoDominio){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-ofertas.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS OFERTAS:");
                console.log(JSON.parse(xhr.responseText));

                var dados = JSON.parse(xhr.responseText);

                app.views.alimentarOfertasDominio(dados.ofertas,idDominio);

              }else{
                
                console.log("SEM SUCESSO ofertasDominio()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              //var dados = JSON.parse(xhr.responseText);

              //app.popularOfertas(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }


    ofertasLixeira(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-ofertas-lixeira.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS OFERTAS LIXEIRA:");
                console.log(JSON.parse(xhr.responseText));

                var dados = JSON.parse(xhr.responseText);

                app.views.alimentarOfertasLixeira(dados.ofertas);

              }else{
                
                console.log("SEM SUCESSO ofertasLixeira()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.popularOfertas(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }
    
    

    buscarCamposTipoOfertas(idTipoOferta){
       
       // LIMPAR O HTML ANTES DE IMPRIMIR OS CAMPOS
       $("#appendCamposCadastroOfertas").html("");

       // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-busca-campos-tipo-oferta.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&idTipoOferta="+idTipoOferta;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS CAMPOS DO TIPO DE OFERTA:");
                console.log(JSON.parse(xhr.responseText));

                var dados = JSON.parse(xhr.responseText);
              
                // AQUI É ONDE ENVIAREMOS OS TIPOS
                app.views.popularCampos(dados);

              }else{
                
                console.log("SEM SUCESSO buscarCamposTipoOferta()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              
             
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);


    }

    validarDominioNegocio(dominioOferta){
  
         // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-validar-dominio-oferta.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&dominioOferta="+dominioOferta;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS VALIDAÇÃO DOMINIO:");
                console.log(JSON.parse(xhr.responseText));

                var dados = JSON.parse(xhr.responseText);

                app.views.processarValidacaoDominio(dados);
              
              }else{
                
                console.log("SEM SUCESSO validarDominioNegocio()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }



    
    buscaCep(cep){
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('GET','https://viacep.com.br/ws/'+cep+'/json/',true);
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS BUSCA CEP:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO buscaCep()");
                console.log(JSON.parse(xhr.responseText));

              }

              var dados = JSON.parse(xhr.responseText);
              
              // AQUI É ONDE ENVIAREMOS O RETORNO DO ENDEREÇO
              app.views.popularCamposEndereco(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send();

    }





    procAdicionarOferta(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAdd').formSerialize();
        var tags = $('#contextTags').text();

        $("#btnAdd").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-oferta.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados+
                     "&tags="+tags;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Oferta adicionada com sucesso!","O nova oferta foi cadastrada.");
              
              // VOLTAR PARA TODOS AS OFERTAS
              app.ofertas();

            }else{
              
              console.log("SEM SUCESSO procAdicionarOfertas()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAdd").html("Adicionar");
      $(".form-control").removeAttr("readonly");


    }

    editarOferta(id){

      var idOferta = id;

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'admin-editar-ofertas.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idOferta='+idOferta+"&token="+app.token;
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR OFERTA");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    app.views.alimentarEditarOferta(dados);  
                    
                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarOferta()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

    }

    procEditarOferta(){

        $("#btnAddItem").html("Processando...");

        var dados = $('#formAdd').formSerialize();
        var tags = $('#contextTags').text();
        var idUsuario = localStorage.getItem("idUsuario");
        
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-oferta.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&tags="+tags+
                     "&"+dados;
                     
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarOferta()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Atualizar oferta");
       
    }




    removerOfertas(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-ofertas.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER OFERTA:");
                console.log(JSON.parse(xhr.responseText));
                $("#oferta"+id).fadeOut("500");
                aviso("Deu certo!","Oferta foi removida com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerOfertas()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }

    restaurarOfertas(id){

      // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-restaurar-ofertas.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS RESTAURAR OFERTA:");
                console.log(JSON.parse(xhr.responseText));
                $("#oferta"+id).fadeOut("500");
                aviso("Deu certo!","Oferta foi restaurada com sucesso");

              }else{
                
                console.log("SEM SUCESSO restaurarOfertas()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

    }



    salvarSincAmazon(capaOferta,urlOferta,tituloOferta,valorOferta,descontoOferta){

        aviso("Carregando","Por favor, aguarde...");

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();

        var idUsuario = localStorage.getItem("idUsuario");

         
        xhr.open('POST', app.urlApi+'admin-salvar-oferta-sinc-amazon.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&idUsuario="+idUsuario+"&capaOferta="+capaOferta+
                     "&urlOferta="+urlOferta+
                     "&tituloOferta="+tituloOferta+
                     "&valorOferta="+valorOferta+
                     "&descontoOferta="+descontoOferta;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS SINC AMAZON:");
                console.log(JSON.parse(xhr.responseText));
                
                fecharAviso();
                aviso("Deu certo!","A oferta foi salva no banco de dados da plataforma GARIMPEIROS! Talvez seja interessante editar a oferta para ajustar categorias, tags ou alguma outra informação!");
                

              }else{
                
                console.log("SEM SUCESSO salvarSincAmazon()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

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
*   DOMINIOS
*
*
*  ------------------------------------------------------------------------------------------------
*/
dominios(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-dominios.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS DOMINIOS:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO dominios()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.views.popularDominios(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}

procAdicionarDominio(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAdd').formSerialize();

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-dominios.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Domínio adicionado com sucesso!","O novo domínio foi cadastrado.");
              
              // VOLTAR PARA TODOS OS IMOVEIS
              app.dominios();

            }else{
              
              console.log("SEM SUCESSO procAdicionarDominio()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Adicionar");
      $(".form-control").removeAttr("readonly");

}

editarDominio(idDominio){

      var idUsuario = idDominio;

      let xhr = new XMLHttpRequest();
       
      xhr.open('POST', app.urlApi+'admin-editar-dominio.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR DOMINIO");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    // ALIMENTAR OS CAMPOS
                    $("#nomeDominioEditar").html(dados.dominio[0].nomeloja);
                    $("#nomeloja").val(dados.dominio[0].nomeloja);
                    $("#urldom").val(dados.dominio[0].urldom);
                    $("#cashback_gpr").val(dados.dominio[0].cashback_gpr);

                    // ALIMENTAR AS IMAGENS
                      $(".card").append(`

                        <div class="caixa-preview-imagem-carregada draggable" data-id="${dados.dominio[0].id}" data-url="${dados.dominio[0].logo}" ondrag="processarDrag()" id="caixaPreviewImagemCarregada${dados.dominio[0].id}">
                              <div style="margin-left:auto;margin-right:auto;position:relative;display:block;width:100px;height:100px;border-radius:8px;background:url('${app.urlCdn}${dados.dominio[0].logo}') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 &nbsp;
                              </div>
                              <p>
                                <a href="javascript:void(0)" onclick="app.views.removerImagemGaleriaImagens(${dados.dominio[0].id})" title="Remover essa imagem" style="font-size:13px;color:#ff0000;">
                                  <i class="fa fa-times"></i> remover
                                </a>
                              </p>
                         </div>

                      `);

                  processarDrag();
                   
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarDominio()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

}


procEditarDominio(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAdd').formSerialize();

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-dominios.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Domínio atualizado com sucesso!","As informações do domínio foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarDominio()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Atualizar");
      $(".form-control").removeAttr("readonly");

}

removerDominios(id){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-dominio.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER DOMÍNIO:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Domínio de empresa ou loja foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerDominios()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

              
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}





    destacarDominio(id,acao){
        
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-destacar-dominio.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+
                     "&id="+id+
                     "&acao="+acao;
                     
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","O domínio foi atualizado.");
              console.log(JSON.parse(xhr.responseText));

            }else{
              
              console.log("SEM SUCESSO destacarDominio()");
              console.log(JSON.parse(xhr.responseText));

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
*   BANNERS
*
*
*  ------------------------------------------------------------------------------------------------
*/
banners(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-banners.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS BANNERS:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO banners()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.views.popularBanners(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}

entidadeBannerInterna(tipoBannerEntidade){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-entidade-banner.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&tipoBannerEntidade="+tipoBannerEntidade;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS ENTIDADE BANNERS:");
                console.log(JSON.parse(xhr.responseText));

                var dados = JSON.parse(xhr.responseText);

                app.views.alimentarEntidadeBannerInterna(dados.entidades,tipoBannerEntidade);

              }else{
                
                console.log("SEM SUCESSO entidadeBannerInterna()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}

procAdicionarBanner(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAdd').formSerialize();

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var link_interno_nome = $("#link_interno").text();

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-banner.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados+
                     "&link_interno_nome="+link_interno_nome;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Banner adicionado com sucesso!","O novo banner foi cadastrado.");
              
              // VOLTAR PARA TODOS OS IMOVEIS
              app.banners();

            }else{
              
              console.log("SEM SUCESSO procAdicionarBanner()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Adicionar");
      $(".form-control").removeAttr("readonly");

}

editarBanner(idBanner){

      var idUsuario = idBanner;

      let xhr = new XMLHttpRequest();
       
      xhr.open('POST', app.urlApi+'admin-editar-banner.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR BANNER");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    // ALIMENTAR OS CAMPOS
                    
                    $("#nome").val(dados.banner[0].nome);
                    $("#link_destino").val(dados.banner[0].link_destino);
                    $("#tipo_link_destino").val(dados.banner[0].tipo_link_destino);

                    if(dados.banner[0].tipo_link_destino!=""){

                        var x = new Promise(function(resolve, reject) {
                           
                           app.entidadeBannerInterna(dados.banner[0].tipo_link_destino); 
                           console.log("ESTOU NA PROMESSA");
                           //resolve();

                        });

                        x.then(function() {
                          console.log("PROMESSA FINALIZADA");
                          $("#link_interno").val(dados.banner[0].link_interno);
                        });
              

                    }
                    
                    $("#tipo").val(dados.banner[0].tipo);

                    // ALIMENTAR AS IMAGENS
                      $(".card").append(`

                        <div class="caixa-preview-imagem-carregada draggable" data-id="${dados.banner[0].id}" data-url="${dados.banner[0].imagem}" ondrag="processarDrag()" id="caixaPreviewImagemCarregada${dados.banner[0].id}">
                              <div style="margin-left:auto;margin-right:auto;position:relative;display:block;width:100px;height:100px;border-radius:8px;background:url('${app.urlCdn}${dados.banner[0].imagem}') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 &nbsp;
                              </div>
                              <p>
                                <a href="javascript:void(0)" onclick="app.views.removerImagemGaleriaImagens(${dados.banner[0].id})" title="Remover essa imagem" style="font-size:13px;color:#ff0000;">
                                  <i class="fa fa-times"></i> remover
                                </a>
                              </p>
                         </div>

                      `);

                  processarDrag();
                   
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarBanner()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

}


procEditarBanner(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAdd').formSerialize();

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = localStorage.getItem("idUsuario");
        var link_interno_nome = $("#link_interno").text();
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-banner.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados+
                     "&link_interno_nome="+link_interno_nome;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Banner atualizado com sucesso!","As informações do banner foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarBanner()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Atualizar");
      $(".form-control").removeAttr("readonly");

}

removerBanner(id){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-banner.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER BANNER:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Banner foi removido com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerBanner()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

              
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}





    destacarBanner(id,acao){
        
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-destacar-banner.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+
                     "&id="+id+
                     "&acao="+acao;
                     
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Deu certo!","O banner foi atualizado.");
              console.log(JSON.parse(xhr.responseText));

            }else{
              
              console.log("SEM SUCESSO destacarBanner()");
              console.log(JSON.parse(xhr.responseText));

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
*   OFERTAS CATEGORIAS
*
*
*  ------------------------------------------------------------------------------------------------
*/
ofertasCategorias(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-ofertas-categorias.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS OFERTAS CATEGORIAS:");
                console.log(JSON.parse(xhr.responseText));

              }else{
                
                console.log("SEM SUCESSO ofertasCategorias()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.views.popularOfertasCategorias(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}

adicionarOfertas(){

  // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-ofertas-categorias.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS OFERTAS CATEGORIAS:");
                console.log(JSON.parse(xhr.responseText));

                var dados = JSON.parse(xhr.responseText);

                app.views.alimentarCategorias(dados.ofertas_categoria);

              }else{
                
                console.log("SEM SUCESSO ofertasCategorias()");
                console.log(JSON.parse(xhr.responseText));

                aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

              }

              var dados = JSON.parse(xhr.responseText);

              app.views.popularOfertasCategorias(dados);
             
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}

procAdicionarOfertasCategorias(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAdd').formSerialize();

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-add-ofertas-categorias.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("A categoria de oferta foi cadastrada com sucesso!","A categoria de oferta foi cadastrada.");
              
              // VOLTAR PARA TODOS OS IMOVEIS
              app.ofertasCategorias();

            }else{
              
              console.log("SEM SUCESSO procAdicionarOfertasCategorias()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Adicionar");
      $(".form-control").removeAttr("readonly");

}

editarOfertasCategorias(idDominio){

      var idUsuario = idDominio;

      let xhr = new XMLHttpRequest();
       
      xhr.open('POST', app.urlApi+'admin-editar-ofertas-categorias.php',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR OFERTAS CATEGORIAS");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    // ALIMENTAR OS CAMPOS
                    $("#nomeCategoriaEditar").html(dados.ofertas_categoria[0].nomeloja);
                    $("#nome").val(dados.ofertas_categoria[0].nome);
                    $("#descricao").val(dados.ofertas_categoria[0].descricao);

                    // ALIMENTAR AS IMAGENS
                      $(".card").append(`

                        <div class="caixa-preview-imagem-carregada draggable" data-id="${dados.ofertas_categoria[0].id}" data-url="${dados.ofertas_categoria[0].capa}" ondrag="processarDrag()" id="caixaPreviewImagemCarregada${dados.ofertas_categoria[0].id}">
                              <div style="margin-left:auto;margin-right:auto;position:relative;display:block;width:100px;height:100px;border-radius:8px;background:url('${app.urlCdn}${dados.ofertas_categoria[0].capa}') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 &nbsp;
                              </div>
                              <p>
                                <a href="javascript:void(0)" onclick="app.views.removerImagemGaleriaImagens(${dados.ofertas_categoria[0].id})" title="Remover essa imagem" style="font-size:13px;color:#ff0000;">
                                  <i class="fa fa-times"></i> remover
                                </a>
                              </p>
                         </div>

                      `);

                  processarDrag();
                   
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }

            }else{
              
              console.log("SEM SUCESSO editarOfertasCategorias()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);

}


procEditarOfertasCategorias(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formAdd').formSerialize();

        $("#btnAddItem").html("Processando...");
        $(".form-control").attr("readonly","true");

        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-proc-editar-ofertas-categorias.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              aviso("Categoria da oferta atualizada com sucesso!","As informações da categoria foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarOfertasCategorias()");
              console.log(JSON.parse(xhr.responseText));

               aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnAddItem").html("Atualizar");
      $(".form-control").removeAttr("readonly");

}

removerOfertasCategorias(id){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'admin-remover-ofertas-categorias.php',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = "token="+app.token+"&id="+id;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

            if(xhr.readyState == 4) {

              if(xhr.status == 200) {

                console.log("RETORNO DOS DADOS REMOVER OFERTAS CATEGORIA:");
                console.log(JSON.parse(xhr.responseText));
                $("#linha"+id).fadeOut("500");
                aviso("Deu certo!","Categoria da oferta foi removida com sucesso");

              }else{
                
                console.log("SEM SUCESSO removerOfertasCategorias()");
                console.log(JSON.parse(xhr.responseText));
                aviso("<b>Oops! Algo deu errado</b>","Tente novamente em alguns minutos");

              }

              
            }

        }; // FINAL AJAX VANILLA

        /* EXECUTA */
        xhr.send(params);

}




}