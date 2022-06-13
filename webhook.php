<?php
include("conn.php");

$suhu = $_GET['suhu'];
$waktu = $_GET['waktu'];
if(!isset($suhu) && !isset($waktu)){
  return json_encode("Error, please provide data");
}

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