// Text1Phase Value

Text1Phase = 0;

//


// Backward Button Funcation Settings

function BackwardForText1() {
    Text1 = document.getElementById('Text1');
    if (Text1Phase === 0) {
        Text1.innerHTML = '10';
        Text1Phase = 10;
    }
    else if (Text1Phase === 10) {
        Text1.innerHTML = '9';
        Text1Phase = 9;
    }
    else if (Text1Phase === 9) {
        Text1.innerHTML = '8';
        Text1Phase = 8;
    }
    else if (Text1Phase === 8) {
        Text1.innerHTML = '7';
        Text1Phase = 7;
    }
    else if (Text1Phase === 7) {
        Text1.innerHTML = '6';
        Text1Phase = 6;
    }
    else if (Text1Phase === 6) {
        Text1.innerHTML = '5';
        Text1Phase = 5;
    }
    else if (Text1Phase === 5) {
        Text1.innerHTML = '4';
        Text1Phase = 4;
    }
    else if (Text1Phase === 4) {
        Text1.innerHTML = '3';
        Text1Phase = 3;
    }
    else if (Text1Phase === 3) {
        Text1.innerHTML = '2';
        Text1Phase = 2;
    }
    else if (Text1Phase === 2) {
        Text1.innerHTML = '1';
        Text1Phase = 1;
    }
    else if (Text1Phase === 1) {
        Text1.innerHTML = '0';
        Text1Phase = 0;
    }
}

//



// Random Button Funcation Settings

function RandomForText1(min, max) {
    Text1 = document.getElementById('Text1');
    Text1Phase = Math.floor(Math.random() * 11);
    Text1.innerHTML = Text1Phase;
}

//



// Forward Button Funcation Settings

function ForwardForText1() {
    Text1 = document.getElementById('Text1');
    if (Text1Phase === 0) {
        Text1.innerHTML = '1';
        Text1Phase = 1;
    }
    else if (Text1Phase === 1) {
        Text1.innerHTML = '2';
        Text1Phase = 2;
    }
    else if (Text1Phase === 2) {
        Text1.innerHTML = '3';
        Text1Phase = 3;
    }
    else if (Text1Phase === 3) {
        Text1.innerHTML = '4';
        Text1Phase = 4;
    }
    else if (Text1Phase === 4) {
        Text1.innerHTML = '5';
        Text1Phase = 5;
    }
    else if (Text1Phase === 5) {
        Text1.innerHTML = '6';
        Text1Phase = 6;
    }
    else if (Text1Phase === 6) {
        Text1.innerHTML = '7';
        Text1Phase = 7;
    }
    else if (Text1Phase === 7) {
        Text1.innerHTML = '8';
        Text1Phase = 8;
    }
    else if (Text1Phase === 8) {
        Text1.innerHTML = '9';
        Text1Phase = 9;
    }
    else if (Text1Phase === 9) {
        Text1.innerHTML = '10';
        Text1Phase = 10;
    }
    else if (Text1Phase === 10) {
        Text1.innerHTML = '0';
        Text1Phase = 0;
    }
}

//