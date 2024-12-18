function filter_list(l) {
    let result= []
    for (let i=0; i<l.length; i++ ) {
      if (l[i] === Math.abs(l[i]) ) {
        result.push(l[i])
      }
    }
    return result;
  }