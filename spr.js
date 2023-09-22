function Scissor() {
    var arr = ["Scissor", "Paper", "Rock"];
    var a = Math.floor(Math.random() * 3);
    document.getElementById("result").innerHTML = arr[a];
    display(a);
}
function Paper() {
    var arr = ["Scissor", "Paper", "Rock"];
    var a = Math.floor(Math.random() * 3);
    document.getElementById("result").innerHTML = arr[a];
    display(a);
}
function Rock() {
    var arr = ["Scissor", "Paper", "Rock"];
    var a = Math.floor(Math.random() * 3);
    document.getElementById("result").innerHTML = arr[a];
    display(a);
}
function Opponent()
{
    var arr = ["Scissor", "Paper", "Rock"];
    var a = Math.floor(Math.random() * 3);
    document.getElementById("result").innerHTML = arr[a];
    display(a);
}
function display(a) {
    if (a === 0) {
        document.getElementById("result").innerHTML = "Opponent chose Scissor";
    } else if (a === 1) {
        document.getElementById("result").innerHTML = "Opponent chose Paper";
    } else if (a === 2) {
        document.getElementById("result").innerHTML = "Opponent chose Rock";
    }
}