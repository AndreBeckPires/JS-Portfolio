
function Mostrar(id)
{
    var x = document.getElementById(id);
    x.style.display = "block";
    if(id === "Eu")
    {
        var y = document.getElementById("Jogo1")
        y.style.display = "none";
        var z = document.getElementById("Jogo2")
        z.style.display = "none";
        var a = document.getElementById("Jogo3")
        a.style.display = "none";
        var b = document.getElementById("Jogo4")
        b.style.display = "none";
    }
    if(id === "Jogo1")
    {
        var y = document.getElementById("Eu")
        y.style.display = "none";
        var z = document.getElementById("Jogo2")
        z.style.display = "none";
        var a = document.getElementById("Jogo3")
        a.style.display = "none";
        var b = document.getElementById("Jogo4")
        b.style.display = "none";
    }
    if(id === "Jogo2")
    {
        var y = document.getElementById("Jogo1")
        y.style.display = "none";
        var z = document.getElementById("Eu")
        z.style.display = "none";
        var a = document.getElementById("Jogo3")
        a.style.display = "none";
        var b = document.getElementById("Jogo4")
        b.style.display = "none";
    }
    if(id === "Jogo3")
    {
        var y = document.getElementById("Jogo1")
        y.style.display = "none";
        var z = document.getElementById("Jogo2")
        z.style.display = "none";
        var a = document.getElementById("Eu")
        a.style.display = "none";
        var b = document.getElementById("Jogo4")
        b.style.display = "none";
    }
    if(id === "Jogo4")
    {
        var y = document.getElementById("Jogo1")
        y.style.display = "none";
        var z = document.getElementById("Jogo2")
        z.style.display = "none";
        var a = document.getElementById("Jogo3")
        a.style.display = "none";
        var b = document.getElementById("Eu")
        b.style.display = "none";
    }

}