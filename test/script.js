let names = ["bob", "jill", "greg", "john", "anne"];

let result = names

    .filter(x => x[0] === x[x.length - 1])

    .reduce((res, cur) => res + " " + cur, "[") + " ]";

console.log(result);
