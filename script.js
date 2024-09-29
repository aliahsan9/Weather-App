const API_KEY = '14951c93f3d11e8ac8bed96dd90e8bc7';

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error("City not found");
            }
            return res.json();
        })
        .then(data => displayTemperature(data))
        .catch(err => {
            console.error(err);
            alert('City not found or an error occurred.');
        });
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};

const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    // Set weather icon
    const iconUrl = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('img1');
    imgIcon.setAttribute('src', iconUrl);
};
