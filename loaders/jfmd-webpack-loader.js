module.exports = function (source) {
  console.log(source)
  this.cacheable();
  return `module.exports = {"msg": "${source}"}`
}
