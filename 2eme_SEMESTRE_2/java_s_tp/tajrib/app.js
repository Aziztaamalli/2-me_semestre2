document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("weather-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        getMeteo();
    });
});

function getMeteo() {
    const cityInput = document.getElementById("city-input").value;
    const countryInput = document.getElementById("country-input").value;

    const apiUrl = `https://myweatherapi.com/api/weather?city=${cityInput}&country=${countryInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Fill the card with weather information
            document.getElementById("city-name").innerText = cityInput;
            document.getElementById("temperature").innerText = data.temp_c + "°C";
            document.getElementById("weather-description").innerText = data.condition.text;
            document.getElementById("weather-icon").src = "https:" + data.condition.icon;

            // Call postRequest after displaying the weather result
            postRequest(cityInput);
        })
        .catch(error => console.error("Error fetching weather data:", error));
}

function postRequest(city) {
    const apiUrl = "https://istic.tn/LOG/";

    const requestData = {
        ville: city
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    };

    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            const requestId = data.id;
            const message = `This is search number ${requestId}`;
            console.log(message);
            // You can display the message wherever you want in your UI
        })
        .catch(error => console.error("Error posting request:", error));
}
