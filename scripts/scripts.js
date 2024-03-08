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