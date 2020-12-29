
'use strict';
var username = prompt('Hello, What is your name?');
function greeting() {

    alert("Hello " + username);
}
greeting();
// var username=('Hello,What is your name?');


var userInput = prompt('How was your day tell now?');


switch (userInput) {

    case 'good':
    case 'great':
    case 'fine':
    case 'cool':
        alert('glad to hear that!!,lets move to our game :)..');
        break;
    case 'not good':
    case 'bad':
        alert('i hope now it is become better ');
        break;
    default:
        break;

}
var stablejob = prompt('Did I have a stable job before ?');
switch (stablejob) {
    case 'yes':
    case 'y':
    case 'yah':
        alert('No,not yet');
        break;
    case 'no':
    case 'n':
    case 'never':
        alert('yes,thats right');
        break;

}

var stablejob = prompt('Did I have any experience in  website design before having this course ?');
switch (stablejob) {
    case 'yes':
    case 'y':
    case 'yah':
        alert('No :(');
        break;
    case 'no':
    case 'n':
    case 'never':
        alert('yes,thats right');
        break;

}
var myhobby = prompt('what do you think is my favourite hobby between these:drawing , photographing , reading, hiking ?  ');
switch (myhobby) {
    case 'drawing':
        alert('pretty much close ...');
        break;
    case 'photographing':
        alert('maybe ,someday in future');
        break;
    case 'reading':
        alert('I like it,but not as favourite');
        break;
    case 'hiking':
        alert('WOW,yes it is!!');
        break;
    case 'eating':
        alert('It cannot be denied that it is a favorite hobby for all of us ,hhhh');
        //default:
        break;

}
var myseason = prompt('What is my favorite season?')
switch (myseason) {
    case 'winter':
    case 'summer':
        alert('not here ofcourse!!');
        break;
    case 'spring':
        alert('mmm only for BBQ picnic');
        break;
    case 'fall':
    case 'autumn':
        alert('sure ..it seems you know me');
        break;

}
alert('i hope that you enjoid it beybey,' + username)

