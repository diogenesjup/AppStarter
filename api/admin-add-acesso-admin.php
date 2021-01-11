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
$nome = $_POST["nome"];
$email = $_POST["email"];
$celular = $_POST["celular"];
$senha = $_POST["senha"];


$celular = str_replace("(", "", $celular);
$celular = str_replace(")", "", $celular);
$celular = str_replace(" ", "", $celular);
$celular = str_replace("-", "", $celular);
$celular = str_replace(".", "", $celular);
$celular = str_replace("_", "", $celular);

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

	$tipo = "admin";
	$data_cadastro = date("d/m/Y");

    $sql = "INSERT INTO usuarios(nome, email, celular, senha, data_cadastro, tipo) VALUES(:nome, :email, :celular, :senha, :data_cadastro, :tipo)";
	
	$stmt = $PDO->prepare( $sql );

	$stmt->bindParam( ':nome', $nome );
	$stmt->bindParam( ':email', $email );
	$stmt->bindParam( ':celular', $celular );
	$stmt->bindParam( ':senha', $senha );
	$stmt->bindParam( ':data_cadastro', $data_cadastro );
	$stmt->bindParam( ':tipo', $tipo );
	 
	$result = $stmt->execute();

	$data = array('sucesso' => "200", 'dados' => $dados);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>