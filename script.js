var sub_btn = document.getElementById("submit_btn");
sub_btn.addEventListener('click',
    calculate, false);

function calculate() {
    var fild1 = document.getElementById("name").value;
    var fild2 = document.getElementById("age").value;
    var fild3 = document.getElementById("horse").value;

    if (document.getElementById("select").value == "at") {
        var result = Math.round((parseInt(fild3) * 100) / parseInt(fild2) + 50);
        document.getElementById("answer").innerHTML = "Dear, " + fild1 + " your insuranse costs " + result + "$";
    } else if (document.getElementById("select").value == "hu") {
        var result = Math.round((parseInt(fild3) * 150) / parseInt(fild2) + 100);
        document.getElementById("answer").innerHTML = "Dear, " + fild1 + " your insuranse costs " + result + "$";
    } else(document.getElementById("select").value == "hu")

    {
        var result = Math.round((parseInt(fild3) * 120) / parseInt((fild2) + 3) + 50);
        document.getElementById("answer").innerHTML = "Dear, " + fild1 + " your insuranse costs " + result + "$";
    }


}