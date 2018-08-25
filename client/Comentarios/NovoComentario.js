Template.NovoComentario.events({
	"submit form": function (event, template) {
		event.preventDefault();
		var texto = event.target.texto.value;
		var idPost = template.data._id;

    Meteor.call("inserirComentario", texto, idPost);

    event.target.texto.value = "";
	} 
})