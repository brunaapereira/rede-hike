Comentarios = new Mongo.Collection("comentarios");

Meteor.methods({
    "inserirComentario": function(textoComentario, idPost) {
        if(Meteor.userId() !== null) {
            Comentarios.insert({
                texto: textoComentario,
                post: idPost,
                autor: Meteor.userId()
            });
        }
    }
});