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

$id_dominio = 14;

$capaOferta = $_POST["capaOferta"];
$urlOferta = $_POST["urlOferta"];
$tituloOferta = $_POST["tituloOferta"];
$valorOferta = $_POST["valorOferta"];
$descontoOferta = $_POST["descontoOferta"];

$data_cadastro = date("d/m/Y H:i:s");


if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
     
/**
*  ------------------------------------------------------------------------------------------------
*
*   TRATAR LINKS
*
*  ------------------------------------------------------------------------------------------------
*/
$link = $urlOferta;
$link_prova = $urlOferta;
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
$tipo = "1";


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
$data_ini = date("Y-m-d");
$valor = $_POST["valor"];


$status = "A";
     
    $sql = "INSERT INTO ofertas(id_usuario, 
    titulo, 
    link, 
    link_prova,
    link_final,
    id_dominio, 
    loja, 
    desc_oferta, 
    data_ini, 
    valor, 
    cash_back_gpr, 
    data_pub,  
    status, 
    tipo, 
    query_original) VALUES(:id_usuario, 
    :titulo, 
    :link, 
    :link_prova,
    :link_final,
    :id_dominio, 
    :loja, 
    :desc_oferta, 
    :data_ini, 
    :valor, 
    :cash_back_gpr, 
    :data_pub,  
    :status, 
    :tipo, 
    :query_original)";
    $stmt = $PDO->prepare( $sql );

	$valor = str_replace("R$", "", $valorOferta);
    $desc_oferta = "Oferta com ".$descontoOferta." de desconto.";

    $stmt->bindParam( ':id_usuario', $idUsuario );
    $stmt->bindParam( ':titulo', $tituloOferta );
    $stmt->bindParam( ':link', $link );
    $stmt->bindParam( ':link_prova', $urlOferta );
    $stmt->bindParam( ':link_final', $urlOferta );
    $stmt->bindParam( ':id_dominio', $dominio );
    $stmt->bindParam( ':loja', $nome_dominio );
    $stmt->bindParam( ':desc_oferta', $desc_oferta );
    $stmt->bindParam( ':data_ini', $data_ini );
    $stmt->bindParam( ':valor', $valor );
    $stmt->bindParam( ':cash_back_gpr', $cashback_gpr );
    $stmt->bindParam( ':data_pub', $data_cadastro );
    $stmt->bindParam( ':status', $status );
    $stmt->bindParam( ':tipo', $tipo );
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
    
    $arquivo = 'XXX-GARIMPEIROS-'.date("dmYHisu").'.jpg';

    copy($capaOferta, '../cdn/'.$arquivo);

    $link_arquivo = $arquivo;

    $sql = "INSERT INTO oferta_galeria(id_oferta, link_arquivo) VALUES(:id_oferta, :link_arquivo)";
    $stmt = $PDO->prepare( $sql );

    $stmt->bindParam( ':id_oferta', $id_oferta );
    $stmt->bindParam( ':link_arquivo', $link_arquivo );
    
    $result = $stmt->execute();


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