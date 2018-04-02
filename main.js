jQuery(function($){

  const launch = new Date(2019, 03, 02, 00, 00, 00);
  const days = $('#days');
  const hours = $('#hours');
  const minutes = $('#minutes');
  const seconds = $('#seconds');

  setDate();
  function setDate(){
    const now = new Date();
    const s = ((launch.getTime() - now.getTime())/1000) - now.getTimezoneOffset()*60;
    const d = Math.floor(s/86400);
    /* 24*60*60 = 86400 */
    days.html('<strong>'+d+'</strong>Jour'+(d>1?'s':''));
    s -= d*86400;

    const h = Math.floor(s/3600);
    hours.html('<strong>'+h+'</strong>Heure'+(h>1?'s':''));
    s -= h*3600;

    const m = Math.floor(s/60);
    minutes.html('<strong>'+m+'</strong>Minute'+(m>1?'s':''));
    s -= m*60;

    const s = Math.floor(s);
    seconds.html('<strong>'+s+'</strong>Second'+(s>1?'s':''));
    s -= s*60;

    setTimeout(setDate, 1000);


  }

});
