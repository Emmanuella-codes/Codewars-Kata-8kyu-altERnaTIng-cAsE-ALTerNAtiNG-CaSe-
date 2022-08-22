String.prototype.toAlternatingCase = function () {
  return this.split("").map((x) => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
  .join("");
}
console.log("hello WORLD".toAlternatingCase())
