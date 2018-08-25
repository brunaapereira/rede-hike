Template.Comentario.helpers({
	usernameAutor: function() {
		var idAutor = this.autor;
		var autor = Meteor.users.findOne({_id: idAutor});
		return autor.username;
	}
})