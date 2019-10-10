
      


document.getElementById('search').addEventListener(
    'click',(e)=>{
        e.preventDefault();
        var v= document.getElementById("khoj").value;    
        var w ='paris';
        var k ='los angels' ;
        var f = 'russia';
        var q = 'london';
 
        if(v== w)
        { console.log(v);
            window.location.href = "./paris.html";
        }
        else if(v ==k) {
            location.href ="./las angeles.html";
        }
        else if(v ==f) {
            location.href ="./russia.html";
        }
        else if(v ==q) {
            location.href ="./london.html";
        }
        else
        {
            alert(" Sorry!!! This place is not available  for now");
            location.href ="./index.html";
        }



        });


