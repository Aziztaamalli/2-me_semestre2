document.getElementById("postForm").addEventListener("submit",function(event){
    event.preventDefault(); //prevent the page from reloading on
    sendPostRequest();
})
function sendPostRequest() {
    const nameee = document.getElementById('postName').value;
    const ageee = document.getElementById('postAge').value;
    const data = {
        n: nameee,
        a: ageee
    };
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = 'POST Request Response: ' +data;;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function sendGetRequest() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = 'GET Request Response: ' + JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}