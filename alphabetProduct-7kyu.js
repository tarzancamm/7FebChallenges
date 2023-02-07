// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

const alphabet = (ns) => {
  let sorted = ns.sort((a, b) => a - b);
  let a = sorted[0];
  let b = sorted[1];
  let ab = a * b;
  let c = ab === sorted[2] ? sorted[3] : sorted[2]
  let bc = b*c;
  let cd = sorted[sorted.length - 1]

  let d = cd/c;
  return d
};

console.log(alphabet([2, 6, 7, 3, 14, 35, 15, 5]));