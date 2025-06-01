//create function where do coversion hours to minutes,minutes to seconds
function convertTime(hours, minutes) {
    const minutesFromHours = hours * 60;
    const secondsFromMinutes = minutes * 60;
    return {
        minutes: minutesFromHours,
        seconds: secondsFromMinutes
    };
}
