function changeBackground(x){
  console.log(x.value);
  var body = document.getElementById('heading');
  body.style.color = x.value;
}

function titleColor(){
  var title = document.getElementById('heading');
  title.style.color = 'red';
}


function validateForm(){
  var firstName = document.forms['myForm']['firstName'].value;
    var lastName = document.forms['myForm']['lastName'].value;

    if((firstName == undefined || firstName == '') || (lastName == undefined || lastName == '')){
      alert('name is required');
            return false;
    }else{

    }

    if(firstName.length < 3 || lastName.length < 3 ){
      alert('name must be more than 3 chars');
            return false;
    }else{

    }
}



//Event02
// function showDate(){
// var time = document.getElementById('time');
//   time.innerHTML = Date();
// }
//
// function clearDate(){
//   var time = document.getElementById('time');
//     time.innerHTML = "";
// }
//


//Event01
// function changeText(){
//   var heading = document.getElementById('heading');
//   heading.innerHTML = 'You clicked';
// }



//
//
// Object Array
// var users = [
//   {
//     name:'Yoshi'
//   },
//   {
//     name:'Yuki'
//   },
//   {
//     name:'Takafumi'
//   }
// ]
//
// console.log(users[2].name);
//


// Constructor Pattern
//
// function Fruit(name, color, shape){
//   this.name = name;
//   this.color = color;
//   this.shape = shape;
//
//   this.describe = function(){
//     return this.name + '\n' + this.color + '\n' + this.shape;
//   }
// }
//
// var apple = new Fruit('apple', 'red', 'round');
// var melon = new Fruit('melon', 'green', 'round');
//
// console.log(melon.describe());
//

// Object Constructor
// var apple = new Object();
//
// apple.color = 'red';
// apple.shape = 'round';
//
// apple.describe = function(){
//   return 'the color of this apple is ' + apple.color + '\nthe shape is ' + apple.shape;
// }
//
// console.log(apple.describe());

//
// < Object>
// var me = {
//   firstName: 'Fuji',
//   lastName: 'Yoshinori',
//   hobbies: ['D.D.R.' ,'Football'],
//   family:{
//     parents:['Shuuichi', 'Yuuko'],
//     siblings:['Yuki', 'Takahumi']
//   },
//   fullName: function(){
//     return this.firstName + " " + this.lastName;
//   }
// }
//
// console.log(me.fullName());
//



//  Array and Conditional
 // var n = [1,2,3,4,5,6];
//
// var i = Math.floor(Math.random()*10)
// console.log(i);
// switch (n[i]) {
//   case 1:
//     console.log("number" + n[i]);
//     break;
//     case 2:
//       console.log("number" + n[i]);
//       break;
//       case 3:
//         console.log("number" + n[i]);
//         break;
//         case 4:
//           console.log("number" + n[i]);
//           break;
//   default:
//     console.log("undefined");
// }
