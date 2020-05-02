
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

        let timeSec = secStr

        secStr.length > 1 ? secStr = secStr : secStr = '0' + secStr;
        minStr.length > 1 ? minStr = minStr : minStr = '0' + minStr;
        hrStr.length > 1 ? hrStr = hrStr : hrStr = '0' + hrStr;

        // if(secStr.length > 1){
        //     secStr = secStr
        // } else{
        //     secStr = '0' + secStr}

        // if(minStr.length > 1){
        //     minStr = minStr;
        // }else{
        //    minStr = '0' + minStr}

        // if(hrStr.length > 1){
        //     hrStr = hrStr;
        // }else{
        //     hrStr = '0' + hrStr}

          // if(secStr.length > 1){
        //     secStr = secStr
        // } else{
        //     secStr = '0' + secStr}

        // if(minStr.length > 1){
        //     minStr = minStr;
        // }else{
        //    minStr = '0' + minStr}

        // if(hrStr.length > 1){
        //     hrStr = hrStr;
        // }else{
        //     hrStr = '0' + hrStr}

          // if(secStr.length > 1){
        //     secStr = secStr
        // } else{
        //     secStr = '0' + secStr}

        // if(minStr.length > 1){
        //     minStr = minStr;
        // }else{
        //    minStr = '0' + minStr}

        // if(hrStr.length > 1){
        //     hrStr = hrStr;
        // }else{
        //     hrStr = '0' + hrStr}

          // if(secStr.length > 1){
        //     secStr = secStr
        // } else{
        //     secStr = '0' + secStr}

        // if(minStr.length > 1){
        //     minStr = minStr;
        // }else{
        //    minStr = '0' + minStr}

        // if(hrStr.length > 1){
        //     hrStr = hrStr;
        // }else{
        //     hrStr = '0' + hrStr}

        timeUI.textContent = `${hrStr} : ${minStr} : ${secStr}`;

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

const UIDBController = () =>{
  const getVal = document.querySelector('.input--holder input');
  const btnAdd = document.querySelector('.btn--container .btn--holder')

  const addValue = ()=>{
    if(getVal.value != ''){
    db.collection('task not completed').add(getVal.value).then(()=>{
      getVal.value = '';
    })

    db.collection('task not completed').onSnapshot(snapshot => {
      viweItems();
    })
  }}

  btnAdd.addEventListener('click', addValue);

}

UIDBController();