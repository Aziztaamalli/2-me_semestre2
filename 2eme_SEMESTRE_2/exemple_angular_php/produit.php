<?php
require 'connexion.php';
header("Content-Type:application/json");

$method = $_SERVER['REQUEST_METHOD'];
switch($method)
{
    case 'GET':
        if(isset($_GET["id"]) && $_GET["id"]!=null) 
           unPoduit(intval($_GET["id"]));
        else
           tousProduits();
        break;
    case 'POST' :
        //récupérer les données du body
        $input = json_decode(file_get_contents("php://input"),true);
        ajoutProduit($input);
        break;
}

function ajoutProduit($input)
{
    //extraire les données
    $id = $input["id"];
        $title =$input["title"];
        $price=$input["price"];
        $image = $input["image"];
        global $connexion;
    $requete = "insert into Product (id, title, price, image) values(:id,:t, :p, :i)";    
    //prépare la requête
        $prepared = $connexion->prepare($requete);
        //Liaison des données
    $prepared->bindParam(":id",$id);
    $prepared->bindParam(":p",$price);
    $prepared->bindParam(":t",$title);
    $prepared->bindParam(":i",$image);
        //exécuter la requête
        $resultat = $prepared->execute();
        
    if($resultat == false)
    {
        //erreur dans la requête
        http_response_code(400);
        $msg = ["erreur"=> "requete sql irronée"];
        echo json_encode($msg);
    }
    else
    {
        $msg = ["message"=> "avec succès"];
        echo json_encode($msg);
    }
        
}
function  tousProduits()
{
    global $connexion;
    $requete = "SELECT * FROM Product";
    //prépare la requête
    $prepared = $connexion->prepare($requete);
    //exécuter la requête
    $resultat = $prepared->execute();
    if($resultat ==true)
    {
      //récupérer tous les données
       $lesproduits = $prepared->fetchAll(PDO::FETCH_ASSOC);
       echo json_encode($lesproduits);
    }
    else
    {
        //erreur dans la requête
        http_response_code(400);
        $msg = ["erreur"=> "requete sql irronée"];
        echo json_encode($msg);
    }
  


}

function unPoduit($id)
{
    global $connexion;
    $requete = "SELECT * FROM Product where id = :id";
    //prépare la requête
    $prepared = $connexion->prepare($requete);
    //liaison des données
    $prepared->bindParam(":id", $id);
    //exécuter la requête
    $resultat = $prepared->execute();
    if($resultat ==true)
    {
      //récupérer tous les données
       $produit = $prepared->fetch(PDO::FETCH_ASSOC);
       if($produit==null)
       echo json_encode(["erreur"=>"produit inexistant"]);
       else
       echo json_encode($produit);
    }
    else
    {
        //erreur dans la requête
        http_response_code(400);
        $msg = ["erreur"=> "requete sql irronée"];
        echo json_encode($msg);
    }
  

 
}
?>