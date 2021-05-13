// Hora
// Adiciona zero
function pad(s) {
  return (s < 10) ? '0' + s : s;
}

function showTime() {
  var date = new Date();
  hora.innerHTML = [date.getHours(), date.getMinutes()].map(pad).join(':');
}

//  Mostrando a hora em tempo real
setInterval(function () {
  showTime();
}, 500);

// Voltando para o Login
logout = () => {
  window.open('./login.html', '_self');
}

//  Dia da semana, mês e ano
getDayWeekYear = () => {
  mydate = new Date();
  myday = mydate.getDay();
  mymonth = mydate.getMonth();
  myweekday = mydate.getDate();
  myYear = mydate.getFullYear();
  weekday = myweekday;

  // Verifica o dia
  if (myday == 0)
    day = " domingo, "

  else if (myday == 1)
    day = " degunda - feira, "

  else if (myday == 2)
    day = " terça - feira, "

  else if (myday == 3)
    day = " quarta - feira, "

  else if (myday == 4)
    day = " quinta - feira, "

  else if (myday == 5)
    day = " sexta - feira, "

  else if (myday == 6)
    day = " sábado, "

  // Verifica mês
  if (mymonth == 0)
    month = "janeiro "

  else if (mymonth == 1)
    month = "fevereiro "

  else if (mymonth == 2)
    month = "março "

  else if (mymonth == 3)
    month = "abril "

  else if (mymonth == 4)
    month = "maio "

  else if (mymonth == 5)
    month = "junho "

  else if (mymonth == 6)
    month = "julho "

  else if (mymonth == 7)
    month = "agosto "

  else if (mymonth == 8)
    month = "setembro "

  else if (mymonth == 9)
    month = "outubro "

  else if (mymonth == 10)
    month = "novembro "

  else if (mymonth == 11)
    month = "dezembro "

  detailsTime.innerHTML = `${day + myweekday + ' de ' + month + ' de ' + myYear}`;
}

getDayWeekYear();