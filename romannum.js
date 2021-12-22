let romanList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XV: 40, X:10, IX:9, V:5, IV:4, I:1};

function arabicToRoman (number) {

    let roman = ""

    for(let num in romanList){
        while(number >= romanList[num]){
            
            number -= romanList[num]
            roman += num
            
        }
    }

    return roman
}

module.exports = arabicToRoman