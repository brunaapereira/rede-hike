Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoForm) {
    if(Meteor.userId() !== null) {
      Posts.insert({
        texto: textoForm,
        autorId: Meteor.userId(),
        curtidas: []
      });
    }
  },
	"curtirPost": function(idPost) {
		Posts.update(idPost, {
			$addToSet: {
				curtidas: Meteor.userId()
			} 
		});
	},
	"descurtirPost": function(idPost) {
		Posts.update(idPost, {
			$pull: {
				curtidas: Meteor.userId()
			}
		})
	}
});