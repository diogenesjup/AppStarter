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

function compress_image($source_url, $destination_url, $quality){
     
        $info = getimagesize($source_url);
        if ($info['mime'] == 'image/jpeg') $image = imagecreatefromjpeg($source_url);
        elseif ($info['mime'] == 'image/gif') $image = imagecreatefromgif($source_url);
        elseif ($info['mime'] == 'image/png') $image = imagecreatefrompng($source_url);
        imagejpeg($image, $destination_url, $quality);
        
}



if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

        $data_cadastro = date("d/m/Y H:i:s");

		//require("conexao.php");
		date_default_timezone_set('America/Sao_Paulo');
        
        $pasta = "../cdn/";
	    $heranca_id = 1;
		/* formatos de imagem permitidos */
		$permitidos = array(".JPG",".jpg",".jpeg",".JPEG",".png",".PNG",".gif",".GIF");
		
		

			$tot_imagens = count($_FILES['arquivos']['name']);

	        $a = 0;

			while($a<$tot_imagens):

						$nome_imagem    = $_FILES['arquivos']['name'][$a]; 
						$tamanho_imagem = $_FILES['arquivos']['size'][$a];
						
						/* pega a extensão do arquivo */
						$ext = strtolower(strrchr($nome_imagem,"."));
						
						/*  verifica se a extensão está entre as extensões permitidas */
						if(in_array($ext,$permitidos)){
							
							/* converte o tamanho para KB */
							$tamanho = round($tamanho_imagem / 1000240);
							
							if($tamanho < 1000240){ //se imagem for até 1MB envia

								$nome_atual = "GARIMPEIROS-".md5(uniqid(time())).$ext; //nome que dará a imagem

								$tmp = $_FILES['arquivos']['tmp_name'][$a]; //caminho temporário da imagem
								
								/* se enviar a foto, insere o nome da foto no banco de dados */
								if(move_uploaded_file($tmp,$pasta.$nome_atual)){
									
									/*
				                    $sql = "INSERT INTO cdn(link, tipo, data_cadastro) VALUES(:link, :tipo, :data_cadastro)";

									$stmt = $PDO->prepare( $sql );

									$stmt->bindParam( ':link', $nome_atual );
									$stmt->bindParam( ':tipo', $ext );
									$stmt->bindParam( ':data_cadastro', $data_cadastro );

									$result = $stmt->execute();       
									*/           
									
									// POPULAR DADOS PARA PROVA REAL
				                    $dados[$a]["url"] = $nome_atual;
				                    $dados[$a]["ext"] = $ext;

				                    compress_image("../cdn/".$nome_atual, "../cdn/".$nome_atual, 25);

				              }else{

									$erro = "Falhar ao enviar";
								
								}
							}else{

								$erro = "Uma das imagens são grandes demais";
							
							}
						}else{
							
							$erro = "Somente são aceitos arquivos do tipo imagem (JPG, PNG ou GIF)";
						}

			$a++;
			endwhile;
				                    
				    	
				$data = array('sucesso' => "200", 'dados' => $dados, 'erros' => $erro, 'tot_imagens' => $tot_imagens);

				$json_string = json_encode($data, JSON_PRETTY_PRINT);

				echo $json_string;

else:
        
        $data = array('sucesso' => "403", 'msg' => "unauthorized");

        $json_string = json_encode($data, JSON_PRETTY_PRINT);

        echo $json_string;


endif;

?>