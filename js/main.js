var ftext = 'happy birthday A7med shawareb,May the joy that you have spread in the past come back to you on this day. Wishing you a very happy birthday!',
  i = 0;

window.onload = function()
{
  var type = setInterval(function()
  {
     document.getElementById('typed').textContent += ftext[i];
     i =i+1;
  if(i > ftext.length - 1)
  {
    clearInterval(type)
  }
  },100)
}