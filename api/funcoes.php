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
    $mail->FromName = 'App Starter'; // Seu nome
     
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
    <title>App Starter</title>
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