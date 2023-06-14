fetch("http://localhost:3000/todos")
.then(function(response){
    return response.json();
})
.then(function displayData(bodyData){
    console.log(bodyData);
});