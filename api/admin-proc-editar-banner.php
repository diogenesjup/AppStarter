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
$idUsuario = $_POST["idUsuario"];

$data_cadastro = date("d/m/Y");

$id_banner = $_POST["id_banner"];

$nome = $_POST["nome"];
$link_destino = $_POST["link_destino"];
$tipo_link_destino = $_POST["tipo_link_destino"];
$link_interno = $_POST["link_interno"];
$tipo = $_POST["tipo"];

if($tipo_link_destino != ""):

  $link_interno_nome = $_POST["link_interno_nome"];

endif;

$imagens = $_POST["galeriaImgensImoveis"];
$imagem = $imagens[0];

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
     
/**
*  ------------------------------------------------------------------------------------------------
*
*
*   ATUALIZAR AS INFORMAÇÕES
*
*
*  ------------------------------------------------------------------------------------------------
*/

	$sql = "UPDATE banners set nome = :nome, 
	                   link_destino = :link_destino, 
	              tipo_link_destino = :tipo_link_destino, 
	                           tipo = :tipo, 
	                   link_interno = :link_interno, 
	              link_interno_nome = :link_interno_nome,
                             imagem = :imagem
                           WHERE id = :id";
	
	$stmt = $PDO->prepare( $sql );

	$stmt->bindParam( ':nome', $nome );
	$stmt->bindParam( ':link_destino', $link_destino );
	$stmt->bindParam( ':tipo_link_destino', $tipo_link_destino );
	$stmt->bindParam( ':tipo', $tipo );
	$stmt->bindParam( ':link_interno', $link_interno );
	$stmt->bindParam( ':link_interno_nome', $link_interno_nome );
	$stmt->bindParam( ':imagem', $imagem );

	$stmt->bindParam( ':id', $id_banner );
	 
	$result = $stmt->execute();

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   RETORNAR O RESULTADO
*
*
*  ------------------------------------------------------------------------------------------------
*/
    
	$data = array('sucesso' => "200");

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>