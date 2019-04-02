/*
Click to Start
Timer begins at 100 seconds and counts down
Player answers 10 questions
Once completed, player hits submit button
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong 
*/

//---------------------------------------------------------------

var questions = [{
        ques: "What color is Godzilla in all but two of his movies?",
        ans: ["Green", "Black", "Gray", 'Brown'],
        name: "originColor",
        correct: "Gray",
        divClass: ".originColor"
},
{
        ques: "Which monster is the protector of Earth and is friends with two fairies?",
        ans: ["Gozdilla", 'Mothra', "King Ghidorah", 'Rodan'],
        name: 'fairies',
        correct: 'Mothra',
        divClass: ".fairies"
},
{
        ques: "How many Mechagodzillas have there been?",
        ans: ['4', '5', '6', '7'],
        name: "mechaGod",
        correct: "4",
        divClass: ".mechaGod"
},
{
        ques: "What was the first Godzilla film?",
        ans: ['King Kong vs. Godzilla', 'Gojira', 'Godzilla vs Hedorah', 'Godzilla: Tokyo S.O.S'],
        name: 'firstFilm',
        correct: "Gojira",
        divClass: '.firstFilm'
},
{
        ques: "What Kaiju (giant monster) was Godzilla's ally in Godzilla vs. Gigan?",
        ans: ['Mothra', 'Rodan', 'Baragon', 'Anguirus'],
        name: "allyKaiju",
        correct: 'Anguirus',
        divClass: '.allyKaiju'
},
{
        ques: "When was the first Godzilla film made?",
        ans: ['1989','1954','1978','2000'],
        name: "firstYear",
        correct:'1954',
        divClass: '.firstYear'
},
{
        ques: "What year was Godzilla 2000: Millennium made in Japan?",
        ans: ['1999','2000','2001','2006'],
        name: 'millennium',
        correct: '1999',
        divClass: '.millennium'
},
{
        ques: "What was the second monster that Godzilla battled?",
        ans: ['Gorosaurus','Hedorah','Mothra','King Kong'],
        name: "secondKill",
        correct: 'King Kong',
        divClass: ".secondKill"
},
{
        ques: "What was the monster Godzilla faced in Godzilla vs. the Sea Monster?",
        ans: ['King Ghidorah','Mechagodzilla','Gigan','Ebirah'],
        name: "seaMonster",
        correct: 'Ebirah',
        divClass: '.seaMonster'
},
{
        ques: 'What Godzilla movie features the monster Gabara?',
        ans: ["Godzilla's Revenge", 'Godzilla vs Megaguirus','Destroy All Monsters','Terror of Mechagodzilla'],
        name: "gabara",
        correct: "Godzilla's Revenge",
        divClass: "gabara"
}]

//---------------------------------------------------------

var labels = ["first", "second", "third", "forth"];
var startGame = $("#startBtn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

var questionDisplay = function() {
$(".questions :not('#submit')").empty();
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/> <label for="' + labels[i] + '">' + questions[j].ans[i] + '</label> ');
}
$('.questions').prepend('<hr />');
}
}


var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#timeLeft").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;
        
        for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimeUp').append(correctAnswers);
    $('#wrongTimeUp').append(wrongAnswers);
    $('#timeUp').fadeIn(1000).show();

    clearInterval(timer);
    return;
}
}, 1000);

$('#submit').on('click', function() {
clearInterval(timer);
})
};


var gradeQuiz = $('#submit').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};


countdown();
$('.container').fadeOut(500);
$('#answers').show();
$('#correctAnswers').append(correctAnswers);
$('#wrongAnswers').append(wrongAnswers);

});