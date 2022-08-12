<?php
$con = mysqli_connect('localhost','root','');



mysqli_select_db($con,'id19378879_tes');

    $name = $_POST['name'];
    $gender = $_POST['gender'];
    
    $email = $_POST['email'];
    
    $pass = $_POST['pass'];
    $cpass = $_POST['cpass'];

    

    
    $emailquery="select * from dge where email='$email'";
    $query2=mysqli_query($con,$emailquery);
    $emailcount = mysqli_num_rows($query2);

    if($emailcount>0){
        alert("email already exists");
        echo"email already exists";
    }
    else{
        if($pass === $cpass){
            $query ="insert into tes (name, gender, email, pass)
            values ('$name','$gender','$email','$pass')";

            $iquery=mysqli_query($con,$query);
            header("location:index.html");

            if($iquery){
                echo "success";
            }
            else{
                echo "sorry";
            }
        }
        else{
            alert("Incorrect password");
            echo"Incorrect password";
        }
    }
?>