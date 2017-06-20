var boxOne = document.querySelector('#one')
var boxTwo = document.querySelector('#two')
var boxThree = document.querySelector('#three')
var boxFour = document.querySelector('#four')
var boxFive = document.querySelector('#five')
var boxSix = document.querySelector('#six')
var boxSeven = document.querySelector('#seven')
var boxEight = document.querySelector('#eight')
var boxNine = document.querySelector('#nine')
var whoWon = document.querySelectorAll('td')


//mouse over
boxOne.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})
boxTwo.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})
boxThree.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})
boxFour.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})
boxFive.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})
boxSix.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})
boxSeven.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})
boxEight.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})
boxNine.addEventListener('mouseover',function(){
  this.style.backgroundColor = '#' + (function co(lor){return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
})



//mouse out
boxOne.addEventListener('mouseout', function(){
  boxOne.style.backgroundColor = '#1E91D6';
})
boxTwo.addEventListener('mouseout', function(){
  boxTwo.style.backgroundColor = '#B8336A';
})
boxThree.addEventListener('mouseout', function(){
  boxThree.style.backgroundColor = '#8FC93A';
})
boxFour.addEventListener('mouseout', function(){
  boxFour.style.backgroundColor = '#E4CC37';
})
boxFive.addEventListener('mouseout', function(){
  boxFive.style.backgroundColor = '#009933';
})
boxSix.addEventListener('mouseout', function(){
  boxSix.style.backgroundColor = '#E18335';
})
boxSeven.addEventListener('mouseout', function(){
  boxSeven.style.backgroundColor = '#78D5D7';
})
boxEight.addEventListener('mouseout', function(){
  boxEight.style.backgroundColor = '#037971';
})
boxNine.addEventListener('mouseout', function(){
  boxNine.style.backgroundColor = '#274690';
})

//click
boxOne.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

boxTwo.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

boxThree.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

boxFour.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

boxFive.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

boxSix.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

boxSeven.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

boxEight.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

boxNine.addEventListener('click', function(){
  this.style.fontSize = '100px'
  this.style.color = "#eee";
  this.style.textAlign = "center";
  this.style.font = "arial";
  if(this.textContent == ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O'
  }else{
    this.textContent = '';
  }
})

//restart
var restart = document.querySelector('#b');

//grab td squares
var sqr = document.querySelectorAll('td');

//clear
function clearTable() {
  for (var i = 0; i < sqr.length; i++) {
    sqr[i].textContent = '';
  }
}


restart.addEventListener('click', clearTable)
