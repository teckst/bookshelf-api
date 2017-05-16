'use strict';

var HowhapList = require('howhap-list');
var format = require('./format');
module.exports = function (req, res, urlPieces, model, config) {
	var list = new HowhapList(null, {
		availableErrors: config.errors
	});

	return model.authorizedWrite(req).then(function () {
		model.set(req.body);
		return model.save();
	}).then(function (savedModel) {
		res.json(format(savedModel, req._meta));
	}).catch(function (err) {
		if (err === 'unauthorized') {
			list.add('UNKNOWN', {
				message: 'user is not authorized to write'
			});
			res.status(403).json(list.toObject());
			return;
		}
		list.add('UNKNOWN', {
			message: err.toString()
		});
		res.status(400).json(list.toObject());
	}).then(function () {
		return Promise.resolve({
			urlPieces: urlPieces,
			model: model
		});
	});
};