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

    $link = $_POST["dominioOferta"];

    $link = str_replace("www2.","",$link);
	$link = str_replace("www3.","",$link);
	$link = str_replace("www1.","",$link);
	$link = str_replace("www.","",$link);

	$base_url = parse_url($link);

	$link = $base_url["host"];

	// TAGS QUERY
	parse_str($base_url["query"], $query_array);
	$query_original = $base_url["query"];

	$sql = "SELECT * FROM dominios WHERE urldom LIKE '%" . $link . "%'";
	$result = $PDO->query( $sql );
	$dominios = $result->fetchAll( PDO::FETCH_ASSOC );

	$dominio = $dominios[0]["id"];
	$nome_dominio = $dominios[0]["nomeloja"];
	$logo = $dominios[0]["logo"];

	$data = array('sucesso' => "200", 'dominio' => $dominio, 'nome_dominio' => $nome_dominio, 'logo' => $logo);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;