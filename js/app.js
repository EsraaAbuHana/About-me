
'use strict';
var score = 0;
var username = prompt('Hello, What is your name?');
function greeting() {

    alert("Hello " + username);
}
greeting();
// var username=('Hello,What is your name?');

function daystaute() {
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
            alert('I hope now it is become better ');
            break;
        default:
            break;

    }
}
1//
function qustion1() {
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
            score++;
            break;

    }
}
2//
function qustion2() {
    var experience = prompt('Did I have any experience in  website design before having this course ?');
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
// var myhobby = prompt('what do you think is my favourite hobby between these:drawing , photographing , reading, hiking ?  ');
// switch (myhobby) {
//     case 'drawing':
//         alert('pretty much close ...');
//         break;
//     case 'photographing':
//         alert('maybe ,someday in future');
//         break;
//     case 'reading':
//         alert('I like it,but not as favourite');
//         break;
//     case 'hiking':
//         alert('WOW,yes it is!!');
//         break;
//     case 'eating':
//         alert('It cannot be denied that it is a favorite hobby for all of us ,hhhh');
//         //default:
//         break;

// }
3//
function qustion3() {
    var myseason = prompt('Is fall my favorite season?')
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
    var polymathperson = prompt('Do you think that I am a polymath person?')
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
    var old = prompt('Am I 25 years old ?')
    switch (old) {
        case 'yes':
        case 'y':
        case 'yah':
            alert('No,its not right');

            break;
        case 'no':
        case 'n':
        case 'never':
            alert('right guessing ');
            score++;

            break;
    }
}

// var myseason = prompt('What is my favorite season?')
// switch (myseason) {
//     case 'winter':
//     case 'summer':
//         alert('not here ofcourse!!');
//         break;
//     case 'spring':
//         alert('mmm only for BBQ picnic');
//         break;
//     case 'fall':
//     case 'autumn':
//         alert('sure ..it seems you know me');
//         break;

// }
6//
function qustion6() {
    var i = 0;
    var rightnum = 27
    var guessnum = prompt('try to pick number between 20 to 30')
    // for(var i=0; i<4;i++){
    while (i < 4) {
        if (rightnum == guessnum) {
            alert('its right !!!,thats pretty amazing!!!the right number is 27 ');
            i = 4;
            score++;
        }
        else if (guessnum >= 20 && guessnum <= 24) {
            alert('its too low, try with a larger number');
            guessnum = prompt('try again , please');

            if (i == 4) { alert('No :( ,You have lost all your attempts ,the right number is 27'); }
            i++;
        }
        else if (guessnum == 29 || guessnum == 30) {
            alert('its too high, try with a smaller number');
            guessnum = prompt('try again , please');

            if (i == 4) { alert('No :( ,You have exhausted all your attempts ,the right number is 27'); }
            i++;
        }
        else {
            alert('pretty much close ,keep trying ');
            guessnum = prompt('you are doing well ,try again!!');

            if (i == 4) { alert('No :( ,You have exhausted all your attempts , the right number is 27'); }
            i++;
        }
    }
}
7//
function qustion7() {
    var j = 0
    var bestmovie = prompt('Could you try to guess a name of one of my favourite movies?').toLowerCase();
    var movieslist = ['interstellar', 'inception', 'beautiful mind', 'pay it forward', 'parasite', '12 angry men'];
    // var lowerbestmovie = bestmovie.toLowerCase();
    if (bestmovie === movieslist[0] || bestmovie === movieslist[1] || bestmovie === movieslist[2] || bestmovie === movieslist[3] || bestmovie === movieslist[4] || bestmovie === movieslist[5]) {
        alert('Its totally right ,you gussed it :) !!!')
        score++;
    }
    else {
        while ((bestmovie !== movieslist[0] || bestmovie !== movieslist[1] || bestmovie !== movieslist[2] || bestmovie !== movieslist[3] || bestmovie !== movieslist[4] || bestmovie !== movieslist[5]) && j <= 6) {
            bestmovie = prompt('thats wrong :( ,take another attempt');
            // if (j>6){alert}
            j++;

        }
        alert('No :( ,You have lost all your attempts ');
    }
    alert('these are my best movies list  : ' + movieslist[0] + ', ' + movieslist[1] + ', ' + movieslist[2] + ', ' + movieslist[3] + ', ' + movieslist[4] + ', ' + movieslist[5])
}
// var movieslist = ['interstellar', 'inception', 'beautiful mind', 'pay it forward', 'parasite', '12 angry men'];

    // for (let i = 0; i < 6; i++) {

    //     var bestMovie = prompt('Could you try to guess a name of one of my favourite movies?').toLowerCase();
    //     for (let x = 0; x < movieslist.length; x++) {

    //         if (bestMovie === movieslist[x]) {
    //             alert("Thats right");
    //             i=10;
    //             score++;
    //         } 



    //     }

    //     if (i==5) {
    //         alert('No :( ,You have lost all your attempts ');
    //     }

    // }
daystaute();
qustion1();
qustion2();
qustion3;
qustion4();
qustion5();
qustion6();
qustion7();

alert('Your Final Score Is: ' + score);
alert('I hope that you enjoid it bye bye , ' + username)
// we call it indexes , so that its start from 0,and we could add the value in it
// function called typeof for spicify the kind of data that i want o put in array
// var numlist =['1', '2','3','4'];
// var numindex= prompt('please add come number:')
// for (i=0;i<numlist.length;i++){
// if (numindex ===numindex[] )
// }