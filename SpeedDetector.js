function checkSpeed() {
    const speed = parseInt(prompt("Enter the speed of the car:"));
    speed = parseInt(speed);
    const speedLimit = 70;
    const kmOver = 5;

    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmOver);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

checkSpeed();