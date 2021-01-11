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
$idTipoOferta = $_POST["idTipoOferta"];

// FORMS ANTIGOS
$CamposOfertaId_array = $_POST["CamposOfertaId"];
$CamposOfertaNome_array = $_POST["CamposOfertaNome"];
$CamposOfertaTipo_array = $_POST["CamposOfertaTipo"];
$CamposOfertaObrigatorio_array = $_POST["CamposImoveisObrigatorio"];

// NOVOS FORMS
$CamposOfertaNomeNew_array = $_POST["CamposOfertaNomeNew"];
$CamposOfertaTipoNew_array = $_POST["CamposOfertaTipoNew"];
$CamposOfertaObrigatorioNew_array = $_POST["CamposOfertaObrigatorioNew"];

$data_cadastro = date("d/m/Y");

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
     
     $a = 0;
     $tot_campos = count($CamposOfertaNomeNew_array);
     
     // PRIMEIRO VAMOS INSERIR OS CAMPOS NOVOS
     while($a<$tot_campos):

     	$CamposOfertaNomeNew = $CamposOfertaNomeNew_array[$a];
		$CamposOfertaTipoNew = $CamposOfertaTipoNew_array[$a];
		$CamposOfertaObrigatorioNew = $CamposOfertaObrigatorioNew_array[$a];

     	if($CamposOfertaNomeNew!=""):
     	   
     	    $sql = "INSERT INTO ofertas_campos(id_tipo_oferta, tipo_campo, nome_campo, obrigatorio) VALUES(:id_tipo_oferta, :tipo_campo, :nome_campo, :obrigatorio)";
			$stmt = $PDO->prepare( $sql );
			
			$stmt->bindParam( ':id_tipo_oferta', $idTipoOferta );
			$stmt->bindParam( ':tipo_campo', $CamposOfertaTipoNew );
			$stmt->bindParam( ':nome_campo', $CamposOfertaNomeNew );
			$stmt->bindParam( ':obrigatorio', $CamposOfertaObrigatorioNew );
			 
			$result = $stmt->execute();

     	endif;
        
     	$a++;

     endwhile;

     // DEPOIS VAMOS ATUALIZAR OS CAMPOS JA CADASTRADOS
     $a = 0;
     $tot_campos = count($CamposOfertaNome_array);

     while($a<$tot_campos):

     	 $CamposOfertaId = $CamposOfertaId_array[$a];
		 $CamposOfertaNome = $CamposOfertaNome_array[$a];
		 $CamposOfertaTipo = $CamposOfertaTipo_array[$a];
		 $CamposOfertaObrigatorio = $CamposOfertaObrigatorio_array[$a];
         
         $sql = "UPDATE ofertas_campos set tipo_campo = :tipo_campo, nome_campo = :nome_campo, obrigatorio = :obrigatorio WHERE id = :id";
         $stmt = $PDO->prepare( $sql );
			
		 $stmt->bindParam( ':tipo_campo', $CamposOfertaTipo );
		 $stmt->bindParam( ':nome_campo', $CamposOfertaNome );
		 $stmt->bindParam( ':obrigatorio', $CamposOfertaObrigatorio );

		 $stmt->bindParam( ':id', $CamposOfertaId );
	 
		 $result = $stmt->execute();

     	$a++;
     endwhile;

     // DEPOIS VAMOS APAGAR OS CAMPOS JA CADASTRADOS QUE O USUARIO QUER REMOVER
     $a = 0;
     $tot_campos = count($CamposOfertaNome_array);

     while($a<$tot_campos):

     	 $CamposOfertaId = $CamposOfertaId_array[$a];
		 $CamposOfertaNome = $CamposOfertaNome_array[$a];
		 $CamposOfertaTipo = $CamposOfertaTipo_array[$a];
		 $CamposOfertaObrigatorio = $CamposOfertaObrigatorio_array[$a];

     	if($CamposOfertaNome==""):
        
	        $sql = "DELETE FROM ofertas_campos WHERE id = :id";
			$stmt = $PDO->prepare( $sql );

			$stmt->bindParam( ':id', $CamposOfertaId );

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