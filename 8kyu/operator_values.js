function basicOp(operation, value1, value2){
    if (operation =="*") {
      return value1*value2;
    }
    else if (operation == "+") {
       return value1+value2;
     }
   else if(operation == "-") {
        return value1-value2;
      }
   else if (operation == "/"){
      return value1/value2;
    }
    else {
      return 'Invalid operator'
    }
  }
  console.log(basicOp('*', 8, 3));
  
  