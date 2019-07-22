const color = "red";

switch (color) {
    case "red":
        console.log("red");
        break;
    case "green":
        console.log("green");
        break;
    case "blue":
        console.log("blue");
        break;
    case "yellow":
        console.log("yellow");
        break;
    case "orange":
        console.log("orange");
        break;
    default:
        console.log("blue");
        break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
        day = 'Sunday'
        break;
}

console.log(day);