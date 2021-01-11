<!--
#
# DIOGENES OLIVEIRA DOS SANTOS JUNIOR
# WWW.DIOGENESJUNIOR.COM.BR
# CONTATO@DIOGENESJUNIOR.COM.BR
#
-->
<!DOCTYPE html>
<html lang="pt-br"><head>
<title>Titulo da Página 2</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
<meta name="theme-color" content="#053d4e">

<link rel="stylesheet" type="text/css" href="../../css/bootstrap.css" media="all" />

<!-- DESCRIÇÃO DO SITE -->
<meta name="description" content="Coloque aqui a descrição do site" />
<!-- PALAVRAS CHAVE -->
<meta name="keywords" content="coloque aqui as palavras chave separadas por virgula" />

<style>
    
    body{
      padding: 50px;
    }

</style>


</head>
<body>

<table class="table">

    <thead>
      <th><b>PAGAR.ME</b></th>
      <th><b>BEAUTY CONNECT</b></th>
    </thead>
    
    <?php 

        require("../../conexao.php");
         
        $sql = "SELECT * FROM pagarme ORDER BY nome ASC";
        $result = $PDO->query( $sql );
        $pagarme = $result->fetchAll( PDO::FETCH_ASSOC ); 

        $sql = "SELECT * FROM inscritos WHERE status = 'APROVADA' AND valor_pago = '27' ORDER BY id ASC";
        $result = $PDO->query( $sql );
        $inscritos = $result->fetchAll( PDO::FETCH_ASSOC ); 
        
        $a = 0;
        $b = 0;

        while($a<count($pagarme)):
    
    ?>
      
      <tr>
        <td><?php echo $pagarme[$a]["email"]; ?></td>
        <td style="padding-top: 7px;padding-bottom: 7px;">

    <?php

           $b = 0;
           $ocorrencia = 0;
           while($b<count($inscritos)):

              if($pagarme[$a]["email"]==$inscritos[$b]["email"]):
                 echo "<div class='badge badge-success'>encontrado</div>";
                 $ocorrencia = 1;
              endif;

           $b++;
           endwhile; 

           if($ocorrencia==0):

                echo "SEM CORRESPONDÊNCIA &nbsp;&nbsp;&nbsp;<div class='badge badge-primary'>inserida</div>";
                
                $email = $pagarme[$a]["email"];


                $sql = "SELECT * FROM inscritos WHERE email = '$email'";
                $result = $PDO->query( $sql );
                $busca = $result->fetchAll( PDO::FETCH_ASSOC );

                if(count($busca)==0):

                            $status = "APROVADA";
                            $data = $pagarme[$a]["data"];
                            $nome = $pagarme[$a]["nome"];
                            
                            if($pagarme[$a]["forma_pagamento"]=="Cartão de Crédito") $forma_pagamento = "CARTÃO DE CRÉDITO";
                            if($pagarme[$a]["forma_pagamento"]=="Boleto") $forma_pagamento = "BOLETO";

                            $documento = $pagarme[$a]["documento"];                            

                            $senha = "mudar123";
                            $valor_pago = 27;
                            $evento = "13";

                            $sql = "INSERT INTO inscritos(id_evento, nome, data_cadastro, email, senha, status, valor_pago, meio_pagamento) VALUES(:id_evento, :nome, :data_cadastro, :email, :senha, :status, :valor_pago, :meio_pagamento)";
                                        $stmt = $PDO->prepare( $sql );

                                        $stmt->bindParam( ':id_evento', $evento );
                                        $stmt->bindParam( ':nome', $nome );
                                        $stmt->bindParam( ':data_cadastro', $data );
                                        $stmt->bindParam( ':email', $email );
                                        $stmt->bindParam( ':senha', $senha );

                                        $stmt->bindParam( ':status', $status );
                                        $stmt->bindParam( ':valor_pago', $valor_pago );
                                        $stmt->bindParam( ':meio_pagamento', $forma_pagamento );
                                        
                                        $result = $stmt->execute();

                            $sql = "INSERT INTO usuarios(nome, data_cadastro, email, senha) VALUES(:nome, :data_cadastro, :email, :senha)";
                                        $stmt = $PDO->prepare( $sql );

                                        $stmt->bindParam( ':nome', $nome );
                                        $stmt->bindParam( ':data_cadastro', $data );
                                        $stmt->bindParam( ':email', $email );
                                        $stmt->bindParam( ':senha', $senha );
                                             
                                        $result = $stmt->execute();
                
                endif;



           endif;
    ?>
        </td>
      </tr>

    <?php

          $a++;
        endwhile;

    ?>

</table>

</body>
</html>
