const cel=document.getElementById("celcius")
const fer=document.getElementById("fahrenheit")
const kel=document.getElementById("kelvin")

 cel.addEventListener("input",function(){
    fer.value=parseFloat((cel.value)*9/5)+32;
    kel.value=parseFloat(cel.value)+273.15;
 })
 fer.addEventListener("input",function(){
    cel.value=parseFloat((fer.value-32)*5/9);
    kel.value=parseFloat((fer.value-32)*5/9+273.15);
 })
 kel.addEventListener("input",function(){
    fer.value=parseFloat((kel.value-273.15)*9/5)+32;
    cel.value=parseFloat(kel.value)-273.15;
 })

function refresh() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
}
