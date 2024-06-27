/*addition function*/
function add() {
    var a = 0, b = 0;
    a = cal.disp.value;
    b = a.charAt(a.length - 1);

    if (b == '+' || b == '-' || b == '*' || b == '/') {
        cal.disp.value = a.substring(0, a.length - 1);
        cal.disp.value += '+';
    }
    else {
        cal.disp.value += '+';
    }
}

/*Substraction function*/
function sub() {
    var a = 0, b = 0;
    a = cal.disp.value;
    b = a.charAt(a.length - 1);

    if (b == '+' || b == '-' || b == '*' || b == '/') {
        cal.disp.value = a.substring(0, a.length - 1);
        cal.disp.value += '-';
    }
    else {
        cal.disp.value += '-';
    }
}

/*multiplication function*/
function mult() {
    var a = 0, b = 0;
    a = cal.disp.value;
    b = a.charAt(a.length - 1);

    if (b == '+' || b == '-' || b == '*' || b == '/') {
        cal.disp.value = a.substring(0, a.length - 1);
        cal.disp.value += '*';
    }
    else {
        cal.disp.value += '*';
    }
}

/*division function*/
function div() {
    var a = 0, b = 0;
    a = cal.disp.value;
    b = a.charAt(a.length - 1);

    if (b == '+' || b == '-' || b == '*' || b == '/') {
        cal.disp.value = a.substring(0, a.length - 1);
        cal.disp.value += '/';
    }
    else {
        cal.disp.value += '/';
    }
}