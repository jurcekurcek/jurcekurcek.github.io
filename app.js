
function days_between(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay) - 1;

    return diffInDays;
}

window.addEventListener('load', function () {
    document.getElementById("counter").innerHTML = days_between("3/3/2022", new Date());
    console.log(new Date().getDate())
})
