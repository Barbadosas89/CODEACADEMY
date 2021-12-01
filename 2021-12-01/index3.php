<?php

// Sukurkite masyvą $arr iš reikšmių: '!', 'Hello', 'world'. Naudodami sukurtą masyvą priskirti reikšme 'Hello, world!'
//  naujam kintamajam ir atspausdinkite jį ekrane.
$array=['!', 'Hello', 'world'];
$new_arr="$array[1] $array[2] $array[0]";
echo ($new_arr);