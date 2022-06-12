<?php
include("conn.php");

$nama = $_POST['nama'];
$stambuk = $_POST['stambuk'];
$keperluan = $_POST['keperluan'];

$sql = "INSERT INTO mahasiswa (nama, stambuk, keperluan) VALUES ('$nama', '$stambuk', '$keperluan')";

if ($conn->query($sql) === TRUE) {
  $dataInserted = TRUE;
} else {
    $dataInserted = FALSE;
    $errorMessage = "Error: " . $sql . "<br>" . $conn->error;
}

if($dataInserted) {
    $status = "success";
} else {
  $status = $errorMessage;
}
$response = [
    'status' => $status
];
echo json_encode($response);
?>