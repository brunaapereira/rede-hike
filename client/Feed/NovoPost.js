Template.NovoPost.events({
	"submit form": function(event, template) {
		event.preventDefault();
		var textoForm = event.target.texto.value

		console.log(textoForm);
		console.log(Meteor.userId());

		Meteor.call("inserirPost", textoForm);
		event.target.texto.value = "";
	}
});
