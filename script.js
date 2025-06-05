const calculate=()=>{
let score=document.getElementById("grades").value;
let units=document.getElementById("units").value;
let result=document.getElementById("results");
let array1=score.split(",");
let array2=units.split(",");
let totalScore=0;
let totalUnits=0;
if (score==0 && units==0){
    alert("Please enter your grades and units.");
}
for(let i=0;i<array1.length;i++){
    totalScore+=Number(array1[i])*Number(array2[i]);
    totalUnits+=Number(array2[i]);}
let gpa=totalScore/totalUnits;
result.innerHTML=`Your GPA is: ${gpa.toFixed(2)}`;

}
const calculateScreening=()=>{
let screening=document.getElementById("screening").value;
let result=document.getElementById("screeningResult");
let level=document.getElementById("level").value;
let array=level.split(",");
let total=0;
if (screening==0 && level==0){
    alert("Please enter your jamb score and O level.");
}
for(let i=0;i<array.length;i++){
    total+=Number(array[i]);}
let jambScore=Number(screening/400);
let screeningResult=(jambScore*60)+(total*(4/3));

result.innerHTML=`Your Screening Result is: ${screeningResult.toFixed(2)}`;
}
function cancel(){
  let cancel=document.getElementById("links");
  cancel.style.display="none";
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
      console.log('Service worker registered:', registration);
    })
    .catch((error) => {
      console.error('Service worker registration failed:', error);
    });
}
