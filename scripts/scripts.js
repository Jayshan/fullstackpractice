function AlertMessage()
{
    alert("Random message");
    document.getElementById("p1").innerText = "The alert popped up";
}

function ChangeColourBlock(color)
{
    document.getElementById("clrblock").style.backgroundColor = color;
}

function ChangeCase(lettercase)
{
    let text = document.getElementById("p1").innerText;
    if (lettercase == "upper")
    {
        document.getElementById("p1").innerText = text.toUpperCase();
    }
    else if (lettercase == "lower")
    {
        document.getElementById("p1").innerText = text.toLowerCase();
    }
    else
    {
        document.getElementById("p1").innerText = "The case entered was wrong";
    }
}

//Seems like the array find() function always takes in a function with default built in parameters
//That's why you don't have to pass any parameters when calling myFunction
//value is the only required parameter, index and array are optional
function ArrayFind()
{
    const numbers = [4, 9, 16, 25, 29];
            let first = numbers.find(myFunction);
    
            document.getElementById("demo").innerHTML = "First number over 18 is " + first;
    
            function myFunction(value, index, array) {
            return value > 18;
            }

}
