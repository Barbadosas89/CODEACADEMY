
<?php

// Sukurkite dvimatį masyvą. Pirmieji du raktai yra lt ir en.
// Raktai turi savaitės dienų vardų masyvus lietuviškai ir angliškai.
// Naudodamiesi šiuo masyvu, pirmadienį parodykite lietuvių kalba, o trečiadienį - anglų kalba.
// Sukurkite kintamuosius lang (reikšmės lt arba en) ir parodykite dieną
$days = [
    'lt' => ["pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis","sekmadienis"],
    'en' => ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday","sunday"],

];
echo $days['lt'][0], '<br>', $days['en'][2], '<br>';



$lang = 'en';

$date = date('l');
$today = date('w');

if ($lang === 'en') {
    $return = "Today is $date";
} else {
    $result = $days[$lang][$today-1];
    $return = "Siandien yra $result";
}
echo $return;

