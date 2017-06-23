colOne = 35
colTwo = 36
colThree = 37
colFour = 38
colFive = 39
colSix = 40
colSeven = 41
tog = 2

var tableData = $('.stylish')

function redBlue(colNum){
  if(tog%2 == 0){
    tableData.eq([colNum]).css('background-color','#c2f0f0')
  }else{
    tableData.eq([colNum]).css('background-color','#ff8080')
  }
}


$('#1').click(function() {
  redBlue(colOne)
  tog = tog + 1
  colOne = colOne-7
})

$('#2').click(function() {
  redBlue(colTwo)
  tog = tog + 1
  colTwo = colTwo-7
})

$('#3').click(function() {
  redBlue(colThree)
  tog = tog + 1
  colThree = colThree-7
})

$('#4').click(function() {
  redBlue(colFour)
  tog = tog + 1
  colFour = colFour-7
})

$('#5').click(function() {
  redBlue(colFive)
  tog = tog + 1
  colFive = colFive-7
})

$('#6').click(function() {
  redBlue(colSix)
  tog = tog + 1
  colSix = colSix-7
})

$('#7').click(function() {
  redBlue(colSeven)
  tog = tog + 1
  colSeven = colSeven-7
})

//REFACTORING NOTES
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
