<?php
include("conn.php");

$nama = $_POST['nama'];
$daftar_sebagai = $_POST['daftar_sebagai'];
$keperluan = $_POST['keperluan'];

$sql = "INSERT INTO `data` (nama, daftar_sebagai, keperluan) VALUES ('$nama', '$daftar_sebagai', '$keperluan')";

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