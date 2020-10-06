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

        $data_cadastro = date("d/m/Y H:i:s:u");

		$id_usuario = $_POST["id_usuario"];
		$var = "nao";

		//require("conexao.php");
		date_default_timezone_set('America/Sao_Paulo');
        
        $pasta = "../cdn/";
	    $heranca_id = 1;
		/* formatos de imagem permitidos */
		$permitidos = array(".JPG",".jpg",".jpeg",".JPEG",".png",".PNG",".gif",".GIF");
		
	if(isset($_POST)){

		$tot_imagem = 1;

					$nome_imagem    = $_FILES['arquivo']['name']; 
					$tamanho_imagem = $_FILES['arquivo']['size'];
					
					/* pega a extensão do arquivo */
					$ext = strtolower(strrchr($nome_imagem,"."));
					
					/*  verifica se a extensão está entre as extensões permitidas */
					if(in_array($ext,$permitidos)){
						
						/* converte o tamanho para KB */
						$tamanho = round($tamanho_imagem / 1000240);
						
						if($tamanho < 1000240){ //se imagem for até 1MB envia

							$nome_atual = "APPSTARTER-".md5(uniqid(time())).$ext; //nome que dará a imagem

							$tmp = $_FILES['arquivo']['tmp_name']; //caminho temporário da imagem
							
							/* se enviar a foto, insere o nome da foto no banco de dados */
							if(move_uploaded_file($tmp,$pasta.$nome_atual)){
								
			                    $sql = "INSERT INTO arquivos(arquivo, data_cadastro) VALUES(:arquivo, :data_cadastro)";
								$stmt = $PDO->prepare( $sql );

								$stmt->bindParam( ':arquivo', $nome_atual );
								$stmt->bindParam( ':data_cadastro', $data_cadastro );
								 
								$result = $stmt->execute();                  
								
			                    $dados[$a]["url"] = $nome_atual;
			                   
							}else{

								$erro = "Falhar ao enviar :(";
							
							}
						}else{

							$erro = "Largura/Altura máxima permitida 1920px :(";
						
						}
					}else{
						
						$erro = "Somente são aceitos arquivos do tipo imagem (JPG, PNG ou GIF) :(";
					}

					

				}else{
					
					$erro = "Falhar ao enviar :(";

					exit;
				}        
	
				$data = array('sucesso' => "200", 'dados' => $dados, 'erros' => $erro);

				$json_string = json_encode($data, JSON_PRETTY_PRINT);

				echo $json_string;

else:
        
        $data = array('sucesso' => "403", 'msg' => "unauthorized");

        $json_string = json_encode($data, JSON_PRETTY_PRINT);

        echo $json_string;


endif;

?>