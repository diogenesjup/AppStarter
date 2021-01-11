<?php 

require("../../conexao.php");

$valor_pago = 27;

$sql = "UPDATE inscritos set valor_pago = :valor_pago WHERE valor_pago > 27";
$stmt = $PDO->prepare( $sql );
$stmt->bindParam( ':valor_pago', $valor_pago );
 
$result = $stmt->execute();

?>