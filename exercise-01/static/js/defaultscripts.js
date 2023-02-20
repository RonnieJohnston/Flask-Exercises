function showDateTime() 
{
    let today = new Date();
    let month = today.getMonth();

    let monthWord = new Array('January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December');

    document.getElementById('date-label').innerHTML = "Current time is: " + today.getHours() + ":" +
    today.getMinutes() + ":" + today.getSeconds() + ".  Today is: " + monthWord[month] + " " + today.getDate() + ", " + today.getFullYear() + ".";
}