<?php

// Sukurkite masyvą $arr iš reikšmių: '!', 'Hello', 'world'. Naudodami sukurtą masyvą priskirti reikšme 'Hello, world!'
//  naujam kintamajam ir atspausdinkite jį ekrane.
$arr=['!', 'Hello', 'world'];
$new_arr="'$arry[1], $arr[2] $arr[0]'.";
echo $new_arr;

$vowels = array("d", "n", "t", "o", "u", "A", "E", "O", "U");
$onlyconsonants = str_replace($vowels, "", "I dont like PHP");
echo $onlyconsonants;