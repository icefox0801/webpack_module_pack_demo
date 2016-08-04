define(['./subC', './subD'], function (C, D) {
	console.log('Sub module B');
	return {
		name: 'Sub module B',
		C: C,
		D: D
	};
});