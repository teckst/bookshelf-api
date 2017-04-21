let HowhapList = require('howhap-list');
let format = require('./format');
module.exports = function(req, res, urlPieces, model, config) {
	let list = new HowhapList(
		null,
		{
			availableErrors: config.errors
		}
	);

	model.set(req.body);
	return model.save().then(function(savedModel) {
		res.json(format(savedModel, req._meta));
	})
	.catch(function(err) {
		list.add('UNKNOWN', {
			message: err.toString()
		});
		res.status(400).json(list.toObject());
	})
	.then(function() {
		return Promise.resolve({
			urlPieces: urlPieces,
			model: model
		});
	});
};
