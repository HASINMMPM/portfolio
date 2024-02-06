const form = document.getElementById("jsform");
const prenumber = document.getElementById("pre-number");
const secnumber = document.getElementById("sec-number");
const result = document.getElementById("result");

form.addEventListener("submit", function (calculation) {
    calculation.preventDefault();

    const numone = parseInt(prenumber.value);
    const numsec = parseInt(secnumber.value);
        const plusresult = numone + numsec;
        result.textContent = `${plusresult}`;
    console.log(plusresult);
});
