Template.Post.onCreated(function() {
	Meteor.subscribe("comentarios", this.data._id);
})

Template.Post.helpers({
	usernameAutor: function() {
		var autorId = this.autorId;
		var autor = Meteor.users.findOne({_id: autorId});
		return autor.username;
	}, 
	numeroCurtidas: function() {
		return this.curtidas.length;
	},
	userCurtiu: function () {
		var curtidas = this.curtidas;
		var posicao = curtidas.indexOf(Meteor.userId());

		if(posicao === -1) {
			return false;
		} else {
			return true;
		}
	},
	comentarios: function() {
		return Comentarios.find({post: this._id}).fetch();
	},

	eAutor: function() {
		var autorId = this.autorId;
		return autorId === Meteor.userId();
	}
});

Template.Post.events({
	"click .like-button": function(event, template){
		Meteor.call("curtirPost", template.data._id)
	},
	"click .dislike-button": function(event, template){
		Meteor.call("descurtirPost", template.data._id)
	},
	"click .remove-button": function(event, template){
		Meteor.call("removerPost", template.data._id)
	}
})