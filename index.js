
const cityNameText = document.getElementById('city-name');
const tempText = document.getElementById('city-temp');
const weather = document.getElementById('city-weather')
const weatherBox = document.getElementById('city-info');
const form = document.querySelector('form');



form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const cityName = document.getElementById('city').value.toUpperCase();
 
  localStorage.setItem('city', `${cityName}`);
  const cityNameText = document.getElementById('city-name');
  cityNameText.innerHTML = `${cityName}`;
  const cityKey = await getWeatherKey(cityName);
  const cityInfo = await getWeather(cityKey);
  

  updateUI(cityInfo);

  
  
 


form.reset();
})


function updateUI(input) {

  const cardWrapper = document.getElementById('card-wrapper');
  cardWrapper.classList.remove('hidden');
  const dayImg = document.getElementById('dayTime');
  const source = (input.IsDayTime) ? 'day.jpg' : 'night.jpg'
    dayImg.src = `${source}`;
  

  const icon = document.getElementById('icon');
  icon.src = `icons/${input.WeatherIcon}.svg`;

  const desc = document.getElementById('weather-desc');
  desc.innerHTML = `${input.WeatherText}`;

  const temp = document.getElementById('city-temp');
  temp.innerHTML = `${input.Temperature.Imperial.Value} &deg;F`
  

}
























