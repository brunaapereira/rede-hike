Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoForm, urlImagem) {
    if(Meteor.userId() !== null && textoForm) {
      Posts.insert({
        texto: textoForm,
        autorId: Meteor.userId(),
        curtidas: [],
        imagem: urlImagem
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