<?php
$con = mysqli_connect('localhost','id19378879_alson','Et~n1OY^i/S_Je_&');



mysqli_select_db($con,'id19378879_alson');

    $name = $_POST['name'];
    $gender = $_POST['gender'];
    
    $email = $_POST['email'];
    
    $pass = $_POST['pass'];
    $cpass = $_POST['cpass'];

    

    
    $emailquery="select * from dge where email='$email'";
    $query2=mysqli_query($con,$emailquery);
    $emailcount = mysqli_num_rows($query2);

    if($emailcount==1){
        
        echo"email already exists";
    }
    else{
        if($pass === $cpass){
            $query ="insert into dge (name, gender, email, pass)
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
