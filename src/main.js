var A = require('./subA');
var B = require('./subB');
console.log('Main module');
module.exports = {
	A: A,
	B: B
};