function factorialRecursive(n) {
  if(n === 2) {
    return n;
  }
  return n*factorialRecursive(n-1);
}
function factorialIterative(n) {
  let answer = 1;
  if(n === 2) {
    answer = 2;
  }
  for(let i=2; i<=n; i++) {
    answer *= i;
  }
  return answer;
}

factorialRecursive(5);
factorialIterative(5);
