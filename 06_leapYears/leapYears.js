const leapYears = function(year) {
    // checks if year is divisible by 4 and not by 100, and returns true if so.
    if (year % 4 === 0 && year % 100 !== 0) return true;
    // checks if year is divisible by 100 and 400, and return true if so.
    else if (year % 100 === 0 && year % 400 === 0) return true;
    // returns false if neither condition was met
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
