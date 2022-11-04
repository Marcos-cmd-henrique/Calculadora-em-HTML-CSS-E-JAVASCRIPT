const formData = new FormData(document.querySelector('form'))
const inputValue = formData.get("name")
console.log(inputValue) 


function soma() {
   //alert("1");
   var f=document.getElementById("frm");
   var n1=document.getElementById("n1").value;
   var n2=document.getElementById("n2").value;
   var soma = n1 + n2 ;
   alert(soma);
}

function subtracao() {
   var f=document.getElementById("frm");
   var n1=document.getElementById("n1").value;
   var n2=document.getElementById("n2").value;
   var soma = n1 - n2 ;
   alert(soma);
} 

function multiplicacao() {
   var f=document.getElementById("frm");
   var n1=document.getElementById("n1").value;
   var n2=document.getElementById("n2").value;
   var soma = n1 * n2 ;
   alert(soma);
} 

function divisao() {
   var f=document.getElementById("frm");
   var n1=document.getElementById("n1").value;
   var n2=document.getElementById("n2").value;
   var soma = n1 / n2 ;
   alert(soma);
} 

function mostrarresultados() {
    console.log(mostrarresultados)

}

function limpar(){
   //alert("1");
   var f=document.getElementById("frm");
   var n1 = f.n1;
   var n2 = f.n2;

   n1.value = "";
   n2.value = "";
}