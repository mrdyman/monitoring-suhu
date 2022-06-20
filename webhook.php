<?php
include("conn.php");

$suhu = $_GET['suhu'];
$date = new DateTime("now", new DateTimeZone('Asia/Makassar') );
$waktu = $date->format('Y-m-d H:i:s');
if(!isset($suhu) && !isset($waktu)){
  return json_encode("Error, please provide data");
}

// get latest data in database
$sql = "SELECT * FROM `data` ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$id = $row['id'];

$sqlInsert = " UPDATE `data` SET suhu = '$suhu', waktu = '$waktu' WHERE id = '$id'";
if ($conn->query($sqlInsert) === TRUE) {
    echo "Record updated successfully";
  } else {
    echo "Error updating record: " . $conn->error;
  }
?>