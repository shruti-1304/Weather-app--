const searchbox = document.querySelector('.search input')
const searchbtn = document.querySelector('.btn')
const url = `https://api.weatherbit.io/v2.0/current?&key=952d0653d8094b7ca565e6668a5a5d57&include=minutely&city=`
async function checkweather(city){
   
    const response = await fetch(url+city)
    var data = await response.json();

    console.log(data)
    document.querySelector('.city').innerHTML = data.data[0].city_name
    document.querySelector('.temp').innerHTML= Math.round(data.data[0].app_temp ) +"°C"
    document.querySelector('.date').innerHTML=  data.data[0].datetime
    document.querySelector('.wind').innerHTML= data.data[0].wind_spd +' km/h'
      document.querySelector('.humidity').innerHTML= data.data[0].timezone + " %"
    
   
}
searchbtn.addEventListener("click", () => {
   checkweather(searchbox.value)
})