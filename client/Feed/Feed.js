Template.Feed.helpers({
	posts: function() {
		var collectionPosts = Posts.find().fetch().reverse();
		return collectionPosts;
	}
});
