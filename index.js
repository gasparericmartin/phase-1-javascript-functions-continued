function saturdayFun(first = "roller-skate") {
    return `This Saturday, I want to ${first}!`
}

function mondayWork(parameter = "go to the office") {
    return `This Monday, I will ${parameter}.`
}

function wrapAdjective(p1 = '*') {
    return function(p2 = 'special') {
        return `You are ${p1}${p2}${p1}!`
    }
}