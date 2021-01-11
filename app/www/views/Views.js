class Views{
    
	constructor(){
	      
	     this._content = $("section#content"); 

	     this._allMenus = $("footer * a");
	     this._menu1 = $("footer .menu-1 a");
	     this._menu2 = $("footer .menu-2 a");
	     this._menu3 = $("footer .menu-3 a");
       this._menu4 = $("footer .menu-4 a");
       this._menu5 = $("footer .menu-5 a");

       this.header = $("header");
       this.footer = $("footer");

	}

	animarTransicao(){
		new WOW().init();
	}
  
    viewPrincipal(){

        

            $("header").addClass("logado");
            $("header").html(`

                  <div class="row">

                    <!-- BUSCA -->
                    <div class="col-7">

                               <!-- BUSCA PRINCIPAL -->
                               <div class="input-group busca-principal">
                                  <input type="text" class="form-control" placeholder="Pesquise por produtos" aria-label="Pesquise por produtos" aria-describedby="busca-principal">
                                  <div class="input-group-append">
                                    <span class="input-group-text" id="busca-principal">
                                      <img src="assets/images/pesquisa.svg" alt="Busca">
                                    </span>
                                  </div>
                                </div>
                               <!-- BUSCA PRINCIPAL -->
                       
                    </div>
                    <!-- BUSCA -->

                    <!-- SALDO E PERFIL -->
                    <div class="col-5 text-right">
                       
                       <h3>
                         <a href="javascript:void(0)" title="Esse é o seu saldo atual" onclick="app.saldoExtrato();">
                           R$0,00
                         </a>

                         <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja();" title="Seu Perfil">
                           <img src="assets/images/perfil.svg" alt="Seu perfil">
                         </a>
                       </h3>

                    </div>
                    <!-- SALDO E PERFIL -->
                   
                  </div>

            `);

            this._content.html(`
              
              <!-- STORIES -->
              <div class="stories">
                 <div class="row">
                   <div class="col-12">
                       
                         
                         <ul class="stories">
                              
                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories1.svg" alt="TOP10 CASHBACKS">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    TOP10
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->

                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories2.svg" alt="CASHBACKS">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    CASHBACKS
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->

                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories3.svg" alt="RECEBIDOS">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    RECEBIDOS
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->

                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories4.svg" alt="ELETRO">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    ELETRO
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->


                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories1.svg" alt="CUPONS">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    CUPONS
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->


                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories2.svg" alt="CASHBACKS">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    CASHBACKS
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->

                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories3.svg" alt="RECEBIDOS">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    RECEBIDOS
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->

                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories4.svg" alt="ELETRO">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    ELETRO
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->


                              <!-- STORIES -->
                              <li>
                                <a href="javascript:void(0)">
                                  <div class="stories__story">
                                    <picture>
                                      <img src="assets/images/stories1.svg" alt="CUPONS">
                                    </picture>
                                  </div>
                                  <span class="story__title">
                                    CUPONS
                                  </span>
                                </a>
                              </li>
                              <!-- STORIES -->



                              

                            </ul>


                   </div>
                 </div>
              </div>
              <!-- STORIES -->


               <!-- BANNERS -->
               <div class="banners">
                  
                  <div class="row">
                     <div class="col-12">
                        <a href="javascript:void(0)" title="" id="superBanner1" target="_system">
                            <img src=""  alt="" />
                        </a>
                     </div>
                  </div>

                  <div class="row linha-banner">
                     <div class="col-4 wow pulse" data-wow-delay="0.3s" data-wow-duration="1.0s" id="superBanner2">
                        <a href="javascript:void(0)" title="" target="_system">
                            <img src="" alt="" />
                        </a>
                     </div>
                     <div class="col-4 wow pulse" data-wow-delay="0.6s" data-wow-duration="1.0s" id="superBanner3">
                        <a href="javascript:void(0)" title="" target="_system">
                            <img src="" alt="" />
                        </a>
                     </div>
                     <div class="col-4 wow pulse" data-wow-delay="0.9s" data-wow-duration="1.0s" id="superBanner4">
                        <a href="javascript:void(0)" title="" target="_system">
                            <img src="" alt="" />
                        </a>
                     </div>
                  </div>

               </div>
               <!-- BANNERS -->

               <!-- ABAS -->
               <div class="page-tabs">
                  <div class="pcss3t pcss3t-height-auto">

                       <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                       <label for="tab1">Toda a rede</label>
                                                                            
                       <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                       <label for="tab2">Seguindo</label>

                       <input type="radio" name="pcss3t" id="tab3" class="tab-content-last">
                       <label for="tab3">Menção</label>

                       <ul>
                                                                                   
                         <!-- ABA UM -->
                         <li class="tab-content tab-content-first" id="conteudo1">
                            
                               <div class="carregando-frame">
                                 <p>
                                   <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                   Carregando ofertas
                                 </p>
                               </div>

                               <p>&nbsp;</p>
                               <p>&nbsp;</p>
                               <p>&nbsp;</p>


                         </li>
                         <!-- ABA UM -->

                         <!-- ABA DOIS -->
                         <li class="tab-content tab-content-2" id="conteudo2">
                            <p class="pre">Nada para mostrar por enquanto</p>
                         </li>
                         <!-- ABA DOIS -->

                         <!-- ABA TRES -->
                         <li class="tab-content tab-content-last" id="conteudo3">
                            <p class="pre">Nada para mostrar por enquanto</p>
                         </li>
                         <!-- ABA TRES -->

                      </ul>

                 </div>
                </div>      
                <!-- ABAS --> 
                                                                            
                                                                            
               <!-- ABAS -->
            
            `);

            this.animarTransicao();

            $("footer").fadeIn();


        
    }

    alimentarBanners(banners){

         var superBanner = 0;
         var bannerQ1 = 0;
         var bannerQ2 = 0;
         var bannerQ3 = 0;

         for(var i = 0;i<banners.length;i++){
          
              if(banners[i].tipo=="retangulo"&&superBanner==0){
                 $("#superBanner1 img").attr("src",`${app.urlCdn}/${banners[i].imagem}`);
                 $("#superBanner1").attr("href",banners[i].link_destino);
                 superBanner++;
              }
              
              if(banners[i].tipo=="quadrado"&&bannerQ3==0&&bannerQ2>0){
                 $("#superBanner4 img").attr("src",`${app.urlCdn}/${banners[i].imagem}`);
                 $("#superBanner4").attr("href",banners[i].link_destino);
                 bannerQ3++;
              }
              
              if(banners[i].tipo=="quadrado"&&bannerQ2==0&&bannerQ1>0){
                 $("#superBanner3 img").attr("src",`${app.urlCdn}/${banners[i].imagem}`);
                 $("#superBanner3").attr("href",banners[i].link_destino);
                 bannerQ2++;
              }

              if(banners[i].tipo=="quadrado"&&bannerQ1==0){
                 $("#superBanner2 img").attr("src",`${app.urlCdn}/${banners[i].imagem}`);
                 $("#superBanner2").attr("href",banners[i].link_destino);
                 bannerQ1++;
              }

         }

    }
    
    alimentarOfertas(ofertas){

        var finalCashback = 0;
        
        $("#conteudo1").html(`
       
           ${ofertas.map((n) => {

                         if(n.cash_back_gpr==null || n.cash_back_gpr==0){
                           finalCashback = n.cash_back;
                         }else{
                          finalCashback = n.cash_back_gpr;
                         }

                         if(finalCashback==null || finalCashback==0){
                           finalCashback = 0;
                         }


                         
                         // OFERTA É UMA OFERTA
                         if(n.tipo==1){ 

                                return `

                                     <!-- CAIXA BRANCA -->
                                     <div class="caixa-branca">
                                       
                                       <!-- META HEADER -->
                                       <div class="caixa-branca-header">
                                          <div class="row">
                                             <div class="col-9 coluna-um no-padding">
                                                <div class="row">
                                                   <div class="col-3 foto-perfil no-padding">
                                                       <div class="caixa-foto-perfil" style="background: url('') #ccc no-repeat;background-size: cover;background-position: center center;">
                                                          <a href="javascript:void(0)" title="Ver perfil">
                                                             &nbsp;
                                                          </a>
                                                       </div>
                                                   </div>
                                                   <div class="col-9 nome-perfil" >
                                                      <h4>${n.nome_usuario} <br><small>${n.data_pub}</small></h4>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="col-3 coluna-dois no-padding">
                                                 <a href="javascript:void(0)" title="Mais opções">
                                                    <img src="assets/images/indicador-de-acoes.png" alt="Mais opções sobre a postagem">
                                                 </a>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- META HEADER -->
                                       
                                       <h3 class="titulo-oferta">
                                          ${n.titulo} <span>R$${n.valor}</span>
                                       </h3>
                                       <p>
                                          ${n.desc_oferta}
                                       </p>
                                       <div style="text-align:center;" class="imagem-da-oferta">
                                         <a href="javascript:void(0)" onclick="app.detalheOferta(${n.id})" title="Clique para ver mais sobre essa postagem">
                                            <img src="${app.urlCdn}/${n.capa}" alt="${n.titulo}" style="width:50%;height:auto;">
                                         </a>
                                         <div class="label-cashback">
                                              <img src="assets/images/cashback.png">
                                              <span>${finalCashback}%</span>
                                         </div>
                                       </div>
                                       
                                       <!-- META BOTTOM -->
                                       <div class="caixa-branca-bottom">
                                          <div class="row">
                                             <div class="col-8 no-padding">
                                                <div class="row">
                                                   <div class="col-4 no-padding coluna-um" onclick="app.curtir(this)">
                                                      <a href="javascript:void(0)" title="Curtir">
                                                         <img src="assets/images/axe.svg" alt="Curtir">
                                                      </a>
                                                      <span>0</span>
                                                   </div>
                                                   <div class="col-4 no-padding coluna-um-dois" onclick="app.naocurtir(this)">
                                                      <a href="javascript:void(0)" title="Não gostei">
                                                         <img src="assets/images/no-axe.svg" alt="Não gostei"> <span>0</span>
                                                      </a>
                                                   </div>
                                                   <div class="col-4 no-padding coluna-dois" onclick="app.comentar(this)">
                                                      <a href="javascript:void(0)" title="Comentários">
                                                         <img src="assets/images/comentarios.svg" alt="Comentários"> 0
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="col-4 no-padding coluna-tres">
                                                 <a href="javascript:void(0)" title="Compartilhar essa postagem">
                                                   Comp. <img src="assets/images/compartilhamento.svg" alt="Compartilhar essa postagem">
                                                 </a>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- META BOTTOM -->

                                     </div>
                                     <!-- CAIXA BRANCA -->
                                 
                              `

                         }
                         
                         // OFERTA É UM CUPOM
                         if(n.tipo==2){

                             return `

                               <!-- CAIXA BRANCA -->
                               <div class="caixa-branca">
                                 
                                 <!-- META HEADER -->
                                 <div class="caixa-branca-header">
                                    <div class="row">
                                       <div class="col-9 coluna-um no-padding">
                                          <div class="row">
                                             <div class="col-3 foto-perfil no-padding">
                                                 <div class="caixa-foto-perfil" style="background: url('') #ccc no-repeat;background-size: cover;background-position: center center;">
                                                    <a href="javascript:void(0)" title="Ver perfil">
                                                       &nbsp;
                                                    </a>
                                                 </div>
                                             </div>
                                             <div class="col-9 nome-perfil" >
                                                <h4>${n.nome_usuario} <br><small>${n.data_pub}</small></h4>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-3 coluna-dois no-padding">
                                           <a href="javascript:void(0)" title="Mais opções">
                                              <img src="assets/images/indicador-de-acoes.png" alt="Mais opções sobre a postagem">
                                           </a>
                                       </div>
                                    </div>
                                 </div>
                                 <!-- META HEADER -->
                                 
                                 <h3 class="titulo-oferta">
                                    ${n.titulo}
                                 </h3>
                                 <p>
                                    ${n.desc_oferta}
                                 </p>
                                 
                                 <h3 class="codigoCupom">
                                    ${n.cupom}
                                 </h3>
                                 
                                 <!-- META BOTTOM -->
                                 <div class="caixa-branca-bottom">
                                    <div class="row">
                                       <div class="col-8 no-padding">
                                          <div class="row">
                                             <div class="col-4 no-padding coluna-um" onclick="app.curtir(this)">
                                                <a href="javascript:void(0)" title="Curtir">
                                                   <img src="assets/images/axe.svg" alt="Curtir">
                                                </a>
                                                <span>0</span>
                                             </div>
                                             <div class="col-4 no-padding coluna-um-dois" onclick="app.naocurtir(this)">
                                                <a href="javascript:void(0)" title="Não gostei">
                                                   <img src="assets/images/no-axe.svg" alt="Não gostei"> <span>0</span>
                                                </a>
                                             </div>
                                             <div class="col-4 no-padding coluna-dois" onclick="app.comentar(this)">
                                                <a href="javascript:void(0)" title="Comentários">
                                                   <img src="assets/images/comentarios.svg" alt="Comentários"> 0
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="col-4 no-padding coluna-tres">
                                           <a href="javascript:void(0)" title="Compartilhar essa postagem">
                                             Comp. <img src="assets/images/compartilhamento.svg" alt="Compartilhar essa postagem">
                                           </a>
                                       </div>
                                    </div>
                                 </div>
                                 <!-- META BOTTOM -->

                               </div>
                               <!-- CAIXA BRANCA -->
                           
                        `

                         }

                        
          }).join('')}
       
       `);


    }


    alimentarDominios(dominios){
        
        $("#conteudo1").append(`

             <div id="dominiosCar" class="loop-categorias owl-carousel owl-theme">

                        ${dominios.map((n) => {

                        return `
                            
                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-dominio-loja" style="background:url('${app.urlCdn}/${n.logo}') transparent no-repeat;background-size:65% auto;background-position:center center;">
                                   &nbsp;
                                </div>
                                <p>
                                   ${n.nomeloja}
                                </p>
                            </div>
                            <!-- PAGINA -->

                        `
                        }).join('')}

            </div>
        


        `);

           var dominiosCar = $('#dominiosCar').owlCarousel({
                loop:true,
                margin:5,
                items: 1.5,
                autoplay: true,
                center: true                         
            });

    }










    view2(){

            this._content.html(`
            
               <div class="row view-2" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>View 2</h2>
                     <p>Essa é a segunda view</p>
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

            $("header").removeClass("logado");

            $("header").html(`

                  <div class="row">
                      <!-- LOGO -->
                      <div class="col-12 logo">
                         <a href="" title="GARIMPEIROS">
                            <img src="assets/images/logo.svg" alt="GARIMPEIROS LOGO" />
                         </a>
                      </div>
                      <!-- LOGO -->
                     
                  </div>

            `);

            this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h3>
                       Logue ou Cadastre-se para aproveitar as Ofertas!
                     </h3>
                     
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

                     <div class="form-group link-apoio text-center">
                        <p style="font-size:12px;color:#747474">
                           <a href="javascript:void(0)" onclick="app.inicio();" title="Cancelar" style="color:#747474;text-decoration:none;">
                                 <i class="fa fa-angle-left" style="padding-right:5px;"></i> Cancelar
                           </a>
                        </p>
                     </div>

                     <div class="form-group link-apoio text-center">
                        <p style="font-size:12px;color:#747474">
                            VERSÃO 1.7.0 BETA ANDROID
                        </p>
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
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h3>
                       Quase lá
                     </h3>
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
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h3>
                       Login
                     </h3>
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
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }


    viewCadastro(){

      this._content.html(`
         
            <div class="row view-login" view-name="view-login">
               <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                  <h3>
                       Cadastro
                  </h3>
                  <p>Faça seu cadastro no app GARIMPEIROS</p>
                  
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
         
         `);

         $("footer").hide();

         this.animarTransicao();

 }
    
    viewEsqueciMinhaSenha(){

          this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h3>
                       Esquece minha senha
                     </h3>
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
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }
    


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   PUBLICAR
*
*
*  ------------------------------------------------------------------------------------------------
*/
publicar(){

   this.ativarMenuDois();
   
   this._content.html(`
            
               <div class="row internas view-publicar" view-name="view-publicar">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h3>
                       Publicar
                     </h3>
                     <p>Caros amigos, a expansão dos mercados mundiais pode nos levar a considerar a reestruturação das regras de conduta normativas. Nunca é demais lembrar.</p>
                     
                     <!-- ABAS -->
                     <div class="page-tabs">
                        <div class="pcss3t pcss3t-height-auto">
                             
                          

                               <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                               <label for="tab1">Oferta Online</label>
                                                                                    
                               <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                               <label for="tab2">Oferta Offline</label>

                               <input type="radio" name="pcss3t" id="tab3" class="tab-content-last">
                               <label for="tab3">Cupom</label>

                             

                             <ul>
                                                                                         
                               <!-- ABA UM -->
                               <li class="tab-content tab-content-first">
                                 
                                  <form method="post" action="javascript:void(0)">
                                     
                                     <div class="form-group">
                                     </div>

                                  </form>


                               </li>
                               <!-- ABA UM -->

                               <!-- ABA DOIS -->
                               <li class="tab-content tab-content-2">
                                  <p class="pre">Nada para mostrar por enquanto</p>
                               </li>
                               <!-- ABA DOIS -->

                               <!-- ABA TRES -->
                               <li class="tab-content tab-content-last">
                                  <p class="pre">Nada para mostrar por enquanto</p>
                               </li>
                               <!-- ABA TRES -->

                            </ul>

                       </div>
                      </div>      
                      <!-- ABAS --> 

                  </div>
               </div>
            
            `);

            

            this.animarTransicao();


}


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   GARIMPAR
*
*
*  ------------------------------------------------------------------------------------------------
*/
garimpar(){

    this.ativarMenuTres();

    this._content.html(`
            
               <div class="row internas view-publicar" view-name="view-publicar">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h3>
                       Garimpar
                     </h3>
                     <p>Caros amigos, a expansão dos mercados mundiais pode nos levar a considerar a reestruturação das regras de conduta normativas. Nunca é demais lembrar.</p>
                     
                     
                     <!-- TITULO -->
                     <div class="titulo-garimpar" style="margin-top: 20px;">
                        <h3>
                            <img src="assets/images/logao.png" alt="Garimpeiros Logo" /> Categorias
                        </h3>
                     </div>
                     <!-- TITULO -->

                  </div>
               </div>


                     <!-- LOOP CATEGORIAS -->
                     <div id="todasAsCategorias" class="loop-categorias owl-carousel owl-theme">
                        
                        ${JSON.parse(localStorage.getItem("categorias")).map((n) => {

                        return `
                            
                            <!-- PAGINA -->
                            <div class="ïtem">
                                <div class="banner-categoria" style="background:url('${app.urlCdn}/${n.capa}') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                   <a href="javascript:void(0)" title="${n.nome}">
                                      &nbsp;
                                   </a>
                                </div>
                                <p>
                                  <a href="javascript:void(0)" onclick="app.detalheCategoria(${n.id})" title="${n.nome}">
                                      ${n.nome} <br>(saiba mais)
                                   </a>
                                </p>
                            </div>
                            <!-- PAGINA -->

                        `
                        }).join('')}


                     </div>
                     <!-- LOOP CATEGORIAS -->

                    
                <div class="row internas view-publicar" view-name="view-publicar">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">


                     <!-- TITULO -->
                     <div class="titulo-garimpar">
                        <h3>
                            <img src="assets/images/logao.png" alt="Garimpeiros Logo" /> Lojas
                        </h3>
                     </div>
                     <!-- TITULO -->


                     <div id="top10" class="loop-categorias owl-carousel owl-theme">

                        ${JSON.parse(localStorage.getItem("dominios")).map((n) => {

                        return `
                            
                            <!-- PAGINA -->
                            <div class="item">
                                <div class="capa-dominio-loja" style="background:url('${app.urlCdn}/${n.logo}') transparent no-repeat;background-size:65% auto;background-position:center center;">
                                   &nbsp;
                                </div>
                                <p>
                                   ${n.nomeloja}
                                </p>
                            </div>
                            <!-- PAGINA -->

                        `
                        }).join('')}

            </div>




                  </div>
               </div>


              


                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
            
            `);

            this.animarTransicao();

            // INSTANCIAR O OWL CARROUSEL
            var todasAsCategorias = $('#todasAsCategorias').owlCarousel({
                loop:false,
                margin:20,
                items: 1.5,
                autoplay: false,
                center: true                         
            });

            var top10 = $('#top10').owlCarousel({
                loop:true,
                margin:5,
                items: 1.5,
                autoplay: true,
                center: true                         
            });

}

detalheCategoria(idCategoria){
  
      this.ativarMenuTres();

      var finalCashback = 0;

      var bdCategorias = JSON.parse(localStorage.getItem("categorias"));

      for(var i  = 0;i<bdCategorias.length;i++){
       
       if(bdCategorias[i].id==idCategoria){
        
        var categoria = bdCategorias[i];

       }

      }

      this._content.html(`

               <img src="${app.urlCdn}/${categoria.capa}" alt="${categoria.nome}" class="capa-interna-categoria" />
            
               <div class="row internas view-detalhe-categoria" view-name="view-publicar">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h3>
                       ${categoria.nome}
                     </h3>
                     <p>${categoria.descricao}</p>
                     
                     
                     <!-- ABAS -->
                     <div class="page-tabs">
                        <div class="pcss3t pcss3t-height-auto">
                             
                               <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                               <label for="tab1">Ofertas</label>
                                                                                    
                               <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                               <label for="tab2">Discussão</label>

                             <ul>
                                                                                         
                               <!-- ABA UM -->
                               <li class="tab-content tab-content-first">
                                 
                                    
                                    ${JSON.parse(localStorage.getItem("ofertas")).map((n) => {

                                             if(n.cash_back_gpr==null || n.cash_back_gpr==0){
                                               finalCashback = n.cash_back;
                                             }else{
                                              finalCashback = n.cash_back_gpr;
                                             }

                                             if(finalCashback==null || finalCashback==0){
                                               finalCashback = 0;
                                             }

                                             // OFERTA É UMA OFERTA
                                             if(n.tipo==1){ 

                                                    return `

                                                         <!-- CAIXA BRANCA -->
                                                         <div class="caixa-branca">
                                                           
                                                           <!-- META HEADER -->
                                                           <div class="caixa-branca-header">
                                                              <div class="row">
                                                                 <div class="col-9 coluna-um no-padding">
                                                                    <div class="row">
                                                                       <div class="col-3 foto-perfil no-padding">
                                                                           <div class="caixa-foto-perfil" style="background: url('') #ccc no-repeat;background-size: cover;background-position: center center;">
                                                                              <a href="javascript:void(0)" title="Ver perfil">
                                                                                 &nbsp;
                                                                              </a>
                                                                           </div>
                                                                       </div>
                                                                       <div class="col-9 nome-perfil" >
                                                                          <h4>${n.nome_usuario} <br><small>${n.data_pub}</small></h4>
                                                                       </div>
                                                                    </div>
                                                                 </div>
                                                                 <div class="col-3 coluna-dois no-padding">
                                                                     <a href="javascript:void(0)" title="Mais opções">
                                                                        <img src="assets/images/indicador-de-acoes.png" alt="Mais opções sobre a postagem">
                                                                     </a>
                                                                 </div>
                                                              </div>
                                                           </div>
                                                           <!-- META HEADER -->
                                                           
                                                           <h3 class="titulo-oferta">
                                                              ${n.titulo} <span>R$${n.valor}</span>
                                                           </h3>
                                                           <p>
                                                              ${n.desc_oferta}
                                                           </p>
                                                           <div style="text-align:center;" class="imagem-da-oferta">
                                                             <a href="javascript:void(0)" onclick="app.detalheOferta(${n.id})" title="Clique para ver mais sobre essa postagem">
                                                                <img src="${app.urlCdn}/${n.capa}" alt="${n.titulo}" style="width:50%;height:auto;">
                                                             </a>
                                                             <div class="label-cashback">
                                                                  <img src="assets/images/cashback.png">
                                                                  <span>${finalCashback}%</span>
                                                             </div>
                                                           </div>
                                                           
                                                           <!-- META BOTTOM -->
                                                           <div class="caixa-branca-bottom">
                                                              <div class="row">
                                                                 <div class="col-8 no-padding">
                                                                    <div class="row">
                                                                       <div class="col-4 no-padding coluna-um" onclick="app.curtir(this)">
                                                                          <a href="javascript:void(0)" title="Curtir">
                                                                             <img src="assets/images/axe.svg" alt="Curtir">
                                                                          </a>
                                                                          <span>0</span>
                                                                       </div>
                                                                       <div class="col-4 no-padding coluna-um-dois" onclick="app.naocurtir(this)">
                                                                          <a href="javascript:void(0)" title="Não gostei">
                                                                             <img src="assets/images/no-axe.svg" alt="Não gostei"> <span>0</span>
                                                                          </a>
                                                                       </div>
                                                                       <div class="col-4 no-padding coluna-dois" onclick="app.comentar(this)">
                                                                          <a href="javascript:void(0)" title="Comentários">
                                                                             <img src="assets/images/comentarios.svg" alt="Comentários"> 0
                                                                          </a>
                                                                       </div>
                                                                    </div>
                                                                 </div>
                                                                 <div class="col-4 no-padding coluna-tres">
                                                                     <a href="javascript:void(0)" title="Compartilhar essa postagem">
                                                                       Comp. <img src="assets/images/compartilhamento.svg" alt="Compartilhar essa postagem">
                                                                     </a>
                                                                 </div>
                                                              </div>
                                                           </div>
                                                           <!-- META BOTTOM -->

                                                         </div>
                                                         <!-- CAIXA BRANCA -->
                                                     
                                                  `

                                             }
                                             
                                             // OFERTA É UM CUPOM
                                             if(n.tipo==2){

                                                 return `

                                                   <!-- CAIXA BRANCA -->
                                                   <div class="caixa-branca">
                                                     
                                                     <!-- META HEADER -->
                                                     <div class="caixa-branca-header">
                                                        <div class="row">
                                                           <div class="col-9 coluna-um no-padding">
                                                              <div class="row">
                                                                 <div class="col-3 foto-perfil no-padding">
                                                                     <div class="caixa-foto-perfil" style="background: url('') #ccc no-repeat;background-size: cover;background-position: center center;">
                                                                        <a href="javascript:void(0)" title="Ver perfil">
                                                                           &nbsp;
                                                                        </a>
                                                                     </div>
                                                                 </div>
                                                                 <div class="col-9 nome-perfil" >
                                                                    <h4>${n.nome_usuario} <br><small>${n.data_pub}</small></h4>
                                                                 </div>
                                                              </div>
                                                           </div>
                                                           <div class="col-3 coluna-dois no-padding">
                                                               <a href="javascript:void(0)" title="Mais opções">
                                                                  <img src="assets/images/indicador-de-acoes.png" alt="Mais opções sobre a postagem">
                                                               </a>
                                                           </div>
                                                        </div>
                                                     </div>
                                                     <!-- META HEADER -->
                                                     
                                                     <h3 class="titulo-oferta">
                                                        ${n.titulo}
                                                     </h3>
                                                     <p>
                                                        ${n.desc_oferta}
                                                     </p>
                                                     
                                                     <h3 class="codigoCupom">
                                                        ${n.cupom}
                                                     </h3>
                                                     
                                                     <!-- META BOTTOM -->
                                                     <div class="caixa-branca-bottom">
                                                        <div class="row">
                                                           <div class="col-8 no-padding">
                                                              <div class="row">
                                                                 <div class="col-4 no-padding coluna-um" onclick="app.curtir(this)">
                                                                    <a href="javascript:void(0)" title="Curtir">
                                                                       <img src="assets/images/axe.svg" alt="Curtir">
                                                                    </a>
                                                                    <span>0</span>
                                                                 </div>
                                                                 <div class="col-4 no-padding coluna-um-dois" onclick="app.naocurtir(this)">
                                                                    <a href="javascript:void(0)" title="Não gostei">
                                                                       <img src="assets/images/no-axe.svg" alt="Não gostei"> <span>0</span>
                                                                    </a>
                                                                 </div>
                                                                 <div class="col-4 no-padding coluna-dois" onclick="app.comentar(this)">
                                                                    <a href="javascript:void(0)" title="Comentários">
                                                                       <img src="assets/images/comentarios.svg" alt="Comentários"> 0
                                                                    </a>
                                                                 </div>
                                                              </div>
                                                           </div>
                                                           <div class="col-4 no-padding coluna-tres">
                                                               <a href="javascript:void(0)" title="Compartilhar essa postagem">
                                                                 Comp. <img src="assets/images/compartilhamento.svg" alt="Compartilhar essa postagem">
                                                               </a>
                                                           </div>
                                                        </div>
                                                     </div>
                                                     <!-- META BOTTOM -->

                                                   </div>
                                                   <!-- CAIXA BRANCA -->
                                               
                                            `

                                             }

                                            
                              }).join('')}



                               </li>
                               <!-- ABA UM -->

                               <!-- ABA DOIS -->
                               <li class="tab-content tab-content-2">
                                  
                                  <!-- BREADCRUMB -->
                                  <div class="row breadcrumb">
                                      <div class="col-12">
                                          <a href="javascript:void(0)" title="Discussão">
                                              Discussão
                                          </a>
                                          <span>/</span>
                                      </div>
                                  </div>
                                  <!-- BREADCRUMB -->

                                  <!-- TÓPICO -->
                                  <div class="topico" onclick="app.detalheTopico();">
                                      <h2>
                                        Qual é o melhor console? Xbox Series X ou PlayStation 5?
                                        <small>Postado por Diogenes Junior, em 30/09/2020</small>
                                      </h2>

                                       <!-- META BOTTOM -->
                                       <div class="caixa-branca-bottom">
                                          <div class="row">
                                             <div class="col-12 no-padding">
                                                <div class="row">
                                                   <div class="col-3 no-padding coluna-um" onclick="//app.curtir(this)">
                                                      <a href="javascript:void(0)" title="Curtidas">
                                                         <img src="assets/images/heart.svg" alt="Curtidas">
                                                      </a>
                                                      <span>609</span>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-um-dois" onclick="//app.naocurtir(this)">
                                                      <a href="javascript:void(0)" title="Não gostaram">
                                                         <img src="assets/images/dislike.svg" alt="Não gostaram"> <span>120</span>
                                                      </a>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-dois" onclick="//app.comentar(this)">
                                                      <a href="javascript:void(0)" title="Comentários">
                                                         <img src="assets/images/comentarios-topico.svg" alt="Comentários"> 120
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- META BOTTOM -->

                                  </div>
                                  <!-- TÓPICO -->


                                  <!-- TÓPICO -->
                                  <div class="topico">
                                      <h2>
                                        É confiável comprar no MercadoLivre? Nunca comprei lá.
                                        <small>Postado por Diogenes Junior, em 30/09/2020</small>
                                      </h2>

                                       <!-- META BOTTOM -->
                                       <div class="caixa-branca-bottom">
                                          <div class="row">
                                             <div class="col-12 no-padding">
                                                <div class="row">
                                                   <div class="col-3 no-padding coluna-um" onclick="//app.curtir(this)">
                                                      <a href="javascript:void(0)" title="Curtidas">
                                                         <img src="assets/images/heart.svg" alt="Curtidas">
                                                      </a>
                                                      <span>609</span>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-um-dois" onclick="//app.naocurtir(this)">
                                                      <a href="javascript:void(0)" title="Não gostaram">
                                                         <img src="assets/images/dislike.svg" alt="Não gostaram"> <span>120</span>
                                                      </a>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-dois" onclick="//app.comentar(this)">
                                                      <a href="javascript:void(0)" title="Comentários">
                                                         <img src="assets/images/comentarios-topico.svg" alt="Comentários"> 120
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- META BOTTOM -->

                                  </div>
                                  <!-- TÓPICO -->




                                  <!-- TÓPICO -->
                                  <div class="topico">
                                      <h2>
                                        Como eu configuro Wifi no roteador DLink300 que vem na Vivo?
                                        <small>Postado por Diogenes Junior, em 30/09/2020</small>
                                      </h2>

                                       <!-- META BOTTOM -->
                                       <div class="caixa-branca-bottom">
                                          <div class="row">
                                             <div class="col-12 no-padding">
                                                <div class="row">
                                                   <div class="col-3 no-padding coluna-um" onclick="//app.curtir(this)">
                                                      <a href="javascript:void(0)" title="Curtidas">
                                                         <img src="assets/images/heart.svg" alt="Curtidas">
                                                      </a>
                                                      <span>609</span>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-um-dois" onclick="//app.naocurtir(this)">
                                                      <a href="javascript:void(0)" title="Não gostaram">
                                                         <img src="assets/images/dislike.svg" alt="Não gostaram"> <span>120</span>
                                                      </a>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-dois" onclick="//app.comentar(this)">
                                                      <a href="javascript:void(0)" title="Comentários">
                                                         <img src="assets/images/comentarios-topico.svg" alt="Comentários"> 120
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- META BOTTOM -->

                                  </div>
                                  <!-- TÓPICO -->


                                  <p>&nbsp;</p>
                                  <p>&nbsp;</p>
                                  <p>&nbsp;</p>


                               </li>
                               <!-- ABA DOIS -->

                            </ul>

                       </div>
                      </div>      
                      <!-- ABAS --> 
                     

                  </div>
               </div>


            `);

            this.animarTransicao();

}

detalheTopico(){


      this.ativarMenuTres();

      this._content.html(`

               <img src="assets/images/capa-categoria-1.png" alt="Nome da categoria" class="capa-interna-categoria" />
            
               <div class="row internas view-detalhe-categoria" view-name="view-publicar">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h3>
                       Nome da categoria
                     </h3>
                     <p>Caros amigos, a expansão dos mercados mundiais pode nos levar a considerar.</p>
                     
                     
                     <!-- ABAS -->
                     <div class="page-tabs">
                        <div class="pcss3t pcss3t-height-auto">
                             
                               <input type="radio" name="pcss3t" id="tab1" class="tab-content-first">
                               <label for="tab1">Ofertas</label>
                                                                                    
                               <input type="radio" name="pcss3t" checked id="tab2" class="tab-content-2">
                               <label for="tab2">Discussão</label>

                             <ul>
                                                                                         
                               <!-- ABA UM -->
                               <li class="tab-content tab-content-first">
                                 <p class="pre">Nada para mostrar por enquanto</p>
                               </li>
                               <!-- ABA UM -->

                               <!-- ABA DOIS -->
                               <li class="tab-content tab-content-2">
                                  
                                  
                                   <!-- BREADCRUMB -->
                                  <div class="row breadcrumb">
                                      <div class="col-12">
                                          <a href="javascript:void(0)" onclick="app.detalheCategoria();" title="Discussão">
                                              Discussão
                                          </a>
                                          <span>/</span>

                                          <a href="javascript:void(0)" title="Qual é o melhor console? Xbox Series X ou PlayStation 5?">
                                              Qual é o melhor console? Xbox Series X ou PlayStation 5?
                                          </a>
                                      </div>
                                  </div>
                                  <!-- BREADCRUMB -->

                                  <!-- TÓPICO -->
                                  <div class="topico">
                                      <h2>
                                        <div class="imagem-perfil-gen" style="background:url('assets/images/perfil.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                          &nbsp;
                                        </div>
                                        
                                        Qual é o melhor console? Xbox Series X ou PlayStation 5?
                                        <small>Postado por Diogenes Junior, em 30/09/2020</small>
                                      </h2>

                                      <p>
                                          A prática cotidiana prova que a constante divulgação das informações garante a contribuição de um grupo importante na determinação das condições financeiras e administrativas exigidas.
                                      </p>

                                       <!-- META BOTTOM -->
                                       <div class="caixa-branca-bottom">
                                          <div class="row">
                                             <div class="col-12 no-padding">
                                                <div class="row">
                                                   <div class="col-3 no-padding coluna-um" onclick="//app.curtir(this)">
                                                      <a href="javascript:void(0)" title="Curtidas">
                                                         <img src="assets/images/heart.svg" alt="Curtidas">
                                                      </a>
                                                      <span>609</span>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-um-dois" onclick="//app.naocurtir(this)">
                                                      <a href="javascript:void(0)" title="Não gostaram">
                                                         <img src="assets/images/dislike.svg" alt="Não gostaram"> <span>120</span>
                                                      </a>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-dois" onclick="//app.comentar(this)">
                                                      <a href="javascript:void(0)" title="Comentários">
                                                         <img src="assets/images/comentarios-topico.svg" alt="Comentários"> 120
                                                      </a>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- META BOTTOM -->

                                  </div>
                                  <!-- TÓPICO -->



                                  <!-- TÓPICO RESPOSTA -->
                                  <div class="topico topico-resposta">
                                      <h2>
                                        <div class="imagem-perfil-gen" style="background:url('assets/images/perfil.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                          &nbsp;
                                        </div>
                                        
                                        Fernando Oliveira - 30/09/2020
                                        
                                      </h2>

                                      <p>
                                          A prática cotidiana prova que a constante divulgação das informações garante a contribuição de um grupo importante na determinação das condições financeiras e administrativas exigidas.
                                      </p>

                                       <!-- META BOTTOM -->
                                       <div class="caixa-branca-bottom">
                                          <div class="row">
                                             <div class="col-12 no-padding">
                                                <div class="row">
                                                   <div class="col-3 no-padding coluna-um" onclick="//app.curtir(this)">
                                                      <a href="javascript:void(0)" title="Curtidas">
                                                         <img src="assets/images/heart.svg" alt="Curtidas">
                                                      </a>
                                                      <span>609</span>
                                                   </div>
                                                   <div class="col-3 no-padding coluna-um-dois" onclick="//app.naocurtir(this)">
                                                      <a href="javascript:void(0)" title="Não gostaram">
                                                         <img src="assets/images/dislike.svg" alt="Não gostaram"> <span>120</span>
                                                      </a>
                                                   </div>
                                                   
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <!-- META BOTTOM -->

                                  </div>
                                  <!-- TÓPICO RESPOSTA -->

                                  <p>&nbsp;</p>
                                  <p>&nbsp;</p>
                                  <p>&nbsp;</p>


                               </li>
                               <!-- ABA DOIS -->

                            </ul>

                       </div>
                      </div>      
                      <!-- ABAS --> 
                     

                  </div>
               </div>


            `);

            this.animarTransicao();


}


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   DESEJOS
*
*
*  ------------------------------------------------------------------------------------------------
*/
desejos(){

    this.ativarMenuQuatro();

    this._content.html(`
            
               <div class="row internas view-publicar" view-name="view-publicar">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h3>
                       Desejos
                     </h3>
                     <p>Caros amigos, a expansão dos mercados mundiais pode nos levar a considerar a reestruturação das regras de conduta normativas. Nunca é demais lembrar.</p>
                     
                   

                  </div>
               </div>
            
            `);

            this.animarTransicao();

}



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   DM
*
*
*  ------------------------------------------------------------------------------------------------
*/
dm(){

    this.ativarMenuCinco();

    //this._content.css("background","#f2f2f2");

    this._content.html(`
            
               <div class="row internas view-publicar" view-name="view-publicar">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h3>
                       Mensagens & Notificações
                     </h3>
                     <p>Caros amigos, a expansão dos mercados mundiais pode nos levar a considerar a reestruturação.</p>
                     

                     <!-- ABAS -->
                     <div class="page-tabs">
                        <div class="pcss3t pcss3t-height-auto">
                             
                            

                               <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                               <label for="tab1">Mensagens (0)</label>
                                                                                    
                               <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                               <label for="tab2">Notificações (0)</label>

                             

                             <ul>
                                                                                         
                               <!-- ABA UM -->
                               <li class="tab-content tab-content-first">
                                 <p class="pre">Nada para mostrar por enquanto</p>
                               </li>
                               <!-- ABA UM -->

                               <!-- ABA DOIS -->
                               <li class="tab-content tab-content-2">
                                  <p class="pre">Nada para mostrar por enquanto</p>
                               </li>
                               <!-- ABA DOIS -->

                            </ul>

                       </div>
                      </div>      
                      <!-- ABAS --> 
                   

                  </div>
               </div>
            
            `);

            this.animarTransicao();

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

    this.desativarTodosMenus();

    this._content.html(`
            
               <div class="row internas  view-perfil" view-name="view-perfil">
                  <div class="col-12 dados-usuario wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <div class="foto-perfil" style="background:url('assets/images/perfil.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                         &nbsp;
                     </div>
                     
                     <h3>
                       <span>carregando</span>
                       <small>carregando</small>
                     </h3>

                     <p>
                        <a href="javascript:void(0)" onclick="app.editarPerfil();" class="btn btn-default" title="Editar perfil">
                           EDITAR PERFIL
                        </a>
                     </p>
                     
                     <!-- ABAS -->
                     <div class="page-tabs">
                        <div class="pcss3t pcss3t-height-auto">
                             
                               <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                               <label for="tab1">Seu feed</label>
                                                                                    
                               <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                               <label for="tab2">Seguidores (0)</label>

                               <input type="radio" name="pcss3t" id="tab3" class="tab-content-last">
                               <label for="tab3">Seguindo (0)</label>

                            

                             <ul>
                                                                                         
                               <!-- ABA UM -->
                               <li class="tab-content tab-content-first">
                                 <p class="pre">Nada para mostrar por enquanto</p>
                               </li>
                               <!-- ABA UM -->

                               <!-- ABA DOIS -->
                               <li class="tab-content tab-content-2">
                                  <p class="pre">Nada para mostrar por enquanto</p>
                               </li>
                               <!-- ABA DOIS -->

                               <!-- ABA TRES -->
                               <li class="tab-content tab-content-last">
                                  <p class="pre">Nada para mostrar por enquanto</p>
                               </li>
                               <!-- ABA TRES -->

                            </ul>

                       </div>
                      </div>      
                      <!-- ABAS --> 
                   

                  </div>
               </div>
            
            `);

            this.animarTransicao();

}

editarPerfil(){


  this._content.html(`
            
               <div class="row internas view-editar-perfil view-formularios" view-name="view-editar-perfil">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h3>
                       Editar perfil
                     </h3>
                     <p>Atualize as suas informações de cadastro:</p>


                     <form method="post" action="javascript:void(0)" onsubmit="app.models.editarPerfil()">
                          
                          <div class="form-group">
                             <label>Seu nome</label>
                             <input type="text" class="form-control" name="nome" id="nome" placeholder="Seu nome completo" required />
                          </div>

                           <div class="form-group">
                             <label>Seu e-mail</label>
                             <input type="email" class="form-control" name="email" id="email" placeholder="Seu melhor e-mail" required />
                          </div>

                           <div class="form-group">
                             <label>Número de celular</label>
                             <input type="tel" class="form-control" name="celular" id="celular" placeholder="DDD + número" required />
                          </div>

                          <div class="form-group">
                             <label>Senha de acesso</label>
                             <input type="password" class="form-control" name="senha" id="senha" placeholder="Senha de acesso" required />
                          </div>

                          <h4>Dados bancários</h4>
                          <p>Você receberá seus pagamentos nessa conta. Note que o seu nome completo e o nome do títular da conta precisam ser <b>exatamente</b> os mesmos.</p>


                          <div class="form-group">
                            <label>CPF</label>
                            <input type="tel" class="form-control" name="cpf" id="cpf" placeholder="Número do seu CPF" required />
                          </div>

                          <div class="form-group">
                            <label>Tipo de conta bancária</label>
                            <select class="form-control" name="tipo_conta_bancaria" id="tipo_conta_bancaria" required>
                               <option value="">selecione uma opção</option>
                               <option value="corrente">Conta corrente</option>
                               <option value="poupança">Conta poupança</option>
                            </select>
                          </div>

                           <!-- BANCO -->
                           <div class="">
                                <div class="form-group">
                                    <label>Banco</label>
                                    <input type="hidden" id="banco" value="" />
                                    <label for="listaBancos" id="labelListaBancos" onclick="betterSearchFn('listaBancos','seletor','#banco','json')" class="btn btn-default btn-default-especial">CLIQUE PARA SELECIONAR</label>
                                </div>
                            </div>
                           <!-- BANCO -->

                           <div class="form-group">
                              <label>Agência</label>
                              <input type="text" id="ag" name="ag" class="form-control" required placeholder="Número da agência">
                           </div>
                         
                           <div class="form-group">
                              <label>Conta</label>
                              <input type="text" id="cc" name="cc" class="form-control" required placeholder="Número da conta">
                           </div>

                          <p>&nbsp;</p>
                                 
                          <div class="form-group">
                            <button class="btn btn-primary" type="submit">Atualizar</button>
                          </div>

                          <p class="link-apoio text-center">
                              <a href="javascript:void(0)" title="Cancelar" onclick="app.meuPerfil();">
                                  Cancelar
                              </a>
                          </p>


                     </form>

                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>

                     
                
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
*   SALDO & EXTRATO
*
*
*  ------------------------------------------------------------------------------------------------
*/

saldoExtrato(){


  this._content.html(`
            
               <div class="row internas view-saldo-e-extrato view-formularios" view-name="view-editar-perfil">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h3>
                       Saldo & Extrato
                     </h3>
                     <p>Caros amigos, a expansão dos mercados mundiais pode nos levar a considerar a reestruturação das regras de conduta normativas. Nunca é demais lembrar.</p>


                     
                     <!-- SALDO -->
                     <div class="saldo">

                           <!-- PACOTE -->
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="pacote" id="pacote1" value="1000" checked>
                              <label class="form-check-label" for="pacote1">
                                R$ 1.200,45
                                <small>Saldo em conta</small>
                              </label>
                           </div>
                           <!-- PACOTE -->


                           <!-- PACOTE -->
                           <div class="form-check">
                              <input class="form-check-input" disabled type="radio" name="pacote" id="pacote2" value="5000">
                              <label class="form-check-label" for="pacote2">
                                R$ 21,50
                                <small>Saldo pendente</small>
                              </label>
                           </div>
                           <!-- PACOTE -->
                     
                     </div>
                     <!-- SALDO -->



                     <p>
                       <a href="javascript:void(0)" class="btn btn-primary" title="SACAR O DINHEIRO">
                          SACAR O DINHEIRO
                       </a>
                     </p>
                     

                    <!-- FILTRO PERIODO -->
                    <div class="filtro-periodo">
                            <a href="javascript:void(0)" title="30 dias">
                                30 DIAS
                            </a>
                            <a href="javascript:void(0)" title="60 dias">
                                60 DIAS
                            </a>
                            <a href="javascript:void(0)" title="90 dias">
                                90 DIAS
                            </a>
                            <a href="javascript:void(0)" title="120 dias">
                                120 DIAS
                            </a>
                    </div>
                    <!-- FILTRO PERIODO -->


                     
                     <!-- AREA DO EXTRATO -->
                     <div class="area-do-extrato">
                    
                           <!-- LINHA -->
                           <div class="row linha">
                               <div class="col-12 data-registro">
                                   <span>30/10</span>
                               </div>
                               <div class="col-7">
                                   <h3>
                                       Recebimento comissão
                                       <small>Venda pedido #210201 Lojas Americanas</small>
                                   </h3>
                               </div>
                               <div class="col-5 valor-saida text-right">
                                   <h3>
                                       R$ 50.00
                                       <small>PAGO</small>
                                   </h3>
                               </div>
                           </div>
                           <!-- LINHA -->


                           <!-- LINHA -->
                           <div class="row linha">
                               <div class="col-7">
                                   <h3>
                                       Recebimento comissão
                                       <small>Venda pedido #210201 Lojas Americanas</small>
                                   </h3>
                               </div>
                               <div class="col-5 valor-saida text-right">
                                   <h3>
                                       R$ 50.00
                                       <small>PAGO</small>
                                   </h3>
                               </div>
                           </div>
                           <!-- LINHA -->

                           <!-- LINHA -->
                           <div class="row linha">
                               <div class="col-7">
                                   <h3>
                                       Recebimento comissão
                                       <small>Venda pedido #210201 Lojas Americanas</small>
                                   </h3>
                               </div>
                               <div class="col-5 valor-saida text-right">
                                   <h3>
                                       R$ 50.00
                                       <small>PAGO</small>
                                   </h3>
                               </div>
                           </div>
                           <!-- LINHA -->

                           <!-- LINHA -->
                           <div class="row linha">
                               <div class="col-12 data-registro">
                                   <span>31/10</span>
                               </div>
                               <div class="col-7">
                                   <h3>
                                       Recebimento comissão
                                       <small>Venda pedido #210201 Lojas Americanas</small>
                                   </h3>
                               </div>
                               <div class="col-5 valor-saida text-right">
                                   <h3>
                                       R$ 150.00
                                       <small>PAGO</small>
                                   </h3>
                               </div>
                           </div>
                           <!-- LINHA -->


                           <p>&nbsp;</p>
                           <p>&nbsp;</p>

                    
  
                     </div>
                     <!-- AREA DO EXTRATO -->

                     <p>&nbsp;</p>
                     <p class="link-apoio text-center">
                        <a href="javascript:void(0)" title="Relatar um problema">
                           Relatar um problema
                        </a>
                     </p>

                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>


                     
                
                  </div>
               </div>
            
            `);

            this.animarTransicao();



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

      this._content.css("background","transparent");


    	this._allMenus.css("color","#363636");
      this._allMenus.css("font-weight","normal");
    }

    ativarMenuUm(){
    	this.desativarTodosMenus();
      this._menu1.css("color","#5689E3"); 
      this._menu1.css("font-weight","bold"); 
    }

    ativarMenuDois(){
    	this.desativarTodosMenus();
      this._menu2.css("color","#5689E3"); 
      this._menu2.css("font-weight","bold"); 
    }
    
    ativarMenuTres(){
    	this.desativarTodosMenus();
      this._menu3.css("color","#5689E3");  
      this._menu3.css("font-weight","bold"); 
    }
    
    ativarMenuQuatro(){
      this.desativarTodosMenus();
      this._menu4.css("color","#5689E3");  
      this._menu4.css("font-weight","bold"); 
    }
    
    ativarMenuCinco(){
      this.desativarTodosMenus();
      this._menu5.css("color","#5689E3"); 
      this._menu5.css("font-weight","bold"); 
    }

}

