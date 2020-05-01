
const displayDate = ()=>{
   let timeUI = document.querySelector('.time--holder')
   let dateUI = document.querySelector('.date--holder')

   const dateInt = ()=>{
        let date = new Date();
        // time 
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let hour = date.getHours();

        let minStr = min.toString();
        let secStr = sec.toString();
        let hrStr  = hour.toString();

        if(secStr.length > 1){
            timeUI.textContent = `${hrStr} : ${minStr} : ${secStr}`;
        }else if(minStr.length > 1){
            timeUI.textContent = `${hrStr} : ${minStr} : ${secStr}`;
        }else if(hrStr.length > 1){
            timeUI.textContent = `${hrStr} : ${minStr} : ${secStr}`;
        }else{
            timeUI.textContent = `0${hrStr} : 0${minStr} : 0${secStr}`;
        }



        console.log( minStr.length)

        // date
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();


        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

        dateUI.textContent =    `${days[day]}, ${months[month]}, ${year}`;

        // console.log(`todays is: ${months[month]}, ${days[day]}, ${year}`)
   }

   setInterval(dateInt, 1000)
}
displayDate()