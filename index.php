<?php
    require 'functions.php';
    $result = query("SELECT * FROM karyawan");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
</head>
<body>
    <h1>Daftar Karyawan</h1>
        <a class="tambah" href="tambah.php">Tambah data</a>
    <br><br>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <td>No.</td>
            <td>Nama</td>
            <td>Email</td>
            <td>Address</td>
            <td>Gender</td>
            <td>Position</td>
            <td>Status</td>
            <td>Action</td>
        </tr>
        <!-- print data from result -->
        <?php $i = 1; ?>
        <?php foreach($result as $row) : ?>
        <tr>
        <td><?= $i; ?></td>
            <td><?= $row["name"]; ?></td>
            <td><?= $row["email"]; ?></td>
            <td><?= $row["address"]; ?></td>
            <td><?= $row["gender"]; ?></td>
            <td><?= $row["position"]; ?></td>
            <td><?= $row["status"]; ?></td>
            <td>
                <a href="hapus.php?id=<?= $row["id"]; ?>"" class = "button">DELETE</a>
                <a href="update.php?id=<?= $row["id"]; ?>"" class = "button1">UPDATE</a>
            </td>
            <?php $i++; ?>
        </tr>
        <?php endforeach; ?>
</body>
<style>
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
.button,.button1{
    background-color: #04AA6D;
    color: white;
    padding: 15px 25px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    margin-top: 10px;
    margin-right:29%;
    font-size: 15px;
    position:flex;
    text-decoration: underline
}

.button:hover {
    background-color: #45a049;
}
    
.tambah{
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
    text-decoration: underline
}

table {
    border-collapse: collapse;
}

tr, td {
    border: 1px solid black;
    padding: 8px;
}

thead th {
    width: 10%;
    background-color: #333;
    color: black;
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

</style>
</html>