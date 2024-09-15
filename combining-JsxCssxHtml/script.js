const now = new Date();

// Get the date in "YYYY-MM-DD" format
const formattedDate = now.toISOString().split('T')[0];

const time = new Date();

// Get the time in "HH:MM:SS" format
const formattedTime = time.toTimeString().split(' ')[0];

document.querySelector('.location').innerHTML = `
<h1>Date: ${formattedDate} </h1>`;

document.querySelector('.time').innerHTML = `<h1>Time: ${formattedTime}</h1>`;


let key = '9c2fd4d3d147bcea377ab1b07643c5e5';




async function fetchWeather(url){

    try{

        const response = await fetch(url);
         const data = await response.json();
         console.log(data);
         return data;
       
    } catch(error){

        console.log('Error, Please Try Again');
    }
    
    //console.log(response);
   
   }


document.querySelector('.js-weather').addEventListener('click',() =>{

     // Get the input element by its ID
     var inputElement = document.querySelector('.cityInput');

      const country = document.getElementById('country').value;
     // Retrieve the value of the input
     var cityName = inputElement.value;
     console.log(cityName);
     
 
     var url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&appid=${key}&units=metric`;
    
     // Use .then() to handle the promise
     fetchWeather(url).then(data => {
        console.log(data);
        weatherDisplay(data);
    });

    
   

});

function weatherDisplay(data){


        const weather = `Temperature: ${data.main.temp}°C, 
                         Weather: ${data.weather[0].description}`;


      
    document.querySelector('.js-weatherDisplay').innerHTML =`<h3> ${weather} </h3>`;
  
    
    
    
}



