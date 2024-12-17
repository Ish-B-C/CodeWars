function squareDigits(num){
    let newNum = num.toString().split('')
    for (let i=0; i<newNum.length; i++) {
      newNum[i] = newNum[i]*newNum[i]
    }
      return Number(newNum.join(''));
    }
    console.log(squareDigits(245));
    