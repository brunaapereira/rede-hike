Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoForm) {
		Posts.insert({
			texto: textoForm,
			autorId: Meteor.userId()
		});
	}
});