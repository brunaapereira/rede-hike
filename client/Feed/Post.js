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
	}
});

Template.Post.events({
	"click .like-button": function(event, template){
		Meteor.call("curtirPost", template.data._id)
	},
	"click .dislike-button": function(event, template){
		Meteor.call("descurtirPost", template.data._id)
	}
})