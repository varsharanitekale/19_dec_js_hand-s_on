var d=document.getElementById("circle");
var position=0;

let btn=document.getElementById("left").addEventListener('click', test=function(){
        position+=10
        console.log(position);
        
     d.style.left=position+"px";
     d.style.top=position+"px";
     
     
     
     

     
     

 });
 
 var animate=setInterval(test, 1000);
 let btn1=document.getElementById("down").addEventListener('click', test=function(){
     position+=10;
     d.style.top=position+"px";
     if(position>=100){
         stop();
     }

 });
 var animate=setInterval(test, 1000);

function stop(){
    clearInterval(animate);
    d.style.left=position+"px";
    position+=10;

}