<?php
$con = mysqli_connect('localhost','root');



mysqli_select_db($con,'tes');

    
  
    
    $email = $_POST['email'];
    
    $pass = $_POST['pass'];
    

    

    
    $emailquery="select * from tes where email='$email'";
    $query2=mysqli_query($con,$emailquery);
    $emailcount = mysqli_num_rows($query2);



    if($emailcount>1){
        $_SESSION['email'] = $email;
        header("location:index.html");
        
    }
    
?>