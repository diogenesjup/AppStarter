<!--
#
# DIOGENES OLIVEIRA DOS SANTOS JUNIOR
# WWW.DIOGENESJUNIOR.COM.BR
# CONTATO@DIOGENESJUNIOR.COM.BR
#
-->
<!DOCTYPE html>
<html lang="pt-br"><head>
<?php require("head.php"); ?>

</head>
<body>



<!-- HEADER -->
<header id="header">
    
    <div class="container">
        <div class="row">
            
            <!-- LOGO -->
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-12 logo">
                <a href="#" title="Agendamento de reuniãp">
                    <img src="images/logo.png" alt="OrraMeu logo">
                </a>
            </div>
            <!-- LOGO -->

            <!-- MENUS -->
            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-12 menu-desktop">
                 
                <div class="row">
                    

                    <div class="col-xl-2 col-lg-2">
                            <!-- COLUNA --> 
                            <div class="col">
                                <div class="form-group has-search">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type="text" class="form-control" placeholder="Pesquisa">
                                </div> 
                            </div>
                            <!-- COLUNA -->
                    </div>
                    

                    <div class="col-xl-7 col-lg-7" style="padding-left: 5px;">
                    <div class="row">
                             <!-- COLUNA -->
                            <div class="col-xl-3 col-lg-3 menu-item-col">
                                <a href="dashboard.php" class="menu-1" title="DASHBOARD">
                                    <span class="icone"></span> DASHBOARD
                                </a>
                            </div>
                            <!-- COLUNA -->

                            <!-- COLUNA -->
                            <div class="col-xl-3 col-lg-3 menu-item-col">
                                <a href="usuarios.php" class="menu-2 ativo" title="USUÁRIOS">
                                    <span class="icone"></span> USUÁRIOS
                                </a>
                            </div>
                            <!-- COLUNA -->

                            <!-- COLUNA -->
                            <div class="col-xl-3 col-lg-3 menu-item-col">
                                <a href="agenda.php" class="menu-3" title="AGENDA">
                                    <span class="icone"></span> AGENDA
                                </a>
                            </div>
                            <!-- COLUNA -->

                            <!-- COLUNA -->
                            <div class="col-xl-3 col-lg-3 menu-item-col">
                               
                            </div>
                            <!-- COLUNA -->
                    </div>
                    </div>


                    
                    <div class="col-xl-3 col-lg-3" style="padding-left: 10px;padding-right: 0px;">
                        <div class="row">
                                <!-- COLUNA -->
                                <div class="col-xl-6 col-lg-6 offset-xl-1 offset-lg-1 profile-actions">
                                    <div class="btn-group">
                                      <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Admin geral
                                    <small>Zum Brasil</small>
                                      </button>
                                      <div class="dropdown-menu">
                                        <a href="editar-perfil.php" class="dropdown-item" title="Editar perfil">Editar perfil</a>
                                        <a href="logoff.php" class="dropdown-item" title="Sair">Sair</a>
                                      </div>
                                    </div>
                                </div>
                                <!-- COLUNA -->

                                <!-- COLUNA -->
                                <div class="col-xl-2 col-lg-2 notificacoes">
                                    <a href="javascript:void(0)" onclick="notificacoes()" title="Notificações">
                                        <img src="images/notificacoes.svg" alt="Suas notificações">
                                        <span>1</span>
                                    </a>
                                </div>
                                <!-- COLUNA -->
                        </div>
                    </div>

               </div>


            </div>
            <!-- MENUS -->

        </div>
    </div>

</header>
<!-- HEADER -->



<!-- Modal -->
<div class="modal fade" id="importarUsuarios" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Importar usuários</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">         

         <form action="importar-excel.php" method="post" enctype="multipart/form-data">
            
            <div class="form-group">
              <label>Selecione o arquivo</label>
              <input type="file" name="arquivo" required>
              <p><i>Apenas selecione arquivos com extensão <b>.xlsx</b></i></p>
            </div>

            <div class="form-group">
              <button type="submit" class="btn btn-primary">Importar arquivo</button>
            </div>

         </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>



