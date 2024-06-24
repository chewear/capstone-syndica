var x = document.getElementById("navigation-container");

function open_nav()
{
    if(x.style.display != "flex"){
        x.style.display = "flex";
    }
    else {
        x.style.display = "none";
    }
}
