// $("button").click(function() {
//   var fired_button = $(this).val();
//   console.log(fired_button);
// });
var img = document.getElementById('rouletteimg');
var answer = 0;

function correct(){
  answer = 1;
  console.log(answer);
}

function rotate_roulette() {
  img.style.transform = "rotate(480deg)";

  if(answer == 1){
    

  }
}
function reset_roulette() {
  img.style.transform = "rotate(0deg)";
}





