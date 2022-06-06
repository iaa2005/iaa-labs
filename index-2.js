
$(document).ready(async function() {

    let date1 = new Date("06/06/2022");
    let date2 = Date.now();
    let Difference_In_Time = date2 - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    let days = Math.floor(Difference_In_Days);

    let delay = 0.5;
    for (let i = 0; i < 270; i++) {
        if (days <= 0) {
            $(".calendar-div").append(`<div class="celum trans"></div>`);
        } else {
            $(".calendar-div").append(`<div class="celum" style="animation: opacity-00-100; animation-duration: 0.2s; animation-iteration-count: 1; animation-delay: ${delay}s; animation-fill-mode: forwards; animation-timing-function: ease-out;"></div>`);
        }
        delay += 0.05;
        days--;
    }
});