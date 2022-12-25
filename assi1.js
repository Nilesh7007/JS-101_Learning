let number = 45;
if(number%3==0){
  console.log(number, "multiple of 3");
}



let age = 17;
if (age>=18){
  console.log("Apply for a license");
}
else{
  console.log("NA");
}


let a = 5;
let b = 8;
if (a>b){
  console.log("a is greater");
}
else if (a<b){
  console.log("b is greater");
}
else{
  console.log("both are equal");
}


let back_username = "Nilesh";
let back_password = "Khade123";

let given_username = "Nilesh";
let given_password = "Khade123";

if (given_username == back_username && given_password == back_password){
  console.log("login sucessfully");
}
else{
  console.log("username and password are invalid")
}