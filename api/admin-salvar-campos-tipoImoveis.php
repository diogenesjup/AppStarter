<?php 
// PERMITIR O ACESSO DE QUALQUER ORIGEM
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
#define o encoding do cabeçalho para utf-8
header('Content-Type: application/json');

// CONEXÃO COM O BANCO DE DADOS
require("conexao.php");

// FUNÇÕES BÁSICAS
require("funcoes.php");

$token = $_POST["token"];
$tipoImoveisId = $_POST["tipoImoveisId"];

// FORMS ANTIGOS
$CamposImoveisId_array = $_POST["CamposImoveisId"];
$CamposImoveisNome_array = $_POST["CamposImoveisNome"];
$CamposImoveisTipo_array = $_POST["CamposImoveisTipo"];
$CamposImoveisObrigatorio_array = $_POST["CamposImoveisObrigatorio"];

// NOVOS FORMS
$CamposImoveisNomeNew_array = $_POST["CamposImoveisNomeNew"];
$CamposImoveisTipoNew_array = $_POST["CamposImoveisTipoNew"];
$CamposImoveisObrigatorioNew_array = $_POST["CamposImoveisObrigatorioNew"];

$data_cadastro = date("d/m/Y");

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
     
     $a = 0;
     $tot_campos = count($CamposImoveisNomeNew_array);
     
     // PRIMEIRO VAMOS INSERIR OS CAMPOS NOVOS
     while($a<$tot_campos):

     	$CamposImoveisNomeNew = $CamposImoveisNomeNew_array[$a];
		$CamposImoveisTipoNew = $CamposImoveisTipoNew_array[$a];
		$CamposImoveisObrigatorioNew = $CamposImoveisObrigatorioNew_array[$a];

     	if($CamposImoveisNomeNew!=""):
     	   
     	    $sql = "INSERT INTO imovel_campos(id_tipo_imovel, tipo_campo, nome_campo, obrigatorio) VALUES(:id_tipo_imovel, :tipo_campo, :nome_campo, :obrigatorio)";
			$stmt = $PDO->prepare( $sql );
			
			$stmt->bindParam( ':id_tipo_imovel', $tipoImoveisId );
			$stmt->bindParam( ':tipo_campo', $CamposImoveisTipoNew );
			$stmt->bindParam( ':nome_campo', $CamposImoveisNomeNew );
			$stmt->bindParam( ':obrigatorio', $CamposImoveisObrigatorioNew );
			 
			$result = $stmt->execute();

     	endif;
        
     	$a++;

     endwhile;

     // DEPOIS VAMOS ATUALIZAR OS CAMPOS JA CADASTRADOS
     $a = 0;
     $tot_campos = count($CamposImoveisNome_array);

     while($a<$tot_campos):

     	 $CamposImoveisId = $CamposImoveisId_array[$a];
		 $CamposImoveisNome = $CamposImoveisNome_array[$a];
		 $CamposImoveisTipo = $CamposImoveisTipo_array[$a];
		 $CamposImoveisObrigatorio = $CamposImoveisObrigatorio_array[$a];
         
         $sql = "UPDATE imovel_campos set tipo_campo = :tipo_campo, nome_campo = :nome_campo, obrigatorio = :obrigatorio WHERE id = :id";
         $stmt = $PDO->prepare( $sql );
			
		 $stmt->bindParam( ':tipo_campo', $CamposImoveisTipo );
		 $stmt->bindParam( ':nome_campo', $CamposImoveisNome );
		 $stmt->bindParam( ':obrigatorio', $CamposImoveisObrigatorio );

		 $stmt->bindParam( ':id', $CamposImoveisId );
	 
		 $result = $stmt->execute();

     	$a++;
     endwhile;

     // DEPOIS VAMOS APAGAR OS CAMPOS JA CADASTRADOS QUE O USUARIO QUER REMOVER
     $a = 0;
     $tot_campos = count($CamposImoveisNome_array);

     while($a<$tot_campos):

     	 $CamposImoveisId = $CamposImoveisId_array[$a];
		 $CamposImoveisNome = $CamposImoveisNome_array[$a];
		 $CamposImoveisTipo = $CamposImoveisTipo_array[$a];
		 $CamposImoveisObrigatorio = $CamposImoveisObrigatorio_array[$a];

     	if($CamposImoveisNome==""):
        
	        $sql = "DELETE FROM imovel_campos WHERE id = :id";
			$stmt = $PDO->prepare( $sql );

			$stmt->bindParam( ':id', $CamposImoveisId );

			$result = $stmt->execute();

	    endif;

        $a++;
     endwhile;

    
	$data = array('sucesso' => "200");

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>