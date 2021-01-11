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

$idOferta = $_POST["idOferta"];
$token = $_POST["token"];

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

	$sql = "SELECT * FROM ofertas WHERE id = '$idOferta'";
	$result = $PDO->query( $sql );
	$oferta = $result->fetchAll( PDO::FETCH_ASSOC );


	$tipo = $oferta[0]["tipo"];
	$id_dominio = $oferta[0]["id_dominio"];

	$sql = "SELECT * FROM dominios WHERE id = '$id_dominio'";
	$result = $PDO->query( $sql );
	$dominio = $result->fetchAll( PDO::FETCH_ASSOC );
    
    $has_dom = "nao";
	if(count($dominio)>0){

		$img_dom = $dominio[0]["logo"];
		$nome_dom = $dominio[0]["nomeloja"];

		$has_dom = "sim";

	}



	$sql = "SELECT * FROM ofertas_campos WHERE id_tipo_oferta = '$tipo'";
	$result = $PDO->query( $sql );
	$ofertas_campos = $result->fetchAll( PDO::FETCH_ASSOC );


	$sql = "SELECT * FROM ofertas_campos_valores WHERE id_oferta = '$idOferta'";
	$result = $PDO->query( $sql );
	$ofertas_campos_valores = $result->fetchAll( PDO::FETCH_ASSOC );

    
    $sql = "SELECT * FROM ofertas_categoria_link WHERE id_oferta = '$idOferta'";
	$result = $PDO->query( $sql );
	$ofertas_categoria_link = $result->fetchAll( PDO::FETCH_ASSOC );



	$sql = "SELECT * FROM ofertas_categoria ORDER BY nome ASC";
	$result = $PDO->query( $sql );
	$categorias = $result->fetchAll( PDO::FETCH_ASSOC );


	$sql = "SELECT * FROM ofertas_query WHERE id_oferta = '$idOferta'";
	$result = $PDO->query( $sql );
	$ofertas_query = $result->fetchAll( PDO::FETCH_ASSOC );


	$sql = "SELECT * FROM oferta_galeria WHERE id_oferta = '$idOferta'";
	$result = $PDO->query( $sql );
	$oferta_galeria = $result->fetchAll( PDO::FETCH_ASSOC );


	$data = array('sucesso' => "200", 
		          'idOferta' => $idOferta,
		          'oferta' => $oferta,
		          'campos' => $ofertas_campos,
		          'ofertas_campos_valores' => $ofertas_campos_valores,
		          'ofertas_categoria_link' => $ofertas_categoria_link,
		          'ofertas_query' => $ofertas_query,
		          'oferta_galeria' => $oferta_galeria,
                  'img_dom' => $img_dom,
				  'has_dom' => $has_dom,
				  'nome_dom' => $nome_dom,
				  'categorias' => $categorias);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>