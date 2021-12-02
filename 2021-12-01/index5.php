
<?php

// Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai.
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
// Sukurkite kintamuosius lang (reikšmės lt arba en) ir parodykite dieną
$days = [
    'lt' => ["sekmadienis","pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
    'en' => ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],

];
echo $days['lt'][1], '<br>', $days['en'][3], '<br>';



$lang = 'lt';

$date = date('l');
$today = date('w');

if ($lang === 'en') {
    $return = "Today is $date";
} else {
    $result = $days[$lang][$today];
    $return = "Siandien yra $result";
}
echo $return;
