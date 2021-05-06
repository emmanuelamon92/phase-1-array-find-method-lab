function superbowlWin(record){
    for (const year of record){
        // console.log(year)
        for (const key in year){
            if(year[key] === 'W'){
                // console.log(year.year)
                return year.year
            }
        }
    }
}

console.log(record.find(superbowlWin));