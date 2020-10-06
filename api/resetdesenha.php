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

$resetEmail = $_POST["resetEmail"];

$data_cadastro = date("d/m/Y H:i:s:u");

// RECUPERAR DADOS DO USUÁRIO
$sql = "SELECT * FROM usuarios WHERE email = '$resetEmail'";
$result = $PDO->query( $sql );
$dados = $result->fetchAll( PDO::FETCH_ASSOC );

if(count($dados)>0):

$novaSenha = rand(1,9999);
$novaSenha = "mudar".$novaSenha;

// ATUALIZAR A SENHA DO USUÁRIO
$sql = "UPDATE usuarios set senha = :senha WHERE email = :email";
$stmt = $PDO->prepare( $sql );
$stmt->bindParam( ':senha', $novaSenha );
$stmt->bindParam( ':email', $resetEmail );
 
$result = $stmt->execute();

enviarEmail($resetEmail,"Reset de senha aplicativo","<p>Sua senha foi resetada para: $novaSenha.</p><p>Assim que realizar o login, altere-a no menu <b>\"PROFILE\"</b>.</p> ");

$data = array('sucesso' => "200");

else:

  $data = array('sucesso' => "500");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>