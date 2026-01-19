// This is script.js

const qaData = {
    "toot": "Yuck,why are you farting!?!",
    "what is css": "CSS styles websites.",
    "what is javascript": "JavaScript makes websites interactive."
};

function answerQuestion() {
    const question = document.getElementById("questionInput").value.toLowerCase().trim();
    const output = document.getElementById("answerOutput");

    if (qaData[question]) {
        output.textContent = qaData[question];
    } else {
        output.textContent = "I don't know the answer to that question.";
    }
}

// Example: your converter & calculator code can also go here
