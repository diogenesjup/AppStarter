<?php 

require("../conexao.php");
require("../funcoes.php");


// Incluimos a classe PHPExcel
include  'PHPExcel.php';

// Instanciamos a classe
$objPHPExcel = new PHPExcel();

$id_evento = 13;

// Definimos o estilo da fonte
$objPHPExcel->getActiveSheet()->getStyle('A1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('B1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('C1')->getFont()->setBold(true);
$objPHPExcel->getActiveSheet()->getStyle('D1')->getFont()->setBold(true);

// Criamos as colunas
$objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', '#' )
            ->setCellValue('B1', "Nome" )
            ->setCellValue("C1", "E-mail" )
            ->setCellValue("D1", "CPF" )
            ->setCellValue("E1", "STATUS" )
            ->setCellValue("F1", "FORMA PAGAMENTO" );


$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setWidth(5);
$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setWidth(30);
$objPHPExcel->getActiveSheet()->getColumnDimension('F')->setWidth(30);

 $sql = "SELECT t1.id,
                   t1.nome,
                   t1.sobrenome,
                   t1.data_cadastro,
                   t1.email,
                   t1.senha,
                   t1.cpf AS usuario_cpf,
                   t1.rg,
                   t1.ddd,
                   t1.numero_tel,
                   t1.endereco,
                   t1.numero,
                   t1.bairro,
                   t1.cidade,
                   t1.cep,
                   t1.estado,
                   t1.pais,
                   t1.foto_perfil,
                   t1.status,
                   t1.nascimento,
                   t1.sexo,
                   t1.tipo,
                   t1.observacoes,
                   t2.id AS id_transacao,
                   t2.id_evento,
                   t2.data_cadastro AS data_cadastro_inscrito,
                   t2.cpf,
                   t2.numero_tel,
                   t2.email AS email_usuario,
                   t2.status AS status_transacao,
                   t2.observacoes,
                   t2.valor_pago AS ingresso_pago,
                   t2.meio_pagamento
                   FROM usuarios AS t1 JOIN inscritos AS t2 
                                        ON t1.email = t2.email AND t2.id_evento = '$id_evento'
                                        WHERE t2.status IS NULL AND t2.meio_pagamento = 'BOLETO'
                   ORDER BY t2.id DESC";

                   $result = $PDO->query( $sql );
                   $dados = $result->fetchAll( PDO::FETCH_ASSOC );

                  

$tot_dados = count($dados);

$i = 0;
$linhaEx = 2;

while($i<$tot_dados):
    
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(0, $linhaEx, $dados[$i]["id"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(1, $linhaEx, $dados[$i]["nome"]);
  	$objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(2, $linhaEx, $dados[$i]["email"]);
	  $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(3, $linhaEx, $dados[$i]["cpf"]);
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(4, $linhaEx, "AGUARDANDO PAGAMENTO");
    $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow(5, $linhaEx, $dados[$i]["meio_pagamento"]);

    $i++; $linhaEx++;

endwhile;
               
    $objPHPExcel->getActiveSheet()->setTitle('Inscritos BeautyConnect');

    // Cabeçalho do arquivo para ele baixar
    header('Content-Type: application/vnd.ms-excel');
    header('Content-Disposition: attachment;filename="inscritos-beautyconnect.xls"');
    header('Cache-Control: max-age=0');
    // Se for o IE9, isso talvez seja necessário
    header('Cache-Control: max-age=1');

    // Acessamos o 'Writer' para poder salvar o arquivo
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');

    // Salva diretamente no output, poderíamos mudar arqui para um nome de arquivo em um diretório ,caso não quisessemos jogar na tela
    $objWriter->save('php://output'); 

exit;

?>