require('./Category');
module.exports = bookshelf.model('ProductAuthed', {
	tableName: 'products',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	category: function() {
		return this.belongsTo('Category', 'categoryId');
	},
    authorizedWhere: function(req){
        return this.where({id : 3 });
    }
});
