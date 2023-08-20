// ---------------------------------------------------------------
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let timer = false;

startBtn.addEventListener("click", function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener("click", function () {
    timer = false;
});

resetBtn.addEventListener("click", function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        second++;

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
        }

        let hrString = hour.toString().padStart(2, "0");
        let minString = minute.toString().padStart(2, "0");
        let secString = second.toString().padStart(2, "0");

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;

        setTimeout(stopWatch, 1000); // Update every second
    }
}