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
$idOferta = $_POST["idOferta"];
$idUsuario = $_POST["idUsuario"];

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
    
    // RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM ofertas WHERE id = '$idOferta'";
	$result = $PDO->query( $sql );
	$oferta = $result->fetchAll( PDO::FETCH_ASSOC );

	


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   ATUALIZAR AS ESTATISTICAS DA OFERTA
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	$views = $oferta[0]["views"];
	$cliques = $oferta[0]["cliques"];

	if($views!="") $views++;
	if($cliques!="") $cliques++;

	if($views=="") $views = 1;
	if($cliques=="") $cliques = 1;

	$sql = "UPDATE ofertas set views = :views, cliques = :cliques WHERE id = :id";
	$stmt = $PDO->prepare( $sql );
	
	$stmt->bindParam( ':views', $views );
	$stmt->bindParam( ':cliques', $cliques );

	$stmt->bindParam( ':id', $idOferta );
	 
	$result = $stmt->execute();

	$link_final = $oferta[0]["link_final"];
	$link_final = $link_final."&uidgpr=".$idUsuario;

	$oferta[0]["link_final"] = $link_final;

	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   RETORNAR OS DADOS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	$data = array('sucesso' => "200", 'oferta' => $oferta);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>