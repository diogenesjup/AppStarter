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

$tipoImoveisNome = $_POST["tipoImoveisNome"];
$tipoImoveisFiltro = $_POST["tipoImoveisFiltro"];
$tipoImoveisLigacao = $_POST["tipoImoveisLigacao"];
$tipoImoveisIdLigacao = $_POST["tipoImoveisIdLigacao"];
$tipoImoveisLigacaoObrigatorio = $_POST["tipoImoveisLigacaoObrigatorio"];

$data_cadastro = date("d/m/Y");

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
     
     $sql = "INSERT INTO imovel_tipo(nome, visivel_filtro, id_ligacao, obrigatorio_ligacao) VALUES(:nome, :visivel_filtro, :id_ligacao, :obrigatorio_ligacao)";
	
	$stmt = $PDO->prepare( $sql );

	$stmt->bindParam( ':nome', $tipoImoveisNome );
	$stmt->bindParam( ':visivel_filtro', $tipoImoveisFiltro );
	$stmt->bindParam( ':id_ligacao', $tipoImoveisIdLigacao );
	$stmt->bindParam( ':obrigatorio_ligacao', $tipoImoveisLigacaoObrigatorio );
	 
	$result = $stmt->execute();
    
	$data = array('sucesso' => "200");

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>