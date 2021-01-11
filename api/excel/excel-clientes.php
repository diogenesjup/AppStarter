<?php 

require("../conexao.php");
require("../funcoes.php");


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
$objPHPExcel->getActiveSheet()->getStyle('I1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('J1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('K1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('L1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('M1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('N1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('O1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('P1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('Q1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('R1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('S1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('T1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('U1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('V1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('W1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('X1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('Y1')->getFont()->setBold(true);

// Criamos as colunas
$objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', '#' )
            ->setCellValue('B1', "Nome" )
            ->setCellValue("C1", "Sobrenome" )
            ->setCellValue("D1", "Resumo" )
            ->setCellValue("E1", "Empresa" )
            ->setCellValue("F1", "Data cadastro" )
            ->setCellValue("G1", "Email" )
            ->setCellValue("H1", "Senha" )
            ->setCellValue("I1", "CPF" )
            ->setCellValue("J1", "RG" )
            ->setCellValue("K1", "ddd" )
            ->setCellValue("L1", "Cel" )
            ->setCellValue("M1", "Endereço" )
            ->setCellValue("N1", "Número" )
            ->setCellValue("O1", "Bairro" )
            ->setCellValue("P1", "Cidade" )
            ->setCellValue("Q1", "CEP" )
            ->setCellValue("R1", "Estado" )
            ->setCellValue("S1", "Pais" )
            ->setCellValue("T1", "Foto perfil" )
            ->setCellValue("U1", "status" )
            ->setCellValue("V1", "Data de Nascimento" )
            ->setCellValue("W1", "Sexo" )
            ->setCellValue("X1", "Tipo" )
            ->setCellValue("Y1", "Observacoes" );


$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(5);
$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('F')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('G')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('I')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('J')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('K')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('L')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('M')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('N')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('O')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('P')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('Q')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('R')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('S')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('T')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('U')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('V')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('W')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('X')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('Y')->setWidth(30); 

$sql = "SELECT * FROM usuarios WHERE company = 'sim' ORDER BY nome, sobrenome ASC";
$result = $PDO->query( $sql );
$dados = $result->fetchAll( PDO::FETCH_ASSOC );

$tot_dados = count($dados);

$i = 0;
$linhaEx = 2;

while($i<$tot_dados):

	if($dados[$i]["tipo"]=="F" || $dados[$i]["tipo"]=="") $tipo = "FREE";
	if($dados[$i]["tipo"]=="P") $tipo = "PREMIUM";
	if($dados[$i]["tipo"]=="E") $tipo = "EMPRESA";
    
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(0, $linhaEx, $dados[$i]["id"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(1, $linhaEx, $dados[$i]["nome"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(2, $linhaEx, $dados[$i]["sobrenome"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(3, $linhaEx, $dados[$i]["resumo"]);
	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(4, $linhaEx, $dados[$i]["empresa"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(5, $linhaEx, $dados[$i]["data_cadastro"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(6, $linhaEx, $dados[$i]["email"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(7, $linhaEx, $dados[$i]["senha"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(8, $linhaEx, $dados[$i]["cpf"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(9, $linhaEx, $dados[$i]["rg"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(10, $linhaEx, $dados[$i]["ddd"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(11, $linhaEx, $dados[$i]["numero_tel"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(12, $linhaEx, $dados[$i]["endereco"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(13, $linhaEx, $dados[$i]["numero"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(14, $linhaEx, $dados[$i]["bairro"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(15, $linhaEx, $dados[$i]["cidade"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(16, $linhaEx, $dados[$i]["cep"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(17, $linhaEx, $dados[$i]["estado"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(18, $linhaEx, $dados[$i]["pais"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(19, $linhaEx, "http://beautyconnect.com.br/cdn/".$dados[$i]["foto_perfil"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(20, $linhaEx, $dados[$i]["status"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(21, $linhaEx, $dados[$i]["nascimento"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(22, $linhaEx, $dados[$i]["sexo"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(23, $linhaEx, $tipo);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(24, $linhaEx, $dados[$i]["observacoes"]);

    $i++; $linhaEx++;

endwhile;
               
    $objPHPExcel->getActiveSheet()->setTitle('Lista de clientes BeautyConnect');

    // Cabeçalho do arquivo para ele baixar
    header('Content-Type: application/vnd.ms-excel');
    header('Content-Disposition: attachment;filename="lista-de-clientes-beautyconnect.xls"');
    header('Cache-Control: max-age=0');
    // Se for o IE9, isso talvez seja necessário
    header('Cache-Control: max-age=1');

    // Acessamos o 'Writer' para poder salvar o arquivo
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');

    // Salva diretamente no output, poderíamos mudar arqui para um nome de arquivo em um diretório ,caso não quisessemos jogar na tela
    $objWriter->save('php://output'); 

exit;

?>