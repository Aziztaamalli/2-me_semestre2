<?php
    $servername="localhost";
    $username="root";
    $password="";
    $base="projet_mini_web";
try{
    
    //création de l'objet de connexion
   $connexion=new PDO("mysql:host=$servername;dbname=$base",$username,$password);
   
}
catch(PDOException $e)
{
    echo "Connection failed: " .$e->getMessage();
}
?>
