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

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

/**
*  ------------------------------------------------------------------------------------------------
*
*   TRATAR LINKS
*
*  ------------------------------------------------------------------------------------------------
*/
$link = $_POST["link"];
$link_prova = $_POST["link"];
//$link = str_replace("http://","",$link);
//$link = str_replace("https://","",$link);
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
$cashback_gpr = $dominios[0]["cashback_gpr"];

/**
*  ------------------------------------------------------------------------------------------------
*
*   TRATAR TIPO DA OFERTA
*
*  ------------------------------------------------------------------------------------------------
*/
$tipo = $_POST["tipo"]; // TIPO DE OFERTA
// 1 = OFERTA COMUM
// 2 = OFERTA CUPOM

if($tipo!=2) $cupom = "";
if($tipo==2) $cupom = $_POST["cupom"];


/**
*  ------------------------------------------------------------------------------------------------
*
*   CADASTRAR OS DEFAULTS
*
*  ------------------------------------------------------------------------------------------------
*/

$titulo = $_POST["titulo"];
$desc_oferta = $_POST["desc_oferta"];
$instrucoes = $_POST["instrucoes"];
$data_ini = $_POST["data_ini"];
$data_fim = $_POST["data_fim"];
$valor = $_POST["valor"];
$valor_promo = $_POST["valor_promo"];
$cachback = $_POST["cachback"];

$tags = $_POST["tags"];

$data_cadastro = date("d/m/Y");
$status = "A";
     
    $sql = "INSERT INTO ofertas(id_usuario, 
    titulo, 
    link, 
    link_prova,
    id_dominio, 
    loja, 
    desc_oferta, 
    data_ini, 
    data_fim, 
    valor, 
    valor_promo, 
    cash_back, 
    cash_back_gpr, 
    data_pub,  
    status, 
    tipo, 
    cupom, 
    instrucoes,
    tags,
    query_original) VALUES(:id_usuario, 
    :titulo, 
    :link, 
    :link_prova,
    :id_dominio, 
    :loja, 
    :desc_oferta, 
    :data_ini, 
    :data_fim, 
    :valor, 
    :valor_promo, 
    :cash_back, 
    :cash_back_gpr, 
    :data_pub,  
    :status, 
    :tipo, 
    :cupom, 
    :instrucoes,
    :tags,
    :query_original)";
    $stmt = $PDO->prepare( $sql );

    $stmt->bindParam( ':id_usuario', $idUsuario );
    $stmt->bindParam( ':titulo', $titulo );
    $stmt->bindParam( ':link', $link );
    $stmt->bindParam( ':link_prova', $link_prova );
    $stmt->bindParam( ':id_dominio', $dominio );
    $stmt->bindParam( ':loja', $nome_dominio );
    $stmt->bindParam( ':desc_oferta', $desc_oferta );
    $stmt->bindParam( ':data_ini', $data_ini );
    $stmt->bindParam( ':data_fim', $data_fim );
    $stmt->bindParam( ':valor', $valor );
    $stmt->bindParam( ':valor_promo', $valor_promo );
    $stmt->bindParam( ':cash_back', $cachback );
    $stmt->bindParam( ':cash_back_gpr', $cashback_gpr );
    $stmt->bindParam( ':data_pub', $data_cadastro );
    $stmt->bindParam( ':status', $status );
    $stmt->bindParam( ':tipo', $tipo );
    $stmt->bindParam( ':cupom', $cupom );
    $stmt->bindParam( ':instrucoes', $instrucoes );
    $stmt->bindParam( ':tags', $tags );
    $stmt->bindParam( ':query_original', $query_original );
    

    $result = $stmt->execute();


/**
*  ------------------------------------------------------------------------------------------------
*
*   RECUPERAR O ID DA OFERTA INSERIDA
*
*  ------------------------------------------------------------------------------------------------
*/

$sql = "SELECT * FROM ofertas ORDER BY id DESC LIMIT 1";
$result = $PDO->query( $sql );
$ofertas = $result->fetchAll( PDO::FETCH_ASSOC );

$id_oferta = $ofertas[0]["id"];


/**
*  ------------------------------------------------------------------------------------------------
*
*   CADASTRAR IMAGENS DA OFERTA
*
*  ------------------------------------------------------------------------------------------------
*/

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
*   CADASTRAR AS CATEGORIAS
*
*  ------------------------------------------------------------------------------------------------
*/
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
*   CADASTRAR AS QUERYS DA URL
*
*  ------------------------------------------------------------------------------------------------
*/
$a = 0;

$q = explode("&",$query_original);

while($a<count($q)):

     $t = explode("=",$q[$a]);
     $chave = $t[0];
     $valor = $t[1];

     $sql = "INSERT INTO ofertas_query(id_oferta, chave, valor) VALUES(:id_oferta, :chave, :valor)";
     $stmt = $PDO->prepare( $sql );

     $stmt->bindParam( ':id_oferta', $id_oferta );
     $stmt->bindParam( ':chave', $chave );
     $stmt->bindParam( ':valor', $valor );
    
     $result = $stmt->execute();
    
    $a++;
endwhile;


/**
*  ------------------------------------------------------------------------------------------------
*
*   CONSTRUIR E ATUALIZAR LINK FINAL
*
*  ------------------------------------------------------------------------------------------------
*/
switch ($dominio) {
    // SE FOR AMAZON
    case 14:
        $link_final = url_final_amazon($link_prova,$id_oferta);
        break;
    // SE NÃO HOUVER MATCH COM NENHUM DOMÍNIO, SERÁ ADICIONADO A URL NA INTEGRA
    default:
       $link_final = $link_prova;
}


$sql = "UPDATE ofertas set link_final = :link_final WHERE id = :id";
$stmt = $PDO->prepare( $sql );

$stmt->bindParam( ':link_final', $link_final );
$stmt->bindParam( ':id', $id_oferta );
 
$result = $stmt->execute();


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

?>