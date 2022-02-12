//y좌표값 알기 /timer
window.addEventListener('scroll', function () {
  console.log("scroll y: " + window.scrollY);
  var scrollT = 600 - (Math.round((window.pageYOffset - 2938) / 34));
  console.log(scrollT);

  var min = Math.floor((scrollT % 3600) / 60);
  var sec = Math.floor(scrollT % 60);
  if (min < 10) { min = "0" + min; }
  if (sec < 10) { sec = "0" + sec; }

  //console.log(min+":" + sec);
  if (scrollT <= 600) {
    document.getElementById("timer").innerHTML = min + ":" + sec;
  }


  if (window.scrollY >= 23242.666015625 || scrollT > 600) {
    document.getElementById('timer').style.display = 'none';
  } else {
    document.getElementById('timer').style.display = 'block';
  }
})

//처음으로 돌아가기. 스크롤 위치 고정
function start_click() {
  // console.log("버튼1을 누르셨습니다.");
  document.getElementById('startpage').style.display = 'none';
  window.scrollTo(0, 0);
}

//랜덤 번호 입력하기
const rand_0_99 = Math.floor(Math.random() * 100);
console.log(rand_0_99);

$(function () {
  $('#greeting').text('환영합니다 ' + rand_0_99 + '번님.');
});

//룰렛
var img = document.getElementById('rouletteimg');
var answer = 0;

function correct() {
  answer = 1;
  console.log(answer);
}

function rotate_roulette() {
  document.getElementById('second_failed').style.display = 'none';
  document.getElementById('second_success').style.display = 'block';
  document.getElementById('dalgona_coffee').style.display = 'block';
  document.getElementById('third_success').style.display = 'block';
  document.getElementById('final').style.display = 'block'
  document.getElementById('footer').style.display = 'block';
  img.style.transform = "rotate(480deg)";
  setTimeout(function () {
    window.scrollTo(0, 11782);
  }, 1000);
  if (answer != 1) {
    document.getElementById('second_success').style.display = 'none';
    document.getElementById('second_failed').style.display = 'block';
    document.getElementById('dalgona_coffee').style.display = 'none';
    document.getElementById('third_success').style.display = 'none';
    document.getElementById('final').style.display = 'none'
    document.getElementById('footer').style.display = 'none';
  }
}

function reset_roulette() {
  img.style.transform = "rotate(0deg)";
}