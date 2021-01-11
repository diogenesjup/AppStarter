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
    
    // RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM ofertas WHERE deletada = 'SIM' ORDER BY id DESC";
	$result = $PDO->query( $sql );
	$ofertas = $result->fetchAll( PDO::FETCH_ASSOC );

	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   CALCULAR A DIFERENÇA DE DIAS DA OFERTA (VALIDAR A DATA)
	*
	*  ------------------------------------------------------------------------------------------------
	*/
	$a = 0;
	while($a<count($ofertas)):

		$data_ini = $ofertas[$a]["data_ini"];
		$data_fim = $ofertas[$a]["data_fim"];
		$data_hoje = date("Y-m-d");

		$diferenca = strtotime($data_fim) - strtotime($data_ini);
		$diferenca_datas = floor($diferenca / (60 * 60 * 24));

		$diferenca = strtotime($data_ini) - strtotime($data_hoje);
		$diferenca_data_hoje = floor($diferenca / (60 * 60 * 24));

		//$diferenca = strtotime($data_hoje) - strtotime($data_fim);
		//$diferenca_data_final = floor($diferenca / (60 * 60 * 24));

		$ofertas[$a]["diferenca_datas_ini_fim"] = $diferenca_datas;
		$ofertas[$a]["diferenca_datas_ini_hoje"] = $diferenca_data_hoje;
		//$ofertas[$a]["diferenca_datas_hoje_fim"] = $diferenca_data_final;


		$a++;
	endwhile;


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   OBTER AS CATEGORIAS DAS OFERTAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/
	$a = 0;
	while($a<count($ofertas)):

		$id_oferta = $ofertas[$a]["id"];

		$sql = "SELECT t1.id AS id_link,
		               t1.id_oferta,
					   t1.id_categoria,
					   t2.id,
					   t2.nome
		FROM ofertas_categoria_link AS t1 JOIN ofertas_categoria AS t2 
		ON t1.id_oferta = '$id_oferta' AND t1.id_categoria = t2.id";

		$result = $PDO->query( $sql );
		$categorias_oferta = $result->fetchAll( PDO::FETCH_ASSOC );

		$ofertas[$a]["categorias_link"] = $categorias_oferta;
		
		$a++;
	endwhile;


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   OBTER AS IMAGENS DAS OFERTAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/
	$a = 0;
	while($a<count($ofertas)):

		$id_oferta = $ofertas[$a]["id"];

		$sql = "SELECT * FROM oferta_galeria WHERE id_oferta = '$id_oferta'";
		$result = $PDO->query( $sql );
		$galeria = $result->fetchAll( PDO::FETCH_ASSOC );

		$ofertas[$a]["galeria"] = $galeria;
		
		$a++;
	endwhile;

	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   OBTER AS QUERYS DAS OFERTAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/
	$a = 0;
	while($a<count($ofertas)):

		$id_oferta = $ofertas[$a]["id"];

		$sql = "SELECT * FROM ofertas_query WHERE id_oferta = '$id_oferta'";
		$result = $PDO->query( $sql );
		$querys = $result->fetchAll( PDO::FETCH_ASSOC );

		$ofertas[$a]["querys"] = $querys;
		
		$a++;
	endwhile;

	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   RETORNAR OS DADOS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	$data = array('sucesso' => "200", 'ofertas' => $ofertas);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>