// No.11

function swapValue(a, b) {
    console.log("Before Swap => a=" + a + ", b=" + b);
    [b, a] = [a, b];
    console.log("After Swap => a=" + a + ", b=" + b);
  }
  
  swapValue(9, 5);