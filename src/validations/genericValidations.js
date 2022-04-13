const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const isAbsent = (value) => !value && typeof value !== 'number';
const lengthLess = (length, value) => value.length < length;
const emailInvalid = (email) => !emailRegEx.test(email);

module.exports = { isAbsent, lengthLess, emailInvalid };