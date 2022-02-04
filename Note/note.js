
var textNote = [];
const textKey = "nt";
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
var i;
var localKey = localStorage.getItem(textKey);
 textNote = localKey ? JSON.parse(localKey) : [] ;



window.onload = function () {
  var add1 = '';

 if (textNote.length >= 0) {
  
  for (let i = 0; i < textNote.length; i++) {
    add1 += `<div class="card">
    <div class="header"> <b>Note ${i + 1}</b></div>
    <div class="body">
      <p>${textNote[i]}</p>
    </div>
    <div class="footer">
     <span>${ day + " / " + month + " / " + year}</span>
     <i class="far fa-trash-alt" id="__${ i + 1}"></i>
    </div>
  </div>`
     
   }

    document.getElementById('add').innerHTML = add1;
}

};

  document.getElementById('btn').addEventListener('click',()=>{
    
    var textinfo =  document.getElementById('note').value;
    var add2='';

    if (!textinfo) {

      alert("empty...!!");

    }else{
      textNote.unshift(textinfo);
      document.getElementById('note').value = "";
      

  
        var localNote = localStorage.setItem(textKey,JSON.stringify(textNote) );
      

      var localKey = localStorage.getItem(textKey);
       var localparse = JSON.parse(localKey);
        

        for (let i = 0; i < localparse.length; i++) {
         add2 += `<div class="card">
         <div class="header"> <b>Note ${i + 1}</b></div>
         <div class="body">
           <p>${localparse[i]}</p>
         </div>
         <div class="footer">
          <span>${ day + " / " + month + " / " + year}</span>
          <i class="far fa-trash-alt" id="-${i+1}"></i>
         </div>
       </div>`
          
        }
       document.getElementById('add').innerHTML = add2;
      
    }
  });
 
  var selector = '.far';
  document.addEventListener('click', function(e) {
   var el = e.target;
    
    if (!el.matches(selector)) {
      return;
    }
    
    pars = JSON.parse(localStorage.getItem(textKey));
     const noteToDelete = el.parentElement.parentElement.querySelector('.body p').textContent
    const idx = pars.indexOf(noteToDelete)
 
      console.log(noteToDelete);
  
      delete pars[idx];
      pars = pars.filter(function(el) { return el; });

      localStorage.setItem(textKey,JSON.stringify(pars) );

      setTimeout(function() {
        window.location.reload(false);
        
      }, 100);

     
    
  });



  