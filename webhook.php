<?php
include("conn.php");

$suhu = $_POST['suhu'];
$waktu = $_POST['waktu'];

// get latest data in database
$sql = "SELECT * FROM mahasiswa ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$stambuk = $row['stambuk'];

$sqlInsert = " UPDATE mahasiswa SET suhu = '$suhu', waktu = '$waktu' WHERE stambuk = '$stambuk'";
if ($conn->query($sqlInsert) === TRUE) {
    echo "Record updated successfully";
  } else {
    echo "Error updating record: " . $conn->error;
  }
?>