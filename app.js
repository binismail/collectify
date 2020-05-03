
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
    db.collection('task not completed').add({list: getVal.value}).then(()=>{
      getVal.value = '';
    })
  }}


  db.collection('task not completed').onSnapshot(snapshot => {
      // const changes = snapshot.docs.changes;

      displayItem(snapshot.docs);

      // changes.forEach(change =>{
      //   if(change.type == 'added'){
      //     console.log(change.data());
      //   }
      // })
  })

  const displayItem = (data) =>{

      let html = '';

      data.map(cur => {
        let li = ` <li class="list-task--holder" data-id="${cur.id}">
        <p class="value--holder">${cur.data().list}</p>
        <div class="btn--holder">
        <i class="gg-bookmark"></i>
        <i class="gg-edit-exposure"></i>
        </div>
      </li>`

        html+= li;
      })

     let ulContainer = document.querySelector('.item-task--container-un');

     ulContainer.innerHTML = html;

     console.log(ulContainer)

  }

  btnAdd.addEventListener('click', addValue);

}

UIDBController();