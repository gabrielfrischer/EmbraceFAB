      
var path = document.querySelector('.timer circle');
var length = path.getTotalLength();
var seconds = 30.00;
var step = 0;
var t_start = 1;
var t_stop = 1;
var playing = true;
var myTimer;

console.log(length);

function buildTimerDisplay(){
  if (seconds < 0.00){
    secString = '0' + seconds;
  } else {
    secString = seconds;
  }
  $('#timerText').text(secString);
}
buildTimerDisplay();

function countdown() {
  buildTimerDisplay();
  myTimer = setTimeout(countdown, 1000);
  //seconds = 30
  console.log('countdown', seconds );
  seconds--;
  if (seconds < 0.00 ){
    seconds = 0.00;
    console.log('clearing timeout')
    reset();
  }
} 



function pauseAll(){
  clearTimeout(myTimer);
  $('.playPause i').removeClass('fa-pause');
    $('.playPause i').addClass('fa-play');
    $(".timer circle")
      .css('animation-play-state', 'paused');
    playing = false;
}
function reset(){
  clearTimeout(myTimer);
  buildTimerDisplay();
  
  $('.playPause i').removeClass('fa-pause');
    $('.playPause i').addClass('fa-play');
    $(".timer circle")
      .css('animation-play-state', 'paused');
    playing = false;
  $(".timer circle").removeClass("animation");
  $('.playPause i').removeClass('fa-pause');
  $('.playPause i').addClass('fa-play');
  seconds = 30.00;
}

function reset120(){
  clearTimeout(myTimer);
  buildTimerDisplay();
  
  $('.playPause i').removeClass('fa-pause');
    $('.playPause i').addClass('fa-play');
    $(".timer circle")
      .css('animation-play-state', 'paused');
    playing = false;
  $(".timer circle").removeClass("animation");
  $('.playPause i').removeClass('fa-pause');
  $('.playPause i').addClass('fa-play');
  seconds = 120.00;
}

function reset60(){
  clearTimeout(myTimer);
  buildTimerDisplay();
  
  $('.playPause i').removeClass('fa-pause');
    $('.playPause i').addClass('fa-play');
    $(".timer circle")
      .css('animation-play-state', 'paused');
    playing = false;
  $(".timer circle").removeClass("animation");
  $('.playPause i').removeClass('fa-pause');
  $('.playPause i').addClass('fa-play');
  seconds = 60;
}

$('.playPause').click(function(){
  $(this).siblings('.range-slider--range').prop( "disabled", true );
  if (playing){
    console.log('Starting the step!!!');


    t_start = Math.floor(Date.now());
    countdown();
    $('.playPause i').removeClass('fa-play');
    $('.playPause i').addClass('fa-pause');
    //seconds = parseInt($('.range-slider--range').val());
    $(".timer circle")
      .addClass("animation")
      .css('animation-play-state', 'running')
      .css('animation-duration', 30 +'s')
      .bind('oanimationend animationend webkitAnimationEnd', function() { 
        $(this).removeClass("animation");
        $('.playPause i').removeClass('fa-pause');
        $('.playPause i').addClass('fa-play');
      });
    $('#timerText').attr('class','started');
    playing = false;
  } else {
    t_stop = Math.floor(Date.now());
    step++;
    console.log(step,t_start,t_stop);
    document.getElementById("timeStampSFTstep").innerHTML = step;
    document.getElementById("timeStampSFTt_start").innerHTML = t_start;
    document.getElementById("timeStampSFTt_stop").innerHTML = t_stop;
    console.log('pause');
    pauseAll();
  playing = true;
  }
  
});