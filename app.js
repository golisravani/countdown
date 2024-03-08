const months= [ "January", "February","March", "April","May","June","July","August","September","October","November","December" ];
const weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


const  deadline =document.querySelector('.deadline');
const countdown= document.querySelector('.countdown');
const items= document.querySelectorAll('.countdown-format p');

//for future references we add 10days to the present date so that the timer will be updated eevry time when we check any time
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2024,2,10,10,30,59 ); this is for present date

const futureDate= new Date( tempYear, tempMonth, tempDay +10 , 11,30,0);
const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month=futureDate.getMonth();
month=months[month];

const day = weekdays[futureDate.getDay()];

deadline.textContent = `Sale ends on ${day}, ${date} ${month} ${year} ${hours}:${mins}am` ;
// future time in millisecs
const futureTime = futureDate.getTime();
console.log(futureTime); 

function getRemainingTime(){
    const today=new Date().getTime();
   const t = futureTime-today; //this value is in milli secs
   
   // values in ms
   const oneDay = 24*60*60*1000; // 1day=24hrs*60mins*60secs*1000 millisecs       
   const oneHour = 60*60*1000;   // 1hr=60mins*60secs*1000millisecs
   const oneMin= 60*1000;     //1min= 60secs*1000millisecs

   //calculating all values
let days = t/oneDay ;
 days=Math.floor(days);
 let hours = Math.floor(( t% oneDay)/oneHour);  
 let mins = Math.floor((t% oneHour/ oneMin)); //t%oneHour gives the remainder that left over will be divided with oneHour
 let  secs = Math.floor((t% oneMin / 1000));  // 1000 refers to millisecs
 
 const values =[ days,hours,mins,secs ];

function change (item){
 if (item<10){    // this is for the 2-digit number
     return item = `0${item}`
 }
 return item;
}

 items.forEach(function(item,index){
  item.innerHTML= change(values[index]);
 });
// for clearing the countdown
if (t<0){
   clearInterval(timer);
   countdown.innerHTML= `<h3 class="expired"> Sorry! The sale has ended </h3>`;
}

}
//countdown
let timer = setInterval(getRemainingTime, 1000);
getRemainingTime();
   