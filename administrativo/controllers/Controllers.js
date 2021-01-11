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
             
            this.urlDom = "http://127.0.0.1:8080/garimpeiros/www/administrativo";
            this.urlApi = "http://127.0.0.1:8080/garimpeiros/www/api/";
            this.urlCdn = "http://127.0.0.1:8080/garimpeiros/www/cdn/";

        }
        if(ambiente=="PRODUCAO"){

            this.urlDom = "https://garimpeiros.com.br/administrativo/";
            this.urlApi = "https://garimpeiros.com.br/api/";
            this.urlCdn = "https://garimpeiros.com.br/cdn/";

        }

        this.token = token;
        this.tokenSms = tokenSms;
        
        //  PREPARAR PAREMETROS
        $("#fileForm").attr("action",this.urlApi+"upload-imagens.php");
        $("#tokenUpload").val(token);
        
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

        // BUSCAR OFERTAS CADASTRADAS
        this.models.estats();

        // VERIFICAR SE O USUÁRIO ESTÄ LOGADO
        this.sessao.verificarLogado();

    }

    inicio(){

        this.views.viewPrincipal();
        this.models.estats();

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
        app.viewLogin();

        $("header").css("opacity","0");
        location.reload();

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

    viewLoginEmailSenha(){
        this.views.viewLoginEmailSenha();
    }

    // CONTROLE DE ABRIR OU FECHAR O SIDEMENU
    abrirSideMenu(){
         
         if($(".sidemenu").hasClass("aberto")){
            
            $(".sidemenu").removeClass("aberto");
         
         }else{
         
            $(".sidemenu").addClass("aberto");
         
         }

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


    statusApi(){
      
      this.views.statusApi();

    }

    amazon(){
      
      aviso("Estamos carregando...","Por favor, aguarde...");
      this.models.amazon();

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
      
      this.views.dominios();
      this.models.dominios();

    }

    editarDominio(idDominio){

      this.views.editarDominio(idDominio);
      this.models.editarDominio(idDominio);

    }

    perguntarRemoverDominios(id){

        confirmacao("Tem certeza que deseja remover esse domínio?",
                    "Essa ação não pode ser revertida",
                    `app.removerDominios(${id})`,
                    "Remover");

    }

    removerDominios(id){

        this.models.removerDominios(id);

    }

    destacarDominio(seletor,id){

      console.log("ESSE É O ID QUE VAMOS DESTACAR DOMINIO: "+id);

      if($(seletor).is(":checked")){

         console.log("CAMPO SELECIONADO");
         this.models.destacarDominio(id,"sim");
      
      }else{
      
         console.log("CAMPO NÃO ESTÁ SELECIONADO");
         this.models.destacarDominio(id,"nao");
      
      }
        
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
      
      this.views.banners();
      this.models.banners();

    }

    editarBanner(idBanner){

      this.views.editarBanner(idBanner);
      this.models.editarBanner(idBanner);

    }

    perguntarRemoverBanner(id){

        confirmacao("Tem certeza que deseja remover esse banner?",
                    "Essa ação não pode ser revertida",
                    `app.removerBanner(${id})`,
                    "Remover");

    }

    removerBanner(id){

        this.models.removerBanner(id);

    }

    destacarBanner(seletor,id){

      console.log("ESSE É O ID QUE VAMOS DESTACAR BANNER: "+id);

      if($(seletor).is(":checked")){

         console.log("CAMPO SELECIONADO");
         this.models.destacarBanner(id,"sim");
      
      }else{
      
         console.log("CAMPO NÃO ESTÁ SELECIONADO");
         this.models.destacarBanner(id,"nao");
      
      }
        
    }


    entidadeBannerInterna(tipoBannerEntidade){

        if(tipoBannerEntidade!=""){

            $("#entidadeInterna").fadeIn(500);
            this.models.entidadeBannerInterna(tipoBannerEntidade);
        
        }else{
        
            $("#entidadeInterna").fadeOut(500);
        
        }
         
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

       this.views.camposOfertas(idTipoOferta,nomeTipoOferta);
       this.models.camposOfertas(idTipoOferta);
        
    }

    appendNewCamposOfertas(){
        
        this.views.appendNewCamposOfertas();

    }

    appendCadastradosCamposOfertas(campos){
       
       this.views.appendCadastradosCamposOfertas(campos);

    }

    procEditarCamposOfertas(){
        
        this.models.procEditarCamposOfertas();

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
      
      this.views.ofertasCategorias();
      this.models.ofertasCategorias();

    }

    editarOfertasCategorias(idCategoria){

      this.views.editarOfertasCategorias(idCategoria);
      this.models.editarOfertasCategorias(idCategoria);

    }

    perguntarRemoverOfertasCategorias(id){

        confirmacao("Tem certeza que deseja remover essa categoria de oferta?",
                    "Essa ação não pode ser revertida",
                    `app.removerOfertasCategorias(${id})`,
                    "Remover");

    }

    removerOfertasCategorias(id){

        this.models.removerOfertasCategorias(id);
        
    }






/**
*  ------------------------------------------------------------------------------------------------
*
*
*   OUTROS CONTROLLERS
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
        $("header").addClass("nao-logado");
    }

    viewUploadFoto(){
        this.views.viewUploadFoto();
        this.views.desativarTodosMenus();
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

       this.views.editarPerfil();
       this.models.editarPerfil();

    }
    procEditarPerfil(){
       
       this.models.procEditarPerfil();

    }




    
/**
*  ------------------------------------------------------------------------------------------------
*
*
*   FILTRO TABELA GERAIS
*
*
*  ------------------------------------------------------------------------------------------------
*/
filtrotabela(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabela');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoTabela");

                  li = ul.getElementsByTagName('tr');

                   for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }

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
       
       this.views.acessosAdmin();
       this.models.acessosAdmin();

    }

    popularAcessosAdmin(dados){
        
        this.views.popularAcessosAdmin(dados);

    }

    filtrotabelaAcessosAdmin(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabelaAcessosAdmin');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoAcessosAdmin");

                  li = ul.getElementsByTagName('tr');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }
     }

    adicionarAcessoAdmin(){
         
         this.views.adicionarAcessoAdmin();

    }
    procAdicionarAcessoAdmin(){

        this.models.procAdicionarAcessoAdmin();

    }
    editarAcessoAdmin(id){
         
         console.log("VAMOS EDITAR O USUÁRIO: "+id);

         this.views.editarAcessoAdmin();
         this.models.editarAcessoAdmin(id);

    }
    procEditarAcessoAdmin(){
         
         this.models.procEditarAcessoAdmin();

    }
    perguntarRemover(id){

        confirmacao("Tem certeza que deseja remover esse usuário administrativo?",
                    "Essa ação não pode ser revertida",
                    `app.removerAcessoAdmin(${id})`,
                    "Remover");

    }
    removerAcessoAdmin(id){
        this.models.removerAcessoAdmin(id);
    }





