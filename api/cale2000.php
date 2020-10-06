<?php 
/*
      ````                                            `-///.       `://-        .//:.       `://-   
   -ohddmdhd/  yddmmm:     /hdmddh:   `ydmdddddmm/  .ymhoohMh    .ymyoyMd`    /ddssmM+    .ymyohMh  
 `yNo-` `-mm.  `:mmyMh      `sMo``     `hM/.+:.mm`  :o.  `:Md   .mm.   hM:   sMo   -Md   :Nh.   mM. 
 hM:      .`   /Nd-.NM.     `NN`   `   .MMhdM/ .`     `-odd+`   hM:   `NN`  -Md    oMo   dM.   .Mm  
`MN`     ``  `sNmdhhmMs     +Ms   +m/  sMo-dy :s.  `-oddo-`    `MN    sM+   sM+   -Nm`  -Mm   `yM/  
 yMdo//+sdy.+dMho..+yMN+--++mMs+++NN`:+NMo+oo+NN` +dNNyo+os.    dMs/+dd/    /Mm+/smy.   `mMo/odd:   
  ./oso+/.`-++++:  /++++`-+++++++++: :+++++++++:  +++++++++`    `/oo+-`      -+so/.      `/oo+-`    
                                                                                                    

 BIBLIOTECA PARA CONVERSÃO E FERRAMENTAS DE DATAS
 PROGRAMADOR: DIOGENES OLIVEIRA DOS SANTOS JUNIOR
 WWW.DIOGENESJUNIOR.COM.BR
 CONTATO@DIOGENESJUNIOR.COM.BR
 VERSÃO 1: 25 DE DEZEMBRO DE 2018

 INDICE DE FUNÇÕES:

		 cale001 = CONVERTER FORMATO AAAA/MM/DD PARA DD/MM/AAAA

		 
		 cale002 = CONVERTER FORMATO AAAA-MM-DD PARA DD/MM/AAAA


		 cale003 = DEVOLVER A DIFERENÇA ENTRE DUAS DATAS
		 A DATA MAIOR DEVE SER INFORMADA PRIMEIRA, FUNCIONA MELHOR PARA DIFERENÇA ENTRE ANOS
		 ENTRADA 1: 2013-12-11
		 ENTRADA 2: 1994-04-17
		 ENTRADA 3: TIPO DE SAIDA
		            SE 1 = DIFERENÇA EM ANOS
		            SE 2 = DIFERENÇA EM MESES
		            SE 3 = DIFERENÇA EM DIAS


		 cale004 = DEVOLVER A DIFERENÇA ENTRE DOIS HORÁRIOS
		 HORARIO MENOR DEVE SER INFORMADO PRIMEIRO
		 ENTRADA 1: 16:05:00
		 ENTRADA 2: 10:16:53
		 ENTRADA 3: TIPO DE SAIDA
		            SE 1 = DIFERENÇA TOTAL, EXEMPLO 1:00:10
		            SE 2 = DIFERENÇA EM HORAS
		            SE 3 = DIFERENÇA EM MINUTOS
		            SE 4 = DIFERENÇA EM SEGUNDOS


		 cale005 = RETORNAR A DIFERENÇA EM DIAS ENTRE UMA DATA, E A DATA ATUAL DO DIA
		 O RETORNO SERA COM O NÚMERO DE DIAS ENTRE A DATA ATUAL E A ENTRADA (DATA FUTURA)
		 SE A DATA FOR MENOR QUE A DATA ATUAL DO DIA, O RESULTADO SERÁ NEGATIVO
		 ENTRADA 1: 2019-10-10           
		 DATA DO DIA : 2019-10-11
		 SAIDA: 1
		 

		 cale006 = RETORNAR A DIFERENÇA EM DIAS ENTRE DUAS DATAS
		 O RETORNO SERA COM O NÚMERO DE DIAS ENTRE AS DUAS DATAS
		 SE A DATA 1 FOR MENOR QUE A DATA 2, O RESULTADO SERÁ NEGATIVO
		 A DATA MAIOR DEVE SER INFORMADA PRIMEIRO (OU SE DEVE CONSIDERAR O VALOR NEGATIVO)
		 ENTRADA 1: 2019-10-10   
		 ENTRADA 2: 2018-10-10        
		 SAIDA: -365


*/

function cale001($entrada){
   
   $temp = explode("/", $entrada);
   $saida = $temp[2]."/".$temp[1]."/".$temp[0];

   return $saida;

}	

function cale002($entrada){
   
   $temp = explode("-", $entrada);
   $saida = $temp[2]."/".$temp[1]."/".$temp[0];

   return $saida;

}	

function cale003($data1,$data2,$tipoIntervalo){
  
    $data1 = new DateTime( $data1 );
	$data2 = new DateTime( $data2 );

	$intervalo = $data1->diff( $data2 );

	if($tipoIntervalo==1) return $intervalo->y;
	if($tipoIntervalo==2) return $intervalo->m;
	if($tipoIntervalo==3) return $intervalo->d;

}

function cale004($horario1,$horario2,$tipoIntervalo){

	$entrada = $horario1;
	$saida = $horario2;
	$hora1 = explode(":",$entrada);
	$hora2 = explode(":",$saida);
	$acumulador1 = ($hora1[0] * 3600) + ($hora1[1] * 60) + $hora1[2];
	$acumulador2 = ($hora2[0] * 3600) + ($hora2[1] * 60) + $hora2[2];
	$resultado = $acumulador2 - $acumulador1;
	$hora_ponto = floor($resultado / 3600);
	$resultado = $resultado - ($hora_ponto * 3600);
	$min_ponto = floor($resultado / 60);
	$resultado = $resultado - ($min_ponto * 60);
	$secs_ponto = $resultado;
	//Grava na variável resultado final
	$tempo = $hora_ponto.":".$min_ponto.":".$secs_ponto;
	
	if($tipoIntervalo==1) return $tempo;
	if($tipoIntervalo==2) return $hora_ponto;
	if($tipoIntervalo==3) return $min_ponto;
	if($tipoIntervalo==4) return $secs_ponto;

}


function cale005($entrada){
   
    $dataAtual = date("Y-m-d");
	$diferenca = strtotime($entrada) - strtotime($dataAtual);
	$dias = floor($diferenca / (60 * 60 * 24));

	return $dias;

}

function cale006($entrada1,$entrada2){
   
    $diferenca = strtotime($entrada1) - strtotime($entrada2);
	$dias = floor($diferenca / (60 * 60 * 24));

	return $dias;

}

?>