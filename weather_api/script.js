const cityInput = document.querySelector('#city');
const getDataButton = document.querySelector('#get_data');
const dataDiv = document.querySelector('#data');

const apiGetData = () => {
    let city = cityInput.value;
    let apiKey = 'a640750e2427ddca2b65c747c63b68e6';

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(r => r.json())
    // .then(d => dataDiv.innerHTML = JSON.stringify(d));
    .then(d => fillDataDiv(d));
}
const fillDataDiv = data => {
    console.log(data);
    let cityName = data.name;
    // new - bo tworzymy nowy obiekt instancji
    let dateTime = new Date (data.dt * 1000); 
    let temp = data.main.temp;
    dataDiv.innerHTML = `Today in ${cityName} at ${dateTime.getHours()}:${dateTime.getMinutes()} o'clock the temperature is ${temp} Celcius degree.`
}
getDataButton.addEventListener('click', apiGetData);