const map = L.map('map').setView([40, -95], 4);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function getRandomInRange(from, to, fixed) {
return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function getLocalities(latitude, longitude) {
    const response = fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => console.log(data.locality))
    .catch(error => console.error(error));

}

const marker1Latitude = getRandomInRange(30, 35, 3);
const marker1Longitude = getRandomInRange(-90, -100, 3)
const marker1Coords = ' Latitude: ' + marker1Latitude + ' Longitude: ' + marker1Longitude;
const marker1Label = document.querySelector("#marker1");
marker1Label.textContent += marker1Coords;
const marker = L.marker([marker1Latitude, marker1Longitude]).addTo(map);

const marker1Locality = ' Locality: ' + getLocalities(marker1Latitude, marker1Longitude);
const marker1LocalityLabel = document.querySelector("#locality1");
marker1LocalityLabel.textContent += marker1Locality;

const marker2Latitude = getRandomInRange(30, 35, 3);
const marker2Longitude = getRandomInRange(-90, -100, 3)
const marker2Coords = ' Latitude: ' + marker2Latitude + ' Longitude: ' + marker2Longitude;
const marker2Label = document.querySelector("#marker2");
marker2Label.textContent += marker2Coords;
const marker2 = L.marker([marker2Latitude, marker2Longitude]).addTo(map);

const marker2Locality = ' Locality: ' + getLocalities(marker2Latitude, marker2Longitude);
const marker2LocalityLabel = document.querySelector("#locality2");
marker2LocalityLabel.textContent += marker2Locality;


const marker3Latitude = getRandomInRange(30, 35, 3);
const marker3Longitude = getRandomInRange(-90, -100, 3)
const marker3Coords = ' Latitude: ' + marker3Latitude + ' Longitude: ' + marker3Longitude;
const marker3Label = document.querySelector("#marker3");
marker3Label.textContent += marker3Coords;
const marker3 = L.marker([marker3Latitude, marker3Longitude]).addTo(map);

const marker3Locality = ' Locality: ' + getLocalities(marker3Latitude, marker3Longitude);
const marker3LocalityLabel = document.querySelector("#locality3");
marker3LocalityLabel.textContent += marker3Locality;




