jQuery(function($){

  const launch = new Date(2019, 03, 02, 00, 00, 00);
  const days = $('#days');
  const hours = $('#hours');
  const minutes = $('#minutes');
  const seconds = $('#seconds');

  setDate();
  function setDate(){
    const now = new Date();
    var time = ((launch.getTime() - now.getTime())/1000) - now.getTimezoneOffset()*60;
    const d = Math.floor(time/86400)
    /* 24*60*60 = 86400 */
    days.html('<strong>'+d+'</strong>Jour'+(d>1?'s':''));
    time -= d*86400;

    var h = Math.floor(time/3600);
    hours.html('<strong>'+h+'</strong>Heure'+(h>1?'s':''));
    time -= h*3600;

     var m = Math.floor(time/60);
    minutes.html('<strong>'+m+'</strong>Minute'+(m>1?'s':''));
     time -= m*60;

    var s = Math.floor(time);
    seconds.html('<strong>'+s+'</strong>Seconde'+(s>1?'s':''));
    time -= s*60;

    setTimeout(setDate, 1000);


  }

});
