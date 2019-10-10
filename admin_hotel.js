console.log('from adminhotel.js');

db.collection('HotelBooking').get().then(snapshot => {
    
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
            <td>${guide.ArrivalDAte}</td>
            <td>${guide.DepertureDate}</td>
            <td>${guide.NoOfGuests}</td>
            <td>${guide.RoomType}</td>
         

        `;
        table.appendChild(div);

        // comment end
    });


    });

    
    function myFunction() {
 setTimeout(function(){ location.href = "./index.html"; }, 200);
}


