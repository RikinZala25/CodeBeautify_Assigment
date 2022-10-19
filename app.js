// total time to be used at the end of the program.
let totalTime = 0;

// calculate time function for calculating each time according to given problem statements
function calculateTime(sH, sM, sD, eH, eM, eD, dH, dM, t) {

    let start = moment.utc(sH + ' ' + sM + ' ' + sD, "HH mm A");
    let end = moment.utc(eH + ' ' + eM + ' ' + eD, "HH mm A");

    let d = moment.duration(end.diff(start));

    let s = moment.utc(+d).format('HH') * 60;
    s = s - (dH * 60);
    let w = moment.utc(+d).format('mm');
    w = w - dM;

    let total = Number(s) + Number(w);

    let time = toHoursAndMinutes(total);

    document.getElementById(t).innerText = time;

    totalTime += total;
}

// Function to convert total minutes to hours and respective minutes -- credits: stack-overflow.
function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${padToTwoDigits(hours)}.${padToTwoDigits(minutes)}`;
}

function padToTwoDigits(num) {
    return num.toString().padStart(2, '0');
}

// function calling for every day in consideration.
function calling(sTH, sTM, sTP, eTH, eTM, eTP, bTH, bTM, dayName) {

    let pass = false;
    let startTimeHour = parseInt($("#form1 input[name=" + sTH + "]").val());
    let startTimeMin = parseInt($("#form1 input[name=" + sTM + "]").val());
    let startTimePeriod = $('#' + sTP + '').find(":selected").text();
    let endTimeHour = parseInt($("#form1 input[name=" + eTH + "]").val());
    let endTimeMin = parseInt($("#form1 input[name=" + eTM + "]").val());
    let endTimePeriod = $('#' + eTP + '').find(":selected").text();
    let breakTimeHour = parseInt($("#form1 input[name=" + bTH + "]").val());
    let breakTimeMin = parseInt($("#form1 input[name=" + bTM + "]").val());

    // to generally consider 0 value if input is not given
    if (startTimeHour == 0 || startTimeHour == "") {
        startTimeHour = 0;
        pass = true;
    }
    if (startTimeMin == 0 || startTimeMin == "") {
        startTimeMin = 00;
        pass = true;
    }
    if (endTimeHour == 0 || endTimeHour == "") {
        endTimeHour = 0;
        pass = true;
    }
    if (endTimeMin == 0 || endTimeMin == "") {
        endTimeMin = 00;
        pass = true;
    }
    if (breakTimeHour == 0 || breakTimeHour == "") {
        breakTimeHour = 0;
        pass = true;
    }
    if (breakTimeMin == 0 || breakTimeMin == "") {
        breakTimeMin = 00;
        pass = true;
    }

    if (pass) {
        calculateTime(startTimeHour, startTimeMin, startTimePeriod, endTimeHour, endTimeMin, endTimePeriod,
            breakTimeHour, breakTimeMin, dayName);
    }

}

function calculate() {

    // calling function for every day considered
    calling("monSTH", "monSTM", "monSTP", "monETH", "monETM", "monETP", "monBTH", "monBTM", "monTime");
    calling("tueSTH", "tueSTM", "tueSTP", "tueETH", "tueETM", "tueETP", "tueBTH", "tueBTM", "tueTime");
    calling("wedSTH", "wedSTM", "wedSTP", "wedETH", "wedETM", "wedETP", "wedBTH", "wedBTM", "wedTime");
    calling("thrSTH", "thrSTM", "thrSTP", "thrETH", "thrETM", "thrETP", "thrBTH", "thrBTM", "thrTime");
    calling("friSTH", "friSTM", "friSTP", "friETH", "friETM", "friETP", "friBTH", "friBTM", "friTime");
    calling("satSTH", "satSTM", "satSTP", "satETH", "satETM", "satETP", "satBTH", "satBTM", "satTime");
    calling("sunSTH", "sunSTM", "sunSTP", "sunETH", "sunETM", "sunETP", "sunBTH", "sunBTM", "sunTime");

    let totalHours = toHoursAndMinutes(totalTime);
    document.getElementById("totalHrs").innerText = totalHours;

    // will be using at last to enforce clean of totalTime usage so that it won't append its answer to next inputs.
    totalTime = 0;
}

// Clear Function

function clearAll() {

    function clearInp(sTH, sTM, eTH, eTM, bTH, bTM, dayName) {
        $("#form1 input[name=" + sTH + "]").val('');
        $("#form1 input[name=" + sTM + "]").val('');
        $("#form1 input[name=" + eTH + "]").val('');
        $("#form1 input[name=" + eTM + "]").val('');
        $("#form1 input[name=" + bTH + "]").val('');
        $("#form1 input[name=" + bTM + "]").val('');
        document.getElementById(dayName).innerText = "0.00";
    }

    clearInp("monSTH", "monSTM", "monETH", "monETM", "monBTH", "monBTM", "monTime");
    clearInp("tueSTH", "tueSTM", "tueETH", "tueETM", "tueBTH", "tueBTM", "tueTime");
    clearInp("wedSTH", "wedSTM", "wedETH", "wedETM", "wedBTH", "wedBTM", "wedTime");
    clearInp("thrSTH", "thrSTM", "thrETH", "thrETM", "thrBTH", "thrBTM", "thrTime");
    clearInp("friSTH", "friSTM", "friETH", "friETM", "friBTH", "friBTM", "friTime");
    clearInp("satSTH", "satSTM", "satETH", "satETM", "satBTH", "satBTM", "satTime");
    clearInp("sunSTH", "sunSTM", "sunETH", "sunETM", "sunBTH", "sunBTM", "sunTime");

    totalTime = 0;
    document.getElementById("totalHrs").innerText = "0.00";
}