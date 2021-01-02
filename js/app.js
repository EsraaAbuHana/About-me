
'use strict';
var score = 0;
var username = prompt('Hello, What is your name?');
function greeting() {

    alert("Welcome to my website  " + username);
}
greeting();
function daystaute() {
    var userInput = prompt('How was your day tell now?').toLowerCase();
    switch (userInput) {
        case 'good':
        case 'great':
        case 'fine':
        case 'cool':
            alert('glad to hear that!!,lets move to our game :)..');
            break;
        case 'not good':
        case 'bad':
            alert('I hope now it is become better ');
            break;
        default:
            break;
    }
}
daystaute();
qustion1();
qustion2();
qustion3();
qustion4();
qustion5();
qustion6();
qustion7();
alert('Your Final Score Is: ' + score);
alert('I hope that you enjoid it bye bye , ' + username);
1//
function qustion1() {
    var stablejob = prompt('Did I have a stable job before ?').toLowerCase();
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
            score++;
            break;
    }
}
2//
function qustion2() {
    var experience = prompt('Did I have any experience in  website design before having this course ?').toLowerCase();
    switch (experience) {
        case 'yes':
        case 'y':
        case 'yah':
            alert('No :(');
            break;
        case 'no':
        case 'n':
        case 'never':
            alert('yes ,thats right');
            score++;
            break;
    }
}
3//
function qustion3() {
    var myseason = prompt('Is fall my favorite season?').toLowerCase();
    switch (myseason) {
        case 'yes':
        case 'y':
        case 'yah':
            alert('yes,thats right');
            score++;
            break;
        case 'no':
        case 'n':
        case 'never':
            alert('No , its not right :(');
            break;
    }
}
4//
function qustion4() {
    var polymathperson = prompt('Do you think that I am a polymath person?').toLowerCase();
    switch (polymathperson) {
        case 'yes':
        case 'y':
        case 'yah':
            alert(':) :) thank you ');
            score++;
            break;
        case 'no':
        case 'n':
        case 'never':
            alert('its okay -_- -_-');
            break;
    }
}
5//
function qustion5() {
    var old = prompt('Am I 25 years old ?').toLowerCase();
    switch (old) {
        case 'yes':
        case 'y':
        case 'yah':
            alert('No,its not right'); break;
        case 'no':
        case 'n':
        case 'never':
            alert('right guessing ');
            score++; break;
    }
}
6//
function qustion6() {
    var i = 0;
    var rightnum = 27
    var guessnum = prompt('try to pick number between 20 to 30')
    while (i < 4) {
        if (rightnum == guessnum) {
            alert('its right !!!,thats pretty amazing!!!the right number is 27 '); 
            score++;
            break;
        }
        else if (guessnum >= 20 && guessnum <= 24) {
            alert('its too low, try with a larger number');
            guessnum = prompt('try again , please');
            i++
        }
        else if (guessnum == 29 || guessnum == 30) {
            alert('its too high, try with a smaller number');
            guessnum = prompt('try again , please');
            i++ }
        else if (guessnum >=25 || guessnum <=28){
            alert('pretty much close ,keep trying ');
            guessnum = prompt('you are doing well ,try again!!');
            i++}
            if (i >=4) { alert('No :( ,You have exhausted all your attempts , the right number is 27'); }
            
        
    }
}
7//
function qustion7() {
    var j = 0
    var bestmovie = prompt('Could you try to guess a name of one of my favourite movies?').toLowerCase();
    var movieslist = ['interstellar', 'inception', 'beautiful mind', 'pay it forward', 'parasite', '12 angry men'];
    var lowerbestmovie = bestmovie.toLowerCase();
    while (j < 4) {
        if (lowerbestmovie === movieslist[0] || lowerbestmovie === movieslist[1] || lowerbestmovie === movieslist[2] || lowerbestmovie === movieslist[3] || lowerbestmovie === movieslist[4] || lowerbestmovie === movieslist[5]) {
            alert('Its totally right ,you gussed it :) !!!');
            score++;
break;
        }
        else if ((lowerbestmovie !== movieslist[0] || lowerbestmovie !== movieslist[1] || lowerbestmovie !== movieslist[2] || lowerbestmovie !== movieslist[3] || lowerbestmovie !== movieslist[4] || lowerbestmovie !== movieslist[5])) {
            lowerbestmovie = prompt('thats wrong :( ,take another attempt').toLowerCase();
            j++;
        }
        
    }if (j >= 4) {
            alert('No :( ,You have lost all your attempts ');
        } alert('these are my best movies list  : ' + movieslist[0] + ', ' + movieslist[1] + ', ' + movieslist[2] + ', ' + movieslist[3] + ', ' + movieslist[4] + ', ' + movieslist[5]);
}