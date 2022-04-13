const isAbsent = (value) => !value && typeof value !== 'number';
const lengthLess = (length, value) => value.length < length;

module.exports = { isAbsent, lengthLess };