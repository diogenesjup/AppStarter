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

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
     
    $sql = "SELECT * FROM imovel_campos WHERE id_tipo_imovel = '$idUsuario' ORDER BY nome_campo ASC";
	$result = $PDO->query( $sql );
	$campos = $result->fetchAll( PDO::FETCH_ASSOC );
    
	$data = array('sucesso' => "200", 'campos' => $campos);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>