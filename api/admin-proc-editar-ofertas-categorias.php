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

$id_categoria = $_POST["id_categoria"];

$nome = $_POST["nome"];
$descricao = $_POST["descricao"];

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

	$sql = "UPDATE ofertas_categoria set nome = :nome, descricao = :descricao, capa = :capa WHERE id = :id";
	
	$stmt = $PDO->prepare( $sql );

	$stmt->bindParam( ':nome', $nome );
	$stmt->bindParam( ':descricao', $descricao );
	$stmt->bindParam( ':capa', $imagem );

	$stmt->bindParam( ':id', $id_categoria );
	 
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