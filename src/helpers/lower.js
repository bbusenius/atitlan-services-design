// Convert string to lower case.
module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#lower}} HERE {{/lower}}
  var lower = options.fn(this).toLowerCase();;
  return lower;
}
