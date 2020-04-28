let date = {};

date.format = ()=>{
  setInterval(() => {
    let month = new Date().getMonth() + 1;
    switch (month) {
      case 1:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Enero " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Enero " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 2:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Febrero " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Febrero " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 3:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Marzo " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Marzo " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 4:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Abril " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Abril " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 5:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Mayo " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Mayo " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 6:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Junio " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Junio " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 7:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Julio " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Julio " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 8:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Agosto " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = date.getHours() + ":" + date.getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Agosto " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 8:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Agosto " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Agosto " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 9:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Septiembre " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Septiembre " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 10:
        if(new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Octubre " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Octubre " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 11:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Noviembre " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Noviembre " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
      case 12:
        if (new Date().getMinutes() < 10) {
          let time = new Date().getHours() + ":0" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Diciembre " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        } else {
          let time = new Date().getHours() + ":" + new Date().getMinutes();
          document.querySelector("#date").innerHTML = time + "&nbsp; | &nbsp;" + new Date().getDate() + "&nbsp;&nbsp; Diciembre " +  "&nbsp;&nbsp;" + new Date().getFullYear();
        }
        break;
    }
  }, 1000);
};

module.exports = date;
