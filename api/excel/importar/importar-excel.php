<?php 

require("../../conexao.php");

include 'Classes/PHPExcel.php';
include 'Classes/PHPExcel/IOFactory.php';

						$objReader = PHPExcel_IOFactory::createReader('Excel2007');
						$objReader->setReadDataOnly(true);
						$objPHPExcel = $objReader->load("transacoes_bc.xlsx");
						$objWorksheet = $objPHPExcel->getActiveSheet();
						$highestRow = $objWorksheet->getHighestRow();
						$highestColumn = $objWorksheet->getHighestColumn();
						$highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn);                        

						for ($row = 2; $row <= $highestRow; $row++) {

										$param_1 = $objWorksheet->getCellByColumnAndRow(0, $row)->getValue();
										$param_2 = $objWorksheet->getCellByColumnAndRow(1, $row)->getValue();
										$param_3 = $objWorksheet->getCellByColumnAndRow(2, $row)->getValue();
										$param_4 = $objWorksheet->getCellByColumnAndRow(3, $row)->getValue();
										$param_5 = $objWorksheet->getCellByColumnAndRow(4, $row)->getValue();
										$param_6 = $objWorksheet->getCellByColumnAndRow(5, $row)->getValue();
										$param_7 = $objWorksheet->getCellByColumnAndRow(6, $row)->getValue();
										$param_8 = $objWorksheet->getCellByColumnAndRow(7, $row)->getValue();

										$sql = "INSERT INTO pagarme (status, id_pagarme, data, nome, forma_pagamento, numero_cartao, documento, email) VALUES(:status, :id_pagarme, :data, :nome, :forma_pagamento, :numero_cartao, :documento, :email)";

										$stmt = $PDO->prepare( $sql );

										$stmt->bindParam( ':status', $param_1);
										$stmt->bindParam( ':id_pagarme', $param_2);
										$stmt->bindParam( ':data', $param_3);
										$stmt->bindParam( ':nome', $param_4);
										$stmt->bindParam( ':forma_pagamento', $param_5);
										$stmt->bindParam( ':numero_cartao', $param_6);
										$stmt->bindParam( ':documento', $param_7);
										$stmt->bindParam( ':email', $param_8);

										$result = $stmt->execute();

								        if ( ! $result )
										{
										    var_dump( $stmt->errorInfo() );
										    exit;
										}
						}

						

?>
It's Work
