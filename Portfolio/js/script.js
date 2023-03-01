$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=riga&units=metric&apikey=ab85ba57bbbb423fb62bfb8201126ede", function(data) {
            var temp = Math.floor(data.main.temp);
            console.log(data);
            $(".temp").append(" Temperatūra: " + temp + "&#176;C");
        })    
        window.onload = function() 
        {
            digitalClock();
        }
        function digitalClock() {
            var datum = new Date();
            var weekday = new Array(7);
                weekday[0] = "Svētdiena";
                weekday[1] = "Pirmdiena";
                weekday[2] = "Otrdiena";
                weekday[3] = "Trešdiena";
                weekday[4] = "ceturtdiena";
                weekday[5] = "Piektdiena";
                weekday[6] = "Sestdiena";
            
            var str = ("0" + datum.getHours()).slice(-2) + ":" + ("0" + datum.getMinutes()).slice(-2) + ":" + ("0" + datum.getSeconds()).slice(-2) + ":" + datum.getMilliseconds();
            var atr = ("0" + datum.getDate()).slice(-2) + "." + ("0" + (datum.getMonth() + 1)).slice(-2) + "." + datum.getFullYear();
            var datums = weekday[datum.getDay()];
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            

            ctx.clearRect(0, 0, 1000, 1000);  
            ctx.font = "50px Roboto";
            ctx.fillStyle = "#31a811";
            ctx.fillText(str, 25, 100);
            ctx.fillText(atr, 25, 180);
            ctx.fillText(datums, 25, 250);

            setInterval(digitalClock, 1);
        }