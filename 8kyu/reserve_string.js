function solution(str){
  let sum=''
  for (let i = str.length-1; i>=0; i--){
    sum=sum + str[i]
  }
  return sum
}
