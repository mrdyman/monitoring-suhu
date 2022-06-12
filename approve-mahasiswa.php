<?php
include("conn.php");

$stambuk = $_POST['stambuk'];
$isApproved = $_POST['isApproved'];

$sql = " UPDATE mahasiswa SET isApproved = $isApproved WHERE stambuk = '$stambuk' ";
if ($conn->query($sql) === TRUE) {
    $status = "success";
  } else {
    $status =  "Error updating record: " . $conn->error;
  }
  $response = [
      'status' => $status
  ];
  echo json_encode($response);
?>