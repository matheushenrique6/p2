var sec = 0;
var min = 0;
var hor = 0;
var addsec=window.document.getElementById('addsec');
var addmin=window.document.getElementById('addmin');
var addhoras=window.document.getElementById('addhoras');
var intevalo ;
function start(){
    interval = setInterval(startTimer, 1000);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    addsec.innerHTML = sec;
    addmin.innerHTML = min;
    addhoras.innerHTML = hora;

}
function startTimer(){
   if(sec <=0 || sec < 60){
    sec ++;
    addsec.innerHTML = sec; 
   }else if (sec ==60){
    sec = 0;
    min ++;
    addmin.innerHTML = `:${min}:`;
   }else if (min <=60){
    min = 0;
    hor ++;
    addhoras.innerHTML = hor;
   }
}