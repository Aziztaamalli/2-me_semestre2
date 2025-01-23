document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    fAnalyzeMe();
});
function fAnalyzeMe() {
    const name = document.getElementById('name').value;
    const birthdate = new Date(document.getElementById('birthdate').value);
    const day = birthdate.getDate();
    const month = birthdate.getMonth() + 1; // JavaScript months are 0-based
    const year = birthdate.getFullYear();
    // API Calls
    Promise.all([
        fetch(`https://api.nationalize.io?name=${name}`).then(response => response.json()),
        fetch(`http://numbersapi.com/${month}/${day}/date?json`).then(response => response.json()),
        fetch(`https://api.agify.io?name=${name}`).then(response => response.json()),
        fetch(`http://numbersapi.com/${new Date().getFullYear() - year}?json`).then(response => response.json())
    ]).then(([nationalizeResponse, dateFactResponse, agifyResponse, ageFactResponse]) => {
        // Update HTML Table
        const tableBody = document.querySelector('table tbody');
        tableBody.innerHTML = `<tr>
            <td>${name}</td>
            <td>${nationalizeResponse.country[0] ? nationalizeResponse.country[0].country_id : 'Unknown'}</td>
            <td>${birthdate.toISOString().split('T')[0]}</td>
            <td>${dateFactResponse.text}</td>
            <td>${agifyResponse.age}</td>
            <td>${ageFactResponse.text}</td>
        </tr>`;
    }).catch(error => console.error('Error:', error));
}
