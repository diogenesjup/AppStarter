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
$cpf = $_POST["cpf"];
$cnpj = $_POST["cnpj"];

if($cnpj=="undefined") $cnpj = "";

$email = $_POST["email"];
$celular = $_POST["celular"];
$telefone = $_POST["telefone"];
$senha = $_POST["senha"];
$endereco = $_POST["endereco"];
$cep = $_POST["cep"];
$bairro = $_POST["bairro"];
$cidade = $_POST["cidade"];
$estado = $_POST["estado"];
$corretor = "corretor";

$corretor_creci = $_POST["id_corretor"]; // CRECI

$observacoes = $_POST["observacoes"];

$data_cadastro = date("d/m/Y");

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
     
     $sql = "INSERT INTO clientes(nome, cpf, cnpj, email, celular, telefone, senha, data_cadastro, endereco, cep, bairro, cidade, estado, corretor, corretor_creci, observacoes) VALUES(:nome, :cpf, :cnpj, :email, :celular, :telefone, :senha, :data_cadastro, :endereco, :cep, :bairro, :cidade, :estado, :corretor, :corretor_creci, :observacoes)";
	
	$stmt = $PDO->prepare( $sql );

	$stmt->bindParam( ':nome', $nome );
	$stmt->bindParam( ':cpf', $cpf );
	$stmt->bindParam( ':cnpj', $cnpj );
	$stmt->bindParam( ':email', $email );
	$stmt->bindParam( ':celular', $celular );
	$stmt->bindParam( ':telefone', $telefone );
	$stmt->bindParam( ':senha', $senha );
	$stmt->bindParam( ':data_cadastro', $data_cadastro );
	$stmt->bindParam( ':endereco', $endereco );
	$stmt->bindParam( ':cep', $cep );
	$stmt->bindParam( ':bairro', $bairro );
	$stmt->bindParam( ':cidade', $cidade );
	$stmt->bindParam( ':estado', $estado );
	$stmt->bindParam( ':corretor', $corretor );
	$stmt->bindParam( ':corretor_creci', $corretor_creci );
	$stmt->bindParam( ':observacoes', $observacoes );
	 
	$result = $stmt->execute();
    
	$data = array('sucesso' => "200");

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>