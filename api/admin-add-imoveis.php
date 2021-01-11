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

$imoveisNome = $_POST["imoveisNome"];
$imoveisRef = $_POST["imoveisRef"];
$imoveisTipo = $_POST["imoveisTipo"];

$desc_curta = $_POST["desc_curta"];
$desc_longa = $_POST["desc_longa"];
$cep = $_POST["cep"];
$endereco = $_POST["endereco"];
$bairro = $_POST["bairro"];
$cidade = $_POST["cidade"];
$estado = $_POST["estado"];
$iframe_mapa = $_POST["iframe_mapa"];
$custom_js = $_POST["custom_js"];

$id_pagto1 = $_POST["id_pagto1"];
$id_pagto2 = $_POST["id_pagto2"];
$id_pagto3 = $_POST["id_pagto3"];

if($id_pagto1=="") $id_pagto1 = 0;
if($id_pagto2=="") $id_pagto2 = 0;
if($id_pagto3=="") $id_pagto3 = 0;


$desc_pagto = $_POST["desc_pagto"];


if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
     
/**
*  ------------------------------------------------------------------------------------------------
*
*
*   INSERIR OS DEFAULTS
*
*
*  ------------------------------------------------------------------------------------------------
*/
     $sql = "INSERT INTO imoveis(nome, 
                                      ref, 
                               desc_curta, 
                               desc_longa, 
                                  endereco, 
                                    bairro, 
                                    cidade, 
                                    estado, 
                                       cep, 
                               iframe_mapa, 
                                 custom_js, 
                             data_cadastro, 
                                 id_pagto1, 
                                 id_pagto2, 
                                 id_pagto3, 
                                desc_pagto) VALUES(:nome, 
                                      :ref, 
                               :desc_curta, 
                               :desc_longa, 
                                 :endereco, 
                                   :bairro, 
                                   :cidade, 
                                   :estado, 
                                      :cep, 
                              :iframe_mapa, 
                                :custom_js, 
                            :data_cadastro, 
                                :id_pagto1, 
                                :id_pagto2, 
                                :id_pagto3, 
                               :desc_pagto)";
	
	$stmt = $PDO->prepare( $sql );

	$stmt->bindParam( ':nome', $imoveisNome );
	$stmt->bindParam( ':ref', $imoveisRef );
	$stmt->bindParam( ':desc_curta', $desc_curta );
	$stmt->bindParam( ':desc_longa', $desc_longa );
	$stmt->bindParam( ':endereco', $endereco );
	$stmt->bindParam( ':bairro', $bairro );
	$stmt->bindParam( ':cidade', $cidade );
	$stmt->bindParam( ':estado', $estado );
	$stmt->bindParam( ':cep', $cep );
	$stmt->bindParam( ':iframe_mapa', $iframe_mapa );
	$stmt->bindParam( ':custom_js', $custom_js );
	$stmt->bindParam( ':data_cadastro', $data_cadastro );
	$stmt->bindParam( ':id_pagto1', $id_pagto1 );
	$stmt->bindParam( ':id_pagto2', $id_pagto2 );
	$stmt->bindParam( ':id_pagto3', $id_pagto3 );
	$stmt->bindParam( ':desc_pagto', $desc_pagto );
	 
	$result = $stmt->execute();

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   RECUPERAR O ID
*
*
*  ------------------------------------------------------------------------------------------------
*/
	$sql = "SELECT * FROM imoveis ORDER BY id DESC LIMIT 1";
	$result = $PDO->query( $sql );
	$busca = $result->fetchAll( PDO::FETCH_ASSOC );

	$id_imovel = $busca[0]["id"];



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   PROCESSAR AS IMAGENS
*
*
*  ------------------------------------------------------------------------------------------------
*/
$imagens = $_POST["galeriaImgensImoveis"];
$tot_imagens = count($imagens);

$a = 0;

while($a<$tot_imagens):

	$img = $imagens[$a];

	$sql = "INSERT INTO imovel_galeria(id_imovel, link_arquivo) VALUES(:id_imovel, :link_arquivo)";
	$stmt = $PDO->prepare( $sql );

	$stmt->bindParam( ':id_imovel', $id_imovel );
	$stmt->bindParam( ':link_arquivo', $img );
	 
	$result = $stmt->execute();

	$a++;

endwhile;

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   RECUPERAR AS IMAGENS INSERIDSS
*
*
*  ------------------------------------------------------------------------------------------------
*/

$sql = "SELECT * FROM imovel_galeria WHERE id_imovel = '$id_imovel'";
$result = $PDO->query( $sql );
$imovel_galeria = $result->fetchAll( PDO::FETCH_ASSOC );



/**
*  ------------------------------------------------------------------------------------------------
*
*
*   PROCESSAR OS CAMPOS ADICIONAIS POR TIPO DE IMOVEL
*
*
*  ------------------------------------------------------------------------------------------------
*/
$sql = "SELECT * FROM imovel_campos WHERE id = '$imoveisTipo'";
$result = $PDO->query( $sql );
$campos = $result->fetchAll( PDO::FETCH_ASSOC );

$tot_campos = count($campos);

$a = 0;
while($a<$tot_campos):

     if($campos[$a]["id"]==$_POST[$campos[$a]["id"]]):
         
         $id_campo = $campos[$a]["id"];
         $valor_campo = $_POST[$campos[$a]["id"]];

         $sql = "INSERT INTO imovel_campos_valores(id_campo, id_imovel, valor) VALUES(:id_campo, :id_imovel, :valor)";
		 $stmt = $PDO->prepare( $sql );

		 $stmt->bindParam( ':id_campo', $id_campo );
		 $stmt->bindParam( ':id_imovel', $id_imovel );
		 $stmt->bindParam( ':valor', $valor_campo );
		 
		 $result = $stmt->execute();

     endif;

	$a++;
endwhile;

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   RECUPERAR OS CAMPOS INSERIDOS
*
*
*  ------------------------------------------------------------------------------------------------
*/

$sql = "SELECT * FROM imovel_campos_valores WHERE id_imovel = '$id_imovel'";
$result = $PDO->query( $sql );
$imovel_campos_valores = $result->fetchAll( PDO::FETCH_ASSOC );


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   RETORNAR O RESULTADO
*
*
*  ------------------------------------------------------------------------------------------------
*/

    
	$data = array('sucesso' => "200", 
		          'imovel' => $busca, 
		          'imovel_galeria' => $imovel_galeria, 
		          'imovel_campos_valores' => $imovel_campos_valores);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>