console.log('from customersinfo.js');

db.collection('info').get().then(snapshot => {
    
    var cnt = 1;
    snapshot.forEach(doc => {
        const guide = doc.data();
        console.log(guide);

        // comment start    
        
        const table = document.getElementById("tbody");
        const div = document.createElement('tr');
        // div.className = 'media comment-box mt-4';
        div.innerHTML = `
            <th scope="row">${cnt++}</th>
            <td>${guide.Name}</td>
            <td>${guide.Email}</td>
            <td>${guide.Phone}</td>
            <td>${guide.Address}</td>
            <td>${guide.Country}</td>
            <td>${guide.Occupation}</td>
            <td>${guide.ZipCode}</td>
         

        `;
        table.appendChild(div);

        // comment end
    });


    });
    
    function myFunction() {
 setTimeout(function(){ location.href = "./index.html"; }, 200);
}


