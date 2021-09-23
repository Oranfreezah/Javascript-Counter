var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var counter= document.getElementById('counter');

buttonPlus.addEventListener('click', eventClick);
buttonMinus.addEventListener('click', eventClick);

function eventClick(e){
  let counterNumber = Number(counter.innerText)
  if (e.target.id == 'buttonPlus'){
    counterNumber++;
  } else{
    counterNumber--;
  }
  counter.innerText = counterNumber
}
