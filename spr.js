function Scissor() {
    var pick =0;
    var arr = ["Scissor", "Paper", "Rock"];
    var a = Math.floor(Math.random() * 3);
    document.getElementById("result").innerHTML = arr[a];
    display(a);
    if(pick==a)
    {
        document.getElementById("winner").innerHTML = "DRAW";
    }
    else if(a==1)
    {
        document.getElementById("winner").innerHTML = "YOU WON!!!";
    }
    else{
        document.getElementById("winner").innerHTML = "YOU LOSE!!!";
    }
}
function Paper() {
    var pick =1;
    var arr = ["Scissor", "Paper", "Rock"];
    var a = Math.floor(Math.random() * 3);
    document.getElementById("result").innerHTML = arr[a];
    display(a);
    if(pick==a)
    {
        document.getElementById("winner").innerHTML = "DRAW";
    }
    else if(a==2)
    {
        document.getElementById("winner").innerHTML = "YOU WON!!!";
    }
    else{
        document.getElementById("winner").innerHTML = "YOU LOSE!!!";
    }
}
function Rock() {
    var pick =2;
    var arr = ["Scissor", "Paper", "Rock"];                     // scissor=0 , paper =1  ,rock =2
    var a = Math.floor(Math.random() * 3);
    document.getElementById("result").innerHTML = arr[a];
    display(a);
    if(pick==a)
    {
        document.getElementById("winner").innerHTML = "DRAW";
    }
    else if(a==0)
    {
        document.getElementById("winner").innerHTML = "YOU WON!!!";
    }
    else{
        document.getElementById("winner").innerHTML = "YOU LOSE!!!";
    }
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