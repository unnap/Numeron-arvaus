var ranNum = Math.floor(Math.random() * 10) + 1;
var arvausCount = 1;
var buton = document.getElementsByClassName('arvaus');


console.log(ranNum);

function arvaus(n) {
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
    alert('Oikein!');
    reset();
  } else if (arvausCount === 3) {
    alert('Liian monta arvausta!');
    reset();
  } else {
    alert('Väärin!');
    if (n < ranNum) {
      alert('Even higher!');
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
      alert('Even lower.');
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
  ranNum = 0;
  ranNum = Math.floor(Math.random() * 10) + 1;
  arvausCount = 0;
  if (one.style.visibility === 'hidden') {
    one.style.visibility = 'visible';
  }
  if (two.style.visibility === 'hidden') {
    two.style.visibility = 'visible';
  }
  if (three.style.visibility === 'hidden') {
    three.style.visibility = 'visible';
  }
  if (four.style.visibility === 'hidden') {
    four.style.visibility = 'visible';
  }
  if (five.style.visibility === 'hidden') {
    five.style.visibility = 'visible';
  }
  if (six.style.visibility === 'hidden') {
    six.style.visibility = 'visible';
  }
  if (seven.style.visibility === 'hidden') {
    seven.style.visibility = 'visible';
  }
  if (eight.style.visibility === 'hidden') {
    eight.style.visibility = 'visible';
  }
  if (nine.style.visibility === 'hidden') {
    nine.style.visibility = 'visible';
  }
  if (ten.style.visibility === 'hidden') {
    ten.style.visibility = 'visible';
  }

  console.log(ranNum);
}
