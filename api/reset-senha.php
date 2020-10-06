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

$token = $_POST["token"];

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

$data_cadastro = date("d/m/Y H:i:s:u");

// RECUPERAR DADOS DO USUÁRIO
$sql = "SELECT * FROM usuarios WHERE email = '$resetEmail'";
$result = $PDO->query( $sql );
$dados = $result->fetchAll( PDO::FETCH_ASSOC );

		if(count($dados)!=0):

			        $novaSenha = rand(1,99999);
                    $novaSenha = "mudar".$novaSenha;

				    $data = array('sucesso' => "200");

                    enviarEmail($resetEmail,"Reset de senha App Starter","<p>Sua senha foi resetada para: $novaSenha.</p><p>Assim que realizar o login, altere-a no menu <b>\"Perfil\"</b>.</p> ");

		else:
                    
                    // E-MAIL NAO ENCONTRADO NA NOSSA PLATAFORMA
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