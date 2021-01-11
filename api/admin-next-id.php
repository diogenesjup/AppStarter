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

    // RECUPERAR A LISTA DE CLIENTES
	$sql = "SELECT * FROM imoveis ORDER BY id DESC LIMIT 1";
	$result = $PDO->query( $sql );
	$busca = $result->fetchAll( PDO::FETCH_ASSOC );
    
    if(count($busca)>0):
	
			$next = $busca[0]["id"];

			$next = $next++; 
    
    else:

    	    $next = 1;

    endif;

	$data = array('sucesso' => "200", 'next' => $next);

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>