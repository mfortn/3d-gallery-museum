<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$host = 'localhost';
$user = 'USERNAME';
$pass = 'PASSWORD';
$db   = 'museum';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

$result = $conn->query("SELECT * FROM gallery_assets ORDER BY id ASC");

$assets = [];
while ($row = $result->fetch_assoc()) {
    $assets[] = $row;
}

echo json_encode($assets);

$conn->close();
