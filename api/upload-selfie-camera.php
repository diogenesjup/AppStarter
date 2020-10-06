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
$t = $_POST["img_data"];

if($token=="F9803B518FD8E8E0CD0E7E51F164B7463BDFBC5337DB8603A7B78FFAD76FDFA8"):

      $idUsuario     = $_GET["idUsuario"];
      $data_cadastro = date("d/m/Y H:i:s");

         // CONVERTER IMAGEM
         function base64_to_jpeg($base64_string) {

             $output_file = "APPSTARTER".md5(time()).".png";
             // open the output file for writing
             $ifp = fopen( $output_file, 'wb' ); 

             // split the string on commas
             // $data[ 0 ] == "data:image/png;base64"
             // $data[ 1 ] == <actual base64 string>
             $data = explode( ',', $base64_string );

             // we could add validation here with ensuring count( $data ) > 1
             fwrite( $ifp, base64_decode( $data[ 0 ] ) );

             // clean up the file resource
             fclose( $ifp ); 

             return $output_file; 
         }

      if($idUsuario!=""):

                        $arquivo_final = base64_to_jpeg($t);

                        $sql = "INSERT INTO arquivos(arquivo, data_cadastro) VALUES(:arquivo, :data_cadastro)";
                        $stmt = $PDO->prepare( $sql );

                        $stmt->bindParam( ':arquivo', $nome_atual );
                        $stmt->bindParam( ':data_cadastro', $data_cadastro );
                                                       
                        $result = $stmt->execute(); 
                                
                        $dados[$a]["url"] = $arquivo_final;

      endif;

        $data = array('sucesso' => "200", 'dados' => $dados);

        $json_string = json_encode($data, JSON_PRETTY_PRINT);

        echo $json_string;

else:
        
        $data = array('sucesso' => "403", 'msg' => "unauthorized");

        $json_string = json_encode($data, JSON_PRETTY_PRINT);

        echo $json_string;


endif;

?>