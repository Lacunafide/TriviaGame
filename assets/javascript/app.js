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

