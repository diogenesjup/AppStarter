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

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
    
    // RECUPERAR A LISTA DE CLIENTES
	$sql = "SELECT * FROM imoveis ORDER BY nome ASC";
	$result = $PDO->query( $sql );
	$imoveis = $result->fetchAll( PDO::FETCH_ASSOC );

    $a = 0;

	$data = array('sucesso' => "200", 'imoveis' => $imoveis);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>