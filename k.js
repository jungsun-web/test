 //모든 article 요소들을 변수 items에 저장
 const items = document.querySelectorAll('article')

 for (let i=0; i<items.length; i++) {
     items[i].addEventListener('mouseenter', function(e){
        
        e.currentTarget.querySelector("video").play();
     })
 }
 
 
 
 
 for (let i=0; i<items.length; i++) {
     items[i].addEventListener('mouseleave', function(e){
        
        e.currentTarget.querySelector("video").pause();
     })
 }
 
 
 
 for (let i=0; i<items.length; i++) {
     items[i].addEventListener('click', function(e){
        
        document.querySelector('aside').classList.add('active')
     })
 }
 
 const button = document.querySelector('button')
 
   button.onclick= function(){
     document.querySelector('aside').classList.remove('active')
   }
 
