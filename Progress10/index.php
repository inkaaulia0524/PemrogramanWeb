<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pertemuan10</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    $nilai=88;
    if ($nilai >= 80){
        echo "Nilai Anda A";
    } elseif ($nilai >= 70) {
        echo "Nilai Anda B";
    } elseif ($nilai >= 60) {
        echo "Nilai Anda C";
    } elseif ($nilai >= 50) {
        echo "Nilai Anda D";
    } else {
        echo "Nilai Anda E";
    }
    ?>

</form>
</body>
</html>

