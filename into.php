<?php 

$username="sauasmast";
$password="Pyari123Aastha";
$user="localhost";

$con=new mysqli($user,$username,$password);

$con->select_db("SaugatInfo");

if (isset($_POST['Name'])){
  $name=$_POST['Name'];
}

if (isset($_POST['Email'])){    
$email=$_POST['Email'];
}
    
if (isset($_POST['Comment'])){
$comment=$_POST['Comment'];
}

$queries= "INSERT INTO Protfolio (Name, Email, Comments) VALUES ('$name', '$email', '$comment')";
  
$sql= $con->query($queries);
    
$con->close();

?> 