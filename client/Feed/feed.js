Template.Feed.events({
	"submit form": function(event, template) {
		event.preventDefault();
		var textoForm = event.target.texto.value
		console.log(textoForm);
		Posts.insert({
			texto: textoForm
		});
		event.target.texto.value = "";
	}
});

Template.Feed.helpers({
	posts: function() {
		var collectionPosts = Posts.find().fetch();
		return collectionPosts;
	}
});
