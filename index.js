function genera8() {
    var passgene = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
        "+", "-", "=", "{", "}", "[", "]", "|", "/",
        ":", ";", "'", "<", ">", ",", ".", "?",
        "$", "£", "€",  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]; 

    var passgen = "";
    for (i=0; i < 8; i++){
        passgen += passgene[Math.floor(Math.random() * passgene.length)];
    }

    genera8.style,backgroundColor = "red";

    document.getElementById('passgen').innerHTML = passgen;
    var generatore1 = document.getElementsByClassName('layer1')[0];
    var generatore2 = document.getElementsByClassName('layer2')[0];
    var generatore3 = document.getElementsByClassName('layer3')[0];
    generatore1.style.backgroundColor = "orange";
    generatore2.style.backgroundColor = "";
    generatore3.style.backgroundColor = "";
}

function genera12() {
    var passgene = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
        "+", "-", "=", "{", "}", "[", "]", "|", "/",
        ":", ";", "'", "<", ">", ",", ".", "?",
        "$", "£", "€",  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]; 

    var passgen = "";
    for (i=0; i < 12; i++){
        passgen += passgene[Math.floor(Math.random() * passgene.length)];
    }

    document.getElementById('passgen').innerHTML = passgen;

    var generatore1 = document.getElementsByClassName('layer1')[0];
    var generatore2 = document.getElementsByClassName('layer2')[0];
    var generatore3 = document.getElementsByClassName('layer3')[0];
    generatore1.style.backgroundColor = "";
    generatore2.style.backgroundColor = "paleturquoise";
    generatore3.style.backgroundColor = "";
}

function genera16() {
    var passgene = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
        "+", "-", "=", "{", "}", "[", "]", "|", "/",
        ":", ";", "'", "<", ">", ",", ".", "?",
        "$", "£", "€",  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]; 

    var passgen = "";
    for (i=0; i < 16; i++){
        passgen += passgene[Math.floor(Math.random() * passgene.length)];
    }

    document.getElementById('passgen').innerHTML = passgen;

    var generatore1 = document.getElementsByClassName('layer1')[0];
    var generatore2 = document.getElementsByClassName('layer2')[0];
    var generatore3 = document.getElementsByClassName('layer3')[0];
    generatore1.style.backgroundColor = "";
    generatore2.style.backgroundColor = "";
    generatore3.style.backgroundColor = "green";
}