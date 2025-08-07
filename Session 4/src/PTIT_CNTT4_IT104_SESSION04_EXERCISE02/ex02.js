var scores = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
var average = scores.reduce(function (a, b) { return a + b; }, 0) / scores.length;
console.log("\u0110i\u1EC3m trung b\u00ECnh: ".concat(average.toFixed(2)));
