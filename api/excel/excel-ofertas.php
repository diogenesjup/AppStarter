<?php 

require("../conexao.php");
require("../funcoes.php");


include "phpExcel2/vendor/autoload.php";


$lista[0] = ["#",
"Titulo",
"Link",
"Loja",
"Valor",
"Data Ini",
"CashBack",
"Data Pub",
"Tipo",
"Views",
"Cliques",
"Compras"];


$i = 0;
$linhaEx = 1;

$sql = "SELECT * FROM ofertas WHERE deletada IS NULL ORDER BY id DESC";
$result = $PDO->query( $sql );
$dados = $result->fetchAll( PDO::FETCH_ASSOC );

$tot_dados = count($dados);

while($i<$tot_dados):

    if($dados[$i]["tipo"]==1){$tipoNome="Produto ou serviço";}
    if($dados[$i]["tipo"]==2){$tipoNome="Cupom (".$dados[$i]["cupom"].")";}

   
    $lista[$linhaEx] = [$dados[$i]["id"],
    $dados[$i]["titulo"],
$dados[$i]["link_final"],
$dados[$i]["loja"],
$dados[$i]["valor"],
$dados[$i]["data_ini"],
$dados[$i]["cash_back_gpr"],
$dados[$i]["data_pub"],
$tipoNome,
$dados[$i]["views"],
$dados[$i]["cliques"],
$dados[$i]["compras"],
$dados[$i]["numero_tel"]];
         
    //array_push($lista[$linhaEx], $produtos);

$i++; $linhaEx++;

endwhile;

//print("<pre>".print_r($lista,true)."</pre>");

$xlsx = SimpleXLSXGen::fromArray( $lista );

$xlsx->downloadAs('ofertas-garimpeiros.xlsx');


exit;




?>