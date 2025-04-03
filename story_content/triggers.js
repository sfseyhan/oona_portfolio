function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YKXQ2dypLL":
        Script1();
        break;
      case "5nHjBPizzyo":
        Script2();
        break;
      case "6pFU5iFEjaH":
        Script3();
        break;
      case "6dfd3kYmsuQ":
        Script4();
        break;
      case "5YR4BA2JfAK":
        Script5();
        break;
      case "6SIO3mER7X9":
        Script6();
        break;
      case "5WsisjGpXQ9":
        Script7();
        break;
      case "5qgBClFF39K":
        Script8();
        break;
      case "5ws7jEITHxw":
        Script9();
        break;
      case "6VGH6o1OLhd":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('66DJa5h6i1s');
const duration = 750;
const easing = 'ease-out';
const id = '5rsruS8M7Li';
const growAmount = 0.2;
const delay = 2750;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5nxezMtzcUY');
const duration = 750;
const easing = 'ease-out';
const id = '5vYP0We2Mob';
const growAmount = 0.2;
const delay = 14750;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  const target = object('5d5CQE2BoLE');
const duration = 750;
const easing = 'ease-out';
const id = '6lJWCYJbSLx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5d0O6KzImne');
const duration = 750;
const easing = 'ease-out';
const id = '6MRs3PzpoLH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6kB7lh05Hfa');
const duration = 750;
const easing = 'ease-out';
const id = '60yIylZnHbg';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6TBmcu3NmzR');
const duration = 750;
const easing = 'ease-out';
const id = '6lJWCYJbSLx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6qxzSYb0Bpo');
const duration = 750;
const easing = 'ease-out';
const id = '6MRs3PzpoLH';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('62n4PaPSY1G');
const duration = 750;
const easing = 'ease-out';
const id = '6jBXPM6dSiN';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6gxgawNfur7');
const duration = 750;
const easing = 'ease-out';
const id = '6HrDFd9Iqjc';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6YhryNe6wRQ');
const duration = 750;
const easing = 'ease-out';
const id = '64PXBhtxqsS';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
