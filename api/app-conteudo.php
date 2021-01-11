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
    
    /**
	*  ------------------------------------------------------------------------------------------------
	*
	*   OFERTAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

    // RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM ofertas WHERE deletada IS NULL ORDER BY RAND()";
	$result = $PDO->query( $sql );
	$ofertas = $result->fetchAll( PDO::FETCH_ASSOC );

    
    /**
	*  ------------------------------------------------------------------------------------------------
	*
	*   IMAGENS DAS OFERTAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/
	$sql = "SELECT * FROM oferta_galeria";
	$result = $PDO->query( $sql );
	$ofertas_galeria = $result->fetchAll( PDO::FETCH_ASSOC );

	$a = 0;
	while($a<count($ofertas)):
         
         $b=0;
         while($b<count($ofertas_galeria)):
             
             if($ofertas_galeria[$b]["id_oferta"]==$ofertas[$a]["id"]):
                
                $ofertas[$a]["capa"] = $ofertas_galeria[$b]["link_arquivo"];

             endif;

         	$b++;
         endwhile;


		$a++;
	endwhile;

	// DEIXAR UMA IMAGEM DEFAULT QUANDO A OFERTA NAO TIVER CAPA
	$a = 0;
	while($a<count($ofertas)):
          
          if($ofertas[$a]["capa"]==""):
            
            $ofertas[$a]["capa"] = "default.jpg";

          endif;

     $a++;
	endwhile;

	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   USUARIOS DAS OFERTAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	$sql = "SELECT * FROM banners ORDER BY RAND()";
	$result = $PDO->query( $sql );
	$banners = $result->fetchAll( PDO::FETCH_ASSOC );


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   BANNERS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	// RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM usuarios";
	$result = $PDO->query( $sql );
	$usuarios = $result->fetchAll( PDO::FETCH_ASSOC );

	$c = 0;

	while($c<count($ofertas)):

		$d = 0;
		while($d<count($usuarios)):
            
            if($ofertas[$c]["id_usuario"]==$usuarios[$d]["id"]):
               
               $ofertas[$c]["nome_usuario"] = $usuarios[$d]["nome"];

            endif; 

			$d++;
		endwhile;

		$c++;
	endwhile;




	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   CATEGORIAS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	// RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM ofertas_categoria ORDER BY nome ASC";
	$result = $PDO->query( $sql );
	$categorias = $result->fetchAll( PDO::FETCH_ASSOC );


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   DOMINIOS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	// RECUPERAR A LISTA DE OFERTAS
	$sql = "SELECT * FROM dominios ORDER BY RAND()";
	$result = $PDO->query( $sql );
	$dominios = $result->fetchAll( PDO::FETCH_ASSOC );


	/**
	*  ------------------------------------------------------------------------------------------------
	*
	*   RETORNAR OS DADOS
	*
	*  ------------------------------------------------------------------------------------------------
	*/

	$data = array('sucesso' => "200", 'ofertas' => $ofertas, 'categorias' => $categorias ,'banners' => $banners, 'dominios' => $dominios);

else:

	$data = array('sucesso' => "403", 'msg' => "unauthorized");

endif;

$json_string = json_encode($data, JSON_PRETTY_PRINT);

echo $json_string;

?>