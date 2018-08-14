Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoForm) {
    if(Meteor.userId() !== null) {
      Posts.insert({
        texto: textoForm,
        autorId: Meteor.userId()
      });
    }
  }
});