function hesapla(){

    
       not1=document.getElementById("birnot").value
       not2=document.getElementById("ikinot").value
       per=document.getElementById("perf").value
       let sonuc=document.getElementById("sonuc")
     
       let ortalama=(not1+not2+per)/3
       

     if(ortalama>=50){
       sonuc.innerHTML="geçtiniz"+ortalama
     }
     else{
       sonuc.innerHTML="kaldınız"+ortalama
     }
}