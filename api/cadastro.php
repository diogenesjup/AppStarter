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

$cadastroNome = $_POST["cadastroNome"];
$cadastroEmail = $_POST["cadastroEmail"];
$cadastroSenha = $_POST["cadastroSenha"];
$cadastroCelular = $_POST["cadastroCelular"];

$token = $_POST["token"];

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

$data_cadastro = date("d/m/Y H:i:s:u");

// RECUPERAR DADOS DO USUÁRIO
$sql = "SELECT * FROM usuarios WHERE email = '$cadastroEmail'";
$result = $PDO->query( $sql );
$dados = $result->fetchAll( PDO::FETCH_ASSOC );

		if(count($dados)==0):

			        $sql = "INSERT INTO usuarios(nome, email, celular, senha, data_cadastro) VALUES(:nome, :email, :celular, :senha, :data_cadastro)";
					$stmt = $PDO->prepare( $sql );

					$stmt->bindParam( ':nome', $cadastroNome);
					$stmt->bindParam( ':email', $cadastroEmail);
					$stmt->bindParam( ':celular', $cadastroCelular);
					$stmt->bindParam( ':senha', $cadastroSenha);
					$stmt->bindParam( ':data_cadastro', $data_cadastro);
					 
					$result = $stmt->execute();
                    
                    $sql = "SELECT * FROM usuarios WHERE email = '$cadastroEmail'";
					$result = $PDO->query( $sql );
					$dados = $result->fetchAll( PDO::FETCH_ASSOC );

				    $data = array('sucesso' => "200",
				                  'nome'    => $dados[0]["nome"],
				                  'email'   => $dados[0]["email"],
				                  'id'      => $dados[0]["id"],
				                  'dados'   => $dados);

				    enviarEmail($resetEmail,"Bem vindo ao App Starter","<p>Olá ". $dados[0]["nome"] ."</p><p>Seu cadastro no App Starter foi realizado e agora você já pode aproveitar todos os recursos do nosso App.</p><p>Obrigado, equipe App Starter.</p> ");

		else:
                    
                    // USUARIO JÉ ESTÁ CADASTRADO
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