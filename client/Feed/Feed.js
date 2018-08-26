Template.Feed.onCreated(function() {
	Meteor.subscribe("posts");
});
Meteor.subscribe("usuarios");

Template.Feed.helpers({
	posts: function() {
		var collectionPosts = Posts.find().fetch().reverse();
		return collectionPosts;
	}
});
