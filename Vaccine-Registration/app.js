const uid = () => {
    let tim = Date.now().toString(36).toLocaleUpperCase();
    let ran = parseInt(Math.random() * Number.MAX_SAFE_INTEGER);
    ran = ran.toString(36).slice(0, 12).padStart(12, '0').toLocaleUpperCase();
    return ''.concat(tim, '-', ran);
}
console.log(uid());

// //Current date display
let objToday = new Date(),
domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1));
return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
dayOfMonth = ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
curMonth = months[objToday.getMonth()],
curYear = objToday.getFullYear();
let today = dayOfMonth + " " + curMonth + " " + curYear;
