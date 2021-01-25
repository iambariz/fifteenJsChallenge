    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const weekdays = [
        "Monday",
        "Tuesday",

    ]

    const deadline = document.querySelector(".end-container");
    const giveaway = document.querySelector(".end-text");
    const items = document.querySelectorAll(".deadline-format h4");

    //console.log(items);

    let futureDate = new Date(2021,3,21,12,15,0);

    //console.log(futureDate);

    const year = futureDate.getFullYear();
    let month = futureDate.getMonth();
    //console.log(month);
    month = months[month];
    const hours = futureDate.getHours();
    const minute = futureDate.getMinutes();
    const day = futureDate.getDate();
    const weekday = weekdays[futureDate.getDay()];


    giveaway.textContent = `Giveaway ends on ${weekday} ${day} ${month} ${year} ${hours}:${minute} `;

    //future time in ms
    const futureTime = futureDate.getTime();

    function getRemainingTime(){
        const today = new Date().getTime();
        const t = futureTime - today;
        //console.log(t);
        //Values in MS
        const oneDay = 24*60*60*1000;
        const oneHour = 60*60*1000;
        const oneMinute = 60*1000;
        //calculate
        let days = t / oneDay;
        days = Math.floor(days);
        let hours = Math.floor((t % oneDay) / oneHour);
        let minutes = Math.floor((t % oneHour) / oneMinute);
        let seconds = Math.floor((t % oneMinute) / 1000);

        //Set values array;
        const values = [days,hours,minutes,seconds];
        console.log(values);
        items.forEach(function(item, index){
            item.innerHTML = values[index];
        })

    }

    getRemainingTime();