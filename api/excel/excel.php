<?php  

require("conexao.php");

// Incluimos a classe PHPExcel
include  'PHPExcel.php';

// Instanciamos a classe
$objPHPExcel = new PHPExcel();

// Definimos o estilo da fonte
$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('B1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('C1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('D1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('E1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('F1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('G1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('H1')->getFont()->setBold(true);

// Criamos as colunas
$objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', '#' )
            ->setCellValue('B1', "Data" )
            ->setCellValue("C1", "Nome" )
            ->setCellValue("D1", "Empresa" )
            ->setCellValue("E1", "Celular" )
            ->setCellValue("F1", "E-mail" )
            ->setCellValue("G1", "Tempo" );

$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(5);
$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(32);
$objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(32);
$objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(32);
$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setWidth(8);
$objPHPExcel->getActiveSheet()->getColumnDimension('F')->setWidth(12);
$objPHPExcel->getActiveSheet()->getColumnDimension('G')->setWidth(12); 

$sql = "SELECT * FROM cadastros_uol ORDER BY id ASC";
$result = $PDO->query( $sql );
$linha = $result->fetchAll( PDO::FETCH_ASSOC );

$tot_cliente = count($linha);

$i = 0;
$linhaEx = 2;

while($i<$tot_cliente):
    
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(0, $linhaEx, $linha[$i]["id"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(1, $linhaEx, $linha[$i]["data_cadastro"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(2, $linhaEx, $linha[$i]["nome"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(3, $linhaEx, $linha[$i]["empresa"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(4, $linhaEx, $linha[$i]["celular"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(5, $linhaEx, $linha[$i]["email"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(6, $linhaEx, $linha[$i]["pontos"]." (".$linha[$i]["cliente"]." mov)");

    $i++; $linhaEx++;

endwhile;
               
    $objPHPExcel->getActiveSheet()->setTitle('Lista de Inscritos');

    // Cabeçalho do arquivo para ele baixar
    header('Content-Type: application/vnd.ms-excel');
    header('Content-Disposition: attachment;filename="lista-de-inscritos.xls"');
    header('Cache-Control: max-age=0');
    // Se for o IE9, isso talvez seja necessário
    header('Cache-Control: max-age=1');

    // Acessamos o 'Writer' para poder salvar o arquivo
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');

    // Salva diretamente no output, poderíamos mudar arqui para um nome de arquivo em um diretório ,caso não quisessemos jogar na tela
    $objWriter->save('php://output'); 

exit;

?>