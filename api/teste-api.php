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

		$sql = "SELECT * FROM api WHERE id = 1";
		$result = $PDO->query( $sql );
		$dados = $result->fetchAll( PDO::FETCH_ASSOC );

		if($dados[0]["status"]==200):

			$data = array('sucesso' => "200", 'liberarPaidAndroid' => "sim", 'liberarPaidIOS' => "nao", 'termosdeuso' => $dados[0]["termos"]);

		else:

			$data = array('sucesso' => "500", 'liberarPaidAndroid' => "sim", 'liberarPaidIOS' => "nao");

		endif;

		$json_string = json_encode($data, JSON_PRETTY_PRINT);

		echo $json_string;

else:
        
        $data = array('sucesso' => "403", 'msg' => "unauthorized");

        $json_string = json_encode($data, JSON_PRETTY_PRINT);

		echo $json_string;


endif;

?>