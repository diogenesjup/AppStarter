<?php 

/*
$link = "https://www.amazon.com.br/caminho/?link=teste&diogenes=12";
$link_prova = "https://www.amazon.com.br/caminho/?link=teste&diogenes=12";
//$link = str_replace("http://","",$link);
//$link = str_replace("https://","",$link);
$link = str_replace("www2.","",$link);
$link = str_replace("www3.","",$link);
$link = str_replace("www1.","",$link);
$link = str_replace("www.","",$link);

$base_url = parse_url($link);

$link = $base_url["host"];

// TAGS QUERY
parse_str($base_url["query"], $query_array);
$query_original = $base_url["query"];

echo "LINK: ".$link;
echo "<br>QUERY ORIGINAL: ".$query_original;
echo "<br>";

print_r($query_array);
*/
$link = "https://www.amazon.com.br/dp/8532530788/ref=as_sl_pc_qf_sp_asin_til?tag=24371956-20&linkCode=w00&linkId=398f9cc6f54c0287ad02c33d85a0c5e2&creativeASIN=8532530788";

$params = "?tag=24371956-20&linkCode=w00&linkId=398f9cc6f54c0287ad02c33d85a0c5e2&creativeASIN=8532530788";

$link = str_replace($params,"",$link);

$params_new = "?tag=sevenstart06-20&linkCode=w00&linkId=398f9cc6f54c0287ad02c33d85a0c5e2&creativeASIN=8532530788";

$link = $link.$params_new;

echo $link;

?>