Template.NovoPost.onCreated(function(){
	this.urlImagem = new ReactiveVar();
});

Template.NovoPost.events({
	"submit form": function(event, template) {
		event.preventDefault();
		var textoForm = event.target.texto.value;
		var urlImagem = template.urlImagem.get();

		Meteor.call("inserirPost", textoForm, urlImagem);

		event.target.texto.value = "";
	},
	"change .myFileInput": function(event, template) {
    FS.Utility.eachFile(event, function(file) {
    	Images.insert(file, function (err, fileObj) {
        if (err) {
      		// handle error
        } else {
          template.urlImagem.set("/cfs/files/images/" + fileObj._id);
          }
      });
    });
  }
});
