function Scissor()
{
    document.getElementById("result").innerHTML="Scissor called"; 
}
function Paper()
{
    document.getElementById("result").innerHTML="Paper called";  
}
function Rock()
{
    Array arr=[Scissor,Paper,Rock];
    var a= random*arr;
    a=parseInt(a);
    document.getElementById("result").values =a;
    display();
 
}
function display()
{
    if(a == "Scissors")
    {
        document.getElementById("result").innerHTML="ok";  
    }

}

