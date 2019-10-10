console.log('from adminflightjs');

db.collection('FlightBooking').get().then(snapshot => {
    
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
            <td>${guide.Deperture}</td>
            <td>${guide.Destination}</td>
            <td>${guide.DepertingDate}</td>
            <td>${guide.ReturningDate}</td>
            <td>${guide.Adult}</td>
            <td>${guide.Children}</td>
            <td>${guide.Class}</td>

        `;
        table.appendChild(div);

        // comment end
    });


    });
    
    function myFunction() {
 setTimeout(function(){ location.href = "./index.html"; }, 200);
}



