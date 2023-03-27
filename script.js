// Sleep In if it is not a weekday or we are on vacation
function sleepIn(weekday,vacation){
    return vacation || !weekday
}

// If both monkeys smiles we are in truble (true) or both of them does not smile else we are not in trouble
function monkeyTroubles(aSmile,bSmile) {
    return aSmile && bSmile || !aSmile && !bSmile
}

// Multiple given string with given number - quick version
function stringeTimes(str,n) {
    return str.repeat(n)
}

// Multiple given string with given number - for version
function stringeTimes2(str,n) {
    var result = ""
    for (var i=0;i<n;i++){
        result=result+str
    }
    return result
}

// if any of the value is 13 then don sum anything on the right
function luckySum(a,b,c) {
    var valArr = [a,b,c]
    var sum=0
    for (var index = 0; index < valArr.length; index++) {
        if (valArr[index]!==13) {
            sum+=valArr[index]
        }else{
            break
        }
    }
    return sum
}

// ticket if speeding on birthday get -5 km/h xd
function caughtSpeeding(speed, isBirthday) {
    if (isBirthday) {
        speed-=5
    }
    if (speed>=81) {
        return 2
    } else if (speed<=80 && speed>60){
        return 1
    }else{
        return 0
    }
}

//
function makeBricks(small,big,goal) {
    return small+big*5 >=goal
}