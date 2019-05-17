const r2 = require('r2');

const apiKey = '134495aa72cbcd0df97f80cceab4fc1c'; 

const getWeather = async locations => {

    try{
        if(locations instanceof Array){
            //if input is an array
            const fetchUrls = locations.map(location=>{
                //for cities
                if(isNaN(location)) return(r2(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`).json);
                //for zipcodes
                else return(r2(`http://api.openweathermap.org/data/2.5/weather?zip=${location}&units=imperial&appid=${apiKey}`).json);
            })
            const weatherDetails = await Promise.all(fetchUrls);
            console.log(weatherDetails)
            return weatherDetails;
            }
            else{
                //return error if input is not an array
                return({ cod: '400' , message: 'input should be a list'});
            }
    }
    catch(e){

        return({ cod: '500' , message: e.message});

    }
               
}

module.exports={
    getWeather: getWeather
}