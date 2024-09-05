const container = document.querySelector('.card');
const search = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather');
const weatherDetails = document.querySelector('.details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const city = document.querySelector('.search input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=734b36065218ceddc7fac2b2ee1c653e&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');


             const image = document.querySelector('.weather img');
            // const temperature = document.querySelector('.weather-box .temperature');
            // const description = document.querySelector('.weather-box .description');
            // const humidity = document.querySelector('.weather-details .humidity span');
            // const wind = document.querySelector('.weather-details .wind span');

            switch (data.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Smoke':
                    image.src ='images/smoke.png';
                    break;
                case'strom':
                    image.src='images/strom.png'
                    break;
                case"Clouds":
                    image.src="images/cloudy.png"
                    break;
                case"rain":
                    image.src= "images/rain.png"
                    break
                case 'Drizzle':
                    image.src = 'images/rain.png';
                    break;
                case"Overcast clouds":
                    image.src ='images/clouds.png'
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Mist':
                    image.src ='images/mist.png';
                    break;

                case 'Haze':
                    image.src = 'images/haze.png';
                    break;

                default:
                    image.src = '';
            }

            document.querySelector('.city').innerHTML = data.name
            document.querySelector('.temp').innerHTML= Math.round(data.main.temp ) +"°C"
            document.querySelector('.wind').innerHTML= data.wind.speed +' km/h wind speed'
            document.querySelector('.humidity').innerHTML= data.main.humidity + " % humidity"
            document.querySelector(".discription").innerHTML=data.weather[0].main
            
              weatherBox.style.display = 'block';
              weatherBox.classList.add('fadeIn');
        });


});