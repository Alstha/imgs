<?php
$con = mysqli_connect('localhost','root');



mysqli_select_db($con,'tes');

    $name = $_POST['name'];
    $gender = $_POST['gender'];
    
    $email = $_POST['email'];
    
    $pass = $_POST['pass'];
    $cpass = $_POST['cpass'];

    

    
    $emailquery="select * from tes where email='$email'";
    $query2=mysqli_query($con,$emailquery);
    $emailcount = mysqli_num_rows($query2);

    if($emailcount==1){
        
        echo"email already exists";
    }
    else{
        if($pass === $cpass){
            $query ="insert into tes (name, gender, email, pass)
            values ('$name','$gender','$email','$pass')";

            $iquery=mysqli_query($con,$query);
            header("location:login.php");

            if($iquery){
                echo "success";
            }
            else{
                echo "sorry";
            }
        }
        else{
            
            echo"Incorrect password";
        }
    }
?>