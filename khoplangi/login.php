

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-IN / Log-IN</title>
    <link rel="stylesheet" href="login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<style>
    #btn2 b{
    cursor: pointer;
    margin-top: -100px;
    background: red;
    margin-top: 7px;
    padding: 5px;
    border-radius: 12px;
    color: rgb(242, 242, 242);
    font-family: 'Secular One', sans-serif;
    cursor: pointer;
    border: 1px solid white;
    transition: all 0.35s;
}
</style>
</head>
<body>
    <div id="all">
        <div id="top">
            
                <img src="img/others/logo.png" alt="LOGO" id="logo1">
                <h2>KHOPLANGI SHOP</h2>
                
                
        </div>
        <div id="signup">
            <form action="userinfo.php" method="post">
                <h3 id="topic2">Make Your Account</h3>
                <div id="lbox2">
                    <img src="img/others/logo.png" alt="" id="logo2">
                    <div id="other-way">
                        <a href="#"><img src="img/others/google.png" alt="" id="google"></a>
                        <a href="#"><img src="img/others/facebook.png" alt="" id="fb"></a>
                        <a href="#"><img src="img/others/github.png" alt="" id="github"></a>
                    </div>               
                    <div id="main2">
                        
                        <div id="names">
                            <input placeholder="First Name"  type="text" name="name"  required>
                            <input placeholder="Last Name" type="text" name="name"  >
                        </div>
                            <select name="gender" id="gens" required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Third Gen">Third Gen</option>
                            </select>
                        <input style="height: 30px;" placeholder="email" type="email" name="email"  required>
                        <div id="names2">
                            <input  style="height: 33px;" placeholder="password"  type="password" name="pass"  required>
                            <input style="height: 33px;"  placeholder="Confirm" type="password" name="cpass"  required>
                        </div><hr>
                        <span ><input style="cursor: pointer; transform: scale(0.6); box-shadow: none;" type="checkbox" name="rem" id="rem2" required> <br> I agree the terms and condition</span><br>


                            <h3>Already Have Account?</h3>
                            <div id="btn2">
                                <b style="font-size: 15px;" id="login2">Log In</b>
                                <button type="submit" id="signin2">Sign In</button>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
            </form>
        </div>
        <div id="login">
            <form action="logininfo.php" method="post">
                <div id="login2">
                    <h3 id="topic">Get Your Account</h3>
                    <div id="lbox">
                        <img src="img/others/logo.png" alt="" id="logo2">
                        <div id="other-way">
                            <a href="#"><img src="img/others/google.png" alt="" id="google"> </a>
                            <a href="#"><img src="img/others/facebook.png" alt="" id="fb"></a>
                        <a href="#"><img src="img/others/github.png" alt="" id="github"> </a>
                        </div>
                        <div id="main">
                            <marquee behavior="scroll" direction="left"><h5 id="marq">..Don't Share Any Personal Details To Anyone..</h5></marquee>
                            <i class="fa-solid logico fa-user"></i><input placeholder="E-mail"  type="text" name="email" required id="email"<br>
                            <i class="fa-solid logico fa-key"></i><input placeholder="PASSWORD" type="password" name="pass" required id="pass"><br>
                            <!-- <span><input style="cursor: pointer; border-radius: 50%;" type="checkbox" name="rem" id="rem" required>.REMEMBER</span><br> -->

                            <button type="submit" id="login1">LOGIN</button>

                            <div id="btnmain">
                                <h3>Don't Have Account?</h3>
                                <div id="btn">
                                    <button style="font-size: 15px;" id="signin1">SIGN IN</button>
                                </div> 
                            </div>
                            


                        </div>
                    </div>
                </div>
            </form> 
        </div>
    </div>
</body>
<script src="js.js"></script>
</html>  
