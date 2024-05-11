const baseUrl = "https://api.weatherapi.com/v1/current.json?key=6e952983ccc945ffb62173142241005";
export const weatherData = async(city)=>{
    let res = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await res.json();
}
export const weatherDataForLocation = async(lat,long)=>{
    let res = await fetch(`${baseUrl}&q=${lat},${long}&aqi=yes`)
    return await res.json();
}
