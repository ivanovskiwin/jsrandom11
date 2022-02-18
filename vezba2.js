//1
let year = prompt("Year of birth?");
let todaysYear = new Date();

console.log(todaysYear.getFullYear() - year);

//2
let planeti = ["Sun", "Mercury", "Venus", "Earth", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
console.log(planeti);
console.log(`Without Pluto ${planeti.slice(0, planeti.length-1)}`);

//3
function kelvinToCelsius(kelvin){
    console.log(`In celsius ${kelvin-273.15}`);
}
kelvinToCelsius(prompt("Enter number of kelvins"));

//4
let datum = new Date();
let day ="";
switch(datum.getDay()){
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
    case 7: day = "Sunday"; break;
}
function pmOrAm(time){
    if(time>0 && time<12){
        return "AM";
    }
    return "PM";
}
console.log(`Today is: ${day}`);
console.log(`Current time is: ${datum.getUTCHours()+1} ${pmOrAm(datum.getUTCHours()+1)} : ${datum.getUTCMinutes()} : ${datum.getUTCSeconds()}`);

//5
let fileName = prompt("Enter a name of the file with extension");

console.log(`File type is ${fileName.slice(fileName.indexOf("."), fileName.length)}`);
//6
let fileFormat = fileName.slice(fileName.indexOf(".")+1, fileName.length);
let nizaNepoznati = ["doc","html","css","ptt","txt","odt","java","py","cpp","mp4"];
for(let extension of nizaNepoznati){
    if(extension==fileFormat){
        console.log("Nepoznat format");
        break;
    }
}
//7
let vnesNaString = prompt("Vnesi string");
let prvi3 = vnesNaString.slice(0,3).toLocaleLowerCase();
let konecenString = prvi3 === vnesNaString.slice(0, 3) ? prvi3.toUpperCase()+vnesNaString.slice(3, vnesNaString.length) : vnesNaString ;
console.log(konecenString);

//8
////

//9
let samoglaski = ["a", "e", "i", "o", "u"];
let vnes = prompt("Vnesi string");
let brojNaSamoglaski = 0;
for(let samoglaska of samoglaski){
    for(let bukva of vnes){
        if(bukva==samoglaska){
        brojNaSamoglaski++;
        }
    }
}
console.log(brojNaSamoglaski);

//10
let posledenVnes = prompt("Vnesi posleden string");
function makeHalfString(text){
    return text.slice(0, Math.round(text.length/2));
}
console.log(makeHalfString(posledenVnes));

//11

const nizaOdStringovi = [
    'above',
    'accept',
    'according',
    'account',
    'across',
    'act',
    'action',
    'activity',
    'actually',
    'add',
    'address',
    'administration',
    'admit',
    'adult',
    'affect',
    'after',
    'again']

let najgolem = nizaOdStringovi[0];
for(const string of nizaOdStringovi){
    if(najgolem.length<string.length){
        najgolem = string;
    }
}
console.log(najgolem);