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

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):
    
    // RECUPERAR A LISTA DE CLIENTES
	$sql = "SELECT * FROM clientes WHERE corretor IS NULL ORDER BY nome ASC";
	$result = $PDO->query( $sql );
	$clientes = $result->fetchAll( PDO::FETCH_ASSOC );

    // RECUPERAR A LISTA DE CORRETORES
	$sql = "SELECT * FROM clientes WHERE corretor IS NOT NULL ORDER BY nome ASC";
	$result = $PDO->query( $sql );
	$corretores = $result->fetchAll( PDO::FETCH_ASSOC );

	$a = 0;

	while($a<count($clientes)):
        
        $b = 0;
        while($b<count($corretores)):

        	if($clientes[$a]["id_corretor"]==$corretores[$b]["id"] && $clientes[$a]["id_corretor"]!=0):
                
                $clientes[$a]["nome_corretor"] = $corretores[$b]["nome"];
                $clientes[$a]["corretor_creci"] = $corretores[$b]["corretor_creci"];

        	endif;

        	$b++;
        endwhile;

		$a++;
	endwhile;

	$data = array('sucesso' => "200", 'clientes' => $clientes);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>