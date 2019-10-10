console.log('from adminpackage js');


function myFunction() {
setTimeout(function(){ location.href = "./index.html"; }, 200);
}



db.collection('TourPackage').get().then(snapshot => {
    
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
            <td>${guide.Place}</td>
        `;
        table.appendChild(div);

        // comment end
    });


    });
