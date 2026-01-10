const quiz = [
    {
        q: "Which keyword is used to declare a variable in JavaScript?",
        o: ["var", "let", "const", "All of the above"],
        a: 3
    },
    {
        q: "What is the output of: console.log(typeof null);",
        o: ["null", "object", "undefined", "number"],
        a: 1
    },
    {
        q: "Which symbol is used for single-line comments in JavaScript?",
        o: ["<!-- -->", "/* */", "//", "**"],
        a: 2
    },
    {
        q: "Which method is used to convert JSON string into JavaScript object?",
        o: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "parse.JSON()"],
        a: 0
    },
    {
        q: "What will be the output of: console.log(2 + '2');",
        o: ["4", "22", "NaN", "Error"],
        a: 1
    },
    {
        q: "Which function is used to print output in the browser console?",
        o: ["print()", "log()", "console.log()", "document.write()"],
        a: 2
    },
    {
        q: "How do you create a function in JavaScript?",
        o: [
            "function = myFunc()",
            "function myFunc()",
            "create myFunc()",
            "def myFunc()"
        ],
        a: 1
    },
    {
        q: "Which operator is used for strict equality?",
        o: ["==", "=", "!=", "==="],
        a: 3
    },
    {
        q: "Which method is used to add an element at the end of an array?",
        o: ["push()", "pop()", "shift()", "unshift()"],
        a: 0
    },
    {
        q: "What does NaN stand for?",
        o: ["Not a Name", "New and New", "Not a Number", "No any Number"],
        a: 2
    }

];

let index = 0;
let answer = new Array(quiz.length).fill(null);
let options = document.getElementsByName('option');

let time = 120; // 2 minutes
const timerElement = document.getElementById("timer");

const timer = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerElement.innerHTML =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    time--;

    if (time < 0) {
        clearInterval(timer);
        alert("Time Over!");
        Result();
    }
}, 1000);

options.forEach(ele => {
    ele.addEventListener('change', () => {
        answer[index] = Number(ele.value);
    });
});

function showQuestion() {
    document.querySelector('#question').innerHTML =
        `${index + 1}. ${quiz[index].q}`;

    document.querySelector("#option1").innerHTML = quiz[index].o[0];
    document.querySelector("#option2").innerHTML = quiz[index].o[1];
    document.querySelector("#option3").innerHTML = quiz[index].o[2];
    document.querySelector("#option4").innerHTML = quiz[index].o[3];

    document.querySelector('#prev').disabled = index === 0;

    options.forEach(opt => {
        opt.checked = Number(opt.value) === answer[index];
    });

    if (index === quiz.length - 1) {
        document.querySelector('#output').style.display = "block";
        document.querySelector('#next').style.display = "none";
    } else {
        document.querySelector('#output').style.display = "none";
        document.querySelector('#next').style.display = "block";
    }
}

function nextQuestion() {
    if (index < quiz.length - 1) {
        index++;
        showQuestion();
    }
}

function prevQuestion() {
    if (index > 0) {
        index--;
        showQuestion();
    }
}

function Result() {
    let score = 0;

    quiz.forEach((q, i) => {
        if (q.a === answer[i]) {
            score++;
        }
    });

    document.body.innerHTML = `Your Result Is = ${score}/${quiz.length}`;
}

showQuestion();
