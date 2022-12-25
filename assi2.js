let a = 5;
let b = 6;

 return (a>b)? "a is greater" : "b is greater";



let year_of_birth = 2004;
let age = 2022-year_of_birth;
if(age>=13 && age<=19){
  console.log("Teenage");
}
else if(age>=20 && age<=29){
  console.log("Twenties");
}

let char;
char = "o";
if (char=="a" || char == "e" || char == "i" || char == "o" || char == "u"){
  console.log("Vowel")
}


let char = "n";
if(char != "a" && char != "e" && char != "i" && char != "o" &&char != "u"){
  console.log("Consonants")
}


let a =67
let b = 34
let c = 90
if (a>b && a>c){
  console.log("a is greater");
}
else if (b>a && b>c){
  console.log("b is greater");
}
else{
  console.log("c is greater");
}



let day = "mon"
switch(day){
  case "sun" : console.log("Sunday");
    break;
  case "mon" : console.log("Monday");
     break;
  case "tue" : console.log("Tuesday");
     break;
  case "wed" : console.log("Wednesday")
    break;
  case "thu" : console.log("Thursday");
    break;
  case "fri" : console.log("Friday");
    break;
  case "sat" : console.log("Saturday");
    break;
    default : console.log("input is wrong")
  
}
