function display(val) {        //display buttons

    document.getElementById('input').value += val
    output.style.transition ='0s';

    return val;
}

function cls() {             //clearScreen

    document.getElementById('input').value = "";
    document.getElementById('output').value = "";
    output.style.fontSize = '25px';
    output.style.transition ='0s';
}

function del() {            //backspace
    var value = document.getElementById("input").value;
    document.getElementById("input").value = value.slice(0, -1);
}

function result() {        //final result
    let x = document.getElementById('input').value;
    let y = eval(x);
    document.getElementById('output').value = y;
    output.style.transition ='all 0.3s ease-in-out';
    output.style.fontSize = '33px';
    output.style.color= "rgba(1, 1, 1, 0.788)";
    return y;
}
