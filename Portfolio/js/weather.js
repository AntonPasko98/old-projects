function weather() {

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=riga&units=metric&apikey=ab85ba57bbbb423fb62bfb8201126ede", function(data) {
            var temp = Math.floor(data.main.temp);
            var weather = data.weather[0].main;
            var humidity = Math.floor(data.main.humidity);
            var windSpeed = Math.floor(data.wind.speed);
            var visibility = Math.floor(data.visibility);
            console.log(data);

             switch (weather) {
                case "Snow":
                    weather = "Sniegs";
                    break;
                case "Rain":
                    weather = "Lietus";
                    break;
                case "Thunderstorm":
                    weather = "Pērkona negaiss";
                    break;
                case "Drizzle":
                    weather = "Smidzina";
                    break;
                case "Mist":
                    weather = "Migla";
                    break;
                case "Haze":
                    weather = "Dūmaka";
                    break;
                case "Fog":
                    weather = "Migla";
                    break;
                case "Clear":
                    weather = "Skaidras debesis"
                    break;
                case "Clouds":
                    weather = "Mākoņains";
                    break;
             }

            $(".temp").append("Temperatūra: " + temp + "&#176;C");
            $(".humidity").append("Gaisa mitrums: " + humidity + "%");
            $(".weather").append("Nokrišņi: " + weather);;
            $(".windSpeed").append("Vēja ātrums: " + windSpeed + "m/s");
            $(".visibility").append("Redzamība: " + visibility + "m");

            setInterval(weather, 10);
        })
    }