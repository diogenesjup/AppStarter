class App {

    constructor(appId, appName, appVersion, appOs, ambiente, token, tokenSms) {

        this.appId = appId;
        this.appName = appName;
        this.appVersion = appVersion;        
        this.appOs = appOs;

        this.views = new Views();
        this.sessao = new Sessao();
        this.models = new Models();
        this.helpers = new Helpers();

        if(ambiente=="HOMOLOGACAO"){
             
            this.urlDom = "http://127.0.0.1:8080/garimpeiros/www/app/www/";
            this.urlApi = "http://127.0.0.1:8080/garimpeiros/www/api/";
            this.urlCdn = "http://127.0.0.1:8080/garimpeiros/www/cdn/";

        }
        if(ambiente=="PRODUCAO"){

            this.urlDom = "https://garimpeiros.com.br/app/www/";
            this.urlApi = "https://garimpeiros.com.br/api/";
            this.urlCdn = "https://garimpeiros.com.br/cdn/";

        }

        this.token = token;
        this.tokenSms = tokenSms;
        
    }
    
    getVersion() {

        return this.appVersion;
    }

    getOs(){

        return this.appOs;
    }
    
    initApp(elemento){

        this.views.viewPrincipal();

        // VERIFICAR SE A API ESTÁ OK
        this.models.testeApi();

        // DIRECIONAR O USUÁRIO PARA O INICIO DO APP
        this.inicio();

        // VERIFICAR SE O USUÁRIO ESTÄ LOGADO
        //this.sessao.verificarLogado();

    }

    inicio(){

        this.views.viewPrincipal();
        this.views.ativarMenuUm();

        this.models.conteudo();

    }

    login(idUsuario,emailUusario,dadosUsuario){
   
        this.sessao.logarUsuario(idUsuario,emailUusario,dadosUsuario);
   
    }

    verificarCodigoSms(){

        this.views.viewCodigoSms();

    }

    procVerificarSms(){
        
       this.models.verificarCodigoSms(); 

    }
    
    procLoginSms(){

        this.models.procLoginSms();
   
    }

    procLogin(){

        this.models.procLogin();
   
    }
    
    procLogoff(){

        confirmacao("Tem certeza que deseja sair?","Você será desconectado...","app.logoff();","Sim, sair");
        
    }

    logoff(){
       
        localStorage.clear();
        app.inicio();

    }

    cadastro(){
        this.views.viewCadastro();
        this.views.desativarTodosMenus();
    }

    procCadastro(){
        this.models.procCadastro();
    }


    esqueciMinhaSenha(){
        this.views.viewEsqueciMinhaSenha();
        this.views.desativarTodosMenus();
    }

    procResetSenha(){
        this.models.procResetSenha();
    }

    /* ABRIR OU FECHAR O MENU LOJA */
    fabrirFecharMenuLoja(){

      if(localStorage.getItem("bdLogado")=="logado"){

              if($(".menu-adicional-loja").hasClass("aberto")){
                 
                 $(".menu-adicional-loja").removeClass("aberto");
                
              }else{

                $(".menu-adicional-loja").addClass("aberto");
                
              }

      }else{
         
         this.sessao.verificarLogado();

      }

    }



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   MICROINTERAÇÕES
*
*
*  ------------------------------------------------------------------------------------------------
*/


    curtir(seletor){

        if($(seletor).hasClass("ld")){

            $(seletor).removeClass("ld ld-beat");
            $(seletor).html(`
                   
                   <a href="javascript:void(0)" title="Curtir">
                      <img src="assets/images/axe.svg" alt="Curtir">
                   </a>
                   <span>1</span>

            `);

        }else{

            $(seletor).addClass("ld ld-beat");
            $(seletor).html(`
                   
                   <a href="javascript:void(0)" title="Curtir">
                      <img src="assets/images/axe-azul.svg" alt="Curtir">
                   </a>
                   <span>1</span>

            `);

            setTimeout(function(){ 
               
               $(seletor).removeClass("ld-beat");

            }, 1500);

        }

        
    }

    naocurtir(seletor){

        if($(seletor).hasClass("ld")){

            $(seletor).removeClass("ld ld-beat");
            $(seletor).html(`
                   
                   <a href="javascript:void(0)" title="Descurtir">
                      <img src="assets/images/no-axe.svg" alt="Descurtir">
                   </a>
                   <span>1</span>

            `);

        }else{

            $(seletor).addClass("ld ld-beat");
            $(seletor).html(`
                   
                   <a href="javascript:void(0)" title="Descurtir">
                      <img src="assets/images/no-axe-azul.svg" alt="Descurtir">
                   </a>
                   <span>1</span>

            `);

            setTimeout(function(){ 
               
               $(seletor).removeClass("ld-beat");

            }, 1500);

        }

        
    }

    comentar(idPostagem){

        $(".container-comentario").css("bottom","0px");

    }
    
    fecharAbaComentario(){

        $(".container-comentario").css("bottom","-200%");

    }


    detalheOferta(idOferta){


        if(localStorage.getItem("bdLogado")=="logado"){
             
             this.models.detalheOferta(idOferta);

        }else{

           this.sessao.verificarLogado();

        }
       


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
   
   this.views.publicar();


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

    this.views.garimpar();
    //this.models.garimpar();

}

detalheCategoria(idCategoria){
    
    this.views.detalheCategoria(idCategoria);

}

detalheTopico(){
   
   this.views.detalheTopico();

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

    this.views.desejos();

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

    this.views.dm();

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
     
     this.views.meuPerfil();
     this.models.meuPerfil();

}

editarPerfil(){
     
     this.views.editarPerfil();

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

    this.views.saldoExtrato();

}



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   OUTROS CONTROLERS
*
*
*  ------------------------------------------------------------------------------------------------
*/

    view2(){
        this.views.view2();
        this.views.ativarMenuDois();
    }

    view3(){
        this.views.view3();
        this.views.ativarMenuTres();
    }

    viewLogin(){
        this.views.viewLogin();
        this.views.desativarTodosMenus();
    }

    viewUploadFoto(){
        this.views.viewUploadFoto();
        this.views.desativarTodosMenus();
    }

}


class Sessao{
    
	constructor(){
	      
	     this.logado = "nao-logado";
	     this.bdLogado = localStorage.getItem("bdLogado");
	     this.idUsuario = localStorage.getItem("idUsuario");
	     this.emailUsuario = localStorage.getItem("emailUsuario");
	     this.dadosUsuario = localStorage.getItem("dadosUsuario");

	}
    
    logarUsuario(idUsuario,emailUusario,dadosUsuario){
    	this.logado = "logado";
    	this.idUsuario = idUsuario;
    	this.dadosUsuario = dadosUsuario;
    	localStorage.setItem("bdLogado","logado");
        localStorage.setItem("idUsuario",this.idUsuario);
        
        // DIRECIONAR O USUÁRIO PARA O INÍCIO
    	app.inicio();
    }

    verificarLogado(){
      
	      if(this.bdLogado!="logado"){
	      	app.viewLogin();
	      	
	      }

    }

    deslogarUusario(){
    	this.logado = "nao-logado";
    	localStorage.setItem("bdLogado","nao-logado");
    	localStorage.clear();
    }

}