<!-- CONTENT -->
<section class="content">
    
    <div class="container">
        
        <!-- METAS DA PÁGINA -->
        <div class="row metas-pagina">
          
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 coluna-um">
             <a href="javascript:void(0)" class="btn btn-primary" title="Adicionar usuário" data-toggle="modal" data-target="#importarUsuarios">
               <span class="icone-falso">+</span> IMPORTAR USUÁRIOS
             </a>
           </div>
           
           <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center coluna-dois titulo-pagina-interna">
              <h1><b>Usuários</b> - Agendamento de reunião</h1>
           </div>

           <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12 text-right coluna-tres">
                <form class="form-inline">
                  <div class="form-group mx-sm-3 mb-2">
                    <input type="text" class="form-control form-control-sm" placeholder="Faça uma pesquisa">
                  </div>
                  <button type="submit" class="btn btn-default btn-sm">BUSCAR</button>
                </form>
           </div>

        </div>
        <!-- METAS DA PÁGINA -->

        <!-- FERRAMENTAS DA PÁGINA -->
        <div class="row tools-pagina">
          
           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 coluna-um">
             <a href="#" title="Excluir selecionados">
               <span><i class="fa fa-trash-o" aria-hidden="true"></i></span> Excluir selecionados
             </a>
           </div>
           
           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-right coluna-dois">
             1 usuário cadastrado
           </div>

        </div>
        <!-- FERRAMENTAS DA PÁGINA -->

        <!-- TABELA DE CONTEUDOS -->
        <div class="row">
          <div class="col-12 tabela-de-conteudos">
              
              <div class="table-responsive">
                   
                   <table class="table table-hover">
                       
                       <thead>
                         <th>
                           &nbsp;
                         </th>
                         <th>
                           Nome
                         </th>
                         <th>
                           E-mail
                         </th>
                         <th>
                           DDD + número
                         </th>
                       </thead>

                       <tbody>
                         
                         <?php            

                              require("conexao.php");                   
                              
                              $sql = "SELECT * FROM usuarios_ar ORDER BY nome ASC";
                              $result = $PDO->query( $sql );
                              $dados = $result->fetchAll( PDO::FETCH_ASSOC );

                              $tot_usuarios = count($dados);

                              $a = 0;

                              while($a<$tot_usuarios):

                         ?>
                         
                               <!-- LINHA -->
                               <tr>
                                 <td>
                                   <input type="checkbox" class="form-check-input" name="item<?php echo $dados[$a]["id"]; ?>">
                                 </td>
                                 <td>
                                   <?php echo $dados[$a]["nome"]; ?>
                                 </td>
                                 <td>
                                   <?php echo $dados[$a]["email"]; ?>
                                 </td>
                                 <td>
                                   <?php echo $dados[$a]["telefone"]; ?>
                                 </td>
                               </tr>
                                <!-- LINHA -->

                          <?php 
                               $a++;
                             endwhile;
                          ?>

                       </tbody>

                   </table>

              </div>

          </div>
        </div>
        <!-- TABELA DE CONTEÚDOS -->

        <!-- FERRAMENTAS INFERIORES -->
        <div class="row tools-inferiores">
          <div class="col-12 text-right">
            <a href="javascript:void(0)" onclick="alert('Em desenvolvimento');" title="Baixar Dados e Excel (.xlsx)">
              Baixar Dados e Excel (.xlsx) <img src="images/excel.svg" alt="Baixar Dados e Excel (.xlsx)">
            </a>
          </div>
        </div>
        <!-- FERRAMENTAS INFERIORES -->

    </div>


</section>  
<!-- CONTENT -->


<?php require("footer.php"); ?>

<?php if($_GET["status"]=="sucesso"): ?>
<script type="text/javascript">
  alert("Usuário importados com sucesso");
</script>
<?php endif; ?>


    <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</body>
</html>
