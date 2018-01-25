alert("Ależ to świetna strona! Nieprawdaż???!")
console.log("Hello World!")
var myHeading=document.querySelector('h1');
myHeading.textContent='Hello World';
var name="Jan Nowak"
console.log(name)
var num1=2;
var num2=3;
function multiply(num1,num2){
var result=num1*num2;
return result;
}
document.querySelector('h1').onclick=function(){
    alert('Czego tak klikasz bezmyślnie!');
}