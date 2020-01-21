let daysLeftUntilAnniversary = 1000;

let startYear = 2017;
let startMonth = 'May';
let startDay = 26;

let years = Math.floor(daysLeftUntilAnniversary / 365); // 2
let endYear = startYear + years;
let endMonth = startMonth;
let endDay = startDay;

daysLeftUntilAnniversary -= years * 365;
console.log(daysLeftUntilAnniversary); //270

while (daysLeftUntilAnniversary > 0) {
    switch (endMonth) {
        case 'January':
            if (daysLeftUntilAnniversary > 30) {
                daysLeftUntilAnniversary -= 31;
                endMonth = 'February';
            } else {

            }
            break;
        case 'February':
            daysLeftUntilAnniversary -= 29;
            endMonth = 'March';
            break;
        case 'March':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'April';
            break;
        case 'April':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'May';
            break;
        case 'May':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'June';
            break;
        case 'June':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'July';
            break;
        case 'July':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'August';
            break;
        case 'August':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'September';
            break;
        case 'September':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'October';
            break;
        case 'October':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'November';
            break;
        case 'November':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'December';
            break;
        case 'December':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'January';
            endYear++; // 2020
            break;
    }
}

console.log(daysLeftUntilAnniversary); //25

while (daysLeftUntilAnniversary > 0) {
    switch (endMonth) {
        case 'January':
            let leftOverDays = 31 - endDay;
            daysLeftUntilAnniversary -= leftOverDays;
            endDay = 1;
            endMonth = 'February';
            break;
        case 'February':
            endDay = daysLeftUntilAnniversary;
            daysLeftUntilAnniversary = 0;
            break;
        case 'March':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'April';
            break;
        case 'April':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'May';
            break;
        case 'May':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'June';
            break;
        case 'June':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'July';
            break;
        case 'July':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'August';
            break;
        case 'August':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'September';
            break;
        case 'September':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'October';
            break;
        case 'October':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'November';
            break;
        case 'November':
            daysLeftUntilAnniversary -= 30;
            endMonth = 'December';
            break;
        case 'December':
            daysLeftUntilAnniversary -= 31;
            endMonth = 'January';
            break;
    }
}
console.log('The Anniversary would be on the ' + endDay + 'th of ' + endMonth + ' ' + endYear);