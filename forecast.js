const key = '87qmObvlxlGyAwOMJFqH0MG9iXxOjKRd';


const getWeatherKey = async (city) => {

  try {
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`, {mode: 'cors'});

    const cityData = await response.json();
    
    return cityData[0].Key;

  }

  catch (error) {
    console.error(error);
  }
 

  
} 

const getWeather = async (id) => {
  const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json()
  return data[0];

}
