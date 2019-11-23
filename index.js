require("./package.json");
console.log(
  require.cache
  // JSON.parse(JSON.stringify(require.cache))
)