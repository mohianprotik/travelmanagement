
      


document.getElementById('search').addEventListener(
    'click',(e)=>{
        e.preventDefault();
        var ss= document.getElementById("khoj").value;   
        v=ss.toUpperCase(); 
        var w ='PARIS';
        var k ='LOS ANGELS' ;
        var f = 'RUSSIA';
        var q = 'LONDON';
        var d ='LOSANGELES'
 
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
        else if(v ==d) {
            location.href ="./las angels.html";
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


