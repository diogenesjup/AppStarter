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
$tags = $_POST["tags"];

$id_oferta = $_POST["id_oferta"];
$tipo = $_POST["tipo"];
$titulo = $_POST["titulo"];
$desc_oferta = $_POST["desc_oferta"];
$data_ini = $_POST["data_ini"];
$valor = $_POST["valor"];
$cachback = $_POST["cachback"];

$data_alteracao = date("d/m/Y H:i:s");

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

/**
*  ------------------------------------------------------------------------------------------------
*
*   ATUALIZAR OS DEFAULTS
*
*  ------------------------------------------------------------------------------------------------
*/
$sql = "UPDATE ofertas set titulo = :titulo, 
                      desc_oferta = :desc_oferta, 
                         data_ini = :data_ini, 
                            valor = :valor, 
                        cash_back = :cash_back, 
                   data_alteracao = :data_alteracao, 
                             tipo = :tipo, 
                            cupom = :cupom, 
                             tags = :tags 
                         WHERE id = :id";

$stmt = $PDO->prepare( $sql );

$stmt->bindParam( ':titulo', $titulo );
$stmt->bindParam( ':desc_oferta', $desc_oferta );
$stmt->bindParam( ':data_ini', $data_ini );
$stmt->bindParam( ':valor', $valor );
$stmt->bindParam( ':cash_back', $cachback );
$stmt->bindParam( ':data_alteracao', $data_alteracao );
$stmt->bindParam( ':tipo', $tipo );
$stmt->bindParam( ':cupom', $cupom );
$stmt->bindParam( ':tags', $tags );

$stmt->bindParam( ':id', $id_oferta );
 
$result = $stmt->execute();


/**
*  ------------------------------------------------------------------------------------------------
*
*   ATUALIZAR AS CATEGORIAS
*
*  ------------------------------------------------------------------------------------------------
*/

// APAGAR CATEGORIAS ANTERIORES
$sql = "DELETE FROM ofertas_categoria_link WHERE id_oferta = :id_oferta";
$stmt = $PDO->prepare( $sql );
$stmt->bindParam( ':id_oferta', $id_oferta );
 
$result = $stmt->execute();

$categorias = $_POST["categoriaOfertas"];

$a = 0;

while($a<count($categorias)):

    $cat = $categorias[$a];

    $sql = "INSERT INTO ofertas_categoria_link(id_oferta, id_categoria) VALUES(:id_oferta, :id_categoria)";

    $stmt = $PDO->prepare( $sql );

    $stmt->bindParam( ':id_oferta', $id_oferta );
    $stmt->bindParam( ':id_categoria', $cat );
    
    $result = $stmt->execute();

    $a++;

endwhile;


/**
*  ------------------------------------------------------------------------------------------------
*
*   CADASTRAR IMAGENS DA OFERTA
*
*  ------------------------------------------------------------------------------------------------
*/

// APAGAR IMAGENS ANTERIORES
$sql = "DELETE FROM oferta_galeria WHERE id_oferta = :id_oferta";
$stmt = $PDO->prepare( $sql );
$stmt->bindParam( ':id_oferta', $id_oferta );
 
$result = $stmt->execute();

$categorias = $_POST["categoriaOfertas"];

$galeria = $_POST["galeriaImgensImoveis"];

$tot_imagens = count($galeria);

$a = 0;

while($a<$tot_imagens):

    $link_arquivo = $galeria[$a];

    $sql = "INSERT INTO oferta_galeria(id_oferta, link_arquivo) VALUES(:id_oferta, :link_arquivo)";
    $stmt = $PDO->prepare( $sql );

    $stmt->bindParam( ':id_oferta', $id_oferta );
    $stmt->bindParam( ':link_arquivo', $link_arquivo );
    
    $result = $stmt->execute();

    $a++;
endwhile;


/**
*  ------------------------------------------------------------------------------------------------
*
*   CADASTRAR OS CAMPOS ADICIONAIS DA OFERTA
*
*  ------------------------------------------------------------------------------------------------
*/

// APAGAR CAMPOS VALORES ANTERIORES
$sql = "DELETE FROM ofertas_campos_valores WHERE id_oferta = :id_oferta";
$stmt = $PDO->prepare( $sql );
$stmt->bindParam( ':id_oferta', $id_oferta );
 
$result = $stmt->execute();

$sql = "SELECT * FROM ofertas_campos WHERE id_tipo_oferta = '$tipo'";
$result = $PDO->query( $sql );
$ofertas_campos = $result->fetchAll( PDO::FETCH_ASSOC );

$a = 0;

while($a < count($ofertas_campos)):

    $campo = $ofertas_campos[$a]["id"];
    $valor = $_POST[$campo];
    
    $sql = "INSERT INTO ofertas_campos_valores(id_campo, id_oferta, valor) VALUES(:id_campo, :id_oferta, :valor)";
    $stmt = $PDO->prepare( $sql );

    $stmt->bindParam( ':id_campo', $campo );
    $stmt->bindParam( ':id_oferta', $id_oferta );
    $stmt->bindParam( ':valor', $valor );
     
    $result = $stmt->execute();

    $a++;

endwhile;



/**
*  ------------------------------------------------------------------------------------------------
*
*   RETORNAR OS DADOS
*
*  ------------------------------------------------------------------------------------------------
*/
	$data = array('sucesso' => "200");

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;