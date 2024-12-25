function fibonacci(n) {
    if(n < 0){
      return 'OOPS'
    }
    if (n === 0 || n === '0') {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
  
    let a = 0;
    let b = 1;
  
    for (let i = 2; i <= n; i++) {
      let next = a + b;
      a = b;
      b = next;
    }
  
    return b;
  }

// еще две задачи
module.exports = fibonacci;
