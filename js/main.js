var ftext = 'Happy birthday to a special person who is bringing so much joy to my heart. I am thankful for every moment we spend together, and I wish our happiness never ends , May this day be as sunny as your smile, and as beautiful as you are. You shine every day, but on this day you will shine the brightest. Happy Birthday , i love u Yehia',
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