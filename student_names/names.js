var interested = prompt("Would you like to start a student roster? (y/n)")
var perName = [];

function inOrOut(response){
  if(response.toLowerCase() == 'y'){
    var inter = prompt("Would you like to: add, remove, display or quit?")
    inter.toLowerCase();
    while (inter == 'add' || inter == 'drop' || inter == 'display'){
      if(inter == 'add'){
        var nameAdd = prompt("Please type the name you want to add")
        nameAdd.toLowerCase()
        perName.push(nameAdd);
      }else if (inter == 'drop') {
        var nameRemove = prompt("Please type the name you want to add")
        nameRemove.toLowerCase()
        if(perName.includes(nameRemove)){
          perName.pop(nameRemove);
        }else{
          alert("They are not currently on our list")
        }
      }else if (inter == 'display'){
        if(perName.length < 1){
          alert("Sorry, no names are present")
        }else{
          alert(perName);
        }
      }else{
        alert("Sorry didn't quit catch that")
      }
      inter = prompt("Would you like to: add, drop, display or quit?");
    }
    alert("Thanks for stopping by!")
  }else{
    alert("Thanks for stopping by!")
  }
}

inOrOut(interested)
