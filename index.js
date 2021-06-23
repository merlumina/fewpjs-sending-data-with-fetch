function submitData(userName, userEmail) {

    let formData = {
    name: userName,
    email: userEmail
    };

    let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            appendID(object);
        })
        .catch(function(error) {
        document.body.innerHTML = "Unauthorized Access";
  }); 
}

function appendID(userObj) {
    //let div = document.createElement('div');
    //div.innerText = userObj["id"];
    //document.querySelector('body').appendChild(div);
    document.body.innerHTML = userObj.id;
}