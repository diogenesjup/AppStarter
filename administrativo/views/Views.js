class Views{
    
	constructor(){
	      
	     this._content = $("section#content"); 
       this._sidemenu = $(".sidemenu");

	     this._allMenus = $("footer * a");
	     this._menu1 = $("footer .menu-1 a");
	     this._menu2 = $("footer .menu-2 a");
	     this._menu3 = $("footer .menu-3 a");

       this.header = $("header");
       this.footer = $("footer");

       this.carregandoTabela = `

            <tr class="carregandoTabela">
               <td style="position:relative;display:block;text-align:center;padding: 40px;padding-bottom: 70px;">
             
                  <p>
                     <img src="assets/images/loading.gif" alt="Carregando" style="width:24px;" />
                  </p>
                  <p style="font-size:13px;">
                     Carregando
                  </p>
              
               </td>
            </tr>

       `;

	}

	animarTransicao(){
		new WOW().init();
	}



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   OUTRAS VIEWS
*
*
*  ------------------------------------------------------------------------------------------------
*/
    view2(){

            this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarPerfil" view-name="view-editarPerfil">

                      <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                         <h2>View 2</h2>
                         <p>Essa é a segunda view</p>
                      </div>

                 </div>

               </div>
            
            `);

            this.animarTransicao();
        
    }

    view3(){

            this._content.html(`
            
               <div class="row view-3" view-name="view-3">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>View 3</h2>
                     <p>Esse é a terceira view</p>
                  </div>
               </div>
            
            `);

            this.animarTransicao();
        
    }


    viewLogin(){

            this._content.html(`
             <div class="container">
               <div class="row view-login" view-name="view-login">
                  
                     <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     

                     <h2>
                        <img src="assets/images/logo.png" alt="Garimpeiros" style="width: 100px;border-radius: 100px;display: block;margin-left: auto;margin-right: auto;" />
                     </h2>
                     <p></p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procLoginSms(event)">
                        <div class="form-group">
                           <label>Seu celular com DDD</label>
                           <input type="tel" class="form-control" id="loginUsuario" placeholder="Digite o número do seu celular" required />
                        </div>
                        

                        <div class="form-group">
                           <button class="btn btn-primary" id="btnViewLogin">
                              Próximo
                           </button>
                        </div>
                        
                     </form>
                     
                     <!--
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                Esqueci minha senha
                            </a>
                          </div>

                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                       </div>
                     -->

                  </div>
                  </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();
            app.helpers.carregarMascaras();
        
    }

    viewCodigoSms(){

        this._content.html(`

            <div class="container">
               <div class="row view-login" view-name="view-login">

                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>
                        <img src="assets/images/logo.png" alt="Garimpeiros" style="width: 100px;border-radius: 100px;display: block;margin-left: auto;margin-right: auto;" />
                     </h2>
                     <p>Insira o código que recebeu por SMS</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procVerificarSms(event)">
                        <div class="form-group">
                           <label>Ele irá chegar em até 2 minutos</label>
                           <input type="tel" class="form-control text-center" id="codigoSms" placeholder="Digite os cinco digitos que recebeu via SMS" required />
                        </div>
                        
                        <div class="form-group">
                           <button class="btn btn-primary text-center" id="btnConfirmarCodigo">
                              Confirmar código
                           </button>
                        </div>
                        
                     </form>
                     
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.viewLoginEmailSenha()" title="Prefiro entrar usando e-mail e senha">
                                Prefiro entrar usando e-mail e senha
                            </a>
                          </div>

                       <!--
                         <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                         </div>
                       -->
                     

                  </div>
               </div>
            
            `);


            $("footer").hide();

            this.animarTransicao();
            app.helpers.carregarMascaras();

    }

    viewLoginEmailSenha(){

      this._content.html(`
             
             <div class="container">
               <div class="row view-login" view-name="view-login">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>
                        <img src="assets/images/logo.png" alt="Garimpeiros" style="width: 100px;border-radius: 100px;display: block;margin-left: auto;margin-right: auto;" />
                     </h2>
                     <p>Entrar com o seu e-mail e senha</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procLogin(event)">
                       
                        <div class="form-group">
                           <label>Seu email de cadastro</label>
                           <input type="text" class="form-control" id="loginUsuario" placeholder="Seu e-mail ou usuário" required />
                        </div>

                        <div class="form-group">
                           <label>Senha</label>
                           <input type="password" class="form-control" id="loginSenha" placeholder="Sua senha cadastrada" required />
                        </div>
                        
                        <div class="form-group">
                           <button class="btn btn-primary" id="btnLoginEmailSenha">
                              Login
                           </button>
                        </div>
                        
                     </form>
                     
                    
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                Esqueci minha senha
                            </a>
                          </div>
                      <!--
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                       </div>
                     -->

                  </div>
               </div>
               </
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }


    viewCadastro(){

      this._content.html(`
           
           <div class="container">
            <div class="row view-login" view-name="view-login">
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                  <h2>
                        <img src="assets/images/logo.png" alt="Garimpeiros" style="width: 100px;border-radius: 100px;display: block;margin-left: auto;margin-right: auto;" />
                     </h2>
                  <p>Faça seu cadastro na plataforma</p>
                  
                  <form method="post" action="javascript:void(0)" onsubmit="app.procCadastro(event)">
                     <input type="hidden" id="cadastroCelular" name="celularCadastro" value="${localStorage.getItem("celularCadastro")}" />
                     <div class="form-group">
                        <label>Seu Nome</label>
                        <input type="text" id="cadastroNome" onclick="ativarFormularioFlutuante('#cadastroNome','Seu nome completo')" class="form-control" placeholder="Seu nome completo" required />
                     </div>
                     <div class="form-group">
                        <label>Seu login</label>
                        <input type="email" id="cadastroEmail" onclick="ativarFormularioFlutuante('#cadastroEmail','Seu e-mail (será o login)')" class="form-control" placeholder="Seu e-mail ou usuário" required />
                     </div>
                     <div class="form-group">
                        <label>Sua senha</label>
                        <input type="password" id="cadastroSenha" class="form-control" placeholder="Sua senha de acesso" required />
                     </div>
                     <div class="form-group">
                        <button class="btn btn-primary" id="btnViewCadastro">
                           Cadastrar
                        </button>
                     </div>
                  </form>

                  <div class="form-group link-apoio text-center">
                       <a href="javascript:void(0)" onclick="app.viewLogin()" title="Já tenho uma conta">
                           Já tenho uma conta
                       </a>
                     </div>

               </div>
            </div>
            </div>
         
         `);

         $("footer").hide();

         this.animarTransicao();

 }
    
    viewEsqueciMinhaSenha(){

          this._content.html(`
            
             <div class="container">
               <div class="row view-login" view-name="view-login">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-4 offset-sm-4 col-12 card wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>
                        <img src="assets/images/logo.png" alt="Garimpeiros" style="width: 100px;border-radius: 100px;display: block;margin-left: auto;margin-right: auto;" />
                     </h2>
                     <p>Informe seu e-mail cadastrado</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procResetSenha(event)">
                        
                        <div class="form-group">
                           <label>Seu e-mail ou usuário cadastrado</label>
                           <input type="email" class="form-control" id="resetEmail" onclick="ativarFormularioFlutuante('#resetEmail','Seu e-mail cadastrado')" placeholder="Seu e-mail ou usuário" required />
                        </div>
                       
                        <div class="form-group">
                           <button class="btn btn-primary" id="btnViewResetarSenha">
                              Resetar senha
                           </button>
                        </div>
                     </form>

                     <div class="form-group link-apoio text-center">
                          <a href="javascript:void(0)" onclick="app.viewLoginEmailSenha()" title="Cancelar reset de senha">
                              Cancelar
                          </a>
                        </div>

                  </div>
               </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }
    

    // VIEW UPLOAD DE FOTO
    viewUploadFoto(){
        
        this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Upload de foto</h2>
                     <p>Fazer upload de imagens via input ou camêra</p>
                     
                     <form class="fileForm" method="post" enctype="multipart/form-data" action="${app.urlApi}v1-imagens-upload.php">
                        
                        <input type="hidden" name="token" value="${app.token}" />
                        <input type="hidden" name="id_usuario" value="${localStorage.getItem("idUsuario")}" />

                         <div class="form-group">
                           <label for="fileArquivo" class="btn btn-default" style="width:100%;">Selecionar arquivo</label>
                           <input style="opacity:0;display:block;height:auto;width:100%;" type="file" id="fileArquivo" class="upload-imagem" name="arquivo" />
                         </div>



                     </form>

                     <div class="form-group">
                         <a href="javascript:void(0)" class="btn btn-primary" onclick="uploadLocal();">
                            Enviar o arquivo
                         </a>
                     </div>

                     <div class="retorno-upload"></div>

                     <div class="form-group link-apoio text-center">
                          <a href="javascript:void(0)" onclick="app.inicio()" title="Cancelar upload de imagens">
                              Cancelar
                          </a>
                     </div>

                  </div>
               </div>
            
            `);
        
        this.animarTransicao();

    }


    desativarTodosMenus(){
      this._allMenus.css("font-weight","normal");
    }

    ativarMenuUm(){
      this.desativarTodosMenus();
        this._menu1.css("font-weight","bold"); 
    }
    ativarMenuDois(){
      this.desativarTodosMenus();
        this._menu2.css("font-weight","bold"); 
    }
    ativarMenuTres(){
      this.desativarTodosMenus();
        this._menu3.css("font-weight","bold"); 
    }




  
    viewPrincipal(){

        if(localStorage.getItem("bdLogado")=="logado"){
            
            $("header").css("opacity","1");
            this._content.removeClass("nao-logado");

            $(".sidemenu nav ul li").removeClass("ativo");
            $("#menuAdminDashboard").addClass("ativo");

            // ALIMENTAR O HEADER
            $("header").html(`
                 
                 <div class="container">
                        <div class="row">

                        <!-- LOGO -->
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 logo">
                            <h1>
                                <a href="javascript:void(0)" onclick="app.abrirSideMenu();" title="Menu" class="toggle-menu">
                                    <i class="fa fa-bars"></i>
                                </a>
                                Administrativo
                            </h1>
                        </div>
                        <!-- LOGO -->
                        
                        <!-- MENU -->
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 menu">
                            
                        </div>
                        <!-- MENU -->

                        <!-- ACTIONS -->
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 actions text-right">
                            
                            <div class="foto-perfil" onclick="app.editarPerfil();" style="background:url('assets/images/logo.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                <a href="javascript:void(0)" title="Editar Perfil">
                                    &nbsp;
                                </a>
                            </div>

                            <h3 style="color: #fff;font-weight: bold;font-style: oblique;font-size: 18px;margin-top: 7px;">GARIMPEIROS</h3>

                        </div>
                        <!-- ACTIONS -->

                    </div>
                    </div>

            `);

            // ALIMENTAR O SIDEMENU

            // MENUS ADMINS
            if(localStorage.getItem("perfilUsuario")=="admin"){

                    this._sidemenu.html(`

                       <nav>
                            <ul>
                                
                                <li id="menuAdminDashboard" class="ativo"><a href="javascript:void(0)" onclick="app.inicio();app.abrirSideMenu();" title="Dashboard">Dashboard</a></li>

                                <li id="menuStatusApi"><a href="javascript:void(0)" onclick="app.statusApi();app.abrirSideMenu();" title="Status API">Status API</a></li>

                                <li id="menuDominios"><a href="javascript:void(0)" onclick="app.dominios();app.abrirSideMenu();" title="Domínios">Domínios</a></li>

                                <li id="menuUsuarios"><a href="javascript:void(0)" onclick="app.clientes();app.abrirSideMenu();" title="Usuários">Usuários</a></li>
                                 
                                <li id="menuBanners"><a href="javascript:void(0)" onclick="app.banners();app.abrirSideMenu();" title="Banners">Banners</a></li>

                                <li id="menuOfertas"><a href="javascript:void(0)" onclick="app.ofertas();app.abrirSideMenu();" title="Ofertas">Ofertas</a></li>

                                <li id="menuOfertasCategorias"><a href="javascript:void(0)" onclick="app.ofertasCategorias();app.abrirSideMenu();" title="Ofertas Categorias">Ofertas Categorias</a></li>
        
                                <li id="menuOfertasCampos"><a href="javascript:void(0)" onclick="app.camposOfertas(1,'ofertas');app.abrirSideMenu();" title="Ofertas Campos">Ofertas Campos</a></li>

                                <li id="menuOfertasCamposCupom"><a href="javascript:void(0)" onclick="app.camposOfertas(2,'cupons');app.abrirSideMenu();" title="Ofertas Campos (cupons)">Ofertas Campos (cupons)</a></li>
                       
                                <li id="menuAdminAcessoAdmin"><a href="javascript:void(0)" onclick="app.acessosAdmin();app.abrirSideMenu();" title="Acesso Admin">Acessos Admin</a></li>

                                <li><a href="javascript:void(0)" onclick="app.procLogoff(); app.abrirSideMenu();" title="Sair">Sair</a></li>

                                <li style="text-align: left;border:none;margin-top: 50px;">
                                    <a href="javascript:void(0)" onclick="app.abrirSideMenu();" style="color: #747474" title="Fechar menu"><i class="fa fa-times"></i> Fechar menu</a>
                                </li>

                            </ul>
                        </nav>

                   `);

            }
            // FINAL MENUS ADMINS
            


            this._content.html(`

              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                          <h1>Dashboard</h1>
                          <p>&nbsp;</p>
                         

                              <div class="row estats">

                                 <!-- CAIXA BRANCA --> 
                                 <div class="col-4" style="padding-left:0px;">
                                     <div class="caixa-branca">
                                         <h2 class="purple">
                                             <small>OFERTAS</small>
                                             <span class="stats1">0</span>
                                         </h2>
                                         <a href="javascript:void(0)" onclick="app.ofertas();" class="help">
                                             ver tudo
                                         </a>
                                     </div>
                                 </div>
                                 <!-- CAIXA BRANCA --> 


                                 <!-- CAIXA BRANCA --> 
                                 <div class="col-4" style="padding-left:0px;">
                                     <div class="caixa-branca">
                                         <h2 class="orange">
                                             <small>OFERTAS NÃO MAPEADAS</small>
                                             <span class="stats2">0</span>
                                         </h2>
                                         <a href="javascript:void(0)" onclick="app.ofertas(3)" class="help">
                                             ver tudo
                                         </a>
                                     </div>
                                 </div>
                                 <!-- CAIXA BRANCA --> 


                                 <!-- CAIXA BRANCA --> 
                                 <div class="col-4" style="padding-left:0px;">
                                     <div class="caixa-branca">
                                         <h2 class="blue">
                                             <small>SUPORTE EM ABERTO</small>
                                             <span class="stats3">0</span>
                                         </h2>
                                         <a href="javascript:void(0)" class="help">
                                             ver tudo
                                         </a>
                                     </div>
                                 </div>
                                 <!-- CAIXA BRANCA --> 


                                 <!-- CAIXA BRANCA --> 
                                 <div class="col-4" style="padding-left:0px;">
                                     <div class="caixa-branca">
                                         <h2 class="red">
                                             <small>DENÚNCIAS</small>
                                             <span class="stats4">0</span>
                                         </h2>
                                         <a href="javascript:void(0)" class="help">
                                             ver tudo
                                         </a>
                                     </div>
                                 </div>
                                 <!-- CAIXA BRANCA --> 


                                 <!-- CAIXA BRANCA --> 
                                 <div class="col-4" style="padding-left:0px;">
                                     <div class="caixa-branca">
                                         <h2 class="gray">
                                             <small>USUÁRIOS</small>
                                             <span class="stats5">0</span>
                                         </h2>
                                         <a href="javascript:void(0)" onclick="app.clientes();" class="help">
                                             ver tudo
                                         </a>
                                     </div>
                                 </div>
                                 <!-- CAIXA BRANCA --> 

                            </div>

                         
                          <!-- ESTATS -->

                          
                           
                           

                      </div>
                   </div>

              </div>
            
            `);

            this.animarTransicao();

            $("footer").fadeIn();

         }
        
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


popularOfertas(dados){

  if(localStorage.getItem("bdLogado")=="logado"){

         if(dados.sucesso=="200"){

             $(".carregandoTabela").hide(0);

             if(dados.ofertas.length==0){ 

                aviso("Sem informações para mostrar","Nenhuma oferta cadastrada");
             
             }
         
             $("#conteudoOfertas").html(`
                  
                   ${dados.ofertas.map((n) => {

                          return `
                            <tr id="linha${n.id}">
                              <td></td>
                              <td>${n.nome}</td>
                              <td style="width:190px;">
                                  
                                  <a href="javascript:void(0)" onclick="//app.perguntarRemoverImoveis(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="//app.editarImoveis(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="//app.editarImoveis(${n.id})" class="btn btn-primary btn-sm" title="Visualizar">
                                     <i class="fa fa-eye"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="//app.editarImoveis(${n.id})" class="btn btn-primary btn-sm" title="Autorização">
                                     <i class="fa fa-unlock-alt"></i>
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}


             `);

         }else{

          aviso("Oops! Algo deu errado","Não conseguimos recuperar as informações, tente novamente em alguns minutos.");
         
         }

    } // VERIFICAR SE ESTÁ LOGADO

  }


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   STATUS APIS
*
*
*  ------------------------------------------------------------------------------------------------
*/

statusApi(){

   $(".sidemenu nav ul li").removeClass("ativo");
   $("#menuStatusApi").addClass("ativo");

   this._content.html(`

              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h3>Status das API</h3>
                         <p>Status das APIS interligadas plataforma GARIMPEIROS</p>
                         <p>&nbsp;</p>
                         

                         <div class="table-responsive">
                             
                             <table class="table table-striped" style="width:100%;">
                                 <thead>
                                    <th>API</th>
                                    <th></th>
                                    <th>Descrição</th>
                                    <th>Ações</th>
                                    <th>Status</th>
                                 </thead>
                                 <tbody>
                                    
                                    <tr>
                                      <td style="padding-top:18px;padding-bottom:18px;font-weight: 900;color: #000;font-style: oblique;">GARIMPEIROS</td>
                                      <td></td>
                                      <td style="padding-top:18px;padding-bottom:18px;">API de comunicação entre plataformas</td>
                                      <td>N/A</td>
                                      <td style="padding-top:18px;padding-bottom:18px;"><span class="pulse2"></span> <span style="font-size:12px;">online</span></td>
                                    </th>

                                    <tr>
                                      <td style="padding-top:18px;padding-bottom:18px;"><img src="assets/images/AWIN_logo.svg" alt="Awin logo" style="width:80px;" /></td>
                                      <td></td>
                                      <td style="padding-top:18px;padding-bottom:18px;">API de comunicação com a plataforma AWIN</td>
                                      <td>N/A</td>
                                      <td style="padding-top:18px;padding-bottom:18px;"><span class="pulse2"></span> <span style="font-size:12px;">online, mas apresenta problemas</span></td>
                                    </th>

                                    <tr>
                                      <td style="padding-top:18px;padding-bottom:18px;"><img src="assets/images/rakuten_nav_gradient.svg" alt="Awin logo" style="width:87px;" /></td>
                                      <td></td>
                                      <td style="padding-top:18px;padding-bottom:18px;">API de comunicação com a plataforma Rokuten</td>
                                      <td>N/A</td>
                                      <td style="padding-top:18px;padding-bottom:18px;"><span class="pulse2" style="background:#ff0000;"></span> <span style="font-size:12px;">offline</span></td>
                                    </th>

                                    <tr>
                                      <td style="padding-top:18px;padding-bottom:18px;"><img src="assets/images/amazon.png" alt="Amazon logo" style="width:87px;" /></td>
                                      <td></td>
                                      <td style="padding-top:18px;padding-bottom:18px;">API de comunicação com a plataforma Amazon</td>
                                      <td>
                                          <form class="form-inline">
                                             <div class="form-group">
                                               <input type="text" style="margin-right: 5px;" class="form-control form-control-sm" id="amazonKeyWord" placeholder="Keyword" />
                                            </div>
                                            <a href="javascript:void(0)" title="Sinc" onclick="app.amazon()" class="btn btn-primary btn-sm">
                                                <i class="fa fa-refresh"></i> Sinc
                                            </a>
                                          </form>
                                      </td>
                                      <td style="padding-top:18px;padding-bottom:18px;"><span class="pulse2"></span> <span style="font-size:12px;">online</span></td>
                                    </th>

                                    <tr>
                                      <td style="padding-top:18px;padding-bottom:18px;"><img src="assets/images/via-varejo-logo-1.png" alt="Via Verejo logo" style="width:87px;" /></td>
                                      <td></td>
                                      <td style="padding-top:18px;padding-bottom:18px;">API de comunicação com a plataforma Via Verejo</td>
                                      <td>N/A</td>
                                      <td style="padding-top:18px;padding-bottom:18px;"><span class="pulse2" style="background:#ff0000;"></span> <span style="font-size:12px;">offline</span></td>
                                    </th>

                                    
                                 </tbody>
                             </table>

                         </div>
                     

                      </div>
                   </div>

              </div>
            
            `);

            this.animarTransicao();

}


amazonSinc(dados,keyword){

  $(".sidemenu nav ul li").removeClass("ativo");
   $("#menuStatusApi").addClass("ativo");

   var calc = 0;

   this._content.html(`

              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h3>Sinc Amazon</h3>
                         <p>Ofertas retornadas Amazon (<small>keyword</small> ${keyword}):</p>
                         <p>&nbsp;</p>
                         
                         <div class="table-responsive">

                         <table class="table table-striped">

                           <thead>
                               <th>ASIN</th>
                               <th>Imagem</th>
                               <th style="width:155px;">Título</th>
                               <th>Link</th>
                               <th>Categoria</th>
                               <th>Preço</th>
                               <th>% Econ</th>
                               <th>Antigo</th>
                               <th></th>
                           </thead>
                           <tbody>

                         ${dados.SearchResult.Items.map((n) => {

                            try {

                              calc = n.Offers.Listings[0].Price.Amount+n.Offers.Listings[0].Price.Savings.Amount;

                              return `
                                <tr id="linha${n.ASIN}">
                                  <td>${n.ASIN}</td>
                                  <td><img src="${n.Images.Primary.Medium.URL}" style="width:80px;height:auto;"></td>
                                  <td style="width:155px;">${n.ItemInfo.Title.DisplayValue}</td>
                                  <td><a style="color:#747474;text-decoration:none;" href="${n.DetailPageURL}" target="_blank" title="Clique para ver"><i class="fa fa-eye"></i></a></td>
                                  <td>${n.BrowseNodeInfo.BrowseNodes[0].ContextFreeName}</td>
                                  <td>${n.Offers.Listings[0].Price.DisplayAmount}</td>
                                  <td>${n.Offers.Listings[0].Price.Savings.DisplayAmount}</td>
                                  <td><strike>R$ ${calc.toFixed(2)}</strike></td>
                                  <td>
                                    <a href="javascript:void(0)" onclick="app.models.salvarSincAmazon('${n.Images.Primary.Medium.URL}',
                                    '${n.DetailPageURL}',
                                    '${n.ItemInfo.Title.DisplayValue}',
                                    '${n.Offers.Listings[0].Price.DisplayAmount}',
                                    '${n.Offers.Listings[0].Price.Savings.DisplayAmount}'
                                    )" title="salvar no banco de dados da plataforma" class="btn btn-primary btn-sm">
                                       <i class="fa fa-floppy-o"></i>
                                    </a>
                                  </td>
                                </tr>
                              `

                              }
                                catch(err) {
                                  console.log(err.message);
                                }
                           //if(n.Offers.Listings[0].Price.Savings.DisplayAmount!==undefined){
                           //}
                           
                                  

                        }).join('')}

                                </tbody>
                              </table>

                          </div>
                     

                      </div>
                   </div>

              </div>
            
            `);

            this.animarTransicao();

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

   $(".sidemenu nav ul li").removeClass("ativo");
   $("#menuDominios").addClass("ativo");

   this._content.html(`

              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h3>Domínios</h3>
                         <p>Domínios de identificação ofertas plataforma GARIMPEIROS</p>
                         <p>&nbsp;</p>
                         
                         <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.views.adicionarDominio()" class="btn btn-primary" title="Adicionar novo domínio">
                                       <i class="fa fa-plus"></i> Adicionar
                                     </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabela();" id="filtroTabela">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                         <div class="table-responsive">
                             
                             <table class="table table-striped" style="width:100%;">
                                 <thead>
                                    <th>#</th>
                                    <th>Nome da loja/canal</th>
                                    <th>Domínio</th>
                                    <th>Cashback</th>
                                    <th>Logo</th>
                                    <th>Destacar</th>
                                    <th>Ações</th>
                                 </thead>
                                 <tbody id="conteudoTabela">
                                 </tbody>
                             </table>

                         </div>

                         <div class="text-right">
                              
                              <a href="javascript:void(0)" onclick="app.views.adicionarDominio()" class="btn btn-primary" title="Adicionar novo domínio">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>
                     
                      </div>
                   </div>

              </div>
            
            `);

            this.animarTransicao();

}

popularDominios(dados){

     var checked = "";
    
            $("#conteudoTabela").html(`
                  
                   ${dados.dominios.map((n) => {

                    if(n.cashback_gpr==null){ n.cashback_gpr = "0"; }
                    if(n.destaque=="sim"){ checked = "checked"; }else{ checked = "" }

                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nomeloja}</td>
                              <td>${n.urldom}</td>
                              <td>${n.cashback_gpr}</td>
                              <td>
                                  <img src="${app.urlCdn}${n.logo}" alt="${n.nomeloja}" style="width:120px;" />
                              </td>
                              <td>
                                  <div class="form-check">
                                      <input class="form-check-input" ${checked} onchange="app.destacarDominio(this,${n.id})" type="checkbox" value="sim" id="destaqueDominio${n.id}">
                                      <label class="form-check-label" for="destaqueDominio${n.id}">
                                        Destacar
                                      </label>
                                  </div>
                              </td>
                              <td style="width:175px;">
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemoverDominios(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarDominio(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.ofertasDominio(${n.id},'${n.nomeloja}','${n.logo}');" class="btn btn-primary btn-sm" title="Ofertas desse domínio">
                                     <i class="fa fa-database"></i> ofertas
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}

             `);

}


adicionarDominio(){

      $(".sidemenu nav ul li").removeClass("ativo");

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarDominio" view-name="view-adicionarDominio">

                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar Domínio</h4>
                                    <p>&nbsp;</p>

                                    <form id="formAdd" method="post" action="javascript:void(0)" onsubmit="app.models.procAdicionarDominio(event)">
                                            
                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">

                                                  <div class="row">
                                                      
                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Nome da loja</label>
                                                             <input type="text" class="form-control" name="nomeloja" id="nomeloja" placeholder="Nome da loja" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>URL domínio (sem https ou www)</label>
                                                             <input type="text" class="form-control" name="urldom" id="urldom" placeholder="URL do domínio" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA DOIS -->

                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Valor cashback GPR</label>
                                                             <input type="tel" class="form-control" name="cashback_gpr" id="cashback_gpr" placeholder="Valor cashback" required />
                                                             <p class="help-block" style="font-size:12px;">
                                                                Utilize apenas números, separe decimais por ponto
                                                             </p>
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                  </div>

                                              
                                                  <!-- BOTAO DE ENVIAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" class="btn btn-primary" id="btnAddItem">Adicionar</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ENVIAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->

                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Logo da loja/empresa</h4>
                                                  
                                                  <div class="card blank" data-accept="draggable">
                                                     <p style="text-align:center;font-size:12px;">
                                                         Nenhuma imagem ainda
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagem" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagem
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

}

editarDominio(idDominio){

  $(".sidemenu nav ul li").removeClass("ativo");

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarDominio" view-name="view-adicionarDominio">

                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar Domínio <span id="nomeDominioEditar"></span></h4>
                                    <p>&nbsp;</p>

                                    <form id="formAdd" method="post" action="javascript:void(0)" onsubmit="app.models.procEditarDominio(event)">
                                        
                                        <input type="hidden" name="id_dominio" value="${idDominio}" />

                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">

                                                  <div class="row">
                                                      
                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Nome da loja</label>
                                                             <input type="text" class="form-control" name="nomeloja" id="nomeloja" placeholder="Nome da loja" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>URL domínio (sem https ou www)</label>
                                                             <input type="text" class="form-control" name="urldom" id="urldom" placeholder="URL do domínio" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA DOIS -->

                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Valor cashback GPR</label>
                                                             <input type="tel" class="form-control" name="cashback_gpr" id="cashback_gpr" placeholder="Valor cashback" required />
                                                             <p class="help-block" style="font-size:12px;">
                                                                Utilize apenas números, separe decimais por ponto
                                                             </p>
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                  </div>

                                              
                                                  <!-- BOTAO DE ENVIAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" class="btn btn-primary" id="btnAddItem">Atualizar</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ENVIAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->

                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Logo da loja/empresa</h4>
                                                  
                                                  <div class="card blank" data-accept="draggable">
                                                     <p style="text-align:center;font-size:12px;">
                                                         Nenhuma imagem ainda
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagem" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagem
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

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

   $(".sidemenu nav ul li").removeClass("ativo");
   $("#menuBanners").addClass("ativo");

   this._content.html(`

              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h3>Banners</h3>
                         <p>Banners plataforma GARIMPEIROS</p>
                         <p>&nbsp;</p>
                         
                         <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.views.adicionarBanner()" class="btn btn-primary" title="Adicionar novo banner">
                                       <i class="fa fa-plus"></i> Adicionar
                                     </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabela();" id="filtroTabela">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                         <div class="table-responsive">
                             
                             <table class="table table-striped" style="width:100%;">
                                 <thead>
                                    <th>#</th>
                                    <th>Cliques</th>
                                    <th>Nome do banner</th>
                                    <th>Link destino</th>
                                    <th>Imagem</th>
                                    <th>Destacar</th>
                                    <th>Ações</th>
                                 </thead>
                                 <tbody id="conteudoTabela">
                                 </tbody>
                             </table>

                         </div>

                         <div class="text-right">
                              
                              <a href="javascript:void(0)" onclick="app.views.adicionarBanner()" class="btn btn-primary" title="Adicionar novo banner">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>
                     
                      </div>
                   </div>

              </div>
            
            `);

            this.animarTransicao();

}

popularBanners(dados){

     var checked = "";
    
            $("#conteudoTabela").html(`
                  
                   ${dados.banners.map((n) => {

                    
                    if(n.destaque=="sim"){ checked = "checked"; }else{ checked = "" }

                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.cliques}</td>
                              <td>${n.nome}</td>
                              <td><span style="display:block;width:206px;word-break:break-all">${n.link_destino}</span></td>
                              <td>
                                  <img src="${app.urlCdn}${n.imagem}" alt="${n.nomeloja}" style="width:200px;" />
                              </td>
                              <td>
                                  <div class="form-check">
                                      <input class="form-check-input" ${checked} onchange="app.destacarBanner(this,${n.id})" type="checkbox" value="sim" id="destacarBanner${n.id}">
                                      <label class="form-check-label" for="destacarBanner${n.id}">
                                        Destacar
                                      </label>
                                  </div>
                              </td>
                              <td style="width:175px;">
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemoverBanner(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarBanner(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>  

                              </td>
                            </tr>
                          `

                    }).join('')}

             `);

}


alimentarEntidadeBannerInterna(entidades,tipoEntidade){

    if(tipoEntidade=="oferta"){

             $("#link_interno").html(`
                  
                   ${entidades.map((n) => {

                          return `

                             <option value="${n.id}">${n.titulo}</option>
                              
                          `

                    }).join('')}

             `);

    }


    if(tipoEntidade=="categoria"){

             $("#link_interno").html(`
                  
                   ${entidades.map((n) => {

                          return `

                             <option value="${n.id}">${n.nome}</option>
                              
                          `

                    }).join('')}

             `);

    }

    


}


adicionarBanner(){

      $(".sidemenu nav ul li").removeClass("ativo");

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarDominio" view-name="view-adicionarDominio">

                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar Banner</h4>
                                    <p>&nbsp;</p>

                                    <form id="formAdd" method="post" action="javascript:void(0)" onsubmit="app.models.procAdicionarBanner(event)">
                                            
                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">

                                                  <div class="row">
                                                      
                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Nome do banner</label>
                                                             <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome do banner" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>URL de destino do banner (com https)</label>
                                                             <input type="text" class="form-control" name="link_destino" id="link_destino" placeholder="Link de destino ao clicar" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA DOIS -->

                                                      <!-- COLUNA TRES -->
                                                      <div class="col-12 no-padding-left-desktop">
                                                         <div class="form-group">
                                                             <label>Link do banner será para entidade interna dentro da plataforma</label>
                                                             <select onchange="app.entidadeBannerInterna(this.value)" class="form-control" name="tipo_link_destino" id="tipo_link_destino">
                                                                <option value="">Não</option>
                                                                <option value="oferta">Oferta</option>
                                                                <option value="categoria">Categoria</option>
                                                             </select>
                                                          </div>
                                                      </div>

                                                      <div class="col-12 no-padding-left-desktop" style="display:none;" id="entidadeInterna">
                                                         <div class="form-group">
                                                             <label>Selecione a entidade</label>
                                                             <select class="form-control" name="link_interno" id="link_interno">
                                                                <option value="">Selecione uma opção</option>
                                                             </select>
                                                          </div>
                                                      </div>
                                                      <!-- COLUNA TRES -->



                                                      <!-- COLUNA QUATRO -->
                                                      <div class="col-12 no-padding-left-desktop">
                                                         <div class="form-group">
                                                             <label>Tipo de banner (tamanho)</label>
                                                             <select class="form-control" name="tipo" id="tipo" required>
                                                                <option value="">Selecione uma opção</option>
                                                                <option value="quadrado">Banner quadrado</option>
                                                                <option value="retangulo">Banner retângular</option>
                                                                <option value="retangulo_desktop">Banner retângular Desktop</option>
                                                                <option value="paisagem_desktop">Paisagem Desktop</option>
                                                             </select>
                                                          </div>
                                                      </div>
                                                      <!-- COLUNA QUATRO -->

                                                  </div>

                                              
                                                  <!-- BOTAO DE ENVIAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" class="btn btn-primary" id="btnAddItem">Adicionar</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ENVIAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->

                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Imagem do banner</h4>
                                                  
                                                  <div class="card blank" data-accept="draggable">
                                                     <p style="text-align:center;font-size:12px;">
                                                         Nenhuma imagem ainda
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagem" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagem
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

}

editarBanner(idBanner){

  $(".sidemenu nav ul li").removeClass("ativo");

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarDominio" view-name="view-adicionarDominio">

                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar Banner <span id="nomeBannerEditar"></span></h4>
                                    <p>&nbsp;</p>

                                    <form id="formAdd" method="post" action="javascript:void(0)" onsubmit="app.models.procEditarBanner(event)">
                                        
                                        <input type="hidden" name="id_banner" value="${idBanner}" />

                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">

                                                  <div class="row">


                                                            <!-- COLUNA UM -->
                                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                                <div class="form-group">
                                                                   <label>Nome do banner</label>
                                                                   <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome do banner" required />
                                                                </div>

                                                            </div>
                                                            <!-- COLUNA UM -->

                                                            <!-- COLUNA DOIS -->
                                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                                
                                                                <div class="form-group">
                                                                   <label>URL de destino do banner (com https)</label>
                                                                   <input type="text" class="form-control" name="link_destino" id="link_destino" placeholder="Link de destino ao clicar" required />
                                                                </div>

                                                            </div>
                                                            <!-- COLUNA DOIS -->

                                                            <!-- COLUNA TRES -->
                                                            <div class="col-12 no-padding-left-desktop">
                                                               <div class="form-group">
                                                                   <label>Link do banner será para entidade interna dentro da plataforma</label>
                                                                   <select onchange="app.entidadeBannerInterna(this.value)" class="form-control" name="tipo_link_destino" id="tipo_link_destino">
                                                                      <option value="">Não</option>
                                                                      <option value="oferta">Oferta</option>
                                                                      <option value="categoria">Categoria</option>
                                                                   </select>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 no-padding-left-desktop" style="display:none;" id="entidadeInterna">
                                                               <div class="form-group">
                                                                   <label>Selecione a entidade</label>
                                                                   <select class="form-control" name="link_interno" id="link_interno">
                                                                      <option value="">Selecione uma opção</option>
                                                                   </select>
                                                                </div>
                                                            </div>
                                                            <!-- COLUNA TRES -->



                                                            <!-- COLUNA QUATRO -->
                                                            <div class="col-12 no-padding-left-desktop">
                                                               <div class="form-group">
                                                                   <label>Tipo de banner (tamanho)</label>
                                                                   <select class="form-control" name="tipo" id="tipo" required>
                                                                      <option value="">Selecione uma opção</option>
                                                                      <option value="quadrado">Banner quadrado</option>
                                                                      <option value="retangulo">Banner retângular</option>
                                                                      <option value="retangulo_desktop">Banner retângular Desktop</option>
                                                                      <option value="paisagem_desktop">Paisagem Desktop</option>
                                                                   </select>
                                                                </div>
                                                            </div>
                                                            <!-- COLUNA QUATRO -->
                                                      
                                                      

                                                  </div>

                                              
                                                  <!-- BOTAO DE ENVIAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" class="btn btn-primary" id="btnAddItem">Atualizar</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ENVIAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->

                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Imagem do banner</h4>
                                                  
                                                  <div class="card blank" data-accept="draggable">
                                                     <p style="text-align:center;font-size:12px;">
                                                         Nenhuma imagem ainda
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagem" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagem
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

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

   $(".sidemenu nav ul li").removeClass("ativo");
   $("#menuOfertasCategorias").addClass("ativo");

   this._content.html(`

              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h3>Categorias das ofertas</h3>
                         <p>Categoria das ofertas plataforma GARIMPEIROS</p>
                         <p>&nbsp;</p>
                         
                         <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.views.adicionarOfertasCategorias()" class="btn btn-primary" title="Adicionar nova categoria de ofertas">
                                       <i class="fa fa-plus"></i> Adicionar
                                     </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabela();" id="filtroTabela">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                         <div class="table-responsive">
                             
                             <table class="table table-striped" style="width:100%;">
                                 <thead>
                                    <th>#</th>
                                    <th>Nome da categoria</th>
                                    <th>Descrição</th>
                                    <th>Capa</th>
                                    <th>Ações</th>
                                 </thead>
                                 <tbody id="conteudoTabela">
                                 </tbody>
                             </table>

                         </div>

                         <div class="text-right">
                              
                              <a href="javascript:void(0)" onclick="app.views.adicionarOfertasCategorias()" class="btn btn-primary" title="Adicionar categoria de ofertas">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>
                     
                      </div>
                   </div>

              </div>
            
            `);

            this.animarTransicao();

}

popularOfertasCategorias(dados){

            $("#conteudoTabela").html(`
                  
                   ${dados.ofertas_categoria.map((n) => {

                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nome}</td>
                              <td>${n.descricao}</td>
                              <td>
                                  <img src="${app.urlCdn}${n.capa}" alt="${n.nome}" style="width:120px;" />
                              </td>
                              <td style="width:175px;">
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemoverOfertasCategorias(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarOfertasCategorias(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="" class="btn btn-primary btn-sm" title="Ofertas dessa categoria">
                                     <i class="fa fa-database"></i> ofertas
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}

             `);

}


adicionarOfertasCategorias(){

      $(".sidemenu nav ul li").removeClass("ativo");

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarOfertasCategorias" view-name="view-adicionarOfertasCategorias">

                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar categoria de oferta</h4>
                                    <p>&nbsp;</p>

                                    <form id="formAdd" method="post" action="javascript:void(0)" onsubmit="app.models.procAdicionarOfertasCategorias(event)">
                                            
                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">

                                                  <div class="row">
                                                      
                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Nome da categoria</label>
                                                             <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome da categoria" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Descrição da categoria</label>
                                                             <textarea class="form-control" rows="5" name="descricao" id="descricao" placeholder="Descrição da categoria"></textarea>
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA DOIS -->

                                                  </div>

                                              
                                                  <!-- BOTAO DE ENVIAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" class="btn btn-primary" id="btnAddItem">Adicionar</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ENVIAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->

                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Imagem de capa categoria</h4>
                                                  
                                                  <div class="card blank" data-accept="draggable">
                                                     <p style="text-align:center;font-size:12px;">
                                                         Nenhuma imagem ainda
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagem" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagem
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

}

editarOfertasCategorias(idOfertasCategorias){

  $(".sidemenu nav ul li").removeClass("ativo");

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarDominio" view-name="view-adicionarDominio">

                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar categoria de oferta <span id="nomeCategoriaEditar"></span></h4>
                                    <p>&nbsp;</p>

                                    <form id="formAdd" method="post" action="javascript:void(0)" onsubmit="app.models.procEditarOfertasCategorias(event)">
                                        
                                        <input type="hidden" name="id_categoria" value="${idOfertasCategorias}" />

                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">

                                                  <div class="row">
                                                      
                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Nome da categoria</label>
                                                             <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome da categoria" required />
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Descrição da categoria</label>
                                                             <textarea class="form-control" rows="5" name="descricao" id="descricao" placeholder="Descrição da categoria"></textarea>
                                                          </div>

                                                      </div>
                                                      <!-- COLUNA DOIS -->

                                                  </div>

                                              
                                                  <!-- BOTAO DE ENVIAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" class="btn btn-primary" id="btnAddItem">Atualizar</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ENVIAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->

                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Imagem de capa da categoria</h4>
                                                  
                                                  <div class="card blank" data-accept="draggable">
                                                     <p style="text-align:center;font-size:12px;">
                                                         Nenhuma imagem ainda
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagem" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagem
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

}





/**
*  ------------------------------------------------------------------------------------------------
*
*
*   EDITAR PERFIL USUARIO LOGADO
*
*
*  ------------------------------------------------------------------------------------------------
*/
    editarPerfil(){

       $(".sidemenu nav ul li").removeClass("ativo");
       
       this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarPerfil" view-name="view-editarPerfil">

                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar seus dados</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form method="post" action="javascript:void(0)" onsubmit="app.procEditarPerfil(event)">
                                            
                                            <div class="form-group">
                                               <label>Nome</label>
                                               <input type="text" class="form-control" id="editarPerfilNome" placeholder="Seu nome" required />
                                            </div>

                                            <div class="form-group">
                                               <label>E-mail</label>
                                               <input type="email" class="form-control" id="editarPerfilEmail" placeholder="E-mail de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Celular</label>
                                               <input type="text" class="form-control" id="editarPerfilCelular" placeholder="DDD + número" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Senha de acesso</label>
                                               <input type="password" class="form-control" id="editarPerfilSenha" placeholder="Senha de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <button type="submit" class="btn btn-primary" id="btnEditarPerfil">Atualizar</button>
                                            </div>

                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

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

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuAdminAcessoAdmin").addClass("ativo");

      

           this._content.html(`
            
              <div class="container">
                 
                   <div class="row view-acessosAdmin" view-name="view-acessosAdmin">
                       <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                           
                           <!-- TÍTULOS DA PÁGINAS --> 
                           <h4>Acessos administrativo</h4>
                           <p>Usuários com acesso administrativo podem fazer qualquer tipo de alteração na plataforma</p>
                           <p>&nbsp;</p>
                           <!-- TÍTULOS DA PÁGINAS -->
                           
                           <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" style="float: right;" onclick="app.adicionarAcessoAdmin()" class="btn btn-primary" title="Adicionar novo usuário administrativo">
                                       <i class="fa fa-plus"></i> Adicionar
                                    </a>

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabelaAcessosAdmin();" id="filtroTabelaAcessosAdmin">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->

                                    
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">
                                   <thead>
                                      <th>#</th>
                                      <th>Nome</th>
                                      <th>E-mail</th>
                                      <th>Celular</th>
                                      <th>Senha</th>
                                      <th>Ações</th>
                                   </thead>

                                   <tbody id="conteudoAcessosAdmin">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           <div class="text-right">
                              <a href="javascript:void(0)" onclick="app.adicionarAcessoAdmin()" class="btn btn-primary" title="Adicionar novo usuário administrativo">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>
                              
                           </div>


                       </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }
    popularAcessosAdmin(dados){

         
         if(dados.sucesso=="200"){

             $(".carregandoTabela").hide(0);

             if(dados.dados.length==0){

                aviso("Sem informações para mostrar","Nenhum usuário administrativo cadastrado");
             
             }
         
             $("#conteudoAcessosAdmin").html(`
                  
                   ${dados.dados.map((n) => {
                         
                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nome}</td>
                              <td>${n.email}</td>
                              <td>${n.celular}</td>
                              <td>${n.senha}</td>
                              <td>
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemover(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <a href="javascript:void(0)" onclick="app.editarAcessoAdmin(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}


             `);

         }else{

          aviso("Oops! Algo deu errado","Não conseguimos recuperar as informações, tente novamente em alguns minutos.");
         
         }

    }
    adicionarAcessoAdmin(){


      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarAcessoAdmin" view-name="view-adicionarAcessoAdmin">

                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar usuário com acesso administrativo</h4>

                                         <form method="post" action="javascript:void(0)" onsubmit="app.procAdicionarAcessoAdmin(event)">
                                            
                                            <div class="form-group">
                                               <label>Nome</label>
                                               <input type="text" class="form-control" id="acessoAdminNome" placeholder="Nome do usuário" required />
                                            </div>

                                            <div class="form-group">
                                               <label>E-mail</label>
                                               <input type="email" class="form-control" id="acessoAdminEmail" placeholder="E-mail de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Celular</label>
                                               <input type="text" class="form-control" id="acessoAdminCelular" placeholder="DDD + número" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Senha de acesso</label>
                                               <input type="password" class="form-control" id="acessoAdminSenha" placeholder="Senha de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <button type="submit" class="btn btn-primary" id="btnAddAcessoAdmin">Adicionar</button>
                                               
                                            </div>

                                         </form>

                                  
                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

    }
    editarAcessoAdmin(){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarPerfil" view-name="view-editarPerfil">

                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar dados do usuário Acesso Administrativo</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form method="post" action="javascript:void(0)" onsubmit="app.procEditarAcessoAdmin(event)">

                                            <input type="hidden" name="id" id="acessoAdminEditarId" value="" />
                                            
                                            <div class="form-group">
                                               <label>Nome</label>
                                               <input type="text" class="form-control" id="acessoAdminEditarNome" placeholder="Nome do usuário" required />
                                            </div>

                                            <div class="form-group">
                                               <label>E-mail</label>
                                               <input type="email" class="form-control" id="acessoAdminEditarEmail" placeholder="E-mail de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Celular</label>
                                               <input type="text" class="form-control" id="acessoAdminEditarCelular" placeholder="DDD + número" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Senha de acesso</label>
                                               <input type="password" class="form-control" id="acessoAdminEditarSenha" placeholder="Senha de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <button type="submit" class="btn btn-primary" id="btnEditarAcessoAdmin">Atualizar</button>
                                               
                                            </div>

                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

    }
   



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   CLIENTES / USUÁRIOS APPS
*
*
*  ------------------------------------------------------------------------------------------------
*/
    clientes(){

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuClientes").addClass("ativo");

           this._content.html(`
            
              <div class="container">
                 
                   <div class="row view-acessosAdmin" view-name="view-acessosAdmin">
                       <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                           
                           <!-- TÍTULOS DA PÁGINAS --> 
                           <h4>Usuários</h4>
                           <p>Usuários cadastrados na plataforma</p>
                           <p>&nbsp;</p>
                           <!-- TÍTULOS DA PÁGINAS -->
                           
                           <div class="row">
                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 offset-xl-7 offset-lg-7 offset-md-7 offset-sm-7" style="padding-right:0px;">
                                     
                                    

                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabelaClientes();" id="filtroTabelaClientes">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->

                                    
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">
                                   <thead>
                                      <th>#</th>
                                      <th>Nome</th>
                                      <th>E-mail</th>
                                      <th>Cel</th>
                                      <th>Senha</th>
                                      <th>CPF</th>
                                      <th style="width:125px;">Ações</th>
                                   </thead>

                                   <tbody id="conteudoClientes">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                          


                       </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }
    popularClientes(dados){

         
         if(dados.sucesso=="200"){

             $(".carregandoTabela").hide(0);

             if(dados.clientes.length==0){

                aviso("Sem informações para mostrar","Nenhum usuário cadastrado");
             
             }
         
             $("#conteudoClientes").html(`
                  
                   ${dados.clientes.map((n) => {

                         
                          return `
                            <tr id="linha${n.id}">
                              <td>${n.id}</td>
                              <td>${n.nome}</td>
                              <td>${n.email}</td>
                              <td>
                               ${n.celular}
                              </td>
                              <td>${n.senha}</td>
                              <td>${n.cpf}</td>
                             
                              <td style="width:125px;">
                                  
                                  <a href="javascript:void(0)" onclick="app.perguntarRemoverClientes(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                    <i class="fa fa-trash"></i>
                                  </a>

                                  <!--<a href="javascript:void(0)" onclick="//app.editarClientes(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                     <i class="fa fa-pencil"></i>
                                  </a>-->

                                  <a href="javascript:void(0)" class="btn btn-primary btn-sm" title="Extrato desse usuário">
                                     <i class="fa fa-usd"></i>
                                  </a>

                              </td>
                            </tr>
                          `

                    }).join('')}


             `);

         }else{

          aviso("Oops! Algo deu errado","Não conseguimos recuperar as informações, tente novamente em alguns minutos.");
         
         }

    }
    adicionarClientes(corretores){


      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarClientes" view-name="view-adicionarClientes">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar Usuário</h4>

                                         <form method="post" action="javascript:void(0)" onsubmit="app.procAdicionarClientes(event)">
                                            

                                            <div class="row">
                                              <div class="col-xl-6 col-lg-6 col-12">

                                                <div class="form-group">
                                                   <label>Nome</label>
                                                   <input type="text" class="form-control" id="clientesNome" placeholder="Nome completo do cliente" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>CPF</label>
                                                   <input type="text" class="form-control" id="clientesCpf" placeholder="CPF" required />
                                                </div>
                                                <div class="form-group">
                                                   <label>CNPJ</label>
                                                   <input type="text" class="form-control" id="clientesCnpj" placeholder="CNPJ"  />
                                                </div>

                                                <div class="form-group">
                                                   <label>E-mail</label>
                                                   <input type="email" class="form-control" id="clientesEmail" placeholder="E-mail de contato do cliente" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Celular</label>
                                                   <input type="text" class="form-control" id="clientesCelular" placeholder="DDD + número" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Telefone</label>
                                                   <input type="text" class="form-control" id="clientesTelefone" placeholder="DDD + número" />
                                                </div>


                                                <div class="form-group">
                                                   <label>Senha de acesso</label>
                                                   <input type="password" class="form-control" id="clientesSenha" placeholder="Senha de acesso" required />
                                                </div>

                                            </div>

                                            <div class="col-xl-6 col-lg-6 col-12">


                                                <div class="form-group">
                                                   <label>Endereço</label>
                                                   <input type="text" class="form-control" id="clientesEndereco" placeholder="Endereço" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Bairro</label>
                                                   <input type="text" class="form-control" id="clientesBairro" placeholder="Bairro" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Cidade</label>
                                                   <input type="text" class="form-control" id="clientesCidade" placeholder="Cidade" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Estado</label>
                                                   <select class="form-control" id="clientesEstado">
                                                      <option value="">Selecione um estado</option>
                                                      <option value="AC">Acre</option>
                                                      <option value="AL">Alagoas</option>
                                                      <option value="AP">Amapá</option>
                                                      <option value="AM">Amazonas</option>
                                                      <option value="BA">Bahia</option>
                                                      <option value="CE">Ceará</option>
                                                      <option value="DF">Distrito Federal</option>
                                                      <option value="ES">Espírito Santo</option>
                                                      <option value="GO">Goiás</option>
                                                      <option value="MA">Maranhão</option>
                                                      <option value="MT">Mato Grosso</option>
                                                      <option value="MS">Mato Grosso do Sul</option>
                                                      <option value="MG">Minas Gerais</option>
                                                      <option value="PA">Pará</option>
                                                      <option value="PB">Paraíba</option>
                                                      <option value="PR">Paraná</option>
                                                      <option value="PE">Pernambuco</option>
                                                      <option value="PI">Piauí</option>
                                                      <option value="RJ">Rio de Janeiro</option>
                                                      <option value="RN">Rio Grande do Norte</option>
                                                      <option value="RS">Rio Grande do Sul</option>
                                                      <option value="RO">Rondônia</option>
                                                      <option value="RR">Roraima</option>
                                                      <option value="SC">Santa Catarina</option>
                                                      <option value="SP">São Paulo</option>
                                                      <option value="SE">Sergipe</option>
                                                      <option value="TO">Tocantins</option>
                                                      <option value="EX">Estrangeiro</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>CEP</label>
                                                   <input type="text" class="form-control" id="clientesCEP" placeholder="Número do CEP" required />
                                                </div>

                                                <div class="form-group">
                                                   <label>Corretor</label>
                                                   <select class="form-control" id="clientesCorretor">
                                                     <option value="">Nenhum corretor</option>
                                                   </select>
                                                </div>

                                                <div class="form-group">
                                                   <label>Observações</label>
                                                   <textarea class="form-control" id="clientesObservacoes" placeholder="Digite observações nesse campo" rows="7"></textarea>
                                                </div>

                                                <div class="form-group text-right">
                                                 <button type="submit" class="btn btn-primary" id="btnAddClientes">Adicionar</button>
                                              </div>


                                            </div>
                                         </div>

                                            

                                            

                                         </form>

                                  
                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

    }




    editarClientes(){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarClientes" view-name="view-editarClientes">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar dados do cliente</h4>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form method="post" action="javascript:void(0)" onsubmit="app.procEditarClientes(event)">
                                            
                                            <input type="hidden" id="clientesId" value="" />

                                            <div class="row">
                                              <div class="col-xl-6 col-lg-6 col-12">

                                                  <div class="form-group">
                                                     <label>Nome</label>
                                                     <input type="text" class="form-control" id="clientesNome" placeholder="Nome completo do cliente" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>CPF</label>
                                                     <input type="text" class="form-control" id="clientesCpf" placeholder="CPF" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>CNPJ</label>
                                                     <input type="text" class="form-control" id="clientesCnpj" placeholder="CNPJ"  />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>E-mail</label>
                                                     <input type="email" class="form-control" id="clientesEmail" placeholder="E-mail de contato do cliente" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>Celular</label>
                                                     <input type="text" class="form-control" id="clientesCelular" placeholder="DDD + número" required />
                                                  </div>

                                                  <div class="form-group">
                                                     <label>Telefone</label>
                                                     <input type="text" class="form-control" id="clientesTelefone" placeholder="DDD + número" />
                                                  </div>


                                                  <div class="form-group">
                                                     <label>Senha de acesso</label>
                                                     <input type="password" class="form-control" id="clientesSenha" placeholder="Senha de acesso" required />
                                                  </div>
                                            

                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-12">

                                                    <div class="form-group">
                                                       <label>Endereço</label>
                                                       <input type="text" class="form-control" id="clientesEndereco" placeholder="Endereço" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Bairro</label>
                                                       <input type="text" class="form-control" id="clientesBairro" placeholder="Bairro" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Cidade</label>
                                                       <input type="text" class="form-control" id="clientesCidade" placeholder="Cidade" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Estado</label>
                                                       <select class="form-control" id="clientesEstado">
                                                          <option value="">Selecione um estado</option>
                                                          <option value="AC">Acre</option>
                                                          <option value="AL">Alagoas</option>
                                                          <option value="AP">Amapá</option>
                                                          <option value="AM">Amazonas</option>
                                                          <option value="BA">Bahia</option>
                                                          <option value="CE">Ceará</option>
                                                          <option value="DF">Distrito Federal</option>
                                                          <option value="ES">Espírito Santo</option>
                                                          <option value="GO">Goiás</option>
                                                          <option value="MA">Maranhão</option>
                                                          <option value="MT">Mato Grosso</option>
                                                          <option value="MS">Mato Grosso do Sul</option>
                                                          <option value="MG">Minas Gerais</option>
                                                          <option value="PA">Pará</option>
                                                          <option value="PB">Paraíba</option>
                                                          <option value="PR">Paraná</option>
                                                          <option value="PE">Pernambuco</option>
                                                          <option value="PI">Piauí</option>
                                                          <option value="RJ">Rio de Janeiro</option>
                                                          <option value="RN">Rio Grande do Norte</option>
                                                          <option value="RS">Rio Grande do Sul</option>
                                                          <option value="RO">Rondônia</option>
                                                          <option value="RR">Roraima</option>
                                                          <option value="SC">Santa Catarina</option>
                                                          <option value="SP">São Paulo</option>
                                                          <option value="SE">Sergipe</option>
                                                          <option value="TO">Tocantins</option>
                                                          <option value="EX">Estrangeiro</option>
                                                       </select>
                                                    </div>

                                                    <div class="form-group">
                                                       <label>CEP</label>
                                                       <input type="text" class="form-control" id="clientesCEP" placeholder="Número do cep" required />
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Corretor</label>
                                                       <select class="form-control" id="clientesCorretor">
                                                         <option value="">Nenhum corretor</option>
                                                       </select>
                                                    </div>

                                                    <div class="form-group">
                                                       <label>Observações</label>
                                                       <textarea class="form-control" id="clientesObservacoes" placeholder="Digite observações nesse campo" rows="7"></textarea>
                                                    </div>

                                                    <div class="form-group">
                                                       <button type="submit" class="btn btn-primary" id="btnEditarClientes">Atualizar</button>
                                                    </div>

                                              </div>
                                            </div>


                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();
        app.helpers.carregarMascaras();

    }












/**
*  ------------------------------------------------------------------------------------------------
*
*
*   CAMPOS DAS OFERTAS
*
*
*  ------------------------------------------------------------------------------------------------
*/


    camposOfertas(idTipoOferta,nomeTipoOferta){


        this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarTipoImoveis" view-name="view-editarTipoImoveis">

                      <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar campos de cadastro desse tipo de oferta: ${nomeTipoOferta}</h4>
                                    <p>Caso queira remover um campo ou desistiu de adicioná-lo, é só deixar o campo "Nome do campo" em branco
                                       </p>


                                    <div class="form" style="display:block;padding-top:30px;">
                                         
                                         <form id="formCamposTipoOferta" method="post" action="javascript:void(0)" onsubmit="app.procEditarCamposOfertas(event)">
                                            
                                            <input type="hidden" name="idTipoOferta" id="idTipoOferta" value="${idTipoOferta}" />

                                            <!-- AREA APPEND -->
                                            <div class="appendCadastradosCampos"></div>
                                            <!-- AREA APPEND -->
                                            
                                            <!-- LINHA -->
                                            <div class="row">

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Nome do campo</label>
                                                           <input type="text" class="form-control" name="CamposOfertaNomeNew[]" placeholder="Nome do campo" />
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Tipo de campo</label>
                                                           <select class="form-control" name="CamposOfertaTipoNew[]">
                                                               <option value="curto">Texto curto</option>
                                                               <option value="longo">Texto longo</option>
                                                               <option value="switch">Sim ou não</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Obrigatoriedade</label>
                                                           <select class="form-control" name="CamposOfertaObrigatorioNew[]">
                                                               <option value="nao">Não</option>
                                                               <option value="sim">Sim</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                            
                                            </div>
                                            <!-- LINHA -->

                                            <!-- AREA APPEND -->
                                            <div class="appendNewCampos"></div>
                                            <!-- AREA APPEND -->

                                            <!-- LINHA -->
                                            <div class="row">
                                                <div class="col-12">
                                                   <a href="javascript:void(0)" class="btn btn-default btn-sm" onclick="app.appendNewCamposOfertas()" title="Adicionar campo">
                                                       <i class="fa fa-plus"></i> adicionar campo
                                                   </a>
                                                </div>
                                            </div>
                                            <!-- LINHA -->
                                            

                                            <p>&nbsp;</p>
                                            
                                            <!-- LINHA -->
                                            <div class="row">

                                               <div class="col-12">
                                                
                                                    <div class="form-group text-right">
                                                     <button type="submit" class="btn btn-primary" id="btnEditarItem">Editar campos do tipo de oferta</button>
                                                   </div>

                                               </div>

                                            </div>
                                            <!-- LINHA -->


                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();
        


    }

    appendNewCamposOfertas(){

      console.log("INSERINDO NOVOS CAMPOS");

      $(".appendNewCampos").append(`

                                            <!-- LINHA -->
                                            <div class="row">

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Nome do campo</label>
                                                           <input type="text" class="form-control" name="CamposOfertaNomeNew[]" placeholder="Nome do campo" />
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Tipo de campo</label>
                                                           <select class="form-control" name="CamposOfertaTipoNew[]">
                                                               <option value="curto">Texto curto</option>
                                                               <option value="longo">Texto longo</option>
                                                               <option value="switch">Sim ou não</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Obrigatoriedade</label>
                                                           <select class="form-control" name="CamposOfertaObrigatorioNew[]">
                                                               <option value="nao">Não</option>
                                                               <option value="sim">Sim</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                            
                                            </div>
                                            <!-- LINHA -->


      `);

    }

    appendCadastradosCamposOfertas(campos){

        var selected_curto = "";
        var selected_longo = "";
        var selected_switch = "";

        var obrigatorio_nao = "";
        var obrigatorio_sim = "";
        
        $(".appendCadastradosCampos").html(`
                  
                   ${campos.map((n) => {

                    if(n.tipo_campo=="curto"){ selected_curto = `selected`; }
                    if(n.tipo_campo=="longo"){ selected_longo = `selected`; }
                    if(n.tipo_campo=="switch"){ selected_switch = `selected`; }

                    if(n.obrigatorio=="nao"){ obrigatorio_nao = `selected`; }
                    if(n.obrigatorio=="sim"){ obrigatorio_sim = `selected`; }

                          return `
                                            <!-- LINHA -->
                                            <div class="row">

                                                    <input type="hidden" name="CamposOfertaId[]" value="${n.id}" />

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Nome do campo</label>
                                                           <input type="text" class="form-control" name="CamposOfertaNome[]" placeholder="Nome do campo" value="${n.nome_campo}" />
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Tipo de campo</label>
                                                           <select class="form-control" name="CamposOfertaTipo[]">
                                                               <option value="curto" ${selected_curto}>Texto curto</option>
                                                               <option value="longo" ${selected_longo}>Texto longo</option>
                                                               <option value="switch" ${selected_switch}>Sim ou não</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-12">

                                                        <div class="form-group">
                                                           <label>Obrigatoriedade</label>
                                                           <select class="form-control" name="CamposImoveisObrigatorio[]">
                                                               <option value="nao" ${obrigatorio_nao}>Não</option>
                                                               <option value="sim" ${obrigatorio_sim}>Sim</option>
                                                           </select>
                                                        </div>

                                                    </div>

                                            
                                            </div>
                                            <!-- LINHA -->
                            
                          `;

                          selected_curto = "";
                          selected_longo = "";
                          selected_switch = "";

                          obrigatorio_nao = "";
                          obrigatorio_sim = "";

                    }).join('')}`);


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
ofertas(){

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuImoveis").addClass("ativo");

           this._content.html(`
            
              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h1>Ofertas</h1>
                         <p>Ofertas cadastradas na plataforma</p>
                         

                          <div class="row">
                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 offset-xl-5 offset-lg-5 offset-md-5 offset-sm-5" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" onclick="app.ofertasLixeira();" title="Ver ofertas apagadas" style="color: #ff0000;float: right;padding-left: 15px;padding-top: 5px;">
                                          <i class="fa fa-trash-o"></i> Lixeira
                                     </a>

                                     <a href="${app.urlApi}/excel/excel-ofertas.php" target="_blank" style="float:right;margin-left:10px;" class="btn btn-primary" title="Exportar ofertas">
                                         <i class="fa fa-file-excel-o "></i> Exportar
                                      </a>

                                     <a href="javascript:void(0)" style="float: right;" onclick="app.adicionarOfertas()" class="btn btn-primary" title="Adicionar nova oferta">
                                       <i class="fa fa-plus"></i> Adicionar
                                     </a>



                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabela();" id="filtroTabela">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">

                                   <thead>
                                      <th>#</th>
                                      <th></th>

                                      <th>Views</th>
                                      <th>Cliques</th>
                                      <th>Compras</th>

                                      <th>Nome</th>
                                      <th>Tipo</th>
                                      <th><i class="fa fa-calendar"></i> Início</th>
                                      <th>Valor</th>
                                      <th>CashBack</th>
                                      <th>Origem</th>
                                      <th style="width:190px;">Ações</th>
                                   </thead>

                                   <tbody id="conteudoTabela">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           <div class="text-right">
                              <a href="javascript:void(0)" onclick="app.adicionarOfertas()" class="btn btn-primary" title="Adicionar nova oferta">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>

                              <a href="${app.urlApi}/excel/excel-ofertas.php" target="_blank" class="btn btn-primary" title="Exportar ofertas">
                                 <i class="fa fa-file-excel-o"></i> Exportar
                              </a>
                              
                           </div>


                      </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }


    ofertasLixeira(){

           $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuImoveis").addClass("ativo");

           this._content.html(`
            
              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h1>Ofertas apagadas</h1>
                         <p>Ofertas que foram apagadas na plataforma</p>
                         

                          <div class="row">
                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 offset-xl-5 offset-lg-5 offset-md-5 offset-sm-5" style="padding-right:0px;">
                                     
                                     <a href="javascript:void(0)" onclick="app.ofertas();" style="float:right;color:#000;" title="Voltar para todas as ofertas">
                                          <i class="fa fa-angle-left"></i> Voltar todas as ofertas
                                     </a>

                                    


                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabela();" id="filtroTabela">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">

                                   <thead>
                                      <th>#</th>
                                      <th></th>

                                      <th>Views</th>
                                      <th>Cliques</th>
                                      <th>Compras</th>

                                      <th>Nome</th>
                                      <th>Tipo</th>
                                      <th><i class="fa fa-calendar"></i> Início</th>
                                      <th>Valor</th>
                                      <th>CashBack</th>
                                      <th>Origem</th>
                                      <th style="width:190px;">Ações</th>
                                   </thead>

                                   <tbody id="conteudoTabela">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           


                      </div>
                   </div>

              </div>

        `);

        this.animarTransicao();
      

    }

    
    // TODAS AS OFERTAS DE UM DOMINIO ESPECIFICO
    ofertasDominio(idDominio,nomeDominio,logoDominio){
         
       
       $(".sidemenu nav ul li").removeClass("ativo");
           $("#menuImoveis").addClass("ativo");

           this._content.html(`
            
              <div class="container">
            
                   <div class="row view-principal" view-name="view-principal">
                      <div class="col-12 wow fadeInUp">
                         <h1>Ofertas do domínio: <b>${nomeDominio}</b></h1>
                         <p>
                            <img src="${app.urlCdn}/${logoDominio}" style="width:200px;" />
                         </p>
                         

                          <div class="row">
                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 offset-xl-5 offset-lg-5 offset-md-5 offset-sm-5" style="padding-right:0px;">
                                     
                                     

                                     <a href="javascript:void(0)" style="float: right;" onclick="app.adicionarOfertas()" class="btn btn-primary" title="Adicionar nova oferta">
                                       <i class="fa fa-plus"></i> Adicionar
                                     </a>



                                     <!-- BUSCA AVULSA -->
                                     <div class="busca-avulsa">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                   <span class="input-group-text">
                                                      <i class="fa fa-search" aria-hidden="true"></i>
                                                   </span>
                                                </div>
                                                <input type="text" class="form-control" placeholder="Faça uma pesquisa" onkeyup="app.filtrotabela();" id="filtroTabela">
                                            </div>
                                     </div>
                                     <!-- BUSCA AVULSA -->
                                     
                              </div>
                           </div>
                           <div class="table-responsive">
                               
                               <table class="table table-striped">

                                   <thead>
                                      <th>#</th>
                                      <th></th>

                                      <th>Views</th>
                                      <th>Cliques</th>
                                      <th>Compras</th>

                                      <th>Nome</th>
                                      <th>Tipo</th>
                                      <th><i class="fa fa-calendar"></i> Início</th>
                                      <th>Valor</th>
                                      <th>CashBack</th>
                                      <th>Origem</th>
                                      <th style="width:190px;">Ações</th>
                                   </thead>

                                   <tbody id="conteudoTabela">
                                      ${this.carregandoTabela}
                                   </tbody>

                               </table>

                           </div>
                           
                           <div class="text-right">
                              <a href="javascript:void(0)" onclick="app.adicionarOfertas()" class="btn btn-primary" title="Adicionar nova oferta">
                                 <i class="fa fa-plus"></i> Adicionar
                              </a>

                              
                              
                           </div>


                      </div>
                   </div>

              </div>

        `);

        this.animarTransicao();


    }


    alimentarOfertas(ofertas,filtro){

       var tipoOferta = "N/A";
       var data_ini = "";
       //var data_fim = "";
       var labelInicio = "";
       var labelFinal = "";
       var labelLink = "";
       var imagemOfertaTemp = "";
       var imagemOferta = "";

       var views = 0;
       var cliques = 0;
       var compras = 0;

       if(ofertas.length==0){
          
          aviso("Oops! Nenhuma oferta ainda","Ainda nenhuma oferta cadastrada");
       
       }else{
          
           $("#conteudoTabela").html(`

                 ${ofertas.map((n) => {

                        if(n.tipo==1){ tipoOferta = "Produto"; }
                        if(n.tipo==2){ tipoOferta = "Cupom"; }

                        if(n.views!==null){ views = n.views; }
                        if(n.cliques!==null){ cliques = n.cliques; }
                        if(n.compras!==null){ compras = n.compras; }

                        data_ini = n.data_ini.split("-");
                        //data_fim = n.data_fim.split("-");

                        labelFinal = "";
                        labelInicio = "";

                        if(n.diferenca_datas_hoje_fim>0){
                             labelFinal = '<span class="badge badge-danger">vencida</span>';
                        }else{
                           if(n.diferenca_datas_ini_hoje<=0){
                              labelInicio = `<span class="badge badge-success">ativa</span>`;
                           } 
                           if(n.diferenca_datas_ini_hoje>0){
                              labelInicio = `<span class="badge badge-primary">inicia em ${n.diferenca_datas_ini_hoje} dias</span>`;
                           } 
                        }

                        
                        if(n.cash_back_gpr=="" || n.cash_back_gpr == null){
                            n.cash_back_gpr = 0;
                        }

                        if(n.link=="" || n.link == null){
                           n.link = "N/A";
                        }

                        imagemOferta = "assets/images/default.jpg";

                        if(n.galeria.length>0){

                           imagemOferta = "https://garimpeiros.com.br/cdn/" + n.galeria[0].link_arquivo;
                           
                        }
                        
                        labelLink = "";
                        if(n.id_dominio==null){
                           labelLink = `<br><span class="badge badge-danger">Não Map <i class="fa fa-exclamation-triangle"></i></span>`;
                        }

                     
                        return `

                       
                           <tr id="oferta${n.id}">
                                 <td>${n.id}</td>

                                 <td>
                                    <img src="${imagemOferta}" style="width:80px;padding-bottom:10px;max-width:unset;" />
                                 </td>
                                 
                                 <td>${views}</td>
                                 <td>${cliques}</td>
                                 <td>${compras}</td>

                                 <td>${n.titulo}</td>
                                 <td>${tipoOferta}</td>
                                 <td>
                                   ${data_ini[2]+"/"+data_ini[1]+"/"+data_ini[0]} ${labelInicio} ${labelFinal}
                                 </td>
                                 <td>${n.valor}</td>
                                 <td>${n.cash_back} <small><b>(GPCB: ${n.cash_back_gpr}%)</b></small></td>
                                 <td>${n.link} ${labelLink}</td>
                                 <td>
                                    <a href="javascript:void(0)" onclick="app.perguntarRemoverOferta(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                       <i class="fa fa-trash"></i>
                                    </a>
                                    <a href="javascript:void(0)" onclick="app.editarOferta(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                       <i class="fa fa-pencil"></i>
                                    </a>
                                    <a href="javascript:void(0)" onclick="app.verOfertaGp(${n.id})" class="btn btn-primary btn-sm" title="Visualizar na plataforma">
                                       <i class="fa fa-eye"></i>
                                    </a>
                                    <a href="${n.link_final}" target="_blank" class="btn btn-primary btn-sm" title="Ver no parceiro">
                                       <i class="fa fa-external-link"></i>
                                    </a>
                                 </td>

                           </tr>
                           
                        `
                  }).join('')}
           
           
           `);

       }

    }



     alimentarOfertasLixeira(ofertas){

       var tipoOferta = "N/A";
       var data_ini = "";
       //var data_fim = "";
       var labelInicio = "";
       var labelFinal = "";
       var imagemOfertaTemp = "";
       var imagemOferta = "";

       var views = 0;
       var cliques = 0;
       var compras = 0;

       if(ofertas.length==0){
          
          aviso("Oops! Nenhuma oferta ainda","Ainda nenhuma oferta foi apagada na plataforma");
       
       }else{
          
           $("#conteudoTabela").html(`

                 ${ofertas.map((n) => {

                        if(n.tipo==1){ tipoOferta = "Produto"; }
                        if(n.tipo==2){ tipoOferta = "Cupom"; }

                        if(n.views!==null){ views = n.views; }
                        if(n.cliques!==null){ cliques = n.cliques; }
                        if(n.compras!==null){ compras = n.compras; }

                        data_ini = n.data_ini.split("-");
                        //data_fim = n.data_fim.split("-");

                        labelFinal = "";
                        labelInicio = "";

                        if(n.diferenca_datas_hoje_fim>0){
                             labelFinal = '<span class="badge badge-danger">vencida</span>';
                        }else{
                           if(n.diferenca_datas_ini_hoje<=0){
                              labelInicio = `<span class="badge badge-success">ativa</span>`;
                           } 
                           if(n.diferenca_datas_ini_hoje>0){
                              labelInicio = `<span class="badge badge-primary">inicia em ${n.diferenca_datas_ini_hoje} dias</span>`;
                           } 
                        }

                        
                        if(n.cash_back_gpr=="" || n.cash_back_gpr == null){
                            n.cash_back_gpr = 0;
                        }

                        if(n.link=="" || n.link == null){
                           n.link = "N/A";
                        }

                        imagemOferta = "assets/images/default.jpg";

                        if(n.galeria.length>0){

                           imagemOferta = "https://garimpeiros.com.br/cdn/" + n.galeria[0].link_arquivo;
                           
                        }

                     
                        return `

                       
                           <tr id="oferta${n.id}">
                                 <td>${n.id}</td>

                                 <td>
                                    <img src="${imagemOferta}" style="width:80px;padding-bottom:10px;max-width:unset;" />
                                 </td>
                                 
                                 <td>${views}</td>
                                 <td>${cliques}</td>
                                 <td>${compras}</td>

                                 <td>${n.titulo}</td>
                                 <td>${tipoOferta}</td>
                                 <td>
                                   ${data_ini[2]+"/"+data_ini[1]+"/"+data_ini[0]} ${labelInicio} ${labelFinal}
                                 </td>
                                 <td>${n.valor}</td>
                                 <td>${n.cash_back} <small><b>(GPCB: ${n.cash_back_gpr}%)</b></small></td>
                                 <td>${n.link}</td>
                                 <td>
                                    <a href="javascript:void(0)" onclick="app.perguntarRestaurarOferta(${n.id})" class="btn btn-success btn-sm" title="Restaurar">
                                       <i class="fa fa-check-circle"></i>
                                    </a>
                                    <a href="javascript:void(0)" onclick="app.editarOferta(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                       <i class="fa fa-pencil"></i>
                                    </a>
                                    <a href="javascript:void(0)" onclick="app.verOfertaGp(${n.id})" class="btn btn-primary btn-sm" title="Visualizar na plataforma">
                                       <i class="fa fa-eye"></i>
                                    </a>
                                    <a href="${n.link_final}" target="_blank" class="btn btn-primary btn-sm" title="Ver no parceiro">
                                       <i class="fa fa-external-link"></i>
                                    </a>
                                 </td>

                           </tr>
                           
                        `
                  }).join('')}
           
           
           `);

       }

    }


    alimentarOfertasDominio(ofertas,idDominio){

       var tipoOferta = "N/A";
       var data_ini = "";
       //var data_fim = "";
       var labelInicio = "";
       var labelFinal = "";
       var imagemOfertaTemp = "";
       var imagemOferta = "";

       var views = 0;
       var cliques = 0;
       var compras = 0;


       if(ofertas.length==0){
          
          aviso("Oops! Nenhuma oferta ainda","Ainda nenhuma oferta cadastrada");
       
       }else{
          
           $("#conteudoTabela").html(`

                 ${ofertas.map((n) => {
                        
                        // SE A OFERTA FOR DO MESMO DOMÍNIO SELECIONADO
                        if(n.id_dominio==idDominio){

                              if(n.tipo==1){ tipoOferta = "Produto"; }
                              if(n.tipo==2){ tipoOferta = "Cupom"; }

                              if(n.views!==null){ views = n.views; }
                              if(n.cliques!==null){ cliques = n.cliques; }
                              if(n.compras!==null){ compras = n.compras; }

                              data_ini = n.data_ini.split("-");
                              //data_fim = n.data_fim.split("-");

                              labelFinal = "";
                              labelInicio = "";

                              if(n.diferenca_datas_hoje_fim>0){
                                   labelFinal = '<span class="badge badge-danger">vencida</span>';
                              }else{
                                 if(n.diferenca_datas_ini_hoje<=0){
                                    labelInicio = `<span class="badge badge-success">ativa</span>`;
                                 } 
                                 if(n.diferenca_datas_ini_hoje>0){
                                    labelInicio = `<span class="badge badge-primary">inicia em ${n.diferenca_datas_ini_hoje} dias</span>`;
                                 } 
                              }

                              
                              if(n.cash_back_gpr=="" || n.cash_back_gpr == null){
                                  n.cash_back_gpr = 0;
                              }

                              if(n.link=="" || n.link == null){
                                 n.link = "N/A";
                              }

                              imagemOferta = "assets/images/default.jpg";

                              if(n.galeria.length>0){

                                 imagemOferta = "https://garimpeiros.com.br/cdn/" + n.galeria[0].link_arquivo;
                                 
                              }

                              return `

                             
                                 <tr id="oferta${n.id}">
                                       <td>${n.id}</td>

                                       <td>
                                          <img src="${imagemOferta}" style="width:80px;padding-bottom:10px;max-width:unset;" />
                                       </td>
                                       
                                       <td>${views}</td>
                                       <td>${cliques}</td>
                                       <td>${compras}</td>

                                       <td>${n.titulo}</td>
                                       <td>${tipoOferta}</td>
                                       <td>
                                         ${data_ini[2]+"/"+data_ini[1]+"/"+data_ini[0]} ${labelInicio} ${labelFinal}
                                       </td>
                                       <td>${n.valor}</td>
                                       <td>${n.cash_back} <small><b>(GPCB: ${n.cash_back_gpr}%)</b></small></td>
                                       <td>${n.link}</td>
                                       <td>
                                          <a href="javascript:void(0)" onclick="app.perguntarRemoverOferta(${n.id})" class="btn btn-warning btn-sm" title="Apagar">
                                             <i class="fa fa-trash"></i>
                                          </a>
                                          <a href="javascript:void(0)" onclick="app.editarOferta(${n.id})" class="btn btn-primary btn-sm" title="Editar">
                                             <i class="fa fa-pencil"></i>
                                          </a>
                                          <a href="javascript:void(0)" onclick="app.verOfertaGp(${n.id})" class="btn btn-primary btn-sm" title="Visualizar na plataforma">
                                             <i class="fa fa-eye"></i>
                                          </a>
                                          <a href="${n.link_final}" target="_blank" class="btn btn-primary btn-sm" title="Ver no parceiro">
                                             <i class="fa fa-external-link"></i>
                                          </a>
                                       </td>

                                 </tr>
                                 
                              `

                          }
                              
                  }).join('')}
           
           
           `);

       }

    }
    



    adicionarOfertas(){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarOferta" view-name="view-adicionarOferta">

                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Adicionar nova Oferta</h4>
                                    <p>&nbsp;</p>

                                    <form id="formAdd" method="post" action="javascript:void(0)" onsubmit="app.procAdicionarOferta(event)">
                                            

                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">

                                                  <div class="row">
                                                      
                                                      <!-- COLUNA UM -->
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>URL da oferta (não esqueça o HTTPS)</label>
                                                             <input type="text" class="form-control" name="link" id="link" placeholder="URL da oferta" required onchange="app.validarDominioNegocio(this.value);linkPreview(this.value);validarUrlProtocol(this.value);" />
                                                          </div>

                                                          <div class="form-group" id="validacaoDominio"></div>

                                                      </div>
                                                      <!-- COLUNA UM -->

                                                      <!-- COLUNA DOIS -->
                                                      <div class="col-12 no-padding-left-desktop">
                                                          <div id="retornoUrlOferta"></div>
                                                      </div>
                                                      <!-- COLUNA DOIS -->


                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Tipo de oferta</label>
                                                             <select class="form-control" required name="tipo" required id="tipo" onchange="app.buscarCamposOfertas(this.value)">
                                                                <option value="">Selecione uma opção</option>
                                                                <option value="1">Oferta (produto, serviço, vantagem)</option>
                                                                <option value="2">Cupom de desconto</option>
                                                             </select>
                                                          </div>

                                                      </div>
                                                      
                                                      <!-- CATEGORIAS -->
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Categoria da oferta</label>
                                                          </div>

                                                      </div>

                                                      
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                        <div class="row" id="categoriasOfertas">
                                                             
                                                        </div>
                                                      </div>
                                                      <!-- CATEGORIAS -->

                                                      <!-- TAGS -->
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Tags da oferta</label>
                                                             <p><small>Coloque as tags usando "#" separando-as por espaço</small></p>
                                                             <div id="contextTags" class="context" contenteditable="true" onkeyup="//hashtag();" style="padding:15px;font-size:13px;position:relative; display:block;width:100%;min-height:120px;border:1px solid #ccc;border-radius:12px;"></div>
                                                          </div>

                                                      </div>
                                                      <!-- TAGS -->

                                                  </div>

                                                  
                                                  <!-- APPEND CAMPOS -->
                                                  <div class="row" id="appendCamposCadastroOfertas">
                                                  </div>
                                                  <!-- APPEND CAMPOS -->

                                                  <div class="row" id="defaultCamposCadastroOferta" style="display:none;">
                                                      
                                                      
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop"> 
                                                          <div class="form-group">
                                                             <label>Título da oferta</label>
                                                             <input type="text" class="form-control" name="titulo" id="titulo" placeholder="Título da oferta" required />
                                                          </div>
                                                      </div>
                                                      

                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Descrição ou instruções da oferta</label>
                                                             <textarea class="form-control" rows="4" name="desc_oferta" id="desc_oferta" placeholder="Descrição curta da oferta"></textarea>
                                                          </div>

                                                      </div>
                                                      
                                                      <!--
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Instruções de uso ou resgate</label>
                                                             <textarea class="form-control" rows="4" name="instrucoes" id="instrucoes" placeholder="Instruções para resgate da oferta"></textarea>
                                                          </div>

                                                      </div>
                                                      -->


                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Data início</label>
                                                             <input type="date" class="form-control" name="data_ini" id="data_ini" placeholder="Data início validade" />
                                                          </div>

                                                      </div>

                                                      <!--
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Data fim</label>
                                                             <input type="date" class="form-control" name="data_fim" id="data_fim" placeholder="Data fim validade" />
                                                          </div>

                                                      </div>
                                                      -->


                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Valor</label>
                                                             <input type="tel" class="form-control valor" name="valor" id="valor" placeholder="Valor da oferta" />
                                                          </div>

                                                      </div>
                                                      
                                                      <!-- 
                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Valor promocional</label>
                                                             <input type="tel" class="form-control valor" name="valor_promo" id="valor_promo" placeholder="Valor promocional da oferta" />
                                                          </div>

                                                      </div>
                                                      -->

                                                      <div style="display:none;" id="cashbackPosValidacaoDominio" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Cashback</label>
                                                             <input type="tel" class="form-control valor" name="cachback" id="cachback" placeholder="Valor do chackback (%)" />
                                                          </div>

                                                      </div>

                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          

                                                      </div>
                                                      

                                                </div>
                                                      

                                                  <!-- BOTAO DE ENVIAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" class="btn btn-primary" id="btnAddItem">Adicionar</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ENVIAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->
                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Imagens da oferta</h4>
                                                  
                                                  <div class="card blank" data-accept="draggable">
                                                     <p style="text-align:center;font-size:12px;">
                                                         Nenhuma imagem ainda
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagens" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagens
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

        app.helpers.carregarMascaras();

        // PREENCHER O CAMPO DE DATA INI JÁ COM A DATA DE HOJE
        document.getElementById('data_ini').valueAsDate = new Date();

    }




    processarValidacaoDominio(dadosValidacao){
      
      // DOMINIO NÃO VALIDADO
      if(dadosValidacao.dominio===null){

        $("#cashbackPosValidacaoDominio").fadeIn(500);
        $("#validacaoDominio").html(` `);
      
      // DOMINIO VALIDADO
      }else{

         $("#cashbackPosValidacaoDominio").fadeOut(500);

         $("#validacaoDominio").html(`

             <img src="${app.urlCdn}/${dadosValidacao.logo}" alt="${dadosValidacao.nome_dominio}" style="margin-top:12px;margin-bottom:12px;width:200px;height:auto;" />

         `);

      }

    }



   
    alimentarCategorias(categorias){

       $("#categoriasOfertas").html(`
       
           ${categorias.map((n) => {

                        return `

                           <div class="form-check col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" style="padding-bottom:12px;">
                              <input class="form-check-input" name="categoriaOfertas[]" type="checkbox" value="${n.id}" id="categoria${n.id}">
                              <label class="form-check-label" for="categoria${n.id}">
                                 ${n.nome} <small style="display:block;">${n.descricao}</small>
                              </label>
                           </div>
                           
                        `
          }).join('')}
       
       `);

    }
    



    popularCampos(dados){

      //$("#btnAddItem").removeAttr("disabled");
      $("#defaultCamposCadastroOferta").fadeIn(500);

      // LIMPAR OS CAMPOS ANTES DA IMPRESSAO
      $("#appendCamposCadastroOfertas").html("");  

      var required = "";
      
      // SE O CAMPO FOR DO TIPO CUPOM
      // VAMOS IMPRIMIR UM CAMPO ADICIONAL DE CÓDIGO DO CUPOM
      if($("#tipo").val()==2){

          $("#appendCamposCadastroOfertas").append(`
              
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12  form-group" id="cupomGroup">
                  <label>CÓDIGO DO CUPOM</label>
                  <input type="text" class="form-control" name="cupom" id="cupomField" placeholder="Digite o código do cupom nesse campo" />
              </div>
          
          `);

      }

      // SE O CAMPO NÃO FOR DO TIPO CUPOM, VAMOS FAZER ELE DESAPARECER DA PÁGINA
      if($("#tipo").val()!=2){

          $("#cupomGroup").remove();

      }

      $("#appendCamposCadastroOfertas").append(`

            ${dados.campos.map((n) => {

                  if(n.obrigatorio=="sim"){ required = "required"; }else{ required = ""; } 
                  
                  if(n.tipo_campo=="curto" || n.tipo_campo=="switch"){
                     return `
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 form-group no-padding-left-desktop">
                          <label>${n.nome_campo}</label>
                          <input type="text" class="form-control" id="${n.id}" name="${n.id}" placeholder="${n.nome_campo}" ${required} />
                        </div>
                     `
                  }

                  if(n.tipo_campo=="longo"){
                     return `
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 form-group no-padding-left-desktop">
                          <label>${n.nome_campo}</label>
                          <textarea rows="3" class="form-control" id="${n.id}" name="${n.id}" placeholder="${n.nome_campo}" ${required} />
                        </div>
                     `
                  }
                  
            }).join('')}

      `);

    }







    editarOferta(id){

      this._content.html(`
               
               <div class="container">
               
                 <div class="row view-adicionarDominio" view-name="view-adicionarDominio">

                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h4>Editar Oferta <span id="nomeOfertaEditar"></span></h4>
                                    <p>&nbsp;</p>

                                    <form id="formAdd" method="post" action="javascript:void(0)" onsubmit="app.models.procEditarOferta(event)">
                                        
                                        <input type="hidden" name="id_oferta" value="${id}" />

                                        <!-- ROW -->
                                        <div class="row">
                                        
                                              <!-- COL 9 -->
                                              <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 no-padding-left-desktop">
                                                  
                                                  <!-- OS CAMPOS -->
                                                  <div class="row">
                                                      
                                                      <!-- CAMPOS NAO EDITAVEIS -->
                                                      <div class="debug-campos"></div>
                                                      <!-- CAMPOS NAO EDITAVEIS -->


                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Tipo de oferta</label>
                                                             <select class="form-control" required name="tipo" required id="tipo" onchange="app.buscarCamposOfertas(this.value)">
                                                                <option value="">Selecione uma opção</option>
                                                                <option value="1">Oferta (produto, serviço, vantagem)</option>
                                                                <option value="2">Cupom de desconto</option>
                                                             </select>
                                                          </div>

                                                      </div>
                                                      
                                                      <!-- CATEGORIAS -->
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Categoria da oferta</label>
                                                          </div>

                                                      </div>

                                                      
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                        <div class="row" id="categoriasOfertas"> 
                                                        </div>
                                                      </div>
                                                      <!-- CATEGORIAS -->

                                                      <!-- TAGS -->
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">
                                                          
                                                          <div class="form-group">
                                                             <label>Tags da oferta</label>
                                                             <p><small>Coloque as tags usando "#" separando-as por espaço</small></p>
                                                             <div id="contextTags" class="context" contenteditable="true" onkeyup="//hashtag();" style="padding:15px;font-size:13px;position:relative; display:block;width:100%;min-height:120px;border:1px solid #ccc;border-radius:12px;"></div>
                                                          </div>

                                                      </div>
                                                      <!-- TAGS -->

                                                  </div>
                                                  <!-- OS CAMPOS -->

                                
                                                  <!-- APPEND CAMPOS -->
                                                  <div class="row" id="appendCamposCadastroOfertas">
                                                  </div>
                                                  <!-- APPEND CAMPOS -->


                                                  <div class="row" id="defaultCamposCadastroOferta">
                                                      
                                                      
                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop"> 
                                                          <div class="form-group">
                                                             <label>Título da oferta</label>
                                                             <input type="text" class="form-control" name="titulo" id="titulo" placeholder="Título da oferta" required />
                                                          </div>
                                                      </div>
                                                      

                                                      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Descrição ou instruções da oferta</label>
                                                             <textarea class="form-control" rows="4" name="desc_oferta" id="desc_oferta" placeholder="Descrição curta da oferta"></textarea>
                                                          </div>

                                                      </div>


                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Data início</label>
                                                             <input type="date" class="form-control" name="data_ini" id="data_ini" placeholder="Data início validade" />
                                                          </div>

                                                      </div>


                                                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Valor</label>
                                                             <input type="tel" class="form-control valor" name="valor" id="valor" placeholder="Valor da oferta" />
                                                          </div>

                                                      </div>
                                                      
                                                      

                                                      <div style="display:none;" id="cashbackPosValidacaoDominio" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding-left-desktop">

                                                          <div class="form-group">
                                                             <label>Cashback</label>
                                                             <input type="tel" class="form-control valor" name="cachback" id="cachback" placeholder="Valor do chackback (%)" />
                                                          </div>

                                                      </div>

                                                     
                                                </div>
                                                      
                                                  

                                              
                                                  <!-- BOTAO DE ATUALIZAR -->
                                                  <div class="row">
                                                      <div class="col-12 no-padding-left-desktop">
                                                           <div class="form-group text-right">
                                                             <button type="submit" class="btn btn-primary" id="btnAddItem">Atualizar oferta</button>
                                                           </div>
                                                      </div>
                                                  </div>
                                                  <!-- BOTAO DE ATUALIZAR -->

                                                  </form>

                                              </div>
                                              <!-- COL 9 -->

                                              <!-- COL 4 -->
                                              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding-left-desktop galeria-imovel">
                                                  <h4 style="font-size: 15px;margin-bottom: 14px;text-align: center;">Imagens da oferta</h4>
                                                  
                                                  <div class="card blank" data-accept="draggable">
                                                     <p style="text-align:center;font-size:12px;">
                                                        
                                                     </p>
                                                  </div>

                                                  <p style="text-align:right;padding-top:12.5px;">
                                                      <a href="javascript:void(0)" title="Adicionar imagem" data-toggle="modal" data-target="#modalUploadImages" class="btn btn-default">
                                                         Adicionar imagem
                                                      </a>
                                                  </p>

                                              </div>
                                              <!-- COL 4 -->

                                        </div> 
                                        <!-- ROW -->

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();
        app.helpers.carregarMascaras();

    }




    
    alimentarEditarOferta(oferta){

       $(".placeholder").hide(0);
       $(".form").fadeIn(500);

       $("#nomeOfertaEditar").html(`${oferta.oferta[0].titulo}`);

       $("#tipo").val(`${oferta.oferta[0].tipo}`);
       
       // TIPO DA OFERTA
       if(oferta.oferta[0].tipo==1){

       }
       if(oferta.oferta[0].tipo==2){
        
       }
       
       var html_dom = '';

       if(oferta.has_dom=="sim"){
           
           html_dom = `
              
              <div>
                 
                 <p>
                   <img src="${app.urlCdn}/${oferta.img_dom}" alt="${oferta.nome_dom}" style="width:155px;" />
                 </p>  

              </div>

           `;   

           $("#cashbackPosValidacaoDominio").fadeOut("500");

       }else{
        
          html_dom = `<p><b style="color:#ff0000;">DOMÍNIO NÃO MAPEADO</b></p>`;

          $("#cashbackPosValidacaoDominio").fadeIn("500");

       }

       
       $(".debug-campos").html(`

           ${html_dom}
           
           <p>
             <b>Link original:</b><br>
             ${oferta.oferta[0].link_prova}
           </p>
           <p>
             <b>Link <i>GARIMPEIROS</i>:</b><br>
             ${oferta.oferta[0].link_final}
           </p>
           <p>
             <b>Tags rastreadas:</b><br>
             ${oferta.ofertas_query.map((n) => {

                            return `
                               
                               ${n.chave}: ${n.valor} <br>

                            `

                      }).join('')}
           </p>

       `); 

       app.views.alimentarCategorias(oferta.categorias);

       for(var i = 0;i<oferta.ofertas_categoria_link.length;i++){
        
          $(`#categoria${oferta.ofertas_categoria_link[i].id_categoria}`).prop("checked",true);

       }

       $("#contextTags").html(`${oferta.oferta[0].tags}`);

       $("#titulo").val(oferta.oferta[0].titulo);
       $("#desc_oferta").val(oferta.oferta[0].desc_oferta);
       $("#data_ini").val(oferta.oferta[0].data_ini);
       $("#valor").val(oferta.oferta[0].valor);
       $("#cachback").val(oferta.oferta[0].cash_back);

       $("#cupomField").val(oferta.oferta[0].cupom);

       app.views.popularCampos(oferta);
       
       for(var i=0;i<oferta.ofertas_campos_valores.length;i++){

          $(`#${oferta.ofertas_campos_valores[i].id_campo}`).val(oferta.ofertas_campos_valores[i].valor);

       }
      
       for(var i=0;i<oferta.oferta_galeria.length;i++){

                      // ALIMENTAR AS IMAGENS
                      $(".card").append(`

                        <div class="caixa-preview-imagem-carregada draggable" data-id="${oferta.oferta_galeria[i].id}" data-url="${oferta.oferta_galeria[i].link_arquivo}" ondrag="processarDrag()" id="caixaPreviewImagemCarregada${oferta.oferta_galeria[i].id}">
                              <div style="margin-left:auto;margin-right:auto;position:relative;display:block;width:100px;height:100px;border-radius:8px;background:url('${app.urlCdn}${oferta.oferta_galeria[i].link_arquivo}') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                 &nbsp;
                              </div>
                              <p>
                                <a href="javascript:void(0)" onclick="app.views.removerImagemGaleriaImagens(${oferta.oferta_galeria[i].id})" title="Remover essa imagem" style="font-size:13px;color:#ff0000;">
                                  <i class="fa fa-times"></i> remover
                                </a>
                              </p>
                         </div>

                      `);

       }

       processarDrag();

    }







/**
*  ------------------------------------------------------------------------------------------------
*
*
*   UPLOAD DE IMAGENS
*
*
*  ------------------------------------------------------------------------------------------------
*/

    popularImagensUpload(dados){
       
       // LIMPAR A SESSAO
       $(".card").html("");

       console.log("ESSE É O TAMANHO DOS DADOS: ");
       console.log(dados.dados.length);

       
       
       // ALIMENTAR TANTO OS PREVIEWS, COMO TAMBÉM OS INPUTS
       for(var i = 0;i < dados.dados.length; i++){

         
          
          $(".card").append(`

               
                       <div class="caixa-preview-imagem-carregada draggable" data-id="${i}" data-url="${dados.dados[i].url}" ondrag="processarDrag()" id="caixaPreviewImagemCarregada${i}">
                          <div style="margin-left:auto;margin-right:auto;position:relative;display:block;width:100px;height:100px;border-radius:8px;background:url('${app.urlCdn}${dados.dados[i].url}') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                              &nbsp;
                          </div>
                          <p>
                            <a href="javascript:void(0)" onclick="app.views.removerImagemGaleriaImagens(${i})" title="Remover essa imagem" style="font-size:13px;color:#ff0000;">
                              <i class="fa fa-times"></i> remover
                          </a>
                          </p>
                       </div>
                       
                    

          `);

          

          $("#formAdd").append(`

            <input type="hidden" name="galeriaImgensImoveis[]" class="campos-das-imagens" id="galeriaImgensImoveis${i}" value="${dados.dados[i].url}" />

          `);

       }


       // ARRASTAR E SOLTAR PARA ORDENAÇÃO DAS FOTOS
       $('.draggable').draggable({
            revert: true,
            snapTolerance: 30,
            revertDuration: 0
        });

       

    }

    removerImagemGaleriaImagens(idDaImagem){

      // REMOVER UMA IMAGEM DOS UPLOADS DAS IMAGENS
      $("#galeriaImgensImoveis"+idDaImagem).remove();
      $("#caixaPreviewImagemCarregada"+idDaImagem).remove();

    }












}

