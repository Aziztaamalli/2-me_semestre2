<?php

require "connexion.php";
header("Content-type:application/json");

$method = $_SERVER["REQUEST_METHOD"];
switch ($method)
{
    case 'POST':
        //récupère les données envoyées par Angular
        $data = file_get_contents("php://input");
        //convertir la chaîne json en format php
        $inputs = json_decode($data, true);
        $e = $inputs["email"];
        $p = $inputs["password"];
        $msg = [];
        //préparer la requête
      $prepared = $connexion->prepare("INSERT INTO USER (email, password,role) values (:e,:p, 'client')");
       //liaison entre données et requête préparée
       $prepared->bindParam(":e",$e);
       $prepared->bindParam(":p",$p);
       //exécuter la requête
       $resultat =  $prepared->execute();
       if($resultat == false)
       { http_response_code(204);
         $msg = ["msg" => "requete sql erronée"];
       }
       else
       {
        $r = $prepared->rowCount();
        if($r==0)
        {
            http_response_code(204);
            $msg = ["msg" => "echec ajout"];
        }
        else
        {http_response_code(201);
            $msg = ["msg" => "ajout avec succès"];
        }
       }
    echo json_encode($msg);
         break;
    default: 
    {
        http_response_code(204);
        $msg = ["msg" => "method not allowed"];
        echo json_encode($msg);
    }
}

?>