var ranNum = Math.floor(Math.random() * 10) + 1;
var arvausCount = 1;


console.log(ranNum);


function arvaus(n) {
  var tulos = document.getElementById('tulos')
  var peli = document.getElementById('peli')
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
  var six = document.getElementById('six');
  var seven = document.getElementById('seven');
  var eight = document.getElementById('eight');
  var nine = document.getElementById('nine');
  var ten = document.getElementById('ten');

  if (n === ranNum) {
    switch (arvausCount) {
      case 1:
        tulos.innerHTML = '';
        peli.innerHTML = '<b>OIKEIN EKALLA YRITYKSELLÄ!</b><p><button type="button" onClick="return reset()">Yritä uudelleen</button></p>';
        break;
      default:
        tulos.innerHTML = '';
        peli.innerHTML = 'Oikein!<p><button type="button" onClick="return reset()">Yritä uudelleen</button></p>';
        break;
    }
  } else if (arvausCount === 3) {
    tulos.innerHTML = '';
    peli.innerHTML = 'Liian monta arvausta!<br />Oikea vastaus olisi ollut <b><font color=#f00>' + ranNum + '</font></b><p><button type="button" onClick="return reset()">Yritä uudelleen</button></p>';
  } else {
    if (n < ranNum) {
      switch(arvausCount) {
        case 1:
          tulos.innerHTML = 'Numero on isompi<br />2 yritystä jäljellä';
          break;
        case 2:
          tulos.innerHTML = 'Numero on isompi<br />1 yritys jäljellä';
          break;
      }
      switch(n) {
        case 1:
          one.style.visibility = 'hidden';
          break;
        case 2:
          one.style.visibility = 'hidden';
          two.style.visibility = 'hidden';
          break;
        case 3:
          one.style.visibility = 'hidden';
          two.style.visibility = 'hidden';
          three.style.visibility = 'hidden';
          break;
        case 4:
          one.style.visibility = 'hidden';
          two.style.visibility = 'hidden';
          three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
          break;
        case 5:
          one.style.visibility = 'hidden';
          two.style.visibility = 'hidden';
          three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
          five.style.visibility = 'hidden';
          break;
        case 6:
          one.style.visibility = 'hidden';
          two.style.visibility = 'hidden';
          three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
          five.style.visibility = 'hidden';
          six.style.visibility = 'hidden';
          break;
        case 7:
          one.style.visibility = 'hidden';
          two.style.visibility = 'hidden';
          three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
          five.style.visibility = 'hidden';
          six.style.visibility = 'hidden';
          seven.style.visibility = 'hidden';
          break;
        case 8:
          one.style.visibility = 'hidden';
          two.style.visibility = 'hidden';
          three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
          five.style.visibility = 'hidden';
          six.style.visibility = 'hidden';
          seven.style.visibility = 'hidden';
          eight.style.visibility = 'hidden';
          break;
        case 9:
          one.style.visibility = 'hidden';
          two.style.visibility = 'hidden';
          three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
          five.style.visibility = 'hidden';
          six.style.visibility = 'hidden';
          seven.style.visibility = 'hidden';
          eight.style.visibility = 'hidden';
          nine.style.visibility = 'hidden';
          break;
      }
    } else if (n > ranNum) {
      switch(arvausCount) {
        case 1:
          tulos.innerHTML = 'Numero on pienempi<br />2 yritystä jäljellä';
          break;
        case 2:
          tulos.innerHTML = 'Numero on pienempi<br />1 yritys jäljellä';
          break;
      }
      switch(n) {
        case 2:
          two.style.visibility = 'hidden';
          three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
          five.style.visibility = 'hidden';
          six.style.visibility = 'hidden';
          seven.style.visibility = 'hidden';
          eight.style.visibility = 'hidden';
          nine.style.visibility = 'hidden';
          ten.style.visibility = 'hidden';
          break;
        case 3:
          three.style.visibility = 'hidden';
          four.style.visibility = 'hidden';
          five.style.visibility = 'hidden';
          six.style.visibility = 'hidden';
          seven.style.visibility = 'hidden';
          eight.style.visibility = 'hidden';
          nine.style.visibility = 'hidden';
          ten.style.visibility = 'hidden';
          break;
        case 4:
          four.style.visibility = 'hidden';
          five.style.visibility = 'hidden';
          six.style.visibility = 'hidden';
          seven.style.visibility = 'hidden';
          eight.style.visibility = 'hidden';
          nine.style.visibility = 'hidden';
          ten.style.visibility = 'hidden';
          break;
        case 5:
          five.style.visibility = 'hidden';
          six.style.visibility = 'hidden';
          seven.style.visibility = 'hidden';
          eight.style.visibility = 'hidden';
          nine.style.visibility = 'hidden';
          ten.style.visibility = 'hidden';
          break;
        case 6:
          six.style.visibility = 'hidden';
          seven.style.visibility = 'hidden';
          eight.style.visibility = 'hidden';
          nine.style.visibility = 'hidden';
          ten.style.visibility = 'hidden';
          break;
        case 7:
          seven.style.visibility = 'hidden';
          eight.style.visibility = 'hidden';
          nine.style.visibility = 'hidden';
          ten.style.visibility = 'hidden';
          break;
        case 8:
          eight.style.visibility = 'hidden';
          nine.style.visibility = 'hidden';
          ten.style.visibility = 'hidden';
          break;
        case 9:
          nine.style.visibility = 'hidden';
          ten.style.visibility = 'hidden';
          break;
        case 10:
          ten.style.visibility = 'hidden';
          break;
      }
    }
  }
  arvausCount++;
}


function reset() {
  ranNum = Math.floor(Math.random() * 10) + 1;
  arvausCount = 1;
  tulos.innerHTML = 'Arvaa numero!<br />3 yritystä jäljellä'
  peli.innerHTML = '<button type="button" id="one" onClick="return arvaus(1)">1</button><button type="button" id="two" onClick="return arvaus(2)">2</button><button type="button" id="three" onClick="return arvaus(3)">3</button><button type="button" id="four" onClick="return arvaus(4)">4</button><button type="button" id="five" onClick="return arvaus(5)">5</button><button type="button" id="six" onClick="return arvaus(6)">6</button><button type="button" id="seven" onClick="return arvaus(7)">7</button><button type="button" id="eight" onClick="return arvaus(8)">8</button><button type="button" id="nine" onClick="return arvaus(9)">9</button><button type="button" id="ten" onClick="return arvaus(10)">10</button>'

  console.log(ranNum);
}
