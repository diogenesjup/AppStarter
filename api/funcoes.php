<?php 
ini_set("display_errors", FALSE );
ini_set("log_errors", TRUE );
ini_set("error_log","log_erros_php.log");

// CONVERTER FORMATO DE DATA PARA UM FORMATO DATE_DIFF
function converterData($entrada){

	// dd/mm/yyyy hh:ii:ss para 2018-05-30 03:16:33

    $dia        = substr($entrada, 0, 2);
    $mes        = substr($entrada, 3, 2); 
    $ano        = substr($entrada, 6, 4);
    $hora       = substr($entrada, 11, 2);
    $minuto     = substr($entrada, 14, 2);  
    $segundo    = substr($entrada, 17, 2);

    $saida = $ano . "-" . $mes . "-" . $dia . " " . $hora . ":" . $minuto . ":" . $segundo;

    return $saida;

}

// AMAZON: CONVERTER A URL DE PARCEIROS EM URL SEVEM START
function url_final_amazon($link_prova,$id_oferta){

  GLOBAL $PDO;
  $tag_sevenstart = "sevenstart06-20";
  
  // RECUPERAR A OFERTA
  $sql = "SELECT * FROM ofertas WHERE id = '$id_oferta'";
  $result = $PDO->query( $sql );
  $oferta = $result->fetchAll( PDO::FETCH_ASSOC );

  $params = $oferta[0]["query_original"];

  $link_final = str_replace($params,"",$link_prova);

  // RECUPERAR OS PAREMETROS
  $sql = "SELECT * FROM ofertas_query WHERE id_oferta = '$id_oferta'";
  $result = $PDO->query( $sql );
  $querys = $result->fetchAll( PDO::FETCH_ASSOC );
   
  // MONTAR A URL
  if(count($querys)==0){

    $link_final = $link_final."?tag=".$tag_sevenstart;

  }else{
    
    $a = 0;
    $parametros = "";
    while($a<count($querys)):

       if($querys[$a]["chave"]=="tag"):
       
         $querys[$a]["valor"] = $tag_sevenstart;

       endif;

       $parametros = $parametros.$querys[$a]["chave"]."=".$querys[$a]["valor"]."&";

      $a++;
    endwhile;

    $link_final = $link_final."?".$parametros;

  }

  return $link_final;

}








// ENVIAR SMS
function enviarSms($tokenSms,$numero,$mensagem){

  $curl = curl_init();

    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://api.smsdev.com.br/v1/send?key=$tokenSms&type=9&number=$numero&msg=".urlencode($mensagem),
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_SSL_VERIFYHOST => 0,
      CURLOPT_SSL_VERIFYPEER => 0,
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

}


// FUNÇÃO QUE ENVIA OS E-MAILS DE COMUNICAÇÃO
function enviarEmail($destino,$assunto,$mensagem){

    // Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer
    require("phpmailer/class.phpmailer.php");
     
    // Inicia a classe PHPMailer
    $mail = new PHPMailer();
     
    // Define os dados do servidor e tipo de conexão
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $mail->IsSMTP(); // Define que a mensagem será SMTP
    $mail->Host = "smtp.umbler.com"; // Endereço do servidor SMTP (caso queira utilizar a autenticação, utilize o host email-ssl.com.br)
    $mail->Port = 587;
    $mail->SMTPDebug = false;
    $mail->SMTPAuth = true; // Usar autenticação SMTP (obrigatório para smtplw.com)
    //$mail->SMTPSecure = 'tls';
    $mail->Username = 'site@servidorseguro.cloud'; // Os dados de acesso são fake
    $mail->Password = 'xXYbmA4Xf?B8(X'; // Os dados de acesso são fake
     
    // Define o remetente
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $mail->From = 'site@@servidorseguro.cloud'; // Seu e-mail
    $mail->Sender = 'site@@servidorseguro.cloud'; // Seu e-mail
    $mail->FromName = 'APP GARIMPEIROS'; // Seu nome
     
    // Define os destinatário(s)
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $mail->AddAddress($destino);
    $mail->AddBCC('diogenesjunior.ti@gmail.com'); // Copia
    //$mail->AddBCC('grupocasteloviana@gmail.com', 'Simulador de Imóveis - Gmail'); // Cópia Oculta
     
    // Define os dados técnicos da Mensagem
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $mail->IsHTML(true); // Define que o e-mail será enviado como HTML
    $mail->CharSet = 'UTF-8'; // Charset da mensagem (opcional)
     
    // Define a mensagem (Texto e Assunto)
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    $mail->Subject  = $assunto; // Assunto da mensagem

    $mail->Body = '<html>
    <head>
    <title>APP GARIMPEIROS</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    </head>
    <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="width:100%;text-align: center;padding-top: 10px;">
    <!-- Save for Web Slices (base.png) -->
    <table id="Tabela_01" width="500" height="400" border="0" cellpadding="0" cellspacing="0" style="text-align: left;">
      <tr>
        <td>
          <div style="width:500px;height:151px;position:relative;display:block;">
             &nbsp;
          </div>
        </td>
      </tr>
      <tr>
        <td>
        <h1 style="font-family: Calibri;f">App Starter</h1>
        <p style="padding: 30px;padding-top:10px;font-family: Calibri;font-size: 1.12em;line-height: 1.8em;">
          '.$mensagem.'
        </p>  
        </td>
      </tr>
      <tr>
        <td>
          <div style="width:500px;height:151px;position:relative;display:block;">
             &nbsp;
          </div>
        </td>
      </tr>
    </table>
    </body>
    </html>';
     
    // Envia o e-mail
    $enviado = $mail->Send();
     
    // Limpa os destinatários e os anexos
    $mail->ClearAllRecipients();
    $mail->ClearAttachments();

}


?>