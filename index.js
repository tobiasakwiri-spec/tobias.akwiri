function tempData() {
    const day01TempF = 32;
    const day02TempC = 25;
    const day03TempF = 70;
    const day04TempC = 18;
    const day05TempF = 80;
    const day06TempC = 15;
    const day07TempF = 72;
    const day08TempC = 28;
    const day09TempF = 68;
    const day10TempC = 20;
    const day11TempF = 75;
    const day12TempC = 23;
    const day13TempF = 82;
    const day14TempC = 30;
    const day15TempF = 65;
    const day16TempC = 22;
    const day17TempF = 77;
    const day18TempC = 26;
    const day19TempF = 78;
    const day20TempC = 24;
    const day21TempF = 73;
    const day22TempC = 21;
    const day23TempF = 79;
    const day24TempC = 27;
    const day25TempF = 71;
    const day26TempC = 19;
    const day27TempF = 74;
    const day28TempC = 17;
    const day29TempF = 76;
    const day30TempC = 29;

let tempInFahrenheit = (day01TempF + day03TempF + day05TempF + day07TempF + day09TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF);
let tempInCelsius = (day02TempC + day04TempC + day06TempC + day08TempC + day10TempC + day12TempC + day14TempC + day16TempC + day18TempC + day20TempC + day22TempC + day24TempC + day26TempC + day28TempC + day30TempC);

let tempCelsius = ((day01TempF - 32) * 5/9) + ((day03TempF - 32) * 5/9) + ((day05TempF - 32) * 5/9) + ((day07TempF - 32) * 5/9) + ((day09TempF - 32) * 5/9) + ((day11TempF - 32) * 5/9) + ((day13TempF - 32) * 5/9) + ((day15TempF - 32) * 5/9) + ((day17TempF - 32) * 5/9) + ((day19TempF - 32) * 5/9) + ((day21TempF - 32) * 5/9) + ((day23TempF - 32) * 5/9) + ((day25TempF - 32) * 5/9) + ((day27TempF - 32) * 5/9) + ((day29TempF - 32) * 5/9);
let tempFahrenheit = ((day02TempC * 9/5) + 32) + ((day04TempC * 9/5) + 32) + ((day06TempC * 9/5) + 32) + ((day08TempC * 9/5) + 32) + ((day10TempC * 9/5) + 32) + ((day12TempC * 9/5) + 32) + ((day14TempC * 9/5) + 32) + ((day16TempC * 9/5) + 32) + ((day18TempC * 9/5) + 32) + ((day20TempC * 9/5) + 32) + ((day22TempC * 9/5) + 32) + ((day24TempC * 9/5) + 32) + ((day26TempC * 9/5) + 32) + ((day28TempC * 9/5) + 32) + ((day30TempC * 9/5) + 32);

const tot_temperature_in_fahrenheit = tempFahrenheit + tempInFahrenheit;
const tot_temperature_in_celsius = tempCelsius + tempInCelsius;

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30; 
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;


console.log ("Average temperature in Fahrenheit: ", avg_temperature_in_fahrenheit);
console.log ("Average temperature in Celsius: ", avg_temperature_in_celsius);
}

tempData();