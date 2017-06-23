colOne = 35
colTwo = 36
colThree = 37
colFour = 38
colFive = 39
colSix = 40
colSeven = 41
tog = 2

var tableData = $('.stylish')
// var topRow = $(".first td a[id]")
// var topRowID = topRow.map(function (){return this.id});
// var colIndex = 0


//refactoring idea #2 use index to create coloumn name and call col value
// $('td').click(function() {
//   console.log($(this).parent().children().index($(this)));
//   colIndex = ($(this).parent().children().index($(this)));
//   coll = ('col' + colIndex)
//   if (tog%2 == 0){
//     tableData.eq([coll]).css('background-color','#c2f0f0')
//   }else{
//     tableData.eq([coll]).css('background-color','#ff8080')
//   }
//   coll = coll - 7
//   tog = tog + 1
// });
//
// function colorChange (index) {
//
// }

//refactoring idea #1 pass in the colIndex

// $(tableData.eq(colIndex)).click(function() {
//   if (tog%2 == 0){
//     tableData.eq([colTwo]).css('background-color','#c2f0f0')
//   }else{
//     tableData.eq([colTwo]).css('background-color','#ff8080')
//   }
//   colTwo = colTwo - 7
//   tog = tog + 1
// })

$(tableData.eq(3)).click(function() {
  if(tog%2 == 0){
    tableData.eq([colThree]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colThree]).css('background-color','#ff8080')
  }
  colThree = colThree - 7
  tog = tog + 1
})

$('#1').click(function() {
  if(tog%2 == 0){
    tableData.eq([colOne]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colOne]).css('background-color','#ff8080')
  }
  colOne = colOne - 7
  tog = tog + 1
})

$('#2').click(function() {
  if(tog%2 == 0){
    tableData.eq([colTwo]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colTwo]).css('background-color','#ff8080')
  }
  colTwo = colTwo - 7
  tog = tog + 1
})

$('#3').click(function() {
  if(tog%2 == 0){
    tableData.eq([colThree]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colThree]).css('background-color','#ff8080')
  }
  colThree = colThree - 7
  tog = tog + 1
})

$('#4').click(function() {
  if(tog%2 == 0){
    tableData.eq([colFour]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colFour]).css('background-color','#ff8080')
  }
  colFour = colFour- 7
  tog = tog + 1
})

$('#5').click(function() {
  if(tog%2 == 0){
    tableData.eq([colFive]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colFive]).css('background-color','#ff8080')
  }
  colFive = colFive - 7
  tog = tog + 1
})

$('#6').click(function() {
  if(tog%2 == 0){
    tableData.eq([colSix]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colSix]).css('background-color','#ff8080')
  }
  colSix = colSix - 7
  tog = tog + 1
})

$('#7').click(function() {
  if(tog%2 == 0){
    tableData.eq([colSeven]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colSeven]).css('background-color','#ff8080')
  }
  colSeven = colSeven - 7
  tog = tog + 1
})
