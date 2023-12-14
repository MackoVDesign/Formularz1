<?php
$serwer = 'localhost';
$baza_danych = 'formularz';
$user = 'root';
$password = '';

$polaczenie = mysqli_connect($serwer, $user, $password, $baza_danych);
if (!$polaczenie) {
    die("Błąd połączenia: " . mysqli_connect_error());
}

echo "Połączenie zostało pomyślnie wykonane";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $imie = $_POST['in_imie'];
    $nazwisko = $_POST['in_nazwisko'];
    $data_urodzenia = $_POST['in_date'];
    $email = $_POST['in_email'];
    $numer_telefonu = $_POST['in_number'];
    $wojewodztwo = $_POST['in_wojewodztwo'];
    $plec = $_POST['Plec'];
    $newsletter = isset($_POST['in_newsletter']) ? 1 : 0;

    $query = "INSERT INTO tabela (imie, nazwisko, data_urodzenia, email, telefon, wojewodztwo, plec, newsletter) VALUES ('$imie', '$nazwisko', '$data_urodzenia, '$email', '$numer_telefonu', '$wojewodztwo', '$plec', '$newsletter')";

    if (mysqli_query($polaczenie, $query)) {
    echo "Dane zostały pomyślnie zapisane do bazy danych.";
    } 
    else {
    echo "Błąd podczas łączenia z bazą danych: " . mysqli_error($polaczenie);
    }

}
    mysqli_close($polaczenie);
?>