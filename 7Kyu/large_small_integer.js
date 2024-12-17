function highAndLow(numbers){
    let arr= numbers.split(' ').map(Number);
     let max = arr[0]
      let min = arr[0]
    for (i=1; i<arr.length; i++) {
       
        max = Math.max(max, arr[i]) 
        min = Math.min(min, arr[i])
    }     
    return `${max} ${min}`;
    }
    console.log(highAndLow('4 5 6 9 5 1'));
    