/**
*  ------------------------------------------------------------------------------------------------
*
*
*   CLIENTES / USUARIOS APP
*
*
*  ------------------------------------------------------------------------------------------------
*/
    clientes(){
       
       this.views.clientes();
       this.models.clientes();

    }

    popularClientes(dados){
        
        this.views.popularClientes(dados);

    }

    filtrotabelaClientes(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabelaClientes');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoClientes");

                  li = ul.getElementsByTagName('tr');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }
     }

    adicionarClientes(){
         
         this.views.adicionarClientes();
         this.models.adicionarClientesListaCorretores();

    }
    popularClientesListaCorretores(dados){

        this.views.popularClientesListaCorretores(dados);

    }
    procAdicionarClientes(){

        this.models.procAdicionarClientes();

    }
    editarClientes(id){
         
         console.log("VAMOS EDITAR O CLIENTE: "+id);

         this.views.editarClientes();
         this.models.editarClientes(id);

    }
    procEditarClientes(){
         
         this.models.procEditarClientes();

    }
    perguntarRemoverClientes(id){

        confirmacao("Tem certeza que deseja remover esse cliente?",
                    "Essa ação não pode ser revertida",
                    `app.removerClientes(${id})`,
                    "Remover");

    }
    removerClientes(id){
        this.models.removerClientes(id);
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
           
           this.views.ofertas();
           this.models.ofertas(filtro);

    }

    ofertasLixeira(){

           this.views.ofertasLixeira();
           this.models.ofertasLixeira();

    }

    ofertasDominio(idDominio,nomeDominio,logoDominio){

        this.views.ofertasDominio(idDominio,nomeDominio,logoDominio);
        this.models.ofertasDominio(idDominio,nomeDominio,logoDominio);

    }

    popularOfertas(dados){
        
        this.views.popularOfertas(dados);

    }

    filtrotabelaOfertas(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabelaOfertas');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("conteudoOfertas");

                  li = ul.getElementsByTagName('tr');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }
     }

    adicionarOfertas(){
         
         this.views.adicionarOfertas();
         this.models.adicionarOfertas();

    }

    validarDominioNegocio(dominioOferta){
         
        this.models.validarDominioNegocio(dominioOferta);

    }

    buscarCamposOfertas(tipoOferta){

      console.log("VAMOS BUSCAR OS CAMPOS DO TIPO DE OFERTA: "+tipoOferta);
      this.models.buscarCamposTipoOfertas(tipoOferta);

    }

    buscaCep(seletor){
      
      var cep = seletor.value;
      this.models.buscaCep(cep);

    }
    
    procAdicionarOferta(){

        this.models.procAdicionarOferta();

    }
    editarOferta(id){
         
         console.log("VAMOS EDITAR A OFERTA: "+id);

         this.views.editarOferta(id);

         // CARREGAR OS DADOS JA CADASTRADOS DO TIPO DE IMÓVEL
         this.models.editarOferta(id);

    }
    procEditarOfertas(){
         
         this.models.procEditarOfertas();

    }
    perguntarRemoverOferta(id){

        confirmacao("Tem certeza que deseja remover essa oferta?",
                    "A Oferta será enviada para a lixeira.",
                    `app.removerOfertas(${id})`,
                    "Remover");

    }
    removerOfertas(id){
        this.models.removerOfertas(id);
    }




    perguntarRestaurarOferta(id){

        confirmacao("Tem certeza que deseja restaurar essa oferta?",
                    "A Oferta será reativada em toda a platafroma.",
                    `app.restaurarOfertas(${id})`,
                    "Restaurar");

    }
    restaurarOfertas(id){
        this.models.restaurarOfertas(id);
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

        // REMOVER A CLASSE QUE IMPEDE QUE O RODAPÉ SEJA ADICIONADO AO CALCULO DA ALTURA
        $("header").removeClass("nao-logado");
        
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