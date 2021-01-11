<?php 
// CORRIGIR FUSO HORÁRIO
date_default_timezone_set('America/Sao_Paulo');

/*
define( 'MYSQL_HOST', 'localhost' );
define( 'MYSQL_USER', 'root' );
define( 'MYSQL_PASSWORD', 'superbass' );
define( 'MYSQL_DB_NAME', 'garimpeiros' );
*/


define( 'MYSQL_HOST', 'localhost' );
define( 'MYSQL_USER', 'wwgari_diogenes' );
define( 'MYSQL_PASSWORD', '163Icbu9v8S;' );
define( 'MYSQL_DB_NAME', 'wwgari_plataforma' );


try
{
    $PDO = new PDO( 'mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD,
    array(
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, 
                PDO::ATTR_PERSISTENT => false,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
            ) );
}
catch ( PDOException $e )
{
    echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
}

?>