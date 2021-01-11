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
    

    /**
	*  ------------------------------------------------------------------------------------------------
	*
	*   OFERTAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

    // RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM ofertas WHERE deletada IS NULL ORDER BY id DESC";
	$result = $PDO->query( $sql );
	$ofertas = $result->fetchAll( PDO::FETCH_ASSOC );


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   OFERTAS NAO MAPEADAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

    // RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM ofertas WHERE id_dominio IS NULL AND deletada IS NULL ORDER BY id DESC";
	$result = $PDO->query( $sql );
	$ofertas_n_map = $result->fetchAll( PDO::FETCH_ASSOC );


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   USUARIOS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

    // RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM usuarios ORDER BY id DESC";
	$result = $PDO->query( $sql );
	$usuarios = $result->fetchAll( PDO::FETCH_ASSOC );


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   RETORNAR OS DADOS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	$data = array('sucesso' => "200", 'ofertas' => count($ofertas), 'ofertas_n_map' => count($ofertas_n_map), 'suporte' => 0, 'denuncias' => 0, 'usuarios' => count($usuarios));

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>