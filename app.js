function pow (){
let pas = document.getElementById('inp1').value;
let element = document.getElementById('key0');
if (pas == "#00FF00") {
//  alert("bingo");
  element.style.display = 'contents';
} else {
  alert("Ошибочка вышла.");
 }
}
function pow1 (){
let pas = document.getElementById('inp2').value;
let element1 = document.getElementById('key1');
if (pas == "#228FF0") {
//  alert("bingo");
  element1.style.display = 'contents';
} else {
  alert("Ошибочка вышла.");
 }
}
function pow2 (){
let com = document.getElementById('inp3').value;
let element3 = document.getElementById('key2');
let element4 = document.getElementById('key3');
let element5 = document.getElementById('key4');

if (com == "fotoVid") {
//  alert("bingo");
  element3.style.display = 'contents';

} else if (com == "videoVid") {
 //  alert("bingo");
   element4.style.display = 'contents';

 } else if (com == "musicVid") {
  //  alert("bingo");
    element5.style.display = 'contents';

  } else if (com == "clear") {
   //  alert("bingo");
     element3.style.display = 'none';
     element4.style.display = 'none';
     element5.style.display = 'none';


   } else if (com == "fotoVidClear") {
    //  alert("bingo");
      element3.style.display = 'none';

    } else if (com == "videoVidClear") {
     //  alert("bingo");
       element4.style.display = 'none';

     } else if (com == "musicVidClear") {
      //  alert("bingo");
        element5.style.display = 'none';

      } else {
   alert("Неизвестная команда.");
  }
}
