module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.match(/\w+/g)
}