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

$loginUsuario = $_POST["loginUsuario"];
$loginSenha   = $_POST["loginSenha"];

$token = $_POST["token"];

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

$data_cadastro = date("d/m/Y H:i:s:u");

// RECUPERAR DADOS DO USUÁRIO
$sql = "SELECT * FROM usuarios WHERE email = '$loginUsuario' AND senha = '$loginSenha'";
$result = $PDO->query( $sql );
$dados = $result->fetchAll( PDO::FETCH_ASSOC );

$id = $dados[0]["id"];

$sql = "UPDATE usuarios set ultimo_login = :ultimo_login WHERE id = :id";
$stmt = $PDO->prepare( $sql );
$stmt->bindParam( ':ultimo_login', $data_cadastro );
$stmt->bindParam( ':id', $id );
 
$result = $stmt->execute();

if(count($dados)!=0):

    $data = array('sucesso' => "200",
                  'nome'    => $dados[0]["nome"],
                  'email'   => $dados[0]["email"],
                  'id'      => $dados[0]["id"],
                  'dados'   => $dados);

else:

	$data = array('sucesso' => "400");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;


else:
        
        $data = array('sucesso' => "403", 'msg' => "unauthorized");

        $json_string = json_encode($data, JSON_PRETTY_PRINT);

        echo $json_string;


endif;

?>