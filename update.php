<?php
    require 'functions.php';

    $id = $_GET['id'];
    $nama = !empty($_REQUEST["nama"]) ? $_REQUEST['nama'] : '';
    $email = !empty($_REQUEST["email"]) ? $_REQUEST['email'] : '';
    $address = !empty($_REQUEST["address"]) ? $_REQUEST['address'] : '';
    $gender = !empty($_REQUEST["gender"]) ? $_REQUEST['gender'] : '';
    $position = !empty($_REQUEST["position"]) ? $_REQUEST['position'] : '';
    $status = !empty($_REQUEST["status"]) ? $_REQUEST['status'] : '';

    if(isset($_POST["submitKaryawan"])) {
        $sqlUpdate = "UPDATE karyawan SET name='$nama', email='$email', address='$address', gender='$gender', position='$position', status='$status' WHERE id=$id";

        if(mysqli_query($conn, $sqlUpdate)){
            echo "<script>
            alert('kolom telah diperbarui');
            document.location.href = 'index.php';
            </script>";
        }
        else {
            echo "ERROR: Could not able to execute $sqlUpdate. " . mysqli_error($connection);
        }
    }
    ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tambah data</title>
</head>

<style>
body {
    box-sizing: border-box;
    padding-right: 100px;
    padding-left: 100px;
    padding-top: 50px;
    }

h1 {
    width: 70%;
    font-size: 40px;
    font-weight: 500px;
    padding: 10px 10px;
    border: none;
    background: #222;
    border-radius: 5px;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align:center;
}

input[type=text], select, textarea {
    width: 80%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

label {
    padding: 12px 12px 12px 0;
    display: inline-block;
}

input[type=submit] {
    background-color: #04AA6D;
    color: white;
    padding: 15px 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: 30px;
    margin-right:29%;
    font-size: 15px;
}

input[type=submit]:hover {
    background-color: #45a049;
}

.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 10px;
}

.col-25 {
    float: left;
    width: 10%;
    margin-top: 10px;
}

.col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

table {
    border-collapse: collapse;
}

th, td {
    border: 1px solid black;
    padding: 8px;
}

thead th {
    width: 10%;
    background-color: #333;
    color: white;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 2%;
}

table {
    border-collapse: collapse;
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
}

thead {
    background-color: #333;
    color: white;
}

@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>

<body>
    <h1>Tambah Data Karyawan</h1>

    <form action="" method="POST">
        
        <div class="row">
            <div class="col-25">
                <label for="nama">Nama</label>
            </div>
            <div class="col-75">
            <input type="text" name="nama" id="nama" placeholder="Your Name..">
            </div>
        </div>
        
        <div class="row">
            <div class="col-25">
                <label for="nama">Email</label>
            </div>
            <div class="col-75">
                <input type="text" name="email" id="email" placeholder="Your Email..">
            </div>
        </div>
        
        <div class="row">
            <div class="col-25">
                <label for="address">Address</label>
            </div>
            <div class="col-75">
                <input type="text" name="address" id="address" placeholder="Your Address..">
            </div>
        </div>

        <div class="row">
            <div class="col-25">
                <label for="gender">Gender</label>
            </div>
            <div class="col-75">
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col-25">
                <label for="position">Position</label>
            </div>
            <div class="col-75">
                <input type="text" name="position" id="position" placeholder="Your Position..">
            </div>
        </div>
        <div class="row">
            <div class="col-25">
                <label for="status">Status</label>
            </div>
            <div class="col-75">
                <select id="status" name="status">
                    <option value="fulltime">Full-time</option>
                    <option value="parttime">Part-time</option>
                </select>
            </div>
        </div>

        <div class="row">
            <input type="submit" name="submitKaryawan" value="submit">
        </div>            
       
    </form>
</body>
</html>