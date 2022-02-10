const questionDB= [
    {
        num: "1",
        question: "Q1. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Markup Language",
        d: "Hyperloop Markdown Language",
        correct: "a",
    },
    {
        num: "2",
        question: "Q2. What does CSS stand for?",
        a: "Centralised Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Centralised Simple Sheets",
        correct: "b",
    },
    {
        num: "3",
        question: "Q3. What year was JavaScript launched?",
        a: "1996",
        b: "1994",
        c: "1995",
        d: "1997",
        correct: "c",
    },
    {
        num: "4",
        question: "Q4. Which is not a Javascript framework?",
        a: "Angular",
        b: "React",
        c: "Meteor",
        d: "django",
        correct: "d",   
    },
    {
        num: "5",
        question: "Q5. Which of these is not frontend lanuages?",
        a: "HTML",
        b: "CSS",
        c: "Python",
        d: "Javascript",
        correct: "c",   
    }
];

const markedanswers = document.querySelectorAll('.answer')
const curr_question = document.getElementById('question')
const curr_que_num = document.getElementById('que_no')
const optA_text = document.getElementById('opt_a')
const optB_text = document.getElementById('opt_b')
const optC_text = document.getElementById('opt_c')
const optD_text = document.getElementById('opt_d')

const submitbutton = document.getElementById('submit')

let currentQueNum = 0
let score = 0

// functions

function load_question() {

    deselect()

    const currentData = questionDB[currentQueNum]
    curr_question.innerText = currentData.question
    optA_text.innerText = currentData.a
    optB_text.innerText = currentData.b
    optC_text.innerText = currentData.c
    optD_text.innerText = currentData.d
}

function deselect() {
    markedanswers.forEach( ans => ans.checked = false)
}

function getSelected() {
    let answer

    markedanswers.forEach(answerE => {
        if(answerE.checked) {
            answer = answerE.id
        }
    })

    return answer
}

// main code

load_question()

submitbutton.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === questionDB[currentQueNum].correct) {
            score=score+100
        }

        currentQueNum++

        if(currentQueNum < questionDB.length) {
            load_question()
        } 
        else {
            quiz.innerHTML = `<p><span style='font-family: Verdana, Geneva, Tahoma, sans-serif'><span style='font-size:40px'><span style='color: rgb(255, 255, 255)'>Thank You for playing.</span></span></span></p><br>
                <h2><span style='font-size:40px'><span style='font-family: Verdana, Geneva, Tahoma, sans-serif'><span style='color: rgb(255, 255, 255)'>You scored ${score} out of ${(questionDB.length)*100}.</span></span></span></h2>
            `
            submit.innerHTML =`<div onclick="location.reload()">
            <span style='color: rgb(0, 0, 0)'>Play Again</span></div>`
        }
    }
